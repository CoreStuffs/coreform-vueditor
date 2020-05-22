import Vue from 'vue';
import VueRouter from 'vue-router';
import PageA from './pages/pagea.vue';
import PageB from './pages/pageb.vue';
const routes = [
    { path: '/', component: PageA },
    { path: '/pagea', component: PageA },
    { path: '/pageb', component: PageB },
]
Vue.use(VueRouter);
const router = new VueRouter({ mode: 'history', routes: routes });
export default router;