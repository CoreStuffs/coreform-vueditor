<template>
  <div>
    Grid
    <div v-for="col in schema.columns" :key="col.id">
      <blockquote style="border:1px dashed silver">
        <component
          v-for="el in col.elements"
          :key="el.id"
          :is="el.type"
          :schema="el"
          v-bind="el"
          v-model="getVariable[el.variable]"
        >
        </component>
      </blockquote>
    </div>
  </div>
</template>
<script>
export default {
  name: "Grid",
  data: function() {
    return {};
  },
  props: {
    schema: {
      type: Object,
      required: true
    }
  },
  components: {
    draggable: () => import("vuedraggable"),
    grid: () => import("../grid/builder"),
    textField: () => import("../textField/builder")
  },
  methods: {
    getVariable: function(name) {
      return name;
    }
  }
};
</script>
