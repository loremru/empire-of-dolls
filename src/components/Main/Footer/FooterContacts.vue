<template>
  <div class="FooterContacts">
    <a v-if="!isMobile" href="tel:+79118201459" class="tel-contact"
      >8 911 820 14 59</a
    >
    <div class="Footer__socials">
      <a href="#" target="_blank"
        ><img src="@/assets/images/telegram.svg" alt=""
      /></a>
      <a href="#" target="_blank"
        ><img src="@/assets/images/viber.svg" alt=""
      /></a>
      <a href="#" target="_blank"
        ><img src="@/assets/images/whatsapp.svg" alt=""
      /></a>
    </div>
  </div>
</template>

<script>
import { isMobile } from '@/store/display'

export default {
  name: 'FooterContacts',
  setup() {
    return { isMobile: isMobile }
  },
}
</script>

<style scoped lang="scss">
.FooterContacts {
  min-width: 185px;
  padding: 0 15px;
}
.Footer__socials {
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: auto;
  a {
    height: 24px;
    display: block;
    margin: 5px 0;
  }
}
.tel-contact {
  font-size: 20px;
  font-weight: 600;
  color: $text;
}
@media (max-width: $media-tablet) {
  .FooterContacts {
    display: flex;
    padding: 25px 0;
    justify-content: space-around;
  }
  .Footer__socials {
    width: unset;
    margin: 0 10px;
    a {
      margin: 5px 10px;
    }
  }
}
</style>
