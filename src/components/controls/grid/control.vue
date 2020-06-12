<template>
  <formControl :schema="schema">
    <draggable
      class="row"
      v-bind:class="{
        'columnSeparator': schema.showSeparator,
        grid_edit: editMode,
      }"
      :list="schema.columns"
      :group="{ name: this.schema.id }"
      :component-data="getComponentData()"
    >
      <controlset
        :elements="col.elements"
        v-for="col in schema.columns"
        :key="schema.columns.indexOf(col)"
        :editMode="editMode"
        class="col"
      ></controlset>
    </draggable>
  </formControl>
</template>
<script>
export default {
  name: "Grid",
  data: function () {
    return {};
  },
  props: {
    editMode: {
      type: Boolean,
      default: false,
    },
    schema: {
      type: Object,
      required: true,
    },
  },
  created: function () {},
  components: {
    draggable: () => import("vuedraggable"),
    controlset: () => import("@/components/.infra/controlset"),
    formControl: () => import("@/components/.infra/formControl"),
  },
  methods: {
    getVariable: function (name) {
      return this.$parent.getVariable(name);
    },
    getComponentData() {
      return {
        attrs: {
          "uk-grid": "true",
        },
      };
    },
  },
};
</script>
<style scoped>

.grid_edit {
  min-height: 25px;
}

.grid_edit .col {
  border: 1px dashed #e0e0e0;
  min-height: 25px;
}



</style>
