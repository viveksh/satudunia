class ManageNewsController < ApplicationController
  layout "supr"
  before_filter :login_required
  before_filter :check_permissions
  tabs :default => :manage_news

  def index
    @active_page = "manage_news"
    @page_title = "News"
    @news = News.new
    @news_list = News.all
  end

  def create
    @news = News.new
    @news.safe_update(%w[news_title news_body is_active is_archive news_image], params[:news])
    @news.user_id = current_user.id

    if @news.valid? && @news.save
      if params[:news][:news_image]
        Jobs::Images.async.generate_news_thumbnails(@news.id).commit!
      end
      flash[:notice] = "News created"
      redirect_to admin_news_list_path
    else
      flash[:error] = @news.errors.first[1] rescue "Please fill all the required inputs"
      redirect_to admin_news_list_path
    end
  end

  def update
    @news = News.find(params[:id])
    if @news.nil?
      flash[:error] = "News not found"
      redirect_to admin_news_list_path
    else
      conditions = %w[news_title news_body is_active is_archive]
      if params[:news][:news_image]
        conditions = %w[news_title news_body is_active is_archive news_image]
      end

      @news.safe_update(conditions, params[:news])
      if @news.valid? && @news.save
        flash[:notice] = "News updated"
        redirect_to admin_news_list_path
      else
        flash[:error] = @news.errors.first[1] rescue "Please fill all the required inputs"
        redirect_to admin_news_list_path
      end
    end
  end

  def destroy
    @news = News.find(params[:id])
    if @news.nil?
      flash[:error] = "News not found"
      redirect_to admin_news_list_path
    else
      @news.destroy
      flash[:notice] = "News deleted"
      redirect_to admin_news_list_path
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