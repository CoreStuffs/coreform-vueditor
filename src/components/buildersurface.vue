<template>
  <div v-cloak class="cf q-pa-md q-page">
    <div class="q-gutter-y-md doc-page">
      <q-card>
        <q-card-section>
          <div class="text-h6">CoreForm Editor</div>
          <div class="text-subtitle2">by Jeff G.</div>
        </q-card-section>        
        <q-tabs
          dense
          v-model="tab"
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="tabFormDesigner" label="Form designer" />
          <q-tab name="tabVariables" label="Variables" />
          <q-tab name="tabDebug" label="Debug" />
        </q-tabs>
        <q-separator />
        <q-tab-panels v-model="tab" animated
          swipeable
          horizontal
          transition-prev="jump-up"
          transition-next="jump-up">
          <q-tab-panel name="tabFormDesigner">
            <div class="row">
              <div class="col-12 col-md-10">
                <q-form class="q-gutter-md">
                  <controlset
                    :elements="schema.elements"
                    :editMode="true"
                  ></controlset>
                </q-form>
              </div>
              <div class="col-12 col-md-2">
                <draggable
                  :list="formControlsList"
                  :group="{
                    name: 'cfShareGroupForDesignSurface',
                    pull: 'clone',
                    put: false,
                  }"
                  :fallbackOnBody="true"
                  :clone="createEmptyControl"
                  :sort="false"
                >
                  <div
                    :key="ctrl.id"
                    v-for="ctrl in formControlsList"
                    :data="ctrl.id"
                  >
                    <div
                      style="
                        margin-bottom: 2px;
                        background-color: #f0f0f0;
                        padding: 2px;
                        cursor: default;
                      "
                    >
                      <div>
                        <span
                          class="uk-margin-small-right uk-icon"
                          uk-icon="user"
                        ></span>
                        {{ ctrl.label.default }}
                      </div>
                    </div>
                  </div>
                </draggable>
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="tabVariables">
            <variablesTable :variables="schema.variables"></variablesTable>
          </q-tab-panel>
          <q-tab-panel name="tabDebug">
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
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
      <variablePropertiesModal
        ref="variablePropertiesModal"
        :variableTypes="staticData.variableTypes"
      />
      <controlPropertiesModal ref="controlPropertiesModal" />
      <q-btn @click="openControlProperties()">
        Open
      </q-btn>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import "quasar/dist/quasar.ie.polyfills";
import { Quasar } from "quasar";
Vue.use(Quasar);

import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import "@quasar/extras/material-icons-round/material-icons-round.css";
import "@quasar/extras/material-icons-sharp/material-icons-sharp.css";
// import "@quasar/extras/fontawesome-v5/fontawesome-v5.css";
// import "@quasar/extras/ionicons-v4/ionicons-v4.css";

import { deepCopy } from "@/components/utils.js";

