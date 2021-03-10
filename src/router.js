import Vue from 'vue';
import VueRouter from 'vue-router';
import { Steps, Outcomes } from '@/pages';

Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'Home', component: Steps },
    { path: '/outcomes', name: 'Outcomes', component: Outcomes, exect: true },
    { path: '/*', redirect: { name: 'Home' } }
];
  
export const router = new VueRouter({
    routes,
    mode: 'history'
});

router.beforeEach((to, _, next) => {
    const _paq = window._paq = window._paq || [];

    _paq.push(['setCustomUrl', '/' + to.path]);
    _paq.push(['setDocumentTitle', to.name]);
    _paq.push(['trackPageView']);

    next();
});

router.afterEach(() => {
    const _paq = window._paq = window._paq || [];

    _paq.push(['enableLinkTracking']);
});
