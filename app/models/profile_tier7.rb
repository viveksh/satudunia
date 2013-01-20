class ProfileTier7
  include Mongoid::Document
  include Mongoid::Timestamps

  field :first_diagnosis, :type => String
  field :sex_hiv, :type => String
  field :relationship_hiv, :type => String
  field :disclosure, :type => String
  field :family_hiv, :type => String
  field :work_hiv, :type => String
  field :discrimination, :type => String
  field :disclosure_stigma, :type => String
  field :acceptance, :type => String
  field :treatment, :type => String
  field :humorous_odd, :type => String
  field :future_life, :type => String

  field :user_id, :type => String
  referenced_in :user

  attr_accessible :first_diagnosis, :sex_hiv, :relationship_hiv, :disclosure, :family_hiv,
    :work_hiv, :discrimination, :disclosure_stigma, :acceptance, :treatment, :humorous_odd,
    :future_life
end