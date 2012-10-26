class ServiceProvidersController < ApplicationController
  before_filter :login_required, :except => :index
  before_filter :check_permissions, :except => :index

  def index
    set_page_title("Service Providers")
    conditions = {}
    conditions = {:service_category_id => params[:category_id]} if params[:category_id]
    
    @service_providers = ServiceProvider.where(conditions).page(params["page"])
    @categories = ServiceCategory.all
  end
  
  def create
    @provider = ServiceProvider.new(params[:service_provider])
    if @provider.save
      @provider.service_category_id = params[:service_provider][:service_category_id]
      @provider.save
      
      flash[:notice] = "Service Provider created"
      
      redirect_to providers_path(:tab=>"list")
    else
      flash[:error] = @provider.errors.first[1]
      
      redirect_to providers_path(:tab=>"new")
    end
  end
  
  def update
    @provider = ServiceProvider.find(params[:id])
    if @provider.nil?
      flash[:error] = "Service Provider not found"
      
      redirect_to providers_path(:tab=>"new")
    else
      if @provider.update_attributes(params[:service_provider])
        @provider.service_category_id = params[:service_provider][:service_category_id]
        @provider.save
        
        flash[:notice] = "#{@provider.name} updated"
        
        redirect_to providers_path(:tab=>"list")
      else
        flash[:error] = @provider.errors.first[1]
        
        redirect_to providers_path(:tab=>"new", :id=>@provider.id)
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
