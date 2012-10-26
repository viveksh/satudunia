class ServiceProvider
  include Mongoid::Document
  
  paginates_per 25
  
  index :service_category_id
  
  referenced_in :service_category
  index :service_category_id
  
  field :name, :type => String
  field :description, :type => String
  field :url, :type => String
  
  xapit do 
    text :name
    text :description
    text :url
    field :service_category_id
  end
  
  validates_presence_of :name, :message => "Service name can't be blank"
  validates_uniqueness_of :name, :message => "Service name is already taken"
  
  attr_accessible :name, :description, :url
end
