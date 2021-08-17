<template>
  <div class="productSlide round-block">
    <img :src="img" alt="" />
  </div>
</template>

<script>
export default {
  name: 'ProductVerticalSlide',
  props: {
    img: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.productSlide {
  height: 134px;
  width: 134px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  img {
    width: 90%;
    height: 90%;
  }
}
@media (max-width: $media-tablet) {
  .productSlide {
    height: auto;
    width: auto;
  }
}
</style>
