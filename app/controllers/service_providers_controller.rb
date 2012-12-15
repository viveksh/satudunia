class ServiceProvidersController < ApplicationController
  before_filter :login_required, :except => [:index, :show]
  before_filter :check_permissions, :except => [:index, :show]

  def index
    set_page_title("Service Providers")
    conditions = {}
    conditions = {:service_category_id => params[:category_id]} if params[:category_id]
    
    @service_providers = ServiceProvider.where(conditions).page(params["page"])
    @categories = ServiceCategory.all
  end

  def show
      @service_provider = ServiceProvider.by_slug(params[:id])

      if @service_provider.nil?
        flash[:error] = "Service Provider not found"
        redirect_to service_providers_path
      else
        set_page_title(@service_provider.name)
      end
  end
  
  def create
    @provider = ServiceProvider.new(params[:service_provider])
    if @provider.save
      @provider.service_category_id = params[:service_provider][:service_category_id]
      @provider.save
      
      flash[:notice] = "Service Provider created"
      
      redirect_to manage_service_providers_path
    else
      flash[:error] = @provider.errors.first[1] rescue "Please fill all the required inputs"
      
      redirect_to manage_service_providers_path
    end
  end
  
  def update
    @provider = ServiceProvider.by_slug(params[:id])
    if @provider.nil?
      flash[:error] = "Service Provider not found"
      
      redirect_to manage_service_providers_path
    else
      if @provider.update_attributes(params[:service_provider])
        @provider.service_category_id = params[:service_provider][:service_category_id]
        @provider.save
        
        flash[:notice] = "#{@provider.name} updated"
        
        redirect_to manage_service_providers_path
      else
        flash[:error] = @provider.errors.first[1] rescue "Please fill all the required inputs"
        
        redirect_to manage_service_providers_path
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
