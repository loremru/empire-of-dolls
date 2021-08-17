<template>
  <div class="prod-mob">
    <div class="prod-mob__star">
      <img src="@/assets/images/product-favorite.svg" alt="" />
    </div>
    <SliderWithDots :height="300">
      <SwiperSlide v-for="(img, idx) in gallery" :key="idx + 'product-mob'">
        <div class="prod-mob__item">
          <img :src="img" alt="" />
        </div>
      </SwiperSlide>
    </SliderWithDots>
  </div>
</template>

<script>
import SliderWithDots from '@/components/Main/SliderWithDots'
import { SwiperSlide } from 'swiper/vue'
export default {
  name: 'MobileProductSlider',
  components: { SliderWithDots, SwiperSlide },
  props: {
    gallery: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped lang="scss">
.prod-mob {
  position: relative;
  //height: 300px;
  &__star {
    position: absolute;
    top: 11px;
    right: 9px;
    z-index: 10;
  }
  &__item {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
