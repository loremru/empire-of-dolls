<template>
  <BreadcrumbContainer v-if="!isTablet">
    <Breadcrumb :links-list="$route.meta.tableBreadCrumb" />
  </BreadcrumbContainer>
  <CategorySlider :slides-desktop="7" />
</template>

<script>
import Breadcrumb from '@/components/BaseComponents/Breadcrumb'
import BreadcrumbContainer from '@/components/BaseComponents/BreadcrumbContainer'
import { isTablet } from '@/store/display'
import CategorySlider from '@/components/Search/Category/CategorySlider'

export default {
  name: 'Product',
  components: { CategorySlider, BreadcrumbContainer, Breadcrumb },
  setup() {
    return { isTablet }
  },
}
</script>

<style scoped></style>
