Jqmath=function(){function initialize(){Modernizr.load([{test:$("meta[data-jqmath]").length>0&&$(".markdown").text().indexOf("$$")>-1,yep:$.merge($.merge([],eval($("meta[data-jqmath]").data("jsassets"))||[]),eval($("meta[data-jqmath]").data("cssassets"))||[])}])}var self=this;return{initialize:initialize}}();