<template>
  <div class="FooterBottom">
    <div class="footer-bottom-container">
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
  width: 80%;
  margin: auto;
  padding: 35px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
