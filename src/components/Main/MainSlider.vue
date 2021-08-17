<template>
  <div class="main-slider" ref="mainSlider">
    <Swiper
      :slides-per-view="4"
      :spaceBetween="8"
      autoHeight
      @swiper="swiperInit"
      loop
    >
      <SwiperSlide v-for="(i, idx) in slides" :key="idx" style="height: 100%">
        <div
          class="main-slider__item"
          @click="$router.push(`/categories?id=${i.cid}`)"
        >
          <img :src="i.image" alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
    <SliderArrows
      top="50%"
      :offset="11"
      :swiper="swiper"
      is-transform-half
      v-if="swiper"
    />
  </div>
</template>

<script>
import SwiperCore, { Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import SliderArrows from '@/components/BaseComponents/SliderArrows'
import { getMainSlider } from '@/hooks/main'

SwiperCore.use([Controller])
export default {
  name: 'MainSlider',
  components: { SliderArrows, Swiper, SwiperSlide },
  data() {
    return {
      swiper: null,

      slides: [],
    }
  },
  async mounted() {
    this.slides = await getMainSlider()
  },
  methods: {
    swiperInit(swiper) {
      this.swiper = swiper
    },
  },
}
</script>

<style scoped lang="scss">
.main-slider {
  min-width: 0;
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 200px;
  &__item {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    img {
      width: 100%;
    }
  }
}
</style>
