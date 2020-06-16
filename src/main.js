import Vue from "vue";
import App from "./app.vue";
import "./quasar";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: (h) => h(App),
  components: { App },
});
