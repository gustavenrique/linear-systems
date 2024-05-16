import { createRouter, createWebHistory } from 'vue-router'
import SystemTwo from '../views/SystemTwo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',  
      alias: ['/2x2'],
      name: 'home',
      component: SystemTwo
    },
    {
      path: '/3x3',
      name: '3x3',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SystemThree.vue')
    }
  ]
})

export default router
