class StaticPage
  include Mongoid::Document
  include Mongoid::Timestamps

  field :static_key, :type => String
  field :static_content, :type => String

  validates_presence_of :static_key
  validates_uniqueness_of :static_key
  validates_inclusion_of :static_key, :in => %w( about tos eula privacy), :message => "Static page not registered yet."

  attr_accessible :static_content
end