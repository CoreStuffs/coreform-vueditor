import designer from "./components/designer.vue";

export default {
  install: function (Vue) {
    Vue.component("designer", designer);
  },
};

export { designer };
