<template>
  <div class="main-content__header flex jcsb aic">
    <div class="flex aic">
      <CatalogMini v-if="!isMobile" />
      <div class="main-content__breadcrumb">
        <Breadcrumb
          :links-list="breadcrumbArray"
          v-if="breadcrumbArray.length"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CatalogMini from '@/components/Main/Catalog/CatalogMini'
import Breadcrumb from '@/components/BaseComponents/Breadcrumb'
import { isMobile } from '@/store/display'
export default {
  name: 'MainContentHeader',
  components: { Breadcrumb, CatalogMini },
  props: {
    breadcrumbArray: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    return {
      isMobile,
    }
  },
}
</script>

<style scoped lang="scss">
.main-content {
  &__header {
    margin-bottom: 12px;
  }
  &__breadcrumb {
    margin-left: 40px;
  }
}

@media (max-width: $media-tablet) {
  .main-content {
    &__breadcrumb {
      margin-left: 13px;
    }
  }
}

@media (max-width: $media-mobile) {
  .main-content {
    &__breadcrumb {
      margin-left: 0;
    }
  }
}
</style>
