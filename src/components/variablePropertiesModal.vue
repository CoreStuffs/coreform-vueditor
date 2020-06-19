<template>
  <div :ref="editformId" :id="editformId" class="cf uk-flex-top" uk-modal="stack:true" v-cloak>
    <div
      style="transition: none;"
      class="uk-modal-dialog uk-transition-fade uk-margin-auto-vertical"
    >
      <button class="uk-modal-close-default" type="button" uk-close></button>
      <!--<div class="uk-modal-header">
                <h2 class="uk-modal-title">Variable</h2>
            </div>-->
      <div class="uk-modal-body uk-text-small" id="editFormBody">
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
                          'uk-form-danger': $v.variable.name.$error,
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
                          'uk-form-danger': $v.variable.type.$error,
                        }"
                      >
                        <option
                          :key="text"
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
import { deepCopy } from "@/components/utils.js";
Vue.use(Vuelidate);

import { required, minLength, alphaNum } from "vuelidate/lib/validators";

export default {
  inject: ["$variableTypes", "$saveVariable"],
  data: function () {
    return {
      show: false,
      editformId: Date.now(),
      editformFieldId: Date.now(),
      variable: {},
      callback: function () {},
      acceptedVariablesTypes: {},
      srcName: "",
    };
  },
  components: {
    validationTable: () => import("@/components/validationTable.vue"),
  },
  validations: function () {
    return {
      variable: {
        name: {
          required: required,
          alphaNum: alphaNum,
          minLength: minLength(3),
          unique: (value) =>
            this.$getVariableByName(value) &&
            this.srcName.toLowerCase() === value.toLowerCase(),
        },
        type: {
          required: required,
        },
      },
    };
  },
  mounted: function () {
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
    variable: function () {
      this.$v.$reset();
    },
  },
  methods: {
    variableType: function (name) {
      var vt = this.$variableTypes[name.toLowerCase()];
      return vt.text;
    },
    changeValue: function (evt) {
      this.$emit("input", evt.srcElement.value);
    },
    showModal: function (variable, acceptedTypes, callback) {
      this.editformFieldId = Date.now();
      if (!variable)
        variable = { name: "", validations: [{ type: "required" }] };
      this.srcName = variable.name;
      this.variable = deepCopy(variable);
      this.callback = callback;

      this.acceptedVariablesTypes = {};
      for (const varid in this.$variableTypes) {
        if (
          !acceptedTypes ||
          acceptedTypes.filter((n) => n.toLowerCase() === varid.toLowerCase())
            .length === 1
        ) {
          this.acceptedVariablesTypes[varid] = this.$variableTypes[varid].text;
        }
      }
      if (Object.keys(this.acceptedVariablesTypes).length === 1)
        this.variable.type = Object.keys(this.acceptedVariablesTypes)[0];

      var modal = UIkit.modal(document.getElementById(this.editformId),{container:false});
      var t = this;
      UIkit.util.on(
        document.getElementById(this.editformId),
        "shown",
        function (a, b) {
          if (b === modal) {
            UIkit.tab(
              document
                .getElementById(t.editformId)
                .getElementsByClassName("uk-tab")[0]
            ).show(0);
          }
        }
      );
      modal.show();
    },

    applyEdit: function () {
      //this.$v.$touch();
      //if (!this.$v.$error) {
      UIkit.modal(document.getElementById(this.editformId)).hide();
      if (this.callback !== null && typeof this.callback !== "undefined") {
        var obj = deepCopy(this.variable);
        this.$saveVariable(this.variable, this.srcName);
        this.callback(obj);
      }
      //}
    },
  },
};
</script>
