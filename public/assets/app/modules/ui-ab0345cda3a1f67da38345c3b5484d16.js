Ui=function(){function b(){l(),m(),Auth.dropdownToggle(),Auth.positionDropdown(),k(),j(),Form.initialize()}function c(){var a=$("#feedbackform");a.dialog({title:"Feedback",autoOpen:!1,modal:!0,width:"420px"}),$("#feedbackform .cancel-feedback").click(function(){return $("#feedbackform").dialog("close"),!1}),$("#feedback").click(function(){var b=a.dialog("isOpen");return b?a.dialog("close"):a.dialog("open"),!1})}function d(a,b,c,d,e){if(c){var f=$(a+" "+b+c);f.remove()}var g=$.makeArray($(a+" "+b)).sort(function(a,b){return $(a)[d](e)>$(b)[d](e)?1:-1});$(a).html(g),c&&$(a).prepend(f),$(a).val($(a+" "+b+"[selected=selected]").val())}function e(){return $(".offline").length>0||f()}function f(){return $(".not_member").length>0}function g(a,b){b=b||$("html,body"),viewportHeight=$(window).height(),window.innerHeight&&(viewportHeight=window.innerHeight);var c=a.offset().top-viewportHeight/2;b.scrollTop(c)}function h(a,b){elements=a.find(b);var c=elements[0];c&&$(c).addClass("active"),a.on("click",b,function(a){elements.removeClass("active"),next=$(this),next.addClass("active")}),$(document).keydown(function(c){a.is(":visible")&&(current_element=$(a.find(b+".active")),moved=!1,next=null,c.keyCode==74?next=current_element.next(b):c.keyCode==75&&(next=current_element.prev(b)),next&&next.length>0&&(current_element.removeClass("active"),next.addClass("active"),Ui.center_scroll(next)))})}function i(a){var b=(a||$("body")).find(".lang-fields");b.length>0&&b.tabs()}function j(){$(".top-bar").click(function(a){var b=$(a.target).hasClass("top-bar");b&&$("html, body").animate({scrollTop:0},"fast")})}function k(){$(document.body).on("mouseleave, scroll",".markdown, .toolbar, .Question, .comment-content, .tag-list, .user-data, .tooltip",function(a){$(".tooltip").hide()}),$(document.body).on("mouseenter",".toolbar, .markdown, .Question, .comment-content, .tag-list, .user-data",function(a){$(".tooltip").hide()}),$(document.body).on("hover",".ajax-tooltip",function(a){var b=$(this).attr("href"),c=$(this);$(".tooltip").hide();if(c.data("tooltip")==1){var d=c.next(".tooltip");return d.show(),!1}return $.ajax({url:b+"?tooltip=1",dataType:"json",success:function(a){$(".tooltip").hide(),c.removeAttr("title"),c.data("tooltip",1),c.after(a.html);var b=c.next(".tooltip");b.css({display:"block"}),b.position({at:"top center",of:c,my:"bottom",collision:"fit fit"})}}),!1})}function l(){$("ul.menubar").droppy({className:"dropHover",autoArrows:!1,trigger:"click"}),$("ul.menubar .has-subnav").click(function(a){a.preventDefault()})}function m(){var a=$(".quick_question");a.find(".buttons-quickq").hide(),a.find("form input[type=text]").focus(function(){a.find(".buttons-quickq").show()})}var a=this;return $("[rel=tipsy]").tipsy({gravity:"s"}),$(".tipsy-plans").tipsy({gravity:"e",opacity:1}),$(".lang-option").click(function(){var a=$("#lang-select-toggle").data("language"),b=$(this).data("language");$.ajax({type:"POST",url:a,data:{"language[filter]":b},success:function(){window.location.reload()}})}),d("#group_language","option",":last","text",null),d("#user_language","option",!1,"text",null),d("#lang_opts",".radio_option",!1,"attr","id"),d("select#question_language","option",!1,"text",null),e()&&($("a[data-login-required], .toggle-action, .not_member").on("click",function(a){a.preventDefault(),Auth.startLoginDialog()}),$(document.body).delegate("#ask_question","submit",function(a){if(Ui.offline())return Auth.startLoginDialog(),!1}),$(document.body).delegate("#join_dialog_link","click",function(a){Groups.join(this)}),$(document.body).delegate("click",".join_group",function(a){if(!$(this).hasClass("email"))return Auth.startLoginDialog($(this).text(),1),!1;document.location=$(this).attr("href")}),$(".toggle-action").on("ajax:success",function(a,b,c){if(b.success){var d=$(this),e=d.attr("href"),f=d.attr("title"),g=d.data("ujs:enable-with"),h=d.data("undo"),i=d.data("title"),j=d.data("text"),k=d.children("img"),l=$(d.data("counter"));d.attr({href:h,title:i}),d.data({undo:e,title:f,text:g}),j&&$.trim(j)!=""&&(d.text(j),d.data("ujs:enable-with",j)),k.attr({src:k.data("src"),"data-src":k.attr("src")}),typeof d.data("increment")!="undefined"&&l.text(parseFloat($.trim(l.text()))+d.data("increment")),Messages.show(b.message,"notice")}})),{initialize:b,initializeFeedback:c,sortValues:d,offline:e,notMember:f,centerScroll:g,navigateShortcuts:h,initializeLangFields:i,initializeSmoothScrollToTop:j,initializeAjaxTooltips:k}}();