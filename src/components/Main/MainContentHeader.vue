<template>
  <div class="main-content__header flex jcsb aic">
    <CatalogMini />
    <ConnectionLink />
  </div>
</template>

<script>
import ConnectionLink from '@/components/Main/Connection/ConnectionLink'
import CatalogMini from '@/components/Main/Catalog/CatalogMini'
export default {
  name: 'MainContentHeader',
  components: { CatalogMini, ConnectionLink },
}
</script>

<style scoped lang="scss">
.main-content__header {
  margin-bottom: 12px;
}
</style>
