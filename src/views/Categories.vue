<template>
  <BreadcrumbContainer v-if="!isTablet">
    <Breadcrumb :links-list="breadcrumbs" />
  </BreadcrumbContainer>
  <div class="categories__content" v-if="category">
    <template v-if="category.subcat.length">
      <CategoryItem
        v-for="subcat in category.subcat"
        :key="subcat.cid + 'categories'"
        :category="subcat"
      />
    </template>
    <template v-else-if="category.products.length">
      <ProductCard
        v-for="product in category.products"
        :key="product.pid"
        :product="product"
      />
    </template>
  </div>
</template>

<script>
import Breadcrumb from '@/components/BaseComponents/Breadcrumb'
import BreadcrumbContainer from '@/components/BaseComponents/BreadcrumbContainer'
import CategoryItem from '@/components/Search/Category/CategoryItem'
import { isTablet } from '@/store/display'
import { getCurrentCategory } from '@/hooks/main'
import { breadcrumbs } from '@/store/main'
import { parseBreadCrumbs } from '@/plugins/makeBreadcrumbs'
import ProductCard from '@/components/Main/ProductCard/ProductCard'

export default {
  name: 'Categories',
  components: { ProductCard, BreadcrumbContainer, CategoryItem, Breadcrumb },
  setup() {
    return {
      isTablet,
      breadcrumbs,
    }
  },
  data() {
    return {
      category: null,
    }
  },
  async mounted() {
    await this.getCategory()
    console.log(this.category)
  },
  methods: {
    async getCategory() {
      const { category, breadcrumbs } = await getCurrentCategory(
        this.$route.query.id
      )
      this.category = category
      console.log('cat', breadcrumbs)
      this.updateBreadcrumbs(breadcrumbs)
    },
    updateBreadcrumbs(breadcrumbs) {
      parseBreadCrumbs(breadcrumbs)
    },
  },
  watch: {
    async $route(to) {
      if (to.name === 'Categories' && to.query.id) await this.getCategory()
    },
  },
}
</script>

<style scoped lang="scss">
.categories {
  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 8px;
    padding-bottom: 16px;
  }
}
@media (max-width: $media-mobile) {
  .categories {
    &__content {
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>
