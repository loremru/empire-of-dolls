<template>
  <Modal @close="$emit('close')" class-of-modal="authModal">
    <div class="auth">
      <div class="auth__content">
        <h3>{{ title }}</h3>
        <slot name="content"></slot>
      </div>
      <slot name="buttons"></slot>
    </div>
  </Modal>
</template>

<script>
import Modal from '@/components/Main/Modal'
export default {
  name: 'AuthModal',
  components: { Modal },
  emits: ['close'],
  props: {
    title: String,
  },
}
</script>

<style lang="scss">
.authModal {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

@media (max-width: $media-mobile) {
  .authModal {
    width: 95%;
  }
}
</style>

<style scoped lang="scss">
.auth {
  width: 500px;
  &__content {
    padding: 45px 74px 10px;
    h3 {
      text-align: center;
      margin-top: 0;
      margin-bottom: 20px;
      font-size: 20.5px;
      font-weight: 500;
      line-height: 1;
      color: #333;
    }
  }
}
@media (max-width: $media-mobile) {
  .auth {
    width: auto;
    &__content {
      padding: 45px 40px 10px;
    }
  }
}
</style>
