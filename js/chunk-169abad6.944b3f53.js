(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-169abad6"],{"03c4":function(t,e,a){"use strict";a.r(e);var i,s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"manage-cdp"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.finishMigration,expression:"!finishMigration"}],staticClass:"manage-container"},[a("div",{staticClass:"title-content-container"},[a("p",{staticClass:"cpd-title"},[t._v(t._s(t.$t("dappsMaker.vault-portal")))]),a("p",{staticClass:"cdp-id"},[t._v(" "+t._s(t.$t("dappsMaker.vault-position-label",{value:t.cdpIdDisplay,symbol:t.vaultType}))+" ")])]),a("div",{staticClass:"information-blocks"},[a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("div",{staticClass:"for-pop"},[a("p",[t._v(" "+t._s(t.$t("dappsMaker.liquid-price"))+" ("+t._s(t.collateralType)+"/"+t._s(t.$t("common.currency.usd"))+") ")]),"--"===t.liquidationPriceDisplay?a("p",{staticClass:"pop-icon"},[a("popover",{attrs:{popcontent:t.$t("dappsMaker.what-is-dashes-vault")}})],1):t._e()]),a("div",{staticClass:"blue"},[a("span",{staticClass:"blue-bold"},[t._v(t._s(t.liquidationPriceDisplay))]),t._v(" "+t._s(t.$t("common.currency.usd"))+" ")])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(" "+t._s(t.$t("dappsMaker.current-price"))+"("+t._s(t.collateralType)+"/"+t._s(t.$t("common.currency.usd"))+") ")]),a("div",[t._v(" "+t._s(t.ethPriceDisplay)+" "),a("span",[t._v(t._s(t.$t("common.currency.usd")))])])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.liquidation-penalty")))]),a("div",[t._v(t._s(t.liquidationPenaltyDisplay)+"%")])])])]),a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("div",{staticClass:"for-pop"},[a("p",[t._v(t._s(t.$t("dappsMaker.collateral-ratio")))]),"--"===t.liquidationPriceDisplay?a("p",{staticClass:"pop-icon"},[a("popover",{attrs:{popcontent:t.$t("dappsMaker.what-is-dashes-vault")}})],1):t._e()]),a("div",{class:t.collateralRatioColoring},[a("span",[t._v(t._s(t.collaterlizationRatioDisplay)+"%")])])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.minimum-ratio")))]),a("div",[t._v(t._s(t.liquidationRatioDisplay)+"%")])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.stability-fee")))]),a("div",[t._v(t._s(t.stabilityFeeDisplay)+"%")])])])])]),a("div",{staticClass:"information-single-block"},[a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("p",[t._v(" "+t._s(t.$t("dappsMaker.collateral-label",{symbol:t.collateralType}))+" ")])]),a("div",{staticClass:"block-content-container"},[a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.deposited")))]),a("div",[t._v(" "+t._s(t.ethCollateral)+" "),a("span",[t._v(t._s(t.collateralType))])]),a("div",[t._v(" "+t._s(t.usdCollateral)+" "),a("span",[t._v(t._s(t.$t("common.currency.usd")))])]),a("button",{on:{click:t.showDeposit}},[t._v(" "+t._s(t.$t("dappsMaker.deposit"))+" > ")])])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.max-withdraw")))]),a("div",[t._v(" "+t._s(t.maxEthDrawDisplay)+" "),a("span",[t._v(t._s(t.collateralType))])]),a("div",[t._v(" "+t._s(t.maxUsdDrawDisplay)+" "),a("span",[t._v(t._s(t.$t("common.currency.usd")))])]),a("button",{on:{click:t.showWithdraw}},[t._v(" "+t._s(t.$t("dappsMaker.withdraw"))+" > ")])])])])])]),a("div",{staticClass:"information-single-block"},[a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("p",[t._v(t._s(t.$t("dappsMaker.dai-position")))])]),a("div",{staticClass:"block-content-container"},[a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.generated")))]),a("div",[t._v(" "+t._s(t.debtValue)+" "),a("span",[t._v(t._s(t.$t("dappsMaker.dai")))])]),a("div",[t._v(" "+t._s(t.debtValueDisplay)+" "),a("span",[t._v(t._s(t.$t("common.currency.usd")))])]),a("button",{on:{click:t.showPayback}},[t._v(" "+t._s(t.$t("dappsMaker.payback"))+" > ")])])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.max-available")))]),a("div",[t._v(" "+t._s(t.maxDai)+" "),a("span",[t._v(t._s(t.$t("dappsMaker.dai")))])]),a("div",[t._v(" "+t._s(t.maxUsd)+" "),a("span",[t._v(t._s(t.$t("common.currency.usd")))])]),a("button",{on:{click:t.showGenerate}},[t._v(" "+t._s(t.$t("dappsMaker.generate"))+" > ")])])])])])])]),a("help-link")],1)},n=[],r=(a("a4d3"),a("4de4"),a("a9e3"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("159b"),a("ddb0"),a("96cf"),a("fc11")),c=a("2f62"),d=a("8e13"),o=a("901e"),l=a.n(o),u=a("d1fb");function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(a,!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var v={components:{"help-link":d["a"]},props:{openCloseModal:{type:Boolean,default:!1},openMoveModal:{type:Boolean,default:!1},tokensWithBalance:{type:Array,default:function(){return[]}},getBalance:{type:Function,default:function(){}},makerActive:{type:Boolean,default:!1},cdps:{type:Array,default:function(){return[]}},availableCdps:{type:Object,default:function(){return{}}},valuesUpdated:{type:Number,default:0},getCdp:{type:Function,default:function(){}},hasCdp:{type:Function,default:function(){}},getValueOrFunction:{type:Function,default:function(){}},values:{type:Object,default:function(){return{maxEthDraw:"",maxUsdDraw:"",ethCollateral:"",usdCollateral:"",debtValue:"",maxDai:"",collateralRatio:"",cdpId:"",stabilityFee:"",minEth:"",liquidationRatio:"",liquidationPenalty:"",targetPrice:""}}},ethPrice:{type:l.a,default:Object(u["F"])(0)},liquidationPenalty:{type:l.a,default:Object(u["F"])(0)},stabilityFee:{type:l.a,default:Object(u["F"])(0)},liquidationRatio:{type:l.a,default:Object(u["F"])(0)},priceService:{type:Object,default:function(){return{}}},cdpService:{type:Object,default:function(){return{}}},proxyService:{type:Object,default:function(){return{}}},updated:{type:Number,default:0}},data:function(){return{currentCdpLoaded:!1,activeCdp:{},loaded:!1,ethQty:0,daiQty:0,selectedCdp:"",cdpId:"",cdp:{},maxDaiDraw:Object(u["F"])(0),maxWithDraw:Object(u["F"])(0),maxWithDrawUSD:Object(u["F"])(0),maxEthDraw:Object(u["F"])(0),vaultType:"ETH-A",updatedValue:0}},computed:h({},Object(c["b"])(["account","gasPrice","web3","network","ens"]),{noProxy:function(){return this.activeCdp?this.activeCdp.noProxy:null},finishMigration:function(){return this.activeCdp?this.activeCdp.needToFinishMigrating:null},collateralRatioColoring:function(){return this.currentCdpLoaded&&this.updatedValue>-1?this.currentCdp.collateralStatus:""},liquidationPriceDisplay:function(){if(this.currentCdpLoaded&&this.updatedValue>-1){var t=Object(u["p"])(this.currentCdp.liquidationPrice,2);return new l.a(t).gt(0)?t:"--"}return"--"},collaterlizationRatioDisplay:function(){return this.currentCdpLoaded&&this.updatedValue>-1?Object(u["o"])(this.getCollateralizationRatio()):"--"},cdpIdDisplay:function(){return this.values?this.values.cdpId:"--"},liquidationRatioDisplay:function(){return this.currentCdpLoaded&&this.updatedValue>-1?Object(u["p"])(Object(u["q"])(this.currentCdp.liquidationRatio)):"--"},liquidationPenaltyDisplay:function(){return this.currentCdpLoaded&&this.updatedValue>-1?Object(u["p"])(Object(u["q"])(this.currentCdp.liquidationPenalty)):"--"},stabilityFeeDisplay:function(){return this.currentCdpLoaded&&this.updatedValue>-1?Object(u["p"])(Object(u["q"])(this.currentCdp.stabilityFee)):"--"},ethPriceDisplay:function(){return this.currentCdpLoaded&&this.updatedValue>-1?Object(u["p"])(this.currentCdp.currentPrice,2):"--"},zeroDebt:function(){return Object(u["F"])(this.values.debtValue).eq(0)},maxEthDrawDisplay:function(){return this.currentCdpLoaded&&this.updatedValue>-1?Object(u["p"])(this.currentCdp.maxEthDraw,5):"--"},maxUsdDrawDisplay:function(){return this.values?Object(u["p"])(this.values.maxUsdDraw,2):"--"},ethCollateral:function(){return this.currentCdpLoaded&&this.updatedValue>-1?Object(u["p"])(this.getCollateralAmount(),5):"--"},collateralType:function(){return this.currentCdpLoaded&&this.updatedValue>-1?this.currentCdp.cdpCollateralType:"ETH"},usdCollateral:function(){return this.currentCdpLoaded&&this.updatedValue>-1?Object(u["p"])(this.currentCdp.collateralValue,2):"--"},debtValueDisplay:function(){return this.currentCdpLoaded&&this.updatedValue>-1?Object(u["p"])(this.currentCdp.debtValue,2):"--"},debtValue:function(){return this.currentCdpLoaded&&this.updatedValue>-1?Object(u["p"])(this.currentCdp.debtValue,5,!0,!0,!0):"--"},maxDai:function(){return this.currentCdpLoaded&&this.updatedValue>-1?Object(u["p"])(this.currentCdp.maxDai,5):"--"},maxUsd:function(){return this.currentCdpLoaded&&this.updatedValue>-1?Object(u["p"])(this.currentCdp.maxDai,2):"--"}}),watch:(i={},Object(r["a"])(i,"activeCdp.ready",(function(){this.isReady()})),Object(r["a"])(i,"valuesUpdated",(function(){this.updatedValue++})),Object(r["a"])(i,"openCloseModal",(function(t){t&&this.showClose()})),Object(r["a"])(i,"openMoveModal",(function(t){t&&this.showMove()})),Object(r["a"])(i,"makerActive",(function(t){t&&this.getActiveCdp()})),Object(r["a"])(i,"$route.params",(function(){this.updatedValue++,this.getActiveCdp()})),i),beforeDestroy:function(){this.makerCDP={}},mounted:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:this.activeCdp={},this.cdpId=this.$route.params.cdpId,this.makerActive&&(this.loaded=!0,this.cdpId&&this.$emit("activeCdpId",this.cdpId)),this.cdpId&&void 0!==this.cdpId&&this.getActiveCdp();case 4:case"end":return t.stop()}}),null,this)},methods:{getActiveCdp:function(){this.cdpId=this.$route.params.cdpId;var t="number"===typeof this.cdpId?this.cdpId:this.cdpId.id;this.currentCdp=this.getValueOrFunction("getCdp")(t),this.currentCdp&&(this.currentCdpLoaded=!0,this.$forceUpdate(),this.vaultType=this.currentCdp.cdpType),this.getTotalDebt()},getTotalDebt:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(this.currentCdp&&(this.currentCdpLoaded=!0),this.currentCdp){t.next=3;break}return t.abrupt("return",Object(u["F"])(0));case 3:return t.next=5,regeneratorRuntime.awrap(this.currentCdp.getCombinedDebtValue());case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),null,this)},getCollateralAmount:function(){return this.currentCdp&&(this.currentCdpLoaded=!0),this.currentCdp?this.currentCdp.collateralAmount:0},getCollateralValue:function(){return this.currentCdp&&(this.currentCdpLoaded=!0),this.currentCdp?this.currentCdp.getCollateralValue:Object(u["F"])(0)},getCollateralizationRatio:function(){return this.currentCdp&&(this.currentCdpLoaded=!0),this.currentCdp?this.currentCdp.collateralizationRatio:Object(u["F"])(0)},showDeposit:function(){this.$emit("showDeposit")},showWithdraw:function(){this.$emit("showWithdraw")},showPayback:function(){this.$emit("showPayback")},showGenerate:function(){this.$emit("showGenerate")},displayPercentValue:u["q"],displayFixedValue:u["p"],isReady:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}))}}},b=v,C=(a("5e14"),a("2877")),f=Object(C["a"])(b,s,n,!1,null,"566ecc68",null),y=f.exports;e["default"]=y},1009:function(t,e,a){},"5e14":function(t,e,a){"use strict";var i=a("1009"),s=a.n(i);s.a},"7f58":function(t,e,a){"use strict";var i=a("bc56"),s=a.n(i);s.a},"8e13":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Bottom-help-link"},["issues"==t.type?a("div",{staticClass:"issues"},[t._v(" "+t._s(t.$t("common.having-issues"))+" "),a("a",{attrs:{href:"https://kb.myetherwallet.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.$t("common.help-center")))])]):t._e()])},s=[],n={props:{type:{type:String,default:"issues"}},data:function(){return{popOverId:"popoverid"+String(Math.floor(1e8*Math.random()))}}},r=n,c=(a("7f58"),a("2877")),d=Object(c["a"])(r,i,s,!1,null,"16b84c17",null),o=d.exports;a.d(e,"a",(function(){return o}))},bc56:function(t,e,a){}}]);
//# sourceMappingURL=chunk-169abad6.944b3f53.js.map