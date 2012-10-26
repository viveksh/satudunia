class ServiceCategory
  include Mongoid::Document
  
  field :category_name, :type => String
  references_many :service_providers, :dependent => :destroy, :validate => false
  
  validates_presence_of :category_name, :message => "Category name can't be blank"
  validates_uniqueness_of :category_name, :message => "Category name is already taken"
  
  paginates_per 10
end
