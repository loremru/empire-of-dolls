<template>
  <BreadcrumbContainer v-if="!isTablet">
    <Breadcrumb :links-list="breadcrumbs" />
  </BreadcrumbContainer>
  <template v-if="!isMobile && product">
    <CategorySlider :slides-desktop="7" />
    <div class="product__content flex aic">
      <ProductPreview :img="product.image" />
      <div class="product__slider" v-if="isDesktop">
        <VerticalSlider
          :array-length="product.gallery.length"
          @changeIdx="changeIdx"
        >
          <SwiperSlide
            v-for="(img, idx) in product.gallery"
            :key="idx + '-productSldie'"
          >
            <ProductVerticalSlide :img="img" />
          </SwiperSlide>
        </VerticalSlider>
      </div>
      <div class="product__info">
        <ProductInfo :product="product" />
        <ProductTabletSlider v-if="isTablet">
          <SwiperSlide
            v-for="(img, idx) in product.gallery"
            :key="idx + '-productTablet'"
          >
            <ProductVerticalSlide :img="img" />
          </SwiperSlide>
        </ProductTabletSlider>
      </div>
    </div>
    <p class="product__name">
      {{ product.description }}
    </p>
    <!--    <MainSection title="ВАМ МОЖЕТ БЫТЬ ИНТЕРЕСНО">-->
    <!--      <div class="product-slider">-->
    <!--        <Swiper-->
    <!--          :spaceBetween="8"-->
    <!--          :slides-per-view="4"-->
    <!--          @swiper="(swiper) => registerSliders(0, swiper)"-->
    <!--          loop-->
    <!--        >-->
    <!--          <SwiperSlide v-for="i in 8" :key="i + 'swiper'">-->
    <!--            <ProductCard title="Кукла Барби, игровой набор" />-->
    <!--          </SwiperSlide>-->
    <!--        </Swiper>-->
    <!--        <SliderArrows-->
    <!--          :swiper="sliders[0]"-->
    <!--          :offset="10"-->
    <!--          top="111px"-->
    <!--          v-if="sliders[0]"-->
    <!--        />-->
    <!--      </div>-->
    <!--    </MainSection>-->
    <!--    <MainSection title="недавно просмотренные">-->
    <!--      <div class="product-slider">-->
    <!--        <Swiper-->
    <!--          :spaceBetween="8"-->
    <!--          :slides-per-view="4"-->
    <!--          @swiper="(swiper) => registerSliders(1, swiper)"-->
    <!--          loop-->
    <!--        >-->
    <!--          <SwiperSlide v-for="i in 8" :key="i + 'swiper'">-->
    <!--            <ProductCard title="Кукла Барби, игровой набор" />-->
    <!--          </SwiperSlide>-->
    <!--        </Swiper>-->
    <!--        <SliderArrows-->
    <!--          :swiper="sliders[1]"-->
    <!--          :offset="10"-->
    <!--          top="111px"-->
    <!--          v-if="sliders[1]"-->
    <!--        />-->
    <!--      </div>-->
    <!--    </MainSection>-->
  </template>
  <template v-else-if="product">
    <div class="round-block" style="margin-bottom: 10px; padding-top: 10px">
      <MobileProductSlider :gallery="[product.image, ...product.gallery]" />
      <MobileProductInfo :product="product" />
    </div>
  </template>
</template>

<script>
import Breadcrumb from '@/components/BaseComponents/Breadcrumb'
import BreadcrumbContainer from '@/components/BaseComponents/BreadcrumbContainer'
import { isDesktop, isMobile, isTablet } from '@/store/display'
import CategorySlider from '@/components/Search/Category/CategorySlider'
import VerticalSlider from '@/components/Product/VerticalSlide/VerticalSlider'
import ProductVerticalSlide from '@/components/Product/VerticalSlide/ProductVerticalSlide'
import ProductPreview from '@/components/Product/ProductPreview'
import ProductInfo from '@/components/Product/ProductInfo/ProductInfo'
// import MainSection from '@/components/Main/MainSection'
// import ProductCard from '@/components/Main/ProductCard/ProductCard'
// import SliderArrows from '@/components/BaseComponents/SliderArrows'
import SwiperCore, { Controller } from 'swiper'
import { SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import ProductTabletSlider from '@/components/Product/ProductTabletSlider'
import MobileProductSlider from '@/components/Product/Mobile/MobileProductSlider'
import MobileProductInfo from '@/components/Product/Mobile/MobileProductInfo'
import { breadcrumbs } from '@/store/main'
import { getCurrentProduct } from '@/hooks/main'
import { parseBreadCrumbs } from '@/plugins/makeBreadcrumbs'

SwiperCore.use([Controller])

export default {
  name: 'Product',
  components: {
    MobileProductInfo,
    MobileProductSlider,
    ProductTabletSlider,
    // SliderArrows,
    // ProductCard,
    // MainSection,
    ProductInfo,
    ProductPreview,
    ProductVerticalSlide,
    VerticalSlider,
    CategorySlider,
    BreadcrumbContainer,
    Breadcrumb,
    // Swiper,
    SwiperSlide,
  },
  data() {
    return { sliders: [], product: null }
  },
  setup() {
    return { isTablet, isMobile, isDesktop, breadcrumbs }
  },
  async mounted() {
    await this.loadPage()
  },
  watch: {
    async $route() {
      await this.loadPage()
    },
  },
  methods: {
    changeIdx(idx) {
      console.log(idx)
    },
    registerSliders(idx, swiper) {
      this.sliders[idx] = swiper
    },
    slidePrev(idx) {
      this.sliders[idx].slidePrev()
    },
    slideNext(idx) {
      this.sliders[idx].slideNext()
    },

    async loadPage() {
      const { breadcrumbs, product } = await getCurrentProduct(
        this.$route.params.id
      )
      this.product = product
      parseBreadCrumbs(breadcrumbs)
    },
  },
}
</script>

<style scoped lang="scss">
.product {
  &__content {
    height: 372px;
  }
  &__slider {
    margin: 0 8px;
  }
  &__name {
    margin: 21px 0;
    font-size: 18px;
    line-height: 1;
    max-width: 640px;
  }
  &-slider {
    position: relative;
  }
  &__info {
    flex-grow: 1;
    height: 100%;
  }
}

@media (max-width: $media-tablet) {
  .product {
    &__content {
      height: auto;
      .preview {
        margin-right: 9px;
        width: 50% !important;
      }
    }
    &__info {
      width: 50%;
    }
  }
}
</style>
