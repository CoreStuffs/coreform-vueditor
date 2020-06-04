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
    <variablePropertiesModal
      ref="variablePropertiesModal"
      :variableTypes="staticData.variableTypes"
    />
    <vk-button @click="openControlProperties()">Open</vk-button>
    <controlPropertiesModal
      ref="controlPropertiesModal"
      :show="view.showControlPropertiesModal"
    />
  </div>
</template>

<script>
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
UIkit.use(Icons);

import { validationMixin } from "vuelidate";

export default {
  mixins: [validationMixin],
  name: "simple",
  display: "Simple",
  order: 0,
  components: {
    controlset: () => import("@/components/.infra/controlset"),
    variablesTable: () => import("@/components/variablesTable.vue"),
    variablePropertiesModal: () =>
      import("@/components/variablePropertiesModal.vue"),
    controlPropertiesModal: () =>
      import("@/components/controlPropertiesModal.vue"),
    draggable: () => import("vuedraggable")
  },
  props: ["schema", "value", "formControls"],
  data: function() {
    return {
      data: this.value,
      controls: [],
      staticData: require("@/components/staticData.js").default,
      view: {
        showControlPropertiesModal: false,
        showVariablePropertiesModal: false
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
        rv["v" + i] = this.staticData.formValidators[v.type].build(v);
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
        acceptedVariableTypes: obj.acceptedVariableTypes,
        isDataField : obj.isDataField,
        id: key,
        control: require(o.path + "/control.vue"),
        properties: require(o.path + "/properties.vue")
      };
      t.controls.push(el);
    }
  },
  methods: {
    openControlProperties: function(control, callback) {
      this.$refs.controlPropertiesModal.showModal(control, function(model) {
        Object.assign(control, model);
        if (callback) callback(control);
      });
    },
    getVariableByName: function(name) {
      var arr = this.schema.variables.filter(
        p => name && p && p.name && p.name.toUpperCase() === name.toUpperCase()
      );
      if (arr.length === 1) return arr[0];
      return undefined;
    },
    getVariablesByType: function(type) {
      var arr = this.schema.variables.filter(
        p => type && p && p.type && p.type.toUpperCase() === type.toUpperCase()
      );
      return arr;
    },    
    saveVariable: function(obj, srcName) {
      var variable = this.getVariableByName(srcName ?? obj.name);
      if (variable) {
        var t = this;
        Object.assign(variable, obj);
        this.executeNodesModification(function(node) {
          if (
            node.variable &&
            node.variable.toLowerCase() === srcName.toLowerCase()
          ) {
            node.variable = obj.name;
          }
        });
      } else {
        t.schema.variables.push(obj);
      }
    },
    executeNodesModification: function(modification) {
      var schema = this.schema;
      var __s = function(node, modification) {
        var subColl = null;
        if (node.columns) subColl = node.columns;
        if (node.elements) subColl = node.elements;
        modification(node);
        if (subColl !== null) {
          for (var i = 0; i < subColl.length; i++) {
            var res = __s(subColl[i], modification);
            if (res !== null) return res;
          }
        }
        return null;
      };
      __s(schema, modification);
    },
    findNodeByQuery: function(query) {
      var schema = this.schema;
      var __s = function(node, query) {
        var subColl = null;
        if (node.columns) subColl = node.columns;
        if (node.elements) subColl = node.elements;
        if (query(node)) {
          return node;
        } else {
          if (subColl !== null) {
            for (var i = 0; i < subColl.length; i++) {
              var res = __s(subColl[i], query);
              if (res !== null) return res;
            }
          }
        }
        return null;
      };
      return __s(schema, query);
    }
  },
  provide: function() {
    var t = this;
    return {
      $formData: t.value,
      $variableTypes: t.staticData.variableTypes,
      $controls: t.controls,
      $getVariableByName: t.getVariableByName,
      $saveVariable: t.saveVariable,
      $getControlValidator: function(name) {
        return t.$v.data[name];
      },
      $getVariablesByType:t.getVariablesByType,
      $getControlByTag: function(tag) {
        return t.controls.filter(o => o.tag === tag)[0];
      },
      $openControlSettingsById: function(id) {
        var obj = t.findNodeByQuery(o => {
          return o.id && o.id === id;
        });
        t.openControlProperties(obj);
      },
      $openVariableProperties: function(variable, acceptedTypes, callback) {
        var vari;
        if (variable) {
          vari = variable;
        } else {
          vari = {
            name: "",
            validations: [{ type: "required" }]
          };
        }
        t.$refs.variablePropertiesModal.showModal(vari, acceptedTypes, function(
          model
        ) {
          Object.assign(vari, model);
          if (callback) callback(vari);
        });
      }
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
