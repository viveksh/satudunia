class ProfileTier5
  include Mongoid::Document
  include Mongoid::Timestamps

  field :occupation, :type => String
  field :religion, :type => String
  field :is_drink_alcohol, :type => Boolean
  field :is_smoker, :type => Boolean
  field :music, :type => String
  field :books, :type => String
  field :movies, :type => String
  field :television, :type => String
  field :other_interest, :type => String

  field :user_id, :type => String
  referenced_in :user

  attr_accessible :occupation, :religion, :is_drink_alcohol, :is_smoker, :music,
    :book, :movies, :television, :other_interest
end