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

import { validationMixin } from 'vuelidate';

import {
  required,
  minLength,
  maxLength,
  number,
  email
} from "vuelidate/lib/validators";

import controlset from "@/components/.infra/controlset";
let id = 100;

var formValidators = {
  required: {
    build: function() {
      return required;
    }
  },
  minLength: {
    build: function(data) {
      return minLength(data.minLength);
    }
  },
  maxLength: {
    build: function(data) {
      return maxLength(data.maxLength);
    }
  },
  number: {
    build: function() {
      return number;
    }
  },
  email: {
    build: function() {
      return email;
    }
  }
};

export default {
  mixins: [validationMixin],
  name: "simple",
  display: "Simple",
  order: 0,
  components: {
    controlset
  },
  props: ["schema", "value"],
  data: function() {
    return { data: this.value };
  },
   validations: function() {
    var obj = { data: {} };

    for (const varid in this.schema.variables) {
      var variable = this.schema.variables[varid];
      obj.data[variable.name] = {};
      var rv = obj.data[variable.name];
      var i = 0;
      for (const valid in variable.validations) {
        var v = variable.validations[valid];
        rv["v" + i] = formValidators[v.type].build(v);
        i++;
      }
    }
    return obj;
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
      },
      getValidator: function(name) {
        return t.$v.data[name];
      },      
      $form: t
    };
  }
};
</script>
<style>
.uk-form-stacked .uk-form-label {
  margin-bottom: 2px;
}
.uk-form-horizontal .uk-form-controls {
  padding-top: 7px;
}
.error-message {
    color: #f0506e;
    font-size: 8pt;
    min-height: 15px
}

.required-tag {
    display: inline-block;
}

    .required-tag:after {
        content: 'required';
        color: #f0506e;
        position: relative;
        top: -0.5em;
        font-size: 70%;
    }

</style>
