<template>
  <BreadcrumbContainer v-if="!isTablet">
    <Breadcrumb :links-list="$route.meta.tableBreadCrumb" />
  </BreadcrumbContainer>
  <MobileCabinetHeader>Личные данные</MobileCabinetHeader>
  <CabinetUser />
</template>

<script>
import CabinetUser from '@/components/Cabinet/CabinetUser'
import MobileCabinetHeader from '@/components/Cabinet/Mobile/MobileCabinetHeader'
import BreadcrumbContainer from '@/components/BaseComponents/BreadcrumbContainer'
import Breadcrumb from '@/components/BaseComponents/Breadcrumb'
export default {
  name: 'AccountData',
  components: {
    Breadcrumb,
    BreadcrumbContainer,
    MobileCabinetHeader,
    CabinetUser,
  },
}
</script>

<style scoped></style>
