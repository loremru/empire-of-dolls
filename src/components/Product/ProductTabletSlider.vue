<template>
  <div class="tablet-swiper">
    <Swiper :spaceBetween="12" :slides-per-view="3" @swiper="regSwiper" loop>
      <slot></slot>
    </Swiper>
  </div>
</template>

<script>
import SwiperCore, { Controller } from 'swiper'
import { Swiper } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
SwiperCore.use([Controller])
export default {
  name: 'ProductTabletSlider',
  components: {
    Swiper,
  },
  methods: {
    regSwiper(swiper) {
      this.swiper = swiper
    },
    nextSlide() {
      this.swiper.slideNext()
    },
    prevSlide() {
      this.swiper.slidePrev()
    },
  },
}
</script>

<style scoped lang="scss">
.tablet-swiper {
  width: 100%;
  margin-top: 10px;
  min-width: 0;
}
</style>
