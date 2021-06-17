<template>
  <HeaderApp @fixedChange="fixedHeaderChange" />
  <WithCatalog
    v-if="$route.meta.layout === 'with-catalog'"
    :content-offset="contentOffset"
  />
  <FooterApp />
</template>

<script>
import HeaderApp from './components/Main/HeaderApp'
import FooterApp from '@/components/Main/Footer/FooterApp'
import { setDisplayType } from '@/store/display'
import WithCatalog from '@/layouts/WithCatalog'
export default {
  components: { WithCatalog, FooterApp, HeaderApp },
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
