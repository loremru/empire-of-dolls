<template>
  <div>
    <div class="bg" @click="$emit('close')"></div>
    <div class="popular">
      <div class="content flex aifs">
        <div class="popular__req">
          <h4 class="popular__req__head">Популярные запросы</h4>
          <p class="txt" v-for="(i, idx) in queries" :key="idx">
            {{ i.query_name }}
          </p>
        </div>
        <div class="popular__body">
          <div class="popular__body__head flex aic jcsb">
            <h3>Выбор покупателей</h3>
            <img
              src="@/assets/images/close.svg"
              alt=""
              class="popular__close"
              width="18"
              @click="$emit('close')"
            />
          </div>
          <div class="popular__body__products" @click="$emit('close')">
            <ProductCard
              v-for="prod in products"
              :key="prod.pid"
              :product="prod"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/Main/ProductCard/ProductCard'
import { isTablet } from '@/store/display'
import { getPopularSearch } from '@/hooks/search'
export default {
  name: 'PopularSearch',
  components: { ProductCard },
  emits: ['close'],
  setup() {
    return {
      isTablet,
    }
  },
  data() {
    return {
      queries: [],
      products: [],
    }
  },
  async mounted() {
    const { queries, products } = await getPopularSearch()
    this.queries = queries
    this.products = products.filter((i, idx) =>
      isTablet.value ? idx <= 2 : idx <= 3
    )
  },
}
</script>

<style scoped lang="scss">
.bg {
  top: 60px;
}
.popular {
  position: absolute;
  top: 56px;
  left: 0;
  z-index: 500;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 9px 2px #0003;
  padding-top: 22px;
  &__req {
    min-width: 215px;
    margin-right: 20px;
    padding-bottom: 10px;
    &__head {
      margin-top: 0;
      font-size: 19px;
      font-weight: 500;
      margin-bottom: 8px;
      line-height: 1.3;
    }
    .txt {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }
  &__body {
    &__head {
      margin-bottom: 7px;
      h3 {
        margin-top: 0;
        margin-bottom: 0;
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 500;
      }
    }
    &__products {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 16px;
    }
  }
}

@media (max-width: $media-tablet) {
  .popular {
    &__req {
      margin-right: 10px;
    }
    &__body {
      &__products {
        grid-template-columns: 1fr 1fr 1fr !important;
      }
    }
  }
}
</style>
