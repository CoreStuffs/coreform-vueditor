<template>
  <div>
    {{schema.label}}
    <multiselect :v-model="value" :options="options"></multiselect>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
        value : "",
      options: ["aaa", "bbb", "ccc"]
    };
  },
  props: {
    schema: {
      required: true
    }
  },
  components: {
    multiselect: () => import("vue-multiselect")
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>