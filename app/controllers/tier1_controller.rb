class Tier1Controller < ApplicationController
  before_filter :login_required

  def index
    set_page_title("Tier1")

    @is_disable = !current_user.profile_support.nil?
    if @is_disable
      flash[:notice] = "You have already answered this profile question"
      @profile_support = current_user.profile_support
    else
      @profile_support = ProfileSupport.new
    end
  end

  def create
    @profile_support = ProfileSupport.new
    @profile_support.safe_update(%w[about_me location_country location_state location_city birth_date show_age interested_in languages], params[:profile_support])

    @profile_support.user_id = current_user.id

    if @profile_support.save
      flash[:notice] = "Tier1 Updated"
    else
      flash[:notice] = "Tier1 update Failed"
    end

    redirect_to tier1_index_path
  end
end