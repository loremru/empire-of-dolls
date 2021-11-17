<template>
  <BreadcrumbContainer v-if="!isTablet">
    <Breadcrumb :links-list="$route.meta.tableBreadCrumb" />
  </BreadcrumbContainer>
  <div class="cabinet__content flex" v-if="!isMobile">
    <div class="cabinet__page">
      <CabinetHeader @pageChange="togglePage" />
      <CabinetUser v-if="page === 0" />
      <template v-else>
        <OrderCard />
      </template>
    </div>
    <div class="cabinet__adds">
      <DailyProductVertical />
    </div>
  </div>
  <CabinetMobileMenu v-else />
</template>
<script>
import Breadcrumb from '../components/BaseComponents/Breadcrumb'
import BreadcrumbContainer from '@/components/BaseComponents/BreadcrumbContainer'
import CabinetHeader from '@/components/Cabinet/CabinetHeader'
import CabinetUser from '@/components/Cabinet/CabinetUser'
import { isTablet, isMobile } from '@/store/display'
import DailyProductVertical from '@/components/Main/DailyProduct/DailyProductVertical'
import CabinetMobileMenu from '@/components/Cabinet/Mobile/CabinetMobileMenu'
import OrderCard from '@/components/Cabinet/OrderCard'
export default {
  name: 'Cabinet',
  emits: ['updateProductInCart'],
  components: {
    OrderCard,
    CabinetMobileMenu,
    DailyProductVertical,
    CabinetUser,
    CabinetHeader,
    BreadcrumbContainer,
    Breadcrumb,
  },
  data() {
    return {
      page: 0,
    }
  },
  setup() {
    return {
      isTablet,
      isMobile,
    }
  },
  methods: {
    togglePage(page) {
      this.page = page
    },
  },
}
</script>

<style scoped lang="scss">
.cabinet {
  &__page {
    flex-grow: 1;
    margin-right: 7px;
  }
  &__content {
    width: 100%;
    padding-bottom: 10px;
  }
  &__adds {
    width: 250px;
  }
}
@media (max-width: $media-tablet) {
  .cabinet {
    &__adds {
      width: 230px;
    }
  }
}
</style>
