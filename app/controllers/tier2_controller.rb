class Tier2Controller < ApplicationController
  before_filter :login_required

  def index
    set_page_title("Tier2")

    @is_disable = !current_user.profile_support.nil?
    @profile_support = current_user.profile_support#ProfileSupport.new
  end

  def create
    @profile_support = ProfileSupport.new
    @profile_support.safe_update(%w[about_me location_country location_state location_city birth_date show_age interested_in languages], params[:profile_support])

    @profile_support.user_id = current_user.id

    if @profile_support.save
      flash[:notice] = "Tier2 Updated"
    else
      flash[:notice] = "Tiear2 update Failed"
    end

    redirect_to tier2_index_path
  end
end