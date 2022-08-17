import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import AdminView from '@/views/AdminView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      meta: {layout: 'AppLayoutAdmin'}
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {layout: 'AppLayoutGuess'}
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue'),
      meta: {layout: 'AppLayoutAdmin'}
    }
  ]
})

router.beforeEach((to, from, next) => {
  let isAuthenticated = !!localStorage.getItem('token');
  if (to.name !== 'login' && (<string>to.name).includes('admin') && !isAuthenticated) next({name: 'login'})
  else next()
})

export default router
