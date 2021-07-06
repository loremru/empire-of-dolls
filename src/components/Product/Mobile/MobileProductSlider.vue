<template>
  <div class="prod-mob">
    <div class="prod-mob__star">
      <img src="@/assets/images/product-favorite.svg" alt="" />
    </div>
    <SliderWithDots>
      <SwiperSlide v-for="i in 4" :key="i + 'product-mob'">
        <div class="prod-mob__item">
          <img src="@/assets/images/product-mobile.png" alt="" />
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
}
</script>

<style scoped lang="scss">
.prod-mob {
  position: relative;
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
