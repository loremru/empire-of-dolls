<template>
  <div class="daily__img__discount" :style="styles">
    <img src="@/assets/images/discount.svg" alt="" />
    <p><slot></slot></p>
  </div>
</template>

<script>
export default {
  name: 'DailyDiscount',
  props: {
    styles: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.daily__img__discount {
  position: absolute;
  display: flex;
  img {
    width: 54px;
    height: 54px;
  }
  p {
    position: absolute;
    color: #fff;
    font-size: 16.5px;
    z-index: 2;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
  }
}

@media (max-width: $media-mobile) {
  .daily__img__discount {
    p {
      font-size: 14px;
    }
    img {
      width: 48px;
      height: 48px;
    }
  }
}
</style>
