<template>
  <div class="FooterSubscribeAlert">
    <img src="@/assets/images/newsSubs.svg" alt="newsSubscribe" />
    <span class="subscribe-alert-text"
      >Подпишитесь на акции и специальные <br />предложения!</span
    >
  </div>
</template>

<script>
export default {
  name: 'FooterSubscribeAlert',
}
</script>

<style scoped lang="scss">
.FooterSubscribeAlert {
  display: flex;
  align-items: center;
}
.subscribe-alert-text {
  font-size: 20px;
  font-weight: 500;
  margin-left: 20px;
  line-height: 1;
}
</style>
