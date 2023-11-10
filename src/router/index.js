import {createRouter, createWebHistory} from 'vue-router';

export const routes = [
    // {
    //     path: '/',
    //     name: 'home',
    //     component: () => import('../views/HomeView.vue')
    // }
];
const addRoute = (fName) =>
    routes.push({path: `/f/${fName}`, name: fName, component: () => import(`../views/functions/${fName}.vue`)});

addRoute('ucfirst');
addRoute('ifNaN');
addRoute('getElementHeight');
addRoute('getFormData');
addRoute('padLeft');
addRoute('downloadFile');
addRoute('makeId');
addRoute('getClonedObject');
addRoute('stripTags');
addRoute('slugify');
addRoute('onlyUnique');
addRoute('splitStringWithoutBreakingWords');
// NEW ROUTES ABOVE THIS LINE (DO NOT REMOVE THIS COMMENT)

// sort routes alphabetically
routes.sort((a, b) => a.name.localeCompare(b.name));

// set first function as homepage
routes.push({path: '/', name: 'home', component: routes[0].component});

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
