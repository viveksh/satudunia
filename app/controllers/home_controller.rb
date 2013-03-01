class HomeController < ApplicationController
  layout "plus"

  def index
    @body_id = "page1"
  end

  def auth_popup1
    @auth_provider = params[:auth_provider]
    render :layout => "plus_notifications"
  end

  def auth_popup2
    @auth_provider = params[:auth_provider]
    render :layout => "plus_notifications"
  end

  def auth_popup3
    @auth_provider = params[:auth_provider]
    render :layout => "plus_notifications"
  end
end