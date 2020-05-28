<template>
  <div v-cloak>
    <button class="btn btn-secondary" @click="add">Add</button>
    <button class="btn btn-secondary" @click="replace">Replace</button>
    <div class="uk-form-stacked">
      <controlset :elements="schema.elements"> </controlset>
    </div>
  </div>
</template>

<script>
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
UIkit.use(Icons);
import controlset from "@/components/.infra/controlset";
let id = 100;
export default {
  name: "simple",
  display: "Simple",
  order: 0,
  components: {
    controlset
  },
  props: ["schema", "value"],
  data: function() {
    return {};
  },
  computed: {
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    }
  },
  methods: {
    add: function() {
      this.schema.elements.push({
        id: "ctrl_" + id++,
        type: "textField",
        label: "Test"
      });
    },
    replace: function() {
      this.list = [{ name: "Edgard", id: id++ }];
    },
    checkMove: function(e) {
      window.console.log("Future index: " + e.draggedContext.futureIndex);
    }
  },
  provide: function() {
    var t = this;
    return {
      formData: t.value,
      getVariable: function(name) {
        return t.schema.variables.filter(
          p => p && p.name && p.name.toUpperCase() === name.toUpperCase()
        )[0];
      }
    };
  }
};
</script>
<style scoped>
  .uk-form-stacked .uk-form-label {
    margin-bottom: 2px;
  }
  .uk-form-horizontal .uk-form-controls {
    padding-top: 7px;
  }
</style>
