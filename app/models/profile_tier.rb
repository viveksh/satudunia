class ProfileTier
  include Mongoid::Document
  include Mongoid::Timestamps

  field :tier_info, :type => String

  field :user_id, :type => String
  referenced_in :user

  attr_accessible :tier_info
end