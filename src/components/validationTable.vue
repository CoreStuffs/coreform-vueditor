<template>
  <fieldset class="uk-fieldset">
    <div
      class="uk-grid"
      uk-grid
      :key="validator.key"
      v-for="validator in validators()"
    >
      <div class="uk-form-controls uk-width-1-3">
        <label for="chkRequired" class="uk-form-label"
          ><input
            :name="'enb_' + validator.key"
            :checked="isSelected(validator.key)"
            @change="handleChange($event)"
            class="uk-checkbox"
            type="checkbox"
          />
          {{ validator.label.default }}</label
        >
      </div>
      <div
        v-if="isSelected(validator.key)"
        class="uk-width-2-3 uk-form-stacked"
      >
        <component
          v-if="validator.editor"
          ref="editValidatorId"
          :is="validator.key"
          :value="validator.parameters"
        ></component>
        <div>
          <label class="uk-form-label">Error message</label>
          <div class="uk-form-controls">
            <input
              type="text"
              :name="'err_' + validator.key"
              placeholder="To display if the value is not valid"
              class="uk-input uk-form-small"
              v-model="validator.errorMessage"
              @change="handleChange"
            />
          </div>
        </div>
        <hr />
      </div>
    </div>
  </fieldset>
</template>
<script>
export default {
  inject: ["$variableTypes", "$formValidators"],
  validation: function () {
    return {};
  },
  created: function () {
    for (let [key, value] of Object.entries(this.$formValidators)) {
      if (value.editor) {
        let obj = value.editor;
        this.$options.components[key] = obj.default;
      }
    }
  },
  methods: {
    handleChange: function (e) {
      var el;
      var name = e.srcElement.name.substring(4);
      var arr = this.variable.validations.filter(
        (o) => o.type.toLowerCase() === name
      );
      if (arr.length === 0) {
        el = { type: name };
        this.variable.validations.push(el);
      } else {
        el = arr[0];
      }

      if (e.srcElement.name.indexOf("enb_") === 0) {
        if (e.srcElement.checked) {
          el.enabled = true;
        } else {
          el.enabled = false;
        }
      }

      if (e.srcElement.name.indexOf("err_") === 0) {
        el.errorMessage = e.srcElement.value;
      }

      this.$emit("input", this.variable);
    },
    isSelected: function (validatorKey) {
      var f = this.variable.validations.filter(
        (o) => o.type === validatorKey && o.enabled
      );
      return f.length === 1;
    },
    validators: function () {
      if (
        this.variable &&
        this.variable.type &&
        this.$variableTypes[this.variable.type]
      ) {
        var vals = this.$variableTypes[this.variable.type].optionalValidators;
        var ret = [];

        vals.forEach((element) => {
          var o = this.$formValidators[element];
          o.key = element;
          var f = this.variable.validations.filter((o) => o.type === element);
          if (f.length === 1) {
            var vt = f[0];
            if (vt.errorMessage) o.errorMessage = vt.errorMessage;
            if (vt.parameters) {
              o.parameters = vt.parameters;
            }
          }
          if (!o.parameters && o.editorPath) o.parameters = {};
          ret.push(o);
        });
        return ret;
      }
    },
  },
  props: ["variable"],
};
</script>
