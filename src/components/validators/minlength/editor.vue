<template>
  <div>
    <label class="uk-form-label">Minimum length</label>
    <div class="uk-form-controls">
      <input
        class="uk-input uk-form-small"
        name="txtMinLength"
        v-model="parameters.minLength"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "minLength",
  data: function () {
    return { parameters: this.value };
  },
  props: ["value"],
};
</script>
