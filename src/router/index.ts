import { createRouter, createWebHistory } from 'vue-router'
import TarotView from '../views/TarotView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TarotView
    }
  ]
})

export default router
