<template>
  <div class="productSlide round-block">
    <img src="@/assets/images/product-slide.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'ProductVerticalSlide',
}
</script>

<style scoped lang="scss">
.productSlide {
  height: 134px;
  width: 134px;
  display: flex;
  align-items: flex-end;
}
@media (max-width: $media-tablet) {
  .productSlide {
    height: auto;
    width: auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
