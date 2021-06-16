<template>
  <div class="bg" @click="$emit('close')"></div>
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
  }
}
</style>
