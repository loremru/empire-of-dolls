<template>
  <button
    class="subscription-button"
    :class="{ 'subscription-button_disabled': disabled }"
    :style="`height: ${height}px;` + (uppercase && `text-transform: uppercase`)"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BasicButton',
  props: {
    height: {
      type: Number,
      default: 39,
    },
    uppercase: Boolean,
    disabled: Boolean,
  },
}
</script>

<style scoped lang="scss">
.subscription-button {
  background: $pink;
  border: none;
  color: #fafafa;
  border-radius: 7px;
  cursor: pointer;
  padding: 0 20px;
  font-size: 15px;
  &_disabled {
    background: #d043a940;
  }
}

@media (max-width: $media-tablet) {
  .subscription-button {
    font-size: 13px;
  }
}

@media (max-width: $media-mobile) {
  .subscription-button {
    font-size: 13px;
  }
}
</style>
