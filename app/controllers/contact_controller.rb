class ContactController < ApplicationController
  def index
  end
  
  def send_contact_us
    contact = Contact.new(params[:contact])

    if contact.save
      flash[:notice] = "Comment Sent"
      redirect_to "/questions"
    else
      flash[:error] = "Missing Required Data"
      render :action => :index
    end
  end
end
