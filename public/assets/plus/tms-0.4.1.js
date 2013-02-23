/* jQuery based image slider
/* TMSlider 0.4.1 */
function swtch(a,b){return typeof a=="string"||typeof a=="number"?b[a]?b[a]:b["default"]||a:typeof a=="object"?function(){var c=a instanceof Array?[]:{},d;if(a.constructor===RegExp)for(d in b)b.hasOwnProperty(d)&&a.test(d)&&(c[d]=b[d]);else for(d in a)a.hasOwnProperty(d)&&(c[d]=swtch(a[d],b));return c}():typeof a=="function"?swtch(a(),b):a}(function(a){a.fn.TMSlider=a.fn.TMS=a.fn._TMS=function(b){return this.each(function(){var c=a(this),d=c.data("_TMS")||{presets:{centralExpand:{reverseWay:!1,interval:80,blocksX:8,blocksY:4,easing:"easeInQuad",way:"diagonal",anim:"centralExpand"},zoomer:{reverseWay:!1,interval:"1",blocksX:"1",blocksY:"1",easing:"",way:"lines",anim:"zoomer"},fadeThree:{reverseWay:!1,interval:"1",blocksX:"1",blocksY:"1",easing:"",way:"lines",anim:"fadeThree"},simpleFade:{reverseWay:!1,interval:"1",blocksX:"1",blocksY:"1",easing:"",way:"lines",anim:"fade"},gSlider:{reverseWay:!1,interval:40,blocksX:"1",blocksY:"1",easing:"",way:"lines",anim:"gSlider"},vSlider:{reverseWay:!1,interval:40,blocksX:"1",blocksY:"1",easing:"",way:"lines",anim:"vSlider"},slideFromLeft:{reverseWay:!1,interval:"1",blocksX:"1",blocksY:"1",easing:"easeOutBack",way:"lines",anim:"slideFromLeft"},slideFromTop:{reverseWay:!1,interval:"1",blocksX:"1",blocksY:"1",easing:"easeOutBack",way:"lines",anim:"slideFromTop"},diagonalFade:{reverseWay:!1,interval:40,blocksX:12,blocksY:6,easing:"easeInQuad",way:"diagonal",anim:"fade"},diagonalExpand:{reverseWay:!1,interval:40,blocksX:8,blocksY:4,easing:"easeInQuad",way:"diagonal",anim:"expand"},fadeFromCenter:{reverseWay:!0,interval:"10",blocksX:"10",blocksY:"6",easing:"",way:"spiral",anim:"fade"},lines:{reverseWay:!1,interval:40,blocksX:"20",blocksY:"1",easing:"",way:"lines",anim:"slideRight"},verticalLines:{reverseWay:!1,interval:1,blocksX:12,blocksY:1,easing:"swing",way:"lines",anim:"vSlideOdd"},horizontalLines:{reverseWay:!1,interval:1,blocksX:1,blocksY:12,easing:"swing",way:"lines",anim:"gSlideOdd"},random:{prsts:["centralExpand","fadeThree","simpleFade","gSlider","vSlider","slideFromLeft","slideFromTop","diagonalFade","diagonalExpand","fadeFromCenter","zabor","vertivalLines","gorizontalLines"]}},ways:{lines:function(){var a=this;for(var b=[],c=0;c<a.maskC.length;c++)b.push(a.maskC.eq(c));return b},spiral:function(){var a=this,b=[],c=0,d=a.blocksY,e=a.blocksX,f,g,h,i=function(){for(h=c;h<e-1-c;h++){if(!(b.length<a.maskC.length))return!1;b.push(a.matrix[c][h])}j()},j=function(){for(h=c;h<d-1-c;h++){if(!(b.length<a.maskC.length))return!1;b.push(a.matrix[h][e-1-c])}k()},k=function(){for(h=c;h<e-1-c;h++){if(!(b.length<a.maskC.length))return!1;b.push(a.matrix[d-1-c][e-h-1])}l()},l=function(){for(h=c;h<d-1-c;h++){if(!(b.length<a.maskC.length))return!1;b.push(a.matrix[d-h-1][c])}i(c++)};return i(),b},vSnake:function(){var a=this,b=[],c=a.blocksY,d=a.blocksX,e,f;for(f=0;f<d;f++)for(e=0;e<c;e++)f*.5==~~(f/2)?b.push(a.matrix[e][f]):b.push(a.matrix[c-1-e][f]);return b},gSnake:function(){var a=this,b=[],c=a.blocksY,d=a.blocksX,e,f;for(f=0;f<c;f++)for(e=0;e<d;e++)f*.5==~~(f/2)?b.push(a.matrix[f][e]):b.push(a.matrix[f][d-1-e]);return b},diagonal:function(){var a=this,b=[],c=a.blocksY,d=a.blocksX,e=j=n=0;for(e=0;e<d;e++)for(b[e]=[],j=0;j<=e;j++)j<c&&b[e].push(a.matrix[j][e-j]);for(e=1;e<c;e++)for(j=0,b[n=b.length]=[];j<c-e;j++)b[n].push(a.matrix[e+j][d-1-j]);return b},chess:function(){var a=this;for(var b=0,c=[[],[]],d=0;b<a.maskC.length;b++)c[d=d?0:1].push(a.maskC.eq(b));return c},randomly:function(){var a=this;for(var b=[],c=i=0;i<a.maskC.length;i++)b.push(a.maskC.eq(i));for(i=0;i<a.maskC.length;i++)b.push(b.splice(parseInt(Math.random()*a.maskC.length-1),1)[0]);return b}},anims:{centralExpand:function(b,c){a(b).each(function(){var b=a(this).css({visibility:"hidden"}),e=b.show().prop("offsetLeft"),f=b.show().prop("offsetTop"),g=b.width(),h=b.height();b.stop().css({left:e+g/2,top:f+h/2,width:0,height:0,visibility:"visible",opacity:0}).animate({width:g},{step:function(a){var c=1-(g-a)/100;b.css({height:h*c,left:e+g/2*(1-c),top:f+h/2*(1-c),backgroundPosition:"-"+(e+g/2*(1-c))+"px -"+(f+h/2*(1-c))+"px",opacity:c})},duration:d.duration,easing:d.easing,complete:function(){c&&d.afterShow()}})})},fadeThree:function(b,c){var d=this;a(b).each(function(b){var e=a(this).show().css({left:-d.width/4,top:0,zIndex:2,opacity:0}),f=e.clone().appendTo(e.parent()).css({left:d.width/4,top:d.height/4,zIndex:1}),g=e.clone().appendTo(e.parent()).css({left:0,top:-d.height/4,zIndex:1});f.stop().animate({left:0,top:0,opacity:1},{duration:d.duration,easing:d.easing}),g.stop().animate({left:0,top:0,opacity:1},{duration:d.duration,easing:d.easing}),e.stop().animate({left:0,top:0,opacity:1},{duration:d.duration,easing:d.easing,complete:function(){c&&d.afterShow(),f.remove(),g.remove()}})})},zoomer:function(b,c){d.slideshow&&(d.slideshow=d.duration-2e3),b.each(function(){var b=d.next,c=a.browser.msie&&a.browser.version<9,e=a(new Image),f=c?a(new Image):a("<canvas></canvas>"),g,h,i=d.duration,j=d.presetParam.k||1.2,k=d.pic,l=a("<div></div>").css({position:"absolute",left:0,top:0,zIndex:10,width:k.width(),height:k.height(),overflow:"hidden",opacity:0}),m,n=function(a,b){var f,g={},h=!c&&a[0].getContext("2d"),f=0,j=1/i*40,k=function(d){c?a.css({left:b.start.left+(b.finish.left-b.start.left)*d,top:b.start.top+(b.finish.top-b.start.top)*d,width:b.start.width+(b.finish.width-b.start.width)*d,height:b.start.height+(b.finish.height-b.start.height)*d}):h.drawImage(e[0],g.left=b.start.left+(b.finish.left-b.start.left)*d,g.top=b.start.top+(b.finish.top-b.start.top)*d,g.width=b.start.width+(b.finish.width-b.start.width)*d,g.height=b.start.height+(b.finish.height-b.start.height)*d)};k(0),clearInterval(d.int),d.int=setInterval(function(){if(d.paused)return!1;if(f>=1)return clearInterval(d.int),!1;f+=j,k(f)},40)},o=function(b,c,d){var e="zoom,move".split(",")[~~(Math.random()*2)],f="left,right,top,bottom,leftTop,leftBottom,center".split(",")[~~(Math.random()*7)],g=[!1,!0][~~(Math.random()*2)],h={start:{left:0,top:0,width:b,height:c},finish:{width:b*d,height:c*d}};return swtch(e,{zoom:function(){h.finish=swtch(f,{left:{left:0,top:-(c*d-c)/2},right:{left:-(b*d-b),top:-(c*d-c)/2},top:{left:-(b*d-b)/2,top:0},bottom:{left:-(b*d-b)/2,top:-(c*d-c)},leftTop:{left:0,top:0},rightTop:{left:-(b*d-b),top:0},leftBottom:{left:0,top:-(c*d-c)},rightBottom:{left:-(b*d-b),top:-(c*d-c)},center:{left:-(b*d-b)/2,top:-(c*d-c)/2}}),h.finish.width=b*d,h.finish.height=c*d},move:function(){h=a.extend(!0,h,f!="center"?{start:{width:b*d,height:c*d}}:{}),h=a.extend(!0,h,swtch(f,{left:{finish:{left:0,top:-(c*d-c)}},right:{start:{left:-(b*d-b)},finish:{left:-(b*d-b),top:-(c*d-c)}},top:{finish:{left:-(b*d-b),top:0}},bottom:{start:{top:-(c*d-c)},finish:{left:-(b*d-b),top:-(c*d-c)}},leftTop:{finish:{left:-(b*d-b),top:-(c*d-c)}},leftBottom:{start:{top:-(c*d-c)},finish:{left:-(b*d-b),top:0}},center:{finish:{left:-(b*d-b)/2,top:-(c*d-c)/2}}}))}})(),g&&(g=h.start,h.start=h.finish,h.finish=g),h};e.css({left:"-999%",top:"-999%",position:"absolute"}).appendTo("body").load(function(){g=e.width(),h=e.height(),c?f=e.css({position:"absolute",left:0,top:0,zIndex:1}).appendTo(l.appendTo(k)):f.appendTo(l.appendTo(k)).attr({width:k.width(),height:k.height()}),d.afterShow(),d.bl=!0,l.stop().animate({opacity:1},{duration:d.presetParam.crossFadeDur||2e3,complete:function(){}}),a.when(l).then(function(){d.bl=!1,k.children().not(l).remove()}),n(f,o(g,h,j)),!c&&e.detach()}).attr({src:b})})},fade:function(b,c){var d=this;a(b).each(function(){a(this).css({opacity:0}).show().stop().animate({opacity:1},{duration:+d.duration,easing:d.easing,complete:function(){c&&d.afterShow()}})})},expand:function(b,c){var d=this;a(b).each(function(){a(this).hide().show(+d.duration,function(){c&&d.afterShow()})})},slideDown:function(b,c){var d=this;a(b).each(function(){var b=a(this).show(),e=b.height();b.css({height:0}).stop().animate({height:e},{duration:d.duration,easing:d.easing,complete:function(){c&&d.afterShow()}})})},slideLeft:function(b,c){var d=this;a(b).each(function(){var b=a(this).show(),e=b.width();b.css({width:0}).stop().animate({width:e},{duration:d.duration,easing:d.easing,complete:function(){c&&d.afterShow()}})})},slideUp:function(b,c){var d=this;a(b).each(function(){var b=a(this).show(),e=b.height(),f=b.attr("offsetLeft"),g=b.attr("offsetTop");b.css({height:0,top:g+e}).stop().animate({height:e},{duration:d.duration,easing:d.easing,step:function(a){var c=g+e-a;b.css({top:c,backgroundPosition:"-"+f+"px -"+c+"px"})},complete:function(){c&&d.afterShow()}})})},slideRight:function(b,c){var d=this;a(b).each(function(){var b=a(this).show(),e=b.width(),f=b.attr("offsetLeft"),g=b.attr("offsetTop");b.css({width:0,left:f+e}).stop().animate({width:e},{duration:d.duration,easing:d.easing,step:function(a){var c=f+e-a;b.css({left:c,backgroundPosition:"-"+c+"px -"+g+"px"})},complete:function(){c&&d.afterShow()}})})},slideFromTop:function(b,c){var d=this;a(b).each(function(){var b=a(this),e=b.show().css("top"),f=b.height();b.css({top:-f}).stop().animate({top:e},{duration:+d.duration,easing:d.easing,complete:function(){c&&d.afterShow()}})})},slideFromDown:function(b,c){var d=this;a(b).each(function(){var b=a(this),e=b.show().css("top"),f=b.height();b.css({top:f}).stop().animate({top:e},{duration:+d.duration,easing:d.easing,complete:function(){c&&d.afterShow()}})})},slideFromLeft:function(b,c){var d=this;a(b).each(function(){var b=a(this),e=b.show().css("left"),f=b.width();b.css({left:-f}).stop().animate({left:e},{duration:+d.duration,easing:d.easing,complete:function(){c&&d.afterShow()}})})},slideFromRight:function(b,c){var d=this;a(b).each(function(){var b=a(this),e=b.show().css("left"),f=b.width();b.css({left:f}).stop().animate({left:e},{duration:+d.duration,easing:d.easing,complete:function(){c&&d.afterShow()}})})},gSlider:function(a,b){var c=this,d=c.maskC.clone(),e=d.width();d.appendTo(c.maskC.parent()).css({background:c.pic.css("backgroundImage")}).show(),a.show().css({left:c.direction>0?-e:e}).stop().animate({left:0},{duration:+c.duration,easing:c.easing,step:function(a){c.direction>0?d.css("left",a+e):d.css("left",a-e)},complete:function(){d.remove(),b&&c.afterShow()}})},vSlider:function(a,b){var c=this,d=c.maskC.clone(),e=d.height();d.appendTo(c.maskC.parent()).css({background:c.pic.css("backgroundImage")}).show(),a.show().css({top:c.direction>0?-e:e}).stop().animate({top:0},{duration:+c.duration,easing:c.easing,step:function(a){c.direction>0?d.css("top",a+e):d.css("top",a-e)},complete:function(){d.remove(),b&&c.afterShow()}})},vSlideOdd:function(b,c){var d=this;a(b).each(function(){var b=a(this),e=b.show().css("top"),f=b.height(),g=d.odd;b.css({top:g?-f:f}).stop().animate({top:e},{duration:+d.duration,easing:d.easing,complete:function(){c&&d.afterShow()}}),d.odd=d.odd?!1:!0})},gSlideOdd:function(b,c){var d=this;a(b).each(function(){var b=a(this),e=b.show().css("left"),f=b.width(),g=d.odd;b.css({left:g?-f:f}).stop().animate({left:e},{duration:+d.duration,easing:d.easing,complete:function(){c&&d.afterShow()}}),d.odd=d.odd?!1:!0})}},etal:"<div></div>",items:".items>li",pic:"pic",mask:"mask",paginationCl:"pagination",currCl:"current",pauseCl:"paused",bannerCl:"banner",numStatusCl:"numStatus",pagNums:!0,overflow:"hidden",show:0,changeEv:"click",blocksX:1,blocksY:1,preset:"simpleFade",presetParam:{},duration:1e3,easing:"linear",way:"lines",anim:"fade",pagination:!1,banners:!1,waitBannerAnimation:!0,slideshow:!1,progressBar:!1,pauseOnHover:!1,nextBu:!1,prevBu:!1,playBu:!1,preFu:function(){var b=this,c=a(new Image);b.pic=a(b.etal).addClass(b.pic).css({overflow:b.overflow}).appendTo(b.me),b.mask=a(b.etal).addClass(b.mask).appendTo(b.pic),b.me.css("position")=="static"&&b.me.css({position:"relative"}),b.me.css("z-index")=="auto"&&b.me.css({zIndex:1}),b.me.css({overflow:b.overflow}),b.items&&b.parseImgFu(),c.appendTo(b.me).load(function(){setTimeout(function(){b.pic.css({width:b.width=c.width(),height:b.height=c.height(),background:b.preset=="zoomer"?"none":"url("+b.itms[b.show]+") 0 0 no-repeat"}),c.remove(),b.current=b.buff=b.show;var a;b.preset=="zoomer"&&(a=b.n,b.n=-1,b.changeFu(a))},1)}).attr({src:b.itms[b.n=b.show]})},sliceFu:function(b,c){var d=this,b=d.blocksX,c=d.blocksY,e=parseInt(d.width/b),f=parseInt(d.height/c),g=a(d.etal),h=d.pic.width()-e*b,i=d.pic.height()-f*c,j,k,l=d.matrix=[];d.mask.css({position:"absolute",width:"100%",height:"100%",left:0,top:0,zIndex:1}).empty().appendTo(d.pic);for(k=0;k<c;k++)for(j=0;j<b;j++)l[k]=l[k]?l[k]:[],l[k][j]=a(d.etal).clone().appendTo(d.mask).css({left:j*e,top:k*f,position:"absolute",width:j==b-1?e+h:e,height:k==c-1?f+i:f,backgroundPosition:"-"+j*e+"px -"+k*f+"px",display:"none"});d.maskC&&(d.maskC.remove(),delete d.maskC),d.maskC=d.mask.children()},changeFu:function(b){var c=this;if(c.bl)return!1;if(b==c.n)return!1;c.n=b,c.next=c.itms[b],c.direction=b-c.buff,c.pagination&&c.pagination!==!0&&c.pagination.data&&c.pagination.data("uCarousel")&&c.pagination.uCarousel(b),c.direction==c.itms.length-1&&(c.direction=-1),c.direction==-1*c.itms.length+1&&(c.direction=2),c.current=c.buff=b,c.numStatus&&c.numStatusChFu(),c.pagination&&c.pags.removeClass(c.currCl).eq(b).addClass(c.currCl),c.banners!==!1&&c.banner&&c.bannerHide(c.banner,c),c.progressBar&&(clearInterval(c.slShTimer),c.progressBar.stop()),c.slideshow&&!c.paused&&c.progressBar&&c.progressBar.stop().width(0);var d=function(){a.browser.msie&&a.browser.version<9&&c.preset=="zoomer"&&(c.preset="simpleFade",c.duration=1e3),c.preset_!=c.preset&&(c.du=c.duration,c.ea=c.easing,a.extend(c,c.presets[c.preset]),c.duration=c.du,c.easing=c.ea,c.preset_=c.preset),c.preset=="random"&&(a.extend(c,c.presets[c.prsts[parseInt(Math.random()*c.prsts.length)]]),c.reverseWay=[!0,!1][parseInt(Math.random()*2)]),c.sliceFu(),c.maskC.stop().css({backgroundImage:"url("+c.next+")"}),c.beforeAnimation(),c.showFu()};c.waitBannerAnimation?a.when(c.banner).then(d):d()},nextFu:function(){var a=this,b=a.n;a.changeFu(++b<a.itms.length?b:0)},prevFu:function(){var a=this,b=a.n;a.changeFu(--b>=0?b:a.itms.length-1)},showFu:function(){var a=this,b,c;b=a.ways[a.way].call(a),a.reverseWay&&b.reverse(),a.dirMirror&&(b=a.dirMirrorFu(b)),a.int&&clearInterval(a.int),a.int=setInterval(function(){b.length?a.anims[a.anim].apply(a,[b.shift(),!b.length]):clearInterval(a.int)},a.interval),a.bl=!0},dirMirrorFu:function(a){var b=this;return b.direction<0&&void 0,a},afterShow:function(){var b=this;b.pic.css({backgroundImage:"url("+b.next+")"}),b.maskC.hide(),b.slideshow&&!b.paused&&b.startSlShFu(0),b.banners!==!1&&(b.banner=b.bnnrs[b.n]),b.banner&&(a.when(a("."+b.bannerCl,b.me)).then(function(){a("."+b.bannerCl,b.me).not(b.banner).remove()}),b.banner.appendTo(b.me),b.bannerShow(b.banner,b)),b.afterAnimation(),b.bl=!1},bannerShow:function(){},bannerHide:function(){},parseImgFu:function(){var b=this;b.itms=[],a(b.items+" img",b.me).each(function(c){b.itms[c]=a(this).attr("src")}),a(b.items,b.me).hide()},controlsFu:function(){var b=this;b.nextBu&&a(b.nextBu).bind(b.changeEv,function(){return b.nextFu(),!1}),b.prevBu&&a(b.prevBu).bind(b.changeEv,function(){return b.prevFu(),!1})},paginationFu:function(){var b=this;if(b.pagination===!1)return!1;b.pagination===!0?b.pags=a("<ul></ul>"):typeof b.pagination=="string"?b.pags=a(b.pagination):typeof b.pagination=="object"&&(b.pags=b.pagination.find("ul")),b.pags.parent().length==0&&b.pags.appendTo(b.me),b.pags.children().length==0?a(b.itms).each(function(c){var d=a("<li></li>").data({num:c});b.pags.append(d.append('<a href="#"></a>'))}):b.pags.find("li").each(function(b){a(this).data({num:b})}),b.pagNums&&b.pags.find("a").each(function(b){a(this).text(b+1)}),b.pags.delegate("li>a",b.changeEv,function(){return b.changeFu(a(this).parent().data("num")),!1}),b.pags.addClass(b.paginationCl),b.pags=a("li",b.pags),b.pags.eq(b.n).addClass(b.currCl)},startSlShFu:function(b){var c=this;c.paused=!1,c.prog=b||0,clearInterval(c.slShTimer),c.slShTimer=setInterval(function(){c.prog<100?c.prog++:(c.prog=0,clearInterval(c.slShTimer),c.nextFu()),c.progressBar&&c.pbchFu()},c.slideshow/100),c.playBu&&a(c.playBu).removeClass(c.pauseCl)},pauseSlShFu:function(){var b=this;b.paused=!0,clearInterval(b.slShTimer),b.playBu&&a(b.playBu).addClass(b.pauseCl)},slideshowFu:function(){var b=this;if(b.slideshow===!1)return!1;b.playBu&&a(b.playBu).bind(b.changeEv,function(){return b.paused?b.startSlShFu(b.prog):b.pauseSlShFu(),!1}),b.startSlShFu()},pbchFu:function(){var a=this;a.prog==0?a.progressBar.stop().width(0):a.progressBar.stop().animate({width:a.prog/100*a.progressBar.parent().width()},{easing:"linear",duration:a.slideshow/100})},progressBarFu:function(){var b=this;if(b.progressBar===!1)return!1;b.progressBar=a(b.progressBar),b.progressBar.parent().length==0&&b.progressBar.appendTo(b.me)},pauseOnHoverFu:function(){var a=this;a.pauseOnHover&&a.me.bind("mouseenter",function(){a.pauseSlShFu()}).bind("mouseleave",function(){a.startSlShFu(a.prog)})},bannersFu:function(){var b=this;if(b.banners===!1)return!1;b.banners!==!0&&typeof b.banners=="string"&&(b.bannerShow=b.bannersPresets[b.banners].bannerShow,b.bannerHide=b.bannersPresets[b.banners].bannerHide),b.bnnrs=[],a(b.items,b.me).each(function(c){var d;b.bnnrs[c]=(d=a("."+b.bannerCl,this)).length?d.css({zIndex:999}):!1}),b.bannerShow(b.banner=b.bnnrs[b.show].appendTo(b.me),b)},bannerDuration:1e3,bannerEasing:"swing",bannersPresets:{fromLeft:{bannerShow:function(a,b){a.css("top")=="auto"&&a.css("top",0),a.stop().css({left:-a.width()}).animate({left:0},{duration:b.bannerDuration,easing:b.bannerEasing})},bannerHide:function(a,b){a.stop().animate({left:-a.width()},{duration:b.bannerDuration,easing:b.bannerEasing})}},fromRight:{bannerShow:function(a,b){a.css("top")=="auto"&&a.css("top",0),a.css("left")!="auto"&&a.css("left","auto"),a.stop().css({right:-a.width()}).animate({right:0},{duration:b.bannerDuration,easing:b.bannerEasing})},bannerHide:function(a,b){a.stop().animate({right:-a.width()},{duration:b.bannerDuration,easing:b.bannerEasing})}},fromBottom:{bannerShow:function(a,b){a.css("left")=="auto"&&a.css("left",0),a.css("top")!="auto"&&a.css("top","auto"),a.stop().css({bottom:-a.height()}).animate({bottom:0},{duration:b.bannerDuration,easing:b.bannerEasing})},bannerHide:function(a,b){a.stop().animate({bottom:-a.height()})}},fromTop:{bannerShow:function(a,b){a.css("left")=="auto"&&a.css("left",0),a.stop().css({top:-a.height()}).animate({top:0},{duration:b.bannerDuration,easing:b.bannerEasing})},bannerHide:function(a,b){a.stop().animate({top:-a.height()},{duration:b.bannerDuration,easing:b.bannerEasing})}},fade:{bannerShow:function(a,b){a.css("left")=="auto"&&a.css("left",0),a.css("top")=="auto"&&a.css("top",0),a.hide().fadeIn(b.bannerDuration)},bannerHide:function(a,b){a.fadeOut(b.bannerDuration)}}},numStatusChFu:function(){var b=this;b.n||(b.n=b.show),b.numSt.html('<span class="curr"></span>/<span class="total"></span>'),a(".curr",b.numSt).text(b.n+1),a(".total",b.numSt).text(b.itms.length)},numStatusFu:function(){var b=this;if(b.numStatus===!1)return!1;b.numSt||(b.numStatus===!0?b.numSt=a(b.etal).addClass(b.numStatusCl):b.numSt=a(b.numStatus).addClass(b.numStatusCl)),b.numSt.parent().length||b.numSt.appendTo(b.me).addClass(b.numStatusCl),b.numStatusChFu()},init:function(){d.me.data({_TMS:d}),d.preFu(),d.controlsFu(),d.paginationFu(),d.slideshowFu(),d.progressBarFu(),d.pauseOnHoverFu(),d.bannersFu(),d.numStatusFu()},afterAnimation:function(){},beforeAnimation:function(){}};typeof b=="object"&&a.extend(d,b),d.me||d.init(d.me=c)})}})(jQuery);