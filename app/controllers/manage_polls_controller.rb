class ManagePollsController < ApplicationController
  layout "manage"
  before_filter :login_required
  before_filter :check_permissions
  tabs :default => :manage_news

  def index
    if params[:tab].eql? "new"
      @poll = Poll.new
      if !params[:id].nil?
        @poll = Poll.find(params[:id])
      end
    else
      @polls = Poll.all.page(params[:page])
    end
  end

  def create
    @poll, message = Poll.create_new(params[:poll], current_user.id)

    if message.blank?
      flash[:notice] = "Poll created"
      redirect_to manage_polls_path(:tab => 'list')
    else
      @poll.destroy
      flash[:error] = message
      redirect_to manage_polls_path(:tab => 'new')
    end
  end

  def update
    @poll = Poll.find(params[:id])
    message = @poll.update_poll(params[:poll])

    if message.blank?
      flash[:notice] = "Poll updated"
      redirect_to manage_polls_path(:tab => 'list') 
    else
      flash[:error] = message
      redirect_to manage_polls_path(:tab => 'new', :id => @poll.id)
    end
  end

  def destroy
    @poll = Poll.find(params[:id])

    if @poll.blank?
      flash[:error] = "Poll not found"
      redirect_to manage_polls_path(:tab => 'list')
    else
      @poll.destroy
      flash[:notice] = "Poll deleted"
      redirect_to manage_polls_path(:tab => 'list') 
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