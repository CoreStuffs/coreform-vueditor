<template>
  <div>
    <div class="uk-margin-small-bottom">
      <label for="txtLabel" class="uk-form-label">Label text</label>
      <input
        id="txtLabel"
        type="text"
        class="uk-input uk-form-small"
        v-model="label"
        v-bind:class="{ 'uk-form-danger': $v.label.$error }"
      />
    </div>
    <div class="uk-margin-small-bottom">
      <label for="txtPlaceholder" class="uk-form-label">Placeholder text</label>
      <input
        id="txtPlaceholder"
        type="text"
        class="uk-input uk-form-small"
        v-model="placeholder"
      />
    </div>
  </div>
</template>
<script>
import { required, minLength } from "vuelidate/lib/validators";
export default {
  inject: ["$getValidation"],
  validations: {
    label: {
      required: required,
      minLength: minLength(3),
    },
  },
  computed: {
    $v: function () {
      var v = this.$getValidation();
      return v;
    },
  },
  data: function () {
    return this.value;
  },
  props: ["value"],
};
</script>
