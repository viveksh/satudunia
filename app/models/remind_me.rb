class RemindMe
  include Mongoid::Document
  include Mongoid::Timestamps
  field :first_name, :type => String
  field :email, :type => String
  field :mobile_phone, :type => String
  field :state, :type => String
  field :email_reminder, :type =>Boolean
  field :phone_reminder, :type =>Boolean
  field :reminder_time_frame, :type => String

  
  # def self.send_reminders_method
  #   RemindMe.all.each do |remind|
  #     date =(Date.today.year*12+Date.today.month)-(remind.created_at.year*12+remind.created_at.month)
  #     if( remind.email_reminder == true && date == 6 )
  #       UserMailer.welcome_email(remind.email).deliver
  #     elsif ( remind.email_reminder == true && date == 4 )
  #       UserMailer.welcome_email(remind.email).deliver
  #     end  
  #       UserMailer.welcome_email("poonam.s@cisinlabs.com").deliver
  #   end
  # end

  def send_reminders_method
    RemindMe.all.each do |remind|
      date =(Date.today.year*12+Date.today.month)-(remind.created_at.year*12+remind.created_at.month)
      if( remind.email_reminder == true && date == 6 )
        UserMailer.welcome_email(remind.email).deliver
      elsif ( remind.email_reminder == true && date == 4 )
        UserMailer.welcome_email(remind.email).deliver
      end 
       UserMailer.welcome_email(remind.email).deliver    
    end

  end
end
