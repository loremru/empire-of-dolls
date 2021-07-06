<template>
  <BreadcrumbContainer v-if="!isTablet">
    <Breadcrumb :links-list="$route.meta.tableBreadCrumb" />
  </BreadcrumbContainer>
  <MobileCabinetHeader>Список желаний</MobileCabinetHeader>
  <div class="wishlist">
    <ProductCard
      title="Кукла Барби, игровой набор"
      v-for="i in 4"
      :key="i + 'wishlist-card'"
      close
    />
  </div>
</template>

<script>
import MobileCabinetHeader from '@/components/Cabinet/Mobile/MobileCabinetHeader'
import Breadcrumb from '@/components/BaseComponents/Breadcrumb'
import BreadcrumbContainer from '@/components/BaseComponents/BreadcrumbContainer'
import ProductCard from '@/components/Main/ProductCard/ProductCard'

export default {
  name: 'WishListMobile',
  components: {
    ProductCard,
    MobileCabinetHeader,
    Breadcrumb,
    BreadcrumbContainer,
  },
}
</script>

<style scoped lang="scss">
.wishlist {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 6px;
  margin-bottom: 8px;
}
</style>
