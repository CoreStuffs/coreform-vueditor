<template>
  <formControl :schema="schema">
    <draggable
      class="uk-grid"
      v-bind:class="{
        'uk-grid-divider uk-grid-collapse': schema.showSeparator,
        'uk-grid-medium': !schema.showSeparator,
        grid_edit: editMode
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
        v-bind:class="['uk-width-' + col.width + '@m']"
      ></controlset>
    </draggable>
  </formControl>
</template>
<script>
export default {
  name: "Grid",
  data: function() {
    return {};
  },
  props: {
    editMode: {
      type: Boolean,
      default: false
    },
    schema: {
      type: Object,
      required: true
    }
  },
  created: function() {},
  components: {
    draggable: () => import("vuedraggable"),
    controlset: () => import("@/components/.infra/controlset"),
    formControl: () => import("@/components/.infra/formControl")
  },
  methods: {
    getVariable: function(name) {
      return this.$parent.getVariable(name);
    },
    getComponentData() {
      return {
        attrs: {
          "uk-grid": "true"
        }
      };
    }
  }
};
</script>
<style scoped>
.uk-grid {
  padding-top: 20px;
  padding-bottom: 15px;
  padding-left: 15px;
}
.uk-grid-column-medium > *,
.uk-grid-medium > *,
.uk-grid-collapse > * {
  padding-left: 15px;
  padding-right: 15px;
}

.grid_edit {
  min-height: 25px;
}

.grid_edit > div {
  border: 1px dashed #e0e0e0;
  min-height: 25px;
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
