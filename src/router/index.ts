import HomePage from '@/pages/HomePage'
import { createRouter, createWebHashHistory as createWebHistory } from 'vue-router'
// import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../pages/ProjectPage'),
    },
  ],
})

export default router
