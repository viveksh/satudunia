module ExperimentalHelper
	def check_valid
	  (params[:controller] == "contact" && params[:action] == "index") || (params[:controller] == "users" && params[:action] == "new") || (params[:controller] == "devise/unlocks" && params[:action] == "new")
	end

	def check_pre_loader
		(params[:controller] == "experimental/experimental" && params[:action] == "index") 
	end

end
