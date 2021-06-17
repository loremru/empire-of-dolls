<template>
  <div class="main-content__header flex jcsb aic">
    <button>asd</button>
    <ConnectionLink />
  </div>
</template>

<script>
import ConnectionLink from '@/components/Main/Connection/ConnectionLink'
export default {
  name: 'MainContentHeader',
  components: { ConnectionLink },
}
</script>

<style scoped lang="scss">
.main-content__header {
  margin-bottom: 12px;
}
</style>
