class ManageFaqsController < ApplicationController
  layout "manage"
  before_filter :login_required, :except => :public_faq
  before_filter :check_permissions, :except => :public_faq
  tabs :default => :manage_faq

  def index
    if params[:tab].eql? "new"
      @faq = Faq.new
      if !params[:id].nil?
        @faq = Faq.find(params[:id])
      end
    else
      @faqs = Faq.all.page(params[:page])
    end
  end

  def create
    @faq = Faq.new(params[:faq])
    if @faq.valid? && @faq.save
      flash[:notice] = "Faq created"
      redirect_to manage_faqs_path(:tab => 'list')
    else
      flash[:error] = @faq.errors.first[1] rescue "Faq invalid"
      redirect_to manage_faqs_path(:tab => 'new')
    end
  end

  def update
    @faq = Faq.find(params[:id])

    if @faq.present?
      @faq.safe_update(%w[faq_question, faq_answer], params[:faq])
      if @faq.valid? && @faq.save
        flash[:notice] = "Faq created"
        redirect_to manage_faqs_path(:tab => 'list')
      else
        flash[:error] = @faq.errors.first[1] rescue "Faq invalid"
        redirect_to manage_faqs_path(:tab => 'new')
      end
    else
      flash[:error] = "Faq not found"
      redirect_to manage_faqs_path(:tab => 'list')
    end
  end

  def public_faq
    @faqs = Faq.all.page(params[:page])

    render :layout => "application"
  end

  def destroy
    @faq = Faq.find(params[:id])

    if @faq.present?
      @faq.destroy()
      flash[:notice] = "Faq deleted"
      redirect_to manage_faqs_path(:tab => 'list')
    else
      flash[:error] = "Faq not found"
      redirect_to manage_faqs_path(:tab => 'list')
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