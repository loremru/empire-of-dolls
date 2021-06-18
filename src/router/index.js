import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cabinet from '../views/Cabinet'
import Cart from '../views/Cart'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'with-catalog',
    },
  },
  {
    path: '/cabinet',
    name: 'Cabinet',
    component: Cabinet,
    meta: {
      layout: 'with-catalog',
    },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: {
      layout: 'with-catalog',
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
