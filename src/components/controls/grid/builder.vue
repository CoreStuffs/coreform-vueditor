<template>
  <div>
    Grid
    <draggable class="dragArea" tag="div" :list="schema.columns" :group="{ name: this.schema.id }">
        <div v-for="col in schema.columns" :key="col.id">
          <controlset :elements="col.elements"></controlset>
        </div>
    </draggable>
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
    controlset: () => import("@/components/.infra/controlset")
  },
  methods: {
    getVariable: function(name) {
      return this.$parent.getVariable(name);
    }
  }
};
</script>
