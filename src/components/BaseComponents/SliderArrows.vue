<template>
  <div class="main-slider__arrows" v-if="isDesktop">
    <img
      src="@/assets/images/main-arrow-prev.svg"
      class="main-slider__arrow main-slider__arrow_prev"
      alt=""
      @click="swiper.slidePrev()"
      :style="isTransformHalfStyles() + `left: ${offset}px;` + `top: ${top}`"
    />
    <img
      src="@/assets/images/main-arrow-next.svg"
      class="main-slider__arrow main-slider__arrow_next"
      alt=""
      @click="swiper.slideNext()"
      :style="isTransformHalfStyles() + `right: ${offset}px;` + `top: ${top}`"
    />
  </div>
</template>

<script>
import { isDesktop } from '@/store/display'

export default {
  name: 'SliderArrows',
  props: {
    isTransformHalf: Boolean,
    offset: {
      type: Number,
      required: true,
    },
    top: {
      type: String,
      required: true,
    },
    swiper: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {
      isDesktop,
    }
  },
  methods: {
    isTransformHalfStyles() {
      return this.isTransformHalf ? 'transform: translateY(-50%);' : ''
    },
  },
}
</script>

<style scoped lang="scss">
.main-slider {
  &__arrow {
    z-index: 15;
    position: absolute;
    cursor: pointer;
  }
}
</style>
