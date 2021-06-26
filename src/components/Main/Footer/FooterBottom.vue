<template>
  <div v-if="!isMobile" class="FooterBottom">
    <div class="footer-bottom-container content">
      <FooterContacts v-if="isDesktop" />
      <FooterSubscribeAlert />
      <FooterSubscribeForm />
    </div>
    <div v-if="isTablet" class="content">
      <SubscriptionFormText />
      <FooterContacts v-if="isTablet" />
    </div>
  </div>
  <div v-if="isMobile" class="MobileFooterBottom">
    <a href="#" class="fullWebsiteLink">Перейти на полную версию сайта</a><br />
    <span class="itIsNotPublicOffer"
      >Предложение не является публичной офертой</span
    >
    <FooterContacts />
  </div>
</template>

<script>
import FooterContacts from '@/components/Main/Footer/FooterContacts'
import FooterSubscribeAlert from '@/components/Main/Footer/FooterSubscribeAlert'
import FooterSubscribeForm from '@/components/Main/Footer/FooterSubscribeForm'
import { isDesktop, isMobile, isTablet } from '@/store/display'
import SubscriptionFormText from '@/components/Main/Footer/SubscriptionFormText'
export default {
  name: 'FooterBottom',
  components: {
    SubscriptionFormText,
    FooterSubscribeForm,
    FooterSubscribeAlert,
    FooterContacts,
  },
  setup() {
    return { isDesktop: isDesktop, isMobile: isMobile, isTablet: isTablet }
  },
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
.MobileFooterBottom {
  background: #fff;
  text-align: center;
  padding-top: 30px;
}
.fullWebsiteLink {
  color: $text;
  size: 13px;
  margin-bottom: 13px;
  display: inline-block;
}
.itIsNotPublicOffer {
  font-size: 13px;
  font-weight: 500;
  color: #000;
}
</style>
