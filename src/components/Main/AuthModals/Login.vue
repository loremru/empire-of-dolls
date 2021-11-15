<template>
  <div class="login">
    <form class="flex fxdc aic" @submit.prevent="submit">
      <BasicInput
        placeholder="e-mail"
        type="email"
        v-model:value="formData.login"
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
          v-model:value="remember"
          :value="remember"
          :font-size="18"
        />
      </div>
      <BasicButton :height="49" :disabled="loading" uppercase
        >Войти</BasicButton
      >
    </form>
  </div>
</template>

<script>
import BasicInput from '@/components/BaseComponents/BasicInput'
import BasicCheckbox from '@/components/BaseComponents/BasicCheckbox'
import BasicButton from '@/components/BaseComponents/BasicButton'
import { login } from '@/hooks/auth'
export default {
  name: 'Login',
  components: { BasicButton, BasicCheckbox, BasicInput },
  emits: ['close'],
  data() {
    return {
      formData: {
        login: '',
        password: '',
      },
      remember: false,
      loading: false,
    }
  },
  methods: {
    async submit() {
      if (!this.loading) {
        try {
          this.loading = true
          await login(this.formData)
          this.$emit('close')
          this.$emit('login')
        } catch (e) {
          console.log(e)
        } finally {
          this.loading = false
        }
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
  &__checkbox {
    width: 100%;
  }
}
</style>
