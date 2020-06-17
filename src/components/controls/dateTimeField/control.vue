<template>
  <formControl :schema="schema">
    <label :for="schema.id" class="uk-form-label"
      >{{ schema.label }}
      <div class="required-tag" v-if="$isrequired"
    /></label>
    <div class="uk-form-controls">
      <input
        :ref="schema.id"
        :placeholder="placeholder"
        class="uk-input uk-form-small"
        v-bind:class="{'uk-form-danger': $error}"
        :id="schema.id"
        :value="input"
        @input="updateInput"
        @blur="blur"
      />
    </div>
  </formControl>
</template>
<script>
import controlBase from "@/components/.infra/controlBase.vue";
import moment from 'moment';
import 'moment/locale/fr';
moment.locale("fr");
moment.defaultFormat = "L LT";//"D/M/YYYY HH:mm";
export default {
  extends:controlBase,
 
  components: {
    formControl: () => import("@/components/.infra/formControl.vue"),
  },
  computed: {
    input: function() {
      
      if(this.value){
        var dt = moment(this.value, moment.defaultFormatUtctrue, true);
        if(dt.isValid()) return dt.format();
      } 
      return this.value;
    },
    placeholder:function(){
      return "Format: " + moment("2020-12-31 22:53").format();
    }
  },
  methods: {
    updateInput: function() {
  var str = this.$el.getElementsByTagName("input")[0].value;
      var d = moment(str, moment.defaultFormat, true);
      var iv=d.isValid();
      if(iv){
        str = d.utc().format(moment.defaultFormatUtc);
      }
      this.$emit("input", str);

    },
    blur:function(){
    
      if(this.$validation) this.$validation.$touch();
    }
  },
  props: {
    value: {
      type: String,
      required: false
    }
  }
};
</script>
