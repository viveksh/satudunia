CodeMirror.defineMode("javascript",function(a,b){function g(a,b,c){return b.tokenize=c,c(a,b)}function h(a,b){var c=!1,d;while((d=a.next())!=null){if(d==b&&!c)return!1;c=!c&&d=="\\"}return c}function k(a,b,c){return i=a,j=c,b}function l(a,b){var c=a.next();if(c=='"'||c=="'")return g(a,b,m(c));if(/[\[\]{}\(\),;\:\.]/.test(c))return k(c);if(c=="0"&&a.eat(/x/i))return a.eatWhile(/[\da-f]/i),k("number","number");if(/\d/.test(c))return a.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),k("number","number");if(c=="/")return a.eat("*")?g(a,b,n):a.eat("/")?(a.skipToEnd(),k("comment","comment")):b.reAllowed?(h(a,"/"),a.eatWhile(/[gimy]/),k("regexp","string")):(a.eatWhile(f),k("operator",null,a.current()));if(c=="#")return a.skipToEnd(),k("error","error");if(f.test(c))return a.eatWhile(f),k("operator",null,a.current());a.eatWhile(/[\w\$_]/);var d=a.current(),i=e.propertyIsEnumerable(d)&&e[d];return i?k(i.type,i.style,d):k("variable","variable",d)}function m(a){return function(b,c){return h(b,a)||(c.tokenize=l),k("string","string")}}function n(a,b){var c=!1,d;while(d=a.next()){if(d=="/"&&c){b.tokenize=l;break}c=d=="*"}return k("comment","comment")}function p(a,b,c,d,e,f){this.indented=a,this.column=b,this.type=c,this.prev=e,this.info=f,d!=null&&(this.align=d)}function q(a,b){for(var c=a.localVars;c;c=c.next)if(c.name==b)return!0}function r(a,b,c,e,f){var g=a.cc;s.state=a,s.stream=f,s.marked=null,s.cc=g,a.lexical.hasOwnProperty("align")||(a.lexical.align=!0);for(;;){var h=g.length?g.pop():d?D:C;if(h(c,e)){while(g.length&&g[g.length-1].lex)g.pop()();return s.marked?s.marked:c=="variable"&&q(a,e)?"variable-2":b}}}function t(){for(var a=arguments.length-1;a>=0;a--)s.cc.push(arguments[a])}function u(){return t.apply(null,arguments),!0}function v(a){var b=s.state;if(b.context){s.marked="def";for(var c=b.localVars;c;c=c.next)if(c.name==a)return;b.localVars={name:a,next:b.localVars}}}function x(){s.state.context||(s.state.localVars=w),s.state.context={prev:s.state.context,vars:s.state.localVars}}function y(){s.state.localVars=s.state.context.vars,s.state.context=s.state.context.prev}function z(a,b){var c=function(){var c=s.state;c.lexical=new p(c.indented,s.stream.column(),a,null,c.lexical,b)};return c.lex=!0,c}function A(){var a=s.state;a.lexical.prev&&(a.lexical.type==")"&&(a.indented=a.lexical.indented),a.lexical=a.lexical.prev)}function B(a){return function(c){return c==a?u():a==";"?t():u(arguments.callee)}}function C(a){return a=="var"?u(z("vardef"),K,B(";"),A):a=="keyword a"?u(z("form"),D,C,A):a=="keyword b"?u(z("form"),C,A):a=="{"?u(z("}"),J,A):a==";"?u():a=="function"?u(Q):a=="for"?u(z("form"),B("("),z(")"),M,B(")"),A,C,A):a=="variable"?u(z("stat"),F):a=="switch"?u(z("form"),D,z("}","switch"),B("{"),J,A,A):a=="case"?u(D,B(":")):a=="default"?u(B(":")):a=="catch"?u(z("form"),x,B("("),R,B(")"),C,A,y):t(z("stat"),D,B(";"),A)}function D(a){return o.hasOwnProperty(a)?u(E):a=="function"?u(Q):a=="keyword c"?u(D):a=="("?u(z(")"),D,B(")"),A,E):a=="operator"?u(D):a=="["?u(z("]"),I(D,"]"),A,E):a=="{"?u(z("}"),I(H,"}"),A,E):u()}function E(a,b){if(a=="operator"&&/\+\+|--/.test(b))return u(E);if(a=="operator")return u(D);if(a==";")return;if(a=="(")return u(z(")"),I(D,")"),A,E);if(a==".")return u(G,E);if(a=="[")return u(z("]"),D,B("]"),A,E)}function F(a){return a==":"?u(A,C):t(E,B(";"),A)}function G(a){if(a=="variable")return s.marked="property",u()}function H(a){a=="variable"&&(s.marked="property");if(o.hasOwnProperty(a))return u(B(":"),D)}function I(a,b){function c(d){return d==","?u(a,c):d==b?u():u(B(b))}return function(e){return e==b?u():t(a,c)}}function J(a){return a=="}"?u():t(C,J)}function K(a,b){return a=="variable"?(v(b),u(L)):u()}function L(a,b){if(b=="=")return u(D,L);if(a==",")return u(K)}function M(a){return a=="var"?u(K,O):a==";"?t(O):a=="variable"?u(N):t(O)}function N(a,b){return b=="in"?u(D):u(E,O)}function O(a,b){return a==";"?u(P):b=="in"?u(D):u(D,B(";"),P)}function P(a){a!=")"&&u(D)}function Q(a,b){if(a=="variable")return v(b),u(Q);if(a=="(")return u(z(")"),x,I(R,")"),A,C,y)}function R(a,b){if(a=="variable")return v(b),u()}var c=a.indentUnit,d=b.json,e=function(){function a(a){return{type:a,style:"keyword"}}var b=a("keyword a"),c=a("keyword b"),d=a("keyword c"),e=a("operator"),f={type:"atom",style:"atom"};return{"if":b,"while":b,"with":b,"else":c,"do":c,"try":c,"finally":c,"return":d,"break":d,"continue":d,"new":d,"delete":d,"throw":d,"var":a("var"),"function":a("function"),"catch":a("catch"),"for":a("for"),"switch":a("switch"),"case":a("case"),"default":a("default"),"in":e,"typeof":e,"instanceof":e,"true":f,"false":f,"null":f,"undefined":f,NaN:f,Infinity:f}}(),f=/[+\-*&%=<>!?|]/,i,j,o={atom:!0,number:!0,variable:!0,string:!0,regexp:!0},s={state:null,column:null,marked:null,cc:null},w={name:"this",next:{name:"arguments"}};return A.lex=!0,{startState:function(a){return{tokenize:l,reAllowed:!0,cc:[],lexical:new p((a||0)-c,0,"block",!1),localVars:null,context:null,indented:0}},token:function(a,b){a.sol()&&(b.lexical.hasOwnProperty("align")||(b.lexical.align=!1),b.indented=a.indentation());if(a.eatSpace())return null;var c=b.tokenize(a,b);return i=="comment"?c:(b.reAllowed=i=="operator"||i=="keyword c"||i.match(/^[\[{}\(,;:]$/),r(b,c,i,j,a))},indent:function(a,b){if(a.tokenize!=l)return 0;var d=b&&b.charAt(0),e=a.lexical,f=e.type,g=d==f;return f=="vardef"?e.indented+4:f=="form"&&d=="{"?e.indented:f=="stat"||f=="form"?e.indented+c:e.info=="switch"&&!g?e.indented+(/^(?:case|default)\b/.test(b)?c:2*c):e.align?e.column+(g?0:1):e.indented+(g?0:c)},electricChars:":{}"}}),CodeMirror.defineMIME("text/javascript","javascript"),CodeMirror.defineMIME("application/json",{name:"javascript",json:!0});