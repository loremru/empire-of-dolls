<template>
  <div class="delivery__right" v-if="!isMobile">
    <h3 class="mini-header" v-if="isDesktop">ПОПУЛЯРНЫЕ ТОВАРЫ</h3>
    <ProductCard
      title="Кукла Барби, игровой набор"
      v-for="i in amount"
      :key="i + 'prod-right'"
    />
  </div>
</template>

<script>
import ProductCard from '@/components/Main/ProductCard/ProductCard'
import { isDesktop, isMobile } from '@/store/display'
export default {
  name: 'PopularProducts',
  components: { ProductCard },
  props: {
    amount: {
      type: Number,
      default: 3,
    },
  },
  setup() {
    return {
      isDesktop,
      isMobile,
    }
  },
}
</script>

<style lang="scss" scoped>
.delivery__right {
  min-width: 249px;
  width: 249px;
  margin-left: 7px;
  position: relative;
  .mini-header {
    position: absolute;
    top: -25px;
  }
  .product {
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
}

@media (max-width: $media-desktop) {
  .delivery__right {
    width: 220px;
    min-width: 220px;
  }
}

@media (max-width: $media-tablet) {
  .delivery__right {
    width: 170px;
    min-width: 170px;
  }
}
</style>
