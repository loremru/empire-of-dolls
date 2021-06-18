<template>
  <div class="sidebar">
    <div class="sidebar__sell flex aic jcsb">
      <img src="@/assets/images/percent.png" alt="" />
      <span>Распродажа</span>
      <img src="@/assets/images/catalog-arrow.svg" width="9" alt="" />
    </div>
    <div class="sidebar__content">
      <CatalogItem v-for="i in 10" :key="i">LOL</CatalogItem>
    </div>

    <div
      class="sidebar__subscribe"
      :class="{
        sidebar__subscribe_fixed: isFixedSub,
        sidebar__subscribe_bottom: isBottomSub,
      }"
      ref="sub"
      v-if="isDesktop"
    >
      <Subscribe />
    </div>
  </div>
</template>

<script>
import CatalogItem from '@/components/Main/Catalog/CatalogItem'
import Subscribe from '@/components/Main/Subscribe'
const { isDesktop } = require('@/store/display')
export default {
  name: 'CatalogSidebar',
  components: { Subscribe, CatalogItem },
  data() {
    return {
      isFixedSub: false,
      isBottomSub: false,
    }
  },
  setup() {
    return { isDesktop }
  },
  mounted() {
    if (isDesktop.value) {
      setTimeout(() => {
        const Footer = document.querySelector('.improvementMessage')
        this.subPosY =
          this.$refs.sub.getBoundingClientRect().top + window.pageYOffset
        document.addEventListener('scroll', () => {
          this.isBottomSub =
            Footer.getBoundingClientRect().y - window.innerHeight <= 0
          this.isFixedSub =
            window.pageYOffset +
              window.innerHeight -
              (60 + this.$refs.sub.offsetHeight) >=
              this.subPosY && !this.isBottomSub
        })
      }, 200)
    }
  },
}
</script>

<style scoped lang="scss">
.sidebar {
  min-width: 254px;
  position: relative;
  &__sell {
    background-color: $pink;
    height: 37px;
    padding: 8px 21px 8px 15px;
    border-radius: 7.7px;
    cursor: pointer;
    span {
      color: #fff;
    }
  }
  &__content {
    padding-top: 11px;
  }
  &__subscribe {
    margin-top: 74px;
    &_fixed {
      position: fixed;
      bottom: 60px;
    }
    &_bottom {
      position: absolute;
      bottom: 0;
    }
  }
}
@media (max-width: $media-desktop) {
  .sidebar {
    min-width: 190px;
  }
}
</style>
