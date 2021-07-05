<template>
  <div class="help">
    <BreadcrumbContainer v-if="!isTablet">
      <Breadcrumb :links-list="$route.meta.tableBreadCrumb" />
    </BreadcrumbContainer>
    <div class="flex">
      <div class="help__container">
        <Reviews />
        <AddReview />
      </div>
      <PopularProducts :amount="2" />
    </div>
  </div>
</template>

<script>
import BreadcrumbContainer from '@/components/BaseComponents/BreadcrumbContainer'
import Breadcrumb from '@/components/BaseComponents/Breadcrumb'
import PopularProducts from '@/components/Main/Delivery/PopularProducts'
import Reviews from '@/components/Help/Reviews'
import AddReview from '@/components/Help/AddReview'
import { isTablet } from '@/store/display'
export default {
  name: 'Help',
  components: {
    AddReview,
    Reviews,
    PopularProducts,
    Breadcrumb,
    BreadcrumbContainer,
  },
  setup() {
    return {
      isTablet,
    }
  },
}
</script>

<style scoped lang="scss">
.help {
  &__container {
    width: 100%;
  }
}
</style>
