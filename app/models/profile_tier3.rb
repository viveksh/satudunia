class ProfileTier3
  include Mongoid::Document
  include Mongoid::Timestamps

  field :relationship_status, :type => String
  field :is_partner_known, :type => Boolean
  field :is_known_partner_hiv, :type => Boolean

  referenced_in :user

  attr_accessible :relationship_status, :is_partner_known, :is_known_partner_hiv
end