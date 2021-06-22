<template>
  <HeaderApp @fixedChange="fixedHeaderChange" />
  <WithCatalog
    v-if="$route.meta.layout === 'with-catalog'"
    :content-offset="contentOffset"
  />
  <SearchLayout
    v-else-if="$route.meta.layout === 'search'"
    :content-offset="contentOffset"
  />
  <FooterApp />
</template>

<script>
import HeaderApp from './components/Main/Header/HeaderApp'
import FooterApp from '@/components/Main/Footer/FooterApp'
import { setDisplayType } from '@/store/display'
import WithCatalog from '@/layouts/WithCatalog'
import SearchLayout from '@/layouts/SearchLayout'
export default {
  components: { SearchLayout, WithCatalog, FooterApp, HeaderApp },
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
