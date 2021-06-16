<template>
  <Modal class-of-modal="cityModal" @close="$emit('close')">
    <div class="cityModal__content flex fxdc">
      <h3 class="cityModal__head">Выберите свой город</h3>

      <div class="flex fxdc fxww" style="height: 170px" v-if="!fullModal">
        <p>Санкт-Петербург</p>
        <p>Москва</p>
        <p>Великий Новгород</p>
        <p>Выборг</p>
        <p>Гатчина</p>
        <p>Луга</p>
        <p>Кингисепп</p>
        <p>Петрозаводск</p>
        <p>Тверь</p>
        <p>Калуга</p>
        <p>Владимир</p>
        <p>Рязань</p>
        <p>Тула</p>
      </div>

      <div class="citySlider" v-else>
        <SearchHeader placeholder="Введите название города" />
        <div class="citySlider__wrapper">
          <img
            src="@/assets/images/arrow-city.svg"
            alt=""
            class="arrow arrow_prev"
            style="transform: rotateZ(180deg)"
            @click="prevSlide"
          />
          <Swiper
            ref="swiperCity"
            @swiper="setControlledSwiper"
            :width="430"
            loop
          >
            <SwiperSlide
              ><div class="city-slide flex fxdc fxww">
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
              </div></SwiperSlide
            >
            <SwiperSlide
              ><div class="city-slide flex fxdc fxww">
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
              </div></SwiperSlide
            >
            <SwiperSlide
              ><div class="city-slide flex fxdc fxww">
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
              </div></SwiperSlide
            >
            <SwiperSlide
              ><div class="city-slide flex fxdc fxww">
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
              </div></SwiperSlide
            >
            <SwiperSlide
              ><div class="city-slide flex fxdc fxww">
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
                <div class="city-slide__item">
                  <p class="city-slide__letter">А</p>
                  <p>Абакан</p>
                  <p>Альметьевск</p>
                  <p>Артем</p>
                </div>
              </div></SwiperSlide
            >
          </Swiper>
          <img
            src="@/assets/images/arrow-city.svg"
            alt=""
            class="arrow arrow_next"
            @click="nextSlide"
          />
        </div>
      </div>

      <a
        href="#"
        class="cityModal__showAll"
        v-if="!fullModal"
        @click.prevent="fullModal = true"
        >Показать все города</a
      >
      <a
        href="#"
        class="cityModal__showAll"
        style="margin: 0 auto; display: block"
        v-else
        @click.prevent="fullModal = false"
        >Скрыть все города</a
      >
    </div>
  </Modal>
</template>

<script>
import Modal from '@/components/Main/Modal'
import SwiperCore, { Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import SearchHeader from '@/components/Main/SearchHeader'

SwiperCore.use([Controller])

export default {
  name: 'CityModal',
  components: { SearchHeader, Modal, Swiper, SwiperSlide },
  emits: ['close'],
  data() {
    return {
      fullModal: true,
      swiper: null,
    }
  },
  methods: {
    prevSlide() {
      this.swiper.slidePrev()
    },
    nextSlide() {
      this.swiper.slideNext()
    },
    setControlledSwiper(swiper) {
      this.swiper = swiper
    },
  },
}
</script>

<style>
.cityModal {
  width: 510px;
  left: 0;
  top: 50px;
  overflow: hidden;
}
.citySlider .search {
  margin: 25px 0 0;
}
</style>

<style scoped lang="scss">
.citySlider__wrapper {
  margin: 15px 0;
  position: relative;
  .arrow {
    position: absolute;
    top: 50%;
    cursor: pointer;
    z-index: 60;
    &_prev {
      left: 0;
    }
    &_next {
      right: 0;
    }
  }
}
.cityModal {
  &__head {
    text-align: center;
    margin: 0;
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;
  }
  &__content {
    padding: 25px 40px 35px;
    height: 100%;
    width: 100%;
    overflow: hidden;
    > .flex {
      padding-top: 35px;
      height: 81%;
      p {
        line-height: 1.1;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  &__showAll {
    text-decoration: underline;
    color: #000;
    font-size: 15px;
    line-height: 1.2;
  }
  .slider {
    width: 100%;
  }
}
.city-slide {
  height: 400px;
  align-items: center;
  &__item {
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    p {
      line-height: 1.1;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  &__letter {
    color: $pink;
    font-weight: 500;
    cursor: auto;
    text-decoration: none !important;
  }
}
</style>
