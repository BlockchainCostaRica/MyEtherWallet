(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-89403e02"],{"2f64":function(e,t,n){},4820:function(e,t,n){"use strict";var r=n("69b7"),a=n.n(r);a.a},"69b7":function(e,t,n){},c1be:function(e,t,n){"use strict";var r=function(e,t){var n=t._c;return n("div",[n("div",{class:[t.props.color,"loading-container","loading-sign"]},[t._m(0),""!=t.props.loadingmessage1?n("p",{staticClass:"loading-message1"},[t._v(" "+t._s(t.props.loadingmessage1)+" ")]):t._e(),""!=t.props.loadingmessage2?n("p",{staticClass:"loading-message2"},[t._v(" "+t._s(t.props.loadingmessage2)+" ")]):t._e()])])},a=[function(e,t){var n=t._c;return n("div",{staticClass:"lds-spinner"},[n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div")])}],s={name:"LoadingSign",props:{type:{type:String,default:""},loadingmessage1:{type:String,default:""},loadingmessage2:{type:String,default:""},color:{type:String,default:"black"}}},i=s,o=(n("4820"),n("2877")),c=Object(o["a"])(i,r,a,!0,null,"3944612c",null),u=c.exports;n.d(t,"a",(function(){return u}))},de5c:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.ready?e._e():n("div",[n("loading-sign")],1),e.ready?n("div",{staticClass:"currency-ops-new"},[n("div",{staticStyle:{padding:"10px"}},[n("p",[e._v(" "+e._s(e.$t("dappsMaker.dai-savings-rate",{value:e.displayPercentValue(e.yearlyRate)}))+" ")]),n("p",[e._v(e._s(e.$t("dappsMaker.deposited-amount",{value:e.deposited})))])]),n("div",{staticClass:"currency-picker-container"},[n("div",{staticClass:"interface__block-title"},[e._v(" "+e._s(e.$t("dappsMaker.earn-with-dai"))+" ")]),e.showSetupScreen?n("div",[n("div",[n("p",[n("b",[e._v(" "+e._s(e.$t("dappsMaker.create-vault-proxy")))])]),n("p",[e._v(e._s(e.$t("dappsMaker.create-proxy-info-message")))]),n("div",{staticClass:"buttons-container"},[n("div",{class:[e.proxyPresent?"disabled":"","submit-button large-round-button-green-filled"],on:{click:e.BuildProxy}},[e._v(" "+e._s(e.$t("dappsMaker.setup"))+" ")])])]),n("p",[n("b",[e._v(" "+e._s(e.$t("dappsMaker.savings-set-allowance")))])]),n("p",[e._v(e._s(e.$t("dappsMaker.savings-set-allowance-info")))]),n("div",{staticClass:"buttons-container"},[n("div",{class:[!e.hasAllowance&&e.proxyPresent?"":"disabled","submit-button large-round-button-green-filled"],on:{click:e.setAllowance}},[e._v(" "+e._s(e.$t("dappsMaker.set"))+" ")])])]):e._e(),e.showSetupScreen?e._e():n("div",[n("div",{staticClass:"buttons-container-alt"},[n("div",[n("button",{class:["submit-btn",e.showDepositDisplay?"active":""],on:{click:function(t){return e.showDeposit(!0)}}},[n("h4",[e._v(e._s(e.$t("dappsMaker.deposit")))])]),n("button",{class:["submit-btn",e.showDepositDisplay?"":"active"],on:{click:function(t){return e.showDeposit(!1)}}},[n("h4",[e._v(e._s(e.$t("dappsMaker.withdraw")))])])])]),e.showDepositDisplay?n("div",[n("div",{staticClass:"interface__block-title"},[n("span",[e._v(" "+e._s(e.$t("dappsMaker.deposit")))]),n("div",{staticClass:"top-buttons",on:{click:e.setMaxDeposit}},[n("p",[e._v(e._s(e.$t("dappsMaker.entire-dai-balance")))])])]),n("div",{staticClass:"dropdown-text-container dropdown-container no-point"},[n("p",[n("img",{staticClass:"icon-size",attrs:{src:e.DaiIcon}}),e._v(" "+e._s(e.$t("dappsMaker.dai"))+" "),n("span",{staticClass:"subname"},[e._v("- "+e._s(e.$t("dappsMaker.dai-stable-coin"))+" ")])])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.daiQty,expression:"daiQty"}],class:["currency-picker-container","dropdown-text-container","dropdown-container"],domProps:{value:e.daiQty},on:{input:function(t){t.target.composing||(e.daiQty=t.target.value)}}}),e.showErrorInfoOrOther?n("div",{staticClass:"input-block-message"},[n("p",[e._v(" Some Error, info, or instructions ")])]):e._e(),n("div",{staticClass:"buttons-container"},[n("div",{class:[e.validInputs&&e.canDeposit?"":"disabled","submit-button large-round-button-green-filled"],on:{click:e.deposit}},[e._v(" "+e._s(e.$t("dappsMaker.deposit"))+" ")])])]):e._e(),e.showDepositDisplay?e._e():n("div",[n("div",{staticClass:"interface__block-title"},[n("span",[e._v(" "+e._s(e.$t("dappsMaker.withdraw")))]),n("div",{staticClass:"top-buttons",on:{click:e.setMaxWithdraw}},[n("p",[e._v(e._s(e.$t("dappsMaker.entire-deposit-balance")))])])]),n("div",{staticClass:"dropdown-text-container dropdown-container no-point"},[n("p",[n("img",{staticClass:"icon-size",attrs:{src:e.DaiIcon}}),e._v(" "+e._s(e.$t("dappsMaker.dai"))+" "),n("span",{staticClass:"subname"},[e._v("- "+e._s(e.$t("dappsMaker.dai-stable-coin"))+" ")])])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.daiQty,expression:"daiQty"}],class:["currency-picker-container","dropdown-text-container","dropdown-container"],domProps:{value:e.daiQty},on:{input:function(t){t.target.composing||(e.daiQty=t.target.value)}}}),n("div",{staticClass:"buttons-container"},[n("div",{class:[e.validInputs&&e.canWithdraw?"":"disabled","submit-button large-round-button-green-filled"],on:{click:e.withdraw}},[e._v(" "+e._s(e.$t("dappsMaker.withdraw"))+" ")])])])])])]):e._e()])},a=[],s=(n("a4d3"),n("4de4"),n("a15b"),n("b680"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("25f0"),n("5319"),n("159b"),n("96cf"),n("fc11")),i=n("2f62"),o=n("901e"),c=n.n(o),u=n("d1fb"),d=n("c1be"),l=n("9b76"),p=n.n(l),h=n("c52a");function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w={components:{"loading-sign":d["a"]},props:{ethPrice:{type:c.a,default:function(){return new c.a(0)}},makerActive:{type:Boolean,default:!1},cdps:{type:Array,default:function(){return[]}},availableCdps:{type:Object,default:function(){return{}}},cdpDetailsLoaded:{type:Boolean,default:!1},getValueOrFunction:{type:Function,default:function(){}}},data:function(){return{DaiIcon:p.a,showDepositDisplay:!0,setupComplete:!1,userHasProxy:!1,showErrorInfoOrOther:!1,proxyAddress:null,daiQty:0,gasLimit:-1,yearlyRate:0,daiBalance:0,deposited:0,maxWithdrawable:0,allowance:0,daiAllowance:0,proxyChecked:!1,allowanceChecked:!1}},computed:g({},Object(i["b"])(["account","gasPrice","web3","network","ens"]),{showSetupScreen:function(){return!this.hasAllowance||!this.proxyPresent},validInputs:function(){return Object(u["F"])(this.daiQty).gt(0)&&this.hasEnough&&this.proxyPresent},hasEnough:function(){return this.showDepositDisplay?Object(u["F"])(this.daiBalance).gte(this.daiQty):Object(u["F"])(this.maxWithdrawable).gte(this.daiQty)},proxyPresent:function(){return null!=this.proxyAddress},proxyAllowance:function(){return null!=this.proxyAddress},hasAllowance:function(){return Object(u["F"])(this.daiAllowance).gt(0)},canWithdraw:function(){return!!this.deposited&&Object(u["F"])(this.deposited.toBigNumber()).gte(this.daiQty)},canDeposit:function(){return Object(u["F"])(this.daiBalance).gte(this.daiQty)},ready:function(){return this.proxyChecked&&this.allowanceChecked}}),watch:{makerActive:function(e){e&&this.setup()}},beforeDestroy:function(){this.makerSaver={}},mounted:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return e=new this.web3.eth.Contract(u["e"],u["h"].PROXY_REGISTRY),t.next=3,regeneratorRuntime.awrap(e.methods.proxies(this.account.address).call());case 3:this.proxyAddress=t.sent,"0x0000000000000000000000000000000000000000"===this.proxyAddress&&(this.proxyAddress=null),this.proxyChecked=!0,this.setup();case 7:case"end":return t.stop()}}),null,this)},methods:{setup:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return this.makerSaver=this.getValueOrFunction("_mcdSaving"),this.setupComplete=void 0!==this.makerSaver,e.next=4,regeneratorRuntime.awrap(this.getValues());case 4:case"end":return e.stop()}}),null,this)},getValues:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.setupComplete){e.next=11;break}return e.t0=u["F"],e.next=4,regeneratorRuntime.awrap(this.makerSaver.getYearlyRate());case 4:return e.t1=e.sent,this.yearlyRate=(0,e.t0)(e.t1).minus(1).toFixed(10),this.hasProxy(),this.checkBalance(),e.next=10,regeneratorRuntime.awrap(this.depositBalance());case 10:this.getAllowance();case 11:return e.abrupt("return",0);case 12:case"end":return e.stop()}}),null,this)},setMaxDeposit:function(){this.daiQty=this.daiBalance},setMaxWithdraw:function(){this.maxWithdrawable&&(this.daiQty=this.maxWithdrawable)},showDeposit:function(e){this.showDepositDisplay=e,this.daiQty=0},deposit:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.setupComplete){e.next=3;break}return e.next=3,regeneratorRuntime.awrap(this.makerSaver.join(Object(h["MDAI"])(this.daiQty)));case 3:case"end":return e.stop()}}),null,this)},withdraw:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.setupComplete){e.next=3;break}return e.next=3,regeneratorRuntime.awrap(this.makerSaver.exit(Object(h["MDAI"])(this.daiQty)));case 3:case"end":return e.stop()}}),null,this)},depositBalance:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.setupComplete){e.next=5;break}return e.next=3,regeneratorRuntime.awrap(this.makerSaver.balance());case 3:this.deposited=e.sent,this.deposited&&(this.maxWithdrawable=this.deposited.toBigNumber().toString());case 5:case"end":return e.stop()}}),null,this)},checkBalance:function(){var e,t;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:if(!this.setupComplete){n.next=11;break}if(e=this.getValueOrFunction("balances"),!e){n.next=11;break}if(t=e["MDAI"],t){n.next=6;break}return n.abrupt("return",Object(u["F"])(0));case 6:if(this.daiBalance=t.toString(),!this.proxyAddress){n.next=11;break}return n.next=10,regeneratorRuntime.awrap(this.getAllowance());case 10:this.daiAllowance=n.sent;case 11:return n.abrupt("return",Object(u["F"])(0));case 12:case"end":return n.stop()}}),null,this)},hasProxy:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.setupComplete){e.next=13;break}return e.next=3,regeneratorRuntime.awrap(this.getValueOrFunction("getProxy")());case 3:if(this.proxyAddress=e.sent,this.proxyAddress){e.next=8;break}return this.proxyChecked=!0,this.proxyAddress=null,e.abrupt("return",null);case 8:return e.next=10,regeneratorRuntime.awrap(this.getAllowance());case 10:return this.daiAllowance=e.sent,this.proxyChecked=!0,e.abrupt("return",this.proxyAddress);case 13:return this.proxyChecked=!0,e.abrupt("return",null);case 15:case"end":return e.stop()}}),null,this)},BuildProxy:function(){var e=this;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.setupComplete){t.next=5;break}return t.next=3,regeneratorRuntime.awrap(this.getValueOrFunction("getProxy")());case 3:this.proxyAddress=t.sent,this.proxyAddress||this.getValueOrFunction("_proxyService").build().then((function(){return e.getValueOrFunction("_proxyService").currentProxy()})).then((function(t){e.proxyAddress=t}));case 5:case"end":return t.stop()}}),null,this)},adapterAddress:function(e){var t="MCD_JOIN_"+e.replace(/-/g,"_");return this.get("smartContract").getContractAddress(t)},getAllowance:function(){var e,t,n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:if(!this.proxyAddress){r.next=13;break}if(!this.setupComplete||!this.getValueOrFunction("tokens")){r.next=7;break}return r.next=4,regeneratorRuntime.awrap(this.getValueOrFunction("tokens")["MDAI"]._contract.allowance(this.getValueOrFunction("account").address,this.proxyAddress));case 4:return e=r.sent,this.allowanceChecked=!0,r.abrupt("return",e);case 7:return t=new this.web3.eth.Contract(u["c"],u["h"].MCD_DAI),r.next=10,regeneratorRuntime.awrap(t.methods.allowance(this.getValueOrFunction("account").address,this.proxyAddress).call());case 10:return n=r.sent,this.allowanceChecked=!0,r.abrupt("return",n);case 13:return this.allowanceChecked=!0,r.abrupt("return",0);case 15:case"end":return r.stop()}}),null,this)},setAllowance:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:this.setupComplete&&this.getValueOrFunction("tokens")&&this.getValueOrFunction("tokens")["MDAI"].approveUnlimited(this.proxyAddress);case 1:case"end":return e.stop()}}),null,this)},displayPercentValue:function(e){return c.a.isBigNumber(e)||(e=new c.a(e)),e.times(100).toString()},displayFixedValue:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return c.a.isBigNumber(e)||(e=new c.a(e)),e.toFixed(t).toString()}}},b=w,f=(n("ff33"),n("2877")),y=Object(f["a"])(b,r,a,!1,null,"bc38416a",null),m=y.exports;t["default"]=m},ff33:function(e,t,n){"use strict";var r=n("2f64"),a=n.n(r);a.a}}]);
//# sourceMappingURL=chunk-89403e02.c6851b37.js.map