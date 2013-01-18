class ProfileTier2
  include Mongoid::Document
  include Mongoid::Timestamps

  field :is_hiv_positive, :type => String
  field :date_last_test, :type => Date
  field :date_first_diagnosed, :type => Date
  field :country_first_diagnosed, :type => String
  field :state_first_diagnosed, :type => String
  field :city_first_diagnosed, :type => String

  field :country_regular_check_up, :type => String
  field :state_regular_check_up, :type => String
  field :city_regular_check_up, :type => String

  field :date_last_check_up, :type => String
  field :is_antiretroviral, :type => Boolean
  field :date_antiretroviral, :type => Date
  field :myth_about_hiv, :type => String
  field :odd_about_hiv, :type => String

  field :user_id, :type => String
  referenced_in :user

  attr_accessible :is_hiv_positive, :date_last_test, :date_first_diagnosed, :country_first_diagnosed, 
    :state_first_diagnosed, :city_first_diagnosed, :date_last_check_up, :is_antiretroviral,
    :date_antiretroviral, :myth_about_hiv, :odd_about_hiv, :country_regular_check_up,:state_regular_check_up,:city_regular_check_up

  validates_presence_of :date_last_test, :if => :is_hiv_condition, :message => "Must give MMYYYY of last test"
  validates_inclusion_of :is_hiv_positive, :in => ["yes", "Not at my last test", "Not tested recently", "Prefer not to display"], :message => "Invalid value"

  def is_hiv_condition
    self.is_hiv_positive.eql? "Not at my last test"
  end
end