(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a5f0c12e"],{"161e":function(e,t,r){"use strict";var n=r("71f1"),a=r.n(n);a.a},"71f1":function(e,t,r){},"82a3":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div")},a=[],o=(r("a4d3"),r("4de4"),r("b680"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("25f0"),r("159b"),r("96cf"),r("fc11")),i=r("2f62"),c=r("901e"),u=r.n(c);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(r,!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){return new u.a(e)},d={props:{ethPrice:{type:u.a,default:function(){return new u.a(0)}},makerActive:{type:Boolean,default:!1},cdps:{type:Array,default:function(){return[]}},availableCdps:{type:Object,default:function(){return{}}},cdpDetailsLoaded:{type:Boolean,default:!1}},data:function(){return{loaded:!1,wethToPethRatio:0,daiPrice:0,priceFloor:0,ethQty:0,daiQty:0,selectedCdp:"",cdp:{},eth:p(0),dai:p(0),debtValue:p(0),collatRatio:p(0),pethCollateral:p(0),usdCollateral:p(0),ethCollateral:p(0),ratio:null,isSafe:!1,maxDaiDraw:p(0),maxPethDraw:p(0),maxEthDraw:p(0)}},computed:s({},Object(i["b"])(["account","gasPrice","web3","network","ens"]),{cdpOptions:function(){return this.availableCdps}}),mounted:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:this.makerActive||this.$router.push({name:"Maker"});case 1:case"end":return e.stop()}}),null,this)},methods:{openManage:function(e){this.$router.push({name:"manage",params:{cdpId:e}})},displayPercentValue:function(e){return u.a.isBigNumber(e)||(e=new u.a(e)),e.times(100).toString()},displayFixedValue:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return u.a.isBigNumber(e)||(e=new u.a(e)),e.toFixed(t).toString()}}},f=d,b=(r("161e"),r("2877")),h=Object(b["a"])(f,n,a,!1,null,"0948f6e7",null),w=h.exports;t["default"]=w}}]);
//# sourceMappingURL=chunk-a5f0c12e.4ea90ae6.js.map