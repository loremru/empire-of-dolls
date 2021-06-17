<template>
  <div class="main-slider" ref="mainSlider">
    <Swiper :slides-per-view="4" @swiper="swiperInit" loop>
      <SwiperSlide v-for="i in 10" :key="i">
        <div class="main-slider__item">
          <img
            :src="require(`@/assets/images/sections/section(${i}).png`)"
            alt=""
          />
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="main-slider__arrows">
      <img
        src="@/assets/images/main-arrow-prev.svg"
        class="main-slider__arrow main-slider__arrow_prev"
        alt=""
        @click="swiper.slidePrev()"
      />
      <img
        src="@/assets/images/main-arrow-next.svg"
        class="main-slider__arrow main-slider__arrow_next"
        alt=""
        @click="swiper.slideNext()"
      />
    </div>
  </div>
</template>

<script>
import SwiperCore, { Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'

SwiperCore.use([Controller])
export default {
  name: 'MainSlider',
  components: { Swiper, SwiperSlide },
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
    margin: 0 3.5px;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
  &__arrow {
    z-index: 15;

    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    &_prev {
      left: 11px;
    }
    &_next {
      right: 11px;
    }
  }
}
</style>
