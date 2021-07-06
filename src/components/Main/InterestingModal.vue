<template>
  <Modal class-of-modal="int-modal" @close="$emit('close')">
    <div class="int">
      <h3 class="tac">Вам может быть интересно</h3>
      <div class="int__container">
        <ProductCard
          title="Кукла Барби, игровой набор"
          v-for="i in isTablet ? 3 : 4"
          :key="i + 'int'"
        />
      </div>
      <div class="int__btn flex jcc">
        <BasicButton :height="49" uppercase
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
export default {
  name: 'InterestingModal',
  components: { BasicButton, ProductCard, Modal },
  emits: ['close'],
  setup() {
    return {
      isTablet,
    }
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
