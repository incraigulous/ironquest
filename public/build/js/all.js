!function(t,e){"object"==typeof module&&"object"==typeof module.exports?module.exports=t.document?e(t,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return e(t)}:e(t)}("undefined"!=typeof window?window:this,function(t,e){function n(t){var e=t.length,n=Z.type(t);return"function"===n||Z.isWindow(t)?!1:1===t.nodeType&&e?!0:"array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t}function i(t,e,n){if(Z.isFunction(e))return Z.grep(t,function(t,i){return!!e.call(t,i,t)!==n});if(e.nodeType)return Z.grep(t,function(t){return t===e!==n});if("string"==typeof e){if(ae.test(e))return Z.filter(e,t,n);e=Z.filter(e,t)}return Z.grep(t,function(t){return U.call(e,t)>=0!==n})}function o(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}function s(t){var e=fe[t]={};return Z.each(t.match(de)||[],function(t,n){e[n]=!0}),e}function r(){J.removeEventListener("DOMContentLoaded",r,!1),t.removeEventListener("load",r,!1),Z.ready()}function a(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=Z.expando+a.uid++}function l(t,e,n){var i;if(void 0===n&&1===t.nodeType)if(i="data-"+e.replace(we,"-$1").toLowerCase(),n=t.getAttribute(i),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:be.test(n)?Z.parseJSON(n):n}catch(o){}ye.set(t,e,n)}else n=void 0;return n}function c(){return!0}function u(){return!1}function h(){try{return J.activeElement}catch(t){}}function p(t,e){return Z.nodeName(t,"table")&&Z.nodeName(11!==e.nodeType?e:e.firstChild,"tr")?t.getElementsByTagName("tbody")[0]||t.appendChild(t.ownerDocument.createElement("tbody")):t}function d(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function f(t){var e=Pe.exec(t.type);return e?t.type=e[1]:t.removeAttribute("type"),t}function g(t,e){for(var n=0,i=t.length;i>n;n++)ve.set(t[n],"globalEval",!e||ve.get(e[n],"globalEval"))}function m(t,e){var n,i,o,s,r,a,l,c;if(1===e.nodeType){if(ve.hasData(t)&&(s=ve.access(t),r=ve.set(e,s),c=s.events)){delete r.handle,r.events={};for(o in c)for(n=0,i=c[o].length;i>n;n++)Z.event.add(e,o,c[o][n])}ye.hasData(t)&&(a=ye.access(t),l=Z.extend({},a),ye.set(e,l))}}function v(t,e){var n=t.getElementsByTagName?t.getElementsByTagName(e||"*"):t.querySelectorAll?t.querySelectorAll(e||"*"):[];return void 0===e||e&&Z.nodeName(t,e)?Z.merge([t],n):n}function y(t,e){var n=e.nodeName.toLowerCase();"input"===n&&ke.test(t.type)?e.checked=t.checked:("input"===n||"textarea"===n)&&(e.defaultValue=t.defaultValue)}function b(e,n){var i,o=Z(n.createElement(e)).appendTo(n.body),s=t.getDefaultComputedStyle&&(i=t.getDefaultComputedStyle(o[0]))?i.display:Z.css(o[0],"display");return o.detach(),s}function w(t){var e=J,n=qe[t];return n||(n=b(t,e),"none"!==n&&n||(He=(He||Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement),e=He[0].contentDocument,e.write(),e.close(),n=b(t,e),He.detach()),qe[t]=n),n}function x(t,e,n){var i,o,s,r,a=t.style;return n=n||We(t),n&&(r=n.getPropertyValue(e)||n[e]),n&&(""!==r||Z.contains(t.ownerDocument,t)||(r=Z.style(t,e)),Be.test(r)&&_e.test(e)&&(i=a.width,o=a.minWidth,s=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=n.width,a.width=i,a.minWidth=o,a.maxWidth=s)),void 0!==r?r+"":r}function C(t,e){return{get:function(){return t()?void delete this.get:(this.get=e).apply(this,arguments)}}}function T(t,e){if(e in t)return e;for(var n=e[0].toUpperCase()+e.slice(1),i=e,o=Xe.length;o--;)if(e=Xe[o]+n,e in t)return e;return i}function k(t,e,n){var i=Qe.exec(e);return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):e}function $(t,e,n,i,o){for(var s=n===(i?"border":"content")?4:"width"===e?1:0,r=0;4>s;s+=2)"margin"===n&&(r+=Z.css(t,n+Ce[s],!0,o)),i?("content"===n&&(r-=Z.css(t,"padding"+Ce[s],!0,o)),"margin"!==n&&(r-=Z.css(t,"border"+Ce[s]+"Width",!0,o))):(r+=Z.css(t,"padding"+Ce[s],!0,o),"padding"!==n&&(r+=Z.css(t,"border"+Ce[s]+"Width",!0,o)));return r}function E(t,e,n){var i=!0,o="width"===e?t.offsetWidth:t.offsetHeight,s=We(t),r="border-box"===Z.css(t,"boxSizing",!1,s);if(0>=o||null==o){if(o=x(t,e,s),(0>o||null==o)&&(o=t.style[e]),Be.test(o))return o;i=r&&(G.boxSizingReliable()||o===t.style[e]),o=parseFloat(o)||0}return o+$(t,e,n||(r?"border":"content"),i,s)+"px"}function S(t,e){for(var n,i,o,s=[],r=0,a=t.length;a>r;r++)i=t[r],i.style&&(s[r]=ve.get(i,"olddisplay"),n=i.style.display,e?(s[r]||"none"!==n||(i.style.display=""),""===i.style.display&&Te(i)&&(s[r]=ve.access(i,"olddisplay",w(i.nodeName)))):(o=Te(i),"none"===n&&o||ve.set(i,"olddisplay",o?n:Z.css(i,"display"))));for(r=0;a>r;r++)i=t[r],i.style&&(e&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=e?s[r]||"":"none"));return t}function O(t,e,n,i,o){return new O.prototype.init(t,e,n,i,o)}function A(){return setTimeout(function(){Ge=void 0}),Ge=Z.now()}function N(t,e){var n,i=0,o={height:t};for(e=e?1:0;4>i;i+=2-e)n=Ce[i],o["margin"+n]=o["padding"+n]=t;return e&&(o.opacity=o.width=t),o}function D(t,e,n){for(var i,o=(nn[e]||[]).concat(nn["*"]),s=0,r=o.length;r>s;s++)if(i=o[s].call(n,e,t))return i}function j(t,e,n){var i,o,s,r,a,l,c,u,h=this,p={},d=t.style,f=t.nodeType&&Te(t),g=ve.get(t,"fxshow");n.queue||(a=Z._queueHooks(t,"fx"),null==a.unqueued&&(a.unqueued=0,l=a.empty.fire,a.empty.fire=function(){a.unqueued||l()}),a.unqueued++,h.always(function(){h.always(function(){a.unqueued--,Z.queue(t,"fx").length||a.empty.fire()})})),1===t.nodeType&&("height"in e||"width"in e)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],c=Z.css(t,"display"),u="none"===c?ve.get(t,"olddisplay")||w(t.nodeName):c,"inline"===u&&"none"===Z.css(t,"float")&&(d.display="inline-block")),n.overflow&&(d.overflow="hidden",h.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in e)if(o=e[i],Ye.exec(o)){if(delete e[i],s=s||"toggle"===o,o===(f?"hide":"show")){if("show"!==o||!g||void 0===g[i])continue;f=!0}p[i]=g&&g[i]||Z.style(t,i)}else c=void 0;if(Z.isEmptyObject(p))"inline"===("none"===c?w(t.nodeName):c)&&(d.display=c);else{g?"hidden"in g&&(f=g.hidden):g=ve.access(t,"fxshow",{}),s&&(g.hidden=!f),f?Z(t).show():h.done(function(){Z(t).hide()}),h.done(function(){var e;ve.remove(t,"fxshow");for(e in p)Z.style(t,e,p[e])});for(i in p)r=D(f?g[i]:0,i,h),i in g||(g[i]=r.start,f&&(r.end=r.start,r.start="width"===i||"height"===i?1:0))}}function I(t,e){var n,i,o,s,r;for(n in t)if(i=Z.camelCase(n),o=e[i],s=t[n],Z.isArray(s)&&(o=s[1],s=t[n]=s[0]),n!==i&&(t[i]=s,delete t[n]),r=Z.cssHooks[i],r&&"expand"in r){s=r.expand(s),delete t[i];for(n in s)n in t||(t[n]=s[n],e[n]=o)}else e[i]=o}function L(t,e,n){var i,o,s=0,r=en.length,a=Z.Deferred().always(function(){delete l.elem}),l=function(){if(o)return!1;for(var e=Ge||A(),n=Math.max(0,c.startTime+c.duration-e),i=n/c.duration||0,s=1-i,r=0,l=c.tweens.length;l>r;r++)c.tweens[r].run(s);return a.notifyWith(t,[c,s,n]),1>s&&l?n:(a.resolveWith(t,[c]),!1)},c=a.promise({elem:t,props:Z.extend({},e),opts:Z.extend(!0,{specialEasing:{}},n),originalProperties:e,originalOptions:n,startTime:Ge||A(),duration:n.duration,tweens:[],createTween:function(e,n){var i=Z.Tween(t,c.opts,e,n,c.opts.specialEasing[e]||c.opts.easing);return c.tweens.push(i),i},stop:function(e){var n=0,i=e?c.tweens.length:0;if(o)return this;for(o=!0;i>n;n++)c.tweens[n].run(1);return e?a.resolveWith(t,[c,e]):a.rejectWith(t,[c,e]),this}}),u=c.props;for(I(u,c.opts.specialEasing);r>s;s++)if(i=en[s].call(c,t,u,c.opts))return i;return Z.map(u,D,c),Z.isFunction(c.opts.start)&&c.opts.start.call(t,c),Z.fx.timer(Z.extend(l,{elem:t,anim:c,queue:c.opts.queue})),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always)}function F(t){return function(e,n){"string"!=typeof e&&(n=e,e="*");var i,o=0,s=e.toLowerCase().match(de)||[];if(Z.isFunction(n))for(;i=s[o++];)"+"===i[0]?(i=i.slice(1)||"*",(t[i]=t[i]||[]).unshift(n)):(t[i]=t[i]||[]).push(n)}}function P(t,e,n,i){function o(a){var l;return s[a]=!0,Z.each(t[a]||[],function(t,a){var c=a(e,n,i);return"string"!=typeof c||r||s[c]?r?!(l=c):void 0:(e.dataTypes.unshift(c),o(c),!1)}),l}var s={},r=t===wn;return o(e.dataTypes[0])||!s["*"]&&o("*")}function R(t,e){var n,i,o=Z.ajaxSettings.flatOptions||{};for(n in e)void 0!==e[n]&&((o[n]?t:i||(i={}))[n]=e[n]);return i&&Z.extend(!0,t,i),t}function M(t,e,n){for(var i,o,s,r,a=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=t.mimeType||e.getResponseHeader("Content-Type"));if(i)for(o in a)if(a[o]&&a[o].test(i)){l.unshift(o);break}if(l[0]in n)s=l[0];else{for(o in n){if(!l[0]||t.converters[o+" "+l[0]]){s=o;break}r||(r=o)}s=s||r}return s?(s!==l[0]&&l.unshift(s),n[s]):void 0}function H(t,e,n,i){var o,s,r,a,l,c={},u=t.dataTypes.slice();if(u[1])for(r in t.converters)c[r.toLowerCase()]=t.converters[r];for(s=u.shift();s;)if(t.responseFields[s]&&(n[t.responseFields[s]]=e),!l&&i&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=s,s=u.shift())if("*"===s)s=l;else if("*"!==l&&l!==s){if(r=c[l+" "+s]||c["* "+s],!r)for(o in c)if(a=o.split(" "),a[1]===s&&(r=c[l+" "+a[0]]||c["* "+a[0]])){r===!0?r=c[o]:c[o]!==!0&&(s=a[0],u.unshift(a[1]));break}if(r!==!0)if(r&&t["throws"])e=r(e);else try{e=r(e)}catch(h){return{state:"parsererror",error:r?h:"No conversion from "+l+" to "+s}}}return{state:"success",data:e}}function q(t,e,n,i){var o;if(Z.isArray(e))Z.each(e,function(e,o){n||$n.test(t)?i(t,o):q(t+"["+("object"==typeof o?e:"")+"]",o,n,i)});else if(n||"object"!==Z.type(e))i(t,e);else for(o in e)q(t+"["+o+"]",e[o],n,i)}function _(t){return Z.isWindow(t)?t:9===t.nodeType&&t.defaultView}var B=[],W=B.slice,z=B.concat,Q=B.push,U=B.indexOf,K={},V=K.toString,X=K.hasOwnProperty,G={},J=t.document,Y="2.1.3",Z=function(t,e){return new Z.fn.init(t,e)},te=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ee=/^-ms-/,ne=/-([\da-z])/gi,ie=function(t,e){return e.toUpperCase()};Z.fn=Z.prototype={jquery:Y,constructor:Z,selector:"",length:0,toArray:function(){return W.call(this)},get:function(t){return null!=t?0>t?this[t+this.length]:this[t]:W.call(this)},pushStack:function(t){var e=Z.merge(this.constructor(),t);return e.prevObject=this,e.context=this.context,e},each:function(t,e){return Z.each(this,t,e)},map:function(t){return this.pushStack(Z.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return this.pushStack(W.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(0>t?e:0);return this.pushStack(n>=0&&e>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:Q,sort:B.sort,splice:B.splice},Z.extend=Z.fn.extend=function(){var t,e,n,i,o,s,r=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof r&&(c=r,r=arguments[a]||{},a++),"object"==typeof r||Z.isFunction(r)||(r={}),a===l&&(r=this,a--);l>a;a++)if(null!=(t=arguments[a]))for(e in t)n=r[e],i=t[e],r!==i&&(c&&i&&(Z.isPlainObject(i)||(o=Z.isArray(i)))?(o?(o=!1,s=n&&Z.isArray(n)?n:[]):s=n&&Z.isPlainObject(n)?n:{},r[e]=Z.extend(c,s,i)):void 0!==i&&(r[e]=i));return r},Z.extend({expando:"jQuery"+(Y+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isFunction:function(t){return"function"===Z.type(t)},isArray:Array.isArray,isWindow:function(t){return null!=t&&t===t.window},isNumeric:function(t){return!Z.isArray(t)&&t-parseFloat(t)+1>=0},isPlainObject:function(t){return"object"!==Z.type(t)||t.nodeType||Z.isWindow(t)?!1:t.constructor&&!X.call(t.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?K[V.call(t)]||"object":typeof t},globalEval:function(t){var e,n=eval;t=Z.trim(t),t&&(1===t.indexOf("use strict")?(e=J.createElement("script"),e.text=t,J.head.appendChild(e).parentNode.removeChild(e)):n(t))},camelCase:function(t){return t.replace(ee,"ms-").replace(ne,ie)},nodeName:function(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()},each:function(t,e,i){var o,s=0,r=t.length,a=n(t);if(i){if(a)for(;r>s&&(o=e.apply(t[s],i),o!==!1);s++);else for(s in t)if(o=e.apply(t[s],i),o===!1)break}else if(a)for(;r>s&&(o=e.call(t[s],s,t[s]),o!==!1);s++);else for(s in t)if(o=e.call(t[s],s,t[s]),o===!1)break;return t},trim:function(t){return null==t?"":(t+"").replace(te,"")},makeArray:function(t,e){var i=e||[];return null!=t&&(n(Object(t))?Z.merge(i,"string"==typeof t?[t]:t):Q.call(i,t)),i},inArray:function(t,e,n){return null==e?-1:U.call(e,t,n)},merge:function(t,e){for(var n=+e.length,i=0,o=t.length;n>i;i++)t[o++]=e[i];return t.length=o,t},grep:function(t,e,n){for(var i,o=[],s=0,r=t.length,a=!n;r>s;s++)i=!e(t[s],s),i!==a&&o.push(t[s]);return o},map:function(t,e,i){var o,s=0,r=t.length,a=n(t),l=[];if(a)for(;r>s;s++)o=e(t[s],s,i),null!=o&&l.push(o);else for(s in t)o=e(t[s],s,i),null!=o&&l.push(o);return z.apply([],l)},guid:1,proxy:function(t,e){var n,i,o;return"string"==typeof e&&(n=t[e],e=t,t=n),Z.isFunction(t)?(i=W.call(arguments,2),o=function(){return t.apply(e||this,i.concat(W.call(arguments)))},o.guid=t.guid=t.guid||Z.guid++,o):void 0},now:Date.now,support:G}),Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){K["[object "+e+"]"]=e.toLowerCase()});var oe=function(t){function e(t,e,n,i){var o,s,r,a,l,c,h,d,f,g;if((e?e.ownerDocument||e:q)!==j&&D(e),e=e||j,n=n||[],a=e.nodeType,"string"!=typeof t||!t||1!==a&&9!==a&&11!==a)return n;if(!i&&L){if(11!==a&&(o=ye.exec(t)))if(r=o[1]){if(9===a){if(s=e.getElementById(r),!s||!s.parentNode)return n;if(s.id===r)return n.push(s),n}else if(e.ownerDocument&&(s=e.ownerDocument.getElementById(r))&&M(e,s)&&s.id===r)return n.push(s),n}else{if(o[2])return Y.apply(n,e.getElementsByTagName(t)),n;if((r=o[3])&&x.getElementsByClassName)return Y.apply(n,e.getElementsByClassName(r)),n}if(x.qsa&&(!F||!F.test(t))){if(d=h=H,f=e,g=1!==a&&t,1===a&&"object"!==e.nodeName.toLowerCase()){for(c=$(t),(h=e.getAttribute("id"))?d=h.replace(we,"\\$&"):e.setAttribute("id",d),d="[id='"+d+"'] ",l=c.length;l--;)c[l]=d+p(c[l]);f=be.test(t)&&u(e.parentNode)||e,g=c.join(",")}if(g)try{return Y.apply(n,f.querySelectorAll(g)),n}catch(m){}finally{h||e.removeAttribute("id")}}}return S(t.replace(le,"$1"),e,n,i)}function n(){function t(n,i){return e.push(n+" ")>C.cacheLength&&delete t[e.shift()],t[n+" "]=i}var e=[];return t}function i(t){return t[H]=!0,t}function o(t){var e=j.createElement("div");try{return!!t(e)}catch(n){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function s(t,e){for(var n=t.split("|"),i=t.length;i--;)C.attrHandle[n[i]]=e}function r(t,e){var n=e&&t,i=n&&1===t.nodeType&&1===e.nodeType&&(~e.sourceIndex||K)-(~t.sourceIndex||K);if(i)return i;if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}function a(t){return function(e){var n=e.nodeName.toLowerCase();return"input"===n&&e.type===t}}function l(t){return function(e){var n=e.nodeName.toLowerCase();return("input"===n||"button"===n)&&e.type===t}}function c(t){return i(function(e){return e=+e,i(function(n,i){for(var o,s=t([],n.length,e),r=s.length;r--;)n[o=s[r]]&&(n[o]=!(i[o]=n[o]))})})}function u(t){return t&&"undefined"!=typeof t.getElementsByTagName&&t}function h(){}function p(t){for(var e=0,n=t.length,i="";n>e;e++)i+=t[e].value;return i}function d(t,e,n){var i=e.dir,o=n&&"parentNode"===i,s=B++;return e.first?function(e,n,s){for(;e=e[i];)if(1===e.nodeType||o)return t(e,n,s)}:function(e,n,r){var a,l,c=[_,s];if(r){for(;e=e[i];)if((1===e.nodeType||o)&&t(e,n,r))return!0}else for(;e=e[i];)if(1===e.nodeType||o){if(l=e[H]||(e[H]={}),(a=l[i])&&a[0]===_&&a[1]===s)return c[2]=a[2];if(l[i]=c,c[2]=t(e,n,r))return!0}}}function f(t){return t.length>1?function(e,n,i){for(var o=t.length;o--;)if(!t[o](e,n,i))return!1;return!0}:t[0]}function g(t,n,i){for(var o=0,s=n.length;s>o;o++)e(t,n[o],i);return i}function m(t,e,n,i,o){for(var s,r=[],a=0,l=t.length,c=null!=e;l>a;a++)(s=t[a])&&(!n||n(s,i,o))&&(r.push(s),c&&e.push(a));return r}function v(t,e,n,o,s,r){return o&&!o[H]&&(o=v(o)),s&&!s[H]&&(s=v(s,r)),i(function(i,r,a,l){var c,u,h,p=[],d=[],f=r.length,v=i||g(e||"*",a.nodeType?[a]:a,[]),y=!t||!i&&e?v:m(v,p,t,a,l),b=n?s||(i?t:f||o)?[]:r:y;if(n&&n(y,b,a,l),o)for(c=m(b,d),o(c,[],a,l),u=c.length;u--;)(h=c[u])&&(b[d[u]]=!(y[d[u]]=h));if(i){if(s||t){if(s){for(c=[],u=b.length;u--;)(h=b[u])&&c.push(y[u]=h);s(null,b=[],c,l)}for(u=b.length;u--;)(h=b[u])&&(c=s?te(i,h):p[u])>-1&&(i[c]=!(r[c]=h))}}else b=m(b===r?b.splice(f,b.length):b),s?s(null,r,b,l):Y.apply(r,b)})}function y(t){for(var e,n,i,o=t.length,s=C.relative[t[0].type],r=s||C.relative[" "],a=s?1:0,l=d(function(t){return t===e},r,!0),c=d(function(t){return te(e,t)>-1},r,!0),u=[function(t,n,i){var o=!s&&(i||n!==O)||((e=n).nodeType?l(t,n,i):c(t,n,i));return e=null,o}];o>a;a++)if(n=C.relative[t[a].type])u=[d(f(u),n)];else{if(n=C.filter[t[a].type].apply(null,t[a].matches),n[H]){for(i=++a;o>i&&!C.relative[t[i].type];i++);return v(a>1&&f(u),a>1&&p(t.slice(0,a-1).concat({value:" "===t[a-2].type?"*":""})).replace(le,"$1"),n,i>a&&y(t.slice(a,i)),o>i&&y(t=t.slice(i)),o>i&&p(t))}u.push(n)}return f(u)}function b(t,n){var o=n.length>0,s=t.length>0,r=function(i,r,a,l,c){var u,h,p,d=0,f="0",g=i&&[],v=[],y=O,b=i||s&&C.find.TAG("*",c),w=_+=null==y?1:Math.random()||.1,x=b.length;for(c&&(O=r!==j&&r);f!==x&&null!=(u=b[f]);f++){if(s&&u){for(h=0;p=t[h++];)if(p(u,r,a)){l.push(u);break}c&&(_=w)}o&&((u=!p&&u)&&d--,i&&g.push(u))}if(d+=f,o&&f!==d){for(h=0;p=n[h++];)p(g,v,r,a);if(i){if(d>0)for(;f--;)g[f]||v[f]||(v[f]=G.call(l));v=m(v)}Y.apply(l,v),c&&!i&&v.length>0&&d+n.length>1&&e.uniqueSort(l)}return c&&(_=w,O=y),g};return o?i(r):r}var w,x,C,T,k,$,E,S,O,A,N,D,j,I,L,F,P,R,M,H="sizzle"+1*new Date,q=t.document,_=0,B=0,W=n(),z=n(),Q=n(),U=function(t,e){return t===e&&(N=!0),0},K=1<<31,V={}.hasOwnProperty,X=[],G=X.pop,J=X.push,Y=X.push,Z=X.slice,te=function(t,e){for(var n=0,i=t.length;i>n;n++)if(t[n]===e)return n;return-1},ee="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",oe=ie.replace("w","w#"),se="\\["+ne+"*("+ie+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+oe+"))|)"+ne+"*\\]",re=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+se+")*)|.*)\\)|)",ae=new RegExp(ne+"+","g"),le=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ce=new RegExp("^"+ne+"*,"+ne+"*"),ue=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),he=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),pe=new RegExp(re),de=new RegExp("^"+oe+"$"),fe={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie.replace("w","w*")+")"),ATTR:new RegExp("^"+se),PSEUDO:new RegExp("^"+re),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+ee+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},ge=/^(?:input|select|textarea|button)$/i,me=/^h\d$/i,ve=/^[^{]+\{\s*\[native \w/,ye=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,be=/[+~]/,we=/'|\\/g,xe=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),Ce=function(t,e,n){var i="0x"+e-65536;return i!==i||n?e:0>i?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},Te=function(){D()};try{Y.apply(X=Z.call(q.childNodes),q.childNodes),X[q.childNodes.length].nodeType}catch(ke){Y={apply:X.length?function(t,e){J.apply(t,Z.call(e))}:function(t,e){for(var n=t.length,i=0;t[n++]=e[i++];);t.length=n-1}}}x=e.support={},k=e.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;return e?"HTML"!==e.nodeName:!1},D=e.setDocument=function(t){var e,n,i=t?t.ownerDocument||t:q;return i!==j&&9===i.nodeType&&i.documentElement?(j=i,I=i.documentElement,n=i.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",Te,!1):n.attachEvent&&n.attachEvent("onunload",Te)),L=!k(i),x.attributes=o(function(t){return t.className="i",!t.getAttribute("className")}),x.getElementsByTagName=o(function(t){return t.appendChild(i.createComment("")),!t.getElementsByTagName("*").length}),x.getElementsByClassName=ve.test(i.getElementsByClassName),x.getById=o(function(t){return I.appendChild(t).id=H,!i.getElementsByName||!i.getElementsByName(H).length}),x.getById?(C.find.ID=function(t,e){if("undefined"!=typeof e.getElementById&&L){var n=e.getElementById(t);return n&&n.parentNode?[n]:[]}},C.filter.ID=function(t){var e=t.replace(xe,Ce);return function(t){return t.getAttribute("id")===e}}):(delete C.find.ID,C.filter.ID=function(t){var e=t.replace(xe,Ce);return function(t){var n="undefined"!=typeof t.getAttributeNode&&t.getAttributeNode("id");return n&&n.value===e}}),C.find.TAG=x.getElementsByTagName?function(t,e){return"undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t):x.qsa?e.querySelectorAll(t):void 0}:function(t,e){var n,i=[],o=0,s=e.getElementsByTagName(t);if("*"===t){for(;n=s[o++];)1===n.nodeType&&i.push(n);return i}return s},C.find.CLASS=x.getElementsByClassName&&function(t,e){return L?e.getElementsByClassName(t):void 0},P=[],F=[],(x.qsa=ve.test(i.querySelectorAll))&&(o(function(t){I.appendChild(t).innerHTML="<a id='"+H+"'></a><select id='"+H+"-\f]' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&F.push("[*^$]="+ne+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||F.push("\\["+ne+"*(?:value|"+ee+")"),t.querySelectorAll("[id~="+H+"-]").length||F.push("~="),t.querySelectorAll(":checked").length||F.push(":checked"),t.querySelectorAll("a#"+H+"+*").length||F.push(".#.+[+~]")}),o(function(t){var e=i.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&F.push("name"+ne+"*[*^$|!~]?="),t.querySelectorAll(":enabled").length||F.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),F.push(",.*:")})),(x.matchesSelector=ve.test(R=I.matches||I.webkitMatchesSelector||I.mozMatchesSelector||I.oMatchesSelector||I.msMatchesSelector))&&o(function(t){x.disconnectedMatch=R.call(t,"div"),R.call(t,"[s!='']:x"),P.push("!=",re)}),F=F.length&&new RegExp(F.join("|")),P=P.length&&new RegExp(P.join("|")),e=ve.test(I.compareDocumentPosition),M=e||ve.test(I.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,i=e&&e.parentNode;return t===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):t.compareDocumentPosition&&16&t.compareDocumentPosition(i)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},U=e?function(t,e){if(t===e)return N=!0,0;var n=!t.compareDocumentPosition-!e.compareDocumentPosition;return n?n:(n=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1,1&n||!x.sortDetached&&e.compareDocumentPosition(t)===n?t===i||t.ownerDocument===q&&M(q,t)?-1:e===i||e.ownerDocument===q&&M(q,e)?1:A?te(A,t)-te(A,e):0:4&n?-1:1)}:function(t,e){if(t===e)return N=!0,0;var n,o=0,s=t.parentNode,a=e.parentNode,l=[t],c=[e];if(!s||!a)return t===i?-1:e===i?1:s?-1:a?1:A?te(A,t)-te(A,e):0;if(s===a)return r(t,e);for(n=t;n=n.parentNode;)l.unshift(n);for(n=e;n=n.parentNode;)c.unshift(n);for(;l[o]===c[o];)o++;return o?r(l[o],c[o]):l[o]===q?-1:c[o]===q?1:0},i):j},e.matches=function(t,n){return e(t,null,null,n)},e.matchesSelector=function(t,n){if((t.ownerDocument||t)!==j&&D(t),n=n.replace(he,"='$1']"),!(!x.matchesSelector||!L||P&&P.test(n)||F&&F.test(n)))try{var i=R.call(t,n);if(i||x.disconnectedMatch||t.document&&11!==t.document.nodeType)return i}catch(o){}return e(n,j,null,[t]).length>0},e.contains=function(t,e){return(t.ownerDocument||t)!==j&&D(t),M(t,e)},e.attr=function(t,e){(t.ownerDocument||t)!==j&&D(t);var n=C.attrHandle[e.toLowerCase()],i=n&&V.call(C.attrHandle,e.toLowerCase())?n(t,e,!L):void 0;return void 0!==i?i:x.attributes||!L?t.getAttribute(e):(i=t.getAttributeNode(e))&&i.specified?i.value:null},e.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},e.uniqueSort=function(t){var e,n=[],i=0,o=0;if(N=!x.detectDuplicates,A=!x.sortStable&&t.slice(0),t.sort(U),N){for(;e=t[o++];)e===t[o]&&(i=n.push(o));for(;i--;)t.splice(n[i],1)}return A=null,t},T=e.getText=function(t){var e,n="",i=0,o=t.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=T(t)}else if(3===o||4===o)return t.nodeValue}else for(;e=t[i++];)n+=T(e);return n},C=e.selectors={cacheLength:50,createPseudo:i,match:fe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(xe,Ce),t[3]=(t[3]||t[4]||t[5]||"").replace(xe,Ce),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||e.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&e.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2];return fe.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":n&&pe.test(n)&&(e=$(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(xe,Ce).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=W[t+" "];return e||(e=new RegExp("(^|"+ne+")"+t+"("+ne+"|$)"))&&W(t,function(t){return e.test("string"==typeof t.className&&t.className||"undefined"!=typeof t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(t,n,i){return function(o){var s=e.attr(o,t);return null==s?"!="===n:n?(s+="","="===n?s===i:"!="===n?s!==i:"^="===n?i&&0===s.indexOf(i):"*="===n?i&&s.indexOf(i)>-1:"$="===n?i&&s.slice(-i.length)===i:"~="===n?(" "+s.replace(ae," ")+" ").indexOf(i)>-1:"|="===n?s===i||s.slice(0,i.length+1)===i+"-":!1):!0}},CHILD:function(t,e,n,i,o){var s="nth"!==t.slice(0,3),r="last"!==t.slice(-4),a="of-type"===e;return 1===i&&0===o?function(t){return!!t.parentNode}:function(e,n,l){var c,u,h,p,d,f,g=s!==r?"nextSibling":"previousSibling",m=e.parentNode,v=a&&e.nodeName.toLowerCase(),y=!l&&!a;if(m){if(s){for(;g;){for(h=e;h=h[g];)if(a?h.nodeName.toLowerCase()===v:1===h.nodeType)return!1;f=g="only"===t&&!f&&"nextSibling"}return!0}if(f=[r?m.firstChild:m.lastChild],r&&y){for(u=m[H]||(m[H]={}),c=u[t]||[],d=c[0]===_&&c[1],p=c[0]===_&&c[2],h=d&&m.childNodes[d];h=++d&&h&&h[g]||(p=d=0)||f.pop();)if(1===h.nodeType&&++p&&h===e){u[t]=[_,d,p];break}}else if(y&&(c=(e[H]||(e[H]={}))[t])&&c[0]===_)p=c[1];else for(;(h=++d&&h&&h[g]||(p=d=0)||f.pop())&&((a?h.nodeName.toLowerCase()!==v:1!==h.nodeType)||!++p||(y&&((h[H]||(h[H]={}))[t]=[_,p]),h!==e)););return p-=o,p===i||p%i===0&&p/i>=0}}},PSEUDO:function(t,n){var o,s=C.pseudos[t]||C.setFilters[t.toLowerCase()]||e.error("unsupported pseudo: "+t);return s[H]?s(n):s.length>1?(o=[t,t,"",n],C.setFilters.hasOwnProperty(t.toLowerCase())?i(function(t,e){for(var i,o=s(t,n),r=o.length;r--;)i=te(t,o[r]),t[i]=!(e[i]=o[r])}):function(t){return s(t,0,o)}):s}},pseudos:{not:i(function(t){var e=[],n=[],o=E(t.replace(le,"$1"));return o[H]?i(function(t,e,n,i){for(var s,r=o(t,null,i,[]),a=t.length;a--;)(s=r[a])&&(t[a]=!(e[a]=s))}):function(t,i,s){return e[0]=t,o(e,null,s,n),e[0]=null,!n.pop()}}),has:i(function(t){return function(n){return e(t,n).length>0}}),contains:i(function(t){return t=t.replace(xe,Ce),function(e){return(e.textContent||e.innerText||T(e)).indexOf(t)>-1}}),lang:i(function(t){return de.test(t||"")||e.error("unsupported lang: "+t),t=t.replace(xe,Ce).toLowerCase(),function(e){var n;do if(n=L?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return n=n.toLowerCase(),n===t||0===n.indexOf(t+"-");while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var n=t.location&&t.location.hash;return n&&n.slice(1)===e.id},root:function(t){return t===I},focus:function(t){return t===j.activeElement&&(!j.hasFocus||j.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:function(t){return t.disabled===!1},disabled:function(t){return t.disabled===!0},checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,t.selected===!0},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!C.pseudos.empty(t)},header:function(t){return me.test(t.nodeName)},input:function(t){return ge.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:c(function(){return[0]}),last:c(function(t,e){return[e-1]}),eq:c(function(t,e,n){return[0>n?n+e:n]}),even:c(function(t,e){for(var n=0;e>n;n+=2)t.push(n);return t}),odd:c(function(t,e){for(var n=1;e>n;n+=2)t.push(n);return t}),lt:c(function(t,e,n){for(var i=0>n?n+e:n;--i>=0;)t.push(i);return t}),gt:c(function(t,e,n){for(var i=0>n?n+e:n;++i<e;)t.push(i);return t})}},C.pseudos.nth=C.pseudos.eq;for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})C.pseudos[w]=a(w);for(w in{submit:!0,reset:!0})C.pseudos[w]=l(w);return h.prototype=C.filters=C.pseudos,C.setFilters=new h,$=e.tokenize=function(t,n){var i,o,s,r,a,l,c,u=z[t+" "];if(u)return n?0:u.slice(0);for(a=t,l=[],c=C.preFilter;a;){(!i||(o=ce.exec(a)))&&(o&&(a=a.slice(o[0].length)||a),l.push(s=[])),i=!1,(o=ue.exec(a))&&(i=o.shift(),s.push({value:i,type:o[0].replace(le," ")}),a=a.slice(i.length));for(r in C.filter)!(o=fe[r].exec(a))||c[r]&&!(o=c[r](o))||(i=o.shift(),s.push({value:i,type:r,matches:o}),a=a.slice(i.length));if(!i)break}return n?a.length:a?e.error(t):z(t,l).slice(0)},E=e.compile=function(t,e){var n,i=[],o=[],s=Q[t+" "];if(!s){for(e||(e=$(t)),n=e.length;n--;)s=y(e[n]),s[H]?i.push(s):o.push(s);s=Q(t,b(o,i)),s.selector=t}return s},S=e.select=function(t,e,n,i){var o,s,r,a,l,c="function"==typeof t&&t,h=!i&&$(t=c.selector||t);if(n=n||[],1===h.length){if(s=h[0]=h[0].slice(0),s.length>2&&"ID"===(r=s[0]).type&&x.getById&&9===e.nodeType&&L&&C.relative[s[1].type]){if(e=(C.find.ID(r.matches[0].replace(xe,Ce),e)||[])[0],!e)return n;c&&(e=e.parentNode),t=t.slice(s.shift().value.length)}for(o=fe.needsContext.test(t)?0:s.length;o--&&(r=s[o],!C.relative[a=r.type]);)if((l=C.find[a])&&(i=l(r.matches[0].replace(xe,Ce),be.test(s[0].type)&&u(e.parentNode)||e))){if(s.splice(o,1),t=i.length&&p(s),!t)return Y.apply(n,i),n;break}}return(c||E(t,h))(i,e,!L,n,be.test(t)&&u(e.parentNode)||e),n},x.sortStable=H.split("").sort(U).join("")===H,x.detectDuplicates=!!N,D(),x.sortDetached=o(function(t){return 1&t.compareDocumentPosition(j.createElement("div"))}),o(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||s("type|href|height|width",function(t,e,n){return n?void 0:t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),x.attributes&&o(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||s("value",function(t,e,n){return n||"input"!==t.nodeName.toLowerCase()?void 0:t.defaultValue}),o(function(t){return null==t.getAttribute("disabled")})||s(ee,function(t,e,n){var i;return n?void 0:t[e]===!0?e.toLowerCase():(i=t.getAttributeNode(e))&&i.specified?i.value:null}),e}(t);Z.find=oe,Z.expr=oe.selectors,Z.expr[":"]=Z.expr.pseudos,Z.unique=oe.uniqueSort,Z.text=oe.getText,Z.isXMLDoc=oe.isXML,Z.contains=oe.contains;var se=Z.expr.match.needsContext,re=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ae=/^.[^:#\[\.,]*$/;Z.filter=function(t,e,n){var i=e[0];return n&&(t=":not("+t+")"),1===e.length&&1===i.nodeType?Z.find.matchesSelector(i,t)?[i]:[]:Z.find.matches(t,Z.grep(e,function(t){return 1===t.nodeType}))},Z.fn.extend({find:function(t){var e,n=this.length,i=[],o=this;if("string"!=typeof t)return this.pushStack(Z(t).filter(function(){for(e=0;n>e;e++)if(Z.contains(o[e],this))return!0
}));for(e=0;n>e;e++)Z.find(t,o[e],i);return i=this.pushStack(n>1?Z.unique(i):i),i.selector=this.selector?this.selector+" "+t:t,i},filter:function(t){return this.pushStack(i(this,t||[],!1))},not:function(t){return this.pushStack(i(this,t||[],!0))},is:function(t){return!!i(this,"string"==typeof t&&se.test(t)?Z(t):t||[],!1).length}});var le,ce=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ue=Z.fn.init=function(t,e){var n,i;if(!t)return this;if("string"==typeof t){if(n="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:ce.exec(t),!n||!n[1]&&e)return!e||e.jquery?(e||le).find(t):this.constructor(e).find(t);if(n[1]){if(e=e instanceof Z?e[0]:e,Z.merge(this,Z.parseHTML(n[1],e&&e.nodeType?e.ownerDocument||e:J,!0)),re.test(n[1])&&Z.isPlainObject(e))for(n in e)Z.isFunction(this[n])?this[n](e[n]):this.attr(n,e[n]);return this}return i=J.getElementById(n[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=J,this.selector=t,this}return t.nodeType?(this.context=this[0]=t,this.length=1,this):Z.isFunction(t)?"undefined"!=typeof le.ready?le.ready(t):t(Z):(void 0!==t.selector&&(this.selector=t.selector,this.context=t.context),Z.makeArray(t,this))};ue.prototype=Z.fn,le=Z(J);var he=/^(?:parents|prev(?:Until|All))/,pe={children:!0,contents:!0,next:!0,prev:!0};Z.extend({dir:function(t,e,n){for(var i=[],o=void 0!==n;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(o&&Z(t).is(n))break;i.push(t)}return i},sibling:function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n}}),Z.fn.extend({has:function(t){var e=Z(t,this),n=e.length;return this.filter(function(){for(var t=0;n>t;t++)if(Z.contains(this,e[t]))return!0})},closest:function(t,e){for(var n,i=0,o=this.length,s=[],r=se.test(t)||"string"!=typeof t?Z(t,e||this.context):0;o>i;i++)for(n=this[i];n&&n!==e;n=n.parentNode)if(n.nodeType<11&&(r?r.index(n)>-1:1===n.nodeType&&Z.find.matchesSelector(n,t))){s.push(n);break}return this.pushStack(s.length>1?Z.unique(s):s)},index:function(t){return t?"string"==typeof t?U.call(Z(t),this[0]):U.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(Z.unique(Z.merge(this.get(),Z(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),Z.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return Z.dir(t,"parentNode")},parentsUntil:function(t,e,n){return Z.dir(t,"parentNode",n)},next:function(t){return o(t,"nextSibling")},prev:function(t){return o(t,"previousSibling")},nextAll:function(t){return Z.dir(t,"nextSibling")},prevAll:function(t){return Z.dir(t,"previousSibling")},nextUntil:function(t,e,n){return Z.dir(t,"nextSibling",n)},prevUntil:function(t,e,n){return Z.dir(t,"previousSibling",n)},siblings:function(t){return Z.sibling((t.parentNode||{}).firstChild,t)},children:function(t){return Z.sibling(t.firstChild)},contents:function(t){return t.contentDocument||Z.merge([],t.childNodes)}},function(t,e){Z.fn[t]=function(n,i){var o=Z.map(this,e,n);return"Until"!==t.slice(-5)&&(i=n),i&&"string"==typeof i&&(o=Z.filter(i,o)),this.length>1&&(pe[t]||Z.unique(o),he.test(t)&&o.reverse()),this.pushStack(o)}});var de=/\S+/g,fe={};Z.Callbacks=function(t){t="string"==typeof t?fe[t]||s(t):Z.extend({},t);var e,n,i,o,r,a,l=[],c=!t.once&&[],u=function(s){for(e=t.memory&&s,n=!0,a=o||0,o=0,r=l.length,i=!0;l&&r>a;a++)if(l[a].apply(s[0],s[1])===!1&&t.stopOnFalse){e=!1;break}i=!1,l&&(c?c.length&&u(c.shift()):e?l=[]:h.disable())},h={add:function(){if(l){var n=l.length;!function s(e){Z.each(e,function(e,n){var i=Z.type(n);"function"===i?t.unique&&h.has(n)||l.push(n):n&&n.length&&"string"!==i&&s(n)})}(arguments),i?r=l.length:e&&(o=n,u(e))}return this},remove:function(){return l&&Z.each(arguments,function(t,e){for(var n;(n=Z.inArray(e,l,n))>-1;)l.splice(n,1),i&&(r>=n&&r--,a>=n&&a--)}),this},has:function(t){return t?Z.inArray(t,l)>-1:!(!l||!l.length)},empty:function(){return l=[],r=0,this},disable:function(){return l=c=e=void 0,this},disabled:function(){return!l},lock:function(){return c=void 0,e||h.disable(),this},locked:function(){return!c},fireWith:function(t,e){return!l||n&&!c||(e=e||[],e=[t,e.slice?e.slice():e],i?c.push(e):u(e)),this},fire:function(){return h.fireWith(this,arguments),this},fired:function(){return!!n}};return h},Z.extend({Deferred:function(t){var e=[["resolve","done",Z.Callbacks("once memory"),"resolved"],["reject","fail",Z.Callbacks("once memory"),"rejected"],["notify","progress",Z.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var t=arguments;return Z.Deferred(function(n){Z.each(e,function(e,s){var r=Z.isFunction(t[e])&&t[e];o[s[1]](function(){var t=r&&r.apply(this,arguments);t&&Z.isFunction(t.promise)?t.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s[0]+"With"](this===i?n.promise():this,r?[t]:arguments)})}),t=null}).promise()},promise:function(t){return null!=t?Z.extend(t,i):i}},o={};return i.pipe=i.then,Z.each(e,function(t,s){var r=s[2],a=s[3];i[s[1]]=r.add,a&&r.add(function(){n=a},e[1^t][2].disable,e[2][2].lock),o[s[0]]=function(){return o[s[0]+"With"](this===o?i:this,arguments),this},o[s[0]+"With"]=r.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(t){var e,n,i,o=0,s=W.call(arguments),r=s.length,a=1!==r||t&&Z.isFunction(t.promise)?r:0,l=1===a?t:Z.Deferred(),c=function(t,n,i){return function(o){n[t]=this,i[t]=arguments.length>1?W.call(arguments):o,i===e?l.notifyWith(n,i):--a||l.resolveWith(n,i)}};if(r>1)for(e=new Array(r),n=new Array(r),i=new Array(r);r>o;o++)s[o]&&Z.isFunction(s[o].promise)?s[o].promise().done(c(o,i,s)).fail(l.reject).progress(c(o,n,e)):--a;return a||l.resolveWith(i,s),l.promise()}});var ge;Z.fn.ready=function(t){return Z.ready.promise().done(t),this},Z.extend({isReady:!1,readyWait:1,holdReady:function(t){t?Z.readyWait++:Z.ready(!0)},ready:function(t){(t===!0?--Z.readyWait:Z.isReady)||(Z.isReady=!0,t!==!0&&--Z.readyWait>0||(ge.resolveWith(J,[Z]),Z.fn.triggerHandler&&(Z(J).triggerHandler("ready"),Z(J).off("ready"))))}}),Z.ready.promise=function(e){return ge||(ge=Z.Deferred(),"complete"===J.readyState?setTimeout(Z.ready):(J.addEventListener("DOMContentLoaded",r,!1),t.addEventListener("load",r,!1))),ge.promise(e)},Z.ready.promise();var me=Z.access=function(t,e,n,i,o,s,r){var a=0,l=t.length,c=null==n;if("object"===Z.type(n)){o=!0;for(a in n)Z.access(t,e,a,n[a],!0,s,r)}else if(void 0!==i&&(o=!0,Z.isFunction(i)||(r=!0),c&&(r?(e.call(t,i),e=null):(c=e,e=function(t,e,n){return c.call(Z(t),n)})),e))for(;l>a;a++)e(t[a],n,r?i:i.call(t[a],a,e(t[a],n)));return o?t:c?e.call(t):l?e(t[0],n):s};Z.acceptData=function(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType},a.uid=1,a.accepts=Z.acceptData,a.prototype={key:function(t){if(!a.accepts(t))return 0;var e={},n=t[this.expando];if(!n){n=a.uid++;try{e[this.expando]={value:n},Object.defineProperties(t,e)}catch(i){e[this.expando]=n,Z.extend(t,e)}}return this.cache[n]||(this.cache[n]={}),n},set:function(t,e,n){var i,o=this.key(t),s=this.cache[o];if("string"==typeof e)s[e]=n;else if(Z.isEmptyObject(s))Z.extend(this.cache[o],e);else for(i in e)s[i]=e[i];return s},get:function(t,e){var n=this.cache[this.key(t)];return void 0===e?n:n[e]},access:function(t,e,n){var i;return void 0===e||e&&"string"==typeof e&&void 0===n?(i=this.get(t,e),void 0!==i?i:this.get(t,Z.camelCase(e))):(this.set(t,e,n),void 0!==n?n:e)},remove:function(t,e){var n,i,o,s=this.key(t),r=this.cache[s];if(void 0===e)this.cache[s]={};else{Z.isArray(e)?i=e.concat(e.map(Z.camelCase)):(o=Z.camelCase(e),e in r?i=[e,o]:(i=o,i=i in r?[i]:i.match(de)||[])),n=i.length;for(;n--;)delete r[i[n]]}},hasData:function(t){return!Z.isEmptyObject(this.cache[t[this.expando]]||{})},discard:function(t){t[this.expando]&&delete this.cache[t[this.expando]]}};var ve=new a,ye=new a,be=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,we=/([A-Z])/g;Z.extend({hasData:function(t){return ye.hasData(t)||ve.hasData(t)},data:function(t,e,n){return ye.access(t,e,n)},removeData:function(t,e){ye.remove(t,e)},_data:function(t,e,n){return ve.access(t,e,n)},_removeData:function(t,e){ve.remove(t,e)}}),Z.fn.extend({data:function(t,e){var n,i,o,s=this[0],r=s&&s.attributes;if(void 0===t){if(this.length&&(o=ye.get(s),1===s.nodeType&&!ve.get(s,"hasDataAttrs"))){for(n=r.length;n--;)r[n]&&(i=r[n].name,0===i.indexOf("data-")&&(i=Z.camelCase(i.slice(5)),l(s,i,o[i])));ve.set(s,"hasDataAttrs",!0)}return o}return"object"==typeof t?this.each(function(){ye.set(this,t)}):me(this,function(e){var n,i=Z.camelCase(t);if(s&&void 0===e){if(n=ye.get(s,t),void 0!==n)return n;if(n=ye.get(s,i),void 0!==n)return n;if(n=l(s,i,void 0),void 0!==n)return n}else this.each(function(){var n=ye.get(this,i);ye.set(this,i,e),-1!==t.indexOf("-")&&void 0!==n&&ye.set(this,t,e)})},null,e,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){ye.remove(this,t)})}}),Z.extend({queue:function(t,e,n){var i;return t?(e=(e||"fx")+"queue",i=ve.get(t,e),n&&(!i||Z.isArray(n)?i=ve.access(t,e,Z.makeArray(n)):i.push(n)),i||[]):void 0},dequeue:function(t,e){e=e||"fx";var n=Z.queue(t,e),i=n.length,o=n.shift(),s=Z._queueHooks(t,e),r=function(){Z.dequeue(t,e)};"inprogress"===o&&(o=n.shift(),i--),o&&("fx"===e&&n.unshift("inprogress"),delete s.stop,o.call(t,r,s)),!i&&s&&s.empty.fire()},_queueHooks:function(t,e){var n=e+"queueHooks";return ve.get(t,n)||ve.access(t,n,{empty:Z.Callbacks("once memory").add(function(){ve.remove(t,[e+"queue",n])})})}}),Z.fn.extend({queue:function(t,e){var n=2;return"string"!=typeof t&&(e=t,t="fx",n--),arguments.length<n?Z.queue(this[0],t):void 0===e?this:this.each(function(){var n=Z.queue(this,t,e);Z._queueHooks(this,t),"fx"===t&&"inprogress"!==n[0]&&Z.dequeue(this,t)})},dequeue:function(t){return this.each(function(){Z.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var n,i=1,o=Z.Deferred(),s=this,r=this.length,a=function(){--i||o.resolveWith(s,[s])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";r--;)n=ve.get(s[r],t+"queueHooks"),n&&n.empty&&(i++,n.empty.add(a));return a(),o.promise(e)}});var xe=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ce=["Top","Right","Bottom","Left"],Te=function(t,e){return t=e||t,"none"===Z.css(t,"display")||!Z.contains(t.ownerDocument,t)},ke=/^(?:checkbox|radio)$/i;!function(){var t=J.createDocumentFragment(),e=t.appendChild(J.createElement("div")),n=J.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),e.appendChild(n),G.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",G.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var $e="undefined";G.focusinBubbles="onfocusin"in t;var Ee=/^key/,Se=/^(?:mouse|pointer|contextmenu)|click/,Oe=/^(?:focusinfocus|focusoutblur)$/,Ae=/^([^.]*)(?:\.(.+)|)$/;Z.event={global:{},add:function(t,e,n,i,o){var s,r,a,l,c,u,h,p,d,f,g,m=ve.get(t);if(m)for(n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=Z.guid++),(l=m.events)||(l=m.events={}),(r=m.handle)||(r=m.handle=function(e){return typeof Z!==$e&&Z.event.triggered!==e.type?Z.event.dispatch.apply(t,arguments):void 0}),e=(e||"").match(de)||[""],c=e.length;c--;)a=Ae.exec(e[c])||[],d=g=a[1],f=(a[2]||"").split(".").sort(),d&&(h=Z.event.special[d]||{},d=(o?h.delegateType:h.bindType)||d,h=Z.event.special[d]||{},u=Z.extend({type:d,origType:g,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&Z.expr.match.needsContext.test(o),namespace:f.join(".")},s),(p=l[d])||(p=l[d]=[],p.delegateCount=0,h.setup&&h.setup.call(t,i,f,r)!==!1||t.addEventListener&&t.addEventListener(d,r,!1)),h.add&&(h.add.call(t,u),u.handler.guid||(u.handler.guid=n.guid)),o?p.splice(p.delegateCount++,0,u):p.push(u),Z.event.global[d]=!0)},remove:function(t,e,n,i,o){var s,r,a,l,c,u,h,p,d,f,g,m=ve.hasData(t)&&ve.get(t);if(m&&(l=m.events)){for(e=(e||"").match(de)||[""],c=e.length;c--;)if(a=Ae.exec(e[c])||[],d=g=a[1],f=(a[2]||"").split(".").sort(),d){for(h=Z.event.special[d]||{},d=(i?h.delegateType:h.bindType)||d,p=l[d]||[],a=a[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),r=s=p.length;s--;)u=p[s],!o&&g!==u.origType||n&&n.guid!==u.guid||a&&!a.test(u.namespace)||i&&i!==u.selector&&("**"!==i||!u.selector)||(p.splice(s,1),u.selector&&p.delegateCount--,h.remove&&h.remove.call(t,u));r&&!p.length&&(h.teardown&&h.teardown.call(t,f,m.handle)!==!1||Z.removeEvent(t,d,m.handle),delete l[d])}else for(d in l)Z.event.remove(t,d+e[c],n,i,!0);Z.isEmptyObject(l)&&(delete m.handle,ve.remove(t,"events"))}},trigger:function(e,n,i,o){var s,r,a,l,c,u,h,p=[i||J],d=X.call(e,"type")?e.type:e,f=X.call(e,"namespace")?e.namespace.split("."):[];if(r=a=i=i||J,3!==i.nodeType&&8!==i.nodeType&&!Oe.test(d+Z.event.triggered)&&(d.indexOf(".")>=0&&(f=d.split("."),d=f.shift(),f.sort()),c=d.indexOf(":")<0&&"on"+d,e=e[Z.expando]?e:new Z.Event(d,"object"==typeof e&&e),e.isTrigger=o?2:3,e.namespace=f.join("."),e.namespace_re=e.namespace?new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),n=null==n?[e]:Z.makeArray(n,[e]),h=Z.event.special[d]||{},o||!h.trigger||h.trigger.apply(i,n)!==!1)){if(!o&&!h.noBubble&&!Z.isWindow(i)){for(l=h.delegateType||d,Oe.test(l+d)||(r=r.parentNode);r;r=r.parentNode)p.push(r),a=r;a===(i.ownerDocument||J)&&p.push(a.defaultView||a.parentWindow||t)}for(s=0;(r=p[s++])&&!e.isPropagationStopped();)e.type=s>1?l:h.bindType||d,u=(ve.get(r,"events")||{})[e.type]&&ve.get(r,"handle"),u&&u.apply(r,n),u=c&&r[c],u&&u.apply&&Z.acceptData(r)&&(e.result=u.apply(r,n),e.result===!1&&e.preventDefault());return e.type=d,o||e.isDefaultPrevented()||h._default&&h._default.apply(p.pop(),n)!==!1||!Z.acceptData(i)||c&&Z.isFunction(i[d])&&!Z.isWindow(i)&&(a=i[c],a&&(i[c]=null),Z.event.triggered=d,i[d](),Z.event.triggered=void 0,a&&(i[c]=a)),e.result}},dispatch:function(t){t=Z.event.fix(t);var e,n,i,o,s,r=[],a=W.call(arguments),l=(ve.get(this,"events")||{})[t.type]||[],c=Z.event.special[t.type]||{};if(a[0]=t,t.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,t)!==!1){for(r=Z.event.handlers.call(this,t,l),e=0;(o=r[e++])&&!t.isPropagationStopped();)for(t.currentTarget=o.elem,n=0;(s=o.handlers[n++])&&!t.isImmediatePropagationStopped();)(!t.namespace_re||t.namespace_re.test(s.namespace))&&(t.handleObj=s,t.data=s.data,i=((Z.event.special[s.origType]||{}).handle||s.handler).apply(o.elem,a),void 0!==i&&(t.result=i)===!1&&(t.preventDefault(),t.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(t,e){var n,i,o,s,r=[],a=e.delegateCount,l=t.target;if(a&&l.nodeType&&(!t.button||"click"!==t.type))for(;l!==this;l=l.parentNode||this)if(l.disabled!==!0||"click"!==t.type){for(i=[],n=0;a>n;n++)s=e[n],o=s.selector+" ",void 0===i[o]&&(i[o]=s.needsContext?Z(o,this).index(l)>=0:Z.find(o,this,null,[l]).length),i[o]&&i.push(s);i.length&&r.push({elem:l,handlers:i})}return a<e.length&&r.push({elem:this,handlers:e.slice(a)}),r},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(t,e){return null==t.which&&(t.which=null!=e.charCode?e.charCode:e.keyCode),t}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(t,e){var n,i,o,s=e.button;return null==t.pageX&&null!=e.clientX&&(n=t.target.ownerDocument||J,i=n.documentElement,o=n.body,t.pageX=e.clientX+(i&&i.scrollLeft||o&&o.scrollLeft||0)-(i&&i.clientLeft||o&&o.clientLeft||0),t.pageY=e.clientY+(i&&i.scrollTop||o&&o.scrollTop||0)-(i&&i.clientTop||o&&o.clientTop||0)),t.which||void 0===s||(t.which=1&s?1:2&s?3:4&s?2:0),t}},fix:function(t){if(t[Z.expando])return t;var e,n,i,o=t.type,s=t,r=this.fixHooks[o];for(r||(this.fixHooks[o]=r=Se.test(o)?this.mouseHooks:Ee.test(o)?this.keyHooks:{}),i=r.props?this.props.concat(r.props):this.props,t=new Z.Event(s),e=i.length;e--;)n=i[e],t[n]=s[n];return t.target||(t.target=J),3===t.target.nodeType&&(t.target=t.target.parentNode),r.filter?r.filter(t,s):t},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==h()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===h()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&Z.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(t){return Z.nodeName(t.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}},simulate:function(t,e,n,i){var o=Z.extend(new Z.Event,n,{type:t,isSimulated:!0,originalEvent:{}});i?Z.event.trigger(o,null,e):Z.event.dispatch.call(e,o),o.isDefaultPrevented()&&n.preventDefault()}},Z.removeEvent=function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n,!1)},Z.Event=function(t,e){return this instanceof Z.Event?(t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&t.returnValue===!1?c:u):this.type=t,e&&Z.extend(this,e),this.timeStamp=t&&t.timeStamp||Z.now(),void(this[Z.expando]=!0)):new Z.Event(t,e)},Z.Event.prototype={isDefaultPrevented:u,isPropagationStopped:u,isImmediatePropagationStopped:u,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=c,t&&t.preventDefault&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=c,t&&t.stopPropagation&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=c,t&&t.stopImmediatePropagation&&t.stopImmediatePropagation(),this.stopPropagation()}},Z.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){Z.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,i=this,o=t.relatedTarget,s=t.handleObj;return(!o||o!==i&&!Z.contains(i,o))&&(t.type=s.origType,n=s.handler.apply(this,arguments),t.type=e),n}}}),G.focusinBubbles||Z.each({focus:"focusin",blur:"focusout"},function(t,e){var n=function(t){Z.event.simulate(e,t.target,Z.event.fix(t),!0)};Z.event.special[e]={setup:function(){var i=this.ownerDocument||this,o=ve.access(i,e);o||i.addEventListener(t,n,!0),ve.access(i,e,(o||0)+1)},teardown:function(){var i=this.ownerDocument||this,o=ve.access(i,e)-1;o?ve.access(i,e,o):(i.removeEventListener(t,n,!0),ve.remove(i,e))}}}),Z.fn.extend({on:function(t,e,n,i,o){var s,r;if("object"==typeof t){"string"!=typeof e&&(n=n||e,e=void 0);for(r in t)this.on(r,e,n,t[r],o);return this}if(null==n&&null==i?(i=e,n=e=void 0):null==i&&("string"==typeof e?(i=n,n=void 0):(i=n,n=e,e=void 0)),i===!1)i=u;else if(!i)return this;return 1===o&&(s=i,i=function(t){return Z().off(t),s.apply(this,arguments)},i.guid=s.guid||(s.guid=Z.guid++)),this.each(function(){Z.event.add(this,t,i,n,e)})},one:function(t,e,n,i){return this.on(t,e,n,i,1)},off:function(t,e,n){var i,o;if(t&&t.preventDefault&&t.handleObj)return i=t.handleObj,Z(t.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof t){for(o in t)this.off(o,e,t[o]);return this}return(e===!1||"function"==typeof e)&&(n=e,e=void 0),n===!1&&(n=u),this.each(function(){Z.event.remove(this,t,n,e)})},trigger:function(t,e){return this.each(function(){Z.event.trigger(t,e,this)})},triggerHandler:function(t,e){var n=this[0];return n?Z.event.trigger(t,e,n,!0):void 0}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,De=/<([\w:]+)/,je=/<|&#?\w+;/,Ie=/<(?:script|style|link)/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,Fe=/^$|\/(?:java|ecma)script/i,Pe=/^true\/(.*)/,Re=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Me={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Me.optgroup=Me.option,Me.tbody=Me.tfoot=Me.colgroup=Me.caption=Me.thead,Me.th=Me.td,Z.extend({clone:function(t,e,n){var i,o,s,r,a=t.cloneNode(!0),l=Z.contains(t.ownerDocument,t);if(!(G.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||Z.isXMLDoc(t)))for(r=v(a),s=v(t),i=0,o=s.length;o>i;i++)y(s[i],r[i]);if(e)if(n)for(s=s||v(t),r=r||v(a),i=0,o=s.length;o>i;i++)m(s[i],r[i]);else m(t,a);return r=v(a,"script"),r.length>0&&g(r,!l&&v(t,"script")),a},buildFragment:function(t,e,n,i){for(var o,s,r,a,l,c,u=e.createDocumentFragment(),h=[],p=0,d=t.length;d>p;p++)if(o=t[p],o||0===o)if("object"===Z.type(o))Z.merge(h,o.nodeType?[o]:o);else if(je.test(o)){for(s=s||u.appendChild(e.createElement("div")),r=(De.exec(o)||["",""])[1].toLowerCase(),a=Me[r]||Me._default,s.innerHTML=a[1]+o.replace(Ne,"<$1></$2>")+a[2],c=a[0];c--;)s=s.lastChild;Z.merge(h,s.childNodes),s=u.firstChild,s.textContent=""}else h.push(e.createTextNode(o));for(u.textContent="",p=0;o=h[p++];)if((!i||-1===Z.inArray(o,i))&&(l=Z.contains(o.ownerDocument,o),s=v(u.appendChild(o),"script"),l&&g(s),n))for(c=0;o=s[c++];)Fe.test(o.type||"")&&n.push(o);return u},cleanData:function(t){for(var e,n,i,o,s=Z.event.special,r=0;void 0!==(n=t[r]);r++){if(Z.acceptData(n)&&(o=n[ve.expando],o&&(e=ve.cache[o]))){if(e.events)for(i in e.events)s[i]?Z.event.remove(n,i):Z.removeEvent(n,i,e.handle);ve.cache[o]&&delete ve.cache[o]}delete ye.cache[n[ye.expando]]}}}),Z.fn.extend({text:function(t){return me(this,function(t){return void 0===t?Z.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=t)})},null,t,arguments.length)},append:function(){return this.domManip(arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=p(this,t);e.appendChild(t)}})},prepend:function(){return this.domManip(arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=p(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return this.domManip(arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return this.domManip(arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},remove:function(t,e){for(var n,i=t?Z.filter(t,this):this,o=0;null!=(n=i[o]);o++)e||1!==n.nodeType||Z.cleanData(v(n)),n.parentNode&&(e&&Z.contains(n.ownerDocument,n)&&g(v(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(Z.cleanData(v(t,!1)),t.textContent="");return this},clone:function(t,e){return t=null==t?!1:t,e=null==e?t:e,this.map(function(){return Z.clone(this,t,e)})},html:function(t){return me(this,function(t){var e=this[0]||{},n=0,i=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;if("string"==typeof t&&!Ie.test(t)&&!Me[(De.exec(t)||["",""])[1].toLowerCase()]){t=t.replace(Ne,"<$1></$2>");try{for(;i>n;n++)e=this[n]||{},1===e.nodeType&&(Z.cleanData(v(e,!1)),e.innerHTML=t);e=0}catch(o){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=arguments[0];return this.domManip(arguments,function(e){t=this.parentNode,Z.cleanData(v(this)),t&&t.replaceChild(e,this)}),t&&(t.length||t.nodeType)?this:this.remove()},detach:function(t){return this.remove(t,!0)},domManip:function(t,e){t=z.apply([],t);var n,i,o,s,r,a,l=0,c=this.length,u=this,h=c-1,p=t[0],g=Z.isFunction(p);if(g||c>1&&"string"==typeof p&&!G.checkClone&&Le.test(p))return this.each(function(n){var i=u.eq(n);g&&(t[0]=p.call(this,n,i.html())),i.domManip(t,e)});if(c&&(n=Z.buildFragment(t,this[0].ownerDocument,!1,this),i=n.firstChild,1===n.childNodes.length&&(n=i),i)){for(o=Z.map(v(n,"script"),d),s=o.length;c>l;l++)r=n,l!==h&&(r=Z.clone(r,!0,!0),s&&Z.merge(o,v(r,"script"))),e.call(this[l],r,l);if(s)for(a=o[o.length-1].ownerDocument,Z.map(o,f),l=0;s>l;l++)r=o[l],Fe.test(r.type||"")&&!ve.access(r,"globalEval")&&Z.contains(a,r)&&(r.src?Z._evalUrl&&Z._evalUrl(r.src):Z.globalEval(r.textContent.replace(Re,"")))}return this}}),Z.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){Z.fn[t]=function(t){for(var n,i=[],o=Z(t),s=o.length-1,r=0;s>=r;r++)n=r===s?this:this.clone(!0),Z(o[r])[e](n),Q.apply(i,n.get());return this.pushStack(i)}});var He,qe={},_e=/^margin/,Be=new RegExp("^("+xe+")(?!px)[a-z%]+$","i"),We=function(e){return e.ownerDocument.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):t.getComputedStyle(e,null)};!function(){function e(){r.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",r.innerHTML="",o.appendChild(s);var e=t.getComputedStyle(r,null);n="1%"!==e.top,i="4px"===e.width,o.removeChild(s)}var n,i,o=J.documentElement,s=J.createElement("div"),r=J.createElement("div");r.style&&(r.style.backgroundClip="content-box",r.cloneNode(!0).style.backgroundClip="",G.clearCloneStyle="content-box"===r.style.backgroundClip,s.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",s.appendChild(r),t.getComputedStyle&&Z.extend(G,{pixelPosition:function(){return e(),n},boxSizingReliable:function(){return null==i&&e(),i},reliableMarginRight:function(){var e,n=r.appendChild(J.createElement("div"));return n.style.cssText=r.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",r.style.width="1px",o.appendChild(s),e=!parseFloat(t.getComputedStyle(n,null).marginRight),o.removeChild(s),r.removeChild(n),e}}))}(),Z.swap=function(t,e,n,i){var o,s,r={};for(s in e)r[s]=t.style[s],t.style[s]=e[s];o=n.apply(t,i||[]);for(s in e)t.style[s]=r[s];return o};var ze=/^(none|table(?!-c[ea]).+)/,Qe=new RegExp("^("+xe+")(.*)$","i"),Ue=new RegExp("^([+-])=("+xe+")","i"),Ke={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Xe=["Webkit","O","Moz","ms"];Z.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=x(t,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(t,e,n,i){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var o,s,r,a=Z.camelCase(e),l=t.style;return e=Z.cssProps[a]||(Z.cssProps[a]=T(l,a)),r=Z.cssHooks[e]||Z.cssHooks[a],void 0===n?r&&"get"in r&&void 0!==(o=r.get(t,!1,i))?o:l[e]:(s=typeof n,"string"===s&&(o=Ue.exec(n))&&(n=(o[1]+1)*o[2]+parseFloat(Z.css(t,e)),s="number"),null!=n&&n===n&&("number"!==s||Z.cssNumber[a]||(n+="px"),G.clearCloneStyle||""!==n||0!==e.indexOf("background")||(l[e]="inherit"),r&&"set"in r&&void 0===(n=r.set(t,n,i))||(l[e]=n)),void 0)}},css:function(t,e,n,i){var o,s,r,a=Z.camelCase(e);return e=Z.cssProps[a]||(Z.cssProps[a]=T(t.style,a)),r=Z.cssHooks[e]||Z.cssHooks[a],r&&"get"in r&&(o=r.get(t,!0,n)),void 0===o&&(o=x(t,e,i)),"normal"===o&&e in Ve&&(o=Ve[e]),""===n||n?(s=parseFloat(o),n===!0||Z.isNumeric(s)?s||0:o):o}}),Z.each(["height","width"],function(t,e){Z.cssHooks[e]={get:function(t,n,i){return n?ze.test(Z.css(t,"display"))&&0===t.offsetWidth?Z.swap(t,Ke,function(){return E(t,e,i)}):E(t,e,i):void 0},set:function(t,n,i){var o=i&&We(t);return k(t,n,i?$(t,e,i,"border-box"===Z.css(t,"boxSizing",!1,o),o):0)}}}),Z.cssHooks.marginRight=C(G.reliableMarginRight,function(t,e){return e?Z.swap(t,{display:"inline-block"},x,[t,"marginRight"]):void 0}),Z.each({margin:"",padding:"",border:"Width"},function(t,e){Z.cssHooks[t+e]={expand:function(n){for(var i=0,o={},s="string"==typeof n?n.split(" "):[n];4>i;i++)o[t+Ce[i]+e]=s[i]||s[i-2]||s[0];return o}},_e.test(t)||(Z.cssHooks[t+e].set=k)}),Z.fn.extend({css:function(t,e){return me(this,function(t,e,n){var i,o,s={},r=0;if(Z.isArray(e)){for(i=We(t),o=e.length;o>r;r++)s[e[r]]=Z.css(t,e[r],!1,i);return s}return void 0!==n?Z.style(t,e,n):Z.css(t,e)},t,e,arguments.length>1)},show:function(){return S(this,!0)},hide:function(){return S(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){Te(this)?Z(this).show():Z(this).hide()})}}),Z.Tween=O,O.prototype={constructor:O,init:function(t,e,n,i,o,s){this.elem=t,this.prop=n,this.easing=o||"swing",this.options=e,this.start=this.now=this.cur(),this.end=i,this.unit=s||(Z.cssNumber[n]?"":"px")},cur:function(){var t=O.propHooks[this.prop];return t&&t.get?t.get(this):O.propHooks._default.get(this)},run:function(t){var e,n=O.propHooks[this.prop];return this.pos=e=this.options.duration?Z.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):O.propHooks._default.set(this),this}},O.prototype.init.prototype=O.prototype,O.propHooks={_default:{get:function(t){var e;return null==t.elem[t.prop]||t.elem.style&&null!=t.elem.style[t.prop]?(e=Z.css(t.elem,t.prop,""),e&&"auto"!==e?e:0):t.elem[t.prop]},set:function(t){Z.fx.step[t.prop]?Z.fx.step[t.prop](t):t.elem.style&&(null!=t.elem.style[Z.cssProps[t.prop]]||Z.cssHooks[t.prop])?Z.style(t.elem,t.prop,t.now+t.unit):t.elem[t.prop]=t.now}}},O.propHooks.scrollTop=O.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},Z.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2}},Z.fx=O.prototype.init,Z.fx.step={};var Ge,Je,Ye=/^(?:toggle|show|hide)$/,Ze=new RegExp("^(?:([+-])=|)("+xe+")([a-z%]*)$","i"),tn=/queueHooks$/,en=[j],nn={"*":[function(t,e){var n=this.createTween(t,e),i=n.cur(),o=Ze.exec(e),s=o&&o[3]||(Z.cssNumber[t]?"":"px"),r=(Z.cssNumber[t]||"px"!==s&&+i)&&Ze.exec(Z.css(n.elem,t)),a=1,l=20;if(r&&r[3]!==s){s=s||r[3],o=o||[],r=+i||1;do a=a||".5",r/=a,Z.style(n.elem,t,r+s);while(a!==(a=n.cur()/i)&&1!==a&&--l)}return o&&(r=n.start=+r||+i||0,n.unit=s,n.end=o[1]?r+(o[1]+1)*o[2]:+o[2]),n}]};Z.Animation=Z.extend(L,{tweener:function(t,e){Z.isFunction(t)?(e=t,t=["*"]):t=t.split(" ");for(var n,i=0,o=t.length;o>i;i++)n=t[i],nn[n]=nn[n]||[],nn[n].unshift(e)},prefilter:function(t,e){e?en.unshift(t):en.push(t)}}),Z.speed=function(t,e,n){var i=t&&"object"==typeof t?Z.extend({},t):{complete:n||!n&&e||Z.isFunction(t)&&t,duration:t,easing:n&&e||e&&!Z.isFunction(e)&&e};return i.duration=Z.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in Z.fx.speeds?Z.fx.speeds[i.duration]:Z.fx.speeds._default,(null==i.queue||i.queue===!0)&&(i.queue="fx"),i.old=i.complete,i.complete=function(){Z.isFunction(i.old)&&i.old.call(this),i.queue&&Z.dequeue(this,i.queue)},i},Z.fn.extend({fadeTo:function(t,e,n,i){return this.filter(Te).css("opacity",0).show().end().animate({opacity:e},t,n,i)},animate:function(t,e,n,i){var o=Z.isEmptyObject(t),s=Z.speed(e,n,i),r=function(){var e=L(this,Z.extend({},t),s);(o||ve.get(this,"finish"))&&e.stop(!0)};return r.finish=r,o||s.queue===!1?this.each(r):this.queue(s.queue,r)},stop:function(t,e,n){var i=function(t){var e=t.stop;delete t.stop,e(n)};return"string"!=typeof t&&(n=e,e=t,t=void 0),e&&t!==!1&&this.queue(t||"fx",[]),this.each(function(){var e=!0,o=null!=t&&t+"queueHooks",s=Z.timers,r=ve.get(this);if(o)r[o]&&r[o].stop&&i(r[o]);else for(o in r)r[o]&&r[o].stop&&tn.test(o)&&i(r[o]);for(o=s.length;o--;)s[o].elem!==this||null!=t&&s[o].queue!==t||(s[o].anim.stop(n),e=!1,s.splice(o,1));(e||!n)&&Z.dequeue(this,t)})},finish:function(t){return t!==!1&&(t=t||"fx"),this.each(function(){var e,n=ve.get(this),i=n[t+"queue"],o=n[t+"queueHooks"],s=Z.timers,r=i?i.length:0;for(n.finish=!0,Z.queue(this,t,[]),o&&o.stop&&o.stop.call(this,!0),e=s.length;e--;)s[e].elem===this&&s[e].queue===t&&(s[e].anim.stop(!0),s.splice(e,1));for(e=0;r>e;e++)i[e]&&i[e].finish&&i[e].finish.call(this);
delete n.finish})}}),Z.each(["toggle","show","hide"],function(t,e){var n=Z.fn[e];Z.fn[e]=function(t,i,o){return null==t||"boolean"==typeof t?n.apply(this,arguments):this.animate(N(e,!0),t,i,o)}}),Z.each({slideDown:N("show"),slideUp:N("hide"),slideToggle:N("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){Z.fn[t]=function(t,n,i){return this.animate(e,t,n,i)}}),Z.timers=[],Z.fx.tick=function(){var t,e=0,n=Z.timers;for(Ge=Z.now();e<n.length;e++)t=n[e],t()||n[e]!==t||n.splice(e--,1);n.length||Z.fx.stop(),Ge=void 0},Z.fx.timer=function(t){Z.timers.push(t),t()?Z.fx.start():Z.timers.pop()},Z.fx.interval=13,Z.fx.start=function(){Je||(Je=setInterval(Z.fx.tick,Z.fx.interval))},Z.fx.stop=function(){clearInterval(Je),Je=null},Z.fx.speeds={slow:600,fast:200,_default:400},Z.fn.delay=function(t,e){return t=Z.fx?Z.fx.speeds[t]||t:t,e=e||"fx",this.queue(e,function(e,n){var i=setTimeout(e,t);n.stop=function(){clearTimeout(i)}})},function(){var t=J.createElement("input"),e=J.createElement("select"),n=e.appendChild(J.createElement("option"));t.type="checkbox",G.checkOn=""!==t.value,G.optSelected=n.selected,e.disabled=!0,G.optDisabled=!n.disabled,t=J.createElement("input"),t.value="t",t.type="radio",G.radioValue="t"===t.value}();var on,sn,rn=Z.expr.attrHandle;Z.fn.extend({attr:function(t,e){return me(this,Z.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){Z.removeAttr(this,t)})}}),Z.extend({attr:function(t,e,n){var i,o,s=t.nodeType;if(t&&3!==s&&8!==s&&2!==s)return typeof t.getAttribute===$e?Z.prop(t,e,n):(1===s&&Z.isXMLDoc(t)||(e=e.toLowerCase(),i=Z.attrHooks[e]||(Z.expr.match.bool.test(e)?sn:on)),void 0===n?i&&"get"in i&&null!==(o=i.get(t,e))?o:(o=Z.find.attr(t,e),null==o?void 0:o):null!==n?i&&"set"in i&&void 0!==(o=i.set(t,n,e))?o:(t.setAttribute(e,n+""),n):void Z.removeAttr(t,e))},removeAttr:function(t,e){var n,i,o=0,s=e&&e.match(de);if(s&&1===t.nodeType)for(;n=s[o++];)i=Z.propFix[n]||n,Z.expr.match.bool.test(n)&&(t[i]=!1),t.removeAttribute(n)},attrHooks:{type:{set:function(t,e){if(!G.radioValue&&"radio"===e&&Z.nodeName(t,"input")){var n=t.value;return t.setAttribute("type",e),n&&(t.value=n),e}}}}}),sn={set:function(t,e,n){return e===!1?Z.removeAttr(t,n):t.setAttribute(n,n),n}},Z.each(Z.expr.match.bool.source.match(/\w+/g),function(t,e){var n=rn[e]||Z.find.attr;rn[e]=function(t,e,i){var o,s;return i||(s=rn[e],rn[e]=o,o=null!=n(t,e,i)?e.toLowerCase():null,rn[e]=s),o}});var an=/^(?:input|select|textarea|button)$/i;Z.fn.extend({prop:function(t,e){return me(this,Z.prop,t,e,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[Z.propFix[t]||t]})}}),Z.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(t,e,n){var i,o,s,r=t.nodeType;if(t&&3!==r&&8!==r&&2!==r)return s=1!==r||!Z.isXMLDoc(t),s&&(e=Z.propFix[e]||e,o=Z.propHooks[e]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(t,n,e))?i:t[e]=n:o&&"get"in o&&null!==(i=o.get(t,e))?i:t[e]},propHooks:{tabIndex:{get:function(t){return t.hasAttribute("tabindex")||an.test(t.nodeName)||t.href?t.tabIndex:-1}}}}),G.optSelected||(Z.propHooks.selected={get:function(t){var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null}}),Z.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){Z.propFix[this.toLowerCase()]=this});var ln=/[\t\r\n\f]/g;Z.fn.extend({addClass:function(t){var e,n,i,o,s,r,a="string"==typeof t&&t,l=0,c=this.length;if(Z.isFunction(t))return this.each(function(e){Z(this).addClass(t.call(this,e,this.className))});if(a)for(e=(t||"").match(de)||[];c>l;l++)if(n=this[l],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(ln," "):" ")){for(s=0;o=e[s++];)i.indexOf(" "+o+" ")<0&&(i+=o+" ");r=Z.trim(i),n.className!==r&&(n.className=r)}return this},removeClass:function(t){var e,n,i,o,s,r,a=0===arguments.length||"string"==typeof t&&t,l=0,c=this.length;if(Z.isFunction(t))return this.each(function(e){Z(this).removeClass(t.call(this,e,this.className))});if(a)for(e=(t||"").match(de)||[];c>l;l++)if(n=this[l],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(ln," "):"")){for(s=0;o=e[s++];)for(;i.indexOf(" "+o+" ")>=0;)i=i.replace(" "+o+" "," ");r=t?Z.trim(i):"",n.className!==r&&(n.className=r)}return this},toggleClass:function(t,e){var n=typeof t;return"boolean"==typeof e&&"string"===n?e?this.addClass(t):this.removeClass(t):this.each(Z.isFunction(t)?function(n){Z(this).toggleClass(t.call(this,n,this.className,e),e)}:function(){if("string"===n)for(var e,i=0,o=Z(this),s=t.match(de)||[];e=s[i++];)o.hasClass(e)?o.removeClass(e):o.addClass(e);else(n===$e||"boolean"===n)&&(this.className&&ve.set(this,"__className__",this.className),this.className=this.className||t===!1?"":ve.get(this,"__className__")||"")})},hasClass:function(t){for(var e=" "+t+" ",n=0,i=this.length;i>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(ln," ").indexOf(e)>=0)return!0;return!1}});var cn=/\r/g;Z.fn.extend({val:function(t){var e,n,i,o=this[0];{if(arguments.length)return i=Z.isFunction(t),this.each(function(n){var o;1===this.nodeType&&(o=i?t.call(this,n,Z(this).val()):t,null==o?o="":"number"==typeof o?o+="":Z.isArray(o)&&(o=Z.map(o,function(t){return null==t?"":t+""})),e=Z.valHooks[this.type]||Z.valHooks[this.nodeName.toLowerCase()],e&&"set"in e&&void 0!==e.set(this,o,"value")||(this.value=o))});if(o)return e=Z.valHooks[o.type]||Z.valHooks[o.nodeName.toLowerCase()],e&&"get"in e&&void 0!==(n=e.get(o,"value"))?n:(n=o.value,"string"==typeof n?n.replace(cn,""):null==n?"":n)}}}),Z.extend({valHooks:{option:{get:function(t){var e=Z.find.attr(t,"value");return null!=e?e:Z.trim(Z.text(t))}},select:{get:function(t){for(var e,n,i=t.options,o=t.selectedIndex,s="select-one"===t.type||0>o,r=s?null:[],a=s?o+1:i.length,l=0>o?a:s?o:0;a>l;l++)if(n=i[l],!(!n.selected&&l!==o||(G.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&Z.nodeName(n.parentNode,"optgroup"))){if(e=Z(n).val(),s)return e;r.push(e)}return r},set:function(t,e){for(var n,i,o=t.options,s=Z.makeArray(e),r=o.length;r--;)i=o[r],(i.selected=Z.inArray(i.value,s)>=0)&&(n=!0);return n||(t.selectedIndex=-1),s}}}}),Z.each(["radio","checkbox"],function(){Z.valHooks[this]={set:function(t,e){return Z.isArray(e)?t.checked=Z.inArray(Z(t).val(),e)>=0:void 0}},G.checkOn||(Z.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})}),Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(t,e){Z.fn[e]=function(t,n){return arguments.length>0?this.on(e,null,t,n):this.trigger(e)}}),Z.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)},bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,i){return this.on(e,t,n,i)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)}});var un=Z.now(),hn=/\?/;Z.parseJSON=function(t){return JSON.parse(t+"")},Z.parseXML=function(t){var e,n;if(!t||"string"!=typeof t)return null;try{n=new DOMParser,e=n.parseFromString(t,"text/xml")}catch(i){e=void 0}return(!e||e.getElementsByTagName("parsererror").length)&&Z.error("Invalid XML: "+t),e};var pn=/#.*$/,dn=/([?&])_=[^&]*/,fn=/^(.*?):[ \t]*([^\r\n]*)$/gm,gn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,mn=/^(?:GET|HEAD)$/,vn=/^\/\//,yn=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,bn={},wn={},xn="*/".concat("*"),Cn=t.location.href,Tn=yn.exec(Cn.toLowerCase())||[];Z.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Cn,type:"GET",isLocal:gn.test(Tn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":xn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":Z.parseJSON,"text xml":Z.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?R(R(t,Z.ajaxSettings),e):R(Z.ajaxSettings,t)},ajaxPrefilter:F(bn),ajaxTransport:F(wn),ajax:function(t,e){function n(t,e,n,r){var l,u,v,y,w,C=e;2!==b&&(b=2,a&&clearTimeout(a),i=void 0,s=r||"",x.readyState=t>0?4:0,l=t>=200&&300>t||304===t,n&&(y=M(h,x,n)),y=H(h,y,x,l),l?(h.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(Z.lastModified[o]=w),w=x.getResponseHeader("etag"),w&&(Z.etag[o]=w)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=y.state,u=y.data,v=y.error,l=!v)):(v=C,(t||!C)&&(C="error",0>t&&(t=0))),x.status=t,x.statusText=(e||C)+"",l?f.resolveWith(p,[u,C,x]):f.rejectWith(p,[x,C,v]),x.statusCode(m),m=void 0,c&&d.trigger(l?"ajaxSuccess":"ajaxError",[x,h,l?u:v]),g.fireWith(p,[x,C]),c&&(d.trigger("ajaxComplete",[x,h]),--Z.active||Z.event.trigger("ajaxStop")))}"object"==typeof t&&(e=t,t=void 0),e=e||{};var i,o,s,r,a,l,c,u,h=Z.ajaxSetup({},e),p=h.context||h,d=h.context&&(p.nodeType||p.jquery)?Z(p):Z.event,f=Z.Deferred(),g=Z.Callbacks("once memory"),m=h.statusCode||{},v={},y={},b=0,w="canceled",x={readyState:0,getResponseHeader:function(t){var e;if(2===b){if(!r)for(r={};e=fn.exec(s);)r[e[1].toLowerCase()]=e[2];e=r[t.toLowerCase()]}return null==e?null:e},getAllResponseHeaders:function(){return 2===b?s:null},setRequestHeader:function(t,e){var n=t.toLowerCase();return b||(t=y[n]=y[n]||t,v[t]=e),this},overrideMimeType:function(t){return b||(h.mimeType=t),this},statusCode:function(t){var e;if(t)if(2>b)for(e in t)m[e]=[m[e],t[e]];else x.always(t[x.status]);return this},abort:function(t){var e=t||w;return i&&i.abort(e),n(0,e),this}};if(f.promise(x).complete=g.add,x.success=x.done,x.error=x.fail,h.url=((t||h.url||Cn)+"").replace(pn,"").replace(vn,Tn[1]+"//"),h.type=e.method||e.type||h.method||h.type,h.dataTypes=Z.trim(h.dataType||"*").toLowerCase().match(de)||[""],null==h.crossDomain&&(l=yn.exec(h.url.toLowerCase()),h.crossDomain=!(!l||l[1]===Tn[1]&&l[2]===Tn[2]&&(l[3]||("http:"===l[1]?"80":"443"))===(Tn[3]||("http:"===Tn[1]?"80":"443")))),h.data&&h.processData&&"string"!=typeof h.data&&(h.data=Z.param(h.data,h.traditional)),P(bn,h,e,x),2===b)return x;c=Z.event&&h.global,c&&0===Z.active++&&Z.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!mn.test(h.type),o=h.url,h.hasContent||(h.data&&(o=h.url+=(hn.test(o)?"&":"?")+h.data,delete h.data),h.cache===!1&&(h.url=dn.test(o)?o.replace(dn,"$1_="+un++):o+(hn.test(o)?"&":"?")+"_="+un++)),h.ifModified&&(Z.lastModified[o]&&x.setRequestHeader("If-Modified-Since",Z.lastModified[o]),Z.etag[o]&&x.setRequestHeader("If-None-Match",Z.etag[o])),(h.data&&h.hasContent&&h.contentType!==!1||e.contentType)&&x.setRequestHeader("Content-Type",h.contentType),x.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+xn+"; q=0.01":""):h.accepts["*"]);for(u in h.headers)x.setRequestHeader(u,h.headers[u]);if(h.beforeSend&&(h.beforeSend.call(p,x,h)===!1||2===b))return x.abort();w="abort";for(u in{success:1,error:1,complete:1})x[u](h[u]);if(i=P(wn,h,e,x)){x.readyState=1,c&&d.trigger("ajaxSend",[x,h]),h.async&&h.timeout>0&&(a=setTimeout(function(){x.abort("timeout")},h.timeout));try{b=1,i.send(v,n)}catch(C){if(!(2>b))throw C;n(-1,C)}}else n(-1,"No Transport");return x},getJSON:function(t,e,n){return Z.get(t,e,n,"json")},getScript:function(t,e){return Z.get(t,void 0,e,"script")}}),Z.each(["get","post"],function(t,e){Z[e]=function(t,n,i,o){return Z.isFunction(n)&&(o=o||i,i=n,n=void 0),Z.ajax({url:t,type:e,dataType:o,data:n,success:i})}}),Z._evalUrl=function(t){return Z.ajax({url:t,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},Z.fn.extend({wrapAll:function(t){var e;return Z.isFunction(t)?this.each(function(e){Z(this).wrapAll(t.call(this,e))}):(this[0]&&(e=Z(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this)},wrapInner:function(t){return this.each(Z.isFunction(t)?function(e){Z(this).wrapInner(t.call(this,e))}:function(){var e=Z(this),n=e.contents();n.length?n.wrapAll(t):e.append(t)})},wrap:function(t){var e=Z.isFunction(t);return this.each(function(n){Z(this).wrapAll(e?t.call(this,n):t)})},unwrap:function(){return this.parent().each(function(){Z.nodeName(this,"body")||Z(this).replaceWith(this.childNodes)}).end()}}),Z.expr.filters.hidden=function(t){return t.offsetWidth<=0&&t.offsetHeight<=0},Z.expr.filters.visible=function(t){return!Z.expr.filters.hidden(t)};var kn=/%20/g,$n=/\[\]$/,En=/\r?\n/g,Sn=/^(?:submit|button|image|reset|file)$/i,On=/^(?:input|select|textarea|keygen)/i;Z.param=function(t,e){var n,i=[],o=function(t,e){e=Z.isFunction(e)?e():null==e?"":e,i[i.length]=encodeURIComponent(t)+"="+encodeURIComponent(e)};if(void 0===e&&(e=Z.ajaxSettings&&Z.ajaxSettings.traditional),Z.isArray(t)||t.jquery&&!Z.isPlainObject(t))Z.each(t,function(){o(this.name,this.value)});else for(n in t)q(n,t[n],e,o);return i.join("&").replace(kn,"+")},Z.fn.extend({serialize:function(){return Z.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=Z.prop(this,"elements");return t?Z.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!Z(this).is(":disabled")&&On.test(this.nodeName)&&!Sn.test(t)&&(this.checked||!ke.test(t))}).map(function(t,e){var n=Z(this).val();return null==n?null:Z.isArray(n)?Z.map(n,function(t){return{name:e.name,value:t.replace(En,"\r\n")}}):{name:e.name,value:n.replace(En,"\r\n")}}).get()}}),Z.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(t){}};var An=0,Nn={},Dn={0:200,1223:204},jn=Z.ajaxSettings.xhr();t.attachEvent&&t.attachEvent("onunload",function(){for(var t in Nn)Nn[t]()}),G.cors=!!jn&&"withCredentials"in jn,G.ajax=jn=!!jn,Z.ajaxTransport(function(t){var e;return G.cors||jn&&!t.crossDomain?{send:function(n,i){var o,s=t.xhr(),r=++An;if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(o in t.xhrFields)s[o]=t.xhrFields[o];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(o in n)s.setRequestHeader(o,n[o]);e=function(t){return function(){e&&(delete Nn[r],e=s.onload=s.onerror=null,"abort"===t?s.abort():"error"===t?i(s.status,s.statusText):i(Dn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:void 0,s.getAllResponseHeaders()))}},s.onload=e(),s.onerror=e("error"),e=Nn[r]=e("abort");try{s.send(t.hasContent&&t.data||null)}catch(a){if(e)throw a}},abort:function(){e&&e()}}:void 0}),Z.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(t){return Z.globalEval(t),t}}}),Z.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),Z.ajaxTransport("script",function(t){if(t.crossDomain){var e,n;return{send:function(i,o){e=Z("<script>").prop({async:!0,charset:t.scriptCharset,src:t.url}).on("load error",n=function(t){e.remove(),n=null,t&&o("error"===t.type?404:200,t.type)}),J.head.appendChild(e[0])},abort:function(){n&&n()}}}});var In=[],Ln=/(=)\?(?=&|$)|\?\?/;Z.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=In.pop()||Z.expando+"_"+un++;return this[t]=!0,t}}),Z.ajaxPrefilter("json jsonp",function(e,n,i){var o,s,r,a=e.jsonp!==!1&&(Ln.test(e.url)?"url":"string"==typeof e.data&&!(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ln.test(e.data)&&"data");return a||"jsonp"===e.dataTypes[0]?(o=e.jsonpCallback=Z.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ln,"$1"+o):e.jsonp!==!1&&(e.url+=(hn.test(e.url)?"&":"?")+e.jsonp+"="+o),e.converters["script json"]=function(){return r||Z.error(o+" was not called"),r[0]},e.dataTypes[0]="json",s=t[o],t[o]=function(){r=arguments},i.always(function(){t[o]=s,e[o]&&(e.jsonpCallback=n.jsonpCallback,In.push(o)),r&&Z.isFunction(s)&&s(r[0]),r=s=void 0}),"script"):void 0}),Z.parseHTML=function(t,e,n){if(!t||"string"!=typeof t)return null;"boolean"==typeof e&&(n=e,e=!1),e=e||J;var i=re.exec(t),o=!n&&[];return i?[e.createElement(i[1])]:(i=Z.buildFragment([t],e,o),o&&o.length&&Z(o).remove(),Z.merge([],i.childNodes))};var Fn=Z.fn.load;Z.fn.load=function(t,e,n){if("string"!=typeof t&&Fn)return Fn.apply(this,arguments);var i,o,s,r=this,a=t.indexOf(" ");return a>=0&&(i=Z.trim(t.slice(a)),t=t.slice(0,a)),Z.isFunction(e)?(n=e,e=void 0):e&&"object"==typeof e&&(o="POST"),r.length>0&&Z.ajax({url:t,type:o,dataType:"html",data:e}).done(function(t){s=arguments,r.html(i?Z("<div>").append(Z.parseHTML(t)).find(i):t)}).complete(n&&function(t,e){r.each(n,s||[t.responseText,e,t])}),this},Z.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){Z.fn[e]=function(t){return this.on(e,t)}}),Z.expr.filters.animated=function(t){return Z.grep(Z.timers,function(e){return t===e.elem}).length};var Pn=t.document.documentElement;Z.offset={setOffset:function(t,e,n){var i,o,s,r,a,l,c,u=Z.css(t,"position"),h=Z(t),p={};"static"===u&&(t.style.position="relative"),a=h.offset(),s=Z.css(t,"top"),l=Z.css(t,"left"),c=("absolute"===u||"fixed"===u)&&(s+l).indexOf("auto")>-1,c?(i=h.position(),r=i.top,o=i.left):(r=parseFloat(s)||0,o=parseFloat(l)||0),Z.isFunction(e)&&(e=e.call(t,n,a)),null!=e.top&&(p.top=e.top-a.top+r),null!=e.left&&(p.left=e.left-a.left+o),"using"in e?e.using.call(t,p):h.css(p)}},Z.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){Z.offset.setOffset(this,t,e)});var e,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return e=s.documentElement,Z.contains(e,i)?(typeof i.getBoundingClientRect!==$e&&(o=i.getBoundingClientRect()),n=_(s),{top:o.top+n.pageYOffset-e.clientTop,left:o.left+n.pageXOffset-e.clientLeft}):o},position:function(){if(this[0]){var t,e,n=this[0],i={top:0,left:0};return"fixed"===Z.css(n,"position")?e=n.getBoundingClientRect():(t=this.offsetParent(),e=this.offset(),Z.nodeName(t[0],"html")||(i=t.offset()),i.top+=Z.css(t[0],"borderTopWidth",!0),i.left+=Z.css(t[0],"borderLeftWidth",!0)),{top:e.top-i.top-Z.css(n,"marginTop",!0),left:e.left-i.left-Z.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||Pn;t&&!Z.nodeName(t,"html")&&"static"===Z.css(t,"position");)t=t.offsetParent;return t||Pn})}}),Z.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var i="pageYOffset"===n;Z.fn[e]=function(o){return me(this,function(e,o,s){var r=_(e);return void 0===s?r?r[n]:e[o]:void(r?r.scrollTo(i?t.pageXOffset:s,i?s:t.pageYOffset):e[o]=s)},e,o,arguments.length,null)}}),Z.each(["top","left"],function(t,e){Z.cssHooks[e]=C(G.pixelPosition,function(t,n){return n?(n=x(t,e),Be.test(n)?Z(t).position()[e]+"px":n):void 0})}),Z.each({Height:"height",Width:"width"},function(t,e){Z.each({padding:"inner"+t,content:e,"":"outer"+t},function(n,i){Z.fn[i]=function(i,o){var s=arguments.length&&(n||"boolean"!=typeof i),r=n||(i===!0||o===!0?"margin":"border");return me(this,function(e,n,i){var o;return Z.isWindow(e)?e.document.documentElement["client"+t]:9===e.nodeType?(o=e.documentElement,Math.max(e.body["scroll"+t],o["scroll"+t],e.body["offset"+t],o["offset"+t],o["client"+t])):void 0===i?Z.css(e,n,r):Z.style(e,n,i,r)},e,s?i:void 0,s,null)}})}),Z.fn.size=function(){return this.length},Z.fn.andSelf=Z.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return Z});var Rn=t.jQuery,Mn=t.$;return Z.noConflict=function(e){return t.$===Z&&(t.$=Mn),e&&t.jQuery===Z&&(t.jQuery=Rn),Z},typeof e===$e&&(t.jQuery=t.$=Z),Z}),function(t,e,n){function i(n,i,o){var s=e.createElement(n);return i&&(s.id=Z+i),o&&(s.style.cssText=o),t(s)}function o(){return n.innerHeight?n.innerHeight:t(n).height()}function s(e,n){n!==Object(n)&&(n={}),this.cache={},this.el=e,this.value=function(e){var i;return void 0===this.cache[e]&&(i=t(this.el).attr("data-cbox-"+e),void 0!==i?this.cache[e]=i:void 0!==n[e]?this.cache[e]=n[e]:void 0!==J[e]&&(this.cache[e]=J[e])),this.cache[e]},this.get=function(e){var n=this.value(e);return t.isFunction(n)?n.call(this.el,this):n}}function r(t){var e=E.length,n=(W+t)%e;return 0>n?e+n:n}function a(t,e){return Math.round((/%/.test(t)?("x"===e?S.width():o())/100:1)*parseInt(t,10))}function l(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function c(t,e){return t.get("retinaUrl")&&n.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function u(t){"contains"in b[0]&&!b[0].contains(t.target)&&t.target!==y[0]&&(t.stopPropagation(),b.focus())}function h(t){h.str!==t&&(b.add(y).removeClass(h.str).addClass(t),h.str=t)}function p(e){W=0,e&&e!==!1&&"nofollow"!==e?(E=t("."+te).filter(function(){var n=t.data(this,Y),i=new s(this,n);return i.get("rel")===e}),W=E.index(M.el),-1===W&&(E=E.add(M.el),W=E.length-1)):E=t(M.el)}function d(n){t(e).trigger(n),ae.triggerHandler(n)}function f(n){var o;if(!K){if(o=t(n).data(Y),M=new s(n,o),p(M.get("rel")),!Q){Q=U=!0,h(M.get("className")),b.css({visibility:"hidden",display:"block",opacity:""}),O=i(le,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),x.css({width:"",height:""}).append(O),H=C.height()+$.height()+x.outerHeight(!0)-x.height(),q=T.width()+k.width()+x.outerWidth(!0)-x.width(),_=O.outerHeight(!0),B=O.outerWidth(!0);var r=a(M.get("initialWidth"),"x"),l=a(M.get("initialHeight"),"y"),c=M.get("maxWidth"),f=M.get("maxHeight");M.w=(c!==!1?Math.min(r,a(c,"x")):r)-B-q,M.h=(f!==!1?Math.min(l,a(f,"y")):l)-_-H,O.css({width:"",height:M.h}),X.position(),d(ee),M.get("onOpen"),R.add(D).hide(),b.focus(),M.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",u,!0),ae.one(se,function(){e.removeEventListener("focus",u,!0)})),M.get("returnFocus")&&ae.one(se,function(){t(M.el).focus()})}var g=parseFloat(M.get("opacity"));y.css({opacity:g===g?g:"",cursor:M.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),M.get("closeButton")?P.html(M.get("close")).appendTo(x):P.appendTo("<div/>"),v()}}function g(){b||(G=!1,S=t(n),b=i(le).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),y=i(le,"Overlay").hide(),N=t([i(le,"LoadingOverlay")[0],i(le,"LoadingGraphic")[0]]),w=i(le,"Wrapper"),x=i(le,"Content").append(D=i(le,"Title"),j=i(le,"Current"),F=t('<button type="button"/>').attr({id:Z+"Previous"}),L=t('<button type="button"/>').attr({id:Z+"Next"}),I=i("button","Slideshow"),N),P=t('<button type="button"/>').attr({id:Z+"Close"}),w.append(i(le).append(i(le,"TopLeft"),C=i(le,"TopCenter"),i(le,"TopRight")),i(le,!1,"clear:left").append(T=i(le,"MiddleLeft"),x,k=i(le,"MiddleRight")),i(le,!1,"clear:left").append(i(le,"BottomLeft"),$=i(le,"BottomCenter"),i(le,"BottomRight"))).find("div div").css({"float":"left"}),A=i(le,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),R=L.add(F).add(j).add(I)),e.body&&!b.parent().length&&t(e.body).append(y,b.append(w,A))}function m(){function n(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return b?(G||(G=!0,L.click(function(){X.next()}),F.click(function(){X.prev()}),P.click(function(){X.close()}),y.click(function(){M.get("overlayClose")&&X.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;Q&&M.get("escKey")&&27===e&&(t.preventDefault(),X.close()),Q&&M.get("arrowKey")&&E[1]&&!t.altKey&&(37===e?(t.preventDefault(),F.click()):39===e&&(t.preventDefault(),L.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,n):t("."+te).live("click."+Z,n)),!0):!1}function v(){var e,o,s,r=X.prep,u=++ce;if(U=!0,z=!1,d(re),d(ne),M.get("onLoad"),M.h=M.get("height")?a(M.get("height"),"y")-_-H:M.get("innerHeight")&&a(M.get("innerHeight"),"y"),M.w=M.get("width")?a(M.get("width"),"x")-B-q:M.get("innerWidth")&&a(M.get("innerWidth"),"x"),M.mw=M.w,M.mh=M.h,M.get("maxWidth")&&(M.mw=a(M.get("maxWidth"),"x")-B-q,M.mw=M.w&&M.w<M.mw?M.w:M.mw),M.get("maxHeight")&&(M.mh=a(M.get("maxHeight"),"y")-_-H,M.mh=M.h&&M.h<M.mh?M.h:M.mh),e=M.get("href"),V=setTimeout(function(){N.show()},100),M.get("inline")){var h=t(e);s=t("<div>").hide().insertBefore(h),ae.one(re,function(){s.replaceWith(h)}),r(h)}else M.get("iframe")?r(" "):M.get("html")?r(M.get("html")):l(M,e)?(e=c(M,e),z=new Image,t(z).addClass(Z+"Photo").bind("error",function(){r(i(le,"Error").html(M.get("imgError")))}).one("load",function(){u===ce&&setTimeout(function(){var e;t.each(["alt","longdesc","aria-describedby"],function(e,n){var i=t(M.el).attr(n)||t(M.el).attr("data-"+n);i&&z.setAttribute(n,i)}),M.get("retinaImage")&&n.devicePixelRatio>1&&(z.height=z.height/n.devicePixelRatio,z.width=z.width/n.devicePixelRatio),M.get("scalePhotos")&&(o=function(){z.height-=z.height*e,z.width-=z.width*e},M.mw&&z.width>M.mw&&(e=(z.width-M.mw)/z.width,o()),M.mh&&z.height>M.mh&&(e=(z.height-M.mh)/z.height,o())),M.h&&(z.style.marginTop=Math.max(M.mh-z.height,0)/2+"px"),E[1]&&(M.get("loop")||E[W+1])&&(z.style.cursor="pointer",z.onclick=function(){X.next()}),z.style.width=z.width+"px",z.style.height=z.height+"px",r(z)},1)}),z.src=e):e&&A.load(e,M.get("data"),function(e,n){u===ce&&r("error"===n?i(le,"Error").html(M.get("xhrError")):t(this).contents())})}var y,b,w,x,C,T,k,$,E,S,O,A,N,D,j,I,L,F,P,R,M,H,q,_,B,W,z,Q,U,K,V,X,G,J={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ne=Z+"_load",ie=Z+"_complete",oe=Z+"_cleanup",se=Z+"_closed",re=Z+"_purge",ae=t("<a/>"),le="div",ce=0,ue={},he=function(){function t(){clearTimeout(r)}function e(){(M.get("loop")||E[W+1])&&(t(),r=setTimeout(X.next,M.get("slideshowSpeed")))}function n(){I.html(M.get("slideshowStop")).unbind(l).one(l,i),ae.bind(ie,e).bind(ne,t),b.removeClass(a+"off").addClass(a+"on")}function i(){t(),ae.unbind(ie,e).unbind(ne,t),I.html(M.get("slideshowStart")).unbind(l).one(l,function(){X.next(),n()}),b.removeClass(a+"on").addClass(a+"off")}function o(){s=!1,I.hide(),t(),ae.unbind(ie,e).unbind(ne,t),b.removeClass(a+"off "+a+"on")}var s,r,a=Z+"Slideshow_",l="click."+Z;return function(){s?M.get("slideshow")||(ae.unbind(oe,o),o()):M.get("slideshow")&&E[1]&&(s=!0,ae.one(oe,o),M.get("slideshowAuto")?n():i(),I.show())}}();t[Y]||(t(g),X=t.fn[Y]=t[Y]=function(e,n){var i,o=this;if(e=e||{},t.isFunction(o))o=t("<a/>"),e.open=!0;else if(!o[0])return o;return o[0]?(g(),m()&&(n&&(e.onComplete=n),o.each(function(){var n=t.data(this,Y)||{};t.data(this,Y,t.extend(n,e))}).addClass(te),i=new s(o[0],e),i.get("open")&&f(o[0])),o):o},X.position=function(e,n){function i(){C[0].style.width=$[0].style.width=x[0].style.width=parseInt(b[0].style.width,10)-q+"px",x[0].style.height=T[0].style.height=k[0].style.height=parseInt(b[0].style.height,10)-H+"px"}var s,r,l,c=0,u=0,h=b.offset();if(S.unbind("resize."+Z),b.css({top:-9e4,left:-9e4}),r=S.scrollTop(),l=S.scrollLeft(),M.get("fixed")?(h.top-=r,h.left-=l,b.css({position:"fixed"})):(c=r,u=l,b.css({position:"absolute"})),u+=M.get("right")!==!1?Math.max(S.width()-M.w-B-q-a(M.get("right"),"x"),0):M.get("left")!==!1?a(M.get("left"),"x"):Math.round(Math.max(S.width()-M.w-B-q,0)/2),c+=M.get("bottom")!==!1?Math.max(o()-M.h-_-H-a(M.get("bottom"),"y"),0):M.get("top")!==!1?a(M.get("top"),"y"):Math.round(Math.max(o()-M.h-_-H,0)/2),b.css({top:h.top,left:h.left,visibility:"visible"}),w[0].style.width=w[0].style.height="9999px",s={width:M.w+B+q,height:M.h+_+H,top:c,left:u},e){var p=0;t.each(s,function(t){return s[t]!==ue[t]?void(p=e):void 0}),e=p}ue=s,e||b.css(s),b.dequeue().animate(s,{duration:e||0,complete:function(){i(),U=!1,w[0].style.width=M.w+B+q+"px",w[0].style.height=M.h+_+H+"px",M.get("reposition")&&setTimeout(function(){S.bind("resize."+Z,X.position)},1),t.isFunction(n)&&n()},step:i})},X.resize=function(t){var e;Q&&(t=t||{},t.width&&(M.w=a(t.width,"x")-B-q),t.innerWidth&&(M.w=a(t.innerWidth,"x")),O.css({width:M.w}),t.height&&(M.h=a(t.height,"y")-_-H),t.innerHeight&&(M.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=O.scrollTop(),O.css({height:"auto"}),M.h=O.height()),O.css({height:M.h}),e&&O.scrollTop(e),X.position("none"===M.get("transition")?0:M.get("speed")))},X.prep=function(n){function o(){return M.w=M.w||O.width(),M.w=M.mw&&M.mw<M.w?M.mw:M.w,M.w}function a(){return M.h=M.h||O.height(),M.h=M.mh&&M.mh<M.h?M.mh:M.h,M.h}if(Q){var u,p="none"===M.get("transition")?0:M.get("speed");O.remove(),O=i(le,"LoadedContent").append(n),O.hide().appendTo(A.show()).css({width:o(),overflow:M.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(x),A.hide(),t(z).css({"float":"none"}),h(M.get("className")),u=function(){function n(){t.support.opacity===!1&&b[0].style.removeAttribute("filter")}var i,o,a=E.length;Q&&(o=function(){clearTimeout(V),N.hide(),d(ie),M.get("onComplete")},D.html(M.get("title")).show(),O.show(),a>1?("string"==typeof M.get("current")&&j.html(M.get("current").replace("{current}",W+1).replace("{total}",a)).show(),L[M.get("loop")||a-1>W?"show":"hide"]().html(M.get("next")),F[M.get("loop")||W?"show":"hide"]().html(M.get("previous")),he(),M.get("preloading")&&t.each([r(-1),r(1)],function(){var n,i=E[this],o=new s(i,t.data(i,Y)),r=o.get("href");r&&l(o,r)&&(r=c(o,r),n=e.createElement("img"),n.src=r)})):R.hide(),M.get("iframe")?(i=e.createElement("iframe"),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),M.get("scrolling")||(i.scrolling="no"),t(i).attr({src:M.get("href"),name:(new Date).getTime(),"class":Z+"Iframe",allowFullScreen:!0}).one("load",o).appendTo(O),ae.one(re,function(){i.src="//about:blank"}),M.get("fastIframe")&&t(i).trigger("load")):o(),"fade"===M.get("transition")?b.fadeTo(p,1,n):n())},"fade"===M.get("transition")?b.fadeTo(p,0,function(){X.position(0,u)}):X.position(p,u)}},X.next=function(){!U&&E[1]&&(M.get("loop")||E[W+1])&&(W=r(1),f(E[W]))},X.prev=function(){!U&&E[1]&&(M.get("loop")||W)&&(W=r(-1),f(E[W]))},X.close=function(){Q&&!K&&(K=!0,Q=!1,d(oe),M.get("onCleanup"),S.unbind("."+Z),y.fadeTo(M.get("fadeOut")||0,0),b.stop().fadeTo(M.get("fadeOut")||0,0,function(){b.hide(),y.hide(),d(re),O.remove(),setTimeout(function(){K=!1,d(se),M.get("onClosed")},1)}))},X.remove=function(){b&&(b.stop(),t[Y].close(),b.stop(!1,!0).remove(),y.remove(),K=!1,b=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},X.element=function(){return t(M.el)},X.settings=J)}(jQuery,document,window),function(){"use strict";function t(t){var e=function(){};return e.prototype=t.prototype||t,new e}function e(t,e,n){if(n){var i={};for(var o in t)o!==e&&(i[o]=t[o])}else delete t[e];return i||t}function n(e,i,o){if(!e||!i)return e||i||{};e=t(e),i=t(i);for(var s in i)"[object Object]"===Object.prototype.toString.call(i[s])?n(e[s],i[s]):e[s]=o&&e[s]?e[s]:i[s];
return e}function i(t){for(var o={},s=0;s<t.length;s++){"function"==typeof t[s]&&(t[s]=t[s].prototype);var r=e(t[s],"initialize",!0);o=r.implement?i(r.implement):n(o,r)}return o}var o="1.0",s=window.Class,r=window.Class=function(o){o=o||{};var s=function(){return this.initialize?this.initialize.apply(this,arguments):a};if(o.implement){var a=window===this?t(s.prototype):this,l=o.implement;e(o,"implement"),o=n(o,i(l))}s.prototype=t(o),s.constructor=s,s._parent=t(o);for(var c=0,u=["extend","implement","getOptions","setOptions"];c<u.length;c++)s[u[c]]=r[u[c]];return s};r.extend=function(t){var o=this;t.implement&&(this.prototype=n(this.prototype,i(t.implement)),e(t,"implement"));for(var s in t)t[s]="function"==typeof t[s]&&/parent/.test(t[s].toString())?function(t,e){return function(){return this.parent=o._parent[e],t.apply(this,arguments)}}(t[s],s):t[s];return this._parent=n(this._parent,t,!0),this.prototype=n(this.prototype,t),this},r.implement=function(t){return this.prototype=n(this.prototype,i(t))},r.getOptions=function(){return this.prototype.options||{}},r.setOptions=function(t){return this.prototype.options=n(this.prototype.options,t)},r.noConflict=function(){return window.Class=s,r},r.version=o}();var JsonProcessor=function(t,e){this.element=t?t:$(document),this.options=jQuery.extend({},this.defaults,e)};JsonProcessor.prototype={defaults:{contentProcessor:function(){}},filters:["elements","execute","event","fields","html","message","redirect","redirectBlank","remove","bsFieldError"],elementFilters:["attributes","html","url","bsFieldError"],properties:{},processJson:function(t){t&&(properties=jQuery.parseJSON(t),this.process(properties))},process:function(t){var e=this;this.properties=t,$.each(t,function(t,n){e.filterProperty(t,n)})},setFilters:function(t){this.filters=t},getFilters:function(){return this.filters},filterProperty:function(t,e){-1!=$.inArray(t,this.filters)&&this.callFilter(t,e)},callFilter:function(t,e){var n=t+"Filter";this[n](e)},attributesFilter:function(t){t.addClass&&jQuery(this.properties.target).addClass(t.addClass),t.removeClass&&jQuery(this.properties.target).removeClass(t.removeClass),t.setProperty&&t.setProperty.property&&jQuery(this.properties.target).attr(t.setProperty.property,t.setProperty.value)},elementsFilter:function(t){var e=this;$.each(t,function(t,n){e.processNewElement(n)})},eventFilter:function(t){this.properties.target&&$(this.properties.target).trigger(t)},executeFilter:function(js){eval(js)},processNewElement:function(t){var e=new JsonProcessor(this.element,this.options);e.setFilters(this.elementFilters),e.process(t)},fieldsFilter:function(t){var e=this;$.each(t,function(t,n){jQuery(e.element).find(n.target).val(n.value).trigger("update")})},htmlFilter:function(t){var e=this;this.properties.target&&jQuery(this.element).find(this.properties.target).each(function(n,i){if(e.properties.append)var o=jQuery(i).append(t);else if(e.properties.prepend)var o=jQuery(i).prepend(t);else var o=jQuery(i).html(t);e.options.contentProcessor(o)})},messageFilter:function(t){alert(t)},redirectFilter:function(t){document.location.href=t},redirectBlankFilter:function(){window.open(json.redirect_blank,"_blank")},removeFilter:function(t){jQuery(this.element).find(t).remove()},urlFilter:function(){var t=this;$(this.properties.target).load($url,function(){t.options.contentProcessor(this)})},bsFieldErrorFilter:function(t){var e=$(this.properties.target);e.data("bsFieldErrorMsg")&&e.data("bsFieldErrorMsg").remove();var n=e.parents(".form-group").first();n&&n.addClass("has-error"),n.append('<p class="help-block">'+t+"</p>");var i=n.children(".help-block").first();e.data("bsFieldErrorMsg",i)}};var SimpleDrawer=new Class({options:{target:".drawer-target",toggle:".drawer-toggle",autoActive:!0},container:null,target:null,toggle:null,initialize:function(t,e){this.container=t,jQuery.extend(!0,{},this.options,e),this.target=jQuery(this.container).find(this.options.target).first(),this.toggle=jQuery(this.container).find(this.options.toggle).first(),this.options.autoActive&&this.target.hide(),this.setToggleState();var n=this;jQuery(this.toggle).on("click",function(){jQuery(n.target).slideToggle("fast",function(){n.setToggleState()})})},setToggleState:function(){jQuery(this.target).is(":hidden")?this.setToggleInactive():this.setToggleActive()},setToggleInactive:function(){jQuery(this.toggle).is(":checkbox")&&jQuery(this.toggle).prop("checked",!1),jQuery(this.toggle).removeClass("active")},setToggleActive:function(){jQuery(this.toggle).is(":checkbox")&&jQuery(this.toggle).prop("checked",!0),jQuery(this.toggle).addClass("active")}});!function(t){function e(t,e){return t.toFixed(e.decimals)}t.fn.countTo=function(e){return e=e||{},t(this).each(function(){function n(){u+=r,c++,i(u),"function"==typeof o.onUpdate&&o.onUpdate.call(a,u),c>=s&&(l.removeData("countTo"),clearInterval(h.interval),u=o.to,"function"==typeof o.onComplete&&o.onComplete.call(a,u))}function i(t){var e=o.formatter.call(a,t,o);l.text(e)}var o=t.extend({},t.fn.countTo.defaults,{from:t(this).data("from"),to:t(this).data("to"),speed:t(this).data("speed"),refreshInterval:t(this).data("refresh-interval"),decimals:t(this).data("decimals")},e),s=Math.ceil(o.speed/o.refreshInterval),r=(o.to-o.from)/s,a=this,l=t(this),c=0,u=o.from,h=l.data("countTo")||{};l.data("countTo",h),h.interval&&clearInterval(h.interval),h.interval=setInterval(n,o.refreshInterval),i(u)})},t.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:e,onUpdate:null,onComplete:null}}(jQuery),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,n,i,o){return jQuery.easing[jQuery.easing.def](t,e,n,i,o)},easeInQuad:function(t,e,n,i,o){return i*(e/=o)*e+n},easeOutQuad:function(t,e,n,i,o){return-i*(e/=o)*(e-2)+n},easeInOutQuad:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e+n:-i/2*(--e*(e-2)-1)+n},easeInCubic:function(t,e,n,i,o){return i*(e/=o)*e*e+n},easeOutCubic:function(t,e,n,i,o){return i*((e=e/o-1)*e*e+1)+n},easeInOutCubic:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e*e+n:i/2*((e-=2)*e*e+2)+n},easeInQuart:function(t,e,n,i,o){return i*(e/=o)*e*e*e+n},easeOutQuart:function(t,e,n,i,o){return-i*((e=e/o-1)*e*e*e-1)+n},easeInOutQuart:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e*e*e+n:-i/2*((e-=2)*e*e*e-2)+n},easeInQuint:function(t,e,n,i,o){return i*(e/=o)*e*e*e*e+n},easeOutQuint:function(t,e,n,i,o){return i*((e=e/o-1)*e*e*e*e+1)+n},easeInOutQuint:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e*e*e*e+n:i/2*((e-=2)*e*e*e*e+2)+n},easeInSine:function(t,e,n,i,o){return-i*Math.cos(e/o*(Math.PI/2))+i+n},easeOutSine:function(t,e,n,i,o){return i*Math.sin(e/o*(Math.PI/2))+n},easeInOutSine:function(t,e,n,i,o){return-i/2*(Math.cos(Math.PI*e/o)-1)+n},easeInExpo:function(t,e,n,i,o){return 0==e?n:i*Math.pow(2,10*(e/o-1))+n},easeOutExpo:function(t,e,n,i,o){return e==o?n+i:i*(-Math.pow(2,-10*e/o)+1)+n},easeInOutExpo:function(t,e,n,i,o){return 0==e?n:e==o?n+i:(e/=o/2)<1?i/2*Math.pow(2,10*(e-1))+n:i/2*(-Math.pow(2,-10*--e)+2)+n},easeInCirc:function(t,e,n,i,o){return-i*(Math.sqrt(1-(e/=o)*e)-1)+n},easeOutCirc:function(t,e,n,i,o){return i*Math.sqrt(1-(e=e/o-1)*e)+n},easeInOutCirc:function(t,e,n,i,o){return(e/=o/2)<1?-i/2*(Math.sqrt(1-e*e)-1)+n:i/2*(Math.sqrt(1-(e-=2)*e)+1)+n},easeInElastic:function(t,e,n,i,o){var s=1.70158,r=0,a=i;if(0==e)return n;if(1==(e/=o))return n+i;if(r||(r=.3*o),a<Math.abs(i)){a=i;var s=r/4}else var s=r/(2*Math.PI)*Math.asin(i/a);return-(a*Math.pow(2,10*(e-=1))*Math.sin(2*(e*o-s)*Math.PI/r))+n},easeOutElastic:function(t,e,n,i,o){var s=1.70158,r=0,a=i;if(0==e)return n;if(1==(e/=o))return n+i;if(r||(r=.3*o),a<Math.abs(i)){a=i;var s=r/4}else var s=r/(2*Math.PI)*Math.asin(i/a);return a*Math.pow(2,-10*e)*Math.sin(2*(e*o-s)*Math.PI/r)+i+n},easeInOutElastic:function(t,e,n,i,o){var s=1.70158,r=0,a=i;if(0==e)return n;if(2==(e/=o/2))return n+i;if(r||(r=.3*o*1.5),a<Math.abs(i)){a=i;var s=r/4}else var s=r/(2*Math.PI)*Math.asin(i/a);return 1>e?-.5*a*Math.pow(2,10*(e-=1))*Math.sin(2*(e*o-s)*Math.PI/r)+n:a*Math.pow(2,-10*(e-=1))*Math.sin(2*(e*o-s)*Math.PI/r)*.5+i+n},easeInBack:function(t,e,n,i,o,s){return void 0==s&&(s=1.70158),i*(e/=o)*e*((s+1)*e-s)+n},easeOutBack:function(t,e,n,i,o,s){return void 0==s&&(s=1.70158),i*((e=e/o-1)*e*((s+1)*e+s)+1)+n},easeInOutBack:function(t,e,n,i,o,s){return void 0==s&&(s=1.70158),(e/=o/2)<1?i/2*e*e*(((s*=1.525)+1)*e-s)+n:i/2*((e-=2)*e*(((s*=1.525)+1)*e+s)+2)+n},easeInBounce:function(t,e,n,i,o){return i-jQuery.easing.easeOutBounce(t,o-e,0,i,o)+n},easeOutBounce:function(t,e,n,i,o){return(e/=o)<1/2.75?7.5625*i*e*e+n:2/2.75>e?i*(7.5625*(e-=1.5/2.75)*e+.75)+n:2.5/2.75>e?i*(7.5625*(e-=2.25/2.75)*e+.9375)+n:i*(7.5625*(e-=2.625/2.75)*e+.984375)+n},easeInOutBounce:function(t,e,n,i,o){return o/2>e?.5*jQuery.easing.easeInBounce(t,2*e,0,i,o)+n:.5*jQuery.easing.easeOutBounce(t,2*e-o,0,i,o)+.5*i+n}}),function(t){t.fn.fitText=function(e,n){var i=e||1,o=t.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},n);return this.each(function(){var e=t(this),n=function(){e.css("font-size",Math.max(Math.min(e.width()/(10*i),parseFloat(o.maxFontSize)),parseFloat(o.minFontSize)))};n(),t(window).on("resize.fittext orientationchange.fittext",n)})}}(jQuery),function(t){"use strict";t.fn.fitVids=function(e){var n={customSelector:null};if(!document.getElementById("fit-vids-style")){var i=document.head||document.getElementsByTagName("head")[0],o=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",s=document.createElement("div");s.innerHTML='<p>x</p><style id="fit-vids-style">'+o+"</style>",i.appendChild(s.childNodes[1])}return e&&t.extend(n,e),this.each(function(){var e=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];n.customSelector&&e.push(n.customSelector);var i=t(this).find(e.join(","));i=i.not("object object"),i.each(function(){var e=t(this);if(!("embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){var n="object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height(),i=isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10),o=n/i;if(!e.attr("id")){var s="fitvid"+Math.floor(999999*Math.random());e.attr("id",s)}e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*o+"%"),e.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto),function(t){"use strict";t(["jquery"],function(t){function e(e){return t.isFunction(e)||t.isPlainObject(e)?e:{top:e,left:e}}var n=t.scrollTo=function(e,n,i){return t(window).scrollTo(e,n,i)};return n.defaults={axis:"xy",duration:0,limit:!0},n.window=function(){return t(window)._scrollable()},t.fn._scrollable=function(){return this.map(function(){var e=this,n=!e.nodeName||-1!=t.inArray(e.nodeName.toLowerCase(),["iframe","#document","html","body"]);if(!n)return e;var i=(e.contentWindow||e).document||e.ownerDocument||e;return/webkit/i.test(navigator.userAgent)||"BackCompat"==i.compatMode?i.body:i.documentElement})},t.fn.scrollTo=function(i,o,s){return"object"==typeof o&&(s=o,o=0),"function"==typeof s&&(s={onAfter:s}),"max"==i&&(i=9e9),s=t.extend({},n.defaults,s),o=o||s.duration,s.queue=s.queue&&s.axis.length>1,s.queue&&(o/=2),s.offset=e(s.offset),s.over=e(s.over),this._scrollable().each(function(){function r(t){c.animate(h,o,s.easing,t&&function(){t.call(this,u,s)})}if(null!=i){var a,l=this,c=t(l),u=i,h={},p=c.is("html,body");switch(typeof u){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(u)){u=e(u);break}if(u=p?t(u):t(u,this),!u.length)return;case"object":(u.is||u.style)&&(a=(u=t(u)).offset())}var d=t.isFunction(s.offset)&&s.offset(l,u)||s.offset;t.each(s.axis.split(""),function(t,e){var i="x"==e?"Left":"Top",o=i.toLowerCase(),f="scroll"+i,g=l[f],m=n.max(l,e);if(a)h[f]=a[o]+(p?0:g-c.offset()[o]),s.margin&&(h[f]-=parseInt(u.css("margin"+i))||0,h[f]-=parseInt(u.css("border"+i+"Width"))||0),h[f]+=d[o]||0,s.over[o]&&(h[f]+=u["x"==e?"width":"height"]()*s.over[o]);else{var v=u[o];h[f]=v.slice&&"%"==v.slice(-1)?parseFloat(v)/100*m:v}s.limit&&/^\d+$/.test(h[f])&&(h[f]=h[f]<=0?0:Math.min(h[f],m)),!t&&s.queue&&(g!=h[f]&&r(s.onAfterFirst),delete h[f])}),r(s.onAfter)}}).end()},n.max=function(e,n){var i="x"==n?"Width":"Height",o="scroll"+i;if(!t(e).is("html,body"))return e[o]-t(e)[i.toLowerCase()]();var s="client"+i,r=e.ownerDocument.documentElement,a=e.ownerDocument.body;return Math.max(r[o],a[o])-Math.min(r[s],a[s])},n})}("function"==typeof define&&define.amd?define:function(t,e){"undefined"!=typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}),function(t,e,n,i){function o(e,n){this.element=e,this.options=t.extend({},r,n),this._defaults=r,this._name=s,this.init()}var s="stellar",r={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:!0,verticalScrolling:!0,horizontalOffset:0,verticalOffset:0,responsive:!1,parallaxBackgrounds:!0,parallaxElements:!0,hideDistantElements:!0,hideElement:function(t){t.hide()},showElement:function(t){t.show()}},a={scroll:{getLeft:function(t){return t.scrollLeft()},setLeft:function(t,e){t.scrollLeft(e)},getTop:function(t){return t.scrollTop()},setTop:function(t,e){t.scrollTop(e)}},position:{getLeft:function(t){return-1*parseInt(t.css("left"),10)},getTop:function(t){return-1*parseInt(t.css("top"),10)}},margin:{getLeft:function(t){return-1*parseInt(t.css("margin-left"),10)},getTop:function(t){return-1*parseInt(t.css("margin-top"),10)}},transform:{getLeft:function(t){var e=getComputedStyle(t[0])[u];return"none"!==e?-1*parseInt(e.match(/(-?[0-9]+)/g)[4],10):0},getTop:function(t){var e=getComputedStyle(t[0])[u];return"none"!==e?-1*parseInt(e.match(/(-?[0-9]+)/g)[5],10):0}}},l={position:{setLeft:function(t,e){t.css("left",e)},setTop:function(t,e){t.css("top",e)}},transform:{setPosition:function(t,e,n,i,o){t[0].style[u]="translate3d("+(e-n)+"px, "+(i-o)+"px, 0)"}}},c=function(){var e,n=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,i=t("script")[0].style,o="";for(e in i)if(n.test(e)){o=e.match(n)[0];break}return"WebkitOpacity"in i&&(o="Webkit"),"KhtmlOpacity"in i&&(o="Khtml"),function(t){return o+(o.length>0?t.charAt(0).toUpperCase()+t.slice(1):t)}}(),u=c("transform"),h=t("<div />",{style:"background:#fff"}).css("background-position-x")!==i,p=h?function(t,e,n){t.css({"background-position-x":e,"background-position-y":n})}:function(t,e,n){t.css("background-position",e+" "+n)},d=h?function(t){return[t.css("background-position-x"),t.css("background-position-y")]}:function(t){return t.css("background-position").split(" ")},f=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t){setTimeout(t,1e3/60)};o.prototype={init:function(){this.options.name=s+"_"+Math.floor(1e9*Math.random()),this._defineElements(),this._defineGetters(),this._defineSetters(),this._handleWindowLoadAndResize(),this._detectViewport(),this.refresh({firstLoad:!0}),"scroll"===this.options.scrollProperty?this._handleScrollEvent():this._startAnimationLoop()},_defineElements:function(){this.element===n.body&&(this.element=e),this.$scrollElement=t(this.element),this.$element=this.element===e?t("body"):this.$scrollElement,this.$viewportElement=this.options.viewportElement!==i?t(this.options.viewportElement):this.$scrollElement[0]===e||"scroll"===this.options.scrollProperty?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var t=this,e=a[t.options.scrollProperty];this._getScrollLeft=function(){return e.getLeft(t.$scrollElement)},this._getScrollTop=function(){return e.getTop(t.$scrollElement)}},_defineSetters:function(){var e=this,n=a[e.options.scrollProperty],i=l[e.options.positionProperty],o=n.setLeft,s=n.setTop;this._setScrollLeft="function"==typeof o?function(t){o(e.$scrollElement,t)}:t.noop,this._setScrollTop="function"==typeof s?function(t){s(e.$scrollElement,t)}:t.noop,this._setPosition=i.setPosition||function(t,n,o,s,r){e.options.horizontalScrolling&&i.setLeft(t,n,o),e.options.verticalScrolling&&i.setTop(t,s,r)}},_handleWindowLoadAndResize:function(){var n=this,i=t(e);n.options.responsive&&i.bind("load."+this.name,function(){n.refresh()}),i.bind("resize."+this.name,function(){n._detectViewport(),n.options.responsive&&n.refresh()})},refresh:function(n){var i=this,o=i._getScrollLeft(),s=i._getScrollTop();n&&n.firstLoad||this._reset(),this._setScrollLeft(0),this._setScrollTop(0),this._setOffsets(),this._findParticles(),this._findBackgrounds(),n&&n.firstLoad&&/WebKit/.test(navigator.userAgent)&&t(e).load(function(){var t=i._getScrollLeft(),e=i._getScrollTop();i._setScrollLeft(t+1),i._setScrollTop(e+1),i._setScrollLeft(t),i._setScrollTop(e)}),this._setScrollLeft(o),this._setScrollTop(s)},_detectViewport:function(){var t=this.$viewportElement.offset(),e=null!==t&&t!==i;this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.viewportOffsetTop=e?t.top:0,this.viewportOffsetLeft=e?t.left:0},_findParticles:function(){{var e=this;this._getScrollLeft(),this._getScrollTop()}if(this.particles!==i)for(var n=this.particles.length-1;n>=0;n--)this.particles[n].$element.data("stellar-elementIsActive",i);this.particles=[],this.options.parallaxElements&&this.$element.find("[data-stellar-ratio]").each(function(){var n,o,s,r,a,l,c,u,h,p=t(this),d=0,f=0,g=0,m=0;if(p.data("stellar-elementIsActive")){if(p.data("stellar-elementIsActive")!==this)return}else p.data("stellar-elementIsActive",this);e.options.showElement(p),p.data("stellar-startingLeft")?(p.css("left",p.data("stellar-startingLeft")),p.css("top",p.data("stellar-startingTop"))):(p.data("stellar-startingLeft",p.css("left")),p.data("stellar-startingTop",p.css("top"))),s=p.position().left,r=p.position().top,a="auto"===p.css("margin-left")?0:parseInt(p.css("margin-left"),10),l="auto"===p.css("margin-top")?0:parseInt(p.css("margin-top"),10),u=p.offset().left-a,h=p.offset().top-l,p.parents().each(function(){var e=t(this);return e.data("stellar-offset-parent")===!0?(d=g,f=m,c=e,!1):(g+=e.position().left,void(m+=e.position().top))}),n=p.data("stellar-horizontal-offset")!==i?p.data("stellar-horizontal-offset"):c!==i&&c.data("stellar-horizontal-offset")!==i?c.data("stellar-horizontal-offset"):e.horizontalOffset,o=p.data("stellar-vertical-offset")!==i?p.data("stellar-vertical-offset"):c!==i&&c.data("stellar-vertical-offset")!==i?c.data("stellar-vertical-offset"):e.verticalOffset,e.particles.push({$element:p,$offsetParent:c,isFixed:"fixed"===p.css("position"),horizontalOffset:n,verticalOffset:o,startingPositionLeft:s,startingPositionTop:r,startingOffsetLeft:u,startingOffsetTop:h,parentOffsetLeft:d,parentOffsetTop:f,stellarRatio:p.data("stellar-ratio")!==i?p.data("stellar-ratio"):1,width:p.outerWidth(!0),height:p.outerHeight(!0),isHidden:!1})})},_findBackgrounds:function(){var e,n=this,o=this._getScrollLeft(),s=this._getScrollTop();this.backgrounds=[],this.options.parallaxBackgrounds&&(e=this.$element.find("[data-stellar-background-ratio]"),this.$element.data("stellar-background-ratio")&&(e=e.add(this.$element)),e.each(function(){var e,r,a,l,c,u,h,f=t(this),g=d(f),m=0,v=0,y=0,b=0;if(f.data("stellar-backgroundIsActive")){if(f.data("stellar-backgroundIsActive")!==this)return}else f.data("stellar-backgroundIsActive",this);f.data("stellar-backgroundStartingLeft")?p(f,f.data("stellar-backgroundStartingLeft"),f.data("stellar-backgroundStartingTop")):(f.data("stellar-backgroundStartingLeft",g[0]),f.data("stellar-backgroundStartingTop",g[1])),a="auto"===f.css("margin-left")?0:parseInt(f.css("margin-left"),10),l="auto"===f.css("margin-top")?0:parseInt(f.css("margin-top"),10),c=f.offset().left-a-o,u=f.offset().top-l-s,f.parents().each(function(){var e=t(this);return e.data("stellar-offset-parent")===!0?(m=y,v=b,h=e,!1):(y+=e.position().left,void(b+=e.position().top))}),e=f.data("stellar-horizontal-offset")!==i?f.data("stellar-horizontal-offset"):h!==i&&h.data("stellar-horizontal-offset")!==i?h.data("stellar-horizontal-offset"):n.horizontalOffset,r=f.data("stellar-vertical-offset")!==i?f.data("stellar-vertical-offset"):h!==i&&h.data("stellar-vertical-offset")!==i?h.data("stellar-vertical-offset"):n.verticalOffset,n.backgrounds.push({$element:f,$offsetParent:h,isFixed:"fixed"===f.css("background-attachment"),horizontalOffset:e,verticalOffset:r,startingValueLeft:g[0],startingValueTop:g[1],startingBackgroundPositionLeft:isNaN(parseInt(g[0],10))?0:parseInt(g[0],10),startingBackgroundPositionTop:isNaN(parseInt(g[1],10))?0:parseInt(g[1],10),startingPositionLeft:f.position().left,startingPositionTop:f.position().top,startingOffsetLeft:c,startingOffsetTop:u,parentOffsetLeft:m,parentOffsetTop:v,stellarRatio:f.data("stellar-background-ratio")===i?1:f.data("stellar-background-ratio")})}))},_reset:function(){var t,e,n,i,o;for(o=this.particles.length-1;o>=0;o--)t=this.particles[o],e=t.$element.data("stellar-startingLeft"),n=t.$element.data("stellar-startingTop"),this._setPosition(t.$element,e,e,n,n),this.options.showElement(t.$element),t.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null);for(o=this.backgrounds.length-1;o>=0;o--)i=this.backgrounds[o],i.$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null),p(i.$element,i.startingValueLeft,i.startingValueTop)},destroy:function(){this._reset(),this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name),this._animationLoop=t.noop,t(e).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var n=this,i=t(e);i.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),"function"==typeof this.options.horizontalOffset?(this.horizontalOffset=this.options.horizontalOffset(),i.bind("resize.horizontal-"+this.name,function(){n.horizontalOffset=n.options.horizontalOffset()})):this.horizontalOffset=this.options.horizontalOffset,"function"==typeof this.options.verticalOffset?(this.verticalOffset=this.options.verticalOffset(),i.bind("resize.vertical-"+this.name,function(){n.verticalOffset=n.options.verticalOffset()})):this.verticalOffset=this.options.verticalOffset},_repositionElements:function(){var t,e,n,i,o,s,r,a,l,c,u=this._getScrollLeft(),h=this._getScrollTop(),d=!0,f=!0;if(this.currentScrollLeft!==u||this.currentScrollTop!==h||this.currentWidth!==this.viewportWidth||this.currentHeight!==this.viewportHeight){for(this.currentScrollLeft=u,this.currentScrollTop=h,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight,c=this.particles.length-1;c>=0;c--)t=this.particles[c],e=t.isFixed?1:0,this.options.horizontalScrolling?(s=(u+t.horizontalOffset+this.viewportOffsetLeft+t.startingPositionLeft-t.startingOffsetLeft+t.parentOffsetLeft)*-(t.stellarRatio+e-1)+t.startingPositionLeft,a=s-t.startingPositionLeft+t.startingOffsetLeft):(s=t.startingPositionLeft,a=t.startingOffsetLeft),this.options.verticalScrolling?(r=(h+t.verticalOffset+this.viewportOffsetTop+t.startingPositionTop-t.startingOffsetTop+t.parentOffsetTop)*-(t.stellarRatio+e-1)+t.startingPositionTop,l=r-t.startingPositionTop+t.startingOffsetTop):(r=t.startingPositionTop,l=t.startingOffsetTop),this.options.hideDistantElements&&(f=!this.options.horizontalScrolling||a+t.width>(t.isFixed?0:u)&&a<(t.isFixed?0:u)+this.viewportWidth+this.viewportOffsetLeft,d=!this.options.verticalScrolling||l+t.height>(t.isFixed?0:h)&&l<(t.isFixed?0:h)+this.viewportHeight+this.viewportOffsetTop),f&&d?(t.isHidden&&(this.options.showElement(t.$element),t.isHidden=!1),this._setPosition(t.$element,s,t.startingPositionLeft,r,t.startingPositionTop)):t.isHidden||(this.options.hideElement(t.$element),t.isHidden=!0);for(c=this.backgrounds.length-1;c>=0;c--)n=this.backgrounds[c],e=n.isFixed?0:1,i=this.options.horizontalScrolling?(u+n.horizontalOffset-this.viewportOffsetLeft-n.startingOffsetLeft+n.parentOffsetLeft-n.startingBackgroundPositionLeft)*(e-n.stellarRatio)+"px":n.startingValueLeft,o=this.options.verticalScrolling?(h+n.verticalOffset-this.viewportOffsetTop-n.startingOffsetTop+n.parentOffsetTop-n.startingBackgroundPositionTop)*(e-n.stellarRatio)+"px":n.startingValueTop,p(n.$element,i,o)}},_handleScrollEvent:function(){var t=this,e=!1,n=function(){t._repositionElements(),e=!1},i=function(){e||(f(n),e=!0)};this.$scrollElement.bind("scroll."+this.name,i),i()},_startAnimationLoop:function(){var t=this;this._animationLoop=function(){f(t._animationLoop),t._repositionElements()},this._animationLoop()}},t.fn[s]=function(e){var n=arguments;return e===i||"object"==typeof e?this.each(function(){t.data(this,"plugin_"+s)||t.data(this,"plugin_"+s,new o(this,e))}):"string"==typeof e&&"_"!==e[0]&&"init"!==e?this.each(function(){var i=t.data(this,"plugin_"+s);i instanceof o&&"function"==typeof i[e]&&i[e].apply(i,Array.prototype.slice.call(n,1)),"destroy"===e&&t.data(this,"plugin_"+s,null)}):void 0},t[s]=function(){var n=t(e);return n.stellar.apply(n,Array.prototype.slice.call(arguments,0))},t[s].scrollProperty=a,t[s].positionProperty=l,e.Stellar=o}(jQuery,this,document),!function(t,e,n){"use strict";t.fn.stickyNavbar=function(i){var o=t.extend({activeClass:"active",sectionSelector:"scrollto",animDuration:350,startAt:0,easing:"swing",animateCSS:!0,animateCSSRepeat:!1,cssAnimation:"fadeInDown",jqueryEffects:!1,jqueryAnim:"slideDown",selector:"a",mobile:!1,mobileWidth:480,zindex:9999,stickyModeClass:"sticky",unstickyModeClass:"unsticky"},i),s=t("."+o.sectionSelector);return this.each(function(){var i=t(this),r=i.css("position"),a=i.css("zIndex"),l=i.outerHeight(!0),c=i.offset().top-l,u="auto"===i.css("top")?0:i.css("top"),h=i.find("a"===o.selector?"li a":"li"),p=(i.find("li a[href*=#]"),t(e).scrollTop()),d=0;h.click(function(n){var s=t(this).attr("href");if("http"===s.substring(0,4)||"mailto:"===s.substring(0,7))return!0;p=t(e).scrollTop();var r=h.index(this),a=s;++d,"0"===r&&(d=0),n.preventDefault(),1===d&&i.offset().top>c?t("html, body").stop().animate({scrollTop:t(a).offset().top-2*l+2+"px"},{duration:o.animDuration,easing:o.easing}):1===d||i.offset().top===c||0===r?t("html, body").stop().animate({scrollTop:t(a).offset().top-2*l+2+"px"},{duration:o.animDuration,easing:o.easing}):2===d&&i.offset().top<c?t("html, body").stop().animate({scrollTop:t(a).offset().top+2+"px"},{duration:o.animDuration,easing:o.easing}):c>p?t("html, body").stop().animate({scrollTop:t(a).offset().top-2*l+2+"px"},{duration:o.animDuration,easing:o.easing}):t("html, body").stop().animate({scrollTop:t(a).offset().top-l+2+"px"},{duration:o.animDuration,easing:o.easing})});var f=function(){var p=t(e),d=p.scrollTop(),f=p.width(),g=p.height();return!o.mobile&&f<o.mobileWidth?void i.css("position",r):(h.removeClass(o.activeClass),s.each(function(){var e=t(this).offset().top-l,n=t(this).outerHeight(!0)+e;d>=e&&n>=d&&("a"===o.selector?i.find('li a[href~="#'+this.id+'"]').addClass(o.activeClass):i.find('li a[href~="#'+this.id+'"]').parent().addClass(o.activeClass))}),d>=c+o.startAt-l?(i.removeClass(o.unstickyModeClass).addClass(" "+o.stickyModeClass),i.css({position:"fixed",zIndex:o.zindex}).stop(),o.jqueryEffects?(o.animateCSSRepeat||i.hide().stop()[o.jqueryAnim](o.animDuration,o.easing),i.hide().stop()[o.jqueryAnim](o.animDuration,o.easing)):o.animateCSS?o.animateCSSRepeat?i.addClass(o.cssAnimation+" animated").one("animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd",function(){i.removeClass(o.cssAnimation+" animated")}):i.addClass(o.cssAnimation+" animated").one("animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd"):i.stop()):i.css({position:o.$selfPosition,zIndex:a}).removeClass(o.stickyModeClass).addClass(" "+o.unstickyModeClass),p.scrollTop()+g>=t(n).height()&&h.removeClass(o.activeClass).last().addClass(o.activeClass),void(c-2>=d&&(i.removeClass(o.cssAnimation+" animated"),o.jqueryEffects?(0===d&&h.removeClass(o.activeClass),d>=c?i.css({position:"fixed",zIndex:o.zindex}).hide().stop()[o.jqueryAnim](o.animDuration,o.easing):i.css({position:r,zIndex:o.zindex})):(0===d&&h.removeClass(o.activeClass),i.css({position:r,top:u}).stop().animate({top:u},o.animDuration,o.easing)))))};t(e).scroll(f),t(e).ready(f),t(e).resize(f)})}}(jQuery,window,document);var Repeater=new Class({options:{addSelector:".repeater-add",removeSelector:".repeater-remove",withDataAndEvents:!1,deepWithDataAndEvents:!1,addCallback:function(){},wrapperHtml:"<div class='repeater-wrap'></div>"},i:0,container:null,wrapper:null,initialize:function(t,e){jQuery.extend(!0,{},this.options,e),jQuery(t).wrap(this.options.wrapperHtml),this.wrapper=jQuery(t).parent(),this.container=jQuery(t).clone(!0,!0),jQuery(t).remove(),this.addContainer(),this.initContainerButtons(this.container)},initContainerButtons:function(t,e){e="undefined"!=typeof e?e:!0;var n=this;jQuery(t).find(this.options.addSelector).each(function(t,e){jQuery(e).on("click",function(){n.addContainer()})}),e&&jQuery(t).find(this.options.removeSelector).each(function(e,i){jQuery(i).on("click",function(){n.removeContainer(t)})})},addContainer:function(){var t=jQuery(this.container).clone(this.options.withDataAndEvents,this.options.deepWithDataAndEvents);this.incrementContainerAttributes(t),this.initContainerButtons(t),jQuery(t).appendTo(this.wrapper),this.options.addCallback(),this.i++},removeContainer:function(t){jQuery(t).remove()},incrementContainerAttributes:function(t){var e=this;jQuery(t).find("*").each(function(t,n){var i=jQuery(n).attr("id"),o=jQuery(n).attr("name");i&&jQuery(n).attr("id",e.getIncrementedId(i)),o&&jQuery(n).attr("name",e.getIncrementedName(o))})},getIncrementedId:function(t){return t+"-"+this.i},getIncrementedName:function(t){return parts=t.split("[]"),1===parts.length?t+"["+this.i+"]":2===parts.length?parts[0]+"["+this.i+"]"+parts[1]:t}}),AjaxForm=new Class({options:{dataType:"text",target:null,callback:function(){},context:null,complete:function(){},beforeSend:function(){}},form:null,action:null,processor:null,method:null,context:null,initialize:function(t,e){if(this.options=jQuery.extend({},this.options,e),this.form=t,this.action=jQuery(this.form).attr("action"),this.action){this.method=jQuery(this.form).attr("method"),this.options.context&&(this.context=$(this.options.context).first()),this.processor=new JsonProcessor;var n=this;jQuery(this.form).submit(function(t){n.submit(t)})}},submit:function(t){var e=this;t.preventDefault(),$.ajax({url:this.action,type:this.method,dataType:this.options.dataType,context:this.context,data:jQuery(this.form).serialize(),beforeSend:this.options.beforeSend,complete:this.options.complete,error:function(t,n,i){e.error(t,n,i)},success:function(t,n,i){e.success(t,n,i)}}).done(this.options.callback)},error:function(){this.processor.processJson(JSON.stringify({message:this.options.errorMessage}))},success:function(t){"html"==this.options.dataType?this.injectHtml(t):this.processor.processJson(t)},injectHtml:function(t){this.options.target&&$(this.options.target).html(t)}});if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");if(+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return{end:e[n]};return!1}t.fn.emulateTransitionEnd=function(e){var n=!1,i=this;t(this).one("bsTransitionEnd",function(){n=!0});var o=function(){n||t(i).trigger(t.support.transition.end)
};return setTimeout(o,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),o=n.data("bs.alert");o||n.data("bs.alert",o=new i(this)),"string"==typeof e&&o[e].call(n)})}var n='[data-dismiss="alert"]',i=function(e){t(e).on("click",n,this.close)};i.VERSION="3.3.2",i.TRANSITION_DURATION=150,i.prototype.close=function(e){function n(){r.detach().trigger("closed.bs.alert").remove()}var o=t(this),s=o.attr("data-target");s||(s=o.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""));var r=t(s);e&&e.preventDefault(),r.length||(r=o.closest(".alert")),r.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(r.removeClass("in"),t.support.transition&&r.hasClass("fade")?r.one("bsTransitionEnd",n).emulateTransitionEnd(i.TRANSITION_DURATION):n())};var o=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=i,t.fn.alert.noConflict=function(){return t.fn.alert=o,this},t(document).on("click.bs.alert.data-api",n,i.prototype.close)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.button"),s="object"==typeof e&&e;o||i.data("bs.button",o=new n(this,s)),"toggle"==e?o.toggle():e&&o.setState(e)})}var n=function(e,i){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,i),this.isLoading=!1};n.VERSION="3.3.2",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(e){var n="disabled",i=this.$element,o=i.is("input")?"val":"html",s=i.data();e+="Text",null==s.resetText&&i.data("resetText",i[o]()),setTimeout(t.proxy(function(){i[o](null==s[e]?this.options[e]:s[e]),"loadingText"==e?(this.isLoading=!0,i.addClass(n).attr(n,n)):this.isLoading&&(this.isLoading=!1,i.removeClass(n).removeAttr(n))},this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var n=this.$element.find("input");"radio"==n.prop("type")&&(n.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&n.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));t&&this.$element.toggleClass("active")};var i=t.fn.button;t.fn.button=e,t.fn.button.Constructor=n,t.fn.button.noConflict=function(){return t.fn.button=i,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(n){var i=t(n.target);i.hasClass("btn")||(i=i.closest(".btn")),e.call(i,"toggle"),n.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.carousel"),s=t.extend({},n.DEFAULTS,i.data(),"object"==typeof e&&e),r="string"==typeof e?e:s.slide;o||i.data("bs.carousel",o=new n(this,s)),"number"==typeof e?o.to(e):r?o[r]():s.interval&&o.pause().cycle()})}var n=function(e,n){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};n.VERSION="3.3.2",n.TRANSITION_DURATION=600,n.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},n.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},n.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},n.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},n.prototype.getItemForDirection=function(t,e){var n=this.getItemIndex(e),i="prev"==t&&0===n||"next"==t&&n==this.$items.length-1;if(i&&!this.options.wrap)return e;var o="prev"==t?-1:1,s=(n+o)%this.$items.length;return this.$items.eq(s)},n.prototype.to=function(t){var e=this,n=this.getItemIndex(this.$active=this.$element.find(".item.active"));return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):n==t?this.pause().cycle():this.slide(t>n?"next":"prev",this.$items.eq(t))},n.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},n.prototype.next=function(){return this.sliding?void 0:this.slide("next")},n.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},n.prototype.slide=function(e,i){var o=this.$element.find(".item.active"),s=i||this.getItemForDirection(e,o),r=this.interval,a="next"==e?"left":"right",l=this;if(s.hasClass("active"))return this.sliding=!1;var c=s[0],u=t.Event("slide.bs.carousel",{relatedTarget:c,direction:a});if(this.$element.trigger(u),!u.isDefaultPrevented()){if(this.sliding=!0,r&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=t(this.$indicators.children()[this.getItemIndex(s)]);h&&h.addClass("active")}var p=t.Event("slid.bs.carousel",{relatedTarget:c,direction:a});return t.support.transition&&this.$element.hasClass("slide")?(s.addClass(e),s[0].offsetWidth,o.addClass(a),s.addClass(a),o.one("bsTransitionEnd",function(){s.removeClass([e,a].join(" ")).addClass("active"),o.removeClass(["active",a].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(p)},0)}).emulateTransitionEnd(n.TRANSITION_DURATION)):(o.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(p)),r&&this.cycle(),this}};var i=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=n,t.fn.carousel.noConflict=function(){return t.fn.carousel=i,this};var o=function(n){var i,o=t(this),s=t(o.attr("data-target")||(i=o.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""));if(s.hasClass("carousel")){var r=t.extend({},s.data(),o.data()),a=o.attr("data-slide-to");a&&(r.interval=!1),e.call(s,r),a&&s.data("bs.carousel").to(a),n.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",o).on("click.bs.carousel.data-api","[data-slide-to]",o),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var n=t(this);e.call(n,n.data())})})}(jQuery),+function(t){"use strict";function e(e){var n,i=e.attr("data-target")||(n=e.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"");return t(i)}function n(e){return this.each(function(){var n=t(this),o=n.data("bs.collapse"),s=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e);!o&&s.toggle&&"show"==e&&(s.toggle=!1),o||n.data("bs.collapse",o=new i(this,s)),"string"==typeof e&&o[e]()})}var i=function(e,n){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,n),this.$trigger=t(this.options.trigger).filter('[href="#'+e.id+'"], [data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};i.VERSION="3.3.2",i.TRANSITION_DURATION=350,i.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},i.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,o=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(o&&o.length&&(e=o.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){o&&o.length&&(n.call(o,"hide"),e||o.data("bs.collapse",null));var r=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var a=function(){this.$element.removeClass("collapsing").addClass("collapse in")[r](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return a.call(this);var l=t.camelCase(["scroll",r].join("-"));this.$element.one("bsTransitionEnd",t.proxy(a,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[r](this.$element[0][l])}}}},i.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var o=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[n](0).one("bsTransitionEnd",t.proxy(o,this)).emulateTransitionEnd(i.TRANSITION_DURATION):o.call(this)}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},i.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(n,i){var o=t(i);this.addAriaAndCollapsedClass(e(o),o)},this)).end()},i.prototype.addAriaAndCollapsedClass=function(t,e){var n=t.hasClass("in");t.attr("aria-expanded",n),e.toggleClass("collapsed",!n).attr("aria-expanded",n)};var o=t.fn.collapse;t.fn.collapse=n,t.fn.collapse.Constructor=i,t.fn.collapse.noConflict=function(){return t.fn.collapse=o,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(i){var o=t(this);o.attr("data-target")||i.preventDefault();var s=e(o),r=s.data("bs.collapse"),a=r?"toggle":t.extend({},o.data(),{trigger:this});n.call(s,a)})}(jQuery),+function(t){"use strict";function e(e){e&&3===e.which||(t(o).remove(),t(s).each(function(){var i=t(this),o=n(i),s={relatedTarget:this};o.hasClass("open")&&(o.trigger(e=t.Event("hide.bs.dropdown",s)),e.isDefaultPrevented()||(i.attr("aria-expanded","false"),o.removeClass("open").trigger("hidden.bs.dropdown",s)))}))}function n(e){var n=e.attr("data-target");n||(n=e.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));var i=n&&t(n);return i&&i.length?i:e.parent()}function i(e){return this.each(function(){var n=t(this),i=n.data("bs.dropdown");i||n.data("bs.dropdown",i=new r(this)),"string"==typeof e&&i[e].call(n)})}var o=".dropdown-backdrop",s='[data-toggle="dropdown"]',r=function(e){t(e).on("click.bs.dropdown",this.toggle)};r.VERSION="3.3.2",r.prototype.toggle=function(i){var o=t(this);if(!o.is(".disabled, :disabled")){var s=n(o),r=s.hasClass("open");if(e(),!r){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e);var a={relatedTarget:this};if(s.trigger(i=t.Event("show.bs.dropdown",a)),i.isDefaultPrevented())return;o.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger("shown.bs.dropdown",a)}return!1}},r.prototype.keydown=function(e){if(/(38|40|27|32)/.test(e.which)&&!/input|textarea/i.test(e.target.tagName)){var i=t(this);if(e.preventDefault(),e.stopPropagation(),!i.is(".disabled, :disabled")){var o=n(i),r=o.hasClass("open");if(!r&&27!=e.which||r&&27==e.which)return 27==e.which&&o.find(s).trigger("focus"),i.trigger("click");var a=" li:not(.divider):visible a",l=o.find('[role="menu"]'+a+', [role="listbox"]'+a);if(l.length){var c=l.index(e.target);38==e.which&&c>0&&c--,40==e.which&&c<l.length-1&&c++,~c||(c=0),l.eq(c).trigger("focus")}}}};var a=t.fn.dropdown;t.fn.dropdown=i,t.fn.dropdown.Constructor=r,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=a,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,r.prototype.toggle).on("keydown.bs.dropdown.data-api",s,r.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',r.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',r.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e,i){return this.each(function(){var o=t(this),s=o.data("bs.modal"),r=t.extend({},n.DEFAULTS,o.data(),"object"==typeof e&&e);s||o.data("bs.modal",s=new n(this,r)),"string"==typeof e?s[e](i):r.show&&s.show(i)})}var n=function(e,n){this.options=n,this.$body=t(document.body),this.$element=t(e),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};n.VERSION="3.3.2",n.TRANSITION_DURATION=300,n.BACKDROP_TRANSITION_DURATION=150,n.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},n.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},n.prototype.show=function(e){var i=this,o=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(o),this.isShown||o.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.backdrop(function(){var o=t.support.transition&&i.$element.hasClass("fade");i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),i.options.backdrop&&i.adjustBackdrop(),i.adjustDialog(),o&&i.$element[0].offsetWidth,i.$element.addClass("in").attr("aria-hidden",!1),i.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:e});o?i.$element.find(".modal-dialog").one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(n.TRANSITION_DURATION):i.$element.trigger("focus").trigger(s)}))},n.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(n.TRANSITION_DURATION):this.hideModal())},n.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},n.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},n.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},n.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},n.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},n.prototype.backdrop=function(e){var i=this,o=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&o;if(this.$backdrop=t('<div class="modal-backdrop '+o+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",t.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var r=function(){i.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",r).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION):r()}else e&&e()},n.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},n.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},n.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},n.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},n.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},n.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},n.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},n.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var i=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=n,t.fn.modal.noConflict=function(){return t.fn.modal=i,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(n){var i=t(this),o=i.attr("href"),s=t(i.attr("data-target")||o&&o.replace(/.*(?=#[^\s]+$)/,"")),r=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(o)&&o},s.data(),i.data());i.is("a")&&n.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus")})}),e.call(s,r,this)})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.tooltip"),s="object"==typeof e&&e;(o||"destroy"!=e)&&(o||i.data("bs.tooltip",o=new n(this,s)),"string"==typeof e&&o[e]())})}var n=function(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",t,e)};n.VERSION="3.3.2",n.TRANSITION_DURATION=150,n.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},n.prototype.init=function(e,n,i){this.enabled=!0,this.type=e,this.$element=t(n),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&t(this.options.viewport.selector||this.options.viewport);for(var o=this.options.trigger.split(" "),s=o.length;s--;){var r=o[s];if("click"==r)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=r){var a="hover"==r?"mouseenter":"focusin",l="hover"==r?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},n.prototype.getDelegateOptions=function(){var e={},n=this.getDefaults();return this._options&&t.each(this._options,function(t,i){n[t]!=i&&(e[t]=i)}),e},n.prototype.enter=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return n&&n.$tip&&n.$tip.is(":visible")?void(n.hoverState="in"):(n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n)),clearTimeout(n.timeout),n.hoverState="in",n.options.delay&&n.options.delay.show?void(n.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show)):n.show())},n.prototype.leave=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n)),clearTimeout(n.timeout),n.hoverState="out",n.options.delay&&n.options.delay.hide?void(n.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide)):n.hide()},n.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var i=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!i)return;var o=this,s=this.tip(),r=this.getUID(this.type);this.setContent(),s.attr("id",r),this.$element.attr("aria-describedby",r),this.options.animation&&s.addClass("fade");var a="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,c=l.test(a);c&&(a=a.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element);var u=this.getPosition(),h=s[0].offsetWidth,p=s[0].offsetHeight;if(c){var d=a,f=this.options.container?t(this.options.container):this.$element.parent(),g=this.getPosition(f);a="bottom"==a&&u.bottom+p>g.bottom?"top":"top"==a&&u.top-p<g.top?"bottom":"right"==a&&u.right+h>g.width?"left":"left"==a&&u.left-h<g.left?"right":a,s.removeClass(d).addClass(a)}var m=this.getCalculatedOffset(a,u,h,p);this.applyPlacement(m,a);var v=function(){var t=o.hoverState;o.$element.trigger("shown.bs."+o.type),o.hoverState=null,"out"==t&&o.leave(o)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",v).emulateTransitionEnd(n.TRANSITION_DURATION):v()}},n.prototype.applyPlacement=function(e,n){var i=this.tip(),o=i[0].offsetWidth,s=i[0].offsetHeight,r=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(r)&&(r=0),isNaN(a)&&(a=0),e.top=e.top+r,e.left=e.left+a,t.offset.setOffset(i[0],t.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),i.addClass("in");var l=i[0].offsetWidth,c=i[0].offsetHeight;"top"==n&&c!=s&&(e.top=e.top+s-c);var u=this.getViewportAdjustedDelta(n,e,l,c);u.left?e.left+=u.left:e.top+=u.top;var h=/top|bottom/.test(n),p=h?2*u.left-o+l:2*u.top-s+c,d=h?"offsetWidth":"offsetHeight";i.offset(e),this.replaceArrow(p,i[0][d],h)},n.prototype.replaceArrow=function(t,e,n){this.arrow().css(n?"left":"top",50*(1-t/e)+"%").css(n?"top":"left","")},n.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},n.prototype.hide=function(e){function i(){"in"!=o.hoverState&&s.detach(),o.$element.removeAttr("aria-describedby").trigger("hidden.bs."+o.type),e&&e()}var o=this,s=this.tip(),r=t.Event("hide.bs."+this.type);return this.$element.trigger(r),r.isDefaultPrevented()?void 0:(s.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",i).emulateTransitionEnd(n.TRANSITION_DURATION):i(),this.hoverState=null,this)},n.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},n.prototype.hasContent=function(){return this.getTitle()},n.prototype.getPosition=function(e){e=e||this.$element;var n=e[0],i="BODY"==n.tagName,o=n.getBoundingClientRect();null==o.width&&(o=t.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));var s=i?{top:0,left:0}:e.offset(),r={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},a=i?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},o,r,a,s)},n.prototype.getCalculatedOffset=function(t,e,n,i){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-n/2}:"top"==t?{top:e.top-i,left:e.left+e.width/2-n/2}:"left"==t?{top:e.top+e.height/2-i/2,left:e.left-n}:{top:e.top+e.height/2-i/2,left:e.left+e.width}},n.prototype.getViewportAdjustedDelta=function(t,e,n,i){var o={top:0,left:0};if(!this.$viewport)return o;var s=this.options.viewport&&this.options.viewport.padding||0,r=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-s-r.scroll,l=e.top+s-r.scroll+i;a<r.top?o.top=r.top-a:l>r.top+r.height&&(o.top=r.top+r.height-l)}else{var c=e.left-s,u=e.left+s+n;c<r.left?o.left=r.left-c:u>r.width&&(o.left=r.left+r.width-u)}return o},n.prototype.getTitle=function(){var t,e=this.$element,n=this.options;return t=e.attr("data-original-title")||("function"==typeof n.title?n.title.call(e[0]):n.title)},n.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},n.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},n.prototype.enable=function(){this.enabled=!0},n.prototype.disable=function(){this.enabled=!1},n.prototype.toggleEnabled=function(){this.enabled=!this.enabled},n.prototype.toggle=function(e){var n=this;e&&(n=t(e.currentTarget).data("bs."+this.type),n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n))),n.tip().hasClass("in")?n.leave(n):n.enter(n)},n.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type)})};var i=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=n,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=i,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.popover"),s="object"==typeof e&&e;(o||"destroy"!=e)&&(o||i.data("bs.popover",o=new n(this,s)),"string"==typeof e&&o[e]())})}var n=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");n.VERSION="3.3.2",n.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),n.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),n.prototype.constructor=n,n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),n=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof n?"html":"append":"text"](n),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},n.prototype.hasContent=function(){return this.getTitle()||this.getContent()},n.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},n.prototype.tip=function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip};var i=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=n,t.fn.popover.noConflict=function(){return t.fn.popover=i,this}}(jQuery),+function(t){"use strict";function e(n,i){var o=t.proxy(this.process,this);this.$body=t("body"),this.$scrollElement=t(t(n).is("body")?window:n),this.options=t.extend({},e.DEFAULTS,i),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",o),this.refresh(),this.process()}function n(n){return this.each(function(){var i=t(this),o=i.data("bs.scrollspy"),s="object"==typeof n&&n;o||i.data("bs.scrollspy",o=new e(this,s)),"string"==typeof n&&o[n]()})}e.VERSION="3.3.2",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e="offset",n=0;t.isWindow(this.$scrollElement[0])||(e="position",n=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var i=this;this.$body.find(this.selector).map(function(){var i=t(this),o=i.data("target")||i.attr("href"),s=/^#./.test(o)&&t(o);return s&&s.length&&s.is(":visible")&&[[s[e]().top+n,o]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){i.offsets.push(this[0]),i.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,n=this.getScrollHeight(),i=this.options.offset+n-this.$scrollElement.height(),o=this.offsets,s=this.targets,r=this.activeTarget;if(this.scrollHeight!=n&&this.refresh(),e>=i)return r!=(t=s[s.length-1])&&this.activate(t);if(r&&e<o[0])return this.activeTarget=null,this.clear();for(t=o.length;t--;)r!=s[t]&&e>=o[t]&&(!o[t+1]||e<=o[t+1])&&this.activate(s[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear();var n=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',i=t(n).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var i=t.fn.scrollspy;t.fn.scrollspy=n,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=i,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);n.call(e,e.data())})})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.tab");o||i.data("bs.tab",o=new n(this)),"string"==typeof e&&o[e]()})}var n=function(e){this.element=t(e)};n.VERSION="3.3.2",n.TRANSITION_DURATION=150,n.prototype.show=function(){var e=this.element,n=e.closest("ul:not(.dropdown-menu)"),i=e.data("target");if(i||(i=e.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var o=n.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),r=t.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(s),e.trigger(r),!r.isDefaultPrevented()&&!s.isDefaultPrevented()){var a=t(i);this.activate(e.closest("li"),n),this.activate(a,a.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},n.prototype.activate=function(e,i,o){function s(){r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),a?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),o&&o()}var r=i.find("> .active"),a=o&&t.support.transition&&(r.length&&r.hasClass("fade")||!!i.find("> .fade").length);r.length&&a?r.one("bsTransitionEnd",s).emulateTransitionEnd(n.TRANSITION_DURATION):s(),r.removeClass("in")};var i=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=n,t.fn.tab.noConflict=function(){return t.fn.tab=i,this};var o=function(n){n.preventDefault(),e.call(t(this),"show")
};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',o).on("click.bs.tab.data-api",'[data-toggle="pill"]',o)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.affix"),s="object"==typeof e&&e;o||i.data("bs.affix",o=new n(this,s)),"string"==typeof e&&o[e]()})}var n=function(e,i){this.options=t.extend({},n.DEFAULTS,i),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};n.VERSION="3.3.2",n.RESET="affix affix-top affix-bottom",n.DEFAULTS={offset:0,target:window},n.prototype.getState=function(t,e,n,i){var o=this.$target.scrollTop(),s=this.$element.offset(),r=this.$target.height();if(null!=n&&"top"==this.affixed)return n>o?"top":!1;if("bottom"==this.affixed)return null!=n?o+this.unpin<=s.top?!1:"bottom":t-i>=o+r?!1:"bottom";var a=null==this.affixed,l=a?o:s.top,c=a?r:e;return null!=n&&n>=o?"top":null!=i&&l+c>=t-i?"bottom":!1},n.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(n.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},n.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},n.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),i=this.options.offset,o=i.top,s=i.bottom,r=t("body").height();"object"!=typeof i&&(s=o=i),"function"==typeof o&&(o=i.top(this.$element)),"function"==typeof s&&(s=i.bottom(this.$element));var a=this.getState(r,e,o,s);if(this.affixed!=a){null!=this.unpin&&this.$element.css("top","");var l="affix"+(a?"-"+a:""),c=t.Event(l+".bs.affix");if(this.$element.trigger(c),c.isDefaultPrevented())return;this.affixed=a,this.unpin="bottom"==a?this.getPinnedOffset():null,this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==a&&this.$element.offset({top:r-e-s})}};var i=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=n,t.fn.affix.noConflict=function(){return t.fn.affix=i,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var n=t(this),i=n.data();i.offset=i.offset||{},null!=i.offsetBottom&&(i.offset.bottom=i.offsetBottom),null!=i.offsetTop&&(i.offset.top=i.offsetTop),e.call(n,i)})})}(jQuery),"undefined"==typeof jQuery)throw new Error("Jasny Bootstrap's JavaScript requires jQuery");+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return{end:e[n]};return!1}void 0===t.support.transition&&(t.fn.emulateTransitionEnd=function(e){var n=!1,i=this;t(this).one(t.support.transition.end,function(){n=!0});var o=function(){n||t(i).trigger(t.support.transition.end)};return setTimeout(o,e),this},t(function(){t.support.transition=e()}))}(window.jQuery),+function(t){"use strict";var e=function(n,i){this.$element=t(n),this.options=t.extend({},e.DEFAULTS,i),this.state=null,this.placement=null,this.options.recalc&&(this.calcClone(),t(window).on("resize",t.proxy(this.recalc,this))),this.options.autohide&&t(document).on("click",t.proxy(this.autohide,this)),this.options.toggle&&this.toggle(),this.options.disablescrolling&&(this.options.disableScrolling=this.options.disablescrolling,delete this.options.disablescrolling)};e.DEFAULTS={toggle:!0,placement:"auto",autohide:!0,recalc:!0,disableScrolling:!0},e.prototype.offset=function(){switch(this.placement){case"left":case"right":return this.$element.outerWidth();case"top":case"bottom":return this.$element.outerHeight()}},e.prototype.calcPlacement=function(){function e(t,e){if("auto"===o.css(e))return t;if("auto"===o.css(t))return e;var n=parseInt(o.css(t),10),i=parseInt(o.css(e),10);return n>i?e:t}if("auto"!==this.options.placement)return void(this.placement=this.options.placement);this.$element.hasClass("in")||this.$element.css("visiblity","hidden !important").addClass("in");var n=t(window).width()/this.$element.width(),i=t(window).height()/this.$element.height(),o=this.$element;this.placement=n>=i?e("left","right"):e("top","bottom"),"hidden !important"===this.$element.css("visibility")&&this.$element.removeClass("in").css("visiblity","")},e.prototype.opposite=function(t){switch(t){case"top":return"bottom";case"left":return"right";case"bottom":return"top";case"right":return"left"}},e.prototype.getCanvasElements=function(){var e=this.options.canvas?t(this.options.canvas):this.$element,n=e.find("*").filter(function(){return"fixed"===t(this).css("position")}).not(this.options.exclude);return e.add(n)},e.prototype.slide=function(e,n,i){if(!t.support.transition){var o={};return o[this.placement]="+="+n,e.animate(o,350,i)}var s=this.placement,r=this.opposite(s);e.each(function(){"auto"!==t(this).css(s)&&t(this).css(s,(parseInt(t(this).css(s),10)||0)+n),"auto"!==t(this).css(r)&&t(this).css(r,(parseInt(t(this).css(r),10)||0)-n)}),this.$element.one(t.support.transition.end,i).emulateTransitionEnd(350)},e.prototype.disableScrolling=function(){var e=t("body").width(),n="padding-"+this.opposite(this.placement);if(void 0===t("body").data("offcanvas-style")&&t("body").data("offcanvas-style",t("body").attr("style")||""),t("body").css("overflow","hidden"),t("body").width()>e){var i=parseInt(t("body").css(n),10)+t("body").width()-e;setTimeout(function(){t("body").css(n,i)},1)}},e.prototype.show=function(){if(!this.state){var e=t.Event("show.bs.offcanvas");if(this.$element.trigger(e),!e.isDefaultPrevented()){this.state="slide-in",this.calcPlacement();var n=this.getCanvasElements(),i=this.placement,o=this.opposite(i),s=this.offset();-1!==n.index(this.$element)&&(t(this.$element).data("offcanvas-style",t(this.$element).attr("style")||""),this.$element.css(i,-1*s),this.$element.css(i)),n.addClass("canvas-sliding").each(function(){void 0===t(this).data("offcanvas-style")&&t(this).data("offcanvas-style",t(this).attr("style")||""),"static"===t(this).css("position")&&t(this).css("position","relative"),"auto"!==t(this).css(i)&&"0px"!==t(this).css(i)||"auto"!==t(this).css(o)&&"0px"!==t(this).css(o)||t(this).css(i,0)}),this.options.disableScrolling&&this.disableScrolling();var r=function(){"slide-in"==this.state&&(this.state="slid",n.removeClass("canvas-sliding").addClass("canvas-slid"),this.$element.trigger("shown.bs.offcanvas"))};setTimeout(t.proxy(function(){this.$element.addClass("in"),this.slide(n,s,t.proxy(r,this))},this),1)}}},e.prototype.hide=function(){if("slid"===this.state){var e=t.Event("hide.bs.offcanvas");if(this.$element.trigger(e),!e.isDefaultPrevented()){this.state="slide-out";var n=t(".canvas-slid"),i=(this.placement,-1*this.offset()),o=function(){"slide-out"==this.state&&(this.state=null,this.placement=null,this.$element.removeClass("in"),n.removeClass("canvas-sliding"),n.add(this.$element).add("body").each(function(){t(this).attr("style",t(this).data("offcanvas-style")).removeData("offcanvas-style")}),this.$element.trigger("hidden.bs.offcanvas"))};n.removeClass("canvas-slid").addClass("canvas-sliding"),setTimeout(t.proxy(function(){this.slide(n,i,t.proxy(o,this))},this),1)}}},e.prototype.toggle=function(){"slide-in"!==this.state&&"slide-out"!==this.state&&this["slid"===this.state?"hide":"show"]()},e.prototype.calcClone=function(){this.$calcClone=this.$element.clone().html("").addClass("offcanvas-clone").removeClass("in").appendTo(t("body"))},e.prototype.recalc=function(){if("none"!==this.$calcClone.css("display")&&("slid"===this.state||"slide-in"===this.state)){this.state=null,this.placement=null;var e=this.getCanvasElements();this.$element.removeClass("in"),e.removeClass("canvas-slid"),e.add(this.$element).add("body").each(function(){t(this).attr("style",t(this).data("offcanvas-style")).removeData("offcanvas-style")})}},e.prototype.autohide=function(e){0===t(e.target).closest(this.$element).length&&this.hide()};var n=t.fn.offcanvas;t.fn.offcanvas=function(n){return this.each(function(){var i=t(this),o=i.data("bs.offcanvas"),s=t.extend({},e.DEFAULTS,i.data(),"object"==typeof n&&n);o||i.data("bs.offcanvas",o=new e(this,s)),"string"==typeof n&&o[n]()})},t.fn.offcanvas.Constructor=e,t.fn.offcanvas.noConflict=function(){return t.fn.offcanvas=n,this},t(document).on("click.bs.offcanvas.data-api","[data-toggle=offcanvas]",function(e){var n,i=t(this),o=i.attr("data-target")||e.preventDefault()||(n=i.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""),s=t(o),r=s.data("bs.offcanvas"),a=r?"toggle":i.data();e.stopPropagation(),r?r.toggle():s.offcanvas(a)})}(window.jQuery),+function(t){"use strict";var e=function(n,i){this.$element=t(n),this.options=t.extend({},e.DEFAULTS,i),this.$element.on("click.bs.rowlink","td:not(.rowlink-skip)",t.proxy(this.click,this))};e.DEFAULTS={target:"a"},e.prototype.click=function(e){var n=t(e.currentTarget).closest("tr").find(this.options.target)[0];if(t(e.target)[0]!==n)if(e.preventDefault(),n.click)n.click();else if(document.createEvent){var i=document.createEvent("MouseEvents");i.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),n.dispatchEvent(i)}};var n=t.fn.rowlink;t.fn.rowlink=function(n){return this.each(function(){var i=t(this),o=i.data("bs.rowlink");o||i.data("bs.rowlink",o=new e(this,n))})},t.fn.rowlink.Constructor=e,t.fn.rowlink.noConflict=function(){return t.fn.rowlink=n,this},t(document).on("click.bs.rowlink.data-api",'[data-link="row"]',function(e){if(0===t(e.target).closest(".rowlink-skip").length){var n=t(this);n.data("bs.rowlink")||(n.rowlink(n.data()),t(e.target).trigger("click.bs.rowlink"))}})}(window.jQuery),+function(t){"use strict";var e=void 0!==window.orientation,n=navigator.userAgent.toLowerCase().indexOf("android")>-1,i="Microsoft Internet Explorer"==window.navigator.appName,o=function(e,i){n||(this.$element=t(e),this.options=t.extend({},o.DEFAULTS,i),this.mask=String(this.options.mask),this.init(),this.listen(),this.checkVal())};o.DEFAULTS={mask:"",placeholder:"_",definitions:{9:"[0-9]",a:"[A-Za-z]",w:"[A-Za-z0-9]","*":"."}},o.prototype.init=function(){var e=this.options.definitions,n=this.mask.length;this.tests=[],this.partialPosition=this.mask.length,this.firstNonMaskPos=null,t.each(this.mask.split(""),t.proxy(function(t,i){"?"==i?(n--,this.partialPosition=t):e[i]?(this.tests.push(new RegExp(e[i])),null===this.firstNonMaskPos&&(this.firstNonMaskPos=this.tests.length-1)):this.tests.push(null)},this)),this.buffer=t.map(this.mask.split(""),t.proxy(function(t){return"?"!=t?e[t]?this.options.placeholder:t:void 0},this)),this.focusText=this.$element.val(),this.$element.data("rawMaskFn",t.proxy(function(){return t.map(this.buffer,function(t,e){return this.tests[e]&&t!=this.options.placeholder?t:null}).join("")},this))},o.prototype.listen=function(){if(!this.$element.attr("readonly")){var e=(i?"paste":"input")+".mask";this.$element.on("unmask.bs.inputmask",t.proxy(this.unmask,this)).on("focus.bs.inputmask",t.proxy(this.focusEvent,this)).on("blur.bs.inputmask",t.proxy(this.blurEvent,this)).on("keydown.bs.inputmask",t.proxy(this.keydownEvent,this)).on("keypress.bs.inputmask",t.proxy(this.keypressEvent,this)).on(e,t.proxy(this.pasteEvent,this))}},o.prototype.caret=function(t,e){if(0!==this.$element.length){if("number"==typeof t)return e="number"==typeof e?e:t,this.$element.each(function(){if(this.setSelectionRange)this.setSelectionRange(t,e);else if(this.createTextRange){var n=this.createTextRange();n.collapse(!0),n.moveEnd("character",e),n.moveStart("character",t),n.select()}});if(this.$element[0].setSelectionRange)t=this.$element[0].selectionStart,e=this.$element[0].selectionEnd;else if(document.selection&&document.selection.createRange){var n=document.selection.createRange();t=0-n.duplicate().moveStart("character",-1e5),e=t+n.text.length}return{begin:t,end:e}}},o.prototype.seekNext=function(t){for(var e=this.mask.length;++t<=e&&!this.tests[t];);return t},o.prototype.seekPrev=function(t){for(;--t>=0&&!this.tests[t];);return t},o.prototype.shiftL=function(t,e){var n=this.mask.length;if(!(0>t)){for(var i=t,o=this.seekNext(e);n>i;i++)if(this.tests[i]){if(!(n>o&&this.tests[i].test(this.buffer[o])))break;this.buffer[i]=this.buffer[o],this.buffer[o]=this.options.placeholder,o=this.seekNext(o)}this.writeBuffer(),this.caret(Math.max(this.firstNonMaskPos,t))}},o.prototype.shiftR=function(t){for(var e=this.mask.length,n=t,i=this.options.placeholder;e>n;n++)if(this.tests[n]){var o=this.seekNext(n),s=this.buffer[n];if(this.buffer[n]=i,!(e>o&&this.tests[o].test(s)))break;i=s}},o.prototype.unmask=function(){this.$element.unbind(".mask").removeData("inputmask")},o.prototype.focusEvent=function(){this.focusText=this.$element.val();var t=this.mask.length,e=this.checkVal();this.writeBuffer();var n=this,i=function(){e==t?n.caret(0,e):n.caret(e)};i(),setTimeout(i,50)},o.prototype.blurEvent=function(){this.checkVal(),this.$element.val()!==this.focusText&&this.$element.trigger("change")},o.prototype.keydownEvent=function(t){var n=t.which;if(8==n||46==n||e&&127==n){var i=this.caret(),o=i.begin,s=i.end;return s-o===0&&(o=46!=n?this.seekPrev(o):s=this.seekNext(o-1),s=46==n?this.seekNext(s):s),this.clearBuffer(o,s),this.shiftL(o,s-1),!1}return 27==n?(this.$element.val(this.focusText),this.caret(0,this.checkVal()),!1):void 0},o.prototype.keypressEvent=function(t){var e=this.mask.length,n=t.which,i=this.caret();if(t.ctrlKey||t.altKey||t.metaKey||32>n)return!0;if(n){i.end-i.begin!==0&&(this.clearBuffer(i.begin,i.end),this.shiftL(i.begin,i.end-1));var o=this.seekNext(i.begin-1);if(e>o){var s=String.fromCharCode(n);if(this.tests[o].test(s)){this.shiftR(o),this.buffer[o]=s,this.writeBuffer();var r=this.seekNext(o);this.caret(r)}}return!1}},o.prototype.pasteEvent=function(){var t=this;setTimeout(function(){t.caret(t.checkVal(!0))},0)},o.prototype.clearBuffer=function(t,e){for(var n=this.mask.length,i=t;e>i&&n>i;i++)this.tests[i]&&(this.buffer[i]=this.options.placeholder)},o.prototype.writeBuffer=function(){return this.$element.val(this.buffer.join("")).val()},o.prototype.checkVal=function(t){for(var e=this.mask.length,n=this.$element.val(),i=-1,o=0,s=0;e>o;o++)if(this.tests[o]){for(this.buffer[o]=this.options.placeholder;s++<n.length;){var r=n.charAt(s-1);if(this.tests[o].test(r)){this.buffer[o]=r,i=o;break}}if(s>n.length)break}else this.buffer[o]==n.charAt(s)&&o!=this.partialPosition&&(s++,i=o);return!t&&i+1<this.partialPosition?(this.$element.val(""),this.clearBuffer(0,e)):(t||i+1>=this.partialPosition)&&(this.writeBuffer(),t||this.$element.val(this.$element.val().substring(0,i+1))),this.partialPosition?o:this.firstNonMaskPos};var s=t.fn.inputmask;t.fn.inputmask=function(e){return this.each(function(){var n=t(this),i=n.data("bs.inputmask");i||n.data("bs.inputmask",i=new o(this,e))})},t.fn.inputmask.Constructor=o,t.fn.inputmask.noConflict=function(){return t.fn.inputmask=s,this},t(document).on("focus.bs.inputmask.data-api","[data-mask]",function(){var e=t(this);e.data("bs.inputmask")||e.inputmask(e.data())})}(window.jQuery),+function(t){"use strict";var e="Microsoft Internet Explorer"==window.navigator.appName,n=function(e,n){if(this.$element=t(e),this.$input=this.$element.find(":file"),0!==this.$input.length){this.name=this.$input.attr("name")||n.name,this.$hidden=this.$element.find('input[type=hidden][name="'+this.name+'"]'),0===this.$hidden.length&&(this.$hidden=t('<input type="hidden">').insertBefore(this.$input)),this.$preview=this.$element.find(".fileinput-preview");var i=this.$preview.css("height");"inline"!==this.$preview.css("display")&&"0px"!==i&&"none"!==i&&this.$preview.css("line-height",i),this.original={exists:this.$element.hasClass("fileinput-exists"),preview:this.$preview.html(),hiddenVal:this.$hidden.val()},this.listen()}};n.prototype.listen=function(){this.$input.on("change.bs.fileinput",t.proxy(this.change,this)),t(this.$input[0].form).on("reset.bs.fileinput",t.proxy(this.reset,this)),this.$element.find('[data-trigger="fileinput"]').on("click.bs.fileinput",t.proxy(this.trigger,this)),this.$element.find('[data-dismiss="fileinput"]').on("click.bs.fileinput",t.proxy(this.clear,this))},n.prototype.change=function(e){var n=void 0===e.target.files?e.target&&e.target.value?[{name:e.target.value.replace(/^.+\\/,"")}]:[]:e.target.files;if(e.stopPropagation(),0===n.length)return void this.clear();this.$hidden.val(""),this.$hidden.attr("name",""),this.$input.attr("name",this.name);var i=n[0];if(this.$preview.length>0&&("undefined"!=typeof i.type?i.type.match(/^image\/(gif|png|jpeg)$/):i.name.match(/\.(gif|png|jpe?g)$/i))&&"undefined"!=typeof FileReader){var o=new FileReader,s=this.$preview,r=this.$element;o.onload=function(e){var o=t("<img>");o[0].src=e.target.result,n[0].result=e.target.result,r.find(".fileinput-filename").text(i.name),"none"!=s.css("max-height")&&o.css("max-height",parseInt(s.css("max-height"),10)-parseInt(s.css("padding-top"),10)-parseInt(s.css("padding-bottom"),10)-parseInt(s.css("border-top"),10)-parseInt(s.css("border-bottom"),10)),s.html(o),r.addClass("fileinput-exists").removeClass("fileinput-new"),r.trigger("change.bs.fileinput",n)},o.readAsDataURL(i)}else this.$element.find(".fileinput-filename").text(i.name),this.$preview.text(i.name),this.$element.addClass("fileinput-exists").removeClass("fileinput-new"),this.$element.trigger("change.bs.fileinput")},n.prototype.clear=function(t){if(t&&t.preventDefault(),this.$hidden.val(""),this.$hidden.attr("name",this.name),this.$input.attr("name",""),e){var n=this.$input.clone(!0);this.$input.after(n),this.$input.remove(),this.$input=n}else this.$input.val("");this.$preview.html(""),this.$element.find(".fileinput-filename").text(""),this.$element.addClass("fileinput-new").removeClass("fileinput-exists"),void 0!==t&&(this.$input.trigger("change"),this.$element.trigger("clear.bs.fileinput"))},n.prototype.reset=function(){this.clear(),this.$hidden.val(this.original.hiddenVal),this.$preview.html(this.original.preview),this.$element.find(".fileinput-filename").text(""),this.original.exists?this.$element.addClass("fileinput-exists").removeClass("fileinput-new"):this.$element.addClass("fileinput-new").removeClass("fileinput-exists"),this.$element.trigger("reset.bs.fileinput")},n.prototype.trigger=function(t){this.$input.trigger("click"),t.preventDefault()};var i=t.fn.fileinput;t.fn.fileinput=function(e){return this.each(function(){var i=t(this),o=i.data("bs.fileinput");o||i.data("bs.fileinput",o=new n(this,e)),"string"==typeof e&&o[e]()})},t.fn.fileinput.Constructor=n,t.fn.fileinput.noConflict=function(){return t.fn.fileinput=i,this},t(document).on("click.fileinput.data-api",'[data-provides="fileinput"]',function(e){var n=t(this);if(!n.data("bs.fileinput")){n.fileinput(n.data());var i=t(e.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');i.length>0&&(e.preventDefault(),i.trigger("click.bs.fileinput"))}})}(window.jQuery),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):t.bootbox=e(t.jQuery)}(this,function t(e,n){"use strict";function i(t){var e=m[f.locale];return e?e[t]:m.en[t]}function o(t,n,i){t.stopPropagation(),t.preventDefault();var o=e.isFunction(i)&&i(t)===!1;o||n.modal("hide")}function s(t){var e,n=0;for(e in t)n++;return n}function r(t,n){var i=0;e.each(t,function(t,e){n(t,e,i++)})}function a(t){var n,i;if("object"!=typeof t)throw new Error("Please supply an object of options");if(!t.message)throw new Error("Please specify a message");return t=e.extend({},f,t),t.buttons||(t.buttons={}),t.backdrop=t.backdrop?"static":!1,n=t.buttons,i=s(n),r(n,function(t,o,s){if(e.isFunction(o)&&(o=n[t]={callback:o}),"object"!==e.type(o))throw new Error("button with key "+t+" must be an object");o.label||(o.label=t),o.className||(o.className=2>=i&&s===i-1?"btn-primary":"btn-default")}),t}function l(t,e){var n=t.length,i={};if(1>n||n>2)throw new Error("Invalid argument length");return 2===n||"string"==typeof t[0]?(i[e[0]]=t[0],i[e[1]]=t[1]):i=t[0],i}function c(t,n,i){return e.extend(!0,{},t,l(n,i))}function u(t,e,n,i){var o={className:"bootbox-"+t,buttons:h.apply(null,e)};return p(c(o,i,n),e)}function h(){for(var t={},e=0,n=arguments.length;n>e;e++){var o=arguments[e],s=o.toLowerCase(),r=o.toUpperCase();t[s]={label:i(r)}}return t}function p(t,e){var i={};return r(e,function(t,e){i[e]=!0}),r(t.buttons,function(t){if(i[t]===n)throw new Error("button key "+t+" is not allowed (options are "+e.join("\n")+")")}),t}var d={dialog:"<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",header:"<div class='modal-header'><h4 class='modal-title'></h4></div>",footer:"<div class='modal-footer'></div>",closeButton:"<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",form:"<form class='bootbox-form'></form>",inputs:{text:"<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",textarea:"<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",email:"<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",select:"<select class='bootbox-input bootbox-input-select form-control'></select>",checkbox:"<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",date:"<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",time:"<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",number:"<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",password:"<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"}},f={locale:"en",backdrop:!0,animate:!0,className:null,closeButton:!0,show:!0,container:"body"},g={};g.alert=function(){var t;if(t=u("alert",["ok"],["message","callback"],arguments),t.callback&&!e.isFunction(t.callback))throw new Error("alert requires callback property to be a function when provided");return t.buttons.ok.callback=t.onEscape=function(){return e.isFunction(t.callback)?t.callback():!0},g.dialog(t)},g.confirm=function(){var t;if(t=u("confirm",["cancel","confirm"],["message","callback"],arguments),t.buttons.cancel.callback=t.onEscape=function(){return t.callback(!1)},t.buttons.confirm.callback=function(){return t.callback(!0)},!e.isFunction(t.callback))throw new Error("confirm requires a callback");return g.dialog(t)},g.prompt=function(){var t,i,o,s,a,l,u;if(s=e(d.form),i={className:"bootbox-prompt",buttons:h("cancel","confirm"),value:"",inputType:"text"},t=p(c(i,arguments,["title","callback"]),["cancel","confirm"]),l=t.show===n?!0:t.show,t.message=s,t.buttons.cancel.callback=t.onEscape=function(){return t.callback(null)},t.buttons.confirm.callback=function(){var n;switch(t.inputType){case"text":case"textarea":case"email":case"select":case"date":case"time":case"number":case"password":n=a.val();break;case"checkbox":var i=a.find("input:checked");n=[],r(i,function(t,i){n.push(e(i).val())})}return t.callback(n)},t.show=!1,!t.title)throw new Error("prompt requires a title");if(!e.isFunction(t.callback))throw new Error("prompt requires a callback");if(!d.inputs[t.inputType])throw new Error("invalid prompt type");switch(a=e(d.inputs[t.inputType]),t.inputType){case"text":case"textarea":case"email":case"date":case"time":case"number":case"password":a.val(t.value);break;case"select":var f={};if(u=t.inputOptions||[],!u.length)throw new Error("prompt with select requires options");r(u,function(t,i){var o=a;if(i.value===n||i.text===n)throw new Error("given options in wrong format");i.group&&(f[i.group]||(f[i.group]=e("<optgroup/>").attr("label",i.group)),o=f[i.group]),o.append("<option value='"+i.value+"'>"+i.text+"</option>")}),r(f,function(t,e){a.append(e)}),a.val(t.value);break;case"checkbox":var m=e.isArray(t.value)?t.value:[t.value];if(u=t.inputOptions||[],!u.length)throw new Error("prompt with checkbox requires options");if(!u[0].value||!u[0].text)throw new Error("given options in wrong format");a=e("<div/>"),r(u,function(n,i){var o=e(d.inputs[t.inputType]);o.find("input").attr("value",i.value),o.find("label").append(i.text),r(m,function(t,e){e===i.value&&o.find("input").prop("checked",!0)}),a.append(o)})}return t.placeholder&&a.attr("placeholder",t.placeholder),t.pattern&&a.attr("pattern",t.pattern),s.append(a),s.on("submit",function(t){t.preventDefault(),t.stopPropagation(),o.find(".btn-primary").click()}),o=g.dialog(t),o.off("shown.bs.modal"),o.on("shown.bs.modal",function(){a.focus()}),l===!0&&o.modal("show"),o},g.dialog=function(t){t=a(t);var n=e(d.dialog),i=n.find(".modal-dialog"),s=n.find(".modal-body"),l=t.buttons,c="",u={onEscape:t.onEscape};if(r(l,function(t,e){c+="<button data-bb-handler='"+t+"' type='button' class='btn "+e.className+"'>"+e.label+"</button>",u[t]=e.callback}),s.find(".bootbox-body").html(t.message),t.animate===!0&&n.addClass("fade"),t.className&&n.addClass(t.className),"large"===t.size&&i.addClass("modal-lg"),"small"===t.size&&i.addClass("modal-sm"),t.title&&s.before(d.header),t.closeButton){var h=e(d.closeButton);t.title?n.find(".modal-header").prepend(h):h.css("margin-top","-10px").prependTo(s)}return t.title&&n.find(".modal-title").html(t.title),c.length&&(s.after(d.footer),n.find(".modal-footer").html(c)),n.on("hidden.bs.modal",function(t){t.target===this&&n.remove()}),n.on("shown.bs.modal",function(){n.find(".btn-primary:first").focus()}),n.on("escape.close.bb",function(t){u.onEscape&&o(t,n,u.onEscape)}),n.on("click",".modal-footer button",function(t){var i=e(this).data("bb-handler");o(t,n,u[i])}),n.on("click",".bootbox-close-button",function(t){o(t,n,u.onEscape)}),n.on("keyup",function(t){27===t.which&&n.trigger("escape.close.bb")}),e(t.container).append(n),n.modal({backdrop:t.backdrop,keyboard:!1,show:!1}),t.show&&n.modal("show"),n},g.setDefaults=function(){var t={};2===arguments.length?t[arguments[0]]=arguments[1]:t=arguments[0],e.extend(f,t)},g.hideAll=function(){return e(".bootbox").modal("hide"),g};var m={br:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Sim"},cs:{OK:"OK",CANCEL:"Zrušit",CONFIRM:"Potvrdit"},da:{OK:"OK",CANCEL:"Annuller",CONFIRM:"Accepter"},de:{OK:"OK",CANCEL:"Abbrechen",CONFIRM:"Akzeptieren"},el:{OK:"Εντάξει",CANCEL:"Ακύρωση",CONFIRM:"Επιβεβαίωση"},en:{OK:"OK",CANCEL:"Cancel",CONFIRM:"OK"},es:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Aceptar"},et:{OK:"OK",CANCEL:"Katkesta",CONFIRM:"OK"},fi:{OK:"OK",CANCEL:"Peruuta",CONFIRM:"OK"},fr:{OK:"OK",CANCEL:"Annuler",CONFIRM:"D'accord"},he:{OK:"אישור",CANCEL:"ביטול",CONFIRM:"אישור"},id:{OK:"OK",CANCEL:"Batal",CONFIRM:"OK"},it:{OK:"OK",CANCEL:"Annulla",CONFIRM:"Conferma"},ja:{OK:"OK",CANCEL:"キャンセル",CONFIRM:"確認"},lt:{OK:"Gerai",CANCEL:"Atšaukti",CONFIRM:"Patvirtinti"},lv:{OK:"Labi",CANCEL:"Atcelt",CONFIRM:"Apstiprināt"},nl:{OK:"OK",CANCEL:"Annuleren",CONFIRM:"Accepteren"},no:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},pl:{OK:"OK",CANCEL:"Anuluj",CONFIRM:"Potwierdź"},pt:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Confirmar"},ru:{OK:"OK",CANCEL:"Отмена",CONFIRM:"Применить"},sv:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},tr:{OK:"Tamam",CANCEL:"İptal",CONFIRM:"Onayla"},zh_CN:{OK:"OK",CANCEL:"取消",CONFIRM:"确认"},zh_TW:{OK:"OK",CANCEL:"取消",CONFIRM:"確認"}};return g.init=function(n){return t(n||e)},g}),!function(t){"use strict";function e(t){return ko.isObservable(t)&&!(void 0===t.destroyAll)}function n(t,e){for(var n=0;n<t.length;++n)e(t[n])}function i(e,n){this.$select=t(e),this.options=this.mergeOptions(t.extend({},n,this.$select.data())),this.originalOptions=this.$select.clone()[0].options,this.query="",this.searchTimeout=null,this.options.multiple="multiple"===this.$select.attr("multiple"),this.options.onChange=t.proxy(this.options.onChange,this),this.options.onDropdownShow=t.proxy(this.options.onDropdownShow,this),this.options.onDropdownHide=t.proxy(this.options.onDropdownHide,this),this.options.onDropdownShown=t.proxy(this.options.onDropdownShown,this),this.options.onDropdownHidden=t.proxy(this.options.onDropdownHidden,this),this.buildContainer(),this.buildButton(),this.buildDropdown(),this.buildSelectAll(),this.buildDropdownOptions(),this.buildFilter(),this.updateButtonText(),this.updateSelectAll(),this.options.disableIfEmpty&&t("option",this.$select).length<=0&&this.disable(),this.$select.hide().after(this.$container)}"undefined"!=typeof ko&&ko.bindingHandlers&&!ko.bindingHandlers.multiselect&&(ko.bindingHandlers.multiselect={init:function(i,o,s){var r=s().selectedOptions,a=ko.utils.unwrapObservable(o());t(i).multiselect(a),e(r)&&(t(i).multiselect("select",ko.utils.unwrapObservable(r)),r.subscribe(function(e){var o=[],s=[];n(e,function(t){switch(t.status){case"added":o.push(t.value);break;case"deleted":s.push(t.value)}}),o.length>0&&t(i).multiselect("select",o),s.length>0&&t(i).multiselect("deselect",s)},null,"arrayChange"))},update:function(n,i,o){var s=o().options,r=t(n).data("multiselect"),a=ko.utils.unwrapObservable(i());e(s)&&s.subscribe(function(){t(n).multiselect("rebuild")}),r?r.updateOriginalOptions():t(n).multiselect(a)}}),i.prototype={defaults:{buttonText:function(e,n){if(0===e.length)return this.nonSelectedText+' <b class="caret"></b>';if(e.length==t("option",t(n)).length)return this.allSelectedText+' <b class="caret"></b>';if(e.length>this.numberDisplayed)return e.length+" "+this.nSelectedText+' <b class="caret"></b>';var i="";return e.each(function(){var e=void 0!==t(this).attr("label")?t(this).attr("label"):t(this).html();i+=e+", "}),i.substr(0,i.length-2)+' <b class="caret"></b>'},buttonTitle:function(e){if(0===e.length)return this.nonSelectedText;var n="";return e.each(function(){n+=t(this).text()+", "}),n.substr(0,n.length-2)},label:function(e){return t(e).attr("label")||t(e).html()},onChange:function(){},onDropdownShow:function(){},onDropdownHide:function(){},onDropdownShown:function(){},onDropdownHidden:function(){},buttonClass:"btn btn-default",buttonWidth:"auto",buttonContainer:'<div class="btn-group" />',dropRight:!1,selectedClass:"active",maxHeight:!1,checkboxName:!1,includeSelectAllOption:!1,includeSelectAllIfMoreThan:0,selectAllText:" Select all",selectAllValue:"multiselect-all",selectAllName:!1,enableFiltering:!1,enableCaseInsensitiveFiltering:!1,enableClickableOptGroups:!1,filterPlaceholder:"Search",filterBehavior:"text",includeFilterClearBtn:!0,preventInputChangeEvent:!1,nonSelectedText:"None selected",nSelectedText:"selected",allSelectedText:"All selected",numberDisplayed:3,disableIfEmpty:!1,templates:{button:'<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"></button>',ul:'<ul class="multiselect-container dropdown-menu"></ul>',filter:'<li class="multiselect-item filter"><div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span><input class="form-control multiselect-search" type="text"></div></li>',filterClearBtn:'<span class="input-group-btn"><button class="btn btn-default multiselect-clear-filter" type="button"><i class="glyphicon glyphicon-remove-circle"></i></button></span>',li:'<li><a href="javascript:void(0);"><label></label></a></li>',divider:'<li class="multiselect-item divider"></li>',liGroup:'<li class="multiselect-item multiselect-group"><label></label></li>'}},constructor:i,buildContainer:function(){this.$container=t(this.options.buttonContainer),this.$container.on("show.bs.dropdown",this.options.onDropdownShow),this.$container.on("hide.bs.dropdown",this.options.onDropdownHide),this.$container.on("shown.bs.dropdown",this.options.onDropdownShown),this.$container.on("hidden.bs.dropdown",this.options.onDropdownHidden)},buildButton:function(){this.$button=t(this.options.templates.button).addClass(this.options.buttonClass),this.$select.prop("disabled")?this.disable():this.enable(),this.options.buttonWidth&&"auto"!==this.options.buttonWidth&&(this.$button.css({width:this.options.buttonWidth}),this.$container.css({width:this.options.buttonWidth}));
var e=this.$select.attr("tabindex");e&&this.$button.attr("tabindex",e),this.$container.prepend(this.$button)},buildDropdown:function(){this.$ul=t(this.options.templates.ul),this.options.dropRight&&this.$ul.addClass("pull-right"),this.options.maxHeight&&this.$ul.css({"max-height":this.options.maxHeight+"px","overflow-y":"auto","overflow-x":"hidden"}),this.$container.append(this.$ul)},buildDropdownOptions:function(){this.$select.children().each(t.proxy(function(e,n){var i=t(n),o=i.prop("tagName").toLowerCase();i.prop("value")!==this.options.selectAllValue&&("optgroup"===o?this.createOptgroup(n):"option"===o&&("divider"===i.data("role")?this.createDivider():this.createOptionValue(n)))},this)),t("li input",this.$ul).on("change",t.proxy(function(e){var n=t(e.target),i=n.prop("checked")||!1,o=n.val()===this.options.selectAllValue;this.options.selectedClass&&(i?n.closest("li").addClass(this.options.selectedClass):n.closest("li").removeClass(this.options.selectedClass));var s=n.val(),r=this.getOptionByValue(s),a=t("option",this.$select).not(r),l=t("input",this.$container).not(n);return o&&(i?this.selectAll():this.deselectAll()),o||(i?(r.prop("selected",!0),this.options.multiple?r.prop("selected",!0):(this.options.selectedClass&&t(l).closest("li").removeClass(this.options.selectedClass),t(l).prop("checked",!1),a.prop("selected",!1),this.$button.click()),"active"===this.options.selectedClass&&a.closest("a").css("outline","")):r.prop("selected",!1)),this.$select.change(),this.updateButtonText(),this.updateSelectAll(),this.options.onChange(r,i),this.options.preventInputChangeEvent?!1:void 0},this)),t("li a",this.$ul).on("touchstart click",function(e){e.stopPropagation();var n=t(e.target);if("Range"===document.getSelection().type){var i=t(this).find("input:first");i.prop("checked",!i.prop("checked")).trigger("change")}if(e.shiftKey){var o=n.prop("checked")||!1;if(o){var s=n.closest("li").siblings('li[class="active"]:first'),r=n.closest("li").index(),a=s.index();r>a?n.closest("li").prevUntil(s).each(function(){t(this).find("input:first").prop("checked",!0).trigger("change")}):n.closest("li").nextUntil(s).each(function(){t(this).find("input:first").prop("checked",!0).trigger("change")})}}n.blur()}),this.$container.off("keydown.multiselect").on("keydown.multiselect",t.proxy(function(e){if(!t('input[type="text"]',this.$container).is(":focus"))if(9===e.keyCode&&this.$container.hasClass("open"))this.$button.click();else{var n=t(this.$container).find("li:not(.divider):not(.disabled) a").filter(":visible");if(!n.length)return;var i=n.index(n.filter(":focus"));38===e.keyCode&&i>0?i--:40===e.keyCode&&i<n.length-1?i++:~i||(i=0);var o=n.eq(i);if(o.focus(),32===e.keyCode||13===e.keyCode){var s=o.find("input");s.prop("checked",!s.prop("checked")),s.change()}e.stopPropagation(),e.preventDefault()}},this)),this.options.enableClickableOptGroups&&this.options.multiple&&t("li.multiselect-group",this.$ul).on("click",t.proxy(function(e){e.stopPropagation();var n=t(e.target).parent(),i=n.nextUntil("li.multiselect-group"),o=!0,s=i.find("input");s.each(function(){o=o&&t(this).prop("checked")}),s.prop("checked",!o).trigger("change")},this))},createOptionValue:function(e){var n=t(e);n.is(":selected")&&n.prop("selected",!0);var i=this.options.label(e),o=n.val(),s=this.options.multiple?"checkbox":"radio",r=t(this.options.templates.li),a=t("label",r);a.addClass(s);var l=t("<input/>").attr("type",s);this.options.checkboxName&&l.attr("name",this.options.checkboxName),a.append(l);var c=n.prop("selected")||!1;l.val(o),o===this.options.selectAllValue&&(r.addClass("multiselect-item multiselect-all"),l.parent().parent().addClass("multiselect-all")),a.append(" "+i),a.attr("title",n.attr("title")),this.$ul.append(r),n.is(":disabled")&&l.attr("disabled","disabled").prop("disabled",!0).closest("a").attr("tabindex","-1").closest("li").addClass("disabled"),l.prop("checked",c),c&&this.options.selectedClass&&l.closest("li").addClass(this.options.selectedClass)},createDivider:function(){var e=t(this.options.templates.divider);this.$ul.append(e)},createOptgroup:function(e){var n=t(e).prop("label"),i=t(this.options.templates.liGroup);t("label",i).text(n),this.options.enableClickableOptGroups&&i.addClass("multiselect-group-clickable"),this.$ul.append(i),t(e).is(":disabled")&&i.addClass("disabled"),t("option",e).each(t.proxy(function(t,e){this.createOptionValue(e)},this))},buildSelectAll:function(){"number"==typeof this.options.selectAllValue&&(this.options.selectAllValue=this.options.selectAllValue.toString());var e=this.hasSelectAll();if(!e&&this.options.includeSelectAllOption&&this.options.multiple&&t("option",this.$select).length>this.options.includeSelectAllIfMoreThan){this.options.includeSelectAllDivider&&this.$ul.prepend(t(this.options.templates.divider));var n=t(this.options.templates.li);t("label",n).addClass("checkbox"),t("label",n).append(this.options.selectAllName?'<input type="checkbox" name="'+this.options.selectAllName+'" />':'<input type="checkbox" />');var i=t("input",n);i.val(this.options.selectAllValue),n.addClass("multiselect-item multiselect-all"),i.parent().parent().addClass("multiselect-all"),t("label",n).append(" "+this.options.selectAllText),this.$ul.prepend(n),i.prop("checked",!1)}},buildFilter:function(){if(this.options.enableFiltering||this.options.enableCaseInsensitiveFiltering){var e=Math.max(this.options.enableFiltering,this.options.enableCaseInsensitiveFiltering);if(this.$select.find("option").length>=e){if(this.$filter=t(this.options.templates.filter),t("input",this.$filter).attr("placeholder",this.options.filterPlaceholder),this.options.includeFilterClearBtn){var n=t(this.options.templates.filterClearBtn);n.on("click",t.proxy(function(){clearTimeout(this.searchTimeout),this.$filter.find(".multiselect-search").val(""),t("li",this.$ul).show().removeClass("filter-hidden"),this.updateSelectAll()},this)),this.$filter.find(".input-group").append(n)}this.$ul.prepend(this.$filter),this.$filter.val(this.query).on("click",function(t){t.stopPropagation()}).on("input keydown",t.proxy(function(e){13===e.which&&e.preventDefault(),clearTimeout(this.searchTimeout),this.searchTimeout=this.asyncFunction(t.proxy(function(){if(this.query!==e.target.value){this.query=e.target.value;var n,i;t.each(t("li",this.$ul),t.proxy(function(e,o){var s=t("input",o).val(),r=t("label",o).text(),a="";if("text"===this.options.filterBehavior?a=r:"value"===this.options.filterBehavior?a=s:"both"===this.options.filterBehavior&&(a=r+"\n"+s),s!==this.options.selectAllValue&&r){var l=!1;this.options.enableCaseInsensitiveFiltering&&a.toLowerCase().indexOf(this.query.toLowerCase())>-1?l=!0:a.indexOf(this.query)>-1&&(l=!0),t(o).toggle(l).toggleClass("filter-hidden",!l),t(o).hasClass("multiselect-group")?(n=o,i=l):(l&&t(n).show().removeClass("filter-hidden"),!l&&i&&t(o).show().removeClass("filter-hidden"))}},this))}this.updateSelectAll()},this),300,this)},this))}}},destroy:function(){this.$container.remove(),this.$select.show(),this.$select.data("multiselect",null)},refresh:function(){t("option",this.$select).each(t.proxy(function(e,n){var i=t("li input",this.$ul).filter(function(){return t(this).val()===t(n).val()});t(n).is(":selected")?(i.prop("checked",!0),this.options.selectedClass&&i.closest("li").addClass(this.options.selectedClass)):(i.prop("checked",!1),this.options.selectedClass&&i.closest("li").removeClass(this.options.selectedClass)),t(n).is(":disabled")?i.attr("disabled","disabled").prop("disabled",!0).closest("li").addClass("disabled"):i.prop("disabled",!1).closest("li").removeClass("disabled")},this)),this.updateButtonText(),this.updateSelectAll()},select:function(e,n){t.isArray(e)||(e=[e]);for(var i=0;i<e.length;i++){var o=e[i];if(null!==o&&void 0!==o){var s=this.getOptionByValue(o),r=this.getInputByValue(o);void 0!==s&&void 0!==r&&(this.options.multiple||this.deselectAll(!1),this.options.selectedClass&&r.closest("li").addClass(this.options.selectedClass),r.prop("checked",!0),s.prop("selected",!0))}}this.updateButtonText(),this.updateSelectAll(),n&&1===e.length&&this.options.onChange(s,!0)},clearSelection:function(){this.deselectAll(!1),this.updateButtonText(),this.updateSelectAll()},deselect:function(e,n){t.isArray(e)||(e=[e]);for(var i=0;i<e.length;i++){var o=e[i];if(null!==o&&void 0!==o){var s=this.getOptionByValue(o),r=this.getInputByValue(o);void 0!==s&&void 0!==r&&(this.options.selectedClass&&r.closest("li").removeClass(this.options.selectedClass),r.prop("checked",!1),s.prop("selected",!1))}}this.updateButtonText(),this.updateSelectAll(),n&&1===e.length&&this.options.onChange(s,!1)},selectAll:function(e){var e="undefined"==typeof e?!0:e,n=t("li input[type='checkbox']:enabled",this.$ul),i=n.filter(":visible"),o=n.length,s=i.length;if(e?(i.prop("checked",!0),t("li:not(.divider):not(.disabled)",this.$ul).filter(":visible").addClass(this.options.selectedClass)):(n.prop("checked",!0),t("li:not(.divider):not(.disabled)",this.$ul).addClass(this.options.selectedClass)),o===s||e===!1)t("option:enabled",this.$select).prop("selected",!0);else{var r=i.map(function(){return t(this).val()}).get();t("option:enabled",this.$select).filter(function(){return-1!==t.inArray(t(this).val(),r)}).prop("selected",!0)}},deselectAll:function(e){var e="undefined"==typeof e?!0:e;if(e){var n=t("li input[type='checkbox']:enabled",this.$ul).filter(":visible");n.prop("checked",!1);var i=n.map(function(){return t(this).val()}).get();t("option:enabled",this.$select).filter(function(){return-1!==t.inArray(t(this).val(),i)}).prop("selected",!1),this.options.selectedClass&&t("li:not(.divider):not(.disabled)",this.$ul).filter(":visible").removeClass(this.options.selectedClass)}else t("li input[type='checkbox']:enabled",this.$ul).prop("checked",!1),t("option:enabled",this.$select).prop("selected",!1),this.options.selectedClass&&t("li:not(.divider):not(.disabled)",this.$ul).removeClass(this.options.selectedClass)},rebuild:function(){this.$ul.html(""),this.options.multiple="multiple"===this.$select.attr("multiple"),this.buildSelectAll(),this.buildDropdownOptions(),this.buildFilter(),this.updateButtonText(),this.updateSelectAll(),this.options.disableIfEmpty&&t("option",this.$select).length<=0&&this.disable(),this.options.dropRight&&this.$ul.addClass("pull-right")},dataprovider:function(e){var i="",o=0,s=t("");t.each(e,function(e,r){var a;t.isArray(r.children)?(o++,a=t("<optgroup/>").attr({label:r.label||"Group "+o}),n(r.children,function(e){a.append(t("<option/>").attr({value:e.value,label:e.label||e.value,title:e.title,selected:!!e.selected}))}),i+="</optgroup>"):a=t("<option/>").attr({value:r.value,label:r.label||r.value,title:r.title,selected:!!r.selected}),s=s.add(a)}),this.$select.empty().append(s),this.rebuild()},enable:function(){this.$select.prop("disabled",!1),this.$button.prop("disabled",!1).removeClass("disabled")},disable:function(){this.$select.prop("disabled",!0),this.$button.prop("disabled",!0).addClass("disabled")},setOptions:function(t){this.options=this.mergeOptions(t)},mergeOptions:function(e){return t.extend(!0,{},this.defaults,e)},hasSelectAll:function(){return t("li."+this.options.selectAllValue,this.$ul).length>0},updateSelectAll:function(){if(this.hasSelectAll()){var e=t("li:not(.multiselect-item):not(.filter-hidden) input:enabled",this.$ul),n=e.length,i=e.filter(":checked").length,o=t("li."+this.options.selectAllValue,this.$ul),s=o.find("input");i>0&&i===n?(s.prop("checked",!0),o.addClass(this.options.selectedClass)):(s.prop("checked",!1),o.removeClass(this.options.selectedClass))}},updateButtonText:function(){var e=this.getSelected();t(".multiselect",this.$container).html(this.options.buttonText(e,this.$select)),t(".multiselect",this.$container).attr("title",this.options.buttonTitle(e,this.$select))},getSelected:function(){return t("option",this.$select).filter(":selected")},getOptionByValue:function(e){for(var n=t("option",this.$select),i=e.toString(),o=0;o<n.length;o+=1){var s=n[o];if(s.value===i)return t(s)}},getInputByValue:function(e){for(var n=t("li input",this.$ul),i=e.toString(),o=0;o<n.length;o+=1){var s=n[o];if(s.value===i)return t(s)}},updateOriginalOptions:function(){this.originalOptions=this.$select.clone()[0].options},asyncFunction:function(t,e,n){var i=Array.prototype.slice.call(arguments,3);return setTimeout(function(){t.apply(n||window,i)},e)}},t.fn.multiselect=function(e,n,o){return this.each(function(){var s=t(this).data("multiselect"),r="object"==typeof e&&e;s||(s=new i(this,r),t(this).data("multiselect",s)),"string"==typeof e&&(s[e](n,o),"destroy"===e&&t(this).data("multiselect",!1))})},t.fn.multiselect.Constructor=i,t(function(){t("select[data-role=multiselect]").multiselect()})}(window.jQuery);
(function() {

    var laravel = {
        initialize: function() {
            this.methodLinks = $('a[data-method]');

            this.registerEvents();
        },

        registerEvents: function() {
            this.methodLinks.on('click', this.handleMethod);
        },

        handleMethod: function(e) {
            var link = $(this);
            var httpMethod = link.data('method').toUpperCase();
            var form;
            var csrfToken = $('meta[name="csrf-token"]').attr('content');

            // If the data-method attribute is not PUT or DELETE,
            // then we don't know what to do. Just ignore.
            if ( $.inArray(httpMethod, ['PUT', 'DELETE']) === - 1 ) {
                return;
            }

            // Allow user to optionally provide data-confirm="Are you sure?"
            if ( link.data('confirm') ) {
                if ( ! laravel.verifyConfirm(link) ) {
                    return false;
                }
            }

            form = laravel.createForm(link);
            form.submit();

            e.preventDefault();
        },

        verifyConfirm: function(link) {
            return confirm(link.data('confirm'));
        },

        createForm: function(link) {
            alert('hello');
            var form =
                $('<form>', {
                    'method': 'POST',
                    'action': link.attr('href')
                });

            var token =
                $('<input>', {
                    'type': 'hidden',
                    'name': 'csrf_token',
                    'value': csrfToken // hmmmm...
                });

            var hiddenInput =
                $('<input>', {
                    'name': '_method',
                    'type': 'hidden',
                    'value': link.data('method')
                });

            return form.append(token, hiddenInput)
                .appendTo('body');
        }
    };

    laravel.initialize();

})();
/*
 * jQuery FlexSlider v2.2.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;
(function ($) {

  //FlexSlider: Object Instance
  $.flexslider = function(el, options, instanceId) {
    var slider = $(el);

    // making variables public
    slider.vars = $.extend({}, $.flexslider.defaults, options);

    var namespace = slider.vars.namespace,
        msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
        touch = (( "ontouchstart" in window ) || msGesture || window.DocumentTouch && document instanceof DocumentTouch) && slider.vars.touch,
        // depricating this idea, as devices are being released with both of these events
        //eventType = (touch) ? "touchend" : "click",
        eventType = "click touchend MSPointerUp",
        watchedEvent = "",
        watchedEventClearTimer,
        vertical = slider.vars.direction === "vertical",
        reverse = slider.vars.reverse,
        carousel = (slider.vars.itemWidth > 0),
        fade = slider.vars.animation === "fade",
        asNav = slider.vars.asNavFor !== "",
        methods = {},
        focused = true;

    var instanceId = ( typeof instanceId !== 'undefined' ) ? instanceId++ : 0

    // Store a reference to the slider object
    $.data(el, "flexslider", slider);

    // Private slider methods
    methods = {
      init: function() {
        slider.id = instanceId;
        slider.animating = false;
        // Get current slide and make sure it is a number
        slider.currentSlide = parseInt( ( slider.vars.startAt ? slider.vars.startAt : 0) );
        if ( isNaN( slider.currentSlide ) ) slider.currentSlide = 0;
        slider.animatingTo = slider.currentSlide;
        slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);
        slider.containerSelector = slider.vars.selector.substr(0,slider.vars.selector.search(' '));
        slider.slides = $(slider.vars.selector, slider);
        slider.container = $(slider.containerSelector, slider);
        slider.count = slider.slides.length;
        // SYNC:
        slider.syncExists = $(slider.vars.sync).length > 0;
        // SLIDE:
        if (slider.vars.animation === "slide") slider.vars.animation = "swing";
        slider.prop = (vertical) ? "top" : "marginLeft";
        slider.args = {};
        // SLIDESHOW:
        slider.manualPause = false;
        slider.stopped = false;
        //PAUSE WHEN INVISIBLE
        slider.started = false;
        slider.startTimeout = null;
        // TOUCH/USECSS:
        slider.transitions = !slider.vars.video && !fade && slider.vars.useCSS && (function() {
          var obj = document.createElement('div'),
              props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
          for (var i in props) {
            if ( obj.style[ props[i] ] !== undefined ) {
              slider.pfx = props[i].replace('Perspective','').toLowerCase();
              slider.prop = "-" + slider.pfx + "-transform";
              return true;
            }
          }
          return false;
        }());
        // CONTROLSCONTAINER:
        if (slider.vars.controlsContainer !== "") slider.controlsContainer = $(slider.vars.controlsContainer).length > 0 && $(slider.vars.controlsContainer);
        // MANUAL:
        if (slider.vars.manualControls !== "") slider.manualControls = $(slider.vars.manualControls).length > 0 && $(slider.vars.manualControls);

        // RANDOMIZE:
        if (slider.vars.randomize) {
          slider.slides.sort(function() { return (Math.round(Math.random())-0.5); });
          slider.container.empty().append(slider.slides);
        }

        slider.doMath();

        // INIT
        slider.setup("init");

        // CONTROLNAV:
        if (slider.vars.controlNav) methods.controlNav.setup();

        // DIRECTIONNAV:
        if (slider.vars.directionNav) methods.directionNav.setup();

        // KEYBOARD:
        if (slider.vars.keyboard && ($(slider.containerSelector).length === 1 || slider.vars.multipleKeyboard)) {
          $(document).bind('keyup' + slider.vars.eventNamespace + "-" + slider.id, function(event) {
            var keycode = event.keyCode;
            if (!slider.animating && (keycode === 39 || keycode === 37)) {
              var target = (keycode === 39) ? slider.getTarget('next') :
                           (keycode === 37) ? slider.getTarget('prev') : false;
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }
          });
        }
        // MOUSEWHEEL:
        if (slider.vars.mousewheel) {
          slider.bind('mousewheel' + slider.vars.eventNamespace, function(event, delta, deltaX, deltaY) {
            event.preventDefault();
            var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');
            slider.flexAnimate(target, slider.vars.pauseOnAction);
          });
        }

        // PAUSEPLAY
        if (slider.vars.pausePlay) methods.pausePlay.setup();

        //PAUSE WHEN INVISIBLE
        if (slider.vars.slideshow && slider.vars.pauseInvisible) methods.pauseInvisible.init();

        // SLIDSESHOW
        if (slider.vars.slideshow) {
          if (slider.vars.pauseOnHover) {
            slider.hover(function() {
              if (!slider.manualPlay && !slider.manualPause) slider.pause();
            }, function() {
              if (!slider.manualPause && !slider.manualPlay && !slider.stopped) slider.play();
            });
          }
          // initialize animation
          //If we're visible, or we don't use PageVisibility API
          if(!slider.vars.pauseInvisible || !methods.pauseInvisible.isHidden()) {
            (slider.vars.initDelay > 0) ? slider.startTimeout = setTimeout(slider.play, slider.vars.initDelay) : slider.play();
          }
        }

        // ASNAV:
        if (asNav) methods.asNav.setup();

        // TOUCH
        if (touch && slider.vars.touch) methods.touch();

        // FADE&&SMOOTHHEIGHT || SLIDE:
        if (!fade || (fade && slider.vars.smoothHeight)) $(window).bind("resize" + slider.vars.eventNamespace + "-" + slider.id + " orientationchange" + slider.vars.eventNamespace + "-" + slider.id + " focus" + slider.vars.eventNamespace + "-" + slider.id, methods.resize);

        slider.find("img").attr("draggable", "false");

        // API: start() Callback
        setTimeout(function(){
          slider.vars.start(slider);
        }, 200);
      },
      asNav: {
        setup: function() {
          slider.asNav = true;
          slider.animatingTo = Math.floor(slider.currentSlide/slider.move);
          slider.currentItem = slider.currentSlide;
          slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
          if(!msGesture){
              slider.slides.on("click" + slider.vars.eventNamespace, function(e){
                e.preventDefault();
                var $slide = $(this),
                    target = $slide.index();
                var posFromLeft = $slide.offset().left - $(slider).scrollLeft(); // Find position of slide relative to left of slider container
                if( posFromLeft <= 0 && $slide.hasClass( namespace + 'active-slide' ) ) {
                  slider.flexAnimate(slider.getTarget("prev"), true);
                } else if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass(namespace + "active-slide")) {
                  slider.direction = (slider.currentItem < target) ? "next" : "prev";
                  slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                }
              });
          }else{
              el._slider = slider;
              slider.slides.each(function (){
                  var that = this;
                  that._gesture = new MSGesture();
                  that._gesture.target = that;
                  that.addEventListener("MSPointerDown", function (e){
                      e.preventDefault();
                      if(e.currentTarget._gesture)
                          e.currentTarget._gesture.addPointer(e.pointerId);
                  }, false);
                  that.addEventListener("MSGestureTap", function (e){
                      e.preventDefault();
                      var $slide = $(this),
                          target = $slide.index();
                      if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {
                          slider.direction = (slider.currentItem < target) ? "next" : "prev";
                          slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                      }
                  });
              });
          }
        }
      },
      controlNav: {
        setup: function() {
          if (!slider.manualControls) {
            methods.controlNav.setupPaging();
          } else { // MANUALCONTROLS:
            methods.controlNav.setupManual();
          }
        },
        setupPaging: function() {
          var type = (slider.vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging',
              j = 1,
              item,
              slide;

          slider.controlNavScaffold = $('<ol class="'+ namespace + 'control-nav ' + namespace + type + '"></ol>');

          if (slider.pagingCount > 1) {
            for (var i = 0; i < slider.pagingCount; i++) {
              slide = slider.slides.eq(i);
              item = (slider.vars.controlNav === "thumbnails") ? '<img src="' + slide.attr( 'data-thumb' ) + '"/>' : '<a>' + j + '</a>';
              if ( 'thumbnails' === slider.vars.controlNav && true === slider.vars.thumbCaptions ) {
                var captn = slide.attr( 'data-thumbcaption' );
                if ( '' != captn && undefined != captn ) item += '<span class="' + namespace + 'caption">' + captn + '</span>';
              }
              slider.controlNavScaffold.append('<li>' + item + '</li>');
              j++;
            }
          }

          // CONTROLSCONTAINER:
          (slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
          methods.controlNav.set();

          methods.controlNav.active();

          slider.controlNavScaffold.delegate('a, img', eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                  target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + 'active')) {
                slider.direction = (target > slider.currentSlide) ? "next" : "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();

          });
        },
        setupManual: function() {
          slider.controlNav = slider.manualControls;
          methods.controlNav.active();

          slider.controlNav.bind(eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                  target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + 'active')) {
                (target > slider.currentSlide) ? slider.direction = "next" : slider.direction = "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        set: function() {
          var selector = (slider.vars.controlNav === "thumbnails") ? 'img' : 'a';
          slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider);
        },
        active: function() {
          slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
        },
        update: function(action, pos) {
          if (slider.pagingCount > 1 && action === "add") {
            slider.controlNavScaffold.append($('<li><a>' + slider.count + '</a></li>'));
          } else if (slider.pagingCount === 1) {
            slider.controlNavScaffold.find('li').remove();
          } else {
            slider.controlNav.eq(pos).closest('li').remove();
          }
          methods.controlNav.set();
          (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action) : methods.controlNav.active();
        }
      },
      directionNav: {
        setup: function() {
          var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li><a class="' + namespace + 'prev" href="#">' + slider.vars.prevText + '</a></li><li><a class="' + namespace + 'next" href="#">' + slider.vars.nextText + '</a></li></ul>');

          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            $(slider.controlsContainer).append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
          } else {
            slider.append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
          }

          methods.directionNav.update();

          slider.directionNav.bind(eventType, function(event) {
            event.preventDefault();
            var target;

            if (watchedEvent === "" || watchedEvent === event.type) {
              target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function() {
          var disabledClass = namespace + 'disabled';
          if (slider.pagingCount === 1) {
            slider.directionNav.addClass(disabledClass).attr('tabindex', '-1');
          } else if (!slider.vars.animationLoop) {
            if (slider.animatingTo === 0) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass).attr('tabindex', '-1');
            } else if (slider.animatingTo === slider.last) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass).attr('tabindex', '-1');
            } else {
              slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
            }
          } else {
            slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
          }
        }
      },
      pausePlay: {
        setup: function() {
          var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a></a></div>');

          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            slider.controlsContainer.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
          } else {
            slider.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
          }

          methods.pausePlay.update((slider.vars.slideshow) ? namespace + 'pause' : namespace + 'play');

          slider.pausePlay.bind(eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              if ($(this).hasClass(namespace + 'pause')) {
                slider.manualPause = true;
                slider.manualPlay = false;
                slider.pause();
              } else {
                slider.manualPause = false;
                slider.manualPlay = true;
                slider.play();
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function(state) {
          (state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').html(slider.vars.playText) : slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').html(slider.vars.pauseText);
        }
      },
      touch: function() {
        var startX,
          startY,
          offset,
          cwidth,
          dx,
          startT,
          scrolling = false,
          localX = 0,
          localY = 0,
          accDx = 0;

        if(!msGesture){
            el.addEventListener('touchstart', onTouchStart, false);

            function onTouchStart(e) {
              if (slider.animating) {
                e.preventDefault();
              } else if ( ( window.navigator.msPointerEnabled ) || e.touches.length === 1 ) {
                slider.pause();
                // CAROUSEL:
                cwidth = (vertical) ? slider.h : slider. w;
                startT = Number(new Date());
                // CAROUSEL:

                // Local vars for X and Y points.
                localX = e.touches[0].pageX;
                localY = e.touches[0].pageY;

                offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                         (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                         (carousel && slider.currentSlide === slider.last) ? slider.limit :
                         (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                         (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                startX = (vertical) ? localY : localX;
                startY = (vertical) ? localX : localY;

                el.addEventListener('touchmove', onTouchMove, false);
                el.addEventListener('touchend', onTouchEnd, false);
              }
            }

            function onTouchMove(e) {
              // Local vars for X and Y points.

              localX = e.touches[0].pageX;
              localY = e.touches[0].pageY;

              dx = (vertical) ? startX - localY : startX - localX;
              scrolling = (vertical) ? (Math.abs(dx) < Math.abs(localX - startY)) : (Math.abs(dx) < Math.abs(localY - startY));

              var fxms = 500;

              if ( ! scrolling || Number( new Date() ) - startT > fxms ) {
                e.preventDefault();
                if (!fade && slider.transitions) {
                  if (!slider.vars.animationLoop) {
                    dx = dx/((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx)/cwidth+2) : 1);
                  }
                  slider.setProps(offset + dx, "setTouch");
                }
              }
            }

            function onTouchEnd(e) {
              // finish the touch by undoing the touch session
              el.removeEventListener('touchmove', onTouchMove, false);

              if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                var updateDx = (reverse) ? -dx : dx,
                    target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
                  slider.flexAnimate(target, slider.vars.pauseOnAction);
                } else {
                  if (!fade) slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);
                }
              }
              el.removeEventListener('touchend', onTouchEnd, false);

              startX = null;
              startY = null;
              dx = null;
              offset = null;
            }
        }else{
            el.style.msTouchAction = "none";
            el._gesture = new MSGesture();
            el._gesture.target = el;
            el.addEventListener("MSPointerDown", onMSPointerDown, false);
            el._slider = slider;
            el.addEventListener("MSGestureChange", onMSGestureChange, false);
            el.addEventListener("MSGestureEnd", onMSGestureEnd, false);

            function onMSPointerDown(e){
                e.stopPropagation();
                if (slider.animating) {
                    e.preventDefault();
                }else{
                    slider.pause();
                    el._gesture.addPointer(e.pointerId);
                    accDx = 0;
                    cwidth = (vertical) ? slider.h : slider. w;
                    startT = Number(new Date());
                    // CAROUSEL:

                    offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                        (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                            (carousel && slider.currentSlide === slider.last) ? slider.limit :
                                (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                                    (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                }
            }

            function onMSGestureChange(e) {
                e.stopPropagation();
                var slider = e.target._slider;
                if(!slider){
                    return;
                }
                var transX = -e.translationX,
                    transY = -e.translationY;

                //Accumulate translations.
                accDx = accDx + ((vertical) ? transY : transX);
                dx = accDx;
                scrolling = (vertical) ? (Math.abs(accDx) < Math.abs(-transX)) : (Math.abs(accDx) < Math.abs(-transY));

                if(e.detail === e.MSGESTURE_FLAG_INERTIA){
                    setImmediate(function (){
                        el._gesture.stop();
                    });

                    return;
                }

                if (!scrolling || Number(new Date()) - startT > 500) {
                    e.preventDefault();
                    if (!fade && slider.transitions) {
                        if (!slider.vars.animationLoop) {
                            dx = accDx / ((slider.currentSlide === 0 && accDx < 0 || slider.currentSlide === slider.last && accDx > 0) ? (Math.abs(accDx) / cwidth + 2) : 1);
                        }
                        slider.setProps(offset + dx, "setTouch");
                    }
                }
            }

            function onMSGestureEnd(e) {
                e.stopPropagation();
                var slider = e.target._slider;
                if(!slider){
                    return;
                }
                if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                    var updateDx = (reverse) ? -dx : dx,
                        target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                    if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
                        slider.flexAnimate(target, slider.vars.pauseOnAction);
                    } else {
                        if (!fade) slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);
                    }
                }

                startX = null;
                startY = null;
                dx = null;
                offset = null;
                accDx = 0;
            }
        }
      },
      resize: function() {
        if (!slider.animating && slider.is(':visible')) {
          if (!carousel) slider.doMath();

          if (fade) {
            // SMOOTH HEIGHT:
            methods.smoothHeight();
          } else if (carousel) { //CAROUSEL:
            slider.slides.width(slider.computedW);
            slider.update(slider.pagingCount);
            slider.setProps();
          }
          else if (vertical) { //VERTICAL:
            slider.viewport.height(slider.h);
            slider.setProps(slider.h, "setTotal");
          } else {
            // SMOOTH HEIGHT:
            if (slider.vars.smoothHeight) methods.smoothHeight();
            slider.newSlides.width(slider.computedW);
            slider.setProps(slider.computedW, "setTotal");
          }
        }
      },
      smoothHeight: function(dur) {
        if (!vertical || fade) {
          var $obj = (fade) ? slider : slider.viewport;
          (dur) ? $obj.animate({"height": slider.slides.eq(slider.animatingTo).height()}, dur) : $obj.height(slider.slides.eq(slider.animatingTo).height());
        }
      },
      sync: function(action) {
        var $obj = $(slider.vars.sync).data("flexslider"),
            target = slider.animatingTo;

        switch (action) {
          case "animate": $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true); break;
          case "play": if (!$obj.playing && !$obj.asNav) { $obj.play(); } break;
          case "pause": $obj.pause(); break;
        }
      },
      pauseInvisible: {
        visProp: null,
        init: function() {
          var prefixes = ['webkit','moz','ms','o'];

          if ('hidden' in document) return 'hidden';
          for (var i = 0; i < prefixes.length; i++) {
            if ((prefixes[i] + 'Hidden') in document) 
            methods.pauseInvisible.visProp = prefixes[i] + 'Hidden';
          }
          if (methods.pauseInvisible.visProp) {
            var evtname = methods.pauseInvisible.visProp.replace(/[H|h]idden/,'') + 'visibilitychange';
            document.addEventListener(evtname, function() {
              if (methods.pauseInvisible.isHidden()) {
                if(slider.startTimeout) clearTimeout(slider.startTimeout); //If clock is ticking, stop timer and prevent from starting while invisible
                else slider.pause(); //Or just pause
              }
              else {
                if(slider.started) slider.play(); //Initiated before, just play
                else (slider.vars.initDelay > 0) ? setTimeout(slider.play, slider.vars.initDelay) : slider.play(); //Didn't init before: simply init or wait for it
              }
            });
          }       
        },
        isHidden: function() {
          return document[methods.pauseInvisible.visProp] || false;
        }
      },
      setToClearWatchedEvent: function() {
        clearTimeout(watchedEventClearTimer);
        watchedEventClearTimer = setTimeout(function() {
          watchedEvent = "";
        }, 3000);
      }
    }

    // public methods
    slider.flexAnimate = function(target, pause, override, withSync, fromNav) {
      if (!slider.vars.animationLoop && target !== slider.currentSlide) {
        slider.direction = (target > slider.currentSlide) ? "next" : "prev";
      }

      if (asNav && slider.pagingCount === 1) slider.direction = (slider.currentItem < target) ? "next" : "prev";

      if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
        if (asNav && withSync) {
          var master = $(slider.vars.asNavFor).data('flexslider');
          slider.atEnd = target === 0 || target === slider.count - 1;
          master.flexAnimate(target, true, false, true, fromNav);
          slider.direction = (slider.currentItem < target) ? "next" : "prev";
          master.direction = slider.direction;

          if (Math.ceil((target + 1)/slider.visible) - 1 !== slider.currentSlide && target !== 0) {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            target = Math.floor(target/slider.visible);
          } else {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            return false;
          }
        }

        slider.animating = true;
        slider.animatingTo = target;
        // API: before() animation Callback
        slider.vars.before(slider);

        // SLIDESHOW:
        if (pause) slider.pause();

        // SYNC:
        if (slider.syncExists && !fromNav) methods.sync("animate");

        // CONTROLNAV
        if (slider.vars.controlNav) methods.controlNav.active();

        // !CAROUSEL:
        // CANDIDATE: slide active class (for add/remove slide)
        if (!carousel) slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide');

        // INFINITE LOOP:
        // CANDIDATE: atEnd
        slider.atEnd = target === 0 || target === slider.last;

        // DIRECTIONNAV:
        if (slider.vars.directionNav) methods.directionNav.update();

        if (target === slider.last) {
          // API: end() of cycle Callback
          slider.vars.end(slider);
          // SLIDESHOW && !INFINITE LOOP:
          if (!slider.vars.animationLoop) slider.pause();
        }

        // SLIDE:
        if (!fade) {
          var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW,
              margin, slideString, calcNext;

          // INFINITE LOOP / REVERSE:
          if (carousel) {
            //margin = (slider.vars.itemWidth > slider.w) ? slider.vars.itemMargin * 2 : slider.vars.itemMargin;
            margin = slider.vars.itemMargin;
            calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;
            slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext;
          } else if (slider.currentSlide === 0 && target === slider.count - 1 && slider.vars.animationLoop && slider.direction !== "next") {
            slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0;
          } else if (slider.currentSlide === slider.last && target === 0 && slider.vars.animationLoop && slider.direction !== "prev") {
            slideString = (reverse) ? 0 : (slider.count + 1) * dimension;
          } else {
            slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
          }
          slider.setProps(slideString, "", slider.vars.animationSpeed);
          if (slider.transitions) {
            if (!slider.vars.animationLoop || !slider.atEnd) {
              slider.animating = false;
              slider.currentSlide = slider.animatingTo;
            }
            slider.container.unbind("webkitTransitionEnd" + slider.vars.eventNamespace + " transitionend" + slider.vars.eventNamespace);
+            slider.container.bind("webkitTransitionEnd" + slider.vars.eventNamespace + " transitionend" + slider.vars.eventNamespace, function() {
              slider.wrapup(dimension);
            });
          } else {
            slider.container.animate(slider.args, slider.vars.animationSpeed, slider.vars.easing, function(){
              slider.wrapup(dimension);
            });
          }
        } else { // FADE:
          if (!touch) {
            //slider.slides.eq(slider.currentSlide).fadeOut(slider.vars.animationSpeed, slider.vars.easing);
            //slider.slides.eq(target).fadeIn(slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);

            slider.slides.eq(slider.currentSlide).css({"zIndex": 1}).animate({"opacity": 0}, slider.vars.animationSpeed, slider.vars.easing);
            slider.slides.eq(target).css({"zIndex": 2}).animate({"opacity": 1}, slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);

          } else {
            slider.slides.eq(slider.currentSlide).css({ "opacity": 0, "zIndex": 1 });
            slider.slides.eq(target).css({ "opacity": 1, "zIndex": 2 });
            slider.wrapup(dimension);
          }
        }
        // SMOOTH HEIGHT:
        if (slider.vars.smoothHeight) methods.smoothHeight(slider.vars.animationSpeed);
      }
    }
    slider.wrapup = function(dimension) {
      // SLIDE:
      if (!fade && !carousel) {
        if (slider.currentSlide === 0 && slider.animatingTo === slider.last && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpEnd");
        } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpStart");
        }
      }
      slider.animating = false;
      slider.currentSlide = slider.animatingTo;
      // API: after() animation Callback
      slider.vars.after(slider);
    }

    // SLIDESHOW:
    slider.animateSlides = function() {
      if (!slider.animating && focused ) slider.flexAnimate(slider.getTarget("next"));
    }
    // SLIDESHOW:
    slider.pause = function() {
      clearInterval(slider.animatedSlides);
      slider.animatedSlides = null;
      slider.playing = false;
      // PAUSEPLAY:
      if (slider.vars.pausePlay) methods.pausePlay.update("play");
      // SYNC:
      if (slider.syncExists) methods.sync("pause");
    }
    // SLIDESHOW:
    slider.play = function() {
      if (slider.playing) clearInterval(slider.animatedSlides);
      slider.animatedSlides = slider.animatedSlides || setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
      slider.started = slider.playing = true;
      // PAUSEPLAY:
      if (slider.vars.pausePlay) methods.pausePlay.update("pause");
      // SYNC:
      if (slider.syncExists) methods.sync("play");
    }
    // STOP:
    slider.stop = function () {
      slider.pause();
      slider.stopped = true;
    }
    slider.canAdvance = function(target, fromNav) {
      // ASNAV:
      var last = (asNav) ? slider.pagingCount - 1 : slider.last;
      return (fromNav) ? true :
             (asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev") ? true :
             (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false :
             (target === slider.currentSlide && !asNav) ? false :
             (slider.vars.animationLoop) ? true :
             (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false :
             (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false :
             true;
    }
    slider.getTarget = function(dir) {
      slider.direction = dir;
      if (dir === "next") {
        return (slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1;
      } else {
        return (slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1;
      }
    }

    // SLIDE:
    slider.setProps = function(pos, special, dur) {
      var target = (function() {
        var posCheck = (pos) ? pos : ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo,
            posCalc = (function() {
              if (carousel) {
                return (special === "setTouch") ? pos :
                       (reverse && slider.animatingTo === slider.last) ? 0 :
                       (reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                       (slider.animatingTo === slider.last) ? slider.limit : posCheck;
              } else {
                switch (special) {
                  case "setTotal": return (reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
                  case "setTouch": return (reverse) ? pos : pos;
                  case "jumpEnd": return (reverse) ? pos : slider.count * pos;
                  case "jumpStart": return (reverse) ? slider.count * pos : pos;
                  default: return pos;
                }
              }
            }());

            return (posCalc * -1) + "px";
          }());

      if (slider.transitions) {
        target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
        dur = (dur !== undefined) ? (dur/1000) + "s" : "0s";
        slider.container.css("-" + slider.pfx + "-transition-duration", dur);
      }

      slider.args[slider.prop] = target;
      if (slider.transitions || dur === undefined) slider.container.css(slider.args);
    }

    slider.setup = function(type) {
      // SLIDE:
      if (!fade) {
        var sliderOffset, arr;

        if (type === "init") {
          slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({"overflow": "hidden", "position": "relative"}).appendTo(slider).append(slider.container);
          // INFINITE LOOP:
          slider.cloneCount = 0;
          slider.cloneOffset = 0;
          // REVERSE:
          if (reverse) {
            arr = $.makeArray(slider.slides).reverse();
            slider.slides = $(arr);
            slider.container.empty().append(slider.slides);
          }
        }
        // INFINITE LOOP && !CAROUSEL:
        if (slider.vars.animationLoop && !carousel) {
          slider.cloneCount = 2;
          slider.cloneOffset = 1;
          // clear out old clones
          if (type !== "init") slider.container.find('.clone').remove();
          slider.container.append(slider.slides.first().clone().addClass('clone').attr('aria-hidden', 'true')).prepend(slider.slides.last().clone().addClass('clone').attr('aria-hidden', 'true'));
        }
        slider.newSlides = $(slider.vars.selector, slider);

        sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
        // VERTICAL:
        if (vertical && !carousel) {
          slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
          setTimeout(function(){
            slider.newSlides.css({"display": "block"});
            slider.doMath();
            slider.viewport.height(slider.h);
            slider.setProps(sliderOffset * slider.h, "init");
          }, (type === "init") ? 100 : 0);
        } else {
          slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
          slider.setProps(sliderOffset * slider.computedW, "init");
          setTimeout(function(){
            slider.doMath();
            slider.newSlides.css({"width": slider.computedW, "float": "left", "display": "block"});
            // SMOOTH HEIGHT:
            if (slider.vars.smoothHeight) methods.smoothHeight();
          }, (type === "init") ? 100 : 0);
        }
      } else { // FADE:
        slider.slides.css({"width": "100%", "float": "left", "marginRight": "-100%", "position": "relative"});
        if (type === "init") {
          if (!touch) {
            //slider.slides.eq(slider.currentSlide).fadeIn(slider.vars.animationSpeed, slider.vars.easing);
            slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).animate({"opacity": 1},slider.vars.animationSpeed,slider.vars.easing);
          } else {
            slider.slides.css({ "opacity": 0, "display": "block", "webkitTransition": "opacity " + slider.vars.animationSpeed / 1000 + "s ease", "zIndex": 1 }).eq(slider.currentSlide).css({ "opacity": 1, "zIndex": 2});
          }
        }
        // SMOOTH HEIGHT:
        if (slider.vars.smoothHeight) methods.smoothHeight();
      }
      // !CAROUSEL:
      // CANDIDATE: active slide
      if (!carousel) slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide");
    }


    slider.doMath = function() {
      var slide = slider.slides.first(),
          slideMargin = slider.vars.itemMargin,
          minItems = slider.vars.minItems,
          maxItems = slider.vars.maxItems;

      slider.w = (slider.viewport===undefined) ? slider.width() : slider.viewport.width();
      slider.h = slide.height();
      slider.boxPadding = slide.outerWidth() - slide.width();

      // CAROUSEL:
      if (carousel) {
        slider.itemT = slider.vars.itemWidth + slideMargin;
        slider.minW = (minItems) ? minItems * slider.itemT : slider.w;
        slider.maxW = (maxItems) ? (maxItems * slider.itemT) - slideMargin : slider.w;
        slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * (minItems - 1)))/minItems :
                       (slider.maxW < slider.w) ? (slider.w - (slideMargin * (maxItems - 1)))/maxItems :
                       (slider.vars.itemWidth > slider.w) ? slider.w : slider.vars.itemWidth;

        slider.visible = Math.floor(slider.w/(slider.itemW));
        slider.move = (slider.vars.move > 0 && slider.vars.move < slider.visible ) ? slider.vars.move : slider.visible;
        slider.pagingCount = Math.ceil(((slider.count - slider.visible)/slider.move) + 1);
        slider.last =  slider.pagingCount - 1;
        slider.limit = (slider.pagingCount === 1) ? 0 :
                       (slider.vars.itemWidth > slider.w) ? (slider.itemW * (slider.count - 1)) + (slideMargin * (slider.count - 1)) : ((slider.itemW + slideMargin) * slider.count) - slider.w - slideMargin;
      } else {
        slider.itemW = slider.w;
        slider.pagingCount = slider.count;
        slider.last = slider.count - 1;
      }
      slider.computedW = slider.itemW - slider.boxPadding;
    }


    slider.update = function(pos, action) {
      slider.doMath();

      // update currentSlide and slider.animatingTo if necessary
      if (!carousel) {
        if (pos < slider.currentSlide) {
          slider.currentSlide += 1;
        } else if (pos <= slider.currentSlide && pos !== 0) {
          slider.currentSlide -= 1;
        }
        slider.animatingTo = slider.currentSlide;
      }

      // update controlNav
      if (slider.vars.controlNav && !slider.manualControls) {
        if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) {
          methods.controlNav.update("add");
        } else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) {
          if (carousel && slider.currentSlide > slider.last) {
            slider.currentSlide -= 1;
            slider.animatingTo -= 1;
          }
          methods.controlNav.update("remove", slider.last);
        }
      }
      // update directionNav
      if (slider.vars.directionNav) methods.directionNav.update();

    }

    slider.addSlide = function(obj, pos) {
      var $obj = $(obj);

      slider.count += 1;
      slider.last = slider.count - 1;

      // append new slide
      if (vertical && reverse) {
        (pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
      } else {
        (pos !== undefined) ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.update(pos, "add");

      // update slider.slides
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      //FlexSlider: added() Callback
      slider.vars.added(slider);
    }
    slider.removeSlide = function(obj) {
      var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;

      // update count
      slider.count -= 1;
      slider.last = slider.count - 1;

      // remove slide
      if (isNaN(obj)) {
        $(obj, slider.slides).remove();
      } else {
        (vertical && reverse) ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.doMath();
      slider.update(pos, "remove");

      // update slider.slides
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      // FlexSlider: removed() Callback
      slider.vars.removed(slider);
    }

    slider.destroy = function() {
      var classNamespace = '.' + slider.vars.namespace; // Namespaced class selector
      if (slider.vars.controlNav) slider.controlNav.closest(classNamespace + 'control-nav').remove(); // Remove control elements if present
      if (slider.vars.directionNav) slider.directionNav.closest(classNamespace + 'direction-nav').remove(); // Remove direction-nav elements if present
      if (slider.vars.pausePlay) slider.pausePlay.closest(classNamespace + 'pauseplay').remove(); // Remove pauseplay elements if present
      slider.find('.clone').remove(); // Remove any flexslider clones
      slider.unbind(slider.vars.eventNamespace); // Remove events on slider
      if ( slider.vars.animation == "slide" ) slider.container.unwrap(); // Remove the .flex-viewport div
      slider.container.removeAttr('style') // Remove generated CSS (could collide with 3rd parties)
      slider.container.unbind(slider.vars.eventNamespace); // Remove events on slider
      slider.slides.removeAttr('style'); // Remove generated CSS (could collide with 3rd parties)
      slider.slides.filter(classNamespace + 'active-slide').removeClass(slider.vars.namespace + 'active-slide'); // Remove slide active class
      slider.slides.unbind(slider.vars.eventNamespace); // Remove events on slides
      $(document).unbind(slider.vars.eventNamespace + "-" + slider.id); // Remove events from document for this instance only
      $(window).unbind(slider.vars.eventNamespace + "-" + slider.id); // Remove events from window for this instance only 
      slider.stop(); // Stop the interval
      slider.removeData('flexslider'); // Remove data
    }

    //FlexSlider: Initialize
    methods.init();
  }

  // Ensure the slider isn't focussed if the window loses focus.
  $( window ).blur( function ( e ) {
    focused = false;
  }).focus( function ( e ) {
    focused = true;
  });

  //FlexSlider: Default Settings
  $.flexslider.defaults = {
    namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
    eventNamespace: '.flexslider',   //{NEW} String: Event namespace string attached to all element events generated by the plugin. The period at the start of the string is required.
    selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
    animation: "fade",              //String: Select your animation type, "fade" or "slide"
    easing: "swing",                //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
    direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
    reverse: false,                 //{NEW} Boolean: Reverse the animation direction
    animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
    smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
    startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
    slideshow: true,                //Boolean: Animate slider automatically
    slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
    initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
    randomize: false,               //Boolean: Randomize slide order
    thumbCaptions: false,           //Boolean: Whether or not to put captions on thumbnails when using the "thumbnails" controlNav.

    // Usability features
    pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
    pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
    pauseInvisible: true,   		//{NEW} Boolean: Pause the slideshow when tab is invisible, resume when visible. Provides better UX, lower CPU usage.
    useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
    touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
    video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches

    // Primary Controls
    controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: "Previous",           //String: Set the text for the "previous" directionNav item
    nextText: "Next",               //String: Set the text for the "next" directionNav item

    // Secondary Navigation
    keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
    multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
    mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
    pausePlay: false,               //Boolean: Create pause/play dynamic element
    pauseText: "Pause",             //String: Set the text for the "pause" pausePlay item
    playText: "Play",               //String: Set the text for the "play" pausePlay item

    // Special properties
    controlsContainer: "",          //{UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $(".flexslider-container"). Property is ignored if given element is not found.
    manualControls: "",             //{UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
    sync: "",                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
    asNavFor: "",                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider

    // Carousel Options
    itemWidth: 0,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
    itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
    minItems: 1,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
    maxItems: 0,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
    move: 0,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
    allowOneSlide: true,           //{NEW} Boolean: Whether or not to allow a slider comprised of a single slide

    // Callback API
    start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
    before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
    after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
    end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
    added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
    removed: function(){}           //{NEW} Callback: function(slider) - Fires after a slide is removed
  }

  var instanceId = 0;

  //FlexSlider: Plugin Function
  $.fn.flexslider = function(options) {
    if (options === undefined) options = {};

    if (typeof options === "object") {
      return this.each(function() {
        var $this = $(this),
            selector = (options.selector) ? options.selector : ".slides > li",
            $slides = $this.find(selector);

      if ( ( $slides.length === 1 && options.allowOneSlide === true ) || $slides.length === 0 ) {
          $slides.fadeIn(400);
          if (options.start) options.start($this);
        } else if ($this.data('flexslider') === undefined) {
          new $.flexslider(this, options, instanceId++);
        }
      });
    } else {
      // Helper strings to quickly perform functions on the slider
      var $slider = $(this).data('flexslider');
      switch (options) {
        case "play": $slider.play(); break;
        case "pause": $slider.pause(); break;
        case "stop": $slider.stop(); break;
        case "next": $slider.flexAnimate($slider.getTarget("next"), true); break;
        case "prev":
        case "previous": $slider.flexAnimate($slider.getTarget("prev"), true); break;
        case "destroy": $slider.destroy(); break;
        default: if (typeof options === "number") $slider.flexAnimate(options, true);
      }
    }
  }
})(jQuery);

/**
 * jQuery Masonry v2.1.07
 * A dynamic layout plugin for jQuery
 * The flip-side of CSS Floats
 * http://masonry.desandro.com
 *
 * Licensed under the MIT license.
 * Copyright 2012 David DeSandro
 */

/*jshint browser: true, curly: true, eqeqeq: true, forin: false, immed: false, newcap: true, noempty: true, strict: true, undef: true */
/*global jQuery: false */

(function( window, $, undefined ){

  'use strict';

  /*
   * smartresize: debounced resize event for jQuery
   *
   * latest version and complete README available on Github:
   * https://github.com/louisremi/jquery.smartresize.js
   *
   * Copyright 2011 @louis_remi
   * Licensed under the MIT license.
   */

  var $event = $.event,
      dispatchMethod = $.event.handle ? 'handle' : 'dispatch',
      resizeTimeout;

  $event.special.smartresize = {
    setup: function() {
      $(this).bind( "resize", $event.special.smartresize.handler );
    },
    teardown: function() {
      $(this).unbind( "resize", $event.special.smartresize.handler );
    },
    handler: function( event, execAsap ) {
      // Save the context
      var context = this,
          args = arguments;

      // set correct event type
      event.type = "smartresize";

      if ( resizeTimeout ) { clearTimeout( resizeTimeout ); }
      resizeTimeout = setTimeout(function() {
        $event[ dispatchMethod ].apply( context, args );

      }, execAsap === "execAsap"? 0 : 100 );
    }
  };

  $.fn.smartresize = function( fn ) {
    return fn ? this.bind( "smartresize", fn ) : this.trigger( "smartresize", ["execAsap"] );
  };



// ========================= Masonry ===============================


  // our "Widget" object constructor
  $.Mason = function( options, element ){
    this.element = $( element );

    this._create( options );
    this._init();
  };

  $.Mason.settings = {
    isResizable: true,
    isAnimated: false,
    animationOptions: {
      queue: false,
      duration: 500
    },
    gutterWidth: 0,
    isRTL: false,
    isFitWidth: false,
    containerStyle: {
      position: 'relative'
    }
  };

  $.Mason.prototype = {

    _filterFindBricks: function( $elems ) {
      var selector = this.options.itemSelector;
      // if there is a selector
      // filter/find appropriate item elements
      return !selector ? $elems : $elems.filter( selector ).add( $elems.find( selector ) );
    },

    _getBricks: function( $elems ) {
      var $bricks = this._filterFindBricks( $elems )
        .css({ position: 'absolute' })
        .addClass('masonry-brick');
      return $bricks;
    },
    
    // sets up widget
    _create : function( options ) {
      
      this.options = $.extend( true, {}, $.Mason.settings, options );
      this.styleQueue = [];

      // get original styles in case we re-apply them in .destroy()
      var elemStyle = this.element[0].style;
      this.originalStyle = {
        // get height
        height: elemStyle.height || ''
      };
      // get other styles that will be overwritten
      var containerStyle = this.options.containerStyle;
      for ( var prop in containerStyle ) {
        this.originalStyle[ prop ] = elemStyle[ prop ] || '';
      }

      this.element.css( containerStyle );

      this.horizontalDirection = this.options.isRTL ? 'right' : 'left';

      var x = this.element.css( 'padding-' + this.horizontalDirection );
      var y = this.element.css( 'padding-top' );
      this.offset = {
        x: x ? parseInt( x, 10 ) : 0,
        y: y ? parseInt( y, 10 ) : 0
      };
      
      this.isFluid = this.options.columnWidth && typeof this.options.columnWidth === 'function';

      // add masonry class first time around
      var instance = this;
      setTimeout( function() {
        instance.element.addClass('masonry');
      }, 0 );
      
      // bind resize method
      if ( this.options.isResizable ) {
        $(window).bind( 'smartresize.masonry', function() { 
          instance.resize();
        });
      }


      // need to get bricks
      this.reloadItems();

    },
  
    // _init fires when instance is first created
    // and when instance is triggered again -> $el.masonry();
    _init : function( callback ) {
      this._getColumns();
      this._reLayout( callback );
    },

    option: function( key, value ){
      // set options AFTER initialization:
      // signature: $('#foo').bar({ cool:false });
      if ( $.isPlainObject( key ) ){
        this.options = $.extend(true, this.options, key);
      } 
    },
    
    // ====================== General Layout ======================

    // used on collection of atoms (should be filtered, and sorted before )
    // accepts atoms-to-be-laid-out to start with
    layout : function( $bricks, callback ) {

      // place each brick
      for (var i=0, len = $bricks.length; i < len; i++) {
        this._placeBrick( $bricks[i] );
      }
      
      // set the size of the container
      var containerSize = {};
      containerSize.height = Math.max.apply( Math, this.colYs );
      if ( this.options.isFitWidth ) {
        var unusedCols = 0;
        i = this.cols;
        // count unused columns
        while ( --i ) {
          if ( this.colYs[i] !== 0 ) {
            break;
          }
          unusedCols++;
        }
        // fit container to columns that have been used;
        containerSize.width = (this.cols - unusedCols) * this.columnWidth - this.options.gutterWidth;
      }
      this.styleQueue.push({ $el: this.element, style: containerSize });

      // are we animating the layout arrangement?
      // use plugin-ish syntax for css or animate
      var styleFn = !this.isLaidOut ? 'css' : (
            this.options.isAnimated ? 'animate' : 'css'
          ),
          animOpts = this.options.animationOptions;

      // process styleQueue
      var obj;
      for (i=0, len = this.styleQueue.length; i < len; i++) {
        obj = this.styleQueue[i];
        obj.$el[ styleFn ]( obj.style, animOpts );
      }

      // clear out queue for next time
      this.styleQueue = [];

      // provide $elems as context for the callback
      if ( callback ) {
        callback.call( $bricks );
      }
      
      this.isLaidOut = true;
    },
    
    // calculates number of columns
    // i.e. this.columnWidth = 200
    _getColumns : function() {
      var container = this.options.isFitWidth ? this.element.parent() : this.element,
          containerWidth = container.width();

                         // use fluid columnWidth function if there
      this.columnWidth = this.isFluid ? this.options.columnWidth( containerWidth ) :
                    // if not, how about the explicitly set option?
                    this.options.columnWidth ||
                    // or use the size of the first item
                    this.$bricks.outerWidth(true) ||
                    // if there's no items, use size of container
                    containerWidth;

      this.columnWidth += this.options.gutterWidth;

      this.cols = Math.floor( ( containerWidth + this.options.gutterWidth ) / this.columnWidth );
      this.cols = Math.max( this.cols, 1 );

    },

    // layout logic
    _placeBrick: function( brick ) {
      var $brick = $(brick),
          colSpan, groupCount, groupY, groupColY, j;

      //how many columns does this brick span
      colSpan = Math.ceil( $brick.outerWidth(true) / this.columnWidth );
      colSpan = Math.min( colSpan, this.cols );

      if ( colSpan === 1 ) {
        // if brick spans only one column, just like singleMode
        groupY = this.colYs;
      } else {
        // brick spans more than one column
        // how many different places could this brick fit horizontally
        groupCount = this.cols + 1 - colSpan;
        groupY = [];

        // for each group potential horizontal position
        for ( j=0; j < groupCount; j++ ) {
          // make an array of colY values for that one group
          groupColY = this.colYs.slice( j, j+colSpan );
          // and get the max value of the array
          groupY[j] = Math.max.apply( Math, groupColY );
        }

      }

      // get the minimum Y value from the columns
      var minimumY = Math.min.apply( Math, groupY ),
          shortCol = 0;
      
      // Find index of short column, the first from the left
      for (var i=0, len = groupY.length; i < len; i++) {
        if ( groupY[i] === minimumY ) {
          shortCol = i;
          break;
        }
      }

      // position the brick
      var position = {
        top: minimumY + this.offset.y
      };
      // position.left or position.right
      position[ this.horizontalDirection ] = this.columnWidth * shortCol + this.offset.x;
      this.styleQueue.push({ $el: $brick, style: position });

      // apply setHeight to necessary columns
      var setHeight = minimumY + $brick.outerHeight(true),
          setSpan = this.cols + 1 - len;
      for ( i=0; i < setSpan; i++ ) {
        this.colYs[ shortCol + i ] = setHeight;
      }

    },
    
    
    resize: function() {
      var prevColCount = this.cols;
      // get updated colCount
      this._getColumns();
      if ( this.isFluid || this.cols !== prevColCount ) {
        // if column count has changed, trigger new layout
        this._reLayout();
      }
    },
    
    
    _reLayout : function( callback ) {
      // reset columns
      var i = this.cols;
      this.colYs = [];
      while (i--) {
        this.colYs.push( 0 );
      }
      // apply layout logic to all bricks
      this.layout( this.$bricks, callback );
    },
    
    // ====================== Convenience methods ======================
    
    // goes through all children again and gets bricks in proper order
    reloadItems : function() {
      this.$bricks = this._getBricks( this.element.children() );
    },
    
    
    reload : function( callback ) {
      this.reloadItems();
      this._init( callback );
    },
    

    // convienence method for working with Infinite Scroll
    appended : function( $content, isAnimatedFromBottom, callback ) {
      if ( isAnimatedFromBottom ) {
        // set new stuff to the bottom
        this._filterFindBricks( $content ).css({ top: this.element.height() });
        var instance = this;
        setTimeout( function(){
          instance._appended( $content, callback );
        }, 1 );
      } else {
        this._appended( $content, callback );
      }
    },
    
    _appended : function( $content, callback ) {
      var $newBricks = this._getBricks( $content );
      // add new bricks to brick pool
      this.$bricks = this.$bricks.add( $newBricks );
      this.layout( $newBricks, callback );
    },
    
    // removes elements from Masonry widget
    remove : function( $content ) {
      this.$bricks = this.$bricks.not( $content );
      $content.remove();
    },
    
    // destroys widget, returns elements and container back (close) to original style
    destroy : function() {

      this.$bricks
        .removeClass('masonry-brick')
        .each(function(){
          this.style.position = '';
          this.style.top = '';
          this.style.left = '';
        });
      
      // re-apply saved container styles
      var elemStyle = this.element[0].style;
      for ( var prop in this.originalStyle ) {
        elemStyle[ prop ] = this.originalStyle[ prop ];
      }

      this.element
        .unbind('.masonry')
        .removeClass('masonry')
        .removeData('masonry');
      
      $(window).unbind('.masonry');

    }
    
  };
  
  
  // ======================= imagesLoaded Plugin ===============================
  /*!
   * jQuery imagesLoaded plugin v1.1.0
   * http://github.com/desandro/imagesloaded
   *
   * MIT License. by Paul Irish et al.
   */


  // $('#my-container').imagesLoaded(myFunction)
  // or
  // $('img').imagesLoaded(myFunction)

  // execute a callback when all images have loaded.
  // needed because .load() doesn't work on cached images

  // callback function gets image collection as argument
  //  `this` is the container

  $.fn.imagesLoaded = function( callback ) {
    var $this = this,
        $images = $this.find('img').add( $this.filter('img') ),
        len = $images.length,
        blank = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==',
        loaded = [];

    function triggerCallback() {
      callback.call( $this, $images );
    }

    function imgLoaded( event ) {
      var img = event.target;
      if ( img.src !== blank && $.inArray( img, loaded ) === -1 ){
        loaded.push( img );
        if ( --len <= 0 ){
          setTimeout( triggerCallback );
          $images.unbind( '.imagesLoaded', imgLoaded );
        }
      }
    }

    // if no images, trigger immediately
    if ( !len ) {
      triggerCallback();
    }

    $images.bind( 'load.imagesLoaded error.imagesLoaded',  imgLoaded ).each( function() {
      // cached images don't fire load sometimes, so we reset src.
      var src = this.src;
      // webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
      // data uri bypasses webkit log warning (thx doug jones)
      this.src = blank;
      this.src = src;
    });

    return $this;
  };


  // helper function for logging errors
  // $.error breaks jQuery chaining
  var logError = function( message ) {
    if ( window.console ) {
      window.console.error( message );
    }
  };
  
  // =======================  Plugin bridge  ===============================
  // leverages data method to either create or return $.Mason constructor
  // A bit from jQuery UI
  //   https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.widget.js
  // A bit from jcarousel 
  //   https://github.com/jsor/jcarousel/blob/master/lib/jquery.jcarousel.js

  $.fn.masonry = function( options ) {
    if ( typeof options === 'string' ) {
      // call method
      var args = Array.prototype.slice.call( arguments, 1 );

      this.each(function(){
        var instance = $.data( this, 'masonry' );
        if ( !instance ) {
          logError( "cannot call methods on masonry prior to initialization; " +
            "attempted to call method '" + options + "'" );
          return;
        }
        if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
          logError( "no such method '" + options + "' for masonry instance" );
          return;
        }
        // apply method
        instance[ options ].apply( instance, args );
      });
    } else {
      this.each(function() {
        var instance = $.data( this, 'masonry' );
        if ( instance ) {
          // apply options & init
          instance.option( options || {} );
          instance._init();
        } else {
          // initialize new instance
          $.data( this, 'masonry', new $.Mason( options, this ) );
        }
      });
    }
    return this;
  };

})( window, jQuery );

/*
Sequence.js (http://www.sequencejs.com)
Version: 1.0.1.2
Author: Ian Lunn @IanLunn
Author URL: http://www.ianlunn.co.uk/
Github: https://github.com/IanLunn/Sequence

This is a FREE script and is available under a MIT License:
http://www.opensource.org/licenses/mit-license.php

Sequence.js and its dependencies are (c) Ian Lunn Design 2012 - 2013 unless otherwise stated.

Sequence also relies on the following open source scripts:

- jQuery imagesLoaded 2.1.0 (http://github.com/desandro/imagesloaded)
	Paul Irish et al
	Available under a MIT License: http://www.opensource.org/licenses/mit-license.php

- jQuery TouchWipe 1.1.1 (http://www.netcu.de/jquery-touchwipe-iphone-ipad-library)
	Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
	Available under a MIT License: http://www.opensource.org/licenses/mit-license.php

- Modernizr 2.6.1 Custom Build (http://modernizr.com/) (Named Modernizr for Sequence to prevent conflicts)
	Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
	Available under the BSD and MIT licenses: www.modernizr.com/license/
	*/

;(function($) {
	var windowLoaded = false;
	$(window).bind("load", function() {
		windowLoaded = true;
	});

	function Sequence(element, options, defaults, get) {
		var self = this;
		self.container = $(element); //the Sequence containing element
		self.canvas = self.container.children('.sequence-canvas'); //the Sequence canvas which holds Sequence's frames (<li> elements)
		self.frames = self.canvas.children('li'); //the Sequence frames (top level <li> elements within the Sequence canvas)

		self._modernizrForSequence(); //get the custom build necessary for Sequence

		var prefixes = { //convert JS transition/animation names to CSS names
			'WebkitTransition' : '-webkit-',
			'WebkitAnimation'  : '-webkit-',
			'MozTransition'    : '-moz-',
			'MozAnimation '    : '-moz-',
			'OTransition'      : '-o-',
			'OAnimation'       : '-o-',
			'msTransition'     : '-ms-',
			'msAnimation'      : '-ms-',
			'transition'       : '',
			'animation'        : ''
		};
		
		var transitionsAndAnimations = { //convert JS transition names to JS transition end and animation end event names (also apply a classname of .sequence to the event)
			'WebkitTransition' : 'webkitTransitionEnd.sequence',
			'WebkitAnimation'  : 'webkitAnimationEnd.sequence',
			'MozTransition'    : 'transitionend.sequence',
			'MozAnimation'     : 'animationend.sequence',
			'OTransition'      : 'otransitionend.sequence',
			'OAnimation'       : 'oanimationend.sequence',
			'msTransition'     : 'MSTransitionEnd.sequence',
			'msAnimation'      : 'MSAnimationEnd.sequence',
			'transition'       : 'transitionend.sequence',
			'animation'        : 'animationend.sequence'
		};

		self.transitionPrefix = prefixes[ModernizrForSequence.prefixed('transition')], //work out the CSS transition prefix for the browser being used (-webkit- for example)
		self.animationPrefix = prefixes[ModernizrForSequence.prefixed('animation')], //work out the CSS animation prefix for the browser being used

		self.transitionProperties = {},
		self.transitionEnd = transitionsAndAnimations[ModernizrForSequence.prefixed('transition')] + ' ' + transitionsAndAnimations[ModernizrForSequence.prefixed('animation')], //work out the JS transitionEnd name for the browser being used (webkitTransitionEnd webkitAnimationEnd for example)
		self.numberOfFrames = self.frames.length, //number of frames (<li>) Sequence consists of

		self.transitionsSupported = (self.transitionPrefix !== undefined) ? true : false, //determine if transitions are supported
		self.hasTouch = ("ontouchstart" in window) ? true : false, //determine if this is a touch enabled device
		self.isPaused = false, //whether Sequence is paused
		self.isBeingHoveredOver = false, //whether the Sequence canvas is currently being hovered over

		self.container.removeClass('sequence-destroyed'); //if Sequence is destroyed using .destroy(), it is given a clas of "destroy", remove that now if present

		//CALLBACKS
		self.paused = function() {},												//executes when Sequence is paused
		self.unpaused = function() {},											//executes when Sequence is unpaused

		self.beforeNextFrameAnimatesIn = function() {},			//executes before the next frame animates in
		self.afterNextFrameAnimatesIn = function() {},			//executes after the next frame animates in
		self.beforeCurrentFrameAnimatesOut = function() {},	//executes before the current frame animates out
		self.afterCurrentFrameAnimatesOut = function() {},	//executes after the current frame animates out

		self.afterLoaded = function() {};										//executes after Sequence is initiated
		self.destroyed = function() {};											//executes when Sequence is destroyed via the destory() function

		//INIT
		self.settings = $.extend({}, defaults, options); //combine default options with developer defined ones
		self.settings.preloader = self._renderUiElements(self.settings.preloader, '.sequence-preloader'); //set up the preloader and save it
		self.isStartingFrame = (self.settings.animateStartingFrameIn) ? true : false; //determine if the first frame should animate in
		self.settings.unpauseDelay = (self.settings.unpauseDelay === null) ? self.settings.autoPlayDelay : self.settings.unpauseDelay; //if the unpauseDelay is not specified, make it the same as the autoPlayDelay speed
		self.getHashTagFrom = (self.settings.hashDataAttribute) ? "data-sequence-hashtag": "id"; //get the hashtag from the ID or data attribute?
		self.frameHashID = []; //array that matches frames with has IDs
		self.direction = self.settings.autoPlayDirection;

		if(self.settings.hideFramesUntilPreloaded && self.settings.preloader !== undefined  && self.settings.preloader !== false) { //if using a preloader and hiding frames until preloading has completed...
			self.frames.hide(); //hide Sequence's frames
		}

		if(self.transitionPrefix === "-o-") { //if Opera prefixes are required...
			self.transitionsSupported = self._operaTest(); //run a test to see if Opera correctly supports transitions (Opera 11 has bugs relating to transitions)
		}

		self.frames.removeClass("animate-in"); //remove any instance of "animate-in", which should be used incase JS is disabled

		//functionality to run once Sequence has preloaded
		function oncePreloaded() {
			self.afterLoaded(); //callback
			if(self.settings.hideFramesUntilPreloaded && self.settings.preloader !== undefined  && self.settings.preloader !== false) {
				self.frames.show();
			}
			if(self.settings.preloader !== undefined  && self.settings.preloader !== false){
				if(self.settings.hidePreloaderUsingCSS && self.transitionsSupported) {
					self.prependPreloadingCompleteTo = (self.settings.prependPreloadingComplete === true) ? self.settings.preloader : $(self.settings.prependPreloadingComplete);
					self.prependPreloadingCompleteTo.addClass("preloading-complete");
					setTimeout(init, self.settings.hidePreloaderDelay);
				}else{
					self.settings.preloader.fadeOut(self.settings.hidePreloaderDelay, function() {
						clearInterval(self.defaultPreloader);
						init();
					});
				}
			}else{
				init();
			}
		}

		var preloadTheseFramesLength = self.settings.preloadTheseFrames.length; //how many frames to preload?
		var preloadTheseImagesLength = self.settings.preloadTheseImages.length; //how many single images to load?

		// Useful for integration with js module loaders (e.g. requireJS) where window.load may have fired prior to this script executing.
		// Should be used with care.  Modernizr normally likes to execute in the <head> tags.
		if (self.settings.windowLoaded === true) {
			windowLoaded = self.settings.windowLoaded;
		}

		function saveImagesToArray(length, srcOnly) {
			var imagesToPreload = []; //saves the images that are to be preloaded
			if(!srcOnly){
				for(var i = length; i > 0; i--){ //for each frame to be preloaded...
					self.frames.eq(self.settings.preloadTheseFrames[i-1]-1).find("img").each(function() { //find <img>'s in specific frames, and for each found...
						imagesToPreload.push($(this)[0]); //add it to the array of images to be preloaded
					});
				}
			}else{
				for(var j = length; j > 0; j--) { //for each frame to be preloaded...
					imagesToPreload.push($("body").find('img[src="'+self.settings.preloadTheseImages[j-1]+'"]')); //find any <img> with the given source and add it to the array of images to be preloaded
				}
			}
			return imagesToPreload;
		}

		//jQuery imagesLoaded plugin v2.1.0 (http://github.com/desandro/imagesloaded)
		function imagesLoaded(imagesToPreload, callback) {
			var BLANK = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
			var $this = imagesToPreload,
			deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
			hasNotify = $.isFunction(deferred.notify),
			$images = $this.find('img').add( $this.filter('img') ),
			loaded = [],
			proper = [],
			broken = [];

			//Register deferred callbacks
			if($.isPlainObject(callback)) {
				$.each(callback, function(key, value) {
					if(key === 'callback') {
						callback = value;
					}else if(deferred) {
						deferred[key](value);
					}
				});
			}

			function doneLoading() {
				var $proper = $(proper),
				$broken = $(broken);

				if(deferred) {
					if(broken.length) {
						deferred.reject($images, $proper, $broken);
					}else{
						deferred.resolve($images);
					}
				}

				if($.isFunction(callback)) {
					callback.call($this, $images, $proper, $broken);
				}
			}

			function imgLoaded( img, isBroken ) {
				if(img.src === BLANK || $.inArray(img, loaded) !== -1) { // don't proceed if BLANK image, or image is already loaded
					return;
			}

				loaded.push(img); // store element in loaded images array

				if(isBroken) { // keep track of broken and properly loaded images
					broken.push(img);
				}else{
					proper.push(img);
				}

				$.data(img, 'imagesLoaded', {isBroken: isBroken, src: img.src }); // cache image and its state for future calls

				if(hasNotify) { // trigger deferred progress method if present
					deferred.notifyWith($(img), [isBroken, $images, $(proper), $(broken)]);
				}

				if($images.length === loaded.length) { // call doneLoading and clean listeners if all images are loaded
					setTimeout(doneLoading);
					$images.unbind('.imagesLoaded');
				}
			}

			if(!$images.length) { // if no images, trigger immediately
				doneLoading();
			}else{
				$images.bind('load.imagesLoaded error.imagesLoaded', function(event) {
					imgLoaded(event.target, event.type === 'error'); // trigger imgLoaded
				}).each(function(i, el) {
					var src = el.src;
					var cached = $.data(el, 'imagesLoaded'); // find out if this image has been already checked for status if it was, and src has not changed, call imgLoaded on it
					if(cached && cached.src === src) {
						imgLoaded(el, cached.isBroken);
						return;
					}

					if(el.complete && el.naturalWidth !== undefined) { // if complete is true and browser supports natural sizes, try to check for image status manually
						imgLoaded(el, el.naturalWidth === 0 || el.naturalHeight === 0);
						return;
					}

					// cached images don't fire load sometimes, so we reset src, but only when dealing with IE, or image is complete (loaded) and failed manual check webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
					if(el.readyState || el.complete) {
						el.src = BLANK;
						el.src = src;
					}
				});
			}
		}

		if(self.settings.preloader !== undefined && self.settings.preloader !== false && (preloadTheseFramesLength !== 0 || preloadTheseImagesLength !== 0)) { //if using the preloader and the dev has specified some images should preload...
			var frameImagesToPreload = saveImagesToArray(preloadTheseFramesLength); //get images from particular Sequence frames to be preloaded
			var individualImagesToPreload = saveImagesToArray(preloadTheseImagesLength, true); //get images with specific source values to be preloaded
			var imagesToPreload = $(frameImagesToPreload.concat(individualImagesToPreload)); //combine frame images and individual images

			imagesLoaded(imagesToPreload, oncePreloaded);
		}else{ //if not using the preloader...
			if(windowLoaded === true) { //if the window has already loaded...
				oncePreloaded(); //run the init functionality when the preloader has finished
				$(this).unbind("load.sequence"); //unbind the load event as it's no longer needed
			}else{ //if the window hasn't already loaded...
				$(window).bind("load.sequence", function() { //when the window loads...	
					oncePreloaded(); //run the init functionality when the preloader has finished
					$(this).unbind("load.sequence"); //unbind the load event as it's no longer needed
				});
			}
		}

		function init() {
			$(self.settings.preloader).remove(); //remove the preloader element

			self.nextButton = self._renderUiElements(self.settings.nextButton, ".sequence-next"); //set up the next button
			self.prevButton = self._renderUiElements(self.settings.prevButton, ".sequence-prev"); //set up the previous button
			self.pauseButton = self._renderUiElements(self.settings.pauseButton, ".sequence-pause"); //set up the pause button
			self.pagination = self._renderUiElements(self.settings.pagination, ".sequence-pagination"); //set up the pagination

			if((self.nextButton !== undefined && self.nextButton !== false) && self.settings.showNextButtonOnInit === true){self.nextButton.show();} //if using a next button, show it
			if((self.prevButton !== undefined && self.prevButton !== false) && self.settings.showPrevButtonOnInit === true){self.prevButton.show();} //if using a previous button, show it
			if((self.pauseButton !== undefined && self.pauseButton !== false) && self.settings.showPauseButtonOnInit === true){self.pauseButton.show();} //if using a pause button, show it

			if(self.settings.pauseIcon !== false) {
				self.pauseIcon = self._renderUiElements(self.settings.pauseIcon, ".sequence-pause-icon");
				if(self.pauseIcon !== undefined) {
					self.pauseIcon.hide();
				}
			}else{
				self.pauseIcon = undefined;
			}

			if(self.pagination !== undefined && self.pagination !== false) {
				self.paginationLinks = self.pagination.children(); //get each pagination link

				self.paginationLinks.on('click.sequence', function() { //when a pagination link is clicked...
					var associatedFrameNumber = $(this).index() + 1; //get the number of the frame this link is associated with
					self.goTo(associatedFrameNumber); //go to the associate frame
				});

				if(self.settings.showPaginationOnInit === true) {
					self.pagination.show();
				}
			}

			self.nextFrameID = self.settings.startingFrameID;

			if(self.settings.hashTags === true) { //if using hashtags...
				self.frames.each(function() { //for each frame...
					self.frameHashID.push($(this).prop(self.getHashTagFrom)); //add the hashtag to an array
				});

				self.currentHashTag = location.hash.replace("#", ""); //get the current hashtag
				if(self.currentHashTag === undefined || self.currentHashTag === "") { //if there is no hashtag...
					self.nextFrameID = self.settings.startingFrameID; //use the startingFrameID
				}else{
					self.frameHashIndex = $.inArray(self.currentHashTag, self.frameHashID); //get the index of the frame that matches the hashtag
					if(self.frameHashIndex !== -1){  //if the hashtag matches a Sequence frame ID...
						self.nextFrameID = self.frameHashIndex + 1; //use the frame associated to the hashtag
					}else{
						self.nextFrameID = self.settings.startingFrameID; //use the startingFrameID
					}
				}
			}

			self.nextFrame = self.frames.eq(self.nextFrameID-1); //get the next frame
			self.nextFrameChildren = self.nextFrame.children(); //get the elements within the next frame to be animated

			if(self.pagination !== undefined) { //if using pagination, make the starting frame the current one in pagination
				$(self.paginationLinks[self.settings.startingFrameID-1]).addClass('current'); //add the 'current' class to the current frame
			}

			if(self.transitionsSupported) { //initiate the full featured Sequence if transitions are supported...
				if(!self.settings.animateStartingFrameIn) { //start first frame in animated in position
					self.currentFrameID = self.nextFrameID;

					if(self.settings.moveActiveFrameToTop) {
						self.nextFrame.css('z-index', self.numberOfFrames);
					}

					self._resetElements(self.transitionPrefix, self.nextFrameChildren, "0s");
					self.nextFrame.addClass("animate-in");
					if(self.settings.hashTags && self.settings.hashChangesOnFirstFrame) {
						self.currentHashTag = self.nextFrame.prop(self.getHashTagFrom);
						document.location.hash = "#"+self.currentHashTag;
					}

					setTimeout(function() {
						self._resetElements(self.transitionPrefix, self.nextFrameChildren, "");
					}, 100);

					self._resetAutoPlay(true, self.settings.autoPlayDelay);
				}else if(self.settings.reverseAnimationsWhenNavigatingBackwards && self.settings.autoPlayDirection -1 && self.settings.animateStartingFrameIn) { //animate in backwards
					self._resetElements(self.transitionPrefix, self.nextFrameChildren, "0s");
					self.nextFrame.addClass("animate-out");
					self.goTo(self.nextFrameID, -1, true);
				}else{ //animate in forwards
					self.goTo(self.nextFrameID, 1, true);
				}
			}else{ //initiate a basic slider for browsers that don't support CSS3 transitions
				self.container.addClass("sequence-fallback");
				self.currentFrameID = self.nextFrameID;
				if(self.settings.hashTags && self.settings.hashChangesOnFirstFrame){
					self.currentHashTag = self.nextFrame.prop(self.getHashTagFrom);
					document.location.hash = "#"+self.currentHashTag;
				}

				self.frames.addClass("animate-in"); //move each frame into its animate-in position
				self.frames.not(':eq('+(self.nextFrameID-1)+')').css({"display": "none", "opacity": 0}); //set all frames (except the next one) to display: none, opacity: 0
				self._resetAutoPlay(true, self.settings.autoPlayDelay);
			}
			//END INIT
			//EVENTS
			if(self.nextButton !== undefined) { //if a next button is defined...
				self.nextButton.bind('click.sequence', function() { //when the next button is clicked...
					self.next(); //go to the next frame
				});
			}

			if(self.prevButton !== undefined) { //if a previous button is defined...
				self.prevButton.bind('click.sequence', function() { //when the previous button is clicked...
					self.prev(); //go to the previous frame
				});
			}

			if(self.pauseButton !== undefined) { //if a pause button is defined...
				self.pauseButton.bind('click.sequence', function() { //when the pause button is clicked...
					self.pause(true); //pause Sequence and set hardPause to true
				});
			}

			function keyEvents(keyPressed, keyDirections) {
				var keyCode;
				var keyCodes;

				for(keyCodes in keyDirections) {
					if(keyCodes === "left" || keyCodes === "right") {
						keyCode = defaultKeys[keyCodes];
					}else{
						keyCode = keyCodes;
					}

					if(keyPressed === parseFloat(keyCode)) { //if the key pressed is associated with a function...
						self._initCustomKeyEvent(keyDirections[keyCodes]); //initiate the function
					}
				}
			}

			if(self.settings.keyNavigation) {
				var defaultKeys = {
					'left'	: 37,
					'right'	: 39
				};

				$(document).bind('keydown.sequence', function(e) { //when a key is pressed...
					var keyCodeChar = String.fromCharCode(e.keyCode);
					if((keyCodeChar > 0 && keyCodeChar <= self.numberOfFrames) && (self.settings.numericKeysGoToFrames)) {
						self.nextFrameID = keyCodeChar;
						self.goTo(self.nextFrameID); //go to specified frame
					}

					keyEvents(e.keyCode, self.settings.keyEvents); //run default keyevents
					keyEvents(e.keyCode, self.settings.customKeyEvents); //run custom keyevents
				});
			}
			
			self.canvas.on({
				'mouseenter.sequence': function() { //when the mouse enter the Sequence element...
					if(self.settings.pauseOnHover && self.settings.autoPlay && !self.hasTouch) { //if using pauseOnHover and autoPlay on non touch devices
						self.isBeingHoveredOver = true;
						if(!self.isHardPaused) { //if Sequence is hard paused (via a pause button)...
							self.pause(); //pause autoPlay
						}
					}
				},
				'mouseleave.sequence': function() { //when the mouse leaves the Sequence element...
					if(self.settings.pauseOnHover && self.settings.autoPlay && !self.hasTouch) { //if using pauseOnHover and autoPlay on non touch devices
						self.isBeingHoveredOver = false;
						if(!self.isHardPaused) { //if Sequence is not hard paused (via a pause button)...
							self.unpause(); //unpause autoPlay
						}
					}
				}
			});

			if(self.settings.hashTags) { //if hashchange is enabled in the settings...
				$(window).bind('hashchange.sequence', function() { //when the hashtag changes...
					var newTag = location.hash.replace("#", ""); //grab the new hashtag

					if(self.currentHashTag !== newTag) { //if the last hashtag is not the same as the current one...
						self.currentHashTag = newTag; //save the new tag
						self.frameHashIndex = $.inArray(self.currentHashTag, self.frameHashID); //get the index of the frame that matches the hashtag
						if(self.frameHashIndex !== -1) { //if the hashtag matches a Sequence frame ID...
							self.nextFrameID = self.frameHashIndex + 1; //set that frame as the next one
								self.goTo(self.nextFrameID); //go to the next frame
							}
						}
					});
			}

			function cancelTouch() {
				self.canvas.on("touchmove.sequence", onTouchMove);
				startX = null;
				isMoving = false;
			}

			function onTouchMove(e) {
				if(self.settings.swipePreventsDefault) {
					e.preventDefault();
				}
				if(isMoving) {
					var x = e.originalEvent.touches[0].pageX;
					var y = e.originalEvent.touches[0].pageY;
					var dx = startX - x;
					var dy = startY - y;
					if(Math.abs(dx) >= self.settings.swipeThreshold) {
						cancelTouch();
						if(dx > 0) {
							self._initCustomKeyEvent(self.settings.swipeEvents.left);
						}else{
							self._initCustomKeyEvent(self.settings.swipeEvents.right);
						}
					}else if(Math.abs(dy) >= self.settings.swipeThreshold) {
						cancelTouch();
						if(dy > 0) {
							self._initCustomKeyEvent(self.settings.swipeEvents.down);
						}else{
							self._initCustomKeyEvent(self.settings.swipeEvents.up);
						}
					}
				}
			}

			function onTouchStart(e) {
				if(e.originalEvent.touches.length === 1) {
					startX = e.originalEvent.touches[0].pageX;
					startY = e.originalEvent.touches[0].pageY;
					isMoving = true;
					self.canvas.on("touchmove.sequence", onTouchMove);
				}
			}

			if(self.settings.swipeNavigation && self.hasTouch) { //if using swipeNavigation and the device has touch capabilities...
				//jQuery TouchWipe v1.1.1 (http://www.netcu.de/jquery-touchwipe-iphone-ipad-library)
				var startX;
				var startY;
				var isMoving = false;

				self.canvas.on("touchstart.sequence", onTouchStart);
			}
			//END EVENTS
		}
	} //END CONSTRUCTOR

	Sequence.prototype = {

		//PUBLIC METHODS
		/*
		start autoPlay -- causing Sequence to automatically change frame every x amount of milliseconds
		
		delay: a time in ms before starting the autoPlay feature (if unspecified, the default will be used)
		*/
		startAutoPlay: function(delay) {
			var self = this;
			delay = (delay === undefined) ? self.settings.autoPlayDelay : delay; //if a delay isn't specified, use the default
			self.unpause();

			self._resetAutoPlay(); //stop autoPlay before starting it again
			self.autoPlayTimer = setTimeout(function() { //start a new autoPlay timer and...
				if(self.settings.autoPlayDirection === 1) { //go to either the next or previous frame
					self.next();
				}else{
					self.prev();
				}
			}, delay); //after a specified delay
		},

		//stop causing Sequence to automatically change frame every x amount of seconds
		stopAutoPlay: function() {
			var self = this;
			self.pause(true);
			clearTimeout(self.autoPlayTimer); //stop the autoPlay timer
		},

		/*
		Toggle startAutoPlay (unpausing autoPlay) and stopAutoPlay (pausing autoPlay)

		hardPause: if true, Sequence's pauseOnHover will not execute. Useful for pause buttons.

		Note: Sequence 0.7.3 and below didn't have an .unpause() function -- .pause() would pause/unpause
		based on the current state. .unpause() is now included for clarity but the .pause() function will
		still toggle between paused and unpaused states.
		*/
		pause: function(hardPause) {
			var self = this;
			if(!self.isSoftPaused) { //if pausing Sequence...
				if(self.pauseButton !== undefined) { //if a pause button is defined...
					self.pauseButton.addClass("paused"); //add the class of "paused" to the pause button
					if(self.pauseIcon !== undefined) { //if a pause icon is defined...
						self.pauseIcon.show(); //show the pause icon
					}
				}
				self.paused(); //callback when Sequence is paused
				self.isSoftPaused = true;
				self.isHardPaused = (hardPause) ? true : false; //if hardPausing, set hardPause to true
				self.isPaused = true;
				self._resetAutoPlay(); //stop autoPlay
			}else{ //if unpausing Sequence...
				self.unpause();
			}
		},

		/*
		Start the autoPlay feature, as well as deal with any changes to pauseButtons, pauseIcons and public variables etc
		
		callback: if false, the unpause callback will not be initiated (this is because unpause is used internally during the stop and start of each frame)
		*/
		unpause: function(callback) {
			var self = this;
			if(self.pauseButton !== undefined) { //if a pause button is defined...
				self.pauseButton.removeClass("paused"); //remove the class of "paused" from the pause button
				if(self.pauseIcon !== undefined) { //if a pause icon is defined...
					self.pauseIcon.hide(); //hide the pause icon
				}
			}

			self.isSoftPaused = false;
			self.isHardPaused = false;
			self.isPaused = false;

			if(!self.active) {
				if(callback !== false) {
					self.unpaused(); //callback when Sequence is unpaused
				}
				self._resetAutoPlay(true, self.settings.unpauseDelay); //start autoPlay after a delay specified via the unpauseDelay setting
			}else{
				self.delayUnpause = true; //Sequence is animating so delay the unpause event until the animation completes
			}
		},

		//Go to the frame ahead of the current one
		next: function() {
			var self = this;
			id = (self.currentFrameID !== self.numberOfFrames) ? self.currentFrameID + 1 : 1; //work out the next frame ID
			if(self.active === false || self.active === undefined) { //if Sequence isn't currently animating...
				self.goTo(id, 1); //go to the next frame
			}else{ //if Sequence is currently animating...
				self.goTo(id, 1, true); //go immediately to the next frame (ignoring the transition threshold)
			}
		},

		//Go to the frame prior to the current one
		prev: function() {
			var self = this;
			id = (self.currentFrameID === 1) ? self.numberOfFrames : self.currentFrameID - 1; //work out the prev frame ID
			if(self.active === false || self.active === undefined) { //if Sequence isn't currently animating...
				self.goTo(id, -1); //go to the prev frame
			}else{ //if Sequence is currently animating...
				self.goTo(id, -1, true); //go immediately to the prev frame (ignoring the transition threshold)
			}
		},

		/*
		Go to a specific frame
		
		id: number of the frame to go to
		direction: direction to get to that frame (1 = forward, -1 = reverse)
		ignoreTransitionThreshold: if true, ignore the transitionThreshold setting and immediately go to the specified frame
		*/
		goTo: function(id, direction, ignoreTransitionThreshold) {
			var self = this;
			self.nextFrameID = parseFloat(id);
			var transitionThreshold = (ignoreTransitionThreshold === true) ? 0 : self.settings.transitionThreshold; //if transitionThreshold is to be ignored, set it to zero

			if((self.nextFrameID === self.currentFrameID) //if the next frame the user is trying to go to is the same as the currently active one...
			|| (self.settings.navigationSkip && self.navigationSkipThresholdActive) //or navigationSkip is enabled and the navigationSkipThreshold is active (which prevents frame from being navigated too fast)...
			|| (!self.settings.navigationSkip && self.active) //or navigationSkip is disbaled but Sequence is animating...
			|| (!self.transitionsSupported && self.active) //or Sequence is in fallback mode and Sequence is animating...
			|| (!self.settings.cycle && direction === 1 && self.currentFrameID === self.numberOfFrames) //or cycling is disabled, the user is navigating forward and this is the last frame...
			|| (!self.settings.cycle && direction === -1 && self.currentFrameID === 1) //or cycling is disabled, the user is navigating backwards and this is the first frame...
			|| (self.settings.preventReverseSkipping && self.direction !== direction && self.active)) { //or Sequence is animating and the user is trying to change the direction of navigation...
				return false; //don't go to another frame
			}else if(self.settings.navigationSkip && self.active) { //if navigationSkip is enabled and Sequence is animating (a frame is being skipped before it has finished animating)...
				self.navigationSkipThresholdActive = true; //the navigationSkipThreshold is now active
				if(self.settings.fadeFrameWhenSkipped) { //if a frame should fade when skipped...
					self.nextFrame.stop().animate({"opacity": 0}, self.settings.fadeFrameTime); //fade
				}

				clearTimeout(self.transitionThresholdTimer);

				setTimeout(function() { //start the navigationSkipThreshold timer to prevent being able to navigate too quickly
					self.navigationSkipThresholdActive = false; //once the timer is complete, navigationSkip can occur again
				}, self.settings.navigationSkipThreshold);
			}

			if(!self.active || self.settings.navigationSkip) { //if there are no animations running or navigationSkip is enabled...
				self.active = true; //Sequence is now animating
				self._resetAutoPlay(); //stop any autoPlay timer that may be running

				if(direction === undefined) { //if no direction to navigate was defined...
					self.direction = (self.nextFrameID > self.currentFrameID) ? 1 : -1; //work out which way to go based on what frame is currently active
				}else{
					self.direction = direction; //go to the developer defined frame
				}

				self.currentFrame = self.canvas.children(".animate-in"); //find which frame is active -- the frame currently being viewed (and about to be animated out)
				self.nextFrame = self.frames.eq(self.nextFrameID-1); //grab the next frame
				self.currentFrameChildren = self.currentFrame.children();	//save the child elements of the current frame
				self.nextFrameChildren = self.nextFrame.children(); //save the child elements of the next frame

				if(self.pagination !== undefined) { //if using pagination...
					self.paginationLinks.removeClass('current'); //remove the 'current' class from all pagination links
					$(self.paginationLinks[self.nextFrameID-1]).addClass('current'); //add the 'current' class to the current frame
				}

				if(self.transitionsSupported) { //if the browser supports CSS3 transitions...
					if(self.currentFrame.length !== undefined) { //if there is a current frame (one that is in it's animate-in position)...
						self.beforeCurrentFrameAnimatesOut(); //callback
						if(self.settings.moveActiveFrameToTop) { //if the active frame should move to the top...
							self.currentFrame.css("z-index", 1); //move this frame to the bottom as it is now inactive
						}
						self._resetElements(self.transitionPrefix, self.nextFrameChildren, "0s"); //give the next frame elements a transition-duration and transition-delay of 0s so they don't transition to their reset position
						if(!self.settings.reverseAnimationsWhenNavigatingBackwards || self.direction === 1) { //if user hit next button...
							self.nextFrame.removeClass("animate-out"); //reset the next frame back to its starting position
							self._resetElements(self.transitionPrefix, self.currentFrameChildren, "");  //remove any inline styles from the elements to be animated so styles via the "animate-out" class can take full effect
						}else if(self.settings.reverseAnimationsWhenNavigatingBackwards && self.direction === -1) { //if the user hit prev button
							self.nextFrame.addClass("animate-out"); //reset the next frame back to its animate-out position
							self._reverseTransitionProperties(); //reverse the transition-duration, transition-delay and transition-timing-function
						}
					}else{
						self.isStartingFrame = false; //no longer the first frame
					}

					self.active = true; //Sequence is now animating
					self.currentFrame.unbind(self.transitionEnd); //remove the animation end event
					self.nextFrame.unbind(self.transitionEnd); //remove the animation end event

					if(self.settings.fadeFrameWhenSkipped && self.settings.navigationSkip) { //if a frame may have faded out when it was previously skipped...
						self.nextFrame.css("opacity", 1); //show it again
					}

					self.beforeNextFrameAnimatesIn(); //callback
					if(self.settings.moveActiveFrameToTop) { //if an active frame should be moved to the top...
						self.nextFrame.css('z-index', self.numberOfFrames);
					}

					//modifications to the current and next frame's elements to get them ready to animate
					if(!self.settings.reverseAnimationsWhenNavigatingBackwards || self.direction === 1) { //if user hit next button...
						setTimeout(function() { //50ms timeout to give the browser a chance to modify the DOM sequentially
							self._resetElements(self.transitionPrefix, self.nextFrameChildren, ""); //remove any inline styles from the elements to be animated so styles via the "animate-in" class can take full effect
							self._waitForAnimationsToComplete(self.nextFrame, self.nextFrameChildren, "in"); //wait for the next frame to animate in
							if(self.afterCurrentFrameAnimatesOut !== "function () {}" || (self.settings.transitionThreshold === true && ignoreTransitionThreshold !== true)) { //if the afterCurrentFrameAnimatesOut is being used...
								self._waitForAnimationsToComplete(self.currentFrame, self.currentFrameChildren, "out", true, 1); //wait for the current frame to animate out as well
							}
						}, 50);

						//final class changes to make animations happen
						setTimeout(function() { //50ms timeout to give the browser a chance to modify the DOM sequentially
							if(self.settings.transitionThreshold === false || self.settings.transitionThreshold === 0 || ignoreTransitionThreshold === true) { //if not using a transitionThreshold...
								self.currentFrame.toggleClass("animate-out animate-in"); //remove the "animate-in" class and add the "animate-out" class to the current frame
								self.nextFrame.addClass("animate-in"); //add the "animate-in" class
							}else { //if using a transitionThreshold...
								self.currentFrame.toggleClass("animate-out animate-in"); //remove the "animate-in" class and add the "animate-out" class to the current frame
								if(self.settings.transitionThreshold !== true) { //if there's no transitionThreshold or the dev specified a transitionThreshold in milliseconds
									self.transitionThresholdTimer = setTimeout(function() { //cause the next frame to animate in after a certain period
										self.nextFrame.addClass("animate-in"); //add the "animate-in" class
									}, transitionThreshold);
								}
							}
						}, 50);
					}else if(self.settings.reverseAnimationsWhenNavigatingBackwards && self.direction === -1) { //if the user hit prev button
						setTimeout(function() { //50ms timeout to give the browser a chance to modify the DOM sequentially
							//remove any inline styles from the elements so styles via the "animate-in" and "animate-out" class can take full effect
							self._resetElements(self.transitionPrefix, self.currentFrameChildren, "");
							self._resetElements(self.transitionPrefix, self.nextFrameChildren, "");
							self._reverseTransitionProperties(); //reverse the transition-duration, transition-delay and transition-timing-function

							self._waitForAnimationsToComplete(self.nextFrame, self.nextFrameChildren, "in"); //wait for the next frame to animate in
							if(self.afterCurrentFrameAnimatesOut !== "function () {}" || (self.settings.transitionThreshold === true && ignoreTransitionThreshold !== true)) { //if the afterCurrentFrameAnimatesOut is being used...
								self._waitForAnimationsToComplete(self.currentFrame, self.currentFrameChildren, "out", true, -1); //wait for the current frame to animate out as well
							}
						}, 50);

						//final class changes to make animations happen
						setTimeout(function() { //50ms timeout to give the browser a chance to modify the DOM sequentially
							if(self.settings.transitionThreshold === false || self.settings.transitionThreshold === 0 || ignoreTransitionThreshold === true) { //if not using a transitionThreshold...
								self.currentFrame.removeClass("animate-in"); //remove the "animate-in" class from the current frame
								self.nextFrame.toggleClass("animate-out animate-in"); //add the "animate-out" class and remove the "animate-in" class from the next frame
							}else{ //if using a transitionThreshold...
								self.currentFrame.removeClass("animate-in");
								if(self.settings.transitionThreshold !== true) { //if there's no transitionThreshold or the dev specified a transitionThreshold in milliseconds
									self.transitionThresholdTimer = setTimeout(function() { //cause the next frame to animate in after a certain period
										self.nextFrame.toggleClass("animate-out animate-in"); //add the "animate-in" class and remove the "animate-out" class
									}, transitionThreshold);
								}
							}
						}, 50);
					}
				}else{ //if the browser doesn't support CSS3 transitions...
					function animationComplete() {
						self._setHashTag();
						self.active = false;
						self._resetAutoPlay(true, self.settings.autoPlayDelay);
					}

					switch(self.settings.fallback.theme) {
						case "fade": //if using the fade fallback theme...
							self.frames.css({"position": "relative"}); //this allows for fadein/out in IE
							self.beforeCurrentFrameAnimatesOut();
							self.currentFrame = self.frames.eq(self.currentFrameID-1);
							self.currentFrame.animate({"opacity": 0}, self.settings.fallback.speed, function() { //hide the current frame
								self.currentFrame.css({"display": "none", "z-index": "1"});
								self.afterCurrentFrameAnimatesOut();
								self.beforeNextFrameAnimatesIn();
								self.nextFrame.css({"display": "block", "z-index": self.numberOfFrames}).animate({"opacity": 1}, 500, function() {
									self.afterNextFrameAnimatesIn();
								}); //make the next frame the current one and show it
								animationComplete();
							});

							self.frames.css({"position": "relative"}); //this allows for fadein/out in IE
						break;

						case "slide": //if using the slide fallback theme...
						default:
							//create objects which will save the .css() and .animation() objects
							var animateOut = {};
							var animateIn = {};
							var moveIn = {};

							//construct the .css() and .animation() objects
							if(self.direction === 1) {
								animateOut.left = "-100%";
								animateIn.left = "100%";
							}else{
								animateOut.left = "100%";
								animateIn.left = "-100%";
							}

							moveIn.left = "0";
							moveIn.opacity = 1;

							self.currentFrame = self.frames.eq(self.currentFrameID-1);
							self.beforeCurrentFrameAnimatesOut();
							self.currentFrame.animate(animateOut, self.settings.fallback.speed, function() {
								self.currentFrame.css({"display": "none", "z-index": "1"});
								self.afterCurrentFrameAnimatesOut();
							}); //cause the current frame to animate out
							self.beforeNextFrameAnimatesIn(); //callback
							self.nextFrame.show().css(animateIn);
							self.nextFrame.css({"display": "block", "z-index": self.numberOfFrames}).animate(moveIn, self.settings.fallback.speed, function() { //cause the next frame to animate in
								animationComplete();
								self.afterNextFrameAnimatesIn(); //callback
							});
						break;
					}
				}
				self.currentFrameID = self.nextFrameID; //make the currentFrameID the same as the one that is to animate in
			}
		},

		/* 
			removes Sequence from the element it's attached to

			callback: a callback to run once .destroy() has finished (or see the sequence.destroyed() callback)
		*/
		destroy: function(callback) {
			var self = this;

			self.container.addClass('sequence-destroyed'); //add a class of "destroyed" in case the developer wants to animate opacity etc

			//REMOVE EVENTS
			if(self.nextButton !== undefined) { //remove the next button click event if a next button is defined
				self.nextButton.unbind('click.sequence');
			}
			if(self.prevButton !== undefined) { //remove the previous button click event if a previous button is defined
				self.prevButton.unbind('click.sequence');
			}
			if(self.pauseButton !== undefined) { //remove the pause button click event if a pause button is defined
				self.pauseButton.unbind('click.sequence');
			}

			if(self.pagination !== undefined) {
				self.paginationLinks.unbind('click.sequence');
			}

			$(document).unbind('keydown.sequence'); //unbind key events
			self.canvas.unbind('mouseenter.sequence, mouseleave.sequence, touchstart.sequence, touchmove.sequence'); //unbind mouse and touch events
			$(window).unbind('hashchange.sequence'); //unbind hashchange

			//CLEAR TIMERS
			self.stopAutoPlay();
			clearTimeout(self.transitionThresholdTimer);

			//TIDY UP THE DOM
			self.canvas.children('li').remove(); //because Sequence rearranges frames so the active one is always on top, remove them all...
			self.canvas.prepend(self.frames); //then add them back in, in their original order
			self.frames.removeClass('animate-in animate-out').removeAttr('style'); //remove classes and inline styles from all frames
			self.frames.eq(self.currentFrameID-1).addClass('animate-in'); //keep the current frame in it's animate-in position

			//HIDE UI ELEMENTS
			if(self.nextButton !== undefined && self.nextButton !== false) { //if a next button is defined and was shown on initiation, hide it
				self.nextButton.hide();
			}
			if(self.prevButton !== undefined && self.prevButton !== false) { //if a prev button is defined and was shown on initiation, hide it
				self.prevButton.hide();
			}
			if(self.pauseButton !== undefined && self.pauseButton !== false) { //if a pause button is defined and was shown on initiation, hide it
				self.pauseButton.hide();
			}
			if(self.pauseIcon !== undefined && self.pauseIcon !== false) { //if a pause icon is defined, hide it
				self.pauseIcon.hide();
			}
			if(self.pagination !== undefined && self.pagination !== false) { //if pagination is defined and was shown on initiation, hide it
				self.pagination.hide();
			}

			//CALLBACKS - a callback can either be passed into the destroy() function or by using the sequence.destroyed() publc method
			if(callback !== undefined) {
				callback(); //callback past into the function
			}

			self.destroyed(); //callback
			self.container.removeData(); //remove data
		},
		//END PUBLIC METHODS

		//PRIVATE METHODS

		//trigger keyEvents, customKeyEvents and swipeEvents
		_initCustomKeyEvent: function(event) {
			var self = this;

			switch(event) {
				case "next":
				self.next();
				break;
				case "prev":
				self.prev();
				break;
				case "pause":
				self.pause(true);
				break;
			}
		},

		/*
		reset the transition-duration and transition-delay properties of an element
		
		elementToReset = the element that is to have it's properties reset
		cssValue = the value to be given to the transition-duration and transition-delay properties
		*/
		_resetElements: function(prefix, elementToReset, cssValue) {
			var self = this;

			elementToReset.css(
				self._prefixCSS(prefix, {
					"transition-duration": cssValue,
					"transition-delay": cssValue,
					"transition-timing-function": ""
				})
			);
		},

		/*
		when navigating backwards and reverseAnimationsWhenNavigatingBackwards is true, take the transition properties for forward animation and manipulate the animated elements to create a perfect reversal
		*/
		_reverseTransitionProperties: function() {
			var self = this;

			var currentFrameChildrenDurations = []; //saves the duration for each of the current frame's element
			var nextFrameChildrenDurations = []; //saves the duration for each of the next frame's element

			self.currentFrameChildren.each(function() { //get the overall duration (including delay) for each animated element in the current frame
				currentFrameChildrenDurations.push(parseFloat($(this).css(self.transitionPrefix+'transition-duration').replace('s', '')) + parseFloat($(this).css(self.transitionPrefix+'transition-delay').replace('s', '')));
			});

			self.nextFrameChildren.each(function() { //get the overall duration (including delay) for each animated element in the current frame
				nextFrameChildrenDurations.push(parseFloat($(this).css(self.transitionPrefix+'transition-duration').replace('s', '')) + parseFloat($(this).css(self.transitionPrefix+'transition-delay').replace('s', '')));
			});

			var maximumCurrentFrameDuration = Math.max.apply(Math, currentFrameChildrenDurations); //find which transition duration is the longest
			var maximumNextFrameDuration = Math.max.apply(Math, nextFrameChildrenDurations); //find which transition duration is the longest
			var transitionDifference = maximumCurrentFrameDuration - maximumNextFrameDuration; //get the overal transition difference between the current and next frame
			var currentDelay = 0;
			var nextDelay = 0;

			if(transitionDifference < 0 && !self.settings.preventDelayWhenReversingAnimations) { //if the current frame has a greater duration than the next frame...
				/* note: because the current frame will take longer to animate out than the next to animate in, when this animation is reversed, the current frame will have a delay applied before it animates out. By default, Sequence will aim to avoid this (via the preventDelayWhenReversingAnimations option) because a delay on the current frame may confuse the user. The delay is removed, which means the reversal of animation is slightly out of sync */
				currentDelay = Math.abs(transitionDifference);
			}else if(transitionDifference > 0) { //if the next frame has a greater duration than the current frame, add the difference on as a delay
				nextDelay = Math.abs(transitionDifference);
			}

			var reverseEachProperty = function(transitionProperties, currentFrameChildren, maximumFrameDuration, frameDelay) {

				function convertTimingFunctionToCubicBezier(timingFunction) {

					timingFunction = timingFunction.split(',')[0]; //only use one timing function

					var timingFunctionToCubicBezier = {
					    "linear" : "cubic-bezier(0.0,0.0,1.0,1.0)",
					    "ease"   : "cubic-bezier(0.25, 0.1, 0.25, 1.0)",
					    "ease-in": "cubic-bezier(0.42, 0.0, 1.0, 1.0)",
					    "ease-in-out": "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
					    "ease-out": "cubic-bezier(0.0, 0.0, 0.58, 1.0)"
					};

					if(timingFunction.indexOf("cubic-bezier") < 0) { //if the timing-function returned isn't a cubic-bezier()
					  timingFunction = timingFunctionToCubicBezier[timingFunction]; //convert it to one
					}

					return timingFunction; //return a cubic-bezier()
				}

				currentFrameChildren.each(function() {

					var duration = parseFloat($(this).css(self.transitionPrefix+'transition-duration').replace('s', '')); //get the elements transition-duration
					var delay = parseFloat($(this).css(self.transitionPrefix+'transition-delay').replace('s', '')); //get the elements transition-delay
					var transitionFunction = $(this).css(self.transitionPrefix+'transition-timing-function'); //get the elements transiion-timing-function
					
					if(transitionFunction.indexOf('cubic') === -1) { //if the function isn't a cubic-bezier (the Blink engine returns keywords instead)...
						var transitionFunction = convertTimingFunctionToCubicBezier(transitionFunction); //convert the keyword to cubic-bezier()
					}

					if (self.settings.reverseEaseWhenNavigatingBackwards) {
						var cubicBezier = transitionFunction.replace('cubic-bezier(', '').replace(')', '').split(','); //remove the CSS function and just get the array
						$.each(cubicBezier, function(index, value) { //for each point that makes up the cubic bezier...
							cubicBezier[index] = parseFloat(value); //turn the point into a number (rather than text)
						});

						//reverse the cubic bezier
						var reversedCubicBezier = [
						1 - cubicBezier[2],
						1 - cubicBezier[3],
						1 - cubicBezier[0],
						1 - cubicBezier[1]
						];
						transitionFunction = 'cubic-bezier('+reversedCubicBezier+')'; //add the reversed cubic bezier back into a CSS function
					}

					var frameDuration = duration + delay; //get the overall duration of the element

					transitionProperties["transition-duration"] = duration + 's'; //reapply the element's transition-duration (to override any inline styles)
					transitionProperties["transition-delay"] = (maximumFrameDuration - frameDuration + frameDelay) + 's'; //add a delay if required
					transitionProperties["transition-timing-function"] = transitionFunction; //reapply the reversed transition function
					$(this).css(
						self._prefixCSS(self.transitionPrefix, transitionProperties) //set the new transition properties
						);
				});
			};

			reverseEachProperty(self.transitionProperties, self.currentFrameChildren, maximumCurrentFrameDuration, currentDelay); //reverse properties for each of the current frame's elements
			reverseEachProperty(self.transitionProperties, self.nextFrameChildren, maximumNextFrameDuration, nextDelay); //reverse properties for each of the next frame's elements
		},

		/*
		adds the browser vendors prefix onto multiple CSS properties
		
		prefix = the prefix for the browser Sequence is being viewed in (-webkit- for example)
		properties = the properties to be prefixed (transition-duration for example)
		*/
		_prefixCSS: function(prefix, properties) {
			var self = this;

			var css = {};
			for(var property in properties) { //for each property to be modified...
				css[prefix + property] = properties[property]; //add the prefix to the property name
			}
			return css; //return the prefixed CSS
		},

		/*
		internal function used to start and stop autoPlay
		start: if true, autoPlay will be started, else it'll be stopped
		delay: a time in ms before starting the autoPlay feature (if unspecified, the default will be used)
		*/
		_resetAutoPlay: function(start, delay) {
			var self = this;

			if(start === true) { //if starting autoPlay
				if(self.settings.autoPlay && !self.isSoftPaused) { //if using autoPlay and Sequence isn't paused...
					clearTimeout(self.autoPlayTimer); //stop the autoPlay timer
					self.autoPlayTimer = setTimeout(function() { //start a new autoPlay timer and...
						if(self.settings.autoPlayDirection === 1) { //go to either the next or previous frame
							self.next();
						}else{
							self.prev();
						}
					}, delay); //after a specified delay
				}
			}else{ //if stopping autoPlay
				clearTimeout(self.autoPlayTimer); //stop the autoPlay timer
			}
		},

		/*functionality to initiate the preloader, next/previous buttons and so on
	
		devOption: true = the developer wants to use the default selector. false = don't use a uiElement. string = the developer defined selector to use for the UI element
		defaultOption: the default selector to use for the UI element, when the developer specifies false for devOption
		*/
		_renderUiElements: function(devOption, defaultOption) {
			var self = this;

			switch(devOption) {
				case false: //don't set up a uiElement
				return undefined;

				case true: //use the default uiElement
					if(defaultOption === ".sequence-preloader") { //if setting up the preloader...
						self._defaultPreloader(self.container, self.transitionsSupported, self.animationPrefix); //get the default preloader
					}
					return $(defaultOption, self.container); //return the default element

				default: //if using a developer defined selector...
					return $(devOption, self.container); //return the developer defined element
			}
		},

		/*
		prevents the next frame from animating until the current frame has finished animating

		frame: the frame <li> which is animating
		self.currentFrameChildren: the animated direct child elements of the frame
		transitionPhase: whether the elements are animating "in" to an active position or "out" of an active position
		inAfterwards: whether the next frame should animate in afterwards
		direction: the direction of animation
		*/
		_waitForAnimationsToComplete: function(frame, currentFrameChildren, transitionPhase, inAfterwards, direction) {
			var self = this;

			if(transitionPhase === "out") { //if waiting on a frame's element to animate out...
				var onceComplete = function() {
					self.afterCurrentFrameAnimatesOut(); //callback

					if(self.settings.transitionThreshold === true) {
						if(direction === 1) {
							self.nextFrame.addClass("animate-in"); //add the "animate-in" class
						}else if(direction === -1) {
							self.nextFrame.toggleClass("animate-out animate-in");
						}
					}
				};
			}else if(transitionPhase === "in") { //if waiting on a frame's element to animate in...
				var onceComplete = function() {
					self.afterNextFrameAnimatesIn(); //callback
					self._setHashTag(); //set the hashtag to represent the newly active frame

					self.active = false; //Sequence is not animating

					if(!self.isHardPaused && !self.isBeingHoveredOver) { //if Sequence isn't hard paused (via a pause button for example) or being hovered over...
						if(!self.delayUnpause) { //if unpausing isn't delayed (Sequence wasn't animating when unpause was invoked)...
							self.unpause(false); //unpause Sequence but don't run the unpause callback
						}else{ //if unpausing was delay because Sequence was animating when unpause was invoked...
							self.delayUnpause = false;
							self.unpause(); //unpause Sequence
						}
					}
				};
			}

			currentFrameChildren.data('animationEnded', false); // set the data attribute of each animated element to indicate that the animation has not yet ended
			frame.bind(self.transitionEnd, function(e) { //when an element finishes animating...
				$(e.target).data('animationEnded', true); // set the data attrbiute to indicate that the element has finished it's animation

				// now check if all elements have finished animating
				var allAnimationsEnded = true;
				currentFrameChildren.each(function() { //for each element being animated within a frame...
					if($(this).data('animationEnded') === false) { //if the animation hasn't ended...
						allAnimationsEnded = false; //not all animations have ended yet
						return false; //break out of the animationEnded check early
					}
				});

				if(allAnimationsEnded) { //if all animations have ended...
					frame.unbind(self.transitionEnd); //stop waiting for animations to end
					onceComplete();
				}
			});
		},

		_setHashTag: function() {
			var self = this;

			if(self.settings.hashTags) { //if hashTags is enabled...
				self.currentHashTag = self.nextFrame.prop(self.getHashTagFrom); //get the hashtag name
				self.frameHashIndex = $.inArray(self.currentHashTag, self.frameHashID); //get the index of the frame that matches the hashtag
				if(self.frameHashIndex !== -1 && (self.settings.hashChangesOnFirstFrame || (!self.isStartingFrame || !self.transitionsSupported))) { //if the hashtag matches a Sequence frame ID...
					self.nextFrameID = self.frameHashIndex + 1;
					document.location.hash = "#"+self.currentHashTag;
				}else{
					self.nextFrameID = self.settings.startingFrameID;
					self.isStartingFrame = false;
				}
			}
		},

		/* Modernizr 2.6.1 (Custom Build) | MIT & BSD
		 * Build: http://modernizr.com/download/#-svg-prefixed-testprop-testallprops-domprefixes
		 */
		_modernizrForSequence: function() {
			;window.ModernizrForSequence=function(a,b,c){function x(a){i.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&i[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+m.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+n.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.6.1",e={},f=b.documentElement,g="modernizrForSequence",h=b.createElement(g),i=h.style,j,k={}.toString,l="Webkit Moz O ms",m=l.split(" "),n=l.toLowerCase().split(" "),o={svg:"http://www.w3.org/2000/svg"},p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=self;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(self instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.svg=function(){return!!b.createElementNS&&!!b.createElementNS(o.svg,"svg").createSVGRect};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),h=j=null,e._version=d,e._domPrefixes=n,e._cssomPrefixes=m,e.testProp=function(a){return B([a])},e.testAllProps=D,e.prefixed=function(a,b,c){return b?D(a,b,c):D(a,"pfx")},e}(self,self.document);
		},

		/* Set up Sequence's default preloader
		 * prependTo = which element to prepend the preloader to
		 * transitions = whether CSS3 transitions are supported
		 * prefix = the prefix for the browser Sequence is being viewed in
		 */
		_defaultPreloader: function(prependTo, transitions, prefix) {
			var icon = '<div class="sequence-preloader"><svg class="preloading" xmlns="http://www.w3.org/2000/svg"><circle class="circle" cx="6" cy="6" r="6" /><circle class="circle" cx="22" cy="6" r="6" /><circle class="circle" cx="38" cy="6" r="6" /></svg></div>';

			$("head").append("<style>.sequence-preloader{height: 100%;position: absolute;width: 100%;z-index: 999999;}@"+prefix+"keyframes preload{0%{opacity: 1;}50%{opacity: 0;}100%{opacity: 1;}}.sequence-preloader .preloading .circle{fill: #ff9442;display: inline-block;height: 12px;position: relative;top: -50%;width: 12px;"+prefix+"animation: preload 1s infinite; animation: preload 1s infinite;}.preloading{display:block;height: 12px;margin: 0 auto;top: 50%;margin-top:-6px;position: relative;width: 48px;}.sequence-preloader .preloading .circle:nth-child(2){"+prefix+"animation-delay: .15s; animation-delay: .15s;}.sequence-preloader .preloading .circle:nth-child(3){"+prefix+"animation-delay: .3s; animation-delay: .3s;}.preloading-complete{opacity: 0;visibility: hidden;"+prefix+"transition-duration: 1s; transition-duration: 1s;}div.inline{background-color: #ff9442; margin-right: 4px; float: left;}</style>");
			prependTo.prepend(icon);
			if(!ModernizrForSequence.svg && !transitions) { //if SVG isn't supported, remain calm and add this fallback instead...
				$(".sequence-preloader").prepend('<div class="preloading"><div class="circle inline"></div><div class="circle inline"></div><div class="circle inline"></div></div>');
				setInterval(function() {
					$(".sequence-preloader .circle").fadeToggle(500);
				}, 500);
			}else if(!transitions) { //if transitions aren't supported, toggle the opacity instead
				setInterval(function() {
					$(".sequence-preloader").fadeToggle(500);
				}, 500);
			}
		},

		//a quick test to work out if Opera supports transitions properly (to work around the fact that Opera 11 supports transitions but doesn't return a transition value properly)
		_operaTest: function() {
			$("body").append('<span id="sequence-opera-test"></span>');
			var $operaTest = $("#sequence-opera-test");
			$operaTest.css("-o-transition", "1s"); //add a transition value to the Opera test
			if($operaTest.css("-o-transition") !== "1s") { //if the expected value isn't returned...
				$operaTest.remove();
				return false; //cause Opera to go into the fallback theme
			}else{
				$operaTest.remove();
				return true;
			}
		}
		//END PRIVATE METHODS

	}; //END PROTOTYPE

	var defaults = {
		//General Settings
		startingFrameID: 1, //The frame (the list item `<li>`) that should first be displayed when Sequence loads
		cycle: true, //Whether Sequence should navigate to the first frame after the last frame and vice versa
		animateStartingFrameIn: false, //Whether the first frame should animate in to its active position
		transitionThreshold: false, //The delay between a frame animating out and the next animating in (false = no delay, true = the next frame will animate in only once the current frame has animated out)
		reverseAnimationsWhenNavigatingBackwards: true, //Whether animations should be reversed when a user navigates backwards by clicking a previous button/swiping/pressing the left key
		reverseEaseWhenNavigatingBackwards: true, //Whether the ease function should be reversed when a user navigates backwards
		preventDelayWhenReversingAnimations: false, //Whether a delay should be removed when animations are reversed. This delay is removed by default to prevent user confusion
		moveActiveFrameToTop: true, //Whether a frame should be given a higher `z-index` than other frames whilst it is active, to bring it above the others
		windowLoaded: false, //Set to true if it is known that the window.onload event has already fired.  Useful with javascript module loaders (such as RequireJS).

		//Autoplay Settings
		autoPlay: false, //Cause Sequence to automatically change between frames over a period of time, as defined in autoPlayDelay
		autoPlayDirection: 1, //The direction in which Sequence should auto play
		autoPlayDelay: 5000, //The duration in milliseconds at which frames should remain on screen before animating to the next

		//Frame Skipping Settings
		navigationSkip: true, //Whether the user can navigate through frames before each frame has finished animating
		navigationSkipThreshold: 250, //Amount of time that must pass before the next frame can be navigated to
		fadeFrameWhenSkipped: true, //If a frame is skipped before it finishes animating, it will quickly fade out
		fadeFrameTime: 150, //If fadeFrameWhenSkipped is true, how quickly a frame should fade out when skipped (in milliseconds)
		preventReverseSkipping: false, //Whether the user can change the direction of navigation during frames animating (if navigating forward, the user can only skip forwards when other frames are animating).

		//Next/Prev Button Settings
		nextButton: false, //if true, Sequence will use an element with class ".sequence-next" as the next button, else specify your own selector. false = don't use an in-built next button
		showNextButtonOnInit: true, //if true, Sequence will make the next button display: block; once Sequence has loaded (give the next button selector display: none; in the CSS to hide it until its usable)
		prevButton: false, //if true, Sequence will use an element with class ".sequence-prev" as the previous button, else specify your own selector. false = don't use an in-built previous button
		showPrevButtonOnInit: true, //if true, Sequence will make the previous button display: block; once Sequence has loaded (give the previous button selector display: none; in the CSS to hide it until its usable)

		//Pause Settings
		pauseButton: false, //if true, Sequence will use an element with class ".sequence-pause" as the pause button, else specify your own selector. false = don't use an in-built pause button
		unpauseDelay: null, //the time to wait before navigating to the next frame when Sequence is unpaused. Note that if an unpauseDelay is not specified, the default is the same as the autoPlayDelay setting
		pauseOnHover: true, //pause Sequence when the Sequence container is hovered over
		pauseIcon: false, 	//if true, Sequence will use an element with class ".sequence-pause-icon" as the pause icon, else specify your own selector. false = don't use an in-built pause icon (the pause icon will display when Sequence is paused)
		showPauseButtonOnInit: true, //if true, Sequence will make the pause button display: block; once Sequence has loaded (give the pause button selector display: none; in the CSS to hide it until its usable)

		//Pagination Settings
		pagination: false, //if true, Sequence will use an element with class ".sequence-pagination" as the paginated navigation, else specify your own selector. false = don't use in-built pagination
		showPaginationOnInit: true,  //if true, Sequence will make the pagination display: block; once Sequence has loaded (give the pagination selector display: none; in the CSS to hide it until its usable)

		//Preloader Settings
		preloader: false,
		preloadTheseFrames: [1], //all images in these frames will load before Sequence initiates
		preloadTheseImages: [ //specify particular images to load before Sequence initiates
			/* Example usage
			"images/catEatingSalad.jpg",
			"images/meDressedAsBatman.png"
			*/
		],
		/*Note: You can use preloadTheseFrames and preloadTheseImages together. You might want to load all images in frame 1 and just one big image from frame 2 for example*/
		hideFramesUntilPreloaded: true,
		prependPreloadingComplete: true,
		hidePreloaderUsingCSS: true,
		hidePreloaderDelay: 0,

		//Keyboard settings
		keyNavigation: true, //false prevents the following keyboard settings
		numericKeysGoToFrames: true,
		keyEvents: {
			left: "prev",
			right: "next"
		},
		customKeyEvents: {
			/* Example usage
			65: "prev",	//a
			68: "next",	//d
			83: "prev",	//s
			87: "next"	//w
			*/
		},

		//Touch Swipe Settings
		swipeNavigation: true,
		swipeThreshold: 20,
		swipePreventsDefault: false, //be careful if setting this to true
		swipeEvents: {
			left: "prev",
			right: "next",
			up: false,
			down: false
		},

		//hashTags Settings
		//when using hashTags, please include a reference to Ben Alman's jQuery HashChange plugin above your reference to Sequence.js

		//info: http://benalman.com/projects/jquery-hashchange-plugin/
		//plugin: https://raw.github.com/cowboy/jquery-hashchange/v1.3/jquery.ba-hashchange.min.js
		//GitHub: https://github.com/cowboy/jquery-hashchange
		hashTags: false, //when a frame is navigated to, change the hashtag to the frames ID
		hashDataAttribute: false, //false = the hashTag is taken from a frames ID attribute | true = the hashTag is taken from the data attribute "data-sequence-hash"
		hashChangesOnFirstFrame: false, //false = the hashTag won't change for the first frame but will for those after

		//Fallback Theme Settings (For browsers that don't support CSS3 transitions)
		fallback: {
			theme: "slide",
			speed: 500
		}
	};

	$.fn.sequence = function(options) {
		return this.each(function() {
			if (!$.data(this, 'sequence')) { //prevent multiple initiations on the same element
				$.data(this, 'sequence', new Sequence($(this), options, defaults));
      }
		});
	};
})(jQuery);

// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/


(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __slice = [].slice;

  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      return define('waypoints', ['jquery'], function($) {
        return factory($, root);
      });
    } else {
      return factory(root.jQuery, root);
    }
  })(this, function($, window) {
    var $w, Context, Waypoint, allWaypoints, contextCounter, contextKey, contexts, isTouch, jQMethods, methods, resizeEvent, scrollEvent, waypointCounter, waypointKey, wp, wps;

    $w = $(window);
    isTouch = __indexOf.call(window, 'ontouchstart') >= 0;
    allWaypoints = {
      horizontal: {},
      vertical: {}
    };
    contextCounter = 1;
    contexts = {};
    contextKey = 'waypoints-context-id';
    resizeEvent = 'resize.waypoints';
    scrollEvent = 'scroll.waypoints';
    waypointCounter = 1;
    waypointKey = 'waypoints-waypoint-ids';
    wp = 'waypoint';
    wps = 'waypoints';
    Context = (function() {
      function Context($element) {
        var _this = this;

        this.$element = $element;
        this.element = $element[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = 'context' + contextCounter++;
        this.oldScroll = {
          x: $element.scrollLeft(),
          y: $element.scrollTop()
        };
        this.waypoints = {
          horizontal: {},
          vertical: {}
        };
        $element.data(contextKey, this.id);
        contexts[this.id] = this;
        $element.bind(scrollEvent, function() {
          var scrollHandler;

          if (!(_this.didScroll || isTouch)) {
            _this.didScroll = true;
            scrollHandler = function() {
              _this.doScroll();
              return _this.didScroll = false;
            };
            return window.setTimeout(scrollHandler, $[wps].settings.scrollThrottle);
          }
        });
        $element.bind(resizeEvent, function() {
          var resizeHandler;

          if (!_this.didResize) {
            _this.didResize = true;
            resizeHandler = function() {
              $[wps]('refresh');
              return _this.didResize = false;
            };
            return window.setTimeout(resizeHandler, $[wps].settings.resizeThrottle);
          }
        });
      }

      Context.prototype.doScroll = function() {
        var axes,
          _this = this;

        axes = {
          horizontal: {
            newScroll: this.$element.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: 'right',
            backward: 'left'
          },
          vertical: {
            newScroll: this.$element.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: 'down',
            backward: 'up'
          }
        };
        if (isTouch && (!axes.vertical.oldScroll || !axes.vertical.newScroll)) {
          $[wps]('refresh');
        }
        $.each(axes, function(aKey, axis) {
          var direction, isForward, triggered;

          triggered = [];
          isForward = axis.newScroll > axis.oldScroll;
          direction = isForward ? axis.forward : axis.backward;
          $.each(_this.waypoints[aKey], function(wKey, waypoint) {
            var _ref, _ref1;

            if ((axis.oldScroll < (_ref = waypoint.offset) && _ref <= axis.newScroll)) {
              return triggered.push(waypoint);
            } else if ((axis.newScroll < (_ref1 = waypoint.offset) && _ref1 <= axis.oldScroll)) {
              return triggered.push(waypoint);
            }
          });
          triggered.sort(function(a, b) {
            return a.offset - b.offset;
          });
          if (!isForward) {
            triggered.reverse();
          }
          return $.each(triggered, function(i, waypoint) {
            if (waypoint.options.continuous || i === triggered.length - 1) {
              return waypoint.trigger([direction]);
            }
          });
        });
        return this.oldScroll = {
          x: axes.horizontal.newScroll,
          y: axes.vertical.newScroll
        };
      };

      Context.prototype.refresh = function() {
        var axes, cOffset, isWin,
          _this = this;

        isWin = $.isWindow(this.element);
        cOffset = this.$element.offset();
        this.doScroll();
        axes = {
          horizontal: {
            contextOffset: isWin ? 0 : cOffset.left,
            contextScroll: isWin ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: 'right',
            backward: 'left',
            offsetProp: 'left'
          },
          vertical: {
            contextOffset: isWin ? 0 : cOffset.top,
            contextScroll: isWin ? 0 : this.oldScroll.y,
            contextDimension: isWin ? $[wps]('viewportHeight') : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: 'down',
            backward: 'up',
            offsetProp: 'top'
          }
        };
        return $.each(axes, function(aKey, axis) {
          return $.each(_this.waypoints[aKey], function(i, waypoint) {
            var adjustment, elementOffset, oldOffset, _ref, _ref1;

            adjustment = waypoint.options.offset;
            oldOffset = waypoint.offset;
            elementOffset = $.isWindow(waypoint.element) ? 0 : waypoint.$element.offset()[axis.offsetProp];
            if ($.isFunction(adjustment)) {
              adjustment = adjustment.apply(waypoint.element);
            } else if (typeof adjustment === 'string') {
              adjustment = parseFloat(adjustment);
              if (waypoint.options.offset.indexOf('%') > -1) {
                adjustment = Math.ceil(axis.contextDimension * adjustment / 100);
              }
            }
            waypoint.offset = elementOffset - axis.contextOffset + axis.contextScroll - adjustment;
            if ((waypoint.options.onlyOnScroll && (oldOffset != null)) || !waypoint.enabled) {
              return;
            }
            if (oldOffset !== null && (oldOffset < (_ref = axis.oldScroll) && _ref <= waypoint.offset)) {
              return waypoint.trigger([axis.backward]);
            } else if (oldOffset !== null && (oldOffset > (_ref1 = axis.oldScroll) && _ref1 >= waypoint.offset)) {
              return waypoint.trigger([axis.forward]);
            } else if (oldOffset === null && axis.oldScroll >= waypoint.offset) {
              return waypoint.trigger([axis.forward]);
            }
          });
        });
      };

      Context.prototype.checkEmpty = function() {
        if ($.isEmptyObject(this.waypoints.horizontal) && $.isEmptyObject(this.waypoints.vertical)) {
          this.$element.unbind([resizeEvent, scrollEvent].join(' '));
          return delete contexts[this.id];
        }
      };

      return Context;

    })();
    Waypoint = (function() {
      function Waypoint($element, context, options) {
        var idList, _ref;

        options = $.extend({}, $.fn[wp].defaults, options);
        if (options.offset === 'bottom-in-view') {
          options.offset = function() {
            var contextHeight;

            contextHeight = $[wps]('viewportHeight');
            if (!$.isWindow(context.element)) {
              contextHeight = context.$element.height();
            }
            return contextHeight - $(this).outerHeight();
          };
        }
        this.$element = $element;
        this.element = $element[0];
        this.axis = options.horizontal ? 'horizontal' : 'vertical';
        this.callback = options.handler;
        this.context = context;
        this.enabled = options.enabled;
        this.id = 'waypoints' + waypointCounter++;
        this.offset = null;
        this.options = options;
        context.waypoints[this.axis][this.id] = this;
        allWaypoints[this.axis][this.id] = this;
        idList = (_ref = $element.data(waypointKey)) != null ? _ref : [];
        idList.push(this.id);
        $element.data(waypointKey, idList);
      }

      Waypoint.prototype.trigger = function(args) {
        if (!this.enabled) {
          return;
        }
        if (this.callback != null) {
          this.callback.apply(this.element, args);
        }
        if (this.options.triggerOnce) {
          return this.destroy();
        }
      };

      Waypoint.prototype.disable = function() {
        return this.enabled = false;
      };

      Waypoint.prototype.enable = function() {
        this.context.refresh();
        return this.enabled = true;
      };

      Waypoint.prototype.destroy = function() {
        delete allWaypoints[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty();
      };

      Waypoint.getWaypointsByElement = function(element) {
        var all, ids;

        ids = $(element).data(waypointKey);
        if (!ids) {
          return [];
        }
        all = $.extend({}, allWaypoints.horizontal, allWaypoints.vertical);
        return $.map(ids, function(id) {
          return all[id];
        });
      };

      return Waypoint;

    })();
    methods = {
      init: function(f, options) {
        var _ref;

        if (options == null) {
          options = {};
        }
        if ((_ref = options.handler) == null) {
          options.handler = f;
        }
        this.each(function() {
          var $this, context, contextElement, _ref1;

          $this = $(this);
          contextElement = (_ref1 = options.context) != null ? _ref1 : $.fn[wp].defaults.context;
          if (!$.isWindow(contextElement)) {
            contextElement = $this.closest(contextElement);
          }
          contextElement = $(contextElement);
          context = contexts[contextElement.data(contextKey)];
          if (!context) {
            context = new Context(contextElement);
          }
          return new Waypoint($this, context, options);
        });
        $[wps]('refresh');
        return this;
      },
      disable: function() {
        return methods._invoke(this, 'disable');
      },
      enable: function() {
        return methods._invoke(this, 'enable');
      },
      destroy: function() {
        return methods._invoke(this, 'destroy');
      },
      prev: function(axis, selector) {
        return methods._traverse.call(this, axis, selector, function(stack, index, waypoints) {
          if (index > 0) {
            return stack.push(waypoints[index - 1]);
          }
        });
      },
      next: function(axis, selector) {
        return methods._traverse.call(this, axis, selector, function(stack, index, waypoints) {
          if (index < waypoints.length - 1) {
            return stack.push(waypoints[index + 1]);
          }
        });
      },
      _traverse: function(axis, selector, push) {
        var stack, waypoints;

        if (axis == null) {
          axis = 'vertical';
        }
        if (selector == null) {
          selector = window;
        }
        waypoints = jQMethods.aggregate(selector);
        stack = [];
        this.each(function() {
          var index;

          index = $.inArray(this, waypoints[axis]);
          return push(stack, index, waypoints[axis]);
        });
        return this.pushStack(stack);
      },
      _invoke: function($elements, method) {
        $elements.each(function() {
          var waypoints;

          waypoints = Waypoint.getWaypointsByElement(this);
          return $.each(waypoints, function(i, waypoint) {
            waypoint[method]();
            return true;
          });
        });
        return this;
      }
    };
    $.fn[wp] = function() {
      var args, method;

      method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (methods[method]) {
        return methods[method].apply(this, args);
      } else if ($.isFunction(method)) {
        return methods.init.apply(this, arguments);
      } else if ($.isPlainObject(method)) {
        return methods.init.apply(this, [null, method]);
      } else if (!method) {
        return $.error("jQuery Waypoints needs a callback function or handler option.");
      } else {
        return $.error("The " + method + " method does not exist in jQuery Waypoints.");
      }
    };
    $.fn[wp].defaults = {
      context: window,
      continuous: true,
      enabled: true,
      horizontal: false,
      offset: 0,
      triggerOnce: false
    };
    jQMethods = {
      refresh: function() {
        return $.each(contexts, function(i, context) {
          return context.refresh();
        });
      },
      viewportHeight: function() {
        var _ref;

        return (_ref = window.innerHeight) != null ? _ref : $w.height();
      },
      aggregate: function(contextSelector) {
        var collection, waypoints, _ref;

        collection = allWaypoints;
        if (contextSelector) {
          collection = (_ref = contexts[$(contextSelector).data(contextKey)]) != null ? _ref.waypoints : void 0;
        }
        if (!collection) {
          return [];
        }
        waypoints = {
          horizontal: [],
          vertical: []
        };
        $.each(waypoints, function(axis, arr) {
          $.each(collection[axis], function(key, waypoint) {
            return arr.push(waypoint);
          });
          arr.sort(function(a, b) {
            return a.offset - b.offset;
          });
          waypoints[axis] = $.map(arr, function(waypoint) {
            return waypoint.element;
          });
          return waypoints[axis] = $.unique(waypoints[axis]);
        });
        return waypoints;
      },
      above: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'vertical', function(context, waypoint) {
          return waypoint.offset <= context.oldScroll.y;
        });
      },
      below: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'vertical', function(context, waypoint) {
          return waypoint.offset > context.oldScroll.y;
        });
      },
      left: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'horizontal', function(context, waypoint) {
          return waypoint.offset <= context.oldScroll.x;
        });
      },
      right: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'horizontal', function(context, waypoint) {
          return waypoint.offset > context.oldScroll.x;
        });
      },
      enable: function() {
        return jQMethods._invoke('enable');
      },
      disable: function() {
        return jQMethods._invoke('disable');
      },
      destroy: function() {
        return jQMethods._invoke('destroy');
      },
      extendFn: function(methodName, f) {
        return methods[methodName] = f;
      },
      _invoke: function(method) {
        var waypoints;

        waypoints = $.extend({}, allWaypoints.vertical, allWaypoints.horizontal);
        return $.each(waypoints, function(key, waypoint) {
          waypoint[method]();
          return true;
        });
      },
      _filter: function(selector, axis, test) {
        var context, waypoints;

        context = contexts[$(selector).data(contextKey)];
        if (!context) {
          return [];
        }
        waypoints = [];
        $.each(context.waypoints[axis], function(i, waypoint) {
          if (test(context, waypoint)) {
            return waypoints.push(waypoint);
          }
        });
        waypoints.sort(function(a, b) {
          return a.offset - b.offset;
        });
        return $.map(waypoints, function(waypoint) {
          return waypoint.element;
        });
      }
    };
    $[wps] = function() {
      var args, method;

      method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (jQMethods[method]) {
        return jQMethods[method].apply(null, args);
      } else {
        return jQMethods.aggregate.call(null, method);
      }
    };
    $[wps].settings = {
      resizeThrottle: 100,
      scrollThrottle: 30
    };
    return $w.load(function() {
      return $[wps]('refresh');
    });
  });

}).call(this);

// Generated by CoffeeScript 1.6.2
/*
Sticky Elements Shortcut for jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/


(function() {
  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      return define(['jquery', 'waypoints'], factory);
    } else {
      return factory(root.jQuery);
    }
  })(window, function($) {
    var defaults, wrap;

    defaults = {
      wrapper: '<div class="sticky-wrapper" />',
      stuckClass: 'stuck',
      direction: 'down right'
    };
    wrap = function($elements, options) {
      var $parent;

      $elements.wrap(options.wrapper);
      $parent = $elements.parent();
      return $parent.data('isWaypointStickyWrapper', true);
    };
    $.waypoints('extendFn', 'sticky', function(opt) {
      var $wrap, options, originalHandler;

      options = $.extend({}, $.fn.waypoint.defaults, defaults, opt);
      $wrap = wrap(this, options);
      originalHandler = options.handler;
      options.handler = function(direction) {
        var $sticky, shouldBeStuck;

        $sticky = $(this).children(':first');
        shouldBeStuck = options.direction.indexOf(direction) !== -1;
        $sticky.toggleClass(options.stuckClass, shouldBeStuck);
        $wrap.height(shouldBeStuck ? $sticky.outerHeight() : '');
        if (originalHandler != null) {
          return originalHandler.call(this, direction);
        }
      };
      $wrap.waypoint(options);
      return this.data('stuckClass', options.stuckClass);
    });
    return $.waypoints('extendFn', 'unsticky', function() {
      var $parent;

      $parent = this.parent();
      if (!$parent.data('isWaypointStickyWrapper')) {
        return this;
      }
      $parent.waypoint('destroy');
      this.unwrap();
      return this.removeClass(this.data('stuckClass'));
    });
  });

}).call(this);

$(document).ready(function() {
	$('#contact-form').submit(function() {
		
		if($('#contact-form').hasClass('clicked')){
			return false;
		}
		
		$('#contact-form').addClass('clicked');
		
		var buttonCopy = $('#contact-form button').html(),
			errorMessage = $('#contact-form button').data('error-message'),
			sendingMessage = $('#contact-form button').data('sending-message'),
			okMessage = $('#contact-form button').data('ok-message'),
			hasError = false;
		
		$('#contact-form .error-message').remove();
		
		$('.requiredField').each(function() {
			if($.trim($(this).val()) == '') {
				var errorText = $(this).data('error-empty');
				$(this).parents('.controls').append('<span class="error-message" style="display:none;">'+errorText+'.</span>').find('.error-message').fadeIn('fast');
				$(this).addClass('inputError');
				hasError = true;
			} else if($(this).is("input[type='email']") || $(this).attr('name')==='email') {
				var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
				if(!emailReg.test($.trim($(this).val()))) {
					var invalidEmail = $(this).data('error-invalid');
					$(this).parents('.controls').append('<span class="error-message" style="display:none;">'+invalidEmail+'.</span>').find('.error-message').fadeIn('fast');
					$(this).addClass('inputError');
					hasError = true;
				}
			}
		});
		
		if(hasError) {
			$('#contact-form button').html('<i class="fa fa-times"></i>'+errorMessage);
			setTimeout(function(){
				$('#contact-form button').html(buttonCopy);
				$('#contact-form').removeClass('clicked');
			},2000);
		}
		else {
			$('#contact-form button').html('<i class="fa fa-spinner fa-spin"></i>'+sendingMessage);
			
			var formInput = $(this).serialize();
			$.post($(this).attr('action'),formInput, function(data){
				$('#contact-form button').html('<i class="fa fa-check"></i>'+okMessage);
				setTimeout(function(){
					$('#contact-form button').html(buttonCopy);
				$('#contact-form').removeClass('clicked');
				},2000);
				
				$('#contact-form')[0].reset();
			});
		}
		
		return false;	
	});
});
$(document).ready(function() {
	
	/*============================================
	Page Preloader
	==============================================*/
	
	$(window).load(function(){
		$('#page-loader').fadeOut(500);
	});	
	
	/*============================================
	Parallax Backgrounds
	==============================================*/
	$('.parallax-bg').each(function(){
		var bg = $(this).data('parallax-background');
		$(this).css({'background-image':'url('+bg+')'});
		
	});
	
	if((!Modernizr.touch) && ( $(window).width() > 1024) ){
		$(window).stellar({
			horizontalScrolling: false,
			responsive:true
		});
	}
	/*============================================
	Header
	==============================================*/
	
	$('.header-slider').flexslider({
		animation: "fade",
		directionNav: false,
		controlNav: false,
		slideshowSpeed: 3000,
		animationSpeed: 400,
		pauseOnHover:false,
		pauseOnAction:false,
		smoothHeight: false,
		slideshow:false
	});
	
	$(window).load(function(){
		$('.header-slider').flexslider('play');
	});
	/*============================================
	ScrollTo Links
	==============================================*/
	$('a.scrollto').click(function(e){
		$('html,body').scrollTo(this.hash, this.hash, {animation:  {easing: 'easeInOutCubic', duration: 1000}});
		e.preventDefault();

		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
	});
	
	$('#main-nav').waypoint('sticky');
	
	
	/*============================================
	Counters
	==============================================*/
	$('.counters').waypoint(function(){
		$('.counter').each(count);
	},{offset:'100%'});
	
	function count(options) {
		var $this = $(this);
		options = $.extend({}, options || {}, $this.data('countToOptions') || {});
		$this.countTo(options);
	}
	
	/*============================================
	Project thumbs - Masonry
	==============================================*/
	$(window).load(function(){

		$('#projects-container').css({visibility:'visible'});

		$('#projects-container').masonry({
			itemSelector: '.project-item:not(.filtered)',
			isFitWidth: false,
			isResizable: true,
			isAnimated: !Modernizr.csstransitions,
			gutterWidth: 0
		});

		scrollSpyRefresh();
		waypointsRefresh();
		stellarRefresh();
		
	});
	
	/*============================================
	Filter Projects
	==============================================*/
	$('#filter-works a').click(function(e){
		e.preventDefault();
		
		if($('#project-preview').hasClass('open')){
			closeProject();
		}
		
		$('#filter-works li').removeClass('active');
		$(this).parent('li').addClass('active');

		var category = $(this).attr('data-filter');

		$('.project-item').each(function(){
			if($(this).is(category)){
				$(this).removeClass('filtered');
			}
			else{
				$(this).addClass('filtered');
			}

			$('#projects-container').masonry('reload');
		});

		scrollSpyRefresh();
		waypointsRefresh();
		stellarRefresh();
	});
	
	/*============================================
	Project Preview
	==============================================*/
	$('.project-item').click(function(e){
		e.preventDefault();

		var elem = $(this);
		
		if($('#project-preview').hasClass('open')){
			$('#project-preview').animate({'opacity':0},300);
			
			setTimeout(function(){
				$('#project-slider').flexslider('destroy');
				buildProject(elem);
			},300);
		}else{
			buildProject(elem);
		}
		
		
	});

	function buildProject(elem){
	
		var	title = elem.find('.project-title').text(),
			descr = elem.find('.project-description').html(),
			slidesHtml = '<ul class="slides">',
			elemDataCont = elem.find('.project-description');

		var	slides = elem.find('.project-description').data('images').split(',');

		for (var i = 0; i < slides.length; ++i) {
			slidesHtml = slidesHtml + '<li><img src='+slides[i]+' alt=""></li>';
		}
		
		slidesHtml = slidesHtml + '</ul>';
		
		$('#project-title').text(title);
		$('#project-content').html(descr);
		$('#project-slider').html(slidesHtml);
		
		openProject();
	}
	
	function openProject(){
		
		$('#project-preview').addClass('open');
		
		setTimeout(function(){
			$('#project-preview').slideDown();
			
			$('html,body').scrollTo(0,'#filter-works',
				{
					gap:{y:-10},
					animation:{
						duration:400
					}
			});
			
			$('#project-slider').flexslider({
				prevText: '<i class="fa fa-angle-left"></i>',
				nextText: '<i class="fa fa-angle-right"></i>',
				animation: 'slide',
				slideshowSpeed: 3000,
				useCSS: true,
				controlNav: true, 
				pauseOnAction: false, 
				pauseOnHover: true,
				smoothHeight: false,
				start: function(){
					$(window).trigger('resize');
					$('#project-preview').animate({'opacity':1},300);
				}
			});
			
		},300);
		
	}
	
	function closeProject(){
	
		$('#project-preview').removeClass('open');
		$('#project-preview').animate({'opacity':0},300);
		
		setTimeout(function(){
			$('#project-preview').slideUp();
				
			$('#project-slider').flexslider('destroy');
			
			scrollSpyRefresh();
			waypointsRefresh();
			stellarRefresh();
			
		},300);
		
	}
	
	$('.close-preview').click(function(){
		closeProject();
	})
		
	/*============================================
	Testimonials Slider
	==============================================*/
	
		$('#testimonials-slider').flexslider({
			prevText: '<i class="fa fa-angle-left"></i>',
			nextText: '<i class="fa fa-angle-right"></i>',
			animation: 'fade',
			slideshowSpeed: 5000,
			animationSpeed: 400,
			useCSS: true,
			directionNav: false, 
			pauseOnAction: false, 
			pauseOnHover: true,
			smoothHeight: false
		});
		
	/*============================================
	Tooltips
	==============================================*/
	$("[data-toggle='tooltip']").tooltip();
	
	/*============================================
	Placeholder Detection
	==============================================*/
	if (!Modernizr.input.placeholder) {
		$('#contact-form').addClass('no-placeholder');
	}

	/*============================================
	Scrolling Animations
	==============================================*/
	$('.scrollimation').waypoint(function(){
		$(this).addClass('in');
	},{offset:'80%'});

	/*============================================
	Resize Functions
	==============================================*/
	$(window).resize(function(){
	
		$('#projects-container').masonry('reload');
		stellarRefresh();
		scrollSpyRefresh();
		waypointsRefresh();
		
	});
	
	/*============================================
	Refresh scrollSpy function
	==============================================*/
	function scrollSpyRefresh(){
		setTimeout(function(){
			$('body').scrollspy('refresh');
		},1000);
		
	}

	/*============================================
	Refresh waypoints function
	==============================================*/
	function waypointsRefresh(){
		setTimeout(function(){
			$.waypoints('refresh');
		},1000);
	}

	/*============================================
	Refresh Parallax Backgrounds
	==============================================*/
	function stellarRefresh(){
		setTimeout(function(){
			$(window).stellar('refresh');
		},1000);
	}
});	
/*============================================
Page Preloader
==============================================*/

$(window).load(function(){
    $('#page-loader').fadeOut(500);
});

function process_content(item) {

    jQuery(item).find('.bootbox-html').each(function(index, el) {
        var target = el.getAttribute('bootbox-target');
        var message = $(target).html();
        jQuery(el).on( "click", function() {
            bootbox.dialog({
                title: el.getAttribute('bootbox-title'),
                message: message,
            });
        });
        $(document).on("shown.bs.modal", function (event) {
            process_content(event.target);
        });
    });

    jQuery(item).find('.bootbox-confirm').each(function(index, el) {
        var message = jQuery(el).attr('confirm-message');
        var href = jQuery(el).attr('href');

        if (!message) {
            message = "Are you sure?";
        }

        jQuery(el).on( "click", function(event) {
            event.preventDefault();
            bootbox.confirm(message, function (result) {
                if (result) {
                    if (href) {
                        window.location.href = href;
                    }
                }
            });
        });

    });

    jQuery(item).find('.drawer').each(function(index, el) {
        new SimpleDrawer(el);
    });

    jQuery(item).find('select[multiple]').each(function(index, el) {
        var placeholder = (el.getAttribute('placeholder') ? el.getAttribute('placeholder') : "No option selected...");
        var enableFiltering = (el.getAttribute('multiselect-filtering') ? el.getAttribute('multiselect-filtering') : false);

        jQuery(el).multiselect({
            enableFiltering: enableFiltering,
            filterPlaceholder: 'Search...',
            buttonText: function(options, select) {
                    if (options.length === 0) {
                        return placeholder;
                    }
                    else if (options.length > 6) {
                        return "Woah, that's a lot of selections." ;
                    }
                    else {
                        var labels = [];
                        options.each(function() {
                            if ($(this).attr('label') !== undefined) {
                                labels.push($(this).attr('label'));
                            }
                            else {
                                labels.push($(this).html());
                            }
                        });
                        return labels.join(', ') + ' ';
                    }
                }
        });
    });

    jQuery(item).find('.repeatable').each(function(index, el) {
        new Repeater(el);
    });

    jQuery(item).find('.ajax-form').each(function(index, el) {
        new AjaxForm(el);
    });


}

$(document).ready(function() {
    process_content($('body'));
});