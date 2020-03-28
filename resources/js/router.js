import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'welcome',
        component: () => import('./views/Welcome.vue')
    },
    {
        path: '/categories',
        name: 'categories',
        component: () => import('./views/Categories.vue')
    }
];

const router = new Router({
    routes: routes,
    linkActiveClass: 'text-white'
});

export default router;