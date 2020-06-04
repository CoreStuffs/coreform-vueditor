<template>
  <vk-modal :show.sync="show" overflow-auto>
    <vk-modal-close @click="show = false"></vk-modal-close>
    <div class="uk-form-stacked  uk-text-small">
      <div>
        <ul uk-tab>
          <li><a href="#">Basic</a></li>
          <li><a href="#">Debug</a></li>
        </ul>
        <ul class="uk-switcher uk-margin" uk-overflow-auto>
          <li>
            <div v-if="isDataField" class="uk-margin-small-bottom">
              <label for="txtValue" class="uk-form-label">Variable name</label>
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
                  style="margin-left:5px;margin-top:5px"
                  uk-icon="icon: plus-circle"
                ></a>
              </div>
            </div>
            <component
            ref="controlProps"
              :key="control.type"
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
    <div slot="footer" class="uk-text-right">
      <vk-button class="uk-margin-small-right" @click="show = false"
        >Cancel</vk-button
      >
      <vk-button
        class="uk-margin-small-right uk-button-primary"
        type="primary"
        @click="applyEdit()"
        >Apply</vk-button
      >
    </div>
  </vk-modal>
</template>
<script>
import Vue from "vue";
import Vuikit from "vuikit";
Vue.use(Vuikit);
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

import {
  required,
  minLength,
  alphaNum
} from "vuelidate/lib/validators";
export default {
  inject: ["$getControlByTag", "$getVariablesByType", "$variableTypes","$controls"],
//   created:function(){
//         this.$controls.forEach(control=>{
//             this.$options.components[control.tag]= control.properties;
//         })
//   },
  methods: {
    variableType: function(name) {
      var v = this.$variableTypes[name];
      return v.text;
    },
    showModal: function(control, callback) {
      this.callback = callback;
    var ctrl = this.$getControlByTag(control.type);
    this.isDataField = ctrl.isDataField;
     var v = ctrl.properties.default.validations;
     
    if (v) {
      for (let [key, value] of Object.entries(v)) {
        if (!key.startsWith("$")) this.controlValidations.control[key] = value;
      }
    }
    this.$options.components[control.type] = ctrl.properties.default;
      this.show = true;
      Object.assign(this.control, control);
    },
    applyEdit: function() {
      this.$v.$touch();
      if (!this.$v.$error) {
        this.show = false;
        if (this.callback) {
          var obj = {};
          Object.assign(obj, this.control);
          this.callback(obj);
        }
      }
    }
  },
  provide: function() {
      var t = this;
      return{
          $getValidation:function(){
              return t.$v.control;
          }
      }
  },
  computed: {
    acceptedVariables: function() {
      var l = this.$getControlByTag(this.control.type).acceptedVariableTypes;
      var arr = [];
      l.forEach(avt => {
        var vars = this.$getVariablesByType(avt);
        vars.forEach(v => {
          arr.push(v);
        });
      });
      return arr;
    }
  },
  data: function() {
    return {
      show: false,
      isDataField:false,
      callback: function() {},
      control: {},
      controlValidations:{control:{}}
    };
  },
  validations: function() {
      var obj = this.controlValidations;
    if (this.isDataField) {
      obj.control.variable = {
        required: required,
        alphaNum: alphaNum,
        minLength: minLength(3)
      };
    }
    

    return obj;
  }
};
</script>
