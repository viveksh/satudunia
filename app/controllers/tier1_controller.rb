class Tier1Controller < ApplicationController
  before_filter :login_required

  def index
    set_page_title("Tier1")

    @is_disable = !current_user.profile_tiers.blank?
  end

  def update
    unless params["tier1"].blank?
      params["tier1"].each do |tier1|
        profile_tier = ProfileTier.create(:tier_info => tier1)
        profile_tier.user_id = current_user.id
        profile_tier.save
      end

      flash[:notice] = "Tier1 Updated"
    end

    redirect_to tier1_index_path
  end
end