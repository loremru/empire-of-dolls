<template>
  <AuthModal
    v-if="authModal === 'reg'"
    title="Регистрация"
    @close="closeAuthModal"
  >
    <template #content><Register @close="closeAuthModal" /></template>
    <template #buttons>
      <ConnectButtons
        :buttons="['Войти']"
        @click="openAuthModal('login')"
        :font-size="17"
      />
    </template>
  </AuthModal>
  <AuthModal
    v-if="authModal === 'login'"
    title="Вход на сайт"
    @close="closeAuthModal"
  >
    <template #content><Login /></template>
    <template #buttons>
      <ConnectButtons
        :buttons="['Восстановить пароль', 'Регистрация']"
        :font-size="17"
        @click="
          (val) => {
            if (val === 1) openAuthModal('reg')
            else openAuthModal('forgot')
          }
        "
      />
    </template>
  </AuthModal>
  <AuthModal
    v-if="authModal === 'forgot'"
    title="Восстановление пароля"
    @close="closeAuthModal"
  >
    <template #content><ForgotPassword /></template>
    <template #buttons>
      <ConnectButtons
        :buttons="['Вход', 'Регистрация']"
        :font-size="17"
        @click="
          (val) => {
            if (val === 1) openAuthModal('reg')
            else openAuthModal('login')
          }
        "
      />
    </template>
  </AuthModal>
</template>

<script>
import Register from '@/components/Main/AuthModals/Register'
import AuthModal from '@/components/Main/AuthModals/AuthModal'
import ConnectButtons from '@/components/Main/Connection/ConnectButtons'
import Login from '@/components/Main/AuthModals/Login'
import ForgotPassword from '@/components/Main/AuthModals/ForgotPassword'
export default {
  name: 'AuthModals',
  components: { ForgotPassword, Login, ConnectButtons, AuthModal, Register },
  props: {
    authModal: String,
  },
  emits: ['authModalChange'],
  methods: {
    openAuthModal(modal) {
      this.$emit('authModalChange', modal)
    },
    closeAuthModal() {
      this.$emit('authModalChange', '')
    },
  },
}
</script>

<style scoped></style>
