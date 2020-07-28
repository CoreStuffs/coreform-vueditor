<template>
  <div
    :ref="editformId"
    :id="editformId"
    class="cf uk-flex-top"
    uk-modal
    v-cloak
  >
    <div
      style="transition: none;"
      class="uk-modal-dialog uk-transition-fade uk-margin-auto-vertical"
    >
      <button class="uk-modal-close-default" type="button" uk-close></button>
      <div class="uk-modal-body uk-form-stacked" id="editFormBody">
        <h2 class="uk-modal-title">{{ title }}</h2>
        <div>
          <ul uk-tab>
            <li><a href="#">Basic</a></li>
            <li><a href="#">Debug</a></li>
          </ul>
          <ul class="uk-switcher uk-margin" uk-overflow-auto>
            <li>
              <div v-if="isDataField" class="uk-margin-small-bottom">
                <label for="txtValue" class="uk-form-label"
                  >Variable name</label
                >
                <!--<input id="txtValue" type="text" class="uk-input uk-form-small" v-model="control.variable" v-bind:class="{'uk-form-danger': $v.control.variable.$error}"/>-->
                <div class="uk-grid-column-collapse" uk-grid>
                  <select
                    class="uk-select uk-form-small uk-width-expand@m"
                    v-model="control.variable"
                  >
                    <option
                      :key="option.name"
                      v-for="option in acceptedVariables"
                      v-bind:value="option.name"
                    >
                      {{ option.name }} ({{ variableType(option.type) }})
                    </option>
                  </select>
                  <a
                    href="#"
                    @click="addVariable()"
                    class="uk-width-auto@m"
                    style="margin-left: 5px; margin-top: 5px;"
                    uk-icon="icon: plus-circle"
                  ></a>
                </div>
                <div v-show="control.variable">
                  <a href="#" @click="editVariable()">Edit variable</a>
                </div>
              </div>
              <component
                :key="editformFieldId"
                ref="controlProps"
                :is="control.type"
                v-bind="control"
                v-model="control"
              ></component>
            </li>
            <li>
              <pre><code>{{control}}</code></pre>
            </li>
          </ul>
        </div>
      </div>
      <div class="uk-modal-footer uk-text-right">
        <button
          class="uk-button uk-button-default uk-modal-close"
          type="button"
        >
          Cancel
        </button>
        <button
          class="uk-button uk-button-primary"
          type="button"
          @click="applyEdit()"
        >
          Apply
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import UIkit from "uikit";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
import { deepCopy } from "@/components/utils.js";
import { required, minLength, alphaNum } from "vuelidate/lib/validators";
export default {
  inject: [
    "$getControlByTag",
    "$getVariablesByType",
    "$variableTypes",
    "$controls",
    "$openVariableProperties",
  ],
  //   created:function(){
  //         this.$controls.forEach(control=>{
  //             this.$options.components[control.tag]= control.properties;
  //         })
  //   },
  methods: {
    variableType: function (name) {
      var v = this.$variableTypes[name];
      return v.text;
    },
    showModal: function (control, callback) {
      this.editformFieldId = Date.now();
      this.callback = callback;
      var ctrl = this.$getControlByTag(control.type);
      this.title = ctrl.label.default;
      this.isDataField = ctrl.isDataField;
      var v = ctrl.properties.default.validations;
      this.controlValidations = { control: {} };
      if (v) {
        for (let [key, value] of Object.entries(v)) {
          if (!key.startsWith("$"))
            this.controlValidations.control[key] = value;
        }
      }
      this.$options.components[control.type] = ctrl.properties.default;
      UIkit.modal(document.getElementById(this.editformId), {
        container: false,
      }).show();
      this.control = deepCopy(control);
      this.$forceUpdate();
    },
    editVariable: function () {
      var t = this;
      this.$openVariableProperties(t.control.variable, null, function () {});
    },
    addVariable: function () {
      var t = this;
      this.$openVariableProperties(null, this.acceptedVariableTypes, function (
        vari
      ) {
        t.control.variable = vari.name;
        UIkit.modal(document.getElementById(t.editformId)).show();
      });
    },
    applyEdit: function () {
      this.$v.$touch();
      if (!this.$v.$error) {
        UIkit.modal(document.getElementById(this.editformId)).hide();
        if (this.callback) {
          var obj = deepCopy(this.control);
          this.callback(obj);
        }
      }
    },
  },
  provide: function () {
    var t = this;
    return {
      $getValidation: function () {
        return t.$v.control;
      },
    };
  },
  computed: {
    acceptedVariables: function () {
      var l = this.$getControlByTag(this.control.type).acceptedVariableTypes;
      var arr = [];
      l.forEach((avt) => {
        var vars = this.$getVariablesByType(avt);
        vars.forEach((v) => {
          arr.push(v);
        });
      });
      return arr;
    },
    acceptedVariableTypes: function () {
      var l = this.$getControlByTag(this.control.type).acceptedVariableTypes;
      return l;
    },
  },
  data: function () {
    return {
      editformId: Date.now(),
      editformFieldId: Date.now(),
      show: false,
      isDataField: false,
      callback: function () {},
      control: {},
      title: "",
      controlValidations: { control: {} },
    };
  },
  validations: function () {
    var obj = this.controlValidations;
    if (this.isDataField) {
      obj.control.variable = {
        required: required,
        alphaNum: alphaNum,
        minLength: minLength(3),
      };
    }
    return obj;
  },
};
</script>
