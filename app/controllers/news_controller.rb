class NewsController < ApplicationController

  def index
    set_page_title("News")

    @news = News.where(:is_archive => false).page(params[:page])
  end

  def show
    @news = News.by_slug(params[:id])

    if @news.nil?
      flash[:error] = "News not found"
      redirect_to news_index_path
    else
      set_page_title(@news.news_title)
    end
  end
end