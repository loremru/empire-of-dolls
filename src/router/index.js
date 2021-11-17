import { createRouter, createWebHistory } from 'vue-router'
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
import WishList from '@/views/WishList'
import Delivery from '@/views/Delivery'
import Contacts from '@/views/Contacts'
import About from '@/views/About'
import Wholesale from '@/views/Wholesale'
import Help from '@/views/Help'

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
    },
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
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
  {
    path: '/wishlist',
    name: 'WishList',
    component: WishList,
    meta: {
      layout: 'with-catalog',
      tableBreadCrumb: [
        {
          text: 'Главная',
          pageLink: '/',
        },
        {
          text: 'Избранные товары',
          pageLink: '/wishList',
        },
      ],
    },
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: Delivery,
    meta: {
      layout: 'with-catalog',
      tableBreadCrumb: [
        {
          text: 'Главная',
          pageLink: '/',
        },
        {
          text: 'Доставка и оплата',
          pageLink: '/delivery',
        },
      ],
    },
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
    meta: {
      layout: 'with-catalog',
      tableBreadCrumb: [
        {
          text: 'Главная',
          pageLink: '/',
        },
        {
          text: 'Контакты Империи кукол',
          pageLink: '/contacts',
        },
      ],
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      layout: 'with-catalog',
      tableBreadCrumb: [
        {
          text: 'Главная',
          pageLink: '/',
        },
        {
          text: 'О нас',
          pageLink: '/about',
        },
      ],
    },
  },
  {
    path: '/wholesale',
    name: 'Wholesale',
    component: Wholesale,
    meta: {
      layout: 'with-catalog',
      tableBreadCrumb: [
        {
          text: 'Главная',
          pageLink: '/',
        },
        {
          text: 'Оптовые продажи',
          pageLink: '/wholesale',
        },
      ],
    },
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: Help,
    meta: {
      layout: 'with-catalog',
      tableBreadCrumb: [
        {
          text: 'Главная',
          pageLink: '/',
        },
        {
          text: 'Отзывы покупателей',
          pageLink: '/reviews',
        },
      ],
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
