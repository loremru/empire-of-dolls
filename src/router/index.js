import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cabinet from '../views/Cabinet'
import Cart from '../views/Cart'
import Search from '../views/Search'
import Categories from '@/views/Categories'
import Product from '@/views/Product'
import MyOrders from '@/views/Mobile/MyOrders'
import AccountData from '@/views/Mobile/AccountData'
import Bonuses from '@/views/Mobile/Bonuses'
import WishListMobile from '@/views/Mobile/WishListMobile'

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
    path: '/ordersMobile',
    name: 'MyOrders',
    component: MyOrders,
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
        {
          text: 'Мои заказы',
          pageLink: '/ordersMobile',
        },
      ],
    },
  },
  {
    path: '/accountDataMobile',
    name: 'AccountData',
    component: AccountData,
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
        {
          text: 'Личные данные',
          pageLink: '/accountDataMobile',
        },
      ],
    },
  },
  {
    path: '/bonuses',
    name: 'Bonuses',
    component: Bonuses,
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
        {
          text: 'Бонусы',
          pageLink: '/bonuses',
        },
      ],
    },
  },
  {
    path: '/wishlistMobile',
    name: 'WishListMobile',
    component: WishListMobile,
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
        {
          text: 'Список желаний',
          pageLink: '/wishlistMobile',
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
