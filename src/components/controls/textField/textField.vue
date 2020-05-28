<template>
  <formControl :schema="schema">
    <label :for="schema.id" class="uk-form-label"
      >{{ schema.label }}
      <div class="required-tag" v-if="$isrequired"
    /></label>
    <div class="uk-form-controls">
      <input
        :type="inputType"
        :placeholder="schema.placeholder"
        class="uk-input uk-form-small"
        :id="schema.id"
        :value="value"
        @input="updateInput"
      />
    </div>
  </formControl>
</template>
<script>
import formControl from "@/components/.infra/formControl.vue";
export default {
  inject: ["getVariable"],
  data: function() {
    return {};
  },
  components: {
    formControl
  },
  computed: {
    inputType: function() {
      return "text";
    }
  },
  methods: {
    updateInput: function() {
      this.$emit("input", this.$el.getElementsByTagName("input")[0].value);
      //this.$touch(); //vuelidate
    }
  },
  props: {
    schema: {
      type: Object,
      required: true
    },
    value: {
      type: String,
      required: false
    }
  }
};
</script>
