(window["coreformComponents_jsonp"] = window["coreformComponents_jsonp"] || []).push([[5],{

/***/ "0e1a":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".cf-form-focus[data-v-955a6e3c]{border:2px dotted #b0c4de!important}.cf_field[data-v-955a6e3c]{position:relative;border:2px solid transparent;width:100%}.coreform_toolbar[data-v-955a6e3c]{z-index:999}.coreform_toolbar label[data-v-955a6e3c]{background-color:#fcfcfc;margin-right:7px;position:relative;padding:1px;top:-3px;display:inline-block;cursor:pointer;font-size:13px}.coreform_toolbar img[data-v-955a6e3c]{display:block;height:100%;width:100%}div.deleteHandle[data-v-955a6e3c]{background-color:#8b0000!important}div.deleteHandle[data-v-955a6e3c]:hover{background-color:#ff4500!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "1347":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__("2ca0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/.infra/controlBase.vue?vue&type=script&lang=js&

/* harmony default export */ var controlBasevue_type_script_lang_js_ = ({
  inject: ["$getControlValidator", "$getVariableByName"],
  data: function data() {
    return {};
  },
  props: {
    editMode: {
      type: Boolean,
      "default": true
    },
    schema: {
      type: Object,
      required: true
    },
    width: {
      type: String,
      "default": "1-1"
    }
  },
  computed: {
    $validation: {
      cache: false,
      get: function get() {
        var v = this.schema.variable;
        var val = this.$getControlValidator(v);
        return val;
      }
    },
    $errorMessage: function $errorMessage() {
      if (this.$validation && this.$validation.$error && this.schema.variable) {
        for (var valid in this.$validation) {
          if (!String(this.$validation[valid]).startsWith("$") && this.$validation[valid] === false) {
            var variable = this.$getVariableByName(this.schema.variable);

            for (var vali in variable.validations) {
              var validation = variable.validations[vali];

              if (validation.enabled) {
                if (validation.type === this.$validation.$params[valid].type) {
                  var _validation$errorMess;

                  return (_validation$errorMess = validation.errorMessage) !== null && _validation$errorMess !== void 0 ? _validation$errorMess : "Validation error: " + validation.type;
                }
              }
            }
          }
        }
      }

      return "";
    },
    $error: function $error() {
      return this.$validation ? this.$validation.$error : false;
    },
    $isrequired: function $isrequired() {
      if (this.$validation) {
        for (var param in this.$validation.$params) {
          if (this.$validation.$params[param].type === "required") return true;
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/.infra/controlBase.vue?vue&type=script&lang=js&
 /* harmony default export */ var _infra_controlBasevue_type_script_lang_js_ = (controlBasevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/.infra/controlBase.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _infra_controlBasevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var controlBase = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "2b16":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0e1a");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("3add24b7", content, shadowRoot)
};

/***/ }),

/***/ "8e5f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("de9d");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("9fc06e2c", content, shadowRoot)
};

/***/ }),

/***/ "ac12":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formControl_vue_vue_type_style_index_0_id_955a6e3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2b16");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formControl_vue_vue_type_style_index_0_id_955a6e3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formControl_vue_vue_type_style_index_0_id_955a6e3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formControl_vue_vue_type_style_index_0_id_955a6e3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formControl_vue_vue_type_style_index_0_id_955a6e3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formControl_vue_vue_type_style_index_0_id_955a6e3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "de9d":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".toolbar-button[data-v-431d3429]{background-color:#fff;box-shadow:0 0 .2em 0 rgba(128,128,170,.8);height:.7em;width:.7em;margin-right:3px;padding:3px;display:inline-block;cursor:pointer}.toolbar-button[data-v-431d3429]:hover{background-color:#b0c4de}.icon-move[data-v-431d3429]{background-image:url(\"data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20enable-background%3D%22new%200%200%20512%20512%22%20version%3D%221.1%22%20viewBox%3D%220%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m506.53%20243.71-96.224-80c-4.8-4-11.456-4.832-17.056-2.208-5.632%202.656-9.248%208.288-9.248%2014.496v48h-96v-96h48c6.208%200%2011.84-3.616%2014.496-9.248%202.624-5.632%201.792-12.288-2.208-17.056l-80-96.224c-6.08-7.296-18.496-7.296-24.608%200l-80%2096.224c-3.968%204.8-4.832%2011.456-2.176%2017.056%202.624%205.632%208.288%209.248%2014.496%209.248h48v96h-96v-48c0-6.208-3.616-11.84-9.248-14.496-5.6-2.624-12.256-1.792-17.056%202.208l-96.224%2080c-7.296%206.08-7.296%2018.496%200%2024.608l96.224%2080c4.8%203.968%2011.456%204.832%2017.056%202.176%205.664-2.624%209.248-8.288%209.248-14.496v-48h96v96h-48c-6.208%200-11.872%203.616-14.496%209.248-2.656%205.632-1.792%2012.288%202.176%2017.056l80%2096.224c6.08%207.296%2018.496%207.296%2024.608%200l80-96.224c4-4.8%204.832-11.456%202.208-17.056-2.656-5.632-8.288-9.248-14.496-9.248h-48v-96h96v48c0%206.208%203.616%2011.872%209.248%2014.496%205.632%202.656%2012.288%201.792%2017.056-2.176l96.224-80c7.296-6.112%207.296-18.528%200-24.608z%22%2F%3E%3C%2Fsvg%3E\")}.icon-move[data-v-431d3429],.icon-settings[data-v-431d3429]{background-repeat:no-repeat}.icon-settings[data-v-431d3429]{background-image:url(\"data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20enable-background%3D%22new%200%200%2048.4%2048.4%22%20version%3D%221.1%22%20viewBox%3D%220%200%2048.4%2048.4%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cpath%20d%3D%22m48.4%2024.2c0-1.8-1.297-3.719-2.896-4.285s-3.149-1.952-3.6-3.045-0.334-3.173%200.396-4.705c0.729-1.532%200.287-3.807-0.986-5.08-1.272-1.273-3.547-1.714-5.08-0.985-1.532%200.729-3.609%200.848-4.699%200.397s-2.477-2.003-3.045-3.602c-0.569-1.599-2.49-2.895-4.29-2.895s-3.721%201.296-4.29%202.895-1.955%203.151-3.045%203.602-3.168%200.332-4.7-0.397-3.807-0.288-5.08%200.985-1.714%203.547-0.985%205.08%200.845%203.611%200.392%204.703-1.998%202.481-3.597%203.047-2.895%202.485-2.895%204.285%201.296%203.721%202.895%204.29c1.599%200.568%203.146%201.957%203.599%203.047%200.453%201.089%200.335%203.166-0.394%204.698s-0.288%203.807%200.985%205.08c1.273%201.272%203.547%201.714%205.08%200.985s3.61-0.847%204.7-0.395c1.091%200.452%202.476%202.008%203.045%203.604s2.49%202.891%204.29%202.891%203.721-1.295%204.29-2.891c0.568-1.596%201.953-3.15%203.043-3.604%201.09-0.453%203.17-0.334%204.701%200.396%201.533%200.729%203.808%200.287%205.08-0.985%201.273-1.273%201.715-3.548%200.986-5.08-0.729-1.533-0.849-3.61-0.398-4.7s2.004-2.477%203.603-3.045c1.599-0.57%202.895-2.491%202.895-4.291zm-24.2%208.88c-4.91%200-8.88-3.97-8.88-8.87%200-4.91%203.97-8.88%208.88-8.88%204.899%200%208.87%203.97%208.87%208.88%200%204.9-3.97%208.87-8.87%208.87z%22%2F%3E%3C%2Fsvg%3E\")}.icon-trash[data-v-431d3429]{background-image:url(\"data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20enable-background%3D%22new%200%200%20348.333%20348.334%22%20fill%3D%22white%22%20version%3D%221.1%22%20viewBox%3D%220%200%20348.33%20348.33%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m336.56%2068.611-105.54%20105.55%20105.54%20105.55c15.699%2015.705%2015.699%2041.145%200%2056.85-7.844%207.844-18.128%2011.769-28.407%2011.769-10.296%200-20.581-3.919-28.419-11.769l-105.57-105.56-105.56%20105.56c-7.843%207.844-18.128%2011.769-28.416%2011.769-10.285%200-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139%200-56.85l105.54-105.55-105.55-105.55c-15.699-15.699-15.699-41.145%200-56.844%2015.696-15.687%2041.127-15.687%2056.829%200l105.56%20105.55%20105.56-105.55c15.705-15.687%2041.139-15.687%2056.832%200%2015.705%2015.699%2015.705%2041.145%206e-3%2056.844z%22%2F%3E%3C%2Fsvg%3E\")}.icon-info[data-v-431d3429],.icon-trash[data-v-431d3429]{background-repeat:no-repeat}.icon-info[data-v-431d3429]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 96 96'%3E%3Cpath d='M45.2 62h5.6V45.2h-5.6V62zM48 20c-15.5 0-28 12.5-28 28s12.5 28 28 28 28-12.5 28-28-12.5-28-28-28zm0 50.4c-12.3 0-22.4-10.1-22.4-22.4 0-12.3 10.1-22.4 22.4-22.4 12.3 0 22.4 10.1 22.4 22.4 0 12.3-10.1 22.4-22.4 22.4zm-2.8-30.8h5.6V34h-5.6v5.6z' fill='%23333'/%3E%3C/svg%3E\")}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "e10c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toolButton_vue_vue_type_style_index_0_id_431d3429_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8e5f");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toolButton_vue_vue_type_style_index_0_id_431d3429_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toolButton_vue_vue_type_style_index_0_id_431d3429_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toolButton_vue_vue_type_style_index_0_id_431d3429_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toolButton_vue_vue_type_style_index_0_id_431d3429_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toolButton_vue_vue_type_style_index_0_id_431d3429_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ff09":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"496c4aca-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/.infra/formControl.vue?vue&type=template&id=955a6e3c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"container",staticClass:"uk-inline cf_validationError uk-margin-small-bottom cf_field",class:'uk-width-'+ _vm.preferredWidth,attrs:{"data-ref":_vm.id,"type":_vm.type},on:{"mouseleave":_vm.hideToolbar,"mouseover":_vm.showToolbar,"dblclick":_vm.openSettings}},[_c('div',{ref:"toolbar",staticClass:"coreform_toolbar uk-position-top-right",staticStyle:{"display":"none"},style:(_vm.cssStyle)},[_c('toolButton',{attrs:{"icon":"move","cssclass":"uk-drag moveHandle","onclick":function (){}}}),_c('div',{staticClass:"uk-inline",staticStyle:{"top":"-2px"}},[_c('toolButton',{attrs:{"icon":"info","cssclass":"uk-drag moveHandle","onclick":function (){}}}),_c('div',{attrs:{"uk-drop":"pos: top-left; mode:click; offset: 5"}},[_c('div',{staticClass:"uk-card-body uk-card uk-card-small uk-card-default"},[_c('div',[_c('label',{staticClass:"uk-text-normal"},[_vm._v(_vm._s(_vm.controlType))])]),_c('div',[(_vm.variableText)?_c('label',{staticClass:"uk-text-normal"},[_vm._v("Variable: "+_vm._s(_vm.variableText))]):_vm._e()])])])],1),_c('toolButton',{attrs:{"icon":"settings","onclick":_vm.openSettings}}),_c('toolButton',{attrs:{"icon":"trash","cssclass":"deleteHandle","onclick":_vm.removeNode}})],1),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/.infra/formControl.vue?vue&type=template&id=955a6e3c&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"496c4aca-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/.infra/toolButton.vue?vue&type=template&id=431d3429&scoped=true&
var toolButtonvue_type_template_id_431d3429_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:'toolbar-button ' + _vm.cssclass,on:{"click":function($event){return _vm.click()}}},[_c('div',{class:'icon-' + _vm.icon,staticStyle:{"width":"100%","height":"100%"}})])}
var toolButtonvue_type_template_id_431d3429_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/.infra/toolButton.vue?vue&type=template&id=431d3429&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/.infra/toolButton.vue?vue&type=script&lang=js&
//
//
//
/* harmony default export */ var toolButtonvue_type_script_lang_js_ = ({
  data: function data() {
    return {};
  },
  props: ["onclick", "cssclass", "icon"],
  methods: {
    click: function click(evt) {
      this.onclick();
    }
  }
});
// CONCATENATED MODULE: ./src/components/.infra/toolButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var _infra_toolButtonvue_type_script_lang_js_ = (toolButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/.infra/toolButton.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__("e10c")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _infra_toolButtonvue_type_script_lang_js_,
  toolButtonvue_type_template_id_431d3429_scoped_true_render,
  toolButtonvue_type_template_id_431d3429_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "431d3429",
  null
  ,true
)

/* harmony default export */ var toolButton = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/.infra/formControl.vue?vue&type=script&lang=js&


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

/* harmony default export */ var formControlvue_type_script_lang_js_ = ({
  inject: ["$getControlLabel", "$openControlSettingsById"],
  data: function data() {
    return this.schema;
  },
  components: {
    toolButton: toolButton
  },
  computed: {
    variableText: function variableText() {
      if (this.variable) {
        return this.variable;
      } else {
        return "";
      }
    },
    controlType: function controlType() {
      var l = this.$getControlLabel(this.type);

      if (l) {
        return l;
      } else {
        return "Unknown";
      }
    }
  },
  methods: {
    hideToolbar: function hideToolbar(evt) {
      this.$root.$el.getElementsByClassName("coreform_toolbar").forEach(function (el) {
        return el.style.display = 'none';
      });
      this.$refs.container.classList.remove("cf-form-focus");
      evt.stopPropagation();
    },
    showToolbar: function showToolbar(evt) {
      this.$root.$el.getElementsByClassName("coreform_toolbar").forEach(function (el) {
        return el.style.display = 'none';
      });
      this.$refs.toolbar.style.display = '';
      this.$refs.container.classList.add("cf-form-focus");
      evt.stopPropagation();
    },
    openSettings: function openSettings(evt) {
      if (evt) evt.cancelBubble = true;
      this.$openControlSettingsById(this.id);
    },
    removeNode: function removeNode(evt) {
      this.$removeControlById(this.id);
    }
  },
  props: {
    schema: {
      type: Object,
      required: true
    },
    validation: {
      type: Object,
      required: false
    },
    preferredWidth: {
      type: String,
      "default": "1-1"
    },
    "cssStyle": {
      type: String
    }
  }
});
// CONCATENATED MODULE: ./src/components/.infra/formControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var _infra_formControlvue_type_script_lang_js_ = (formControlvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/.infra/formControl.vue



function formControl_injectStyles (context) {
  
  var style0 = __webpack_require__("ac12")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var formControl_component = Object(componentNormalizer["a" /* default */])(
  _infra_formControlvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  formControl_injectStyles,
  "955a6e3c",
  null
  ,true
)

/* harmony default export */ var formControl = __webpack_exports__["a"] = (formControl_component.exports);

/***/ }),

