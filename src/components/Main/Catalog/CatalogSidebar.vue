<template>
  <div class="sidebar">
    <div class="sidebar__sell flex aic jcsb">
      <img src="@/assets/images/percent.png" alt="" />
      <span>Распродажа</span>
      <img src="@/assets/images/catalog-arrow.svg" width="9" alt="" />
    </div>
    <div class="sidebar__content">
      <CatalogItem
        v-for="(item, idx) in categories"
        :key="idx"
        :category="item"
      />
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
import Subscribe from '@/components/Main/Subscribe/Subscribe'
import { getCategories } from '@/hooks/main'
const { isDesktop } = require('@/store/display')
export default {
  name: 'CatalogSidebar',
  components: { Subscribe, CatalogItem },
  data() {
    return {
      isFixedSub: false,
      isBottomSub: false,
      subPosY: 0,
      Footer: null,

      categories: [],
    }
  },
  setup() {
    return { isDesktop }
  },
  async mounted() {
    this.categories = await getCategories()

    if (isDesktop.value) {
      setTimeout(() => {
        this.Footer = document.querySelector('.improvementMessage')
        this.subPosY =
          this.$refs.sub.getBoundingClientRect().top + window.pageYOffset
        document.addEventListener('scroll', this.fixSub)
      }, 200)
    }
  },
  beforeUnmount() {
    document.removeEventListener('scroll', this.fixSub)
  },
  methods: {
    fixSub() {
      this.isBottomSub =
        this.Footer.getBoundingClientRect().y - window.innerHeight <= 0
      this.isFixedSub =
        window.pageYOffset +
          window.innerHeight -
          (60 + this.$refs.sub.offsetHeight) >=
          this.subPosY && !this.isBottomSub
    },
  },
}
</script>

<style lang="scss">
.sidebar__subscribe .sub-mod {
  bottom: 0;
  left: 80px;
  width: 380px;
}
</style>

<style scoped lang="scss">
.sidebar {
  min-width: 254px;
  max-width: 254px;
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
    display: flex;
    align-items: flex-end;
    position: relative;
    &_fixed {
      position: fixed;
      bottom: 60px;
      z-index: 800;
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
