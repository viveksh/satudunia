class ServiceProvider
  include Mongoid::Document
  include MongoidExt::Slugizer

  slug_key :name, :unique => true
  
  paginates_per 25
  
  index :service_category_id
  
  referenced_in :service_category
  index :service_category_id
  
  field :name, :type => String
  field :description, :type => String
  field :url, :type => String
  field :address, :type => String
  field :email, :type => String
  field :telephone, :type => String
  field :country, :type => String
  
  xapit do 
    text :name
    text :description
    text :url
    field :service_category_id
  end
  
  validates_presence_of :name, :message => "Service name can't be blank"
  validates_uniqueness_of :name, :message => "Service name is already taken"
  
  attr_accessible :name, :description, :url, :address, :email, :telephone, :country
end
