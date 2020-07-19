import Vue from "vue";
import form-editor from "./form-editor.vue";

const Components = {
    form-editor
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;