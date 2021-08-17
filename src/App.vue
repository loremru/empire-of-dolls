<template>
  <HeaderApp @fixedChange="fixedHeaderChange" />
  <InterestingModal
    @close="isInteresting = false"
    v-if="isInteresting && !isMobile"
  />
  <WithCatalog
    v-if="$route.meta.layout === 'with-catalog'"
    :content-offset="contentOffset"
  />
  <SearchLayout
    v-else-if="$route.meta.layout === 'search'"
    :content-offset="contentOffset"
  />
  <FooterApp />

  <notifications position="bottom right" />
</template>

<script>
import HeaderApp from './components/Main/Header/HeaderApp'
import FooterApp from '@/components/Main/Footer/FooterApp'
import { setDisplayType } from '@/store/display'
import WithCatalog from '@/layouts/WithCatalog'
import SearchLayout from '@/layouts/SearchLayout'
import InterestingModal from '@/components/Main/InterestingModal'
import { isMobile } from '@/store/display'
export default {
  components: {
    InterestingModal,
    SearchLayout,
    WithCatalog,
    FooterApp,
    HeaderApp,
  },
  data() {
    return {
      contentOffset: 0,
      isInteresting: false,
    }
  },
  setup() {
    return {
      isMobile,
    }
  },
  mounted() {
    setDisplayType()
    window.addEventListener('resize', setDisplayType)

    setTimeout(() => {
      const storage = localStorage.getItem('isInteresting')
      if (storage) {
        const [val, date] = storage.split(' ')
        if (val !== '1' || Number(date) - new Date().getTime() < 0) {
          this.open()
        }
      } else this.open()
    }, 5000)
  },
  methods: {
    fixedHeaderChange({ headerHeight, fixed }) {
      if (fixed) {
        this.contentOffset = headerHeight
      } else this.contentOffset = 0
    },
    open() {
      this.isInteresting = true
      localStorage.setItem(
        'isInteresting',
        `1 ${new Date().getTime() + 259200000}`
      )
    },
  },
  watch: {
    $route() {
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style lang="scss">
.notification-title {
  font-size: 17px !important;
}
</style>
