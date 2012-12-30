class ProvidersController < ApplicationController
  layout "supr"
  before_filter :login_required
  before_filter :check_permissions
  tabs :default => :providers
  
  def index
    @page_title = "Service Providers"
    @active_page = "service_providers"
    @service_categories = ServiceCategory.all
    @providers = ServiceProvider.all
    @provider = ServiceProvider.new
  end
  
  def destroy
    @provider = ServiceProvider.find(params[:id])
    
    if @provider.nil?
      flash[:error] = "Service Provider not found"
      
      redirect_to manage_service_providers_path
    else
      provider_name = @provider.name
      
      @provider.destroy
      flash[:notice] = "#{provider_name} deleted"
      
      redirect_to manage_service_providers_path
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
