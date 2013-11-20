class UserMailer < ActionMailer::Base
  default from: "from@example.com"

 


  def welcome_email(remind_me)
    @remind_me = remind_me
    @url  = 'http://example.com/login'
    mail(to: @remind_me, subject: 'Welcome to My Awesome Site')
  end
end
