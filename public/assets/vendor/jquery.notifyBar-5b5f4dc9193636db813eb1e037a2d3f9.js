/*
*  Notify Bar - jQuery plugin
*
*  Copyright (c) 2009 Dmitri Smirnov
*
*  Licensed under the MIT license:
*  http://www.opensource.org/licenses/mit-license.php
*
*  Version: 1.0.2
*
*  Project home:
*  http://www.dmitri.me/blog/notify-bar
*/
/**
 *  param object
 */
$.notifyBar=function(a){var b={};this.shown=!1,a||(a={}),this.html=a.html||"Your message here",this.delay=a.delay||2500,this.animationSpeed=a.animationSpeed||"normal",this.jqObject=a.jqObject,this.jqObject?b=this.jqObject:(b=$("<div></div>").attr("id","notifyBar").css("width","100%").css("position","fixed").css("top","0px").css("left","0px").css("z-index","32768").css("font-size","18px").css("text-align","center").css("font-family","Arial, Helvetica, serif").css("height","30px").css("border-bottom","1px solid #bbb"),a.barClass||b.css("background-color","#dfdfdf").css("color","#000")),b.addClass(a.barClass),b.html(this.html).hide();var c=b.attr("id");switch(this.animationSpeed){case"slow":asTime=600;break;case"normal":asTime=400;break;case"fast":asTime=200;break;default:asTime=this.animationSpeed}$("body").prepend(b),b.slideDown(asTime),setTimeout("$('#"+c+"').slideUp("+asTime+");",this.delay+asTime)};