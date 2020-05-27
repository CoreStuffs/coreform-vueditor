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

        <div class="form-check">
          <input
            id="disabled"
            type="checkbox"
            v-model="enabled"
            class="form-check-input"
          />
          <label class="form-check-label" for="disabled">DnD enabled</label>
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
  props: {
    schema: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      enabled: true,
      dragging: false
    };
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
    },
    getVariable: function(name) {
      return this.schema.variables[0].name + name ;
    }
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
