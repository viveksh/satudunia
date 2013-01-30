class ContactController < ApplicationController
  layout "plus"

  def index
  end
  
  def send_contact_us
    contact = Contact.new(params[:contact])

    if contact.save
      flash[:notice] = "Comment Sent"
      Notifier.contact_us_from_user(contact).deliver
      redirect_to contact_path
    else
      flash[:error] = "Missing Required Data"
      render :action => :index
    end
  end
end
