<template>
  <div class="delivery__right" v-if="!isMobile">
    <h3 class="mini-header" v-if="isDesktop">ПОПУЛЯРНЫЕ ТОВАРЫ</h3>
    <ProductCard title="Кукла Барби, игровой набор" />
    <ProductCard title="Кукла Барби, игровой набор" />
    <ProductCard title="Кукла Барби, игровой набор" />
  </div>
</template>

<script>
import ProductCard from '@/components/Main/ProductCard/ProductCard'
import { isDesktop, isMobile } from '@/store/display'
export default {
  name: 'PopularProducts',
  components: { ProductCard },
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
  margin-left: 7px;
  position: relative;
  .mini-header {
    position: absolute;
    top: -25px;
  }
  .product {
    margin-bottom: 10px;
  }
}
</style>
