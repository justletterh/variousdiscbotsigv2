/**
 * @license text 2.0.16 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/text/LICENSE
 */
/*jslint regexp: true */
/*global require, XMLHttpRequest, ActiveXObject,
  define, window, process, Packages,
  java, location, Components, FileUtils */
define(["module"],function(b){"use strict";function g(a,b){return void 0===a||""===a?b:a}var h,j,e,k,q,s=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],v="undefined"!=typeof location&&location.href,c=v&&location.protocol&&location.protocol.replace(/\:/,""),l=v&&location.hostname,f=v&&(location.port||void 0),p={},d=b.config&&b.config()||{};return h={version:"2.0.16",strip:function(a){if(a){var b=(a=a.replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,"")).match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);b&&(a=b[1])}else a="";return a},jsEscape:function(a){return a.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:d.createXhr||function(){var a,b,c;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(b=0;3>b;b+=1){c=s[b];try{a=new ActiveXObject(c)}catch(a){}if(a){s=[c];break}}return a},parseName:function(b){var c,d,e,f=!1,g=b.lastIndexOf("."),h=0===b.indexOf("./")||0===b.indexOf("../");return-1!==g&&(!h||1<g)?(c=b.substring(0,g),d=b.substring(g+1)):c=b,-1!==(g=(e=d||c).indexOf("!"))&&(f="strip"===e.substring(g+1),e=e.substring(0,g),d?d=e:c=e),{moduleName:c,ext:d,strip:f}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(b,c,d,e){var f,j,k,l=h.xdRegExp.exec(b);return!l||(f=l[2],k=(j=(j=l[3]).split(":"))[1],j=j[0],(!f||f===c)&&(!j||j.toLowerCase()===d.toLowerCase())&&(!k&&!j||function(a,b,c,d){if(b===d)return!0;if(a===c){if("http"===a)return g(b,"80")===g(d,"80");if("https"===a)return g(b,"443")===g(d,"443")}return!1}(f,k,c,e)))},finishLoad:function(a,b,c,e){c=b?h.strip(c):c,d.isBuild&&(p[a]=c),e(c)},load:function(b,e,g,j){if(j&&j.isBuild&&!j.inlineText)g();else{d.isBuild=j&&j.isBuild;var k=h.parseName(b),i=k.moduleName+(k.ext?"."+k.ext:""),a=e.toUrl(i),m=d.useXhr||h.useXhr;0===a.indexOf("empty:")?g():!v||m(a,c,l,f)?h.get(a,function(a){h.finishLoad(b,k.strip,a,g)},function(a){g.error&&g.error(a)}):e([i],function(a){h.finishLoad(k.moduleName+"."+k.ext,k.strip,a,g)},function(a){g.error&&g.error(a)})}},write:function(a,b,c){if(p.hasOwnProperty(b)){var d=h.jsEscape(p[b]);c.asModule(a+"!"+b,"define(function () { return '"+d+"';});\n")}},writeFile:function(b,d,e,f,g){var i=h.parseName(d),a=i.ext?"."+i.ext:"",j=i.moduleName+a,k=e.toUrl(i.moduleName+a)+".js";h.load(j,e,function(){var a=function(a){return f(k,a)};a.asModule=function(a,b){return f.asModule(a,k,b)},h.write(b,j,a,g)},g)}},"node"!==d.env&&(d.env||"undefined"==typeof process||!process.versions||!process.versions.node||process.versions["node-webkit"]||process.versions["atom-shell"])?"xhr"===d.env||!d.env&&h.createXhr()?h.get=function(b,c,e,f){var g,j=h.createXhr();if(j.open("GET",b,!0),f)for(g in f)f.hasOwnProperty(g)&&j.setRequestHeader(g.toLowerCase(),f[g]);d.onXhr&&d.onXhr(j,b),j.onreadystatechange=function(){var a,f;4===j.readyState&&(399<(a=j.status||0)&&600>a?((f=new Error(b+" HTTP status: "+a)).xhr=j,e&&e(f)):c(j.responseText),d.onXhrComplete&&d.onXhrComplete(j,b))},j.send(null)}:"rhino"!==d.env&&(d.env||"undefined"==typeof Packages||"undefined"==typeof java)?("xpconnect"===d.env||!d.env&&"undefined"!=typeof Components&&Components.classes&&Components.interfaces)&&(e=Components.classes,k=Components.interfaces,Components.utils.import("resource://gre/modules/FileUtils.jsm"),q="@mozilla.org/windows-registry-key;1"in e,h.get=function(b,c){var d,f,g,h={};q&&(b=b.replace(/\//g,"\\")),g=new FileUtils.File(b);try{(d=e["@mozilla.org/network/file-input-stream;1"].createInstance(k.nsIFileInputStream)).init(g,1,0,!1),(f=e["@mozilla.org/intl/converter-input-stream;1"].createInstance(k.nsIConverterInputStream)).init(d,"utf-8",d.available(),k.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),f.readString(d.available(),h),f.close(),d.close(),c(h.value)}catch(a){throw new Error((g&&g.path||"")+": "+a)}}):h.get=function(b,c){var d,e,f=new java.io.File(b),g=java.lang.System.getProperty("line.separator"),h=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(f),"utf-8")),a="";try{for(d=new java.lang.StringBuffer,(e=h.readLine())&&e.length()&&65279===e.charAt(0)&&(e=e.substring(1)),null!==e&&d.append(e);null!==(e=h.readLine());)d.append(g),d.append(e);a=d.toString()+""}finally{h.close()}c(a)}:(j=require.nodeRequire("fs"),h.get=function(a,b,c){try{var d=j.readFileSync(a,"utf8");"\uFEFF"===d[0]&&(d=d.substring(1)),b(d)}catch(a){c&&c(a)}}),h});