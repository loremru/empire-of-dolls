<template>
  <HeaderApp />
  <div class="main-content content">
    <router-view />
    <div style="height: 150vh"></div>
  </div>
  <!--  footer-->
</template>

<script>
import HeaderApp from './components/Main/HeaderApp'
export default {
  components: { HeaderApp },
}
</script>

<style scoped lang="scss">
.main-content {
  margin-top: 12px;
}
</style>
