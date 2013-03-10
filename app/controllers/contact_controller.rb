class ContactController < ApplicationController

  def index
    set_page_title("Contact Us")
    @contact = StaticPage.where(:static_key => 'contact').first

    if @contact.blank?
      @contact = StaticPage.new(:latitude => "1.28668", :longitude => "103.853607", :street_address => "3 Fullerton Rd, Singapore")
      @contact.static_key = "contact"
      @contact.save
    end
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
