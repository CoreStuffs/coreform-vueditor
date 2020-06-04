<template>
  <vk-modal :show.sync="show" overflow-auto>
    <vk-modal-close @click="show = false"></vk-modal-close>
    <div class="uk-form-stacked uk-text-small">
      <div>
        <ul uk-tab>
          <li v-bind:class="{ 'uk-tab-error': $v.$error }">
            <a href="#">Basic</a>
          </li>
          <li><a href="#">Validations</a></li>
          <li><a href="#">Debug</a></li>
        </ul>
        <ul class="uk-switcher uk-margin" uk-overflow-auto>
          <li>
            <div class="uk-form-horizontal uk-margin-large">
              <fieldset class="uk-fieldset">
                <div class="uk-margin">
                  <label for="txtValue" class="uk-form-label"
                    >Variable name</label
                  >
                  <div class="uk-form-controls">
                    <input
                      id="txtValue"
                      name="txtValue"
                      type="text"
                      class="uk-input uk-form-small"
                      v-model="variable.name"
                      v-bind:class="{
                        'uk-form-danger': $v.variable.name.$error
                      }"
                    />
                  </div>
                </div>
                <div class="uk-margin">
                  <label for="selType" class="uk-form-label"
                    >Variable type</label
                  >
                  <div class="uk-form-controls uk-text-small">
                    <select
                      v-if="srcName === ''"
                      name="selType"
                      class="uk-select uk-form-small uk-width-expand@m"
                      v-model="variable.type"
                      v-bind:class="{
                        'uk-form-danger': $v.variable.type.$error
                      }"
                    >
                      <option
                        :key="key"
                        v-for="(text, key) in acceptedVariablesTypes"
                        v-bind:value="key"
                      >
                        {{ text }}
                      </option>
                    </select>
                    <label v-if="srcName !== ''">{{
                      variableType(variable.type)
                    }}</label>
                  </div>
                </div>
              </fieldset>
            </div>
          </li>
          <li>
            <validationTable :variable="variable" />
          </li>
          <li>
            <pre><code>{{variable}}</code></pre>
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
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

import { required, minLength, alphaNum } from "vuelidate/lib/validators";

export default {
  inject: ["$variableTypes", "$saveVariable"],
  data: function() {
    return {
      show: false,
      editformId: Date.now(),
      editformFieldId: Date.now(),
      variable: {},
      callback: function() {},
      acceptedVariablesTypes: {},
      srcName: ""
    };
  },
  components: {
    validationTable: () => import("@/components/validationTable.vue")
  },
  validations: function() {
    return {
      variable: {
        name: {
          required: required,
          alphaNum: alphaNum,
          minLength: minLength(3),
          unique: value =>
            this.$getVariableByName(value) &&
            this.srcName.toLowerCase() === value.toLowerCase()
        },
        type: {
          required: required
        }
      }
    };
  },
  mounted: function() {
    // var el = $(this.$el).find('.variableSelector');
    // el.select2()
    //     .val(this.variable)
    //     .trigger("change")
    //     // emit event on change.
    //     .on("change", function () {
    //         vm.$emit("input", $(this).val());
    //     });
  },

  watch: {
    variable: function() {
      this.$v.$reset();
    }
  },
  methods: {
    variableType: function(name) {
      var vt = this.$variableTypes[name.toLowerCase()];
      return vt.text;
    },
    changeValue: function(evt) {
      this.$emit("input", evt.srcElement.value);
    },
    showModal: function(variable, acceptedTypes, callback) {
      if (!variable)
        variable = { name: "", validations: [{ type: "required" }] };
      this.srcName = variable.name;
      Object.assign(this.variable, variable);
      this.callback = callback;

      this.acceptedVariablesTypes = {};
      for (const varid in this.$variableTypes) {
        if (
          !acceptedTypes ||
          acceptedTypes.filter(n => n.toLowerCase() === varid.toLowerCase())
            .length === 1
        ) {
          this.acceptedVariablesTypes[varid] = this.$variableTypes[varid].text;
        }
      }
      if (Object.keys(this.acceptedVariablesTypes).length === 1)
        this.variable.type = Object.keys(this.acceptedVariablesTypes)[0];

      this.show = true;
    },

    applyEdit: function() {
      //this.$v.$touch();
      //if (!this.$v.$error) {
      this.show = false;
      if (this.callback !== null && typeof this.callback !== "undefined") {
        var obj = {};
        Object.assign(obj, this.variable);
        this.$saveVariable(obj, this.srcName), this.callback(obj);
      }
      //}
    }
  }
};
</script>
