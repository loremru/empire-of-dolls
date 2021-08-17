<template>
  <div class="verticalSlider">
    <div v-if="arrayLength > 2" class="verticalSlider__arrow-container">
      <div class="verticalSlider__arrow" @click="prevSlide">
        <img
          src="@/assets/images/main-arrow-prev.svg"
          alt=""
          style="transform: rotateZ(90deg)"
        />
      </div>
    </div>
    <div class="verticalSlider__swiper" :style="`height: ${height}px`">
      <Swiper
        :spaceBetween="11"
        :slides-per-view="2"
        @swiper="regSwiper"
        @activeIndexChange="log"
        direction="vertical"
        :height="height"
        :centeredSlides="arrayLength === 1"
      >
        <slot></slot>
      </Swiper>
    </div>
    <div v-if="arrayLength > 2" class="verticalSlider__arrow-container">
      <div
        class="verticalSlider__arrow verticalSlider__arrow_next"
        @click="nextSlide"
      >
        <img
          src="@/assets/images/main-arrow-prev.svg"
          alt=""
          style="transform: rotateZ(-90deg)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Controller } from 'swiper'
import { Swiper } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'

SwiperCore.use([Controller])
export default {
  name: 'VerticalSlider',
  components: {
    Swiper,
  },
  emits: ['changeIdx'],
  props: {
    height: {
      type: Number,
      default: 283,
    },
    arrayLength: {
      type: Number,
      default: 0,
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
    nextSlide() {
      this.swiper.slideNext()
    },
    prevSlide() {
      this.swiper.slidePrev()
    },
    log(idx) {
      setTimeout(() => {
        console.log(idx.activeIndex)
        this.$emit('changeIdx', idx.activeIndex)
      }, 100)
    },
  },
}
</script>

<style>
.swiper-container {
  height: 100%;
}
</style>

<style scoped lang="scss">
.verticalSlider {
  width: 134px;
  &__swiper {
    overflow-y: hidden;
  }
  &__arrow-container {
    margin: 11px 0;
    display: flex;
    justify-content: center;
  }
  &__arrow {
    cursor: pointer;
    display: flex;
  }
}
</style>
