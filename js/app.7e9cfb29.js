(function(e){function t(t){for(var r,u,a=t[0],c=t[1],d=t[2],l=0,p=[];l<a.length;l++)u=a[l],o[u]&&p.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},i=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var f=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("04f5"),o=n.n(r);o.a},"04f5":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"demo-frame"},[n("div",{staticClass:"demo-container"},[n("video",{attrs:{id:"myVideo",autoplay:"true",width:e.computedWidth,height:e.computedHeight,camera:"true"}})])])])},i=[],u=(n("7218"),{name:"app",data:function(){return{computedWidth:640,computedHeight:480}},mounted:function(){var e=this;window.addEventListener("load",function(){e.computedWidth=window.innerWidth;var t=document.getElementById("myVideo");navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:!0}).then(function(e){t.srcObject=e}).catch(function(e){console.log("Something went wrong!")})})}}),a=u,c=(n("034f"),n("2877")),d=Object(c["a"])(a,o,i,!1,null,null,null),f=d.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(f)}}).$mount("#app")}});
//# sourceMappingURL=app.7e9cfb29.js.map