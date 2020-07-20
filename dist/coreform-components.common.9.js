((typeof self !== 'undefined' ? self : this)["webpackJsonpcoreform_components"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpcoreform_components"] || []).push([[9],{

/***/ "aeb7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ae30ae0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/controls/grid/properties.vue?vue&type=template&id=1d1bc673&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"uk-margin-small-bottom"},[_c('label',{staticClass:"uk-form-label",attrs:{"for":"chkShowSeparator"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.showSeparator),expression:"showSeparator"}],staticClass:"uk-checkbox",attrs:{"id":"chkShowSeparator","type":"checkbox"},domProps:{"checked":Array.isArray(_vm.showSeparator)?_vm._i(_vm.showSeparator,null)>-1:(_vm.showSeparator)},on:{"change":function($event){var $$a=_vm.showSeparator,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.showSeparator=$$a.concat([$$v]))}else{$$i>-1&&(_vm.showSeparator=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.showSeparator=$$c}}}}),_vm._v(" Show separator")])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/controls/grid/properties.vue?vue&type=template&id=1d1bc673&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/controls/grid/properties.vue?vue&type=script&lang=js&
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
  inject: ["$getNextId"],
  data: function data() {
    return this.value;
  },
  props: ["value"],
  created: function created() {
    if (typeof this.showSeparator === "undefined") this.value["showSeparator"] = false; //var i = 1;
    // this.columns.forEach(element => {
    //     if(!element.id) {
    //         element.id =  this.id + 1000 + i++;
    //     }
    // });
  }
});
// CONCATENATED MODULE: ./src/components/controls/grid/properties.vue?vue&type=script&lang=js&
 /* harmony default export */ var grid_propertiesvue_type_script_lang_js_ = (propertiesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/controls/grid/properties.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  grid_propertiesvue_type_script_lang_js_,
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
//# sourceMappingURL=coreform-components.common.9.js.map