class ManagePrivacyController < ApplicationController
  layout "manage"
  before_filter :login_required
  before_filter :check_permissions
  tabs :default => :manage_privacy

  def index
    @privacy = StaticPage.where(:static_key => 'privacy').first

    if @privacy.blank?
      @privacy = StaticPage.new
      @privacy.static_key = "privacy"
      @privacy.save
    end
  end

  def update
    @privacy = StaticPage.find(params[:id])

    if @privacy.blank?
      flash[:error] = "Static Page not Found"
      redirect_to manage_privacy_path
    else
      @privacy.static_content = params[:privacy_content]
      if @privacy.valid? && @privacy.save
        flash[:notice] = "Privacy Policy updated"
        redirect_to manage_privacy_index_path
      else
        flash[:error] = @privacy.errors.first[1] rescue "Privacy Policy invalid"
        redirect_to manage_privacy_index_path
      end
    end
  end

  protected
  def check_permissions
    @group = current_group

    if !current_user.owner_of?(@group)
      flash[:notice] = t("global.permission_denied")
      redirect_to domain_url(:custom => current_group.domain)
    end
  end
end
