import { createWebHistory, createRouter } from "vue-router";
import { Steps, Outcomes } from '@/pages';

const routes = [
    { path: '/', name: 'Home', component: Steps },
    { path: '/outcomes', name: 'Outcomes', component: Outcomes, exect: true },
    { path: '/*', redirect: { name: 'Home' } }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
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

export default router;
