<template>
  <div class="main-slider" ref="mainSlider">
    <Swiper :slides-per-view="4">
      <SwiperSlide v-for="i in 10" :key="i">
        <div class="main-slider__item">
          <img
            :src="require(`@/assets/images/sections/section(${i}).png`)"
            alt=""
          />
        </div>
      </SwiperSlide>
    </Swiper>
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
  mounted() {
    console.log(this.$refs.mainSlider.parentNode.parentNode)
  },
}
</script>

<style scoped lang="scss">
.main-slider {
  min-width: 0;
  width: 100%;
  overflow: hidden;
  &__item {
    margin: 0 3.5px;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
}
</style>
