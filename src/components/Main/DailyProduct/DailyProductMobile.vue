<template>
  <div class="daily-mob round-block flex jcsb">
    <div class="daily-mob__image">
      <img src="@/assets/images/daily-mobile.png" alt="" />
      <DailyDiscount styles="top: 2px; left: 6px;">60%</DailyDiscount>
    </div>
    <div class="daily-mob__body flex fxdc jcsb aifs">
      <DailyProductTag />
      <p class="txt">Кукла Пуллип- Вокалоид Хатсуне Мику</p>
      <ProductPrice />
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
}
</script>

<style scoped lang="scss">
.daily-mob {
  width: 100%;
  min-height: 153px;
  max-width: 320px;
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
    .txt {
      max-width: 110px;
    }
  }
}
</style>
