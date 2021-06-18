<template>
  <div class="main-slider" ref="mainSlider">
    <Swiper :slides-per-view="4" :spaceBetween="8" @swiper="swiperInit" loop>
      <SwiperSlide v-for="i in 10" :key="i">
        <div class="main-slider__item">
          <img
            :src="require(`@/assets/images/sections/section(${i}).png`)"
            alt=""
          />
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

SwiperCore.use([Controller])
export default {
  name: 'MainSlider',
  components: { SliderArrows, Swiper, SwiperSlide },
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
}
</script>

<style scoped lang="scss">
.main-slider {
  min-width: 0;
  width: 100%;
  overflow: hidden;
  position: relative;
  &__item {
    cursor: pointer;
    img {
      width: 100%;
    }
  }
}
</style>
