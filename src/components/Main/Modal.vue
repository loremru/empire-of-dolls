<template>
  <div class="bg" @click="$emit('close')" :style="`z-index: ${bgZIndex}`"></div>
  <div class="modal" :class="classOfModal">
    <img
      src="@/assets/images/close.svg"
      alt=""
      class="modal__close"
      @click="$emit('close')"
    />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  emits: ['close'],
  props: {
    classOfModal: {
      type: String,
    },
    bgZIndex: Number,
    noScroll: {
      type: Boolean,
      default: () => true,
    },
  },
  mounted() {
    if (this.noScroll) document.querySelector('body').classList.add('no-scroll')
  },
  beforeUnmount() {
    document.querySelector('body').classList.remove('no-scroll')
  },
}
</script>

<style scoped lang="scss">
.modal {
  z-index: 51;
  position: absolute;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px 0px #0000009e;
  &__close {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
    width: 18px;
  }
}
@media (max-width: $media-mobile) {
  .modal {
    &__close {
      width: 14px;
    }
  }
}
</style>
