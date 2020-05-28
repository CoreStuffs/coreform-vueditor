<template>
  <draggable
    class="uk-grid"
    v-bind:class="{
      'uk-grid-divider uk-grid-collapse': schema.showSeparator,
      'uk-grid-medium': !schema.showSeparator
    }"
    :list="schema.columns"
    :group="{ name: this.schema.id }"
    uk-grid
  >
    <controlset
      :elements="col.elements"
      v-for="col in schema.columns"
      :key="col.id"
      :class="'uk-width-' + col.width + '@m'"
    ></controlset>
  </draggable>
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
<style scoped>
.uk-grid-column-medium > *,
.uk-grid-medium > *,
.uk-grid-collapse > * {
  padding-left: 15px;
  padding-right: 15px;
}

.uk-grid-column-medium > *:last-child,
.uk-grid-medium > *:last-child,
.uk-grid-collapse > *:last-child {
  padding-right: 0px;
}

.uk-first-column {
  padding-left: 0px;
}

.uk-grid-divider,
.uk-grid-medium {
  margin-left: -15px;
}

.uk-grid-divider > :not(.uk-first-column)::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0px;
  border-left: 1px solid #e5e5e5;
}
</style>
