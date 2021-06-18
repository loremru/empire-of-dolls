<template>
  <Modal class-of-modal="connect" @close="$emit('close')">
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
      <div class="connect__buttons">
        <button>Жалобы</button>
        <button>Служба поддержки</button>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from '@/components/Main/Modal'
export default {
  name: 'ConnectionModal',
  components: { Modal },
  emits: ['close'],
}
</script>

<style lang="scss">
.connect {
  top: 34px;
  right: 0;
  width: 260px;
  height: 259px;
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
  &__buttons {
    height: 55px;
    border-top: 1px solid #e0d1d9;
    width: 100%;
    display: flex;
    button {
      cursor: pointer;
      padding: 17px 17px 25px 17px;
      color: #000;
      background-color: transparent;
      border: none;
      flex-grow: 1;
      transition: 0.2s;
      &:first-child {
        border-right: 1px solid #e0d1d9;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
  }
}
</style>
