<template>
  <HeaderApp @fixedChange="fixedHeaderChange" />
  <div class="main-content content" :style="`margin-top: ${contentOffset}px`">
    <div class="flex">
      <CatalogSidebar />
      <router-view />
    </div>
    <div style="height: 150vh"></div>
  </div>
  <FooterApp />
</template>

<script>
import HeaderApp from './components/Main/HeaderApp'
import FooterApp from '@/components/Main/Footer/FooterApp'
import CatalogSidebar from '@/components/Main/CatalogSidebar'
import { setDisplayType } from '@/store/display'
export default {
  components: { FooterApp, CatalogSidebar, HeaderApp },
  data() {
    return {
      contentOffset: 0,
    }
  },
  mounted() {
    setDisplayType()
    window.addEventListener('resize', setDisplayType)
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
