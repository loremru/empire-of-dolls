<template>
  <div class="product-info round-block">
    <div class="product-info__desc">
      <div class="product-info__price">
        <p class="product-info__price__current">11 659 р</p>
        <p class="product-info__price__old">15 999 р</p>
      </div>
      <div class="product-info__desc__content">
        <p class="product-info__text">Производитель:</p>
        <p class="product-info__text">Paola Reina</p>
        <p class="product-info__text">Артикул: 15029pr</p>
        <p class="product-info__text">Рейтинг: 4.4/35</p>
        <Rating :mark="4.5" />
      </div>
      <BasicButton :height="isDesktop ? 49 : 37" uppercase
        >КУПИТЬ в 1 клик</BasicButton
      >
    </div>
    <div class="product-info__delivery">
      <div class="product-info__cities">
        <div class="product-info__delivery__line">
          <p class="product-info__city">Пермь</p>
          <p class="product-info__time">доставка от 2 дней</p>
        </div>
        <div class="product-info__delivery__line">
          <p class="product-info__city">Москва</p>
          <p class="product-info__time">доставка от 2 дней</p>
        </div>
        <div class="product-info__delivery__line">
          <p class="product-info__city">Санкт-Петербург</p>
          <p class="product-info__time">доставка от 2 дней</p>
        </div>
        <div class="product-info__delivery__line">
          <p class="product-info__city">Екатеринбург</p>
          <p class="product-info__time">доставка от 2 дней</p>
        </div>
      </div>
      <div class="product-info__delivery__actions">
        <div class="product-info__amount">
          <BasicInput
            v-model:value="amount"
            :value="amount"
            :height="25"
            :font-size="15"
            padding="0"
            align="center"
            :max="2"
          />
          <p class="txt">шт</p>
        </div>
        <BasicButton :height="isDesktop ? 49 : 37" uppercase
          >Купить</BasicButton
        >
      </div>
    </div>
  </div>
</template>

<script>
import Rating from '@/components/BaseComponents/Rating'
import BasicButton from '@/components/BaseComponents/BasicButton'
import BasicInput from '@/components/BaseComponents/BasicInput'
import { isDesktop } from '@/store/display'

export default {
  name: 'ProductInfo',
  components: { BasicInput, BasicButton, Rating },
  data() {
    return {
      amount: 1,
    }
  },
  setup() {
    return {
      isDesktop,
    }
  },
}
</script>

<style scoped lang="scss">
.product-info {
  flex-grow: 1;
  height: 100%;
  padding: 32px 21px;
  display: flex;
  justify-content: space-between;
  &__desc {
    width: 163px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__price {
    &__current {
      font-size: 33px;
      color: $pink;
      font-weight: bold;
      line-height: 1;
    }
    &__old {
      font-size: 26px;
      color: $text;
      text-decoration: line-through;
      line-height: 1;
    }
  }
  &__text {
    color: $text-gray;
    margin-bottom: 10px;
  }

  &__city {
    font-weight: 500;
    color: #000 !important;
  }
  &__delivery {
    width: 185px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__line {
      margin-bottom: 10px;
      p {
        line-height: 1.28;
        font-size: 18px;
        color: $text;
      }
    }
    &__actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  &__amount {
    display: flex;
    align-items: center;
    p {
      margin-left: 7px;
    }
    .input {
      width: 49px;
    }
  }
}

@media (max-width: $media-tablet) {
  .product-info {
    &__delivery {
      margin-left: 16px;
      width: 170px;
    }
    &__desc {
      width: 150px;
    }
  }
}
</style>
