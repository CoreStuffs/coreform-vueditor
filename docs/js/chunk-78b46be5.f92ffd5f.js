(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78b46be5"],{"6eba":function(t,e,a){var i=a("23e7");i({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}})},8823:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:t.editformId,staticClass:"cf uk-flex-top",attrs:{id:t.editformId,"uk-modal":"stack:true","uk-overflow-auto":""}},[a("div",{staticClass:"uk-modal-dialog uk-transition-fade uk-margin-auto-vertical",staticStyle:{transition:"none"}},[a("button",{staticClass:"uk-modal-close-default",attrs:{type:"button","uk-close":""}}),a("div",{staticClass:"uk-modal-body uk-text-small",attrs:{id:"editFormBody"}},[a("div",[a("ul",{attrs:{"uk-tab":""}},[a("li",{class:{"uk-tab-error":t.$v.$error}},[a("a",{attrs:{href:"#"}},[t._v("Basic")])]),t._m(0)]),a("ul",{staticClass:"uk-switcher uk-margin",attrs:{"uk-overflow-auto":""}},[a("li",[a("div",{staticClass:"uk-form-horizontal uk-margin-small"},[a("fieldset",{staticClass:"uk-fieldset"},[a("div",{staticClass:"uk-margin"},[a("label",{staticClass:"uk-form-label",attrs:{for:"txtValue"}},[t._v("Variable name")]),a("div",{staticClass:"uk-form-controls"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.variable.name,expression:"variable.name"}],staticClass:"uk-input uk-form-small",class:{"uk-form-danger":t.$v.variable.name.$error},attrs:{id:"txtValue",name:"txtValue",type:"text"},domProps:{value:t.variable.name},on:{input:function(e){e.target.composing||t.$set(t.variable,"name",e.target.value)}}})])]),a("div",{staticClass:"uk-margin"},[a("label",{staticClass:"uk-form-label",attrs:{for:"selType"}},[t._v("Variable type")]),a("div",{staticClass:"uk-form-controls uk-text-small"},[""===t.srcName?a("select",{directives:[{name:"model",rawName:"v-model",value:t.variable.type,expression:"variable.type"}],staticClass:"uk-select uk-form-small uk-width-expand@m",class:{"uk-form-danger":t.$v.variable.type.$error},attrs:{name:"selType"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.variable,"type",e.target.multiple?a:a[0])}}},t._l(t.acceptedVariablesTypes,(function(e,i){return a("option",{key:e,domProps:{value:i}},[t._v(" "+t._s(e)+" ")])})),0):t._e(),""!==t.srcName?a("label",[t._v(t._s(t.variableType(t.variable.type)))]):t._e()])])])]),a("hr"),a("div",{staticClass:"uk-form-stacked uk-margin-small"},[a("h5",[t._v("Validation")]),a("validationTable",{attrs:{variable:t.variable}})],1)]),a("li",[a("pre",[a("code",[t._v(t._s(t.variable))])])])])])]),a("div",{staticClass:"uk-modal-footer uk-text-right"},[a("button",{staticClass:"uk-button uk-button-default uk-modal-close",attrs:{type:"button"}},[t._v(" Cancel ")]),a("button",{staticClass:"uk-button uk-button-primary",attrs:{type:"button"},on:{click:function(e){return t.applyEdit()}}},[t._v(" Apply ")])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[t._v("Debug")])])}],s=(a("4de4"),a("6eba"),a("0d03"),a("b0c0"),a("b64b"),a("d3b7"),a("2b0e")),l=a("8323"),n=a.n(l),o=a("1dce"),u=a.n(o),c=a("75ba"),d=a("b5ae");s["a"].use(u.a);var m={inject:["$variableTypes","$saveVariable"],data:function(){return{show:!1,editformId:Date.now(),editformFieldId:Date.now(),variable:{},callback:function(){},acceptedVariablesTypes:{},srcName:""}},components:{validationTable:function(){return a.e("chunk-2d0ba88d").then(a.bind(null,"382d"))}},validations:function(){var t=this;return{variable:{name:{required:d["required"],alphaNum:d["alphaNum"],minLength:Object(d["minLength"])(3),unique:function(e){return t.$getVariableByName(e)&&t.srcName.toLowerCase()===e.toLowerCase()}},type:{required:d["required"]}}}},mounted:function(){},watch:{variable:function(){this.$v.$reset()}},methods:{variableType:function(t){var e=this.$variableTypes[t.toLowerCase()];return e.text},changeValue:function(t){this.$emit("input",t.srcElement.value)},showModal:function(t,e,a){var i=this;this.editformFieldId=Date.now(),t||(t={name:"",validations:[{type:"required"}]}),this.srcName=t.name,this.variable=Object(c["a"])(t),this.callback=a,this.acceptedVariablesTypes={};var r=function(t){e&&1!==e.filter((function(e){return e.toLowerCase()===t.toLowerCase()})).length||(i.acceptedVariablesTypes[t]=i.$variableTypes[t].text)};for(var s in this.$variableTypes)r(s);1===Object.keys(this.acceptedVariablesTypes).length&&(this.variable.type=Object.keys(this.acceptedVariablesTypes)[0]);var l=n.a.modal(document.getElementById(this.editformId),{container:!1}),o=this;n.a.util.on(document.getElementById(this.editformId),"shown",(function(t,e){e===l&&n.a.tab(document.getElementById(o.editformId).getElementsByClassName("uk-tab")[0]).show(0)})),l.show()},applyEdit:function(){if(n.a.modal(document.getElementById(this.editformId)).hide(),null!==this.callback&&"undefined"!==typeof this.callback){var t=Object(c["a"])(this.variable);this.$saveVariable(this.variable,this.srcName),this.callback(t)}}}},b=m,v=a("2877"),f=Object(v["a"])(b,i,r,!1,null,null,null);e["default"]=f.exports},b64b:function(t,e,a){var i=a("23e7"),r=a("7b0b"),s=a("df75"),l=a("d039"),n=l((function(){s(1)}));i({target:"Object",stat:!0,forced:n},{keys:function(t){return s(r(t))}})}}]);
//# sourceMappingURL=chunk-78b46be5.f92ffd5f.js.map