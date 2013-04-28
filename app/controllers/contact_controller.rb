class ContactController < ApplicationController
  layout "plus"

  def index
    @contact = Contact.new()
  end
  
  def send_contact_us
    @contact = Contact.new(params[:contact])

    redirect_to contact_path
  end
end
