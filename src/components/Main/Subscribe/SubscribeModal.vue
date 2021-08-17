<template>
  <Modal class-of-modal="sub-mod" @close="$emit('close')">
    <form @submit.prevent="submit" class="sub-modal flex fxdc jcsb aic">
      <h3 class="sub-modal__head">
        Наши друзья первыми узнают о распродажах и новинках
      </h3>
      <p class="sub-modal__text txt">Куда присылать новости?</p>
      <BasicInput
        v-model:value="email"
        placeholder="Email"
        type="email"
        required
        :height="36"
      />
      <BasicButton :height="49" uppercase>Подписаться</BasicButton>
    </form>
  </Modal>
</template>

<script>
import Modal from '@/components/Main/Modal'
import BasicInput from '@/components/BaseComponents/BasicInput'
import BasicButton from '@/components/BaseComponents/BasicButton'
import { subscribeToNews } from '@/hooks/main'
export default {
  name: 'SubscribeModal',
  components: { BasicButton, BasicInput, Modal },
  emits: ['close'],
  data() {
    return {
      email: '',
    }
  },
  methods: {
    async submit() {
      try {
        await subscribeToNews(this.email)
        this.$notify({
          title: 'Вы подписались на новости!!',
          type: 'success',
        })
        this.$emit('close')
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style scoped lang="scss">
.sub-modal {
  padding: 44px 25px 25px;
  &__head {
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
    margin: 0 auto 15px;
    color: #333;
  }
  &__text {
    margin-bottom: 9px;
  }
  .subscription-button {
    margin-top: 9px;
    margin-left: 0;
  }
}
</style>
