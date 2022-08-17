import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
      meta: {layout: 'AppLayoutGuess'}
    },
    {
      path: '/about',
      name: 'About',
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
  if (to.name !== 'Login' && !isAuthenticated) next({name: 'Login'})
  else next()
})

export default router
