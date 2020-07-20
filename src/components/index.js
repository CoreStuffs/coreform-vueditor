import Vue from "vue";
import buildersurface from "./buildersurface.vue";

const Components = {
    buildersurface
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;