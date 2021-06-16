<template>
  <div class="FooterContacts">
    <a href="tel:+79118201459" class="tel-contact">8 911 820 14 59</a>
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
export default {
  name: 'FooterContacts',
}
</script>

<style scoped lang="scss">
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
</style>
