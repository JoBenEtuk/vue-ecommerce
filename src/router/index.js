import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Male from '../views/Male.vue'
import Female from '../views/Female.vue'
import General from '../views/General.vue'
import Cart from '../views/Cart.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/male',
    name: 'Male',
    component: Male
  },
  {
    path: '/general',
    name: 'General',
    component: General
  },
  {
    path: '/female',
    name: 'Female',
    component: Female
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
