<template>
  <div class="bonuses">
    <BreadcrumbContainer v-if="!isTablet">
      <Breadcrumb :links-list="$route.meta.tableBreadCrumb" />
    </BreadcrumbContainer>
    <MobileCabinetHeader>Бонусная программа</MobileCabinetHeader>
    <div class="bonuses__container">
      <h3>Мои бонусы: <span>83</span></h3>
    </div>
  </div>
</template>

<script>
import BreadcrumbContainer from '@/components/BaseComponents/BreadcrumbContainer'
import Breadcrumb from '@/components/BaseComponents/Breadcrumb'
import MobileCabinetHeader from '@/components/Cabinet/Mobile/MobileCabinetHeader'
export default {
  name: 'Bonuses',
  components: { MobileCabinetHeader, Breadcrumb, BreadcrumbContainer },
}
</script>

<style scoped lang="scss">
.bonuses {
  height: calc(100vh - 246px);
  &__container {
    margin-top: 22px;
    width: 100%;
    display: flex;
    justify-content: center;
    h3 {
      margin: 0;
      font-size: 18px;
      font-weight: 500;
      line-height: 1;
      color: #333;
      span {
        margin-left: 25px;
        color: $pink;
        font-size: 22px;
        font-weight: 600;
      }
    }
  }
}
</style>
