<template>
  <Modal class-of-modal="int-modal" @close="$emit('close')">
    <div class="int">
      <h3 class="tac">Вам может быть интересно</h3>
      <div class="int__container">
        <ProductCard
          v-for="prod in filteredProducts"
          :product="prod"
          :key="prod.pid"
        />
      </div>
      <div class="int__btn flex jcc">
        <BasicButton :height="49" uppercase @click.prevent="addAllToCart"
          >ДОБАВИТЬ ВСЕ ТОВАРЫ В КОРЗИНУ</BasicButton
        >
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from '@/components/Main/Modal'
import ProductCard from '@/components/Main/ProductCard/ProductCard'
import BasicButton from '@/components/BaseComponents/BasicButton'
import { isTablet } from '@/store/display'
import { getInterestingProducts } from '@/hooks/main'
export default {
  name: 'InterestingModal',
  components: { BasicButton, ProductCard, Modal },
  emits: ['close'],
  setup() {
    return {
      isTablet,
    }
  },
  data() {
    return {
      products: [],
    }
  },
  async mounted() {
    this.products = await getInterestingProducts()
  },
  computed: {
    filteredProducts() {
      return isTablet.value ? this.products.slice(0, 3) : this.products
    },
  },
  methods: {
    addAllToCart() {
      this.$notify({
        title: 'Товары добавлены в корзину',
        type: 'success',
      })
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss">
.int-modal {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 1024px;
  background-color: #f8f6f7 !important;
  position: fixed !important;
}
</style>

<style scoped lang="scss">
.int {
  padding: 20px;
  h3 {
    font-size: 20.5px;
    font-weight: 500;
    line-height: 1;
    color: #333;
    margin: 0;
  }
  &__container {
    margin: 20px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 8px;
  }
}

@media (max-width: $media-tablet) {
  .int {
    &__container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
