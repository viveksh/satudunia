class HomeController < ApplicationController
  layout "plus"

  def index
    @body_id = "page1"
  end
end