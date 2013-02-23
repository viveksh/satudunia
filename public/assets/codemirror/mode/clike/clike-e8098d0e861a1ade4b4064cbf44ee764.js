CodeMirror.defineMode("clike",function(a,b){function k(a,b){var c=a.next();if(g[c]){var h=g[c](a,b);if(h!==!1)return h}if(c=='"'||c=="'")return b.tokenize=l(c),b.tokenize(a,b);if(/[\[\]{}\(\),;\:\.]/.test(c))return j=c,null;if(/\d/.test(c))return a.eatWhile(/[\w\.]/),"number";if(c=="/"){if(a.eat("*"))return b.tokenize=m,m(a,b);if(a.eat("/"))return a.skipToEnd(),"comment"}if(i.test(c))return a.eatWhile(i),"operator";a.eatWhile(/[\w\$_]/);var k=a.current();return d.propertyIsEnumerable(k)?(e.propertyIsEnumerable(k)&&(j="newstatement"),"keyword"):f.propertyIsEnumerable(k)?"atom":"word"}function l(a){return function(b,c){var d=!1,e,f=!1;while((e=b.next())!=null){if(e==a&&!d){f=!0;break}d=!d&&e=="\\"}if(f||!d&&!h)c.tokenize=k;return"string"}}function m(a,b){var c=!1,d;while(d=a.next()){if(d=="/"&&c){b.tokenize=k;break}c=d=="*"}return"comment"}function n(a,b,c,d,e){this.indented=a,this.column=b,this.type=c,this.align=d,this.prev=e}function o(a,b,c){return a.context=new n(a.indented,b,c,null,a.context)}function p(a){var b=a.context.type;if(b==")"||b=="]"||b=="}")a.indented=a.context.indented;return a.context=a.context.prev}var c=a.indentUnit,d=b.keywords||{},e=b.blockKeywords||{},f=b.atoms||{},g=b.hooks||{},h=b.multiLineStrings,i=/[+\-*&%=<>!?|\/]/,j;return{startState:function(a){return{tokenize:null,context:new n((a||0)-c,0,"top",!1),indented:0,startOfLine:!0}},token:function(a,b){var c=b.context;a.sol()&&(c.align==null&&(c.align=!1),b.indented=a.indentation(),b.startOfLine=!0);if(a.eatSpace())return null;j=null;var d=(b.tokenize||k)(a,b);if(d=="comment"||d=="meta")return d;c.align==null&&(c.align=!0);if(j!=";"&&j!=":"||c.type!="statement")if(j=="{")o(b,a.column(),"}");else if(j=="[")o(b,a.column(),"]");else if(j=="(")o(b,a.column(),")");else if(j=="}"){while(c.type=="statement")c=p(b);c.type=="}"&&(c=p(b));while(c.type=="statement")c=p(b)}else j==c.type?p(b):(c.type=="}"||c.type=="top"||c.type=="statement"&&j=="newstatement")&&o(b,a.column(),"statement");else p(b);return b.startOfLine=!1,d},indent:function(a,b){if(a.tokenize!=k&&a.tokenize!=null)return 0;var d=b&&b.charAt(0),e=a.context,f=d==e.type;return e.type=="statement"?e.indented+(d=="{"?0:c):e.align?e.column+(f?0:1):e.indented+(f?0:c)},electricChars:"{}"}}),function(){function a(a){var b={},c=a.split(" ");for(var d=0;d<c.length;++d)b[c[d]]=!0;return b}function c(a,b){return b.startOfLine?(a.skipToEnd(),"meta"):!1}function d(a,b){var c;while((c=a.next())!=null)if(c=='"'&&!a.eat('"')){b.tokenize=null;break}return"string"}var b="auto if break int case long char register continue return default short do sizeof double static else struct entry switch extern typedef float union for unsigned goto while enum void const signed volatile";CodeMirror.defineMIME("text/x-csrc",{name:"clike",keywords:a(b),blockKeywords:a("case do else for if switch while struct"),atoms:a("null"),hooks:{"#":c}}),CodeMirror.defineMIME("text/x-c++src",{name:"clike",keywords:a(b+" asm dynamic_cast namespace reinterpret_cast try bool explicit new "+"static_cast typeid catch operator template typename class friend private "+"this using const_cast inline public throw virtual delete mutable protected "+"wchar_t"),blockKeywords:a("catch class do else finally for if struct switch try while"),atoms:a("true false null"),hooks:{"#":c}}),CodeMirror.defineMIME("text/x-java",{name:"clike",keywords:a("abstract assert boolean break byte case catch char class const continue default do double else enum extends final finally float for goto if implements import instanceof int interface long native new package private protected public return short static strictfp super switch synchronized this throw throws transient try void volatile while"),blockKeywords:a("catch class do else finally for if switch try while"),atoms:a("true false null"),hooks:{"@":function(a,b){return a.eatWhile(/[\w\$_]/),"meta"}}}),CodeMirror.defineMIME("text/x-csharp",{name:"clike",keywords:a("abstract as base bool break byte case catch char checked class const continue decimal default delegate do double else enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long namespace new object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw try typeof uint ulong unchecked unsafe ushort using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),blockKeywords:a("catch class do else finally for foreach if struct switch try while"),atoms:a("true false null"),hooks:{"@":function(a,b){return a.eat('"')?(b.tokenize=d,d(a,b)):(a.eatWhile(/[\w\$_]/),"meta")}}}),CodeMirror.defineMIME("text/x-groovy",{name:"clike",keywords:a("abstract as assert boolean break byte case catch char class const continue def default do double else enum extends final finally float for goto if implements import in instanceof int interface long native new package property private protected public return short static strictfp super switch synchronized this throw throws transient try void volatile while"),atoms:a("true false null"),hooks:{"@":function(a,b){return a.eatWhile(/[\w\$_]/),"meta"}}})}();