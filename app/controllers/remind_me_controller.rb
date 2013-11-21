class RemindMeController < ApplicationController
  
  def index
    add_breadcrumb "RemindMe", 'RemindMe' 
    @remind_me = RemindMe.new
  end

  def create
  	@remind_me= RemindMe.create(params[:remind_me])
    if @remind_me.save
      redirect_to remind_me_index_path
      flash[:notice] = "Thank you, your registration is now completed"
     else
      redirect_to remind_me_index_path
      flash[:alert]= "Something Went Wrong"
      #flash[:alert] = "Thank you, your registration is now completed. You have registered on 19-11-2013. You will receive SMS or email reminders every: 6 Months."
    end
  end
    
end
