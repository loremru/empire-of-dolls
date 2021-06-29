import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cabinet from '../views/Cabinet'
import Cart from '../views/Cart'
import Search from '../views/Search'
import Categories from '@/views/Categories'
import Product from '@/views/Product'

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
      tableBreadCrumb: [
        {
          text: 'Главная',
          pageLink: '/',
        },
        {
          text: 'Личный кабинет',
          pageLink: '/cabinet',
        },
      ],
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
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
    meta: {
      layout: 'with-catalog',
      tableBreadCrumb: [
        {
          text: 'Главная',
          pageLink: '/',
        },
        {
          text: 'Барби',
          pageLink: '/categories',
        },
      ],
    },
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
    meta: {
      layout: 'with-catalog',
      tableBreadCrumb: [
        {
          text: 'Главная',
          pageLink: '/',
        },
        {
          text: 'Барби',
          pageLink: '/categories',
        },
        {
          text: 'Новинки Барби',
          pageLink: '/categories',
        },
        {
          text: 'Скиппер няня',
          pageLink: '/product/123',
        },
      ],
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
