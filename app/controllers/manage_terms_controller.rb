class ManageTermsController < ApplicationController
  layout "manage"
  before_filter :login_required
  before_filter :check_permissions
  tabs :default => :manage_terms

  def index
    @tos = StaticPage.where(:static_key => 'tos').first

    if @tos.blank?
      @tos = StaticPage.new
      @tos.static_key = "tos"
      @tos.save
    end
  end

  def update
    @tos = StaticPage.find(params[:id])

    if @tos.blank?
      flash[:error] = "Static Page not Found"
      redirect_to manage_terms_path
    else
      @tos.static_content = params[:tos_content]
      if @tos.valid? && @tos.save
        flash[:notice] = "Terms of Services updated"
        redirect_to manage_terms_path
      else
        flash[:error] = @tos.errors.first[1] rescue "Terms of Services invalid"
        redirect_to manage_terms_path
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
