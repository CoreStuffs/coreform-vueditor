<template>
  <vk-modal :show.sync="show" overflow-auto>
    <vk-modal-close @click="show = false"></vk-modal-close>
    <div class="uk-modal-body uk-form-stacked  uk-text-small">
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
              :key="control.type"
              :is="control ? control.type : null"
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
export default {
  inject: ["$getControlByTag"],
  methods: {
    showModal: function(control, callback) {
      this.control = Object.assign(control);
      this.callback = callback;

      for (let [key, value] of this.$controls.entries()) {
        this.$options.components[key] = value.fieldTemplate;
        this.$options.components["edit_" + key] = value.editForm;
      }
      for (let [, value] of Object.entries(this.$options.components)) {
        value.components = this.$options.components;
      }

      this.show = true;
    }
  },
  computed: {
    isDataField: function() {
      return (
        this.control &&
        this.control.type &&
        this.$getControlByTag(this.control.type).isDataField
      );
    },
    acceptedVariables: function() {
      var l = this.$getControlByTag(this.control.type).acceptedVariableTypes;
      this.control.type;
      return this.$variables.filter(
        v =>
          l.filter(r => r.toLowerCase() === v.type.toLowerCase()).length === 1
      );
    }
  },
  data: function() {
    return {
      show: false,
      callback: function() {},
      control: {}
    };
  }
};
</script>
