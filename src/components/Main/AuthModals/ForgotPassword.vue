<template>
  <div class="login">
    <form class="flex fxdc aic">
      <BasicInput
        placeholder="e-mail или телефон"
        v-model:value="formData.input"
        :height="37"
      />
      <BasicButton :height="49" uppercase>восстановить пароль</BasicButton>
    </form>
  </div>
</template>

<script>
import BasicInput from '@/components/BaseComponents/BasicInput'
import BasicButton from '@/components/BaseComponents/BasicButton'
export default {
  name: 'ForgotPassword',
  components: { BasicButton, BasicInput },
  data() {
    return {
      formData: {
        input: '',
      },
    }
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
