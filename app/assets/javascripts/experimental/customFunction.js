/*
	@module 		= experimental
	@created		=	Jun 1 2013
	@desc				=	this file contains custom js functions of experimental module
*/

var Experimental = {
	getMainContent: function(contentVariable){
		// for making first character styled
    	var firstCharacter = contentVariable.trim().substr(1);
    	jQuery(".filter-content").html(firstCharacter); 
	}
	// getMainContentEnds here
}