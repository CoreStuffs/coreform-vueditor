(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78b46be5"],{"6eba":function(e,t,a){var i=a("23e7");i({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}})},8823:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:e.editformId,staticClass:"cf uk-flex-top",attrs:{id:e.editformId,"uk-modal":"stack:true"}},[a("div",{staticClass:"uk-modal-dialog uk-transition-fade uk-margin-auto-vertical",staticStyle:{transition:"none"}},[a("button",{staticClass:"uk-modal-close-default",attrs:{type:"button","uk-close":""}}),a("div",{staticClass:"uk-modal-body uk-text-small",attrs:{id:"editFormBody"}},[a("div",[a("ul",{attrs:{"uk-tab":""}},[a("li",{class:{"uk-tab-error":e.$v.$error}},[a("a",{attrs:{href:"#"}},[e._v("Basic")])]),e._m(0),e._m(1)]),a("ul",{staticClass:"uk-switcher uk-margin",attrs:{"uk-overflow-auto":""}},[a("li",[a("div",{staticClass:"uk-form-horizontal uk-margin-large"},[a("fieldset",{staticClass:"uk-fieldset"},[a("div",{staticClass:"uk-margin"},[a("label",{staticClass:"uk-form-label",attrs:{for:"txtValue"}},[e._v("Variable name")]),a("div",{staticClass:"uk-form-controls"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.variable.name,expression:"variable.name"}],staticClass:"uk-input uk-form-small",class:{"uk-form-danger":e.$v.variable.name.$error},attrs:{id:"txtValue",name:"txtValue",type:"text"},domProps:{value:e.variable.name},on:{input:function(t){t.target.composing||e.$set(e.variable,"name",t.target.value)}}})])]),a("div",{staticClass:"uk-margin"},[a("label",{staticClass:"uk-form-label",attrs:{for:"selType"}},[e._v("Variable type")]),a("div",{staticClass:"uk-form-controls uk-text-small"},[""===e.srcName?a("select",{directives:[{name:"model",rawName:"v-model",value:e.variable.type,expression:"variable.type"}],staticClass:"uk-select uk-form-small uk-width-expand@m",class:{"uk-form-danger":e.$v.variable.type.$error},attrs:{name:"selType"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.variable,"type",t.target.multiple?a:a[0])}}},e._l(e.acceptedVariablesTypes,(function(t,i){return a("option",{key:t,domProps:{value:i}},[e._v(" "+e._s(t)+" ")])})),0):e._e(),""!==e.srcName?a("label",[e._v(e._s(e.variableType(e.variable.type)))]):e._e()])])])])]),a("li",[a("validationTable",{attrs:{variable:e.variable}})],1),a("li",[a("pre",[a("code",[e._v(e._s(e.variable))])])])])])]),a("div",{staticClass:"uk-modal-footer uk-text-right"},[a("button",{staticClass:"uk-button uk-button-default uk-modal-close",attrs:{type:"button"}},[e._v(" Cancel ")]),a("button",{staticClass:"uk-button uk-button-primary",attrs:{type:"button"},on:{click:function(t){return e.applyEdit()}}},[e._v(" Apply ")])])])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("a",{attrs:{href:"#"}},[e._v("Validations")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("a",{attrs:{href:"#"}},[e._v("Debug")])])}],s=(a("4de4"),a("6eba"),a("0d03"),a("b0c0"),a("b64b"),a("d3b7"),a("2b0e")),l=a("8323"),n=a.n(l),o=a("1dce"),u=a.n(o),c=a("75ba"),d=a("b5ae");s["a"].use(u.a);var m={inject:["$variableTypes","$saveVariable"],data:function(){return{show:!1,editformId:Date.now(),editformFieldId:Date.now(),variable:{},callback:function(){},acceptedVariablesTypes:{},srcName:""}},components:{validationTable:function(){return a.e("chunk-2d0ba88d").then(a.bind(null,"382d"))}},validations:function(){var e=this;return{variable:{name:{required:d["required"],alphaNum:d["alphaNum"],minLength:Object(d["minLength"])(3),unique:function(t){return e.$getVariableByName(t)&&e.srcName.toLowerCase()===t.toLowerCase()}},type:{required:d["required"]}}}},mounted:function(){},watch:{variable:function(){this.$v.$reset()}},methods:{variableType:function(e){var t=this.$variableTypes[e.toLowerCase()];return t.text},changeValue:function(e){this.$emit("input",e.srcElement.value)},showModal:function(e,t,a){var i=this;this.editformFieldId=Date.now(),e||(e={name:"",validations:[{type:"required"}]}),this.srcName=e.name,this.variable=Object(c["a"])(e),this.callback=a,this.acceptedVariablesTypes={};var r=function(e){t&&1!==t.filter((function(t){return t.toLowerCase()===e.toLowerCase()})).length||(i.acceptedVariablesTypes[e]=i.$variableTypes[e].text)};for(var s in this.$variableTypes)r(s);1===Object.keys(this.acceptedVariablesTypes).length&&(this.variable.type=Object.keys(this.acceptedVariablesTypes)[0]);var l=n.a.modal(document.getElementById(this.editformId),{container:!1}),o=this;n.a.util.on(document.getElementById(this.editformId),"shown",(function(e,t){t===l&&n.a.tab(document.getElementById(o.editformId).getElementsByClassName("uk-tab")[0]).show(0)})),l.show()},applyEdit:function(){if(n.a.modal(document.getElementById(this.editformId)).hide(),null!==this.callback&&"undefined"!==typeof this.callback){var e=Object(c["a"])(this.variable);this.$saveVariable(this.variable,this.srcName),this.callback(e)}}}},b=m,v=a("2877"),f=Object(v["a"])(b,i,r,!1,null,null,null);t["default"]=f.exports},b64b:function(e,t,a){var i=a("23e7"),r=a("7b0b"),s=a("df75"),l=a("d039"),n=l((function(){s(1)}));i({target:"Object",stat:!0,forced:n},{keys:function(e){return s(r(e))}})}}]);
//# sourceMappingURL=chunk-78b46be5.cb52603d.js.map