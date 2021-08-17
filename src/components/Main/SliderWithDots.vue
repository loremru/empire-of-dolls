<template>
  <div class="dots-slider">
    <Swiper
      :spaceBetween="8"
      :height="height"
      @swiper="regSwiper"
      :pagination="{ clickable: true }"
      autoplay
      loop
      autoHeight
    >
      <slot></slot>
    </Swiper>
  </div>
</template>

<script>
import SwiperCore, { Controller, Pagination, Autoplay } from 'swiper'
import { Swiper } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'

SwiperCore.use([Controller, Pagination, Autoplay])
export default {
  name: 'SliderWithDots',
  components: { Swiper },
  props: {
    height: {
      type: Number,
    },
  },
  data() {
    return {
      swiper: null,
    }
  },
  methods: {
    regSwiper(swiper) {
      this.swiper = swiper
    },
  },
}
</script>

<style lang="scss">
.dots-slider {
  .swiper-container {
    display: flex !important;
    flex-direction: column;
  }
  .swiper-pagination {
    position: relative;
    bottom: auto;
    transform: translate(0, 0);
    left: auto;
    top: auto;
    order: 2;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    &-bullet {
      width: 9px;
      height: 9px;
      background-color: #d7c3cd;
      margin: 0 4px !important;
      border-radius: 100% !important;
      &-active {
        background-color: $pink;
      }
    }
  }
}
</style>

<style scoped lang="scss">
.dots-slider {
  min-width: 0;
}
</style>
