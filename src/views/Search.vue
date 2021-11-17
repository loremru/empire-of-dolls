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
      <div class="search-grid" v-if="products">
        <ProductCard
          v-for="product in products"
          :product="product"
          :key="product.pid + 'product-search'"
          :title="product.name"
          @get-update="toggleFavoriteProductStatus"
          @updateProductInCart="updateProductInCart"
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
import { searchProducts } from '@/hooks/search'
export default {
  name: 'Search',
  components: { SortBtn, Sort, ProductCard, Filter },
  data() {
    return {
      isFilterOpen: false,
      filters: { filter1: false, filter2: true },
      products: null,
    }
  },
  mounted() {
    this.updateProducts()
  },
  methods: {
    async updateProducts() {
      if (this.$route.params.id) {
        const queryProducts = await searchProducts(this.$route.params.id, {
          price_start: 500,
          price_end: 1000,
        })
        this.products = queryProducts
      }
    },
    async toggleFavoriteProductStatus(item) {
      let items = this.products.flat()
      const newItem = items.find((prod) => prod.pid == item.pid)
      newItem.favorite = !newItem.favorite
    },
    updateProductInCart(event) {
      this.$emit('updateProductInCart', event)
    },
  },

  setup() {
    return { isMobile }
  },
  //   const route = useRoute()
  //   // const products = ref(null)

  //   // const filters = ref({
  //   //   filter1: false,
  //   //   filter2: true,
  //   // })

  //   onMounted(async () => {
  //     if (route.params.id) {
  //       const queryProducts = await searchProducts(
  //         route.params.id,
  //         this.filters.filter(Boolean)
  //       )
  //       this.products = queryProducts
  //       console.log('query result ', queryProducts)
  //     }
  //   })

  //   return { isMobile, products }
  // },
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
