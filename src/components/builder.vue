<template>
  <div class="row">
    <div class="col-2">
      <div class="form-group">
        <div
          class="btn-group-vertical buttons"
          role="group"
          aria-label="Basic example"
        >
          <button class="btn btn-secondary" @click="add">Add</button>
          <button class="btn btn-secondary" @click="replace">Replace</button>
        </div>
      </div>
    </div>

    <div class="col-6">
      <h3>Draggable {{ draggingInfo }}</h3>
      <controlset :elements="schema.elements"> </controlset>
    </div>
  </div>
</template>

<script>
import controlset from "@/components/.infra/controlset";
let id = 100;
export default {
  name: "simple",
  display: "Simple",
  order: 0,
  components: {
    controlset
  },
  props: [
    'schema',
    'value']
  ,
  data:function(){
    return {};
  },
  computed: {
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    }
  },
  methods: {
    add: function() {
      this.schema.elements.push({id: "ctrl_" + id++, type:'textField', label:'Test' });
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
        formData:t.value,
        getVariable: function(name) {
          return t.schema.variables.filter(p => p && p.name && p.name.toUpperCase() === name.toUpperCase())[0];
        }
    };
  }
};
</script>
<style scoped>
.buttons {
  margin-top: 35px;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
