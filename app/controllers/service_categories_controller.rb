class ServiceCategoriesController < ApplicationController
  layout "supr"
  before_filter :login_required
  before_filter :check_permissions
  tabs :default => :service_categories
  
  def index
    @page_title = "Service Provider Categories"
    @service_categories = ServiceCategory.all.page(params[:page])
  end
  
  def create
    @service_category = ServiceCategory.new(:category_name => params[:category_name])
    
    if @service_category.save
      flash[:notice] = "Service Category Provider Created"
      
      redirect_to service_categories_path
    else
      flash[:error] = @service_category.errors.first[1]
      
      redirect_to service_categories_path
    end 
  end
  
  def show
  end
  
  def update
    @service_category = ServiceCategory.find(params[:id])
    
    unless @service_category.nil?
      @service_category.category_name = params[:category_name]
      
      if @service_category.save
        flash[:notice] = "#{@service_category.category_name} updated"
        
        redirect_to service_categories_path
      else
        flash[:error] = @service_category.errors.first[1]
        
        redirect_to service_categories_path
      end
    else
      flash[:error] = "Category can't be found"
      
      redirect_to service_categories_path
    end
  end
  
  def destroy
    @service_category = ServiceCategory.find(params[:id])
    
    unless @service_category.nil?
      category_name = @service_category.category_name
      if @service_category.destroy
        flash[:notice] = "#{category_name} deleted"
        
        redirect_to service_categories_path
      else
        flash[:error] = @service_category.errors.first[1]
        
        redirect_to service_categories_path
      end
    else
      flash[:error] = "Category can't be found"
      
      redirect_to service_categories_path
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
