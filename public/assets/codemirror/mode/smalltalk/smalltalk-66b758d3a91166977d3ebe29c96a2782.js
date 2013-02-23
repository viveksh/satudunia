CodeMirror.defineMode("smalltalk",function(a,b){function e(a,b,c){return b.tokenize=c,c(a,b)}function g(a,b){return f=a,b}function h(a,b){var d=a.next();return d=='"'?e(a,b,j(d)):d=="'"?e(a,b,i(d)):d=="#"?(a.eatWhile(/[\w\$_]/),g("string","string")):/\d/.test(d)?(a.eatWhile(/[\w\.]/),g("number","number")):/[\[\]()]/.test(d)?g(d,null):(a.eatWhile(/[\w\$_]/),c&&c.propertyIsEnumerable(a.current())?g("keyword","keyword"):g("word","variable"))}function i(a){return function(b,c){var d=!1,e,f=!1;while((e=b.next())!=null){if(e==a&&!d){f=!0;break}d=!d&&e=="\\"}if(f||!d)c.tokenize=h;return g("string","string")}}function j(a){return function(b,c){var d,e=!1;while((d=b.next())!=null)if(d==a){e=!0;break}return e&&(c.tokenize=h),g("comment","comment")}}function k(a,b,c,d,e){this.indented=a,this.column=b,this.type=c,this.align=d,this.prev=e}function l(a,b,c){return a.context=new k(a.indented,b,c,null,a.context)}function m(a){return a.context=a.context.prev}var c={"true":1,"false":1,nil:1,self:1,"super":1,thisContext:1},d=a.indentUnit,f;return{startState:function(a){return{tokenize:h,context:new k((a||0)-d,0,"top",!1),indented:0,startOfLine:!0}},token:function(a,b){var c=b.context;a.sol()&&(c.align==null&&(c.align=!1),b.indented=a.indentation(),b.startOfLine=!0);if(a.eatSpace())return null;var d=b.tokenize(a,b);return f=="comment"?d:(c.align==null&&(c.align=!0),f=="["?l(b,a.column(),"]"):f=="("?l(b,a.column(),")"):f==c.type&&m(b),b.startOfLine=!1,d)},indent:function(a,b){if(a.tokenize!=h)return 0;var c=b&&b.charAt(0),e=a.context,f=c==e.type;return e.align?e.column+(f?0:1):e.indented+(f?0:d)},electricChars:"]"}}),CodeMirror.defineMIME("text/x-stsrc",{name:"smalltalk"});