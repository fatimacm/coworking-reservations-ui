import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Spaces from '../views/Spaces.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/spaces',
    name: 'Spaces',
    component: Spaces,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  meta: { requiresAuth: true }
})

export default router