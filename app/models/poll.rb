class Poll
  include Mongoid::Document
  include Mongoid::Timestamps
  include MongoidExt::Slugizer

  slug_key :poll_title, :unique => true

  field :poll_title, :type => String
  field :is_active, :type => Boolean, :default => true
  field :contributors_count, :type => Integer, :default => 0

  references_many :poll_options, :dependent => :destroy

  references_and_referenced_in_many :contributors, :class_name => "User"

  referenced_in :user

  validates_presence_of :poll_title, :message => "Poll title can't be blank"
  validates_uniqueness_of :poll_title, :message => "Poll title already taken"

  accepts_nested_attributes_for :poll_options

  attr_accessible :poll_title, :is_active

  paginates_per 25

  def self.create_new(params_poll, user_id)
    rv = ""

    poll = Poll.new(params_poll)
    poll.user_id = user_id

    if poll.valid? && poll.save
      Poll.create_options(param_poll, poll)
    else
      rv = poll.errors.first[1] rescue "Invalid poll data"
    end

    return poll, rv
  end

  def update_poll(params_poll)
    message = ""

    self.safe_update(%w[poll_title is_active], params_poll)

    if self.valid?
      self.poll_options.map(&:destroy)
      Poll.create_options(params_poll, self)
    else
      message = self.errors.first[1] rescue "Invalid poll data"
    end

    message
  end

  def take_action(user, option)
    message = ""
    poll_option = PollOption.find(option)
    if poll_option.present? && poll_option.poll == self && !self.contributors.include?(user)
      self.push_uniq(:contributor_ids => user.id)
      self.increment(:contributors_count => 1)
      poll_option.hit!
    else
      message = "Invalid poll option"
    end
    
    message
  end

  private
  def self.create_options(params_poll, poll)
    params_poll['poll_options'].each_with_index do |desc, i|
      option = PollOption.new(:option_desc => desc['option_desc'])
      option.poll_id = poll.id
      unless option.valid? && option.save
        rv = option.errors.first[1] rescue "Invalid option data"
      end
    end
  end
end