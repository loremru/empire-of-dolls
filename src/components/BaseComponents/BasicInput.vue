<template>
  <input
    :style="`width: ${width}px; height:${height}px`"
    class="subscription-email"
    type="email"
    placeholder="example@mail.ru"
    required
  />
</template>

<script>
export default {
  name: 'BasicInput',
  props: {
    width: {
      type: Number,
      default: 350,
    },
    height: {
      type: Number,
      default: 38,
    },
  },
}
</script>

<style scoped lang="scss">
.subscription-email {
  border-radius: 7px;
  border: 1px solid $border-color;
  padding-left: 12px;
}
</style>
