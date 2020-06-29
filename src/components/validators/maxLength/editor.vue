<template>
  <div>
    <label class="uk-form-label">Maximum length</label>
    <div class="uk-form-controls">
      <input
        class="uk-input uk-form-small"
        ref="txtLength"
        name="txtMaxLength"
        v-model="parameters.maxLength"
        @input="updateInput"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "maxLength",
  data: function () {
    return { parameters: this.value };
  },
  methods: {
    updateInput: function () {
      this.$emit("input", this.parameters);
    },
  },
  props: ["value"],
};
</script>
