Users=function(){function b(a){a.hasClass("index")?Users.initializeOnIndex(a):a.hasClass("edit")&&Networks.initialize(a)}function c(a){a.hasClass("index")?Users.initialize_on_index(a):a.hasClass("edit")&&Networks.initialize(a)}function d(a){$("#filter_users input[type=submit]").remove(),$("#filter_users").searcher({url:"/users.js",target:$("#users"),behaviour:"live",timeout:500,extraParams:{format:"js"},success:function(a){$("#additional_info .pagination").html(a.pagination)}})}function e(a){$("#user_language").chosen(),$("#user_timezone").chosen(),$("#user_preferred_languages").chosen()}var a=this;return{initialize:b,initializeOnIndex:d,initializeOnShow:e}}();