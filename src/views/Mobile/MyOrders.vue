<template>
  <div class="orders">
    <BreadcrumbContainer v-if="!isTablet">
      <Breadcrumb :links-list="$route.meta.tableBreadCrumb" />
    </BreadcrumbContainer>
    <CabinetHeader>Мои заказы</CabinetHeader>
    <MobileOrderCard />
  </div>
</template>

<script>
import BreadcrumbContainer from '@/components/BaseComponents/BreadcrumbContainer'
import Breadcrumb from '@/components/BaseComponents/Breadcrumb'
import CabinetHeader from '@/components/Cabinet/Mobile/MobileCabinetHeader'
import MobileOrderCard from '@/components/Cabinet/Mobile/MobileOrderCard'
export default {
  name: 'MyOrders',
  components: {
    MobileOrderCard,
    CabinetHeader,
    Breadcrumb,
    BreadcrumbContainer,
  },
}
</script>

<style scoped></style>
