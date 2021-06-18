<template>
  <Breadcrumb :links-list="LinksForBreadcrumb" />
  <CartItem />
  <CartItem />
  <CartItem />
</template>

<script>
import Breadcrumb from '../components/BaseComponents/Breadcrumb'
import CartItem from '@/components/Cart/CartItem'
export default {
  name: 'Cart',
  components: { CartItem, Breadcrumb },
  data() {
    return {
      LinksForBreadcrumb: [
        {
          text: 'Главная',
          pageLink: '/',
        },
        {
          text: 'Личный кабинет',
          pageLink: '/cabinet',
        },
        {
          text: 'Корзина',
          pageLink: '/cart',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
