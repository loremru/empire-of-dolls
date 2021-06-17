<template>
  <div>
    <MainSlider />
    <DailyProduct />
  </div>
</template>

<script>
import MainSlider from '@/components/Main/MainSlider'
import DailyProduct from '@/components/Main/DailtyProduct/DailyProduct'
export default {
  name: 'Home',
  components: { DailyProduct, MainSlider },
}
</script>
