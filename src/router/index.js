import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cabinet from '../views/Cabinet'
import Cart from '../views/Cart'
import Search from '../views/Search'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'with-catalog',
      isCatalog: true,
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
  {
    path: '/search/:id',
    name: 'Search',
    component: Search,
    meta: {
      layout: 'search',
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
