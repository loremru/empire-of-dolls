<template>
  <div class="notification flex">
    <slot></slot>
    <div class="notification__circle">
      <span>{{ amount }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotificationItem',
  props: {
    amount: {
      type: Number,
      default: 4,
    },
  },
}
</script>

<style scoped lang="scss">
.notification {
  position: relative;
  &__circle {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: $super-red;
    border-radius: 100%;
    width: 22px;
    height: 22px;
    text-align: center;
    span {
      color: #fff;
      font-size: 14px;
      display: block;
      transform: translateY(1px);
    }
  }
}

@media (max-width: $media-tablet) {
  .notification__circle {
    width: 17px;
    height: 17px;
    top: -5px;
    right: -5px;
    span {
      font-size: 10px;
    }
  }
}
</style>
