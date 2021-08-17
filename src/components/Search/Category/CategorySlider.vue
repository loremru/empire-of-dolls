<template>
  <div class="category" v-if="categories.length">
    <Swiper
      :slides-per-view="slidesPerRow"
      :spaceBetween="20"
      @swiper="swiperInit"
      autoHeight
    >
      <SwiperSlide
        v-for="cat in categories"
        :key="cat.cid"
        style="height: 100%"
      >
        <CategoryItem :category="cat" style="height: 100%" />
      </SwiperSlide>
    </Swiper>
    <SliderArrows
      top="48px"
      :offset="10"
      :swiper="swiper"
      v-if="swiper && categories.length >= 8"
    />
  </div>
</template>

<script>
import SwiperCore, { Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import SliderArrows from '@/components/BaseComponents/SliderArrows'
import CategoryItem from '@/components/Search/Category/CategoryItem'
import { isDesktop, isTablet } from '@/store/display'
import { getCategories } from '@/hooks/main'

SwiperCore.use([Controller])
export default {
  name: 'CategorySlider',
  components: { CategoryItem, SliderArrows, Swiper, SwiperSlide },

  props: {
    slidesDesktop: {
      type: Number,
      default: 9,
    },
    slidesTablet: {
      type: Number,
      default: 6,
    },
    slidesMobile: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      swiper: null,
      categories: [],
    }
  },
  async mounted() {
    this.categories = await getCategories()
  },
  methods: {
    swiperInit(swiper) {
      this.swiper = swiper
    },
  },

  computed: {
    slidesPerRow() {
      return isDesktop.value
        ? this.slidesDesktop
        : isTablet.value
        ? this.slidesTablet
        : this.slidesMobile
    },
  },
}
</script>

<style scoped lang="scss">
.category {
  position: relative;
  min-width: 0;
  margin-bottom: 24px;
}
</style>
