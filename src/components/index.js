import Vue from "vue";
import buildersurface from "./buildersurface.vue";
import viewer from "./viewer.vue";
const Components = {
  builder: buildersurface,
  viewer,
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
