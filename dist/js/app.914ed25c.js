(function(t){function e(e){for(var a,o,i=e[0],s=e[1],u=e[2],A=0,l=[];A<i.length;A++)o=i[A],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&l.push(c[o][0]),c[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(l.length)l.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var i=n[o];0!==c[i]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},c={app:0},r=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-7375c00d":"9ccb624f","chunk-19da7ace":"ea0f235c","chunk-31234925":"334d3f86","chunk-19ee1ad2":"9dfdcb23","chunk-52259cac":"96ddf31f","chunk-428379e4":"21d6d58c","chunk-9e57ae60":"1358a3e1","chunk-7dedcdd2":"668a4335"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-7375c00d":1,"chunk-19da7ace":1,"chunk-19ee1ad2":1,"chunk-52259cac":1,"chunk-428379e4":1,"chunk-9e57ae60":1,"chunk-7dedcdd2":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-7375c00d":"e3f3c6ea","chunk-19da7ace":"c0d63fcc","chunk-31234925":"31d6cfe0","chunk-19ee1ad2":"a9f3d540","chunk-52259cac":"5a7a2d28","chunk-428379e4":"819c4031","chunk-9e57ae60":"b643bd88","chunk-7dedcdd2":"420c296d"}[t]+".css",c=s.p+a,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var u=r[i],A=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(A===a||A===c))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],A=u.getAttribute("data-href");if(A===a||A===c)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||c,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[t],d.parentNode.removeChild(d),n(r)},d.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[t]=0})));var a=c[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=c[t]=[e,n]}));e.push(a[2]=r);var u,A=document.createElement("script");A.charset="utf-8",A.timeout=120,s.nc&&A.setAttribute("nonce",s.nc),A.src=i(t);var l=new Error;u=function(e){A.onerror=A.onload=null,clearTimeout(d);var n=c[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}c[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:A})}),12e4);A.onerror=A.onload=u,document.head.appendChild(A)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],A=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=A;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0de4":function(t,e,n){},"1c54":function(t,e,n){"use strict";n("0de4")},2872:function(t,e,n){t.exports=n.p+"img/shopcart.c68224ce.svg"},"45ea":function(t,e,n){"use strict";n("cf1a")},"51a1":function(t,e,n){"use strict";n("9d7d")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),t.$route.meta.footShow?n("main-tab-bar"):t._e()],1)},c=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tab-bar",{staticClass:"tab-bar"},[a("tab-bar-item",{attrs:{path:"/home"}},[a("img",{attrs:{slot:"item-icon",src:n("9443"),alt:""},slot:"item-icon"}),a("img",{attrs:{slot:"item-icon-active",src:n("b508"),alt:""},slot:"item-icon-active"}),a("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),a("tab-bar-item",{attrs:{path:"/category"}},[a("img",{attrs:{slot:"item-icon",src:n("57cd"),alt:""},slot:"item-icon"}),a("img",{attrs:{slot:"item-icon-active",src:n("a5ef"),alt:""},slot:"item-icon-active"}),a("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分类")])]),a("tab-bar-item",{attrs:{path:"/cart"}},[a("img",{attrs:{slot:"item-icon",src:n("2872"),alt:""},slot:"item-icon"}),a("img",{attrs:{slot:"item-icon-active",src:n("c3f8"),alt:""},slot:"item-icon-active"}),a("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),a("tab-bar-item",{attrs:{path:"/profile"}},[a("img",{attrs:{slot:"item-icon",src:n("e55d"),alt:""},slot:"item-icon"}),a("img",{attrs:{slot:"item-icon-active",src:n("d151"),alt:""},slot:"item-icon-active"}),a("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},u=[],A={name:"TabBar"},l=A,d=(n("1c54"),n("2877")),h=Object(d["a"])(l,s,u,!1,null,"f34b9104",null),f=h.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[t.isActive?n("div",[t._t("item-icon-active")],2):n("div",[t._t("item-icon")],2),n("div",{style:t.activeStyle},[t._t("item-text")],2)])},p=[],g=(n("ac1f"),n("5319"),{name:"TabBarItem",props:{path:String,activeColor:{type:String,default:"#FF5777"}},data:function(){return{}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{color:this.activeColor}:{}}},methods:{itemClick:function(){this.$router.replace(this.path)}}}),v=g,b=(n("51a1"),Object(d["a"])(v,m,p,!1,null,"c3b5ab4a",null)),C=b.exports,B={name:"MainTabBar",components:{TabBar:f,TabBarItem:C}},w=B,E=Object(d["a"])(w,r,i,!1,null,"7f1a1804",null),k=E.exports,y={name:"App",components:{MainTabBar:k}},x=y,Q=(n("45ea"),Object(d["a"])(x,o,c,!1,null,"1f068526",null)),J=Q.exports,O=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),S=function(){return Promise.all([n.e("chunk-7375c00d"),n.e("chunk-31234925"),n.e("chunk-52259cac"),n.e("chunk-428379e4")]).then(n.bind(null,"1480"))},K=function(){return Promise.all([n.e("chunk-7375c00d"),n.e("chunk-19da7ace")]).then(n.bind(null,"d6ee"))},L=function(){return Promise.all([n.e("chunk-7375c00d"),n.e("chunk-31234925"),n.e("chunk-19ee1ad2")]).then(n.bind(null,"778d"))},M=function(){return n.e("chunk-7dedcdd2").then(n.bind(null,"6200"))},I=function(){return Promise.all([n.e("chunk-7375c00d"),n.e("chunk-31234925"),n.e("chunk-52259cac"),n.e("chunk-9e57ae60")]).then(n.bind(null,"ed06"))};a["a"].use(O["a"]);var q=[{path:"",redirect:"/home",meta:{footShow:!0}},{path:"/home",component:S,meta:{footShow:!0}},{path:"/profile",component:M,meta:{footShow:!0}},{path:"/cart",component:K,meta:{footShow:!0}},{path:"/category",component:L,meta:{footShow:!0}},{path:"/detail/:iid",component:I}],G=new O["a"]({routes:q,mode:"history"}),F=G,T=(n("7db0"),n("2f62"));a["a"].use(T["a"]);var R=new T["a"].Store({state:{cartList:[]},mutations:{addCounter:function(t,e){e.count++},addToCart:function(t,e){t.cartList.push(e)}},actions:{addCart:function(t,e){return new Promise((function(n,a){var o=t.state.cartList.find((function(t){return t.iid===e.iid}));o?(t.commit("addCounter",o),n("加入购物车数量+1!")):(e.count=1,t.commit("addToCart",e),n("加入购物车成功!"))}))}}}),j=R,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"toast"},[t._v(" "+t._s(t.message)+" ")])},H=[],U={name:"Toast",props:{},data:function(){return{message:"",isShow:!1}},methods:{show:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;this.isShow=!0,this.message=t,setTimeout((function(){e.isShow=!1,e.message=""}),n)}}},Y=U,P=(n("a360"),Object(d["a"])(Y,D,H,!1,null,"4ae785e4",null)),V=P.exports,W={install:function(t){var e=t.extend(V),n=new e;n.$mount(document.createElement("div")),document.body.appendChild(n.$el),t.prototype.$toast=n}},N=W,z=n("fe3c"),Z=n.n(z),_=n("caf9");a["a"].config.productionTip=!1,a["a"].prototype.$bus=new a["a"],a["a"].use(N),a["a"].use(_["a"],{loading:n("eb67")}),Z.a.attach(document.body),new a["a"]({render:function(t){return t(J)},router:F,store:j}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.12bedb89.svg"},9443:function(t,e,n){t.exports=n.p+"img/home.7210ddcb.svg"},"9d7d":function(t,e,n){},a360:function(t,e,n){"use strict";n("caa8")},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.cb2cc09f.svg"},b508:function(t,e,n){t.exports=n.p+"img/home_active.cc40b6f2.svg"},c3f8:function(t,e,n){t.exports=n.p+"img/shopcart_active.3f0a2016.svg"},caa8:function(t,e,n){},cf1a:function(t,e,n){},d151:function(t,e,n){t.exports=n.p+"img/profile_active.fd66b281.svg"},e55d:function(t,e,n){t.exports=n.p+"img/profile.42d7cf12.svg"},eb67:function(t,e){t.exports="data:image/gif;base64,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"}});
//# sourceMappingURL=app.914ed25c.js.map