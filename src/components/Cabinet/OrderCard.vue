<template>
  <div class="order round-block" v-for="order in orders" :key="order.oid">
    <div
      class="order__head hover-block"
      @click="toggleCard"
      :style="isOpen && 'border-color: #d7c3cd;'"
    >
      <p class="txt order__id" title="Номер заказа">#{{ order.fake_oid }}</p>
      <p class="txt order__name text-dots" title="Наименование">
        {{ order.products[0].name }}
      </p>
      <p class="txt order__date" title="Дата заказа">{{ order.date }}</p>
      <p class="txt order__time" title="Время заказа">{{ order.time }}</p>
      <p class="txt order__price" title="К оплате">{{ order.total }} ₽</p>
      <div
        class="order__arrow"
        :style="isOpen && 'transform: rotateZ(180deg);'"
      >
        <img src="@/assets/images/arrow-down.svg" alt="" />
      </div>
    </div>
    <div class="order__body" :class="{ order__body_active: isOpen }">
      <div class="order__fullName">
        <span class="order__cell__name">Полное наименование товаров: </span>
        <p v-for="product in order.products" :key="product.alias">
          {{ product.name }}
        </p>
      </div>
      <div class="flex fxww jcsb aic">
        <div class="order__cell">
          <p class="order__cell__name">Кол-во</p>
          <p class="txt">
            <b>{{ order.products.length }}</b>
          </p>
        </div>
        <div class="order__cell">
          <p class="order__cell__name">Доставка</p>
          <p class="txt">
            <b>{{ order.ship_cost }}р</b>
          </p>
        </div>
        <div class="order__cell">
          <p class="order__cell__name">Скидка</p>
          <p class="txt">
            <b>{{ order.discount_sum }}р</b>
          </p>
        </div>
        <div class="order__cell">
          <p class="order__cell__name">К оплате</p>
          <p class="txt">
            <b>{{ order.total_pay }}р</b>
          </p>
        </div>
        <div class="order__cell">
          <p class="order__cell__name">
            {{ order.payment }}
          </p>
          <p class="txt">
            <b>{{ order.status }}</b>
          </p>
        </div>
        <!--      <div class="order__cell">-->
        <!--        <p class="txt"><b>ОТКАЗ</b></p>-->
        <!--        <p class="pink">Не оплачен</p>-->
        <!--      </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import { getUserOrders } from '@/hooks/main'
export default {
  name: 'OrderCard',
  data() {
    return {
      isOpen: false,
      orders: null,
    }
  },
  async mounted() {
    const response = await getUserOrders()
    this.orders = response.orders
  },
  methods: {
    toggleCard() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style scoped lang="scss">
.order {
  .txt {
    color: #000;
  }
  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid transparent;
    .txt {
      text-align: center;
      margin-right: 10px;
    }
  }
  &__arrow {
    transition: 0.2s;
    user-select: none;
  }
  &__name {
    max-width: 266px;
  }
  &__id {
    width: 75px;
  }
  &__date {
    width: 78px;
  }
  &__price {
    width: 90px;
  }
  &__body {
    height: 0;
    transition: 0.2s;
    overflow: hidden;
    padding: 0 31px 0 20px;
    &_active {
      min-height: 226px;
      padding: 20px 31px 20px 20px;
    }
  }

  &__cell {
    max-width: 116px;
    &__name {
      font-size: 14px;
      line-height: 1.29;
      color: $text-gray;
    }
    b {
      font-weight: 500;
    }
    > * {
      margin-bottom: 8px;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
  &__fullName {
    margin-bottom: 15px;
  }
}

@media (max-width: $media-tablet) {
  .order__name {
    max-width: 185px;
  }
}
</style>
