class ProfileTier4
  include Mongoid::Document
  include Mongoid::Timestamps

  field :height, :type => Float
  field :height_measurement, :type => String
  field :weight, :type => Float
  field :weight_measurement, :type => String
  field :body_build, :type => String

  field :user_id, :type => String
  referenced_in :user

  attr_accessible :height, :weight, :body_build, :height_measurement, :weight_measurement
end