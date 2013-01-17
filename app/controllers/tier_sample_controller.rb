class TierSampleController < ApplicationController
  before_filter :login_required

  def index
    set_page_title("Tier Sample")

    @is_disable = !current_user.profile_tiers.blank?
    if @is_disable
      flash[:notice] = "You have already answered this profile question"
    end
  end

  def update
    unless params["tier1"].blank?
      params["tier1"].each do |tier1|
        profile_tier = ProfileTier.create(:tier_info => tier1)
        profile_tier.user_id = current_user.id
        profile_tier.save
      end

      flash[:notice] = "Tier Sample Updated"
    end

    redirect_to '/tier-sample'
  end
end