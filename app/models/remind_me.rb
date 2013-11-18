class RemindMe
  include Mongoid::Document
  field :first_name, :type => String
  field :email, :type => String
  field :mobile_phone, :type => String
  field :state, :type => String
  field :email_reminder, :type =>Boolean
  field :phone_reminder, :type =>Boolean
  field :reminder_time_frame, :type => String

  
end
