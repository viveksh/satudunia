require 'spec_helper'

describe ContactController do
  it "Should got to contact us page" do
    get "/contact"
    puts response
  end
end
