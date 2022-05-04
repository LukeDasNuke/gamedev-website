import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../pages/Home.vue'),
    },
    {
        path: '/the-test',
        name: 'the-test',
        component: () => import(/* webpackChunkName: "the-test" */ '../pages/TheTest.vue'),
    },
    {
        path: "/:catchAll(.*)",
        name: "404",
        component: () => import(/* webpackChunkName: "404" */ '../pages/NotFound.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;