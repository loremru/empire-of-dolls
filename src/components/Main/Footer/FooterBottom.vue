<template>
  <div class="FooterBottom">
    <div class="footer-bottom-container content">
      <FooterContacts />
      <FooterSubscribeAlert />
      <FooterSubscribeForm />
    </div>
  </div>
</template>

<script>
import FooterContacts from '@/components/Main/Footer/FooterContacts'
import FooterSubscribeAlert from '@/components/Main/Footer/FooterSubscribeAlert'
import FooterSubscribeForm from '@/components/Main/Footer/FooterSubscribeForm'
export default {
  name: 'FooterBottom',
  components: { FooterSubscribeForm, FooterSubscribeAlert, FooterContacts },
}
</script>

<style scoped lang="scss">
.FooterBottom {
  background: #fff;
}
.footer-bottom-container {
  padding-top: 35px;
  padding-bottom: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
