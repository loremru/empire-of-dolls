<template>
  <HeaderApp @fixedChange="fixedHeaderChange" />
  <div class="main-content content" :style="`margin-top: ${contentOffset}px`">
    <div class="flex">
      <CatalogSidebar />
      <router-view />
    </div>
    <div style="height: 150vh"></div>
  </div>
  <!--  footer-->
</template>

<script>
import HeaderApp from './components/Main/HeaderApp'
import CatalogSidebar from '@/components/Main/CatalogSidebar'
export default {
  components: { CatalogSidebar, HeaderApp },
  data() {
    return {
      contentOffset: 0,
    }
  },
  methods: {
    fixedHeaderChange({ headerHeight, fixed }) {
      if (fixed) {
        this.contentOffset = headerHeight
      } else this.contentOffset = 0
    },
  },
}
</script>

<style scoped lang="scss">
.main-content {
  padding-top: 12px;
}
</style>
