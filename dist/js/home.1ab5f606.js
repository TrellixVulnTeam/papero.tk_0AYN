(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"0a06":function(e,A,t){"use strict";var n=t("c532"),r=t("30b5"),o=t("f6b4"),a=t("5270"),i=t("4a7b");function c(e){this.defaults=e,this.interceptors={request:new o,response:new o}}c.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=i(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var A=[a,void 0],t=Promise.resolve(e);this.interceptors.request.forEach((function(e){A.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){A.push(e.fulfilled,e.rejected)}));while(A.length)t=t.then(A.shift(),A.shift());return t},c.prototype.getUri=function(e){return e=i(this.defaults,e),r(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(A,t){return this.request(i(t||{},{method:e,url:A,data:(t||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(A,t,n){return this.request(i(n||{},{method:e,url:A,data:t}))}})),e.exports=c},"0df6":function(e,A,t){"use strict";e.exports=function(e){return function(A){return e.apply(null,A)}}},"1a78":function(e,A,t){e.exports=t.p+"img/MOVEAMAZE_title.2ad733b0.png"},"1d2b":function(e,A,t){"use strict";e.exports=function(e,A){return function(){for(var t=new Array(arguments.length),n=0;n<t.length;n++)t[n]=arguments[n];return e.apply(A,t)}}},2444:function(e,A,t){"use strict";(function(A){var n=t("c532"),r=t("c8af"),o={"Content-Type":"application/x-www-form-urlencoded"};function a(e,A){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=A)}function i(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof A&&"[object process]"===Object.prototype.toString.call(A))&&(e=t("b50d")),e}var c={adapter:i(),transformRequest:[function(e,A){return r(A,"Accept"),r(A,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(a(A,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(a(A,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(A){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){c.headers[e]=n.merge(o)})),e.exports=c}).call(this,t("4362"))},"25f0":function(e,A,t){"use strict";var n=t("6eeb"),r=t("825a"),o=t("d039"),a=t("ad6d"),i="toString",c=RegExp.prototype,s=c[i],u=o((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),f=s.name!=i;(u||f)&&n(RegExp.prototype,i,(function(){var e=r(this),A=String(e.source),t=e.flags,n=String(void 0===t&&e instanceof RegExp&&!("flags"in c)?a.call(e):t);return"/"+A+"/"+n}),{unsafe:!0})},"2a47":function(e,A,t){e.exports=t.p+"img/COSMOS_title.b4a315b4.png"},"2d83":function(e,A,t){"use strict";var n=t("387f");e.exports=function(e,A,t,r,o){var a=new Error(e);return n(a,A,t,r,o)}},"2e67":function(e,A,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"30b5":function(e,A,t){"use strict";var n=t("c532");function r(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,A,t){if(!A)return e;var o;if(t)o=t(A);else if(n.isURLSearchParams(A))o=A.toString();else{var a=[];n.forEach(A,(function(e,A){null!==e&&"undefined"!==typeof e&&(n.isArray(e)?A+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),a.push(r(A)+"="+r(e))})))})),o=a.join("&")}if(o){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},"34d0":function(e,A,t){e.exports=t.p+"img/DUBBLOCK_title.18713dc3.png"},"387f":function(e,A,t){"use strict";e.exports=function(e,A,t,n,r){return e.config=A,t&&(e.code=t),e.request=n,e.response=r,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},3934:function(e,A,t){"use strict";var n=t("c532");e.exports=n.isStandardBrowserEnv()?function(){var e,A=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");function r(e){var n=e;return A&&(t.setAttribute("href",n),n=t.href),t.setAttribute("href",n),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return e=r(window.location.href),function(A){var t=n.isString(A)?r(A):A;return t.protocol===e.protocol&&t.host===e.host}}():function(){return function(){return!0}}()},"3cd0":function(e,A,t){},4167:function(e,A,t){e.exports=t.p+"img/COSMOS_background.e6291356.png"},"418e":function(e,A,t){e.exports=t.p+"img/DUCKTAN_title.4820bf98.png"},4362:function(e,A,t){A.nextTick=function(e){var A=Array.prototype.slice.call(arguments);A.shift(),setTimeout((function(){e.apply(null,A)}),0)},A.platform=A.arch=A.execPath=A.title="browser",A.pid=1,A.browser=!0,A.env={},A.argv=[],A.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,n="/";A.cwd=function(){return n},A.chdir=function(A){e||(e=t("df7c")),n=e.resolve(A,n)}}(),A.exit=A.kill=A.umask=A.dlopen=A.uptime=A.memoryUsage=A.uvCounters=function(){},A.features={}},4424:function(e,A,t){e.exports=t.p+"img/2.790e999b.png"},"467f":function(e,A,t){"use strict";var n=t("2d83");e.exports=function(e,A,t){var r=t.config.validateStatus;t.status&&r&&!r(t.status)?A(n("Request failed with status code "+t.status,t.config,null,t.request,t)):e(t)}},"4a7b":function(e,A,t){"use strict";var n=t("c532");e.exports=function(e,A){A=A||{};var t={},r=["url","method","data"],o=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function c(e,A){return n.isPlainObject(e)&&n.isPlainObject(A)?n.merge(e,A):n.isPlainObject(A)?n.merge({},A):n.isArray(A)?A.slice():A}function s(r){n.isUndefined(A[r])?n.isUndefined(e[r])||(t[r]=c(void 0,e[r])):t[r]=c(e[r],A[r])}n.forEach(r,(function(e){n.isUndefined(A[e])||(t[e]=c(void 0,A[e]))})),n.forEach(o,s),n.forEach(a,(function(r){n.isUndefined(A[r])?n.isUndefined(e[r])||(t[r]=c(void 0,e[r])):t[r]=c(void 0,A[r])})),n.forEach(i,(function(n){n in A?t[n]=c(e[n],A[n]):n in e&&(t[n]=c(void 0,e[n]))}));var u=r.concat(o).concat(a).concat(i),f=Object.keys(e).concat(Object.keys(A)).filter((function(e){return-1===u.indexOf(e)}));return n.forEach(f,s),t}},"4c69":function(e,A,t){e.exports=t.p+"img/1.ce45c79b.png"},"520e":function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9ba0UqFewg4pChOlkoKuIoVSyChdJWaNXB5NIvaNKQpLg4Cq4FBz8Wqw4uzro6uAqC4AeIm5uToouU+L+k0CLGg+N+vLv3uHsHeJtVphg9MUBRTT2diAu5/KoQeIUfvRhECDGRGVoys5iF6/i6h4evd1Ge5X7uzzEgFwwGeATiOabpJvEG8cymqXHeJw6zsigTnxNP6HRB4keuSw6/cS7Z7OWZYT2bnicOEwulLpa6mJV1hXiaOCIrKuV7cw7LnLc4K9U6a9+TvzBYUFcyXKc5igSWkEQKAiTUUUEVJqK0qqQYSNN+3MU/YvtT5JLIVQEjxwJqUCDafvA/+N2tUZyadJKCccD/YlkfY0BgF2g1LOv72LJaJ4DvGbhSO/5aE5j9JL3R0SJHQGgbuLjuaNIecLkDDD9poi7ako+mt1gE3s/om/LA0C3Qv+b01t7H6QOQpa6Wb4CDQ2C8RNnrLu/u6+7t3zPt/n4AbVNypVJ6is0AAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflBQcJDCPeaZKpAAACW0lEQVR42u3UMQEAAAjDsIF/z2AAByQSerSSTICXWgIwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAC4LHQiAv+gJinMAAAAAElFTkSuQmCC"},5270:function(e,A,t){"use strict";var n=t("c532"),r=t("c401"),o=t("2e67"),a=t("2444");function i(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){i(e),e.headers=e.headers||{},e.data=r(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(A){delete e.headers[A]}));var A=e.adapter||a.adapter;return A(e).then((function(A){return i(e),A.data=r(A.data,A.headers,e.transformResponse),A}),(function(A){return o(A)||(i(e),A&&A.response&&(A.response.data=r(A.response.data,A.response.headers,e.transformResponse))),Promise.reject(A)}))}},"58f3":function(e,A,t){"use strict";t("86b8")},"5f02":function(e,A,t){"use strict";e.exports=function(e){return"object"===typeof e&&!0===e.isAxiosError}},"6be6":function(e,A,t){e.exports=t.p+"img/UNSEEN_preview.788f96f4.png"},"78a2":function(e,A,t){e.exports=t.p+"img/0.19bd0256.png"},"78cd":function(e,A,t){},"7a77":function(e,A,t){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},"7aac":function(e,A,t){"use strict";var n=t("c532");e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,A,t,r,o,a){var i=[];i.push(e+"="+encodeURIComponent(A)),n.isNumber(t)&&i.push("expires="+new Date(t).toGMTString()),n.isString(r)&&i.push("path="+r),n.isString(o)&&i.push("domain="+o),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var A=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return A?decodeURIComponent(A[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"83b9":function(e,A,t){"use strict";var n=t("d925"),r=t("e683");e.exports=function(e,A){return e&&!n(A)?r(e,A):A}},"85f6":function(e,A,t){e.exports=t.p+"img/COSMOS_preview.2b9f9f65.png"},8616:function(e,A,t){e.exports=t.p+"img/UNSEEN_title.c7b47790.png"},"86b8":function(e,A,t){},"8df4":function(e,A,t){"use strict";var n=t("7a77");function r(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var A;this.promise=new Promise((function(e){A=e}));var t=this;e((function(e){t.reason||(t.reason=new n(e),A(t.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e,A=new r((function(A){e=A}));return{token:A,cancel:e}},e.exports=r},"8f3e":function(e,A,t){},"944d":function(e,A,t){e.exports=t.p+"img/UNSEEN_background.349ac6ad.png"},a046:function(e,A,t){"use strict";t("78cd")},a405:function(e,A,t){e.exports=t.p+"img/hamburger_icon.65809c1c.png"},ad6d:function(e,A,t){"use strict";var n=t("825a");e.exports=function(){var e=n(this),A="";return e.global&&(A+="g"),e.ignoreCase&&(A+="i"),e.multiline&&(A+="m"),e.dotAll&&(A+="s"),e.unicode&&(A+="u"),e.sticky&&(A+="y"),A}},b0c0:function(e,A,t){var n=t("83ab"),r=t("9bf2").f,o=Function.prototype,a=o.toString,i=/^\s*function ([^ (]*)/,c="name";n&&!(c in o)&&r(o,c,{configurable:!0,get:function(){try{return a.call(this).match(i)[1]}catch(e){return""}}})},b50d:function(e,A,t){"use strict";var n=t("c532"),r=t("467f"),o=t("7aac"),a=t("30b5"),i=t("83b9"),c=t("c345"),s=t("3934"),u=t("2d83");e.exports=function(e){return new Promise((function(A,t){var f=e.data,l=e.headers;n.isFormData(f)&&delete l["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var p=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";l.Authorization="Basic "+btoa(p+":"+g)}var w=i(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),a(w,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?c(d.getAllResponseHeaders()):null,o=e.responseType&&"text"!==e.responseType?d.response:d.responseText,a={data:o,status:d.status,statusText:d.statusText,headers:n,config:e,request:d};r(A,t,a),d=null}},d.onabort=function(){d&&(t(u("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){t(u("Network Error",e,null,d)),d=null},d.ontimeout=function(){var A="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(A=e.timeoutErrorMessage),t(u(A,e,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var m=(e.withCredentials||s(w))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;m&&(l[e.xsrfHeaderName]=m)}if("setRequestHeader"in d&&n.forEach(l,(function(e,A){"undefined"===typeof f&&"content-type"===A.toLowerCase()?delete l[A]:d.setRequestHeader(A,e)})),n.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(h){if("json"!==e.responseType)throw h}"function"===typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),t(e),d=null)})),f||(f=null),d.send(f)}))}},bb51:function(e,A,t){"use strict";t.r(A);var n=t("7a23"),r=Object(n["D"])("data-v-3442692c");Object(n["t"])("data-v-3442692c");var o={class:"main-panel"};Object(n["r"])();var a=r((function(e,A,r,a,i,c){var s=Object(n["x"])("UserHamburgerMenu"),u=Object(n["x"])("Header"),f=Object(n["x"])("GamesTable");return Object(n["q"])(),Object(n["d"])("div",o,[Object(n["g"])(s,{show:i.showHamburgerMenu,src:t("a405"),onToggleShow:A[1]||(A[1]=function(e){return i.showHamburgerMenu=e})},null,8,["show","src"]),Object(n["g"])(u),Object(n["g"])(f)])})),i=(t("d3b7"),Object(n["D"])("data-v-2c8c2172"));Object(n["t"])("data-v-2c8c2172");var c={class:"games-table__main-table"},s={class:"games-table__games-container"};Object(n["r"])();var u=i((function(e,A,t,r,o,a){var i=Object(n["x"])("GameOfTable");return Object(n["q"])(),Object(n["d"])("div",c,[Object(n["g"])("div",s,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(o.games,(function(e,A){return Object(n["q"])(),Object(n["d"])(i,{key:A,game:e},null,8,["game"])})),128))])])})),f=[{name:"UNSEEN",url:"/unseen",image:t("944d"),title:t("8616"),preview:t("6be6"),gridColumn:1,gridRow:1,color:"$theme-color",available:!0},{name:"COSMOS",url:"/cosmos",image:t("4167"),title:t("2a47"),preview:t("85f6"),gridColumn:5,gridRow:2,color:"$theme-color",available:!0},{name:"MOVEAMAZE",url:"/comingsoon",image:t("effa"),title:t("1a78"),preview:t("f0e8"),gridColumn:3,gridRow:3,color:"$theme-color",available:!0},{name:"DUCKTAN",url:"/ducktan",image:t("520e"),title:t("418e"),preview:t("fced"),gridColumn:2,gridRow:4,color:"$theme-color",available:!0},{name:"DUBBLOCK",url:"/dubblock",image:t("effa"),title:t("34d0"),preview:t("f0e8"),gridColumn:4,gridRow:5,color:"$theme-color",available:!0},{name:"0",url:"/",title:t("78a2"),gridColumn:2,gridRow:6,color:"$theme-color",available:!0,isPaperoImage:!0},{name:"1",url:"/",title:t("4c69"),gridColumn:3,gridRow:9,color:"$theme-color",available:!0,isPaperoImage:!0},{name:"2",url:"/",title:t("4424"),gridColumn:4,gridRow:7,color:"$theme-color",available:!0,isPaperoImage:!0}],l=(t("b0c0"),t("f0e8")),d=t.n(l),p=Object(n["D"])("data-v-db23747c");Object(n["t"])("data-v-db23747c");var g={key:1,loop:"",autoplay:"",class:"coming_soon_video"},w=Object(n["g"])("img",{src:d.a,type:"video/gif"},null,-1);Object(n["r"])();var m=p((function(e,A,t,r,o,a){return Object(n["q"])(),Object(n["d"])("div",{onClick:A[1]||(A[1]=function(){return a.redirectToUrl&&a.redirectToUrl.apply(a,arguments)}),class:["game_container",{not_available:!t.game.available,papero_image:t.game.isPaperoImage}],style:{"background-color":t.game.color,"grid-column":t.game.gridColumn,"grid-row":t.game.gridRow}},[Object(n["g"])("img",{class:"background_image",src:t.game.image},null,8,["src"]),"COMING SOON"!==t.game.name?(Object(n["q"])(),Object(n["d"])("img",{key:0,class:"title_image",src:t.game.title},null,8,["src"])):Object(n["e"])("",!0),Object(n["g"])("img",{class:"preview_image",src:t.game.preview},null,8,["src"]),"COMING SOON"===t.game.name?(Object(n["q"])(),Object(n["d"])("div",g,[w])):Object(n["e"])("",!0)],6)})),h=(t("25f0"),{name:"GameOfTable",components:{},props:{game:Object},methods:{redirectToUrl:function(){window.location.href=this.game.url.toString()}}});t("e498");h.render=m,h.__scopeId="data-v-db23747c";var M=h,b={name:"GamesTable",data:function(){return{games:f}},components:{GameOfTable:M}};t("bd45");b.render=u,b.__scopeId="data-v-2c8c2172";var D=b,v=t("f773"),y=t.n(v),O=Object(n["D"])("data-v-2ea5af19");Object(n["t"])("data-v-2ea5af19");var x={class:"header__main-panel"},C=Object(n["g"])("img",{src:y.a},null,-1);Object(n["r"])();var E=O((function(e,A,t,r,o,a){return Object(n["q"])(),Object(n["d"])("div",x,[C])})),j={name:"Header"};t("a046");j.render=E,j.__scopeId="data-v-2ea5af19";var S=j,B=t("bc3a"),U=t.n(B),R=t("e6fd"),T=t("4360"),L=Object(n["h"])((function(){return t.e("userHamburgerMenu").then(t.bind(null,"5d86"))})),N={name:"Home",components:{Header:S,UserHamburgerMenu:L,GamesTable:D},data:function(){return{showHamburgerMenu:!1}},beforeRouteEnter:function(e,A,t){var n=function(){U.a.get(R["a"].createLocalAccountUrl).then((function(e){T["a"].dispatch("setLogged",!1),T["a"].dispatch("setUsername",e.data.username),t()})).catch((function(){location.href=location.origin+"/error?from="+location.pathname}))};-1===T["a"].state.logged||""===T["a"].state.username?U.a.get(R["a"].getLoginInfoUrl).then((function(e){e.data?(T["a"].dispatch("setLogged",e.data.google_signed_in),T["a"].dispatch("setUsername",e.data.username),t()):n()})).catch((function(){location.href=location.origin+"/error?from="+location.pathname})):null===T["a"].state.username&&!1===T["a"].state.logged?n():t()}};t("58f3");N.render=a,N.__scopeId="data-v-3442692c";A["default"]=N},bc3a:function(e,A,t){e.exports=t("cee4")},bd45:function(e,A,t){"use strict";t("3cd0")},c345:function(e,A,t){"use strict";var n=t("c532"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var A,t,o,a={};return e?(n.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),A=n.trim(e.substr(0,o)).toLowerCase(),t=n.trim(e.substr(o+1)),A){if(a[A]&&r.indexOf(A)>=0)return;a[A]="set-cookie"===A?(a[A]?a[A]:[]).concat([t]):a[A]?a[A]+", "+t:t}})),a):a}},c401:function(e,A,t){"use strict";var n=t("c532");e.exports=function(e,A,t){return n.forEach(t,(function(t){e=t(e,A)})),e}},c532:function(e,A,t){"use strict";var n=t("1d2b"),r=Object.prototype.toString;function o(e){return"[object Array]"===r.call(e)}function a(e){return"undefined"===typeof e}function i(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function c(e){return"[object ArrayBuffer]"===r.call(e)}function s(e){return"undefined"!==typeof FormData&&e instanceof FormData}function u(e){var A;return A="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,A}function f(e){return"string"===typeof e}function l(e){return"number"===typeof e}function d(e){return null!==e&&"object"===typeof e}function p(e){if("[object Object]"!==r.call(e))return!1;var A=Object.getPrototypeOf(e);return null===A||A===Object.prototype}function g(e){return"[object Date]"===r.call(e)}function w(e){return"[object File]"===r.call(e)}function m(e){return"[object Blob]"===r.call(e)}function h(e){return"[object Function]"===r.call(e)}function M(e){return d(e)&&h(e.pipe)}function b(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function D(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function y(e,A){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),o(e))for(var t=0,n=e.length;t<n;t++)A.call(null,e[t],t,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&A.call(null,e[r],r,e)}function O(){var e={};function A(A,t){p(e[t])&&p(A)?e[t]=O(e[t],A):p(A)?e[t]=O({},A):o(A)?e[t]=A.slice():e[t]=A}for(var t=0,n=arguments.length;t<n;t++)y(arguments[t],A);return e}function x(e,A,t){return y(A,(function(A,r){e[r]=t&&"function"===typeof A?n(A,t):A})),e}function C(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}e.exports={isArray:o,isArrayBuffer:c,isBuffer:i,isFormData:s,isArrayBufferView:u,isString:f,isNumber:l,isObject:d,isPlainObject:p,isUndefined:a,isDate:g,isFile:w,isBlob:m,isFunction:h,isStream:M,isURLSearchParams:b,isStandardBrowserEnv:v,forEach:y,merge:O,extend:x,trim:D,stripBOM:C}},c8af:function(e,A,t){"use strict";var n=t("c532");e.exports=function(e,A){n.forEach(e,(function(t,n){n!==A&&n.toUpperCase()===A.toUpperCase()&&(e[A]=t,delete e[n])}))}},cee4:function(e,A,t){"use strict";var n=t("c532"),r=t("1d2b"),o=t("0a06"),a=t("4a7b"),i=t("2444");function c(e){var A=new o(e),t=r(o.prototype.request,A);return n.extend(t,o.prototype,A),n.extend(t,A),t}var s=c(i);s.Axios=o,s.create=function(e){return c(a(s.defaults,e))},s.Cancel=t("7a77"),s.CancelToken=t("8df4"),s.isCancel=t("2e67"),s.all=function(e){return Promise.all(e)},s.spread=t("0df6"),s.isAxiosError=t("5f02"),e.exports=s,e.exports.default=s},d925:function(e,A,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},df7c:function(e,A,t){(function(e){function t(e,A){for(var t=0,n=e.length-1;n>=0;n--){var r=e[n];"."===r?e.splice(n,1):".."===r?(e.splice(n,1),t++):t&&(e.splice(n,1),t--)}if(A)for(;t--;t)e.unshift("..");return e}function n(e){"string"!==typeof e&&(e+="");var A,t=0,n=-1,r=!0;for(A=e.length-1;A>=0;--A)if(47===e.charCodeAt(A)){if(!r){t=A+1;break}}else-1===n&&(r=!1,n=A+1);return-1===n?"":e.slice(t,n)}function r(e,A){if(e.filter)return e.filter(A);for(var t=[],n=0;n<e.length;n++)A(e[n],n,e)&&t.push(e[n]);return t}A.resolve=function(){for(var A="",n=!1,o=arguments.length-1;o>=-1&&!n;o--){var a=o>=0?arguments[o]:e.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(A=a+"/"+A,n="/"===a.charAt(0))}return A=t(r(A.split("/"),(function(e){return!!e})),!n).join("/"),(n?"/":"")+A||"."},A.normalize=function(e){var n=A.isAbsolute(e),a="/"===o(e,-1);return e=t(r(e.split("/"),(function(e){return!!e})),!n).join("/"),e||n||(e="."),e&&a&&(e+="/"),(n?"/":"")+e},A.isAbsolute=function(e){return"/"===e.charAt(0)},A.join=function(){var e=Array.prototype.slice.call(arguments,0);return A.normalize(r(e,(function(e,A){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},A.relative=function(e,t){function n(e){for(var A=0;A<e.length;A++)if(""!==e[A])break;for(var t=e.length-1;t>=0;t--)if(""!==e[t])break;return A>t?[]:e.slice(A,t-A+1)}e=A.resolve(e).substr(1),t=A.resolve(t).substr(1);for(var r=n(e.split("/")),o=n(t.split("/")),a=Math.min(r.length,o.length),i=a,c=0;c<a;c++)if(r[c]!==o[c]){i=c;break}var s=[];for(c=i;c<r.length;c++)s.push("..");return s=s.concat(o.slice(i)),s.join("/")},A.sep="/",A.delimiter=":",A.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var A=e.charCodeAt(0),t=47===A,n=-1,r=!0,o=e.length-1;o>=1;--o)if(A=e.charCodeAt(o),47===A){if(!r){n=o;break}}else r=!1;return-1===n?t?"/":".":t&&1===n?"/":e.slice(0,n)},A.basename=function(e,A){var t=n(e);return A&&t.substr(-1*A.length)===A&&(t=t.substr(0,t.length-A.length)),t},A.extname=function(e){"string"!==typeof e&&(e+="");for(var A=-1,t=0,n=-1,r=!0,o=0,a=e.length-1;a>=0;--a){var i=e.charCodeAt(a);if(47!==i)-1===n&&(r=!1,n=a+1),46===i?-1===A?A=a:1!==o&&(o=1):-1!==A&&(o=-1);else if(!r){t=a+1;break}}return-1===A||-1===n||0===o||1===o&&A===n-1&&A===t+1?"":e.slice(A,n)};var o="b"==="ab".substr(-1)?function(e,A,t){return e.substr(A,t)}:function(e,A,t){return A<0&&(A=e.length+A),e.substr(A,t)}}).call(this,t("4362"))},e498:function(e,A,t){"use strict";t("8f3e")},e683:function(e,A,t){"use strict";e.exports=function(e,A){return A?e.replace(/\/+$/,"")+"/"+A.replace(/^\/+/,""):e}},e6fd:function(e,A,t){"use strict";t.d(A,"a",(function(){return r}));var n="https://papero.me",r={getLoginInfoUrl:n+"/user/get_info",logoutUrl:n+"/auth/logout",createLocalAccountUrl:n+"/auth/local"}},effa:function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TpSJVBzsUEcxQnSyIijhKFYtgobQVWnUwufQLmjQkKS6OgmvBwY/FqoOLs64OroIg+AHi5uak6CIl/i8ptIjx4Lgf7+497t4BQqPCVLNrAlA1y0jFY2I2tyoGXuHHCPoRhiAxU0+kFzPwHF/38PH1LsqzvM/9OfqUvMkAn0g8x3TDIt4gntm0dM77xCFWkhTic+Jxgy5I/Mh12eU3zkWHBZ4ZMjKpeeIQsVjsYLmDWclQiaeJI4qqUb6QdVnhvMVZrdRY6578hcG8tpLmOs1hxLGEBJIQIaOGMiqwEKVVI8VEivZjHv4hx58kl0yuMhg5FlCFCsnxg//B727NwtSkmxSMAd0vtv0xCgR2gWbdtr+Pbbt5AvifgSut7a82gNlP0uttLXIEDGwDF9dtTd4DLneA8JMuGZIj+WkKhQLwfkbflAMGb4HeNbe31j5OH4AMdbV8AxwcAmNFyl73eHdPZ2//nmn19wNGE3KVW2zzZQAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+UDHw4aFGXuHiQAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAACW0lEQVR42u3UMQEAAAjDMMC/52EAByQSerSTpICXRgIwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMADAAwAAAAwAMAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwAMADAAAADAAwADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAAwAMAAAAMADAC4LB6wBfy1zhUaAAAAAElFTkSuQmCC"},f0e8:function(e,A,t){e.exports=t.p+"img/COMINGSOON_video.a70ee6a3.gif"},f6b4:function(e,A,t){"use strict";var n=t("c532");function r(){this.handlers=[]}r.prototype.use=function(e,A){return this.handlers.push({fulfilled:e,rejected:A}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){n.forEach(this.handlers,(function(A){null!==A&&e(A)}))},e.exports=r},f773:function(e,A,t){e.exports=t.p+"img/title.6c74d7ac.png"},fced:function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEABAMAAACuXLVVAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAA9QTFRFAAAA/////xK0vBP+7xGpUxxz8QAAAAV0Uk5TAP////8c0CZSAAAB5klEQVR4nO3b23GDMBBAUaeD0IKUCqT+e4sHVg8biYfseCfsvR8xJAwcCLBfvt2IiIiIiIjoUn1NEwAAugCy3TR9AwCgCyDTqQ9BAADIdupDEAAAMp36EAQAgGynPgQBAHhj7kz7u4tnAjAG2B6CAAB8ALAdgKsD9ocgAAB/DNg5OgAjAPVpCADAdgDMALpjEcAQYF4Jbllyztcr82dIK8cB2Swrfv70Me1sDZgPWgMefulfAYQC2QLk8/T1RgKQ3bQPegLgtwCxBViW5AIMAuZPn87mIMDLeccECO8B+A5ALtUDQBSy+c8K0JxKsZRP7b7LDHBdgG8Ayn0sK0OAMAPSpfAqgPIgO6cOcB8HyD/evwaIa0CzNkAeg+VmaAOWl2T5sXoKTj6GPUDoAGTLtNR4D5x8ERVAupBuubrbAL9aCoOv4i4g9AHlT9VGLgNiE/A8lZqA9HLfAaQXZr1UT8MwBnBpIPmYHoU2IN8q1ZLcMiHtYxwQM6DxIjreKcB+lwA8B8AmoB6LAACoAOoAGAbIWAQAQA8gATAOuI9FAAB0ATftpwCAKkB9GgIAIP1DAL0h9e/7AABAtlP/vg8AAGQ69SEIAADZTn0IAgBAplMfggAAkO3UhyAAAEREREREREREdMF+AfkYXEa1s8EfAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=home.1ab5f606.js.map