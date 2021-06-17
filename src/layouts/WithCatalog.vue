<template>
  <div class="main-content content" :style="`margin-top: ${contentOffset}px`">
    <div class="flex">
      <CatalogSidebar />
      <div id="contentOfPage" style="padding-left: 7px">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import CatalogSidebar from '@/components/Main/Catalog/CatalogSidebar'
export default {
  name: 'WithCatalog',
  components: { CatalogSidebar },
  props: {
    contentOffset: {
      type: Number,
      default: 0,
    },
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
</style>
