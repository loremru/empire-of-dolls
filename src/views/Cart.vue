<template>
  <Breadcrumb :links-list="LinksForBreadcrumb" />
  <CartItem
    v-for="i in CartItems"
    :key="i"
    :CartItem="i"
    @deleteCardItem="deleteCardItem"
  />
  <div class="delivery-block">
    <p>Выберите вариант доставки</p>
    <Radio
      v-for="(el, idx) in RadioArray"
      :RadioItem="el"
      :key="el.key"
      :isActive="idx === activeIndex"
      @check="() => (activeIndex = idx)"
    />
    {{ activeIndex }}
  </div>
</template>

<script>
import Breadcrumb from '../components/BaseComponents/Breadcrumb'
import CartItem from '@/components/Cart/CartItem'
import Radio from '@/components/BaseComponents/Radio'

export default {
  name: 'Cart',
  components: { Radio, CartItem, Breadcrumb },
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
      CartItems: [
        {
          photoURL: '',
          dollMaker: 'Компания1',
          article: 'Артикул1',
          rating: 4,
          price: 6000,
          sale: 1000,
        },
        {
          photoURL: '',
          dollMaker: 'Компания2',
          article: 'Артикул2',
          rating: 3,
          price: 8000,
          sale: 2000,
        },
      ],
      RadioArray: [
        {
          label: 'Курьерская доставка по Перми',
          value: 'courierPerm',
        },
        {
          label: 'Доставка через Почту России (в среднем 4-10 дней)',
          value: 'russianPost',
        },
        {
          label:
            'Доставка через службу экспресс-доставки EMS (в среднем 3-7 дней)',
          value: 'ems',
        },
        {
          label: 'Доставка в другой город',
          value: 'ems',
        },
      ],
      activeIndex: 0,
    }
  },
  methods: {
    deleteCardItem(i) {
      const qwe = this.CartItems.findIndex((el) => el == i)
      this.CartItems.splice(qwe, 1)
    },
  },
}
</script>

<style scoped lang="scss">
.delivery-block {
  background: #fff;
}
</style>
