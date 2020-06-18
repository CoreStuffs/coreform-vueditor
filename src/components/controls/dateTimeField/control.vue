<template>
  <formControl :schema="schema" :preferredWidth="width">
    <label :for="schema.id" class="uk-form-label"
      >{{ schema.label }}
      <div class="required-tag" v-if="$isrequired"
    /></label>
      <DatePicker
        :ref="schema.id"
        :placeholder="schema.placeholder"
        v-bind:class="{'uk-form-danger': $error}"
        :id="schema.id"
        v-model="data"
        :lang="lang"
        type="datetime"
        @input="updateInput"
      />


  </formControl>
</template>
<script>
/* https://github.com/mengxiong10/vue2-datepicker */
import controlBase from "@/components/.infra/controlBase.vue";
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

import 'vue2-datepicker/locale/fr';
import 'vue2-datepicker/locale/ru';
export default {
  extends:controlBase,
 data:function(){
   return {
     lang:'en',
     data:this.value
    };
 },
  components: {
    formControl: () => import("@/components/.infra/formControl.vue"),
    DatePicker
  },
  methods: {
    updateInput: function() {
      this.$emit("input", this.data);
      if(this.$validation) this.$validation.$touch();
    }
  },
  props: {value:{}, width: {
            type:String,
            default:"1-4"
        }}
};
</script>
<style>
.mx-datepicker {
  width:100% !important
}
.mx-input {
  border-radius:0px !important;
  box-shadow:inherit;
  height:30px;
  border:1px solid #a0a0a0;
  font:inherit !important;
  font-size:0.875rem !important;
  width:100%
}

.mx-input:hover{
  border-color:#a0a0a0 !important
}

.mx-input:focus{
  border-color:#409aff !important
}


.mx-table-date .today{
  font-weight: 700;
}

td.today{
  background-color: #f0f0f0
}
</style>