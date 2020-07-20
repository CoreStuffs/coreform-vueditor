((typeof self !== 'undefined' ? self : this)["webpackJsonpcoreform_components"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpcoreform_components"] || []).push([[10],{

/***/ "394c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ae30ae0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/controls/richTextField/properties.vue?vue&type=template&id=2656ac64&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"uk-margin-small-bottom"},[_c('label',{staticClass:"uk-form-label",attrs:{"for":"txtLabel"}},[_vm._v("Label text")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.label),expression:"label"}],staticClass:"uk-input uk-form-small",class:{ 'uk-form-danger': _vm.$v.label.$error },attrs:{"id":"txtLabel","type":"text"},domProps:{"value":(_vm.label)},on:{"input":function($event){if($event.target.composing){ return; }_vm.label=$event.target.value}}})]),_c('div',{staticClass:"uk-margin-small-bottom"},[_c('label',{staticClass:"uk-form-label",attrs:{"for":"txtPlaceholder"}},[_vm._v("Placeholder text")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.placeholder),expression:"placeholder"}],staticClass:"uk-input uk-form-small",attrs:{"id":"txtPlaceholder","type":"text"},domProps:{"value":(_vm.placeholder)},on:{"input":function($event){if($event.target.composing){ return; }_vm.placeholder=$event.target.value}}})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/controls/richTextField/properties.vue?vue&type=template&id=2656ac64&

// EXTERNAL MODULE: ./node_modules/vuelidate/lib/validators/index.js
var validators = __webpack_require__("b5ae");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/controls/richTextField/properties.vue?vue&type=script&lang=js&
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
  inject: ["$getValidation"],
  validations: {
    label: {
      required: validators["required"],
      minLength: Object(validators["minLength"])(3)
    }
  },
  computed: {
    $v: function $v() {
      var v = this.$getValidation();
      return v;
    }
  },
  data: function data() {
    return this.value;
  },
  props: ["value"]
});
// CONCATENATED MODULE: ./src/components/controls/richTextField/properties.vue?vue&type=script&lang=js&
 /* harmony default export */ var richTextField_propertiesvue_type_script_lang_js_ = (propertiesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/controls/richTextField/properties.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  richTextField_propertiesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var properties = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=coreform-components.common.10.js.map