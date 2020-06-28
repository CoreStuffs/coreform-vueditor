<template>
<div class=" moveHandle">
  <formControl :schema="schema" cssStyle="top:-1em">
    <draggable
      class="uk-grid"
      v-bind:class="{
        'uk-grid-divider uk-grid-collapse': schema.showSeparator,
        'uk-grid-medium': !schema.showSeparator,
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
        v-bind:class="[' uk-grid-collapse uk-width-' + col.width + '@m']"
      ></controlset>
    </draggable>
  </formControl>
</div>
</template>
<script>
import controlset from "@/components/.infra/controlset.vue";
import formControl from "@/components/.infra/formControl.vue";
import draggable from "vuedraggable";
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
    draggable,
    controlset,
    formControl,
  },
  methods: {
    getVariable: function (name) {
      return this.$parent.getVariable(name);
    },
    getComponentData() {
      return {
        attrs: {
          "uk-grid": "true",
          "class":"uk-width-1-1 uk-grid-collapse"
        },
      };
    },
  },
};
</script>
<style scoped>
.uk-grid {
  padding-left: 15px;
 
}

.uk-grid-column-medium > *,
.uk-grid-medium > *,
.uk-grid-collapse > * {
  padding-left: 15px;
  padding-right: 0px; 
}

.grid_edit {
  min-height: 35px;
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
  border-left: 1px solid #a0a0a0;
}

.uk-grid + .uk-grid, .uk-grid > .uk-grid-margin, * + .uk-grid-margin {
  margin-top:0px !important
}


.uk-first-column {
    padding-left: 0px !important;
    margin-left: 0px !important;
    padding-left: 0px !important;
}


</style>
