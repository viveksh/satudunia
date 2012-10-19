class Contact
  include Mongoid::Document
  include Mongoid::Timestamps
  
  field :name, :type => String, :required => true
  field :email, :type => String, :required => true
  field :comment, :type => String, :required => true
  
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :on => :create
  validates_presence_of :name
  validates_presence_of :comment
end
