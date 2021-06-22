<template>
  <div class="category">
    <Swiper
      :slides-per-view="slidesPerRow"
      :spaceBetween="20"
      @swiper="swiperInit"
    >
      <SwiperSlide v-for="i in 20" :key="i + 'cat1'">
        <CategoryItem> Модная штучка Fashionistas </CategoryItem>
      </SwiperSlide>
    </Swiper>
    <SliderArrows top="48px" :offset="10" :swiper="swiper" v-if="swiper" />
  </div>
</template>

<script>
import SwiperCore, { Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import SliderArrows from '@/components/BaseComponents/SliderArrows'
import CategoryItem from '@/components/Search/Category/CategoryItem'
import { isDesktop, isTable } from '@/store/display'

SwiperCore.use([Controller])
export default {
  name: 'CategorySlider',
  components: { CategoryItem, SliderArrows, Swiper, SwiperSlide },
  data() {
    return {
      swiper: null,
    }
  },
  methods: {
    swiperInit(swiper) {
      this.swiper = swiper
    },
  },
  computed: {
    slidesPerRow() {
      return isDesktop.value ? 9 : isTable.value ? 6 : 3
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