/***/ "ffda":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"496c4aca-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/controls/textField/control.vue?vue&type=template&id=53bc8b08&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('formControl',{attrs:{"schema":_vm.schema}},[_c('label',{staticClass:"uk-form-label",attrs:{"for":_vm.schema.id}},[_vm._v(_vm._s(_vm.schema.label)+" "),(_vm.$isrequired)?_c('div',{staticClass:"required-tag"}):_vm._e()]),_c('div',{staticClass:"uk-form-controls"},[((_vm.inputType)==='checkbox')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data),expression:"data"}],staticClass:"uk-input uk-form-small",class:{ 'uk-form-danger': _vm.$error },attrs:{"placeholder":_vm.schema.placeholder,"id":_vm.schema.id,"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.data)?_vm._i(_vm.data,null)>-1:(_vm.data)},on:{"input":_vm.updateInput,"change":function($event){var $$a=_vm.data,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.data=$$a.concat([$$v]))}else{$$i>-1&&(_vm.data=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.data=$$c}}}}):((_vm.inputType)==='radio')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data),expression:"data"}],staticClass:"uk-input uk-form-small",class:{ 'uk-form-danger': _vm.$error },attrs:{"placeholder":_vm.schema.placeholder,"id":_vm.schema.id,"type":"radio"},domProps:{"checked":_vm._q(_vm.data,null)},on:{"input":_vm.updateInput,"change":function($event){_vm.data=null}}}):_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data),expression:"data"}],staticClass:"uk-input uk-form-small",class:{ 'uk-form-danger': _vm.$error },attrs:{"placeholder":_vm.schema.placeholder,"id":_vm.schema.id,"type":_vm.inputType},domProps:{"value":(_vm.data)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.data=$event.target.value},_vm.updateInput]}})]),(_vm.$errorMessage)?_c('span',{staticClass:"error-message"},[_vm._v(_vm._s(_vm.$errorMessage))]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/controls/textField/control.vue?vue&type=template&id=53bc8b08&

// EXTERNAL MODULE: ./src/components/.infra/controlBase.vue + 2 modules
var controlBase = __webpack_require__("1347");

// EXTERNAL MODULE: ./src/components/.infra/formControl.vue + 9 modules
var formControl = __webpack_require__("ff09");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/controls/textField/control.vue?vue&type=script&lang=js&
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


/* harmony default export */ var controlvue_type_script_lang_js_ = ({
  "extends": controlBase["a" /* default */],
  components: {
    formControl: formControl["a" /* default */]
  },
  data: function data() {
    return {
      data: this.value
    };
  },
  computed: {
    inputType: function inputType() {
      return "text";
    }
  },
  methods: {
    updateInput: function updateInput() {
      this.$emit("input", this.$el.getElementsByTagName("input")[0].value);
      if (this.$validation) this.$validation.$touch();
    }
  },
  watch: {
    value: function value(newValue) {
      this.data = newValue;
    }
  },
  props: {
    value: {
      type: String,
      required: false
    }
  }
});
// CONCATENATED MODULE: ./src/components/controls/textField/control.vue?vue&type=script&lang=js&
 /* harmony default export */ var textField_controlvue_type_script_lang_js_ = (controlvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/controls/textField/control.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  textField_controlvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var control = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=coreform-components.5.js.map