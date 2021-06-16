<template>
  <div class="connection flex aic">
    <p>Связаться с нами</p>
    <img src="@/assets/images/arrow-down.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: 'ConnectionLink',
}
</script>

<style scoped lang="scss">
.connection {
  cursor: pointer;
  p {
    font-size: 18.5px;
    color: $text;
  }
  img {
    margin-left: 9px;
  }
}
</style>
