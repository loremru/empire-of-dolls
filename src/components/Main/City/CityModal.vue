<template>
  <Modal class-of-modal="cityModal" @close="$emit('close')">
    <div class="cityModal__content flex fxdc">
      <h3 class="cityModal__head">Выберите свой город</h3>
      <div class="citySlider">
        <SearchHeader
          placeholder="Введите название города"
          @search="searchCityByString"
        />
        <div v-if="foundCities">
          <span style="display: inline-block; margin-top: 10px"
            >Название города</span
          >
          <select
            v-model="selectedCity"
            v-if="foundCities"
            style="margin-top: 10px; width: 100%"
            @change="updateCityById"
          >
            <option disabled value="">Выберите город</option>
            <option v-for="city in foundCities" :key="city.id" :value="city">
              {{ city.name }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from '@/components/Main/Modal'
import SearchHeader from '@/components/Main/Header/SearchHeader'
import { searchCityByName, updateCityById } from '@/hooks/main'

export default {
  name: 'CityModal',
  components: { SearchHeader, Modal },
  emits: ['close', 'onCitySelect', 'getUserData'],
  data() {
    return {
      fullModal: false,
      swiper: null,
      selectedCity: null,
      foundCities: null,
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
    async searchCityByString(city) {
      this.foundCities = (await searchCityByName(city)).city_list
    },
    async updateCityById() {
      await updateCityById(this.selectedCity.id)
      this.$emit('close')
      this.$emit('getUserData')
      this.$router.go()
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
