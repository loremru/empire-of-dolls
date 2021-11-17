<template>
  <div class="wish">
    <BreadcrumbContainer v-if="!isTablet">
      <Breadcrumb :links-list="$route.meta.tableBreadCrumb" />
    </BreadcrumbContainer>
    <div class="flex jcc wish__header">
      <h3>избранные товары</h3>
    </div>
    <div class="wish__grid">
      <ProductCard
        close
        v-for="i in favoriteProducts"
        :product="i"
        :key="i.pid + 'wish'"
        :title="i.name"
        @get-update="toggleFavoriteProductStatus"
        @updateProductInCart="updateProductInCart"
      />
    </div>
  </div>
</template>

<script>
import BreadcrumbContainer from '@/components/BaseComponents/BreadcrumbContainer'
import Breadcrumb from '@/components/BaseComponents/Breadcrumb'
import ProductCard from '@/components/Main/ProductCard/ProductCard'
import { isTablet } from '@/store/display'
import { getFavorites } from '@/hooks/main'

export default {
  name: 'WishList',
  components: { ProductCard, Breadcrumb, BreadcrumbContainer },
  data() {
    return {
      favoriteProducts: null,
    }
  },
  setup() {
    return {
      isTablet,
    }
  },
  mounted() {
    this.updateProducts()
  },
  methods: {
    async updateProducts() {
      this.favoriteProducts = await getFavorites()
    },
    async toggleFavoriteProductStatus(item) {
      const remainingFavoriteProducts = this.favoriteProducts
        .flat()
        .filter((prod) => prod.pid != item.pid)
      this.favoriteProducts = remainingFavoriteProducts
    },
    updateProductInCart(event) {
      this.$emit('updateProductInCart', event)
    },
  },
}
</script>

<style scoped lang="scss">
.wish {
  &__header {
    margin-top: 8px;
    margin-bottom: 24px;
    h3 {
      font-size: 15.5px;
      font-weight: 500;
      line-height: 1.19;
      color: #000;
      text-transform: uppercase;
      margin: 0;
    }
  }
  &__grid {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (max-width: $media-mobile) {
  .wish__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
