(window["coreformComponents_jsonp"] = window["coreformComponents_jsonp"] || []).push([[11],{

/***/ "1aa0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22d902fe-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/controls/selectField/properties.vue?vue&type=template&id=54738b06&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"uk-margin-small-bottom"},[_c('label',{staticClass:"uk-form-label",attrs:{"for":"txtPlaceholder"}},[_vm._v("Label text")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.label),expression:"label"}],staticClass:"uk-input uk-form-small",attrs:{"id":"txtLabel","type":"text"},domProps:{"value":(_vm.label)},on:{"input":function($event){if($event.target.composing){ return; }_vm.label=$event.target.value}}})]),_c('div',{staticClass:"uk-margin-small-bottom"},[_c('label',{staticClass:"uk-form-label",attrs:{"for":"txtPlaceholder"}},[_vm._v("Placeholder text")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.placeholder),expression:"placeholder"}],staticClass:"uk-input uk-form-small",attrs:{"id":"txtPlaceholder","type":"text"},domProps:{"value":(_vm.placeholder)},on:{"input":function($event){if($event.target.composing){ return; }_vm.placeholder=$event.target.value}}})]),_c('div',{staticClass:"uk-margin-small-bottom"},[_c('label',{staticClass:"uk-form-label",attrs:{"for":"drpDataSource"}},[_vm._v("Data source")]),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.sourceId),expression:"sourceId"}],staticClass:"uk-select uk-form-small",attrs:{"id":"drpDataSource"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.sourceId=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.dataSources),function(option){return _c('option',{key:option.id,domProps:{"value":option.id}},[_vm._v(" "+_vm._s(option.text)+" ")])}),0)]),_c('div',{staticClass:"uk-margin-small-bottom"},[_c('label',{staticClass:"uk-form-label",attrs:{"for":"chkMultiple"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.multiple),expression:"multiple"}],staticClass:"uk-checkbox",attrs:{"id":"chkMultiple","type":"checkbox"},domProps:{"checked":Array.isArray(_vm.multiple)?_vm._i(_vm.multiple,null)>-1:(_vm.multiple)},on:{"change":function($event){var $$a=_vm.multiple,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.multiple=$$a.concat([$$v]))}else{$$i>-1&&(_vm.multiple=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.multiple=$$c}}}}),_vm._v(" Allow multiple selection")])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/controls/selectField/properties.vue?vue&type=template&id=54738b06&

// EXTERNAL MODULE: ./node_modules/vuelidate/lib/validators/index.js
var validators = __webpack_require__("b5ae");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/controls/selectField/properties.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var propertiesvue_type_script_lang_js_ = ({
  inject: ["$externalDataSources"],
  validations: {
    label: {
      required: validators["required"],
      minLength: Object(validators["minLength"])(3)
    }
  },
  computed: {
    dataSources: function dataSources() {
      return this.$externalDataSources;
    }
  },
  data: function data() {
    return this.value;
  },
  props: ["value"]
});
// CONCATENATED MODULE: ./src/components/controls/selectField/properties.vue?vue&type=script&lang=js&
 /* harmony default export */ var selectField_propertiesvue_type_script_lang_js_ = (propertiesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/controls/selectField/properties.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  selectField_propertiesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var properties = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=coreform-components.11.js.map