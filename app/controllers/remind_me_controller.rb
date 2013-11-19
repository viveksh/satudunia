class RemindMeController < ApplicationController

def index
  @remind_me = RemindMe.new
end


def create
	
  @remind_me= RemindMe.create(params[:remind_me])
  if @remind_me.save
    redirect_to remind_me_index_path
    flash[:notice] = "Thank you, your registration is now completed"
   else
    redirect_to remind_me_index_path
    flash[:alert] = "Something Went wrong"
  end
end
    




end
