(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65a17600"],{"8ae0":function(t,n,e){"use strict";e.r(n);var c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"scroll-main"},[e("div",{ref:"tabEle",staticClass:"scroll-tap"},t._l(t.tabs,function(n,c){return e("p",{key:c,staticClass:"tab-item",class:{active:t.tabIndex===c},on:{click:function(n){return t.changeTab(c)}}},[t._v(t._s(n))])}),0),e("div",{ref:"contentEle",staticClass:"scroll-content"},t._l(t.content,function(n,c){return e("p",{key:c,staticClass:"content-item"},[t._v(t._s(n))])}),0)])},a=[],s=e("58da"),i={data:function(){return{tabs:[],content:[],maxNum:10,tabIndex:0,scrollTab:null}},created:function(){this.init()},methods:{init:function(){for(var t=this,n=this.maxNum,e=0;e<n;e++)this.tabs.push("这是一个tab".concat(e+1)),this.content.push("这是一个内容".concat(e+1));this.$nextTick(function(){t.scrollTab=new s["a"]({tabEle:t.$refs.tabEle,contentEle:t.$refs.contentEle,tabDirection:"x",changeTab:function(n){console.log("index: ",n),t.tabIndex=n}})})},changeTab:function(t){this.scrollTab.changeTab(t)}},beforeDestroy:function(){this.scrollTab.removeEvent()}},o=i,l=(e("ac27"),e("2877")),r=Object(l["a"])(o,c,a,!1,null,"322dd5c9",null);n["default"]=r.exports},ac27:function(t,n,e){"use strict";var c=e("cb2e"),a=e.n(c);a.a},cb2e:function(t,n,e){}}]);
//# sourceMappingURL=chunk-65a17600.b992c444.js.map