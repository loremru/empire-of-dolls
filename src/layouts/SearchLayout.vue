<template>
  <div class="main-content content" :style="`margin-top: ${contentOffset}px`">
    <div class="flex">
      <div id="contentOfPage">
        <MainContentHeader :breadcrumb-array="breadcrumbArray" />
        <CategorySlider />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { isDesktop, isTable } from '@/store/display'
import MainContentHeader from '@/components/Main/MainContentHeader'
import CategorySlider from '@/components/Search/Category/CategorySlider'
export default {
  name: 'SearchLayout',
  components: { CategorySlider, MainContentHeader },
  props: {
    contentOffset: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      breadcrumbArray: [
        {
          text: 'Главная',
          pageLink: '/',
        },
        {
          text: this.$route.params.id,
          pageLink: `/search/${this.$route.params.id}`,
        },
      ],
    }
  },
  setup() {
    return {
      isDesktop,
      isTable,
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
@media (max-width: $media-mobile) {
  .main-content {
    padding-right: 8px;
    padding-left: 8px;
  }
}
</style>
