import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Man from '../views/Man.vue'
import Woman from '../views/Woman.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/man',
    name: 'Man',
    component: Man
  },
  {
    path: '/woman',
    name: 'Woman',
    component: Woman
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
