(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b50682a"],{"12ce":function(t,e,a){"use strict";var s=a("9a7c"),n=a.n(s);n.a},"2ab9":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAkCAYAAADVeVmEAAAAAXNSR0IArs4c6QAAAVNJREFUaAXtmLFqAkEQhm8tFIS0KazTpE2lKdKkEAshdSBg4RukS5nWF1DTCD6Fha2dYmFvmTeI6c5vwy4sySYQrrmdnYGf3RtOmW//ueG4oqh5lGXZQBP0jnboruYlVysPwDEK48RFv9q/1vjXwM1CWreXCw3gYwTYpkRDv2UFDaxBCh24LrO9c3Z6HrgbbkU7rdCB1ep0jd+t/leaG2Ta3r+1t/HnyQ0X7Ifo0ucSWxvU+4w6kbo/yT0YY1ZfwMC2SBzQVeRmKSkLfeuBb7jYSiH7g2Np2yCnKL3DTaj36Fow/Qm2bji02iQGKOWh9UL9saFlYYcMrTVr+sHQtd+9FigWHyTv06d0BMAorLNZnU22rbWNXQ+zaBtrG6dwArk9s/abdB4vFbb7gH1CsZA1oPyjBuk0QisT1jk8+gYsF9YB22f4FR3RBvW8+7rqCfw8gTMZu333xRPRkQAAAABJRU5ErkJggg=="},"4dc8":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"interact-with-contract-container"},[s("interface-container-title",{attrs:{title:t.$t("contract.interact")}}),t.interact?s("div",{staticClass:"contract-methods-container"},[s("h4",[t._v(t._s(t.$t("contract.read-write")))]),s("div",{staticClass:"contract-addr-container"},[s("div",{staticClass:"contract-addr"},[s("p",[t._v(t._s(t.$t("contract.addr"))+": "+t._s(t.address))])]),s("div",{staticClass:"picker-container"},[s("currency-picker",{attrs:{currency:t.contractMethods,"clear-currency":t.clearCurrency,token:!1,page:"interactWContract"},on:{selectedCurrency:t.selectedFunction}})],1)]),void 0!==t.selectedMethod.name?s("div",{staticClass:"method-arguments-container"},[s("h4",[t._v(t._s(t._f("capitalize")(t.selectedMethod.name)))]),t._l(t.selectedMethod.inputs,(function(e,a){return s("div",{key:e.name+a,staticClass:"input-item-container"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h5",[t._v(t._s(t._f("capitalize")(e.name))+" ("+t._s(e.type)+"):")])])]),s("div",{staticClass:"input-container"},["checkbox"===t.getType(e.type).type&&"radio"!==t.getType(e.type).type?s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],staticClass:"non-bool-input",attrs:{disabled:t.noInput,type:"checkbox"},domProps:{checked:Array.isArray(t.inputs[e.name])?t._i(t.inputs[e.name],null)>-1:t.inputs[e.name]},on:{change:function(a){var s=t.inputs[e.name],n=a.target,i=!!n.checked;if(Array.isArray(s)){var r=null,c=t._i(s,r);n.checked?c<0&&t.$set(t.inputs,e.name,s.concat([r])):c>-1&&t.$set(t.inputs,e.name,s.slice(0,c).concat(s.slice(c+1)))}else t.$set(t.inputs,e.name,i)}}}):"radio"===t.getType(e.type).type&&"radio"!==t.getType(e.type).type?s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],staticClass:"non-bool-input",attrs:{disabled:t.noInput,type:"radio"},domProps:{checked:t._q(t.inputs[e.name],null)},on:{change:function(a){return t.$set(t.inputs,e.name,null)}}}):"radio"!==t.getType(e.type).type?s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],staticClass:"non-bool-input",attrs:{disabled:t.noInput,type:t.getType(e.type).type},domProps:{value:t.inputs[e.name]},on:{input:function(a){a.target.composing||t.$set(t.inputs,e.name,a.target.value)}}}):t._e(),"radio"===t.getType(e.type).type?s("div",{staticClass:"bool-input-container"},[s("div",{staticClass:"bool-items"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],attrs:{name:e.name,type:"radio"},domProps:{value:!0,checked:t._q(t.inputs[e.name],!0)},on:{change:function(a){return t.$set(t.inputs,e.name,!0)}}}),s("label",{attrs:{for:e.name}},[t._v(t._s(t.$t("contract.true")))])]),s("div",{staticClass:"bool-items"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],attrs:{name:e.name,type:"radio",checked:""},domProps:{value:!1,checked:t._q(t.inputs[e.name],!1)},on:{change:function(a){return t.$set(t.inputs,e.name,!1)}}}),s("label",{attrs:{for:e.name}},[t._v(t._s(t.$t("contract.false")))])])]):t._e(),t.noInput?t._e():s("i",{class:["radio"!==t.getType(e.type).type?"non-bool-i":"",t.isValidInput(t.inputs[e.name],t.getType(e.type).solidityType)?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])])})),s("div",[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h4",[t._v(t._s(t.$t("contract.value-in-eth"))+":")])])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"non-bool-input",attrs:{step:"any",type:"text",name:"",placeholder:"ETH"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})]),t.selectedMethod.constant?s("div",[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h4",[t._v(t._s(t.$t("contract.result"))+":")])])]),s("div",{staticClass:"result-inputs"},["string"===t.resType||"boolean"===t.resType||"number"===t.resType?s("input",{directives:[{name:"model",rawName:"v-model",value:t.result,expression:"result"}],staticClass:"non-bool-input",attrs:{type:"text",name:"",placeholder:"0x00000000000000",disabled:""},domProps:{value:t.result},on:{input:function(e){e.target.composing||(t.result=e.target.value)}}}):t._e(),"object"===t.resType?s("div",t._l(t.selectedMethod.outputs,(function(e,a){return s("div",{key:e.name+a,staticClass:"result-container"},[s("label",{attrs:{for:""!==e.name?e.name:e.type+a}},[t._v(" "+t._s(t._f("capitalize")(""!==e.name?e.name:e.type))+" ")]),s("input",{staticClass:"result-input",attrs:{name:""!==e.name?e.name:e.type+a,type:"text",placeholder:"0x00000000000000",disabled:""},domProps:{value:t.result[a]}})])})),0):t._e()])]):t._e()],2):t._e(),s("div",{staticClass:"submit-button-container"},[s("div",{staticClass:"interact-buttons"},[s("div",{staticClass:"submit-button large-round-button-green-border clickable",on:{click:function(e){return t.switchView("backwards")}}},[t._v(" "+t._s(t.$t("common.back"))+" ")]),t.selectedMethod.hasOwnProperty("inputs")&&(t.selectedMethod.constant&&t.selectedMethod.inputs.length>0||!t.selectedMethod.constant)?s("div",{class:[t.allValid?"":"disabled",t.loading?"disabled":"","submit-button large-round-button-green-filled clickable"],on:{click:t.write}},[s("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading&&!t.selectedMethod.constant,expression:"!loading && !selectedMethod.constant"}]},[t._v(" "+t._s(t.$t("contract.write"))+" ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading&&t.selectedMethod.constant,expression:"!loading && selectedMethod.constant"}]},[t._v(t._s(t.$t("contract.read")))]),s("i",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin fa-lg"})]):t._e()]),s("div",{staticClass:"clear-all-btn",on:{click:function(e){return t.resetDefaults()}}},[t._v(" "+t._s(t.$t("common.clear-all"))+" ")])])]):s("div",{staticClass:"interact-div"},[s("div",{staticClass:"send-form contract-address-container"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h4",{staticClass:"contract-address-title"},[t._v(" "+t._s(t.$t("contract.addr"))+" ")]),s("div",{staticClass:"select-contract no-border"},[s("currency-picker",{attrs:{currency:t.mergedContracts,token:!1,"clear-currency":t.clearCurrency,page:"interactWContract"},on:{selectedCurrency:t.selectedContract}})],1)])]),s("div",{staticClass:"the-form domain-name"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{placeholder:t.$t("contract.enter-addr"),type:"text",name:"nameAddr"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),s("i",{staticClass:"address-validation-check",class:[t.isValidAddress&&""!==t.address?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])]),s("div",{staticClass:"send-form"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h4",[t._v(t._s(t.$t("contract.abi-json-int")))]),s("div",{staticClass:"copy-buttons"},[s("span",{on:{click:function(e){return t.deleteInput("abi")}}},[t._v(t._s(t.$t("common.clear")))]),s("span",{on:{click:function(e){return t.copyToClipboard("abi")}}},[t._v(" "+t._s(t.$t("common.copy"))+" ")])])])]),s("div",{staticClass:"the-form domain-name"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.abi,expression:"abi"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],ref:"abi",staticClass:"custom-textarea-1",attrs:{name:"abiField"},domProps:{value:t.abi},on:{input:function(e){e.target.composing||(t.abi=e.target.value)}}}),t._v(" "),s("i",{class:[t.isValidAbi&&""!==t.abi?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])]),s("div",{staticClass:"submit-button-container"},[s("div",{class:[t.isValidAbi&&t.isValidAddress&&!t.errors.has("nameAddr")&&!t.errors.has("abiField")?"":"disabled","submit-button large-round-button-green-filled clickable"],on:{click:function(e){return t.switchView("forward")}}},[t._v(" "+t._s(t.$t("common.continue"))+" "),s("img",{attrs:{src:a("2ab9"),alt:""}})]),s("div",{staticClass:"clear-all-btn",on:{click:function(e){return t.resetDefaults()}}},[t._v(" "+t._s(t.$t("common.clear-all"))+" ")])])])],1)},n=[],i=(a("a4d3"),a("99af"),a("4de4"),a("d81d"),a("b0c0"),a("a9e3"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("25f0"),a("5319"),a("1276"),a("498a"),a("159b"),a("d0ff")),r=(a("96cf"),a("0122")),c=a("fc11"),o=a("2f62"),d=a("d7a2"),l=a("55c1"),u=a("ce96"),p=a("b7d3"),h=a("70c1"),m=a("8ded"),v=a.n(m);function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(a,!0).forEach((function(e){Object(c["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var y={components:{"interface-container-title":l["a"],"currency-picker":d["a"]},data:function(){return{abi:"",address:"",interact:!1,contractMethods:[],selectedMethod:{},result:"",loading:!1,value:0,inputs:{},clearCurrency:!1}},computed:f({},Object(o["b"])(["network","gasPrice","account","web3"]),{mergedContracts:function(){var t=v.a.get("customContracts")||[],e=this.network.type.contracts.concat(t);return e},isValidAbi:function(){return u["d"].isJson(this.abi)},isValidAddress:function(){return Object(p["a"])(this.address)},noInput:function(){return this.selectedMethod.constant&&0===this.selectedMethod.inputs.length},resType:function(){return Object(r["a"])(this.result)},allValid:function(){var t=this,e=!0;return this.selectedMethod.inputs&&this.selectedMethod.inputs.forEach((function(a){t.isValidInput(t.inputs[a.name],t.getType(a.type).solidityType)||(e=!1)})),e&&this.isValidAbi&&this.isValidAddress},contractArgs:function(){var t=this,e=[];return this.selectedMethod&&this.selectedMethod.inputs.forEach((function(a){if("bytes32[]"===a.type){var s=t.formatInput(t.inputs[a.name]);e.push(s)}else"address"===a.type?e.push(t.inputs[a.name].toLowerCase().trim()):e.push(t.inputs[a.name])})),e},txValue:function(){return u["d"].sanitizeHex(h["toWei"](this.value,"ether").toString(16))}}),watch:{network:function(){this.abi="",this.address="",this.interact=!1,this.contractMethods=[],this.selectedMethod={},this.result=""}},methods:{resetDefaults:function(){this.abi="",this.address="",this.interact=!1,this.contractMethods=[],this.selectedMethod={},this.result="",this.loading=!1,this.value=0,this.inputs={},this.clearCurrency=!this.clearCurrency},isValidInput:u["d"].isContractArgValid,getType:u["d"].solidityType,selectedContract:function(t){""===t.abi?this.abi="":this.abi=JSON.stringify(t.abi),this.address=t.address},selectedFunction:function(t){var e=this;if(t.hasOwnProperty("constant")){var a=new this.web3.eth.Contract([t],this.address.toLowerCase());!0===t.constant&&0===t.inputs.length?a.methods[t.name]().call({from:this.account.address.toLowerCase()}).then((function(t){e.result=t})).catch((function(t){e.loading=!1,u["e"].responseHandler(t,u["e"].WARN)})):this.result="",this.loading=!1,this.selectedMethod=t,this.selectedMethod.inputs.forEach((function(t){"bool"===t.type&&(e.inputs[t.name]=!1)}))}},formatInput:function(t){if("["===t[0])return t;var e=t.split(",");return e.map((function(t){return t.replace(" ","")}))},copyToClipboard:function(t){this.$refs[t].select(),document.execCommand("copy")},deleteInput:function(t){this.$refs[t].value=""},switchView:function(t){var e=this;switch(t){case"forward":""!==this.abi&&JSON.parse(this.abi).forEach((function(t){"constructor"!==t.type&&void 0!==t.constant&&e.contractMethods.push(t)})),this.interact=!0,this.loading=!1;break;default:this.resetDefaults()}},write:function(){var t,e,a,s,n,r,c,o,d,l,p=this;return regeneratorRuntime.async((function(m){while(1)switch(m.prev=m.next){case 0:if(t=this.web3,e=new t.eth.Contract([this.selectedMethod],this.address.toLowerCase()),this.loading=!0,!0!==this.selectedMethod.constant){m.next=7;break}(a=e.methods)[this.selectedMethod.name].apply(a,Object(i["a"])(this.contractArgs)).call({from:this.account.address.toLowerCase()}).then((function(t){p.result=t,p.loading=!1})).catch((function(t){p.loading=!1,u["e"].responseHandler(t,!1)})),m.next=15;break;case 7:return m.next=9,regeneratorRuntime.awrap(t.eth.getTransactionCount(this.account.address.toLowerCase()));case 9:return n=m.sent,r=!1,m.next=13,regeneratorRuntime.awrap((s=e.methods)[this.selectedMethod.name].apply(s,Object(i["a"])(this.contractArgs)).estimateGas({from:this.account.address.toLowerCase(),value:this.txValue}).then((function(t){return t})).catch((function(t){p.loading=!1,u["e"].responseHandler(t,u["e"].ERROR),r=!0})));case 13:c=m.sent,r||(d=(o=e.methods)[this.selectedMethod.name].apply(o,Object(i["a"])(this.contractArgs)).encodeABI(),l={from:this.account.address.toLowerCase(),gas:c,nonce:n,gasPrice:Number(h["toWei"](this.gasPrice,"gwei")),value:this.txValue,to:this.address.toLowerCase(),data:d},this.loading=!1,t.eth.sendTransaction(l).catch((function(t){u["e"].responseHandler(t,u["e"].ERROR)})));case 15:case"end":return m.stop()}}),null,this)}}},g=y,C=(a("12ce"),a("2877")),w=Object(C["a"])(g,s,n,!1,null,"08eb788a",null),_=w.exports;a.d(e,"default",(function(){return _}))},"9a7c":function(t,e,a){}}]);
//# sourceMappingURL=chunk-7b50682a.ec7e0dc3.js.map