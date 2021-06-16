<template>
  <button
    :style="`width: ${width}px; height:${height}px`"
    class="subscription-button"
  >
    подписаться
  </button>
</template>

<script>
export default {
  name: 'BasicButton',
  props: {
    width: {
      type: Number,
      default: 150,
    },
    height: {
      type: Number,
      default: 38,
    },
  },
}
</script>

<style scoped lang="scss">
.subscription-button {
  background: $pink;
  border: none;
  color: rgba(250, 250, 250, 0.78);
  text-transform: uppercase;
  border-radius: 7px;
  margin-left: 7px;
  cursor: pointer;
}
</style>
