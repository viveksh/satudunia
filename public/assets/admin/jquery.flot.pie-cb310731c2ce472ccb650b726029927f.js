/*
Flot plugin for rendering pie charts. The plugin assumes the data is 
coming is as a single data value for each series, and each of those 
values is a positive value or zero (negative numbers don't make 
any sense and will cause strange effects). The data values do 
NOT need to be passed in as percentage values because it 
internally calculates the total and percentages.

* Created by Brian Medendorp, June 2009
* Updated November 2009 with contributions from: btburnett3, Anthony Aragues and Xavi Ivars

* Changes:
	2009-10-22: lineJoin set to round
	2009-10-23: IE full circle fix, donut
	2009-11-11: Added basic hover from btburnett3 - does not work in IE, and center is off in Chrome and Opera
	2009-11-17: Added IE hover capability submitted by Anthony Aragues
	2009-11-18: Added bug fix submitted by Xavi Ivars (issues with arrays when other JS libraries are included as well)
		

Available options are:
series: {
	pie: {
		show: true/false
		radius: 0-1 for percentage of fullsize, or a specified pixel length, or 'auto'
		innerRadius: 0-1 for percentage of fullsize or a specified pixel length, for creating a donut effect
		startAngle: 0-2 factor of PI used for starting angle (in radians) i.e 3/2 starts at the top, 0 and 2 have the same result
		tilt: 0-1 for percentage to tilt the pie, where 1 is no tilt, and 0 is completely flat (nothing will show)
		offset: {
			top: integer value to move the pie up or down
			left: integer value to move the pie left or right, or 'auto'
		},
		stroke: {
			color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#FFF')
			width: integer pixel width of the stroke
		},
		label: {
			show: true/false, or 'auto'
			formatter:  a user-defined function that modifies the text/style of the label text
			radius: 0-1 for percentage of fullsize, or a specified pixel length
			background: {
				color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#000')
				opacity: 0-1
			},
			threshold: 0-1 for the percentage value at which to hide labels (if they're too small)
		},
		combine: {
			threshold: 0-1 for the percentage value at which to combine slices (if they're too small)
			color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#CCC'), if null, the plugin will automatically use the color of the first slice to be combined
			label: any text value of what the combined slice should be labeled
		}
		highlight: {
			opacity: 0-1
		}
	}
}

More detail and specific examples can be found in the included HTML file.

*/
(function(a){function b(b){function r(a,b){b.series.pie.show&&(b.grid.show=!1,b.series.pie.label.show=="auto"&&(b.legend.show?b.series.pie.label.show=!1:b.series.pie.label.show=!0),b.series.pie.radius=="auto"&&(b.series.pie.label.show?b.series.pie.radius=.75:b.series.pie.radius=1),b.series.pie.tilt>1&&(b.series.pie.tilt=1),b.series.pie.tilt<0&&(b.series.pie.tilt=0),a.hooks.processDatapoints.push(v),a.hooks.drawOverlay.push(L),a.hooks.draw.push(B))}function s(a,b){var c=a.getOptions();c.series.pie.show&&c.grid.hoverable&&b.unbind("mousemove").mousemove(F),c.series.pie.show&&c.grid.clickable&&b.unbind("click").click(G)}function t(a){function c(a,d){d||(d=0);for(var e=0;e<a.length;++e){for(var f=0;f<d;f++)b+="	";typeof a[e]=="object"?(b+=""+e+":\n",c(a[e],d+1)):b+=""+e+": "+a[e]+"\n"}}var b="";c(a),alert(b)}function u(a){for(var b=0;b<a.length;++b){var c=parseFloat(a[b].data[0][1]);c&&(j+=c)}}function v(b,f,g,h){o||(o=!0,d=b.getCanvas(),e=a(d).parent(),c=b.getOptions(),b.setData(A(b.getData())))}function w(){n=e.children().filter(".legend").children().width(),f=Math.min(d.width,d.height/c.series.pie.tilt)/2,h=d.height/2+c.series.pie.offset.top,g=d.width/2,c.series.pie.offset.left=="auto"?c.legend.position.match("w")?g+=n/2:g-=n/2:g+=c.series.pie.offset.left,g<f?g=f:g>d.width-f&&(g=d.width-f)}function z(a){for(var b=0;b<a.length;++b)if(typeof a[b].data=="number")a[b].data=[[1,a[b].data]];else if(typeof a[b].data=="undefined"||typeof a[b].data[0]=="undefined")typeof a[b].data!="undefined"&&typeof a[b].data.label!="undefined"&&(a[b].label=a[b].data.label),a[b].data=[[1,0]];return a}function A(a){a=z(a),u(a);var b=0,d=0,e=c.series.pie.combine.color,f=[];for(var g=0;g<a.length;++g)a[g].data[0][1]=parseFloat(a[g].data[0][1]),a[g].data[0][1]||(a[g].data[0][1]=0),a[g].data[0][1]/j<=c.series.pie.combine.threshold?(b+=a[g].data[0][1],d++,e||(e=a[g].color)):f.push({data:[[1,a[g].data[0][1]]],color:a[g].color,label:a[g].label,angle:a[g].data[0][1]*Math.PI*2/j,percent:a[g].data[0][1]/j*100});return d>0&&f.push({data:[[1,b]],color:e,label:c.series.pie.combine.label,angle:b*Math.PI*2/j,percent:b/j*100}),f}function B(b,i){function o(){ctx.clearRect(0,0,d.width,d.height),e.children().filter(".pieLabel, .pieLabelBackground").remove()}function p(){var a=5,b=15,e=10,i=.02;if(c.series.pie.radius>1)var j=c.series.pie.radius;else var j=f*c.series.pie.radius;if(j>=d.width/2-a||j*c.series.pie.tilt>=d.height/2-b||j<=e)return;ctx.save(),ctx.translate(a,b),ctx.globalAlpha=i,ctx.fillStyle="#000",ctx.translate(g,h),ctx.scale(1,c.series.pie.tilt);for(var k=1;k<=e;k++)ctx.beginPath(),ctx.arc(0,0,j,0,Math.PI*2,!1),ctx.fill(),j-=k;ctx.restore()}function q(){function m(c,d,e){if(c<=0)return;e?ctx.fillStyle=d:(ctx.strokeStyle=d,ctx.lineJoin="round"),ctx.beginPath(),Math.abs(c-Math.PI*2)>1e-9?ctx.moveTo(0,0):a.browser.msie&&(c-=1e-4),ctx.arc(0,0,b,i,i+c,!1),ctx.closePath(),i+=c,e?ctx.fill():ctx.stroke()}function n(){function m(b,f,j){if(b.data[0][1]==0)return;var l=c.legend.labelFormatter,m,n=c.series.pie.label.formatter;l?m=l(b.label,b):m=b.label,n&&(m=n(m,b));var o=(f+b.angle+f)/2,p=g+Math.round(Math.cos(o)*i),q=h+Math.round(Math.sin(o)*i)*c.series.pie.tilt,r='<span class="pieLabel" id="pieLabel'+j+'" style="position:absolute;top:'+q+"px;left:"+p+'px;">'+m+"</span>";e.append(r);var s=e.children("#pieLabel"+j),t=q-s.height()/2,u=p-s.width()/2;s.css("top",t),s.css("left",u);if(0-t>0||0-u>0||d.height-(t+s.height())<0||d.width-(u+s.width())<0)k=!0;if(c.series.pie.label.background.opacity!=0){var v=c.series.pie.label.background.color;v==null&&(v=b.color);var w="top:"+t+"px;left:"+u+"px;";a('<div class="pieLabelBackground" style="position:absolute;width:'+s.width()+"px;height:"+s.height()+"px;"+w+"background-color:"+v+';"> </div>').insertBefore(s).css("opacity",c.series.pie.label.background.opacity)}}var b=startAngle;if(c.series.pie.label.radius>1)var i=c.series.pie.label.radius;else var i=f*c.series.pie.label.radius;for(var l=0;l<j.length;++l)j[l].percent>=c.series.pie.label.threshold*100&&m(j[l],b,l),b+=j[l].angle}startAngle=Math.PI*c.series.pie.startAngle;if(c.series.pie.radius>1)var b=c.series.pie.radius;else var b=f*c.series.pie.radius;ctx.save(),ctx.translate(g,h),ctx.scale(1,c.series.pie.tilt),ctx.save();var i=startAngle;for(var l=0;l<j.length;++l)j[l].startAngle=i,m(j[l].angle,j[l].color,!0);ctx.restore(),ctx.save(),ctx.lineWidth=c.series.pie.stroke.width,i=startAngle;for(var l=0;l<j.length;++l)m(j[l].angle,c.series.pie.stroke.color,!1);ctx.restore(),C(ctx),c.series.pie.label.show&&n(),ctx.restore()}if(!e)return;ctx=i,w();var j=b.getData(),n=0;while(k&&n<l)k=!1,n>0&&(f*=m),n+=1,o(),c.series.pie.tilt<=.8&&p(),q();n>=l&&(o(),e.prepend('<div class="error">Could not draw pie with labels contained inside canvas</div>')),b.setSeries&&b.insertLegend&&(b.setSeries(j),b.insertLegend())}function C(a){c.series.pie.innerRadius>0&&(a.save(),innerRadius=c.series.pie.innerRadius>1?c.series.pie.innerRadius:f*c.series.pie.innerRadius,a.globalCompositeOperation="destination-out",a.beginPath(),a.fillStyle=c.series.pie.stroke.color,a.arc(0,0,innerRadius,0,Math.PI*2,!1),a.fill(),a.closePath(),a.restore(),a.save(),a.beginPath(),a.strokeStyle=c.series.pie.stroke.color,a.arc(0,0,innerRadius,0,Math.PI*2,!1),a.stroke(),a.closePath(),a.restore())}function D(a,b){for(var c=!1,d=-1,e=a.length,f=e-1;++d<e;f=d)(a[d][1]<=b[1]&&b[1]<a[f][1]||a[f][1]<=b[1]&&b[1]<a[d][1])&&b[0]<(a[f][0]-a[d][0])*(b[1]-a[d][1])/(a[f][1]-a[d][1])+a[d][0]&&(c=!c);return c}function E(a,c){var d=b.getData(),e=b.getOptions(),i=e.series.pie.radius>1?e.series.pie.radius:f*e.series.pie.radius;for(var j=0;j<d.length;++j){var k=d[j];if(k.pie.show){ctx.save(),ctx.beginPath(),ctx.moveTo(0,0),ctx.arc(0,0,i,k.startAngle,k.startAngle+k.angle,!1),ctx.closePath(),x=a-g,y=c-h;if(ctx.isPointInPath){if(ctx.isPointInPath(a-g,c-h))return ctx.restore(),{datapoint:[k.percent,k.data],dataIndex:0,series:k,seriesIndex:j}}else{p1X=i*Math.cos(k.startAngle),p1Y=i*Math.sin(k.startAngle),p2X=i*Math.cos(k.startAngle+k.angle/4),p2Y=i*Math.sin(k.startAngle+k.angle/4),p3X=i*Math.cos(k.startAngle+k.angle/2),p3Y=i*Math.sin(k.startAngle+k.angle/2),p4X=i*Math.cos(k.startAngle+k.angle/1.5),p4Y=i*Math.sin(k.startAngle+k.angle/1.5),p5X=i*Math.cos(k.startAngle+k.angle),p5Y=i*Math.sin(k.startAngle+k.angle),arrPoly=[[0,0],[p1X,p1Y],[p2X,p2Y],[p3X,p3Y],[p4X,p4Y],[p5X,p5Y]],arrPoint=[x,y];if(D(arrPoly,arrPoint))return ctx.restore(),{datapoint:[k.percent,k.data],dataIndex:0,series:k,seriesIndex:j}}ctx.restore()}}return null}function F(a){H("plothover",a)}function G(a){H("plotclick",a)}function H(a,d){var f=b.offset(),g=parseInt(d.pageX-f.left),h=parseInt(d.pageY-f.top),i=E(g,h);if(c.grid.autoHighlight)for(var j=0;j<q.length;++j){var k=q[j];k.auto==a&&(!i||k.series!=i.series)&&J(k.series)}i&&I(i.series,a);var l={pageX:d.pageX,pageY:d.pageY};e.trigger(a,[l,i])}function I(a,c){typeof a=="number"&&(a=series[a]);var d=K(a);d==-1?(q.push({series:a,auto:c}),b.triggerRedrawOverlay()):c||(q[d].auto=!1)}function J(a){a==null&&(q=[],b.triggerRedrawOverlay()),typeof a=="number"&&(a=series[a]);var c=K(a);c!=-1&&(q.splice(c,1),b.triggerRedrawOverlay())}function K(a){for(var b=0;b<q.length;++b){var c=q[b];if(c.series==a)return b}return-1}function L(a,b){function e(a){if(a.angle<0)return;b.fillStyle="rgba(255, 255, 255, "+c.series.pie.highlight.opacity+")",b.beginPath(),Math.abs(a.angle-Math.PI*2)>1e-9&&b.moveTo(0,0),b.arc(0,0,d,a.startAngle,a.startAngle+a.angle,!1),b.closePath(),b.fill()}var c=a.getOptions(),d=c.series.pie.radius>1?c.series.pie.radius:f*c.series.pie.radius;b.save(),b.translate(g,h),b.scale(1,c.series.pie.tilt);for(i=0;i<q.length;++i)e(q[i].series);C(b),b.restore()}var d=null,e=null,f=null,g=null,h=null,j=0,k=!0,l=10,m=.95,n=0,o=!1,p=!1,q=[];b.hooks.processOptions.push(r),b.hooks.bindEvents.push(s)}var c={series:{pie:{show:!1,radius:"auto",innerRadius:0,startAngle:1.5,tilt:1,offset:{top:0,left:"auto"},stroke:{color:"#FFF",width:1},label:{show:"auto",formatter:function(a,b){return'<div style="font-size:x-small;text-align:center;padding:2px;color:'+b.color+';">'+a+"<br/>"+Math.round(b.percent)+"%</div>"},radius:1,background:{color:null,opacity:0},threshold:0},combine:{threshold:-1,color:null,label:"Other"},highlight:{opacity:.5}}}};a.plot.plugins.push({init:b,options:c,name:"pie",version:"1.0"})})(jQuery);