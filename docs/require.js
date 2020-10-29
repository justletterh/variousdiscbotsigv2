/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.3.6 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, https://github.com/requirejs/requirejs/blob/master/LICENSE
 */
var requirejs,require,define;!function(global,setTimeout){function commentReplace(a,b){return b||""}function isFunction(a){return"[object Function]"===ostring.call(a)}function isArray(a){return"[object Array]"===ostring.call(a)}function each(a,b){var c;if(a)for(c=0;c<a.length&&(!a[c]||!b(a[c],c,a));c+=1);}function eachReverse(a,b){var c;if(a)for(c=a.length-1;-1<c&&(!a[c]||!b(a[c],c,a));c-=1);}function hasProp(a,b){return hasOwn.call(a,b)}function getOwn(a,b){return hasProp(a,b)&&a[b]}function eachProp(a,b){for(var c in a)if(hasProp(a,c)&&b(a[c],c))break}function mixin(a,b,c,d){return b&&eachProp(b,function(b,e){!c&&hasProp(a,e)||(!d||"object"!=typeof b||!b||isArray(b)||isFunction(b)||b instanceof RegExp?a[e]=b:(a[e]||(a[e]={}),mixin(a[e],b,c,d)))}),a}function bind(a,b){return function(){return b.apply(a,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(a){throw a}function getGlobal(a){if(!a)return a;var b=global;return each(a.split("."),function(a){b=b[a]}),b}function makeError(a,b,c,d){var e=new Error(b+"\nhttps://requirejs.org/docs/errors.html#"+a);return e.requireType=a,e.requireModules=d,c&&(e.originalError=c),e}function newContext(z){function A(b,g,j){var i,k,q,t,v,w,x,y,z,A,B=g&&g.split("/"),l=K.map,h=l&&l["*"];if(b&&(w=(b=b.split("/")).length-1,K.nodeIdCompat&&jsSuffixRegExp.test(b[w])&&(b[w]=b[w].replace(jsSuffixRegExp,"")),"."===b[0].charAt(0)&&B&&(b=B.slice(0,B.length-1).concat(b)),function(a){var b,c;for(b=0;b<a.length;b++)if("."===(c=a[b]))a.splice(b,1),b-=1;else if(".."===c){if(0===b||1===b&&".."===a[2]||".."===a[b-1])continue;0<b&&(a.splice(b-1,2),b-=2)}}(b),b=b.join("/")),j&&l&&(B||h)){e:for(q=(k=b.split("/")).length;0<q;q-=1){if(v=k.slice(0,q).join("/"),B)for(t=B.length;0<t;t-=1)if((i=getOwn(l,B.slice(0,t).join("/")))&&(i=getOwn(i,v))){x=i,y=q;break e}!z&&h&&getOwn(h,v)&&(z=getOwn(h,v),A=q)}!x&&z&&(x=z,y=A),x&&(k.splice(0,y,x),b=k.join("/"))}return getOwn(K.pkgs,b)||b}function q(a){isBrowser&&each(scripts(),function(b){if(b.getAttribute("data-requiremodule")===a&&b.getAttribute("data-requirecontext")===I.contextName)return b.parentNode.removeChild(b),!0})}function u(a){var b=getOwn(K.paths,a);if(b&&isArray(b)&&1<b.length)return b.shift(),I.require.undef(a),I.makeRequire(null,{skipMap:!0})([a]),!0}function w(a){var b,c=a?a.indexOf("!"):-1;return-1<c&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function y(b,g,j,k){var l,m,q,r,t=null,x=g?g.name:null,c=b,d=!0,y="";return b||(d=!1,b="_@r"+(v+=1)),t=(r=w(b))[0],b=r[1],t&&(t=A(t,x,k),m=getOwn(h,t)),b&&(t?y=j?b:m&&m.normalize?m.normalize(b,function(a){return A(a,x,k)}):-1===b.indexOf("!")?A(b,x,k):b:(t=(r=w(y=A(b,x,k)))[0],y=r[1],j=!0,l=I.nameToUrl(y))),{prefix:t,name:y,parentMap:g,unnormalized:!!(q=!t||m||j?"":"_unnormalized"+(M+=1)),url:l,originalName:c,isDefine:d,id:(t?t+"!"+y:y)+q}}function B(a){var b=a.id,c=getOwn(g,b);return c||(c=g[b]=new I.Module(a)),c}function k(a,b,c){var d=a.id,e=getOwn(g,d);hasProp(h,d)&&(!e||e.defineEmitComplete)?"defined"===b&&c(h[d]):(e=B(a)).error&&"error"===b?c(e.error):e.on(b,c)}function C(a,b){var c=a.requireModules,d=!1;b?b(a):(each(c,function(b){var c=getOwn(g,b);c&&(c.error=a,c.events.error&&(d=!0,c.emit("error",a)))}),d||req.onError(a))}function D(){globalDefQueue.length&&(each(globalDefQueue,function(a){var b=a[0];"string"==typeof b&&(I.defQueueMap[b]=!0),r.push(a)}),globalDefQueue=[])}function j(a){delete g[a],delete p[a]}function E(){var b,c,d=1e3*K.waitSeconds,f=d&&I.startTime+d<new Date().getTime(),j=[],k=[],a=!1,l=!0;if(!H){if(H=!0,eachProp(p,function(b){var d=b.map,e=d.id;if(b.enabled&&(d.isDefine||k.push(b),!b.error))if(!b.inited&&f)u(e)?a=c=!0:(j.push(e),q(e));else if(!b.inited&&b.fetched&&d.isDefine&&(a=!0,!d.prefix))return l=!1}),f&&j.length)return(b=makeError("timeout","Load timeout for modules: ",null,j)).contextName=I.contextName,C(b);l&&each(k,function(a){!function b(c,d,a){var f=c.map.id;c.error?c.emit("error",c.error):(d[f]=!0,each(c.depMaps,function(f,e){var j=f.id,i=getOwn(g,j);!i||c.depMatched[e]||a[j]||(getOwn(d,j)?(c.defineDep(e,h[j]),c.check()):b(i,d,a))}),a[f]=!0)}(a,{},{})}),(!f||c)&&a&&(isBrowser||isWebWorker)&&!t&&(t=setTimeout(function(){t=0,E()},50)),H=!1}}function F(a){hasProp(h,a[0])||B(y(a[0],null,!0)).init(a[1],a[2])}function a(a,b,c,d){a.detachEvent&&!isOpera?d&&a.detachEvent(d,b):a.removeEventListener(c,b,!1)}function o(b){var c=b.currentTarget||b.srcElement;return a(c,I.onScriptLoad,"load","onreadystatechange"),a(c,I.onScriptError,"error"),{node:c,id:c&&c.getAttribute("data-requiremodule")}}function G(){var a;for(D();r.length;){if(null===(a=r.shift())[0])return C(makeError("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));F(a)}I.defQueueMap={}}var H,s,I,J,t,K={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},g={},p={},f={},r=[],h={},m={},L={},v=1,M=1;return J={require:function(a){return a.require?a.require:a.require=I.makeRequire(a.map)},exports:function(a){if(a.usingExports=!0,a.map.isDefine)return a.exports?h[a.map.id]=a.exports:a.exports=h[a.map.id]={}},module:function(a){return a.module?a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){return getOwn(K.config,a.map.id)||{}},exports:a.exports||(a.exports={})}}},(s=function(a){this.events=getOwn(f,a.id)||{},this.map=a,this.shim=getOwn(K.shim,a.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0}).prototype={init:function(a,b,c,d){d=d||{},this.inited||(this.factory=b,c?this.on("error",c):this.events.error&&(c=bind(this,function(a){this.emit("error",a)})),this.depMaps=a&&a.slice(0),this.errback=c,this.inited=!0,this.ignore=d.ignore,d.enabled||this.enabled?this.enable():this.check())},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=b)},fetch:function(){if(!this.fetched){this.fetched=!0,I.startTime=new Date().getTime();var a=this.map;if(!this.shim)return a.prefix?this.callPlugin():this.load();I.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return a.prefix?this.callPlugin():this.load()}))}},load:function(){var a=this.map.url;m[a]||(m[a]=!0,I.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var b,c,d=this.map.id,f=this.depExports,g=this.exports,i=this.factory;if(!this.inited)hasProp(I.defQueueMap,d)||this.fetch();else if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,1>this.depCount&&!this.defined){if(isFunction(i)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{g=I.execCb(d,i,f,g)}catch(a){b=a}else g=I.execCb(d,i,f,g);if(this.map.isDefine&&void 0===g&&((c=this.module)?g=c.exports:this.usingExports&&(g=this.exports)),b)return b.requireMap=this.map,b.requireModules=this.map.isDefine?[this.map.id]:null,b.requireType=this.map.isDefine?"define":"require",C(this.error=b)}else g=i;if(this.exports=g,this.map.isDefine&&!this.ignore&&(h[d]=g,req.onResourceLoad)){var k=[];each(this.depMaps,function(a){k.push(a.normalizedMap||a)}),req.onResourceLoad(I,this.map,k)}j(d),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}},callPlugin:function(){var b=this.map,a=b.id,c=y(b.prefix);this.depMaps.push(c),k(c,"defined",bind(this,function(c){var d,f,e,h=getOwn(L,this.map.id),l=this.map.name,m=this.map.parentMap?this.map.parentMap.name:null,p=I.makeRequire(b.parentMap,{enableBuildCallback:!0});return this.map.unnormalized?(c.normalize&&(l=c.normalize(l,function(a){return A(a,m,!0)})||""),k(f=y(b.prefix+"!"+l,this.map.parentMap,!0),"defined",bind(this,function(a){this.map.normalizedMap=f,this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),void((e=getOwn(g,f.id))&&(this.depMaps.push(f),this.events.error&&e.on("error",bind(this,function(a){this.emit("error",a)})),e.enable()))):h?(this.map.url=I.nameToUrl(h),void this.load()):((d=bind(this,function(a){this.init([],function(){return a},null,{enabled:!0})})).error=bind(this,function(b){this.inited=!0,(this.error=b).requireModules=[a],eachProp(g,function(b){0===b.map.id.indexOf(a+"_unnormalized")&&j(b.map.id)}),C(b)}),d.fromText=bind(this,function(c,f){var g=b.name,h=y(g),i=useInteractive;f&&(c=f),i&&(useInteractive=!1),B(h),hasProp(K.config,a)&&(K.config[g]=K.config[a]);try{req.exec(c)}catch(b){return C(makeError("fromtexteval","fromText eval for "+a+" failed: "+b,b,[a]))}i&&(useInteractive=!0),this.depMaps.push(h),I.completeLoad(g),p([g],d)}),void c.load(b.name,p,d,K))})),I.enable(c,this),this.pluginMaps[c.id]=c},enable:function(){(p[this.map.id]=this).enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(a,b){var c,d,f;if("string"==typeof a){if(a=y(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[b]=a,f=getOwn(J,a.id))return void(this.depExports[b]=f(this));this.depCount+=1,k(a,"defined",bind(this,function(a){this.undefed||(this.defineDep(b,a),this.check())})),this.errback?k(a,"error",bind(this,this.errback)):this.events.error&&k(a,"error",bind(this,function(a){this.emit("error",a)}))}c=a.id,d=g[c],hasProp(J,c)||!d||d.enabled||I.enable(a,this)})),eachProp(this.pluginMaps,bind(this,function(a){var b=getOwn(g,a.id);b&&!b.enabled&&I.enable(a,this)})),this.enabling=!1,this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]),c.push(b)},emit:function(a,b){each(this.events[a],function(a){a(b)}),"error"===a&&delete this.events[a]}},(I={config:K,contextName:z,registry:g,defined:h,urlFetched:m,defQueue:r,defQueueMap:{},Module:s,makeModuleMap:y,nextTick:req.nextTick,onError:C,configure:function(a){if(a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/"),"string"==typeof a.urlArgs){var b=a.urlArgs;a.urlArgs=function(a,c){return(-1===c.indexOf("?")?"?":"&")+b}}var c=K.shim,d={paths:!0,bundles:!0,config:!0,map:!0};eachProp(a,function(a,b){d[b]?(K[b]||(K[b]={}),mixin(K[b],a,!0,!0)):K[b]=a}),a.bundles&&eachProp(a.bundles,function(a,b){each(a,function(a){a!==b&&(L[a]=b)})}),a.shim&&(eachProp(a.shim,function(a,b){isArray(a)&&(a={deps:a}),(a.exports||a.init)&&!a.exportsFn&&(a.exportsFn=I.makeShimExports(a)),c[b]=a}),K.shim=c),a.packages&&each(a.packages,function(a){var b;b=(a="string"==typeof a?{name:a}:a).name,a.location&&(K.paths[b]=a.location),K.pkgs[b]=a.name+"/"+(a.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}),eachProp(g,function(a,b){a.inited||a.map.unnormalized||(a.map=y(b,null,!0))}),(a.deps||a.callback)&&I.require(a.deps||[],a.callback)},makeShimExports:function(a){return function(){var b;return a.init&&(b=a.init.apply(global,arguments)),b||a.exports&&getGlobal(a.exports)}},makeRequire:function(b,c){function d(a,e,f){var i,j;return c.enableBuildCallback&&e&&isFunction(e)&&(e.__requireJsBuild=!0),"string"==typeof a?isFunction(e)?C(makeError("requireargs","Invalid require call"),f):b&&hasProp(J,a)?J[a](g[b.id]):req.get?req.get(I,a,b,d):(i=y(a,b,!1,!0).id,hasProp(h,i)?h[i]:C(makeError("notloaded","Module name \""+i+"\" has not been loaded yet for context: "+z+(b?"":". Use require([])")))):(G(),I.nextTick(function(){G(),(j=B(y(null,b))).skipMap=c.skipMap,j.init(a,e,f,{enabled:!0}),E()}),d)}return c=c||{},mixin(d,{isBrowser:isBrowser,toUrl:function(a){var c,d=a.lastIndexOf("."),f=a.split("/")[0];return-1!==d&&("."!==f&&".."!==f||1<d)&&(c=a.substring(d,a.length),a=a.substring(0,d)),I.nameToUrl(A(a,b&&b.id,!0),c,!0)},defined:function(a){return hasProp(h,y(a,b,!1,!0).id)},specified:function(a){return a=y(a,b,!1,!0).id,hasProp(h,a)||hasProp(g,a)}}),b||(d.undef=function(a){D();var c=y(a,b,!0),d=getOwn(g,a);d.undefed=!0,q(a),delete h[a],delete m[c.url],delete f[a],eachReverse(r,function(b,c){b[0]===a&&r.splice(c,1)}),delete I.defQueueMap[a],d&&(d.events.defined&&(f[a]=d.events),j(a))}),d},enable:function(a){getOwn(g,a.id)&&B(a).enable()},completeLoad:function(a){var b,c,d,e=getOwn(K.shim,a)||{},f=e.exports;for(D();r.length;){if(null===(c=r.shift())[0]){if(c[0]=a,b)break;b=!0}else c[0]===a&&(b=!0);F(c)}if(I.defQueueMap={},d=getOwn(g,a),!b&&!hasProp(h,a)&&d&&!d.inited){if(!(!K.enforceDefine||f&&getGlobal(f)))return u(a)?void 0:C(makeError("nodefine","No define call for "+a,null,[a]));F([a,e.deps||[],e.exportsFn])}E()},nameToUrl:function(b,d,f){var g,h,i,j,k,l,m=getOwn(K.pkgs,b);if(m&&(b=m),l=getOwn(L,b))return I.nameToUrl(l,d,f);if(req.jsExtRegExp.test(b))j=b+(d||"");else{for(g=K.paths,i=(h=b.split("/")).length;0<i;i-=1)if(k=getOwn(g,h.slice(0,i).join("/"))){isArray(k)&&(k=k[0]),h.splice(0,i,k);break}j=h.join("/"),j=("/"===(j+=d||(/^data\:|^blob\:|\?/.test(j)||f?"":".js")).charAt(0)||j.match(/^[\w\+\.\-]+:/)?"":K.baseUrl)+j}return K.urlArgs&&!/^blob\:/.test(j)?j+K.urlArgs(b,j):j},load:function(a,b){req.load(I,a,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){if("load"===a.type||readyRegExp.test((a.currentTarget||a.srcElement).readyState)){interactiveScript=null;var b=o(a);I.completeLoad(b.id)}},onScriptError:function(a){var b=o(a);if(!u(b.id)){var c=[];return eachProp(g,function(a,d){0!==d.indexOf("_@r")&&each(a.depMaps,function(a){if(a.id===b.id)return c.push(d),!0})}),C(makeError("scripterror","Script error for \""+b.id+(c.length?"\", needed by: "+c.join(", "):"\""),a,[b.id]))}}}).require=I.makeRequire(),I}function getInteractiveScript(){return interactiveScript&&"interactive"===interactiveScript.readyState||eachReverse(scripts(),function(a){if("interactive"===a.readyState)return interactiveScript=a}),interactiveScript}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.3.6",commentRegExp=/\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,isBrowser="undefined"!=typeof window&&"undefined"!=typeof navigator&&window.document,isWebWorker=!isBrowser&&"undefined"!=typeof importScripts,readyRegExp=isBrowser&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;if(void 0===define){if(void 0!==requirejs){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}void 0===require||isFunction(require)||(cfg=require,require=void 0),req=requirejs=function(b,c,d,f){var g,h,j="_";return isArray(b)||"string"==typeof b||(h=b,isArray(c)?(b=c,c=d,d=f):b=[]),h&&h.context&&(j=h.context),(g=getOwn(contexts,j))||(g=contexts[j]=req.s.newContext(j)),h&&g.configure(h),g.require(b,c,d)},req.config=function(a){return req(a)},req.nextTick=void 0===setTimeout?function(a){a()}:function(a){setTimeout(a,4)},require||(require=req),req.version="2.3.6",req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],function(a){req[a]=function(){var b=contexts._;return b.require[a].apply(b,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(a){var b=a.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");return b.type=a.scriptType||"text/javascript",b.charset="utf-8",b.async=!0,b},req.load=function(a,b,c){var d,f=a&&a.config||{};if(isBrowser)return(d=req.createNode(f,b,c)).setAttribute("data-requirecontext",a.contextName),d.setAttribute("data-requiremodule",b),!d.attachEvent||d.attachEvent.toString&&0>d.attachEvent.toString().indexOf("[native code")||isOpera?(d.addEventListener("load",a.onScriptLoad,!1),d.addEventListener("error",a.onScriptError,!1)):(useInteractive=!0,d.attachEvent("onreadystatechange",a.onScriptLoad)),d.src=c,f.onNodeCreated&&f.onNodeCreated(d,f,b,c),currentlyAddingScript=d,baseElement?head.insertBefore(d,baseElement):head.appendChild(d),currentlyAddingScript=null,d;if(isWebWorker)try{setTimeout(function(){},0),importScripts(c),a.completeLoad(b)}catch(d){a.onError(makeError("importscripts","importScripts failed for "+b+" at "+c,d,[b]))}},isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),function(a){if(head||(head=a.parentNode),dataMain=a.getAttribute("data-main"))return mainScript=dataMain,cfg.baseUrl||-1!==mainScript.indexOf("!")||(mainScript=(src=mainScript.split("/")).pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,""),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0}),define=function(a,b,c){var d,f;"string"!=typeof a&&(c=b,b=a,a=null),isArray(b)||(c=b,b=null),!b&&isFunction(c)&&(b=[],c.length&&(c.toString().replace(commentRegExp,commentReplace).replace(cjsRequireRegExp,function(a,c){b.push(c)}),b=(1===c.length?["require"]:["require","exports","module"]).concat(b))),useInteractive&&(d=currentlyAddingScript||getInteractiveScript())&&(a||(a=d.getAttribute("data-requiremodule")),f=contexts[d.getAttribute("data-requirecontext")]),f?(f.defQueue.push([a,b,c]),f.defQueueMap[a]=!0):globalDefQueue.push([a,b,c])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}}(this,"undefined"==typeof setTimeout?void 0:setTimeout);