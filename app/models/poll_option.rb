class PollOption
  include Mongoid::Document

  field :option_desc, :type => String
  field :hit_counter, :type => Integer, :default => 0

  referenced_in :poll

  validates_presence_of :option_desc, :message => "Option can't be blank"
  validates_uniqueness_of :option_desc, :scope => :poll_id, :message => "Option already taken"
  
  attr_accessible :option_desc

  def hit!
    self.increment(:hit_counter => 1)
  end
end