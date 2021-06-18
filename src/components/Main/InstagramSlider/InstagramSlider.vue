<template>
  <div class="inst">
    <div class="inst__head">
      <img src="@/assets/images/inst-icon.svg" width="26" alt="" />
      <p>Кукольная вселенная</p>
      <a href="https://instagram.com" class="inst__link">@dollsempire.ru</a>
    </div>
    <div class="inst__slider">
      <Swiper
        @swiper="registerSlider"
        :slides-per-view="4"
        :spaceBetween="8"
        loop
      >
        <SwiperSlide v-for="i in 8" :key="i + 'swiper12'">
          <InstagramSlide />
        </SwiperSlide>
      </Swiper>
      <SliderArrows
        :swiper="swiper"
        top="50%"
        :offset="10"
        is-transform-half
        v-if="swiper"
      />
    </div>
  </div>
</template>

<script>
import SwiperCore, { Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import SliderArrows from '@/components/BaseComponents/SliderArrows'
import InstagramSlide from '@/components/Main/InstagramSlider/InstagramSlide'

SwiperCore.use([Controller])
export default {
  name: 'InstagramSlider',
  components: {
    InstagramSlide,
    SliderArrows,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiper: null,
    }
  },
  methods: {
    registerSlider(swiper) {
      this.swiper = swiper
    },
  },
}
</script>

<style scoped lang="scss">
.inst {
  margin-top: 22px;
  background: #fff;
  padding-bottom: 15px;
  &__slider {
    position: relative;
  }
  &__head {
    height: 61px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      margin: 0 8px;
      color: $text;
      font-size: 18px;
    }
  }
  &__link {
    font-size: 18px;
    color: $blue;
  }
}
</style>
