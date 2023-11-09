import {createRouter, createWebHistory} from 'vue-router';
import functionsList from '@/utils/functionsList';

export const routes = [
    // {
    //     path: '/',
    //     name: 'home',
    //     component: () => import('../views/HomeView.vue')
    // }
];

functionsList.forEach((fName) =>
    routes.push({path: `/f/${fName}`, name: fName, component: () => import(`../views/functions/${fName}.vue`)})
);

// set first function as homepage
routes.push({path: '/', name: 'home', component: routes[0].component});

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
