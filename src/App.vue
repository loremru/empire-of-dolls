<template>
  <template v-if="userData">
    <HeaderApp
      :userData="userData"
      :selectedCity="selectedCity"
      @fixedChange="fixedHeaderChange"
      @getUserData="getUserData"
      @logout="logout"
    />

    <InterestingModal
      @close="isInteresting = false"
      v-if="isInteresting && !isMobile"
    />
    <WithCatalog
      v-if="$route.meta.layout === 'with-catalog'"
      :content-offset="contentOffset"
      :userData="userData"
      @updateProductInCart="updateProductInCart"
      @logout="logout"
    />
    <SearchLayout
      v-else-if="$route.meta.layout === 'search'"
      :content-offset="contentOffset"
      @updateProductInCart="updateProductInCart"
    />
    <FooterApp />
  </template>
  <template v-else>Загрузка...</template>
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
import { getUserInfo } from '@/hooks/auth'
import { addToCart, logout } from '@/hooks/main'

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
      userData: null,
      selectedCity: null,
    }
  },
  setup() {
    return {
      isMobile,
    }
  },
  async mounted() {
    setDisplayType()
    window.addEventListener('resize', setDisplayType)

    await this.getUserData()
    setTimeout(async () => {
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
    async getUserData() {
      this.userData = await getUserInfo()
      this.selectedCity = this.userData.user_city_name
    },
    async logout() {
      await logout()
      window.localStorage.clear()
      this.userData = null
      this.getUserData()
    },
    async updateProductInCart(event) {
      if (event.product && event.count) {
        await addToCart(event.product.pid, event.count)
      }
      if (event.dec) {
        this.userData.cart_count--
        return
      }
      this.userData.cart_count++
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
