<template>
  <div class="main-content content" :style="`margin-top: ${contentOffset}px`">
    <div class="flex">
      <CatalogSidebar v-if="isDesktop" />
      <div id="contentOfPage">
        <MainContentHeader v-if="!isDesktop" />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import CatalogSidebar from '@/components/Main/Catalog/CatalogSidebar'
import { isDesktop } from '@/store/display'
import MainContentHeader from '@/components/Main/MainContentHeader'
export default {
  name: 'WithCatalog',
  components: { MainContentHeader, CatalogSidebar },
  props: {
    contentOffset: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    return {
      isDesktop,
    }
  },
}
</script>

<style scoped lang="scss">
.main-content {
  padding-top: 12px;
}
#contentOfPage {
  flex-grow: 1;
  min-width: 0;
}
@media (min-width: $media-desktop) {
  #contentOfPage {
    padding-left: 7px;
  }
}
</style>
