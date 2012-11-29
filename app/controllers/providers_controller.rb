class ProvidersController < ApplicationController
  layout "supr"
  before_filter :login_required
  before_filter :check_permissions
  tabs :default => :providers
  
  def index
    if params[:tab].eql?('new')
      @provider = ServiceProvider.new
      if !params[:id].nil?
        @provider = ServiceProvider.find(params[:id])
      end
      @categories = ServiceCategory.all
    else
      @providers = ServiceProvider.all.page(params[:page])
    end
  end
  
  def destroy
    @provider = ServiceProvider.find(params[:id])
    
    if @provider.nil?
      flash[:error] = "Service Provider not found"
      
      redirect_to providers_path(:tab=>"list")
    else
      provider_name = @provider.name
      
      @provider.destroy
      flash[:notice] = "#{provider_name} deleted"
      
      redirect_to providers_path(:tab=>"list")
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
