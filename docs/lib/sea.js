!function(e,t){function r(e){return function(t){return{}.toString.call(t)=="[object "+e+"]"}}function a(){return j++}function n(e){return e.match(I)[0]}function o(e){for(e=e.replace(N,"/"),e=e.replace(_,"$1/");e.match(A);)e=e.replace(A,"/");return e}function i(e){var t=e.length-1,r=e.charAt(t);return"#"===r?e.substring(0,t):".js"===e.substring(t-2)||e.indexOf("?")>0||"/"===r?e:e+".js"}function s(e){var t=b.alias;return t&&E(t[e])?t[e]:e}function l(e){var t,r=b.paths;return r&&(t=e.match(k))&&E(r[t[1]])&&(e=r[t[1]]+t[2]),e}function c(e){var t=b.vars;return t&&e.indexOf("{")>-1&&(e=e.replace(O,function(e,r){return E(t[r])?t[r]:e})),e}function u(e){var t=b.map,r=e;if(t)for(var a=0,n=t.length;n>a;a++){var o=t[a];if((r=x(o)?o(e)||e:e.replace(o[0],o[1]))!==e)break}return r}function v(e,t){var r,a=e.charAt(0);if(C.test(e))r=e;else if("."===a)r=o((t?n(t):b.cwd)+e);else if("/"===a){var i=b.cwd.match(D);r=i?i[0]+e.substring(1):e}else r=b.base+e;return 0===r.indexOf("//")&&(r=location.protocol+r),r}function f(e,t){if(!e)return"";e=s(e),e=l(e),e=c(e),e=i(e);var r=v(e,t);return r=u(r)}function d(e,t,r){var a=U.createElement("script");if(r){var n=x(r)?r(e):r;n&&(a.charset=n)}h(a,t,e),a.async=!0,a.src=e,R=a,X?F.insertBefore(a,X):F.appendChild(a),R=null}function h(e,t,r){function a(){e.onload=e.onerror=e.onreadystatechange=null,b.debug||F.removeChild(e),e=null,t()}"onload"in e?(e.onload=a,e.onerror=function(){T("error",{"uri":r,"node":e}),a()}):e.onreadystatechange=function(){/loaded|complete/.test(e.readyState)&&a()}}function p(){if(R)return R;if(z&&"interactive"===z.readyState)return z;for(var e=F.getElementsByTagName("script"),t=e.length-1;t>=0;t--){var r=e[t];if("interactive"===r.readyState)return z=r}}function m(e){var t=[];return e.replace(H,"").replace(P,function(e,r,a){a&&t.push(a)}),t}function g(e,t){this.uri=e,this.dependencies=t||[],this.exports=null,this.status=0,this._waitings={},this._remain=0}if(!e.seajs){var y=e.seajs={"version":"2.3.0"},b=y.data={},w=r("Object"),E=r("String"),S=Array.isArray||r("Array"),x=r("Function"),j=0,q=b.events={};y.on=function(e,t){return(q[e]||(q[e]=[])).push(t),y},y.off=function(e,t){if(!e&&!t)return q=b.events={},y;var r=q[e];if(r)if(t)for(var a=r.length-1;a>=0;a--)r[a]===t&&r.splice(a,1);else delete q[e];return y};var T=y.emit=function(e,t){var r=q[e];if(r){r=r.slice();for(var a=0,n=r.length;n>a;a++)r[a](t)}return y},I=/[^?#]*\//,N=/\/\.\//g,A=/\/[^\/]+\/\.\.\//,_=/([^:\/])\/+\//g,k=/^([^\/:]+)(\/.+)$/,O=/{([^{]+)}/g,C=/^\/\/.|:\//,D=/^.*?\/\/.*?\//,U=document,G=location.href&&0!==location.href.indexOf("about:")?n(location.href):"",M=U.scripts,B=U.getElementById("seajsnode")||M[M.length-1],L=n(function(e){return e.hasAttribute?e.src:e.getAttribute("src",4)}(B)||G);y.resolve=f;var R,z,F=U.head||U.getElementsByTagName("head")[0]||U.documentElement,X=F.getElementsByTagName("base")[0];y.request=d;var J,P=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,H=/\\\\/g,V=y.cache={},$={},W={},Z={},K=g.STATUS={"FETCHING":1,"SAVED":2,"LOADING":3,"LOADED":4,"EXECUTING":5,"EXECUTED":6};g.prototype.resolve=function(){for(var e=this,t=e.dependencies,r=[],a=0,n=t.length;n>a;a++)r[a]=g.resolve(t[a],e.uri);return r},g.prototype.load=function(){var e=this;if(!(e.status>=K.LOADING)){e.status=K.LOADING;var r=e.resolve();T("load",r);for(var a,n=e._remain=r.length,o=0;n>o;o++)a=g.get(r[o]),a.status<K.LOADED?a._waitings[e.uri]=(a._waitings[e.uri]||0)+1:e._remain--;if(0===e._remain)return e.onload(),t;var i={};for(o=0;n>o;o++)a=V[r[o]],a.status<K.FETCHING?a.fetch(i):a.status===K.SAVED&&a.load();for(var s in i)i.hasOwnProperty(s)&&i[s]()}},g.prototype.onload=function(){var e=this;e.status=K.LOADED,e.callback&&e.callback();var t,r,a=e._waitings;for(t in a)a.hasOwnProperty(t)&&(r=V[t],r._remain-=a[t],0===r._remain&&r.onload());delete e._waitings,delete e._remain},g.prototype.fetch=function(e){function r(){y.request(i.requestUri,i.onRequest,i.charset)}function a(){delete $[s],W[s]=!0,J&&(g.save(o,J),J=null);var e,t=Z[s];for(delete Z[s];e=t.shift();)e.load()}var n=this,o=n.uri;n.status=K.FETCHING;var i={"uri":o};T("fetch",i);var s=i.requestUri||o;return!s||W[s]?(n.load(),t):$[s]?(Z[s].push(n),t):($[s]=!0,Z[s]=[n],T("request",i={"uri":o,"requestUri":s,"onRequest":a,"charset":b.charset}),i.requested||(e?e[i.requestUri]=r:r()),t)},g.prototype.exec=function(){function e(t){return g.get(e.resolve(t)).exec()}var r=this;if(r.status>=K.EXECUTING)return r.exports;r.status=K.EXECUTING;var n=r.uri;e.resolve=function(e){return g.resolve(e,n)},e.async=function(t,r){return g.use(t,r,n+"_async_"+a()),e};var o=r.factory,i=x(o)?o(e,r.exports={},r):o;return i===t&&(i=r.exports),delete r.factory,r.exports=i,r.status=K.EXECUTED,T("exec",r),i},g.resolve=function(e,t){var r={"id":e,"refUri":t};return T("resolve",r),r.uri||y.resolve(r.id,t)},g.define=function(e,r,a){var n=arguments.length;1===n?(a=e,e=t):2===n&&(a=r,S(e)?(r=e,e=t):r=t),!S(r)&&x(a)&&(r=m(""+a));var o={"id":e,"uri":g.resolve(e),"deps":r,"factory":a};if(!o.uri&&U.attachEvent){var i=p();i&&(o.uri=i.src)}T("define",o),o.uri?g.save(o.uri,o):J=o},g.save=function(e,t){var r=g.get(e);r.status<K.SAVED&&(r.id=t.id||e,r.dependencies=t.deps||[],r.factory=t.factory,r.status=K.SAVED,T("save",r))},g.get=function(e,t){return V[e]||(V[e]=new g(e,t))},g.use=function(t,r,a){var n=g.get(a,S(t)?t:[t]);n.callback=function(){for(var t=[],a=n.resolve(),o=0,i=a.length;i>o;o++)t[o]=V[a[o]].exec();r&&r.apply(e,t),delete n.callback},n.load()},y.use=function(e,t){return g.use(e,t,b.cwd+"_use_"+a()),y},g.define.cmd={},e.define=g.define,y.Module=g,b.fetchedList=W,b.cid=a,y.require=function(e){var t=g.get(g.resolve(e));return t.status<K.EXECUTING&&(t.onload(),t.exec()),t.exports},b.base=L,b.dir=L,b.cwd=G,b.charset="utf-8",y.config=function(e){for(var t in e){var r=e[t],a=b[t];if(a&&w(a))for(var n in r)a[n]=r[n];else S(a)?r=a.concat(r):"base"===t&&("/"!==r.slice(-1)&&(r+="/"),r=v(r)),b[t]=r}return T("config",e),y}}}(this),function(){var e,t=/\W/g,r=document,a=document.getElementsByTagName("head")[0]||document.documentElement;seajs.importStyle=function(n,o){if(!o||(o=o.replace(t,"-"),!r.getElementById(o))){var i;if(!e||o?(i=r.createElement("style"),o&&(i.id=o),a.appendChild(i)):i=e,void 0!==i.styleSheet){if(r.getElementsByTagName("style").length>31)throw new Error("Exceed the maximal count of style tags in IE");i.styleSheet.cssText+=n}else i.appendChild(r.createTextNode(n));o||(e=i)}},define("seajs/seajs-style/1.0.2/seajs-style",[],{})}(),seajs.root="/Flow-UI",seajs.set={"base":{"timeout":15e3}},seajs.config({"base":"http://static-zt.oss-cn-qingdao.aliyuncs.com/modules/","paths":{"js":"/Flow-UI/docs/js","lib":"/Flow-UI/docs/lib"},"alias":{"audio":"audio/audio","copy":"copy/ZeroClipboard","flv":"flv/flv","hook":"hook/hook","jquery":"jquery/1/jquery","validform":"validform/validform","My97DatePicker":"My97DatePicker/WdatePicker","raty":"raty/raty","upload":"upload/upload","makethumb":"upload/makethumb","localResizeIMG":"upload/localResizeIMG","video":"video/video","webuploader":"webuploader/webuploader"},"localcache":{"timeout":2e4}}),function(e){var t={"audio/audio":"v1.0.1","copy/ZeroClipboard":"v0.0.1","flv/flv":"v0.0.2","jquery/1/jquery":"v1.11.3","jquery/2/jquery":"v2.1.4","jquery/3/jquery":"v3.1.1","raty/raty":"v0.1.0","upload/upload":"v1.1.1","upload/makethumb":"v0.0.1","upload/localResizeIMG":"v0.0.1","validform/validform":"v2.5.8","video/video":"v0.0.1","webuploader/webuploader":"v1.0.0","album":"v3.0.0","appcan":"v0.1.0","autocomplete":"v0.1.0","badge":"v0.0.1","base":"v3.5.1","bdshare":"v3.1.2","box":"v3.12.1","checks":"v0.0.2","city-select":"v1.0.2","collapse":"v0.0.2","countdown":"v1.1.1","datepicker":"v2.1.0","drag":"v0.10.4","drag-panel":"v0.0.2","dropdown":"v0.2.3","easing":"v0.0.1","echarts":"v0.1.0","etpl":"v0.1.1","img-loaded":"v0.0.1","img-ready":"v1.0.0","input-number":"v0.1.4","input":"v0.1.3","instantclick":"v0.0.1","label":"v0.0.1","lazyload":"v2.2.1","marquee":"v0.10.1","masonry":"v0.0.1","menu":"v0.2.3","mousemenu":"v1.0.1","mousetrap":"v1.5.3","mousewheel":"v0.0.1","notice":"v0.0.3","offcanvas":"v2.0.4","on-scroll":"v2.2.0","page":"v1.0.7","paging-load":"v0.2.0","pjax":"v0.0.1","progress":"v0.0.3","qr":"v0.1.0","render":"v0.1.0","responsive":"v0.0.1","scroll-bar":"v2.2.8","scroll-col":"v4.2.5","scroll-load":"v1.0.2","scroll-row":"v3.0.6","select":"v4.3.5","sendcode":"v0.2.1","slide":"v4.5.1","slider":"v0.0.3","spin":"v0.0.3","store":"v0.0.1","switch":"v1.0.0","tab":"v4.2.0","table":"v1.8.5","timepicker":"v0.1.2","tip":"v1.5.1","touch":"v0.1.1","zoom":"v2.0.4","zTree":"v0.2.0"},r={};for(var a in t)r[e.data.base+a+".js"]=t[a];e.data.localcache?e.data.localcache.manifest=r:e.data.localcache={"timeout":2e4,"manifest":r}}(seajs),function(e){if(window.window.JSON&&window.localStorage&&!e.data.debug){var t=e.Module,r=e.data,a=t.prototype.fetch,n=["??",","],o=r.localcache&&r.localcache.manifest||{},i={"_maxRetry":1,"_retry":!0,"get":function(e,t){var r;try{r=localStorage.getItem(e)}catch(e){return}return r?t?JSON.parse(r):r:void 0},"set":function(e,t,r){r=void 0===r?this._retry:r;try{localStorage.setItem(e,t)}catch(n){if(r)for(var a=this._maxRetry;a>0;)a--,this.removeAll(),this.set(e,t,!1)}},"remove":function(e){try{localStorage.removeItem(e)}catch(e){}},"removeAll":function(){for(var e=r.localcache&&r.localcache.prefix||/^https?\:/,t=localStorage.length-1;t>=0;t--){var a=localStorage.key(t);e.test(a)&&(o[a]||localStorage.removeItem(a))}}},s=i.get("manifest",!0)||{};if(o){var l=r.localcache&&r.localcache.validate||function(e,t){return!(!t||!e)},c=function(e,t){var a=new window.XMLHttpRequest,n=setTimeout(function(){a.abort(),t(null)},r.localcache&&r.localcache.timeout||3e4);a.open("GET",e,!0),a.onreadystatechange=function(){4===a.readyState&&(clearTimeout(n),t(200===a.status?a.responseText:null))},a.send(null)},u=function(e,t){if(t&&/\S/.test(t))if(/\.css(?:\?|$)/i.test(e)){var r=document,a=r.createElement("style");r.getElementsByTagName("head")[0].appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(r.createTextNode(t))}else try{t+="//# sourceURL="+e,(window.execScript||function(e){window.eval.call(window,e)})(t)}catch(e){return!1}return!0},v=function(e){var t=r.comboSyntax&&r.comboSyntax[0]||"??";return e.indexOf(t)>=0},f=function(e){var t=r.comboSyntax||n,a=e.split(t[0]);if(2!=a.length)return e;var o=a[0],i=a[1].split(t[1]),s={};s.host=o,s.files=[];for(var l=0,c=i.length;l<c;l++)s.files.push(i[l]);return s},d=r.localcache&&r.localcache.splitCombo||function(e,t,r){for(var a=e.split("define"),n=[],o=0,i=a.length;o<i;o++)a[o]&&n.push("define"+a[o]);return n},h={},p=function(e){var t=h[e];for(delete h[e];m=t.shift();)m.load()};t.prototype.fetch=function(t){var m=this;e.emit("fetch",m);var g=m.requestUri||m.uri,y=v(g);if(h[g])return void h[g].push(m);h[g]=[m];var b=function(e){delete h[e],a.call(m,t)};if(!y&&o[g]){var w=i.get(g),E=l(g,w);o[g]==s[g]&&E?u(g,w)?p(g):b(g):c(g+"?v="+Math.random().toString(),function(e){e&&l(g,e)&&u(g,e)?(s[g]=o[g],i.set("manifest",JSON.stringify(s)),i.set(g,e),p(g)):b(g)})}else if(y){for(var S=f(g),x=!1,j=S.files.length-1;j>=0;j--){var q=S.host+S.files[j],w=i.get(q),E=l(q,w);o[q]&&(x=!0,o[q]==s[q]&&E&&(u(q,w),S.files.splice(j,1)))}if(0==S.files.length)return void p(g);if(!x)return void b(g);var T=r.comboSyntax||n,I=S.host+T[0]+S.files.join(T[1]);c(I+"?v="+Math.random().toString(),function(e){if(!e)return void b(g);var t=d(e,I,S.files);if(S.files.length==t.length){for(var r=0,a=S.files.length;r<a;r++){var n=S.host+S.files[r];if(!u(n,t[r]))return void b(g);s[n]=o[n],i.set(n,t[r])}i.set("manifest",JSON.stringify(s)),p(g)}else b(g)})}else s[g]&&(delete s[g],i.set("manifest",JSON.stringify(s)),i.remove(g)),b(g)}}}}(seajs);
//# sourceMappingURL=sea.js.map
