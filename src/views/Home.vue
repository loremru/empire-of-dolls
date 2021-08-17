<template>
  <div>
    <template v-if="!isMobile">
      <MainSlider />
      <DailyProduct />
      <MainSection title="НЕДОРОГИЕ КУКЛЫ И ИГРУШКИ">
        <div class="product-slider">
          <Swiper
            :spaceBetween="8"
            :slides-per-view="4"
            @swiper="(swiper) => registerSliders(0, swiper)"
            loop
          >
            <SwiperSlide
              v-for="(prod, i) in popularProducts[0]"
              :key="i + 'swiper'"
            >
              <ProductCard :product="prod" />
            </SwiperSlide>
          </Swiper>
          <SliderArrows
            :swiper="sliders[0]"
            :offset="10"
            top="111px"
            v-if="sliders[0]"
          />
        </div>
      </MainSection>
      <MainSection>
        <div class="product-slider">
          <Swiper
            :spaceBetween="8"
            :slides-per-view="4"
            @swiper="(swiper) => registerSliders(1, swiper)"
            loop
          >
            <SwiperSlide
              v-for="(prod, i) in popularProducts[1]"
              :key="i + 'swiper1'"
            >
              <ProductCard :product="prod" />
            </SwiperSlide>
          </Swiper>
          <SliderArrows
            :swiper="sliders[1]"
            :offset="10"
            top="111px"
            v-if="sliders[1]"
          />
        </div>
      </MainSection>
      <MainSection title="популярные товары">
        <div class="product-slider">
          <Swiper
            :slides-per-view="4"
            :spaceBetween="8"
            @swiper="(swiper) => registerSliders(2, swiper)"
            loop
          >
            <SwiperSlide
              v-for="(prod, i) in popularProducts[2]"
              :key="i + 'swiper2'"
            >
              <ProductCard :product="prod" />
            </SwiperSlide>
          </Swiper>
          <SliderArrows
            :swiper="sliders[2]"
            :offset="10"
            top="111px"
            v-if="sliders[2]"
          />
        </div>
      </MainSection>
      <InstagramSlider />
    </template>
    <template v-else>
      <div class="flex jcc contact-mob">
        <ConnectionLink />
      </div>
      <CityMobile />
      <div id="searchMobile">
        <SearchHeader is-mobile-search />
      </div>
      <SliderWithDots v-if="dailyProducts.length">
        <SwiperSlide
          v-for="i in dailyProducts"
          :key="i.data.pid + 'daily-mob'"
          style="height: 100%"
        >
          <div class="dots-slider__item" style="height: 100%">
            <DailyProductMobile :product="i.data" />
          </div>
        </SwiperSlide>
      </SliderWithDots>
      <SearchCityBtn />
      <CategoryMobile
        v-for="i in categories"
        :category="i"
        :key="i.cid + 'cat'"
      />
    </template>
  </div>
</template>

<script>
import MainSlider from '@/components/Main/MainSlider'
import DailyProduct from '@/components/Main/DailyProduct/DailyProduct'
import MainSection from '@/components/Main/MainSection'
import ProductCard from '@/components/Main/ProductCard/ProductCard'
import SwiperCore, { Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import SliderArrows from '@/components/BaseComponents/SliderArrows'
import InstagramSlider from '@/components/Main/InstagramSlider/InstagramSlider'
import { isMobile } from '@/store/display'
import ConnectionLink from '@/components/Main/Connection/ConnectionLink'
import CityMobile from '@/components/Main/City/CityMobile'
import SearchHeader from '@/components/Main/Header/SearchHeader'
import DailyProductMobile from '@/components/Main/DailyProduct/DailyProductMobile'
import SliderWithDots from '@/components/Main/SliderWithDots'
import SearchCityBtn from '@/components/Main/SearchCityBtn'
import CategoryMobile from '@/components/Main/CategoryMobile'
import {
  getCategories,
  getDailyProducts,
  getPopularProducts,
} from '@/hooks/main'
SwiperCore.use([Controller])
export default {
  name: 'Home',
  components: {
    CategoryMobile,
    SearchCityBtn,
    SliderWithDots,
    DailyProductMobile,
    SearchHeader,
    CityMobile,
    ConnectionLink,
    InstagramSlider,
    SliderArrows,
    ProductCard,
    MainSection,
    DailyProduct,
    MainSlider,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      sliders: [],
      dailyProducts: [],
      categories: [],

      popularProducts: [],
    }
  },
  setup() {
    return {
      isMobile,
    }
  },
  async mounted() {
    const array = await getPopularProducts()
    this.popularProducts.push(array.splice(0, 4))
    this.popularProducts.push(array.splice(0, 4))
    this.popularProducts.push(array.splice(0, 4))
    console.log(this.popularProducts)
    if (isMobile.value) {
      this.dailyProducts = await getDailyProducts()
      this.categories = await getCategories()
      console.log(this.categories)
    }
  },
  methods: {
    registerSliders(idx, swiper) {
      this.sliders[idx] = swiper
    },
    slidePrev(idx) {
      this.sliders[idx].slidePrev()
    },
    slideNext(idx) {
      this.sliders[idx].slideNext()
    },
  },
}
</script>

<style lang="scss">
.product-slider {
  position: relative;
}
.contact-mob {
  margin-bottom: 12px;
}
.dots-slider__item {
  display: flex;
  justify-content: center;
}
</style>
