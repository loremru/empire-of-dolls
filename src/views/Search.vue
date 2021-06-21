<template>
  <div class="flex aifs">
    <Filter />
    <div class="search-content">
      <div class="search-grid">
        <ProductCard
          v-for="i in 20"
          :key="i + 'product-search'"
          title="Кукла Барби, игровой набор"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Filter from '@/components/Search/Filter/Filter'
import ProductCard from '@/components/Main/ProductCard/ProductCard'
export default {
  name: 'Search',
  components: { ProductCard, Filter },
}
</script>

<style scoped lang="scss">
.search-content {
  margin-left: 8px;
  width: 100%;
}
.search-grid {
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
