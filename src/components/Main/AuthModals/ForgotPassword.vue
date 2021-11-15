<template>
  <div class="login">
    <form class="flex fxdc aic" @submit.prevent="forgotPass">
      <BasicInput
        placeholder="e-mail или телефон"
        v-model:value="formData.email"
        :height="37"
      />
      <BasicButton :height="49" uppercase>восстановить пароль</BasicButton>
    </form>
  </div>
</template>

<script>
import BasicInput from '@/components/BaseComponents/BasicInput'
import BasicButton from '@/components/BaseComponents/BasicButton'
import { changePassword } from '@/hooks/auth'
export default {
  name: 'ForgotPassword',
  components: { BasicButton, BasicInput },
  data() {
    return {
      formData: {
        email: '',
      },
    }
  },
  methods: {
    async forgotPass() {
      try {
        await changePassword(this.formData)
        this.$notify({
          type: 'success',
          title: 'Вы успешно изменили пароль',
        })
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style scoped lang="scss">
.login {
  > .flex > * {
    margin-bottom: 11px;
  }
}
</style>
