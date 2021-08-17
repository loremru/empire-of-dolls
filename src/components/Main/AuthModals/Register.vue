<template>
  <div class="login">
    <form class="flex fxdc aic" @submit.prevent="register">
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
          v-model:value="remember"
          :value="remember"
          :font-size="18"
        />
      </div>
      <BasicButton :disabled="loading" :height="49" uppercase
        >Зарегистрироваться</BasicButton
      >
    </form>
  </div>
</template>

<script>
import BasicInput from '@/components/BaseComponents/BasicInput'
import BasicCheckbox from '@/components/BaseComponents/BasicCheckbox'
import BasicButton from '@/components/BaseComponents/BasicButton'
import { register } from '@/hooks/auth'
export default {
  name: 'Register',
  components: { BasicButton, BasicCheckbox, BasicInput },
  emits: ['close'],
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
      remember: false,
      loading: false,
    }
  },
  methods: {
    async register() {
      try {
        this.loading = true
        await register(this.formData)
        this.$notify({
          type: 'success',
          title: 'Вы успешно зарегестрировались',
        })
        this.$emit('close')
      } catch (e) {
        console.log(e)
      }
      this.loading = false
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
