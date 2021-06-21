<template>
  <div class="main-content__header flex jcsb aic">
    <div class="flex aic">
      <CatalogMini />
      <div class="main-content__breadcrumb">
        <Breadcrumb
          :links-list="breadcrumbArray"
          v-if="breadcrumbArray.length"
        />
      </div>
    </div>
    <ConnectionLink />
  </div>
</template>

<script>
import ConnectionLink from '@/components/Main/Connection/ConnectionLink'
import CatalogMini from '@/components/Main/Catalog/CatalogMini'
import Breadcrumb from '@/components/BaseComponents/Breadcrumb'
export default {
  name: 'MainContentHeader',
  components: { Breadcrumb, CatalogMini, ConnectionLink },
  props: {
    breadcrumbArray: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped lang="scss">
.main-content {
  &__header {
    margin-bottom: 12px;
  }
  &__breadcrumb {
    margin-left: 40px;
  }
}
</style>
