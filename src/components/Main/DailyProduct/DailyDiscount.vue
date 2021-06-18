<template>
  <div class="daily__img__discount" :style="styles">
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
  background: url('~@/assets/images/discount.svg') center no-repeat;
  background-size: contain;
  p {
    color: #fff;
    font-size: 17.5px;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
    padding: 17px 12px;
  }
}

@media (max-width: $media-mobile) {
  .daily__img__discount {
    p {
      font-size: 14px;
    }
  }
}
</style>
