<template>
  <div class="flex aifs">
    <Filter v-if="!isMobile || isFilterOpen" @close="isFilterOpen = false" />
    <div class="search-content">
      <div class="flex aic search-sort">
        <SortBtn text="Фильтры" v-if="isMobile" @click="isFilterOpen = true">
          <img src="@/assets/images/filters.svg" alt="" />
        </SortBtn>
        <Sort />
      </div>
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
import Sort from '@/components/Sort/Sort'
import { isMobile } from '@/store/display'
import SortBtn from '@/components/Sort/SortBtn'
export default {
  name: 'Search',
  components: { SortBtn, Sort, ProductCard, Filter },
  data() {
    return {
      isFilterOpen: false,
    }
  },
  setup() {
    return { isMobile }
  },
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

.search-sort {
  margin-bottom: 12px;
}

@media (max-width: $media-desktop) {
  .search-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width: $media-tablet - 100) {
  .search-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: $media-mobile) {
  .search-content {
    margin-left: 0;
  }
  .search-sort {
    justify-content: space-around;
  }
}
</style>
