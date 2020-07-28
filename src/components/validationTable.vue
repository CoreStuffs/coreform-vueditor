<template>
  <fieldset class="uk-fieldset">
    <draggable :list="validators()">
      <div
        class="uk-grid"
        uk-grid
        :key="validator.key"
        v-for="validator in validators()"
      >
        <div class="uk-form-controls uk-width-1-3">
          <label for="chkRequired" class="uk-form-label"
            ><input
              :ref="'enb_' + validator.key"
              :checked="isSelected(validator.key)"
              @change="handleChange('enb_' + validator.key)"
              class="uk-checkbox"
              type="checkbox"
            />
            {{ validator.label.default }}</label
          >
        </div>
        <div
          v-show="isSelected(validator.key)"
          class="uk-width-2-3 uk-form-stacked"
        >
          <div v-show="validator.editor" class="uk-margin-small-bottom">
            <component
              v-if="validator.editor"
              :ref="'par_' + validator.key"
              :is="validator.key"
              v-model="validator.parameters"
              @input="handleChange('par_' + validator.key)"
            ></component>
          </div>
          <div>
            <label class="uk-form-label">Error message</label>
            <div class="uk-form-controls">
              <input
                type="text"
                :ref="'err_' + validator.key"
                placeholder="To display if the value is not valid"
                class="uk-input uk-form-small"
                v-model="validator.errorMessage"
                @change="handleChange('err_' + validator.key)"
              />
            </div>
          </div>
          <hr />
        </div>
      </div>
    </draggable>
  </fieldset>
</template>
<script>
export default {
  inject: ["$variableTypes", "$formValidators"],
  validation: function () {
    return {};
  },
  components: {
    draggable: () => import("vuedraggable"),
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
    handleChange: function (name) {
      var el;
      var srcEl = this.$refs[name][0];
      var typeName = name.substring(4);
      var arr = this.variable.validations.filter(
        (o) => o.type.toLowerCase() === typeName.toLowerCase()
      );
      if (arr.length === 0) {
        el = { type: typeName };
        this.variable.validations.push(el);
      } else {
        el = arr[0];
      }

      if (name.indexOf("enb_") === 0) {
        if (srcEl.checked) {
          el.enabled = true;
        } else {
          el.enabled = false;
        }
      }

      if (name.indexOf("err_") === 0) {
        el.errorMessage = srcEl.value;
      }

      if (name.indexOf("par_") === 0) {
        el.parameters = srcEl.parameters;
      }

      this.$emit("input", this.variable);
      this.$forceUpdate();
    },
    isSelected: function (validatorKey) {
      var f = this.variable.validations.filter(
        (o) => o.type.toLowerCase() === validatorKey.toLowerCase() && o.enabled
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
          if (o.editor) {
            let obj = o.editor;
            this.$options.components[o.key] = obj.default;
          }
          var f = this.variable.validations.filter(
            (o) => o.type.toLowerCase() === element.toLowerCase()
          );
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
