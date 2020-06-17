<template>
  <div v-cloak class="cf uk-container uk-container-large">
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
              <controlset
                :elements="schema.elements"
                :editMode="true"
              ></controlset>
            </div>
          </div>
          <div class="uk-width-auto@m" style="min-width: 200px;">
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
    <controlPropertiesModal ref="controlPropertiesModal" />
    <button
      class="uk-button uk-button-default"
      @click="openControlProperties()"
    >
      Open
    </button>
  </div>
</template>

<script>
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
UIkit.use(Icons);
import { deepCopy } from "@/components/utils.js";
import "../assets/style.sass";
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
      if (c.isDataField) obj["variable"] = "";
      obj.type = type.id;
      obj.isNew = true;
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
      var type = this.staticData.variableTypes[obj.type];
      type.implicitValidations.forEach(valid => {
        obj.validations.push({ type: valid});
      });
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

