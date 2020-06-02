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
         v-bind:class="{'uk-form-danger': $error}"
        :id="schema.id"
        :value="value"
        @input="updateInput"
      />
    </div>
  </formControl>
</template>
<script>
import componentBase from "@/components/.infra/componentBase.vue";
export default {
  extends:componentBase,
  data: function() {
    return {data : this.value};
  },
  components: {
    formControl: () => import("@/components/.infra/formControl.vue")
  },
  computed: {
    inputType: function() {
      return "text";
    }
  },
  methods: {
    updateInput: function() {
      this.$emit("input", this.$el.getElementsByTagName("input")[0].value);
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
