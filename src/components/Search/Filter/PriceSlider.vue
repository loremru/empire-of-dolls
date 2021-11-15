<template>
  <div class="price-slider">
    <Slider v-model="price" :max="max" :tooltips="false" />
    <div class="price-slider__inputs flex">
      <BasicInput
        :height="25"
        align="right"
        extra="от"
        :font-size="15"
        v-model:value="price[0]"
        style="margin-right: 6px"
        @update:value="test"
      />
      <BasicInput
        :height="25"
        extra="до"
        align="right"
        :font-size="15"
        v-model:value="price[1]"
        @update:value="test"
      />
    </div>
  </div>
</template>

<script>
import Slider from '@vueform/slider'
import '@vueform/slider/themes/default.css'
import BasicInput from '@/components/BaseComponents/BasicInput'
export default {
  name: 'PriceSlider',
  components: { BasicInput, Slider },
  data() {
    return {
      max: 64000,
      price: [0, 64000],
    }
  },
  methods: {
    test(e) {
      console.log(e)
    },
  },
}
</script>

<style lang="scss">
.slider-connect {
  background-color: $border-color !important;
}
</style>

<style scoped lang="scss">
.price-slider {
  margin-top: 15px;
  &__inputs {
    margin-top: 15px;
  }
}
</style>
