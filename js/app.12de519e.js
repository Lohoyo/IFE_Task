(function(t){function e(e){for(var r,i,c=e[0],a=e[1],l=e[2],p=0,f=[];p<c.length;p++)i=c[p],o[i]&&f.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);s&&s(e);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},u=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=a;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("刘胡粤的博客")]),n("a",{attrs:{href:""},on:{click:t.go}},[t._v("关于刘胡粤")]),t._l(t.articles,function(e,r){return n("article",{key:r,on:{click:function(n){return t.openArticle(e._id)}}},[n("h2",[t._v(t._s(e.title))]),n("p",[t._v(t._s(e.content))])])})],2)},u=[],i=n("6829"),c=n.n(i),a=function(){return c.a.get("https://liuhuyue-server.herokuapp.com/")},l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("我爱吃面包")])},s=[],p=n("2877"),f={},d=Object(p["a"])(f,l,s,!1,null,null,null),h=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{attrs:{type:"button"},on:{click:t.goHome}},[t._v("首页")]),n("h2",[t._v(t._s(t.title))]),n("p",[t._v(t._s(t.content))])])},b=[],_=(n("386d"),n("28a5"),function(t){return c.a.get("https://liuhuyue-server.herokuapp.com/article/"+t)}),w={data:function(){return{title:"",content:""}},created:function(){var t=this;_(location.search.split("=")[1]).then(function(e){t.title=e.data.title,t.content=e.data.content})},methods:{goHome:function(){this.$root.currentRoute="/",window.history.pushState(null,k,"/")}}},y=w,m=Object(p["a"])(y,v,b,!1,null,null,null),g=m.exports,O={data:function(){return{articles:[]}},created:function(){var t=this;a().then(function(e){t.articles=e.data})},methods:{go:function(t){t.preventDefault(),this.$root.currentRoute="/about",window.history.pushState(null,h,"/about")},openArticle:function(t){this.$root.currentRoute="/article",window.history.pushState(null,g,"/article?id="+t)}}},j=O,x=Object(p["a"])(j,o,u,!1,null,null,null),k=x.exports;r["a"].config.productionTip=!1;var S={"/":k,"/index.html":k,"/about":h,"/article":g},P=new r["a"]({el:"#app",data:{currentRoute:window.location.pathname},computed:{ViewComponent:function(){return S[this.currentRoute]}},render:function(t){return t(this.ViewComponent)}});window.addEventListener("popstate",function(){P.currentRoute=window.location.pathname})}});
//# sourceMappingURL=app.12de519e.js.map