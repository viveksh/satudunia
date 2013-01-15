class ProfileSupport
  include Mongoid::Document
  include Mongoid::Timestamps

  field :about_me, :type => String
  
  field :location_country, :type => String
  field :location_state, :type => String
  field :location_city, :type => String

  field :birth_place_country, :type => String
  field :birth_place_state, :type => String
  field :birth_place_city, :type => String

  field :race, :type => String
  field :gender, :type => String

  field :birth_date, :type => Date
  field :show_age, :type => Boolean

  field :interested_in, :type => Array, :default => []
  field :languages, :type => Array, :default => []

  field :user_id, :type => String
  referenced_in :user

  attr_accessible :about_me, :location_country, :location_state, :location_city,
    :birth_place_city, :birth_place_state, :birth_place_country, :race, :gender,
    :birth_date, :show_age, :interested_in, :languages
end