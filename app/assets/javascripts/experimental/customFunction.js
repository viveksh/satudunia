/*
	@module 		= experimental
	@created		=	Jun 1 2013
	@desc			=	this file contains custom js functions of experimental module
*/

var Experimental = {
	getMainContent: function(contentVariable){
		// for making first character styled
    	var firstCharacter = contentVariable.trim().substr(1);
    	jQuery(".filter-content").html(firstCharacter); 
	},
	// getMainContentEnds here
	// making current tab active
	getActiveTab:function(paramAction,paramController){
		var paramVariable = (paramAction=="index")? paramController:paramAction;
		jQuery(document).ready(function($){
			$("."+paramVariable).addClass("current_page_parent");
		});

	},
	//actionId = through event will fire
	//url = url for ajax action
	//method = method of sending data
	//idToLoader = where you want to loade loader and data
	//nameOfPartial = partial name to show
	getAjaxData:function(event,actionId,url,method,idToLoader,nameOfPartial,loaderIdOrClass,pagination){
		jQuery(document).on(event,actionId,function(){
		//variable value taker
		jQuery(loaderIdOrClass).addClass("ajax-loader");
		var valueTaker = (typeof(jQuery(this).attr("value"))=="undefined")? "" : jQuery(this).attr("value");
		var paginationVar = (pagination.length==0)? "&page=" : "&page="+valueTaker;
		jQuery.ajax({
			type:method,
			url:url,
			data:"queryData="+valueTaker+"&idLoad="+idToLoader+"&nameOfPartial="+nameOfPartial+paginationVar,
			dataType:"script",
			error:function(errorObject){
				jQuery(loaderIdOrClass).removeClass("ajax-loader");
				jQuery("#"+idToLoader).html("<span style='color:red'>Something went wrong please check your console for more detail</span>");
				console.log(errorObject);
			},
			success:function(successObject){
				jQuery(loaderIdOrClass).removeClass("ajax-loader");
				jQuery("#"+idToLoader).fadeIn('slow');
				//alert(successObject);
				//jQuery(classToShow).html(eval(successObject));
			}
		});
	});

	}
	
}
