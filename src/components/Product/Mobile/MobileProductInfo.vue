<template>
  <div class="prod-info">
    <h3 class="prod-info__header tac">{{ product.name }}</h3>
    <div class="prod-info__rating flex fxdc jcc aic">
      <Rating :mark="Number(product.raiting)" />
      <p class="txt">{{ product.raiting }}/373</p>
    </div>
    <div class="prod-info__body">
      <p>в наличии</p>
      <p><span>Производитель:</span> {{ product.brand }}</p>
      <p><span>Артикул:</span> {{ product.pid }}</p>
    </div>
    <ProductPrice :product="product" buy-btn />
  </div>
</template>

<script>
import Rating from '@/components/BaseComponents/Rating'
import ProductPrice from '@/components/Main/ProductCard/ProductPrice'
export default {
  name: 'MobileProductInfo',
  components: { ProductPrice, Rating },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.prod-info {
  padding: 0 14px 14px 14px;
  &__rating {
    .txt {
      margin-top: 7px;
    }
  }
  &__header {
    font-size: 15px;
    font-weight: 500;
    line-height: 0.8;
    color: #333;
    margin-top: 0;
    margin-bottom: 10px;
  }
  &__body {
    margin: 18px 0;
    p {
      font-size: 15px;
      color: $text;
      line-height: 1.5;
      span {
        color: #767676;
      }
    }
  }
}
</style>
