
import Vue from 'vue';
import App from './app.vue';
import Router from './router';


Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App),
    components: { App },
    router: Router
});