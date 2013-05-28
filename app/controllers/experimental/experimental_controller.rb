class Experimental::ExperimentalController < ApplicationController
	layout 'experiment'
  def index

  end
  # action public about
  def public_about
  	@about = StaticPage.where(:static_key => 'about').first
  end
  #rss feed
  def rss_feed
  end
end
