import {createRouter, createWebHistory} from 'vue-router'
import {isNotExpiryJwt} from "@/helpers";
import {useUserStore} from "@/stores";

import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import AdminView from '@/views/AdminView.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginView,
            meta: {
                layout: 'AppLayoutGuess',
                requiresAuth: false
            }
        },
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                layout: 'AppLayoutDefault',
                requiresAuth: false
            }
        },
        {
            path: '/admin',
            name: 'admin',
            component: AdminView,
            meta: {
                layout: 'AppLayoutAdmin',
                requiresAuth: true
            }
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/views/AboutView.vue'),
            meta: {
                layout: 'AppLayoutAdmin',
                requiresAuth: true
            }
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            meta: {
                layout: 'AppLayoutGuess',
                requiresAuth: false
            },
            component: () => import('@/views/NotFound.vue')
        }
    ]
})

router.resolve({
    name: 'not-found',
    params: {pathMatch: ['not', 'found']},
})

router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    let token = localStorage.getItem('token');
    let isAuthenticated = userStore.isLogged && token && isNotExpiryJwt(token)
    if (to.name !== 'login' && to.meta?.requiresAuth && !isAuthenticated) next({name: 'login'})
    else next()
})

export default router
