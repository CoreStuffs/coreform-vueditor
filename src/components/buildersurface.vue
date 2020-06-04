<template>
  <div v-cloak class="uk-container uk-container-large">
    <ul uk-tab data-uk-tab="{connect:'#cf-formBuilder'}">
      <li class="uk-active"><a href="#">Properties</a></li>
      <li><a href="#">Form designer</a></li>
      <li><a href="#">Variables</a></li>
      <li><a href="#">Debug</a></li>
    </ul>
    <ul id="cf-formBuilder" class="uk-switcher uk-margin">
      <li>
        Properties
      </li>
      <li>
        <div uk-grid class="uk-grid-small">
          <div class="uk-width-expand@m">
            <div class="uk-form-stacked uk-card uk-card-default uk-card-body">
              <controlset :elements="schema.elements"> </controlset>
            </div>
          </div>
          <div class="uk-width-auto@m" style="min-width:200px">
            <draggable
              :list="formControlsList"
              :group="{
                name: 'cfShareGroupForDesignSurface',
                pull: 'clone',
                put: false
              }"
              :sort="false"
            >
              <div
                :key="ctrl.label"
                v-for="ctrl in formControlsList"
                :data="ctrl.id"
              >
                <div
                  style="margin-bottom:2px;background-color:#f0f0f0;padding:2px;cursor:default"
                >
                  <div>
                    <span
                      class="uk-margin-small-right uk-icon"
                      uk-icon="user"
                    ></span>
                    {{ ctrl.label }}
                  </div>
                </div>
              </div>
            </draggable>
          </div>
        </div>
      </li>
      <li>
        <variablesTable :variables="schema.variables"></variablesTable>
      </li>
      <li>
        <div uk-grid class="uk-grid-small">
          <div class="uk-width-1-2@m">
            Schema
            <div>
              <pre><code style="font-size:12px">{{ schema }}</code></pre>
            </div>
          </div>
          <div class="uk-width-1-2@m">
            Data
            <div>
              <pre><code style="font-size:12px">{{ data }}</code></pre>
            </div>
          </div>
        </div>
      </li>
    </ul>
<<<<<<< HEAD
    <variablemodal ref="editVariableModal"></variablemodal>
=======
<vk-button @click="showModal()">Open</vk-button>
<controlPropertiesModal ref="ctrlProps" :show="view.showControlPropertiesModal" />
>>>>>>> 9a65ec0a77e0c95034bf98a82f49edeb0d5a3e11

  </div>
</template>

<script>
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
UIkit.use(Icons);

import { validationMixin } from "vuelidate";

import {
  required,
  minLength,
  maxLength,
  number,
  email
} from "vuelidate/lib/validators";

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
    controlset: () => import("@/components/.infra/controlset"),
    variablesTable: () => import("@/components/variables.vue"),
<<<<<<< HEAD
    variablemodal: () => import("@/components/variablemodal.vue"),
=======
    controlPropertiesModal : () => import("@/components/controlPropertiesModal.vue"),
>>>>>>> 9a65ec0a77e0c95034bf98a82f49edeb0d5a3e11
    draggable: () => import("vuedraggable")
  },
  props: ["schema", "value", "formControls"],
  data: function() {
    return {
      data: this.value,
      controls: [],
      view:{
        showControlPropertiesModal:false
      }
    };
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
    },
    formControlsList: function() {
      var arr = new Array();
      for (let [key, value] of Object.entries(this.formControls)) {
        var obj = {};
        Object.assign(obj, value);
        obj.id = key;
        arr.push(obj);
      }
      return arr;
    }
  },
  created: function() {
    var arr = [];
    if (typeof this.formControls === "string") {
      var s = this.formControls;
      Object.assign(arr, eval(s));
    } else {
      arr = this.formControls;
    }
    var t = this;
    for (let [key, o] of Object.entries(arr)) {
      if (o.path.indexOf("/") < 0) o.path = "./controls/" + o.path;
      let obj = require(o.path + "/manifest.js");
      var el = {
        tag: obj.tag,
        id: key,
        control: () => import(o.path + "/control.vue"),
        properties: () => import(o.path + "/properties.vue")
      };
      t.controls.push(el);
    }
  },
  methods: {
<<<<<<< HEAD
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
    },
    openVariableSettings: function(variable, acceptedTypes, callback) {
      var vari;
      if (variable) {
        vari = variable;
      } else {
        vari = {
          name: "",
          validations: [{ type: "required" }]
        };
      }
      this.$refs.editVariableModal.show(vari, acceptedTypes, function(model) {
        Object.assign(vari, model);
        if (callback) callback(vari);
      });
=======
    showModal:function(){
      this.$refs.ctrlProps.showModal()
>>>>>>> 9a65ec0a77e0c95034bf98a82f49edeb0d5a3e11
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
      $form: t,
      $controls: t.controls
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
  min-height: 15px;
}

.required-tag {
  display: inline-block;
}

.required-tag:after {
  content: "required";
  color: #f0506e;
  position: relative;
  top: -0.5em;
  font-size: 70%;
}
</style>
