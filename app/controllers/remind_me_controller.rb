class RemindMeController < ApplicationController
  @account_sid = 'ACffc5fd99504ba9c9a6b4258fef338818'
  @auth_token = 'c0706c799df7a6bc0ecac2fea7b28354'


  def index
    @remind_me = RemindMe.new
  end


  def create

  	@remind_me= RemindMe.create(params[:remind_me])

    if @remind_me.save
    	#Jobs::Mailer.async.on_new_remined_me(@remind_me.id).commit!
    	#@remind_me = Twilio::REST::Client.new(@account_sid,@auth_token) 
      #   @remind_me.account.sms.messages.create(
  	  #  :from => '+1 469-804-6324',
  	  #  #:to => '+918989770328',
  	  #  :to => '+918458920092'
  	  #  :body => 'hi this is poonam'
  		# )
      redirect_to remind_me_index_path

      flash[:notice] = "Thank you, your registration is now completed"
     else
      redirect_to remind_me_index_path
      flash[:alert]= "Something Went Wrong"
      #flash[:alert] = "Thank you, your registration is now completed. You have registered on 19-11-2013. You will receive SMS or email reminders every: 6 Months."
    end
  end
    
end
