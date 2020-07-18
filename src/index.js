import buildersurface from "./buildersurface.vue";
import viewer from "./viewer.vue";

export default {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("coreform-builder", buildersurface);
    Vue.component("coreform-viewer", viewer);
  },
};
