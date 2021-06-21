<template>
  <img
    src="@/assets/images/logo.svg"
    alt=""
    width="187"
    class="logo"
    @click="$router.push('/')"
  />
</template>

<script>
export default {
  name: 'Logo',
}
</script>

<style scoped lang="scss">
.logo {
  cursor: pointer;
}
@media (max-width: $media-table) {
  .logo {
    width: 140px;
  }
}
@media (max-width: $media-mobile) {
  .logo {
    width: 155px;
  }
}
</style>
