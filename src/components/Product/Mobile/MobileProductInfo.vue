<template>
  <div class="prod-info">
    <h3 class="prod-info__header tac">L.O.L. Surprise - O.M.G. Lady Diva</h3>
    <div class="prod-info__rating flex jcc aic">
      <Rating :mark="4.6" />
      <p class="txt">4.6/373</p>
    </div>
    <div class="prod-info__body">
      <p>в наличии</p>
      <p><span>Производитель:</span> MGA Entertainment</p>
      <p><span>Артикул:</span> 560562</p>
    </div>
    <ProductPrice buy-btn />
  </div>
</template>

<script>
import Rating from '@/components/BaseComponents/Rating'
import ProductPrice from '@/components/Main/ProductCard/ProductPrice'
export default {
  name: 'MobileProductInfo',
  components: { ProductPrice, Rating },
}
</script>

<style scoped lang="scss">
.prod-info {
  padding: 0 14px 14px 14px;
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
