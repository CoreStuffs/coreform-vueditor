<template>
  <div>
    <label class="uk-form-label"
      ><input name="txtMinLength" v-model="parameters.minLength" />
      &nbsp;Minimum length</label
    >
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
