/**
* @version		0.0.1 16.05.2011 $
* @package		POP-UP jQuery
* @copyright	Copyright (C) 2011 - 2012 Open Source Matters. All rights reserved.
* @license		GNU/GPL
* project page  http://www.cleverscript.ru
* support       support@cleverscript.ru
* author        cleverscript
*/
function PopUp(a,b){function g(){$("#win").css({display:"block"}),$("#popup").css({display:"block",opacity:0,top:$(window).height()/2-$("#popup").height()/2+"px",left:$(window).width()/2-$("#popup").width()/2+"px"}),$("#popup").css("opacity",1)}var c=a.html();a.remove();var d=$("body")[0],e="<div id='popup'><span id='cancel'></span>"+c+"</div>",f=$('<div id="win">'+e+"</div>");f.appendTo(d),$(b)&&$(b).click(function(){g()}),$("#cancel")&&$("#cancel").click(function(){$("#win").css("display","none")})};