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
      :isActive="idx === activeDelivery"
      @check="() => (activeDelivery = idx)"
    />
    <div class="cart-cost">
      <div class="cart-cost__delivery">
        <p class="cart-cost__description">
          Стоимость доставки:
          <span class="cart-cost__value">{{ DeliveryCost }}</span>
        </p>
        <p class="cart-cost__description">
          Итого к оплате: <span class="cart-cost__value">{{ TotalCost }}</span>
        </p>
      </div>
      <div class="cart-cost__promo">
        <p class="cart-cost__description">
          Стоимость заказа: <span class="cart-cost__value">{{ CartCost }}</span>
        </p>
        <div class="cart-cost__promo__promo-input">
          <span class="cart-cost__description">Промокод:</span>
          <div class="input-border"><BasicInput :height="25" /></div>
          <BasicButton :height="25"
            ><img src="@/assets/images/arrow-white-down.svg" alt=""
          /></BasicButton>
        </div>
        <p class="cart-cost__description">
          Итого стоимость заказа:
          <span class="cart-cost__value">{{ CartWithPromoCost }}</span>
        </p>
      </div>
    </div>
  </div>
  <div class="social-promo">
    <div class="social-promo__header">
      <p>Поделитесь выбором с друзьями и получите скидку 50 р!</p>
      <img src="@/assets/images/arrow-white.svg" alt="" />
    </div>
    <div class="social-promo__links">
      <a href="#"><img src="@/assets/images/vk.svg" alt="" /></a>
      <a href="#"><img src="@/assets/images/fb.svg" alt="" /></a>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '../components/BaseComponents/Breadcrumb'
import CartItem from '@/components/Cart/CartItem'
import Radio from '@/components/BaseComponents/Radio'
import BasicInput from '@/components/BaseComponents/BasicInput'
import BasicButton from '@/components/BaseComponents/BasicButton'

export default {
  name: 'Cart',
  components: { BasicButton, BasicInput, Radio, CartItem, Breadcrumb },
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
      activeDelivery: 0,
      CartCost: 0,
      DeliveryCost: 0,
      CartWithPromoCost: 0,
      TotalCost: 0,
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
  padding: 34px;
  border-radius: 7px;
}
.cart-cost {
  display: flex;
  margin-top: 20px;
  &__delivery {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    > * {
      margin: 7px 0;
    }
  }
  &__promo {
    width: 50%;
    > * {
      margin: 7px 0;
    }
    &__promo-input {
      align-items: center;
      .input-border {
        width: 205px;
        display: inline-block;
        margin-left: 10px;
      }
      button {
        padding: 0;
        width: 25px;
        img {
          width: 10px;
        }
      }
    }
  }
  &__description {
    font-size: 18px;
    color: $grey;
  }
  &__value {
    font-size: 18px;
    color: #000;
    font-weight: 600;
  }
}
.social-promo {
  display: flex;
  &__header {
    background: $pink;
    width: 75%;
    height: 84px;
    position: relative;
    display: flex;
    align-items: center;
    p {
      width: 100%;
      text-align: center;
      color: #fff;
      font-size: 22px;
    }
    &::after {
      content: '';
      display: block;
      height: 50%;
      background: $pink;
      width: 44px;
      position: absolute;
      right: -22px;
      top: 0;
      transform: skewX(46deg);
    }
    &::before {
      content: '';
      display: block;
      height: 50%;
      background: $pink;
      width: 44px;
      position: absolute;
      right: -22px;
      bottom: 0;
      transform: skewX(314deg);
    }
  }
  &__links {
    background: $body;
    width: 25%;
    padding-left: 43px;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      margin: 0 7px;
    }
  }
}
</style>
