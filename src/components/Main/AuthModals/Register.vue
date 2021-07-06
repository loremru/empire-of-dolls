<template>
  <div class="login">
    <form class="flex fxdc aic">
      <BasicInput
        placeholder="e-mail"
        type="email"
        v-model:value="formData.email"
        :height="37"
      />
      <BasicInput
        placeholder="пароль"
        type="password"
        v-model:value="formData.password"
        :height="37"
      />
      <div class="login__checkbox">
        <BasicCheckbox
          label="Запомнить меня"
          v-model:value="formData.remember"
          :value="formData.remember"
          :font-size="18"
        />
      </div>
      <BasicButton :height="49" uppercase>Зарегистрироваться</BasicButton>
    </form>
  </div>
</template>

<script>
import BasicInput from '@/components/BaseComponents/BasicInput'
import BasicCheckbox from '@/components/BaseComponents/BasicCheckbox'
import BasicButton from '@/components/BaseComponents/BasicButton'
export default {
  name: 'Register',
  components: { BasicButton, BasicCheckbox, BasicInput },
  data() {
    return {
      formData: {
        email: '',
        password: '',
        remember: false,
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
  &__checkbox {
    width: 100%;
  }
}
</style>
