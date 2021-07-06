<template>
  <BreadcrumbContainer v-if="!isTablet">
    <Breadcrumb :links-list="$route.meta.tableBreadCrumb" />
  </BreadcrumbContainer>
  <div class="categories__content">
    <CategoryItem v-for="i in 21" :key="i + 'categories'">Новинки</CategoryItem>
  </div>
</template>

<script>
import Breadcrumb from '@/components/BaseComponents/Breadcrumb'
import BreadcrumbContainer from '@/components/BaseComponents/BreadcrumbContainer'
import CategoryItem from '@/components/Search/Category/CategoryItem'
import { isTablet } from '@/store/display'

export default {
  name: 'Categories',
  components: { BreadcrumbContainer, CategoryItem, Breadcrumb },
  setup() {
    return {
      isTablet: isTablet,
    }
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
