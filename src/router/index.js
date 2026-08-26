import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Spaces from '../views/Spaces.vue'
import MyReservations from '../views/MyReservations.vue'

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
  {
    path: '/my-reservations',
    name: 'MyReservations',
    component: MyReservations,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  meta: { requiresAuth: true }
})

export default router