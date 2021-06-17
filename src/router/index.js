import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cabinet from '../views/Cabinet'

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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