import { validationMixin } from "vuelidate";
var globalId = 1;
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
    draggable: () => import("vuedraggable"),
  },
  props: ["value", "formControls", "externalDataAdapter"],
  data: function () {
    return {
      tab: "tabFormDesigner",
      data: {},
      controls: {},
      schema: { elements: [], variables: [] },
      dataSources: [],
      staticData: require("@/components/staticData.js").default,
      maxId: 0,
    };
  },
  watch: {
    schema: {
      deep: true,
      handler(val) {
        this.$emit("input", val);
      },
    },
  },
  validations: function () {
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
    formControlsList: function () {
      var arr = new Array();
      for (let [key, value] of Object.entries(this.formControls)) {
        var obj = deepCopy(value);
        obj.id = key;
        arr.push(obj);
      }
      return arr;
    },
  },
  created: function () {
    Object.assign(this.schema, this.value);
    this.executeNodesOperation((o) => {
      var id = this.getNextId();
      o.id = function () {
        return id;
      };
      globalId++;
    });

    var t = this;
    this.getExternalDataSources(function (data) {
      Object.assign(t.dataSources, data);
    });

    var arr = [];
    if (typeof this.formControls === "string") {
      var s = this.formControls;
      arr = deepCopy(eval(s));
    } else {
      arr = this.formControls;
    }

    for (let [key, o] of Object.entries(arr)) {
      if (o.path.indexOf("/") < 0) o.path = "./controls/" + o.path;
      let obj = require(o.path + "/manifest.js");
      var el = {
        tag: key,
        label: obj.label ?? {},
        defaultSchema: obj.defaultSchema ?? {},
        acceptedVariableTypes: obj.acceptedVariableTypes,
        isDataField: obj.isDataField,
        control: require(o.path + "/control.vue"),
        properties: require(o.path + "/properties.vue"),
      };
      if (o.label) el.label = deepCopy(o.label);
      if (o.defaultSchema) el.defaultSchema = deepCopy(o.defaultSchema);
      t.controls[key] = el;
    }
  },
  methods: {
    getExternalDataItem: function (sourceid, itemid, onSuccess, query) {
      if (this.externalDataAdapter && this.externalDataAdapter.getDataItem)
        this.externalDataAdapter.getDataItem(itemid, onSuccess, query);
    },
    getExternalData: function (id, onSuccess, query) {
      if (this.externalDataAdapter && this.externalDataAdapter.getData)
        this.externalDataAdapter.getData(id, onSuccess, query);
    },
    getExternalDataSources: function (onSuccess) {
      if (this.externalDataAdapter && this.externalDataAdapter.getDataSources)
        this.externalDataAdapter.getDataSources(onSuccess);
    },
    getNextId: function () {
      globalId++;
      return globalId;
    },
    createEmptyControl: function (type) {
      var c = this.controls[type.id];
      var obj = deepCopy(c.defaultSchema);
      var id = this.getNextId();
      obj.id = function () {
        return id;
      };
      globalId++;
      if (c.isDataField) obj["variable"] = "";
      obj.type = type.id;
      return obj;
    },
    openControlProperties: function (control, callback) {
      //this.$refs.controlPropertiesModal.showModal(control, function(model) {
      this.$refs.controlPropertiesModal.showModal(control, function (model) {
        control = deepCopy(model);
        if (callback) callback(control);
      });
    },
    getVariableByName: function (name) {
      var arr = this.schema.variables.filter(
        (p) =>
          name && p && p.name && p.name.toUpperCase() === name.toUpperCase()
      );
      if (arr.length === 1) return arr[0];
      return undefined;
    },
    getVariablesByType: function (type) {
      var arr = this.schema.variables.filter(
        (p) =>
          type && p && p.type && p.type.toUpperCase() === type.toUpperCase()
      );
      return arr;
    },
    saveVariable: function (obj, srcName) {
      var t = this;
      var variable = this.getVariableByName(srcName ?? obj.name);
      if (variable) {
        Object.assign(variable, obj);
        this.executeNodesOperation(function (node) {
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
    executeNodesOperation: function (modification) {
      var schema = this.schema;
      var __s = function (node, modification) {
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
    findNodeByQuery: function (query) {
      var schema = this.schema;
      var __s = function (node, query) {
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
    },
  },
  provide: function () {
    var t = this;
    return {
      $formData: t.data,
      $getNextId: t.getNextId,
      $variableTypes: t.staticData.variableTypes,
      $controls: t.controls,
      $getVariableByName: t.getVariableByName,
      $saveVariable: t.saveVariable,
      $externalDataSources: t.dataSources,
      $getControlLabel: function (name, lang) {
        var cs = t.controls[name];
        if (cs) {
          var l = lang;
          if (!l) l = "default";
          if (!cs.label[l]) {
            return name;
          } else {
            return cs.label[l];
          }
        }
      },
      $getControlValidator: function (name) {
        return t.$v.data[name];
      },
      $getVariablesByType: t.getVariablesByType,
      $getControlByTag: function (tag) {
        return t.controls[tag];
      },
      $openControlSettingsById: function (id, callback) {
        var obj = t.findNodeByQuery((o) => {
          return o.id && o.id() === id;
        });
        t.openControlProperties(obj, callback);
      },
      $openControlSettingsByObject: function (obj, callback) {
        t.openControlProperties(obj, callback);
      },
      $createControl: function (type, collection, index) {
        t.createControl(type, collection, index);
      },
      $openVariableProperties: function (variable, acceptedTypes, callback) {
        var vari;
        if (variable) {
          vari = variable;
        } else {
          vari = {
            name: "",
            validations: [{ type: "required" }],
          };
        }
        t.$refs.variablePropertiesModal.showModal(
          vari,
          acceptedTypes,
          function (model) {
            vari = deepCopy(model);
            if (callback) callback(vari);
          }
        );
      },
      $getExternalDataItem: this.getExternalDataItem,
      $getExternalData: this.getExternalData,
    };
  },
};
</script>

<style>

:root {
  --q-color-primary: #1976d2;
  --q-color-secondary: #26a69a;
  --q-color-accent: #9c27b0;
  --q-color-positive: #21ba45;
  --q-color-negative: #c10015;
  --q-color-info: #31ccec;
  --q-color-warning: #f2c037;
  --q-color-dark: #1d1d1d;
}

.cf {
  font-family: Roboto, -apple-system, Helvetica Neue, Helvetica, Arial,
    sans-serif;
}

.q-panel > div {
width:initial !important;
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
<style lang="sass">
@import "../styles/quasar.sass"
</style>
