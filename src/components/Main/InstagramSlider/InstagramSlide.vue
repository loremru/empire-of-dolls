<template>
  <div class="inst-slide">
    <img :src="slide.image" alt="" />
    <div class="inst-slide__info flex aic"></div>
  </div>
</template>

<script>
export default {
  name: 'InstagramSlide',
  props: {
    slide: {
      type: Object,
    },
  },
}
</script>

<style scoped lang="scss">
.inst-slide {
  img {
    width: 100%;
    cursor: pointer;
  }
}
</style>
