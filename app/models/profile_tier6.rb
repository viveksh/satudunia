class ProfileTier6
  include Mongoid::Document
  include Mongoid::Timestamps

  field :preferred_role, :type => String
  field :preferred_into, :type => String
  
  field :user_id, :type => String
  referenced_in :user

  attr_accessible :preferred_role, :preferred_into
end