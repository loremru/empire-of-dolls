<template>
  <div
    class="daily-mob round-block flex jcsb"
    @click="$router.push(`/product/${product.pid}`)"
  >
    <div class="daily-mob__image">
      <img :src="product.image" alt="" />
      <DailyDiscount styles="top: 2px; left: 6px;"
        >{{ product.discount_percent }}%</DailyDiscount
      >
    </div>
    <div class="daily-mob__body flex fxdc jcsb aifs">
      <DailyProductTag />
      <p class="txt">{{ product.name }}</p>
      <ProductPrice
        :new-price="product.price"
        :old-price="product.price_discount"
      />
    </div>
  </div>
</template>

<script>
import DailyDiscount from '@/components/Main/DailyProduct/DailyDiscount'
import DailyProductTag from '@/components/Main/DailyProduct/DailyProductTag'
import ProductPrice from '@/components/Main/ProductCard/ProductPrice'
export default {
  name: 'DailyProductMobile',
  components: { ProductPrice, DailyProductTag, DailyDiscount },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.daily-mob {
  width: 100%;
  min-height: 188px;
  max-width: 580px;
  height: 100%;
  &__image {
    width: 154px;
    height: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__body {
    padding: 6px 11px 8px 12px;
    flex-grow: 1;
    max-width: 175px;
    .txt {
      max-width: 110px;
      margin: 8px 0;
    }
  }
}
</style>
