<template>
  <Modal class-of-modal="connect" :bgZIndex="1000" @close="$emit('close')">
    <div class="connect__body flex fxdc aic">
      <div class="connect__body__content flex fxdc aic jcsa">
        <div class="connect__number">
          <h3>8 911 820 14 59</h3>
          <p>Санкт-Петербург</p>
        </div>
        <div class="connect__mail flex aic jcc">
          <img src="@/assets/images/mail.svg" alt="" />
          <p>Написать письмо</p>
        </div>
      </div>
      <ConnectButtons :buttons="['Жалобы', 'Служба поддержки']" />
    </div>
  </Modal>
</template>

<script>
import Modal from '@/components/Main/Modal'
import ConnectButtons from '@/components/Main/Connection/ConnectButtons'
export default {
  name: 'ConnectionModal',
  components: { ConnectButtons, Modal },
  emits: ['close'],
}
</script>

<style lang="scss">
.connect {
  top: 34px;
  right: 0;
  width: 260px;
  height: 259px;
  z-index: 1001 !important;
}

@media (max-width: $media-mobile) {
  .connect {
    position: fixed !important;
    right: 50%;
    top: 120px;
    transform: translateX(50%);
  }
}
</style>

<style scoped lang="scss">
.connect {
  &__number {
    text-align: center;
    h3 {
      margin: 0;
      color: $pink;
      font-weight: 600;
      font-size: 25px;
    }
  }
  &__body {
    height: 100%;
    overflow: hidden;
    &__content {
      flex-grow: 1;
      margin-top: 25px;
    }
  }
  &__mail {
    img {
      margin-right: 10px;
    }
  }
}
</style>
