<template>
  <div class="uk-form-horizontal uk-margin-large">
    <fieldset class="uk-fieldset">
      <div class="uk-margin" :key="validator.key" v-for="validator in validators()">
        <div class="uk-form-controls">
        <label for="chkRequired" class="uk-form-label"
          ><input
            :name="validator.key"
            :checked="isSelected(validator.key)"
            @change="handleChange($event)"
            class="uk-checkbox"
            type="checkbox"
          />
          {{validator.label.default}}</label>
        </div>
      </div>
    </fieldset>
  </div>
</template>
<script>
export default {
  inject:["$variableTypes", "$formValidators"],
  validation: function () {
    return {};
  },
  methods: {
    handleChange: function (e) {
      if (e.srcElement.checked) {
        this.variable.validations.push({ type: e.srcElement.name });
      } else {
        this.variable.validations = this.variable.validations.filter(
          (o) => o.type.toLowerCase() !== e.srcElement.name
        );
      }
      this.$emit("input", this.variable);
    },
      isSelected:function(validatorKey){
        var f = this.variable.validations.filter(o=> o.type === validatorKey);
        return f.length === 1;
      },
     validators:function(){
       if(this.variable && this.variable.type && this.$variableTypes[this.variable.type]){
          var vals = this.$variableTypes[this.variable.type].optionalValidators;
          var ret = [];
          vals.forEach(element => {
            var o = this.$formValidators[element];
            o.key = element;
            ret.push(o);
          });
          return ret;
       }
      }
  },
  props: ["variable"],
};
</script>
