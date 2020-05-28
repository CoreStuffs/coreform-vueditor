<template>
  <div>
    {{ schema.label }}
    <vueselect :v-model="value" :options="options"></vueselect>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      value: "",
      options: ["aaa", "bbb", "ccc"]
    };
  },
  props: {
    schema: {
      required: true
    }
  },
  components: {
    vueselect: () => import("vue-select")
  }
};
</script>
<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";
</style>
