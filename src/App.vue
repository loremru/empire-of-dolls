<template>
  <HeaderApp />
  <div class="main-content content">
    <router-view />
    <div style="height: 150vh"></div>
  </div>
  <FooterApp />
</template>

<script>
import HeaderApp from './components/Main/HeaderApp'
import FooterApp from '@/components/Main/Footer/FooterApp'
export default {
  components: { FooterApp, HeaderApp },
}
</script>

<style scoped lang="scss">
.main-content {
  margin-top: 12px;
}
</style>
