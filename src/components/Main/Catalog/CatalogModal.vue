<template>
  <Modal class-of-modal="cat-modal" @close="$emit('close')" :no-scroll="false">
    <div class="cat-modal__content">
      <router-link
        v-for="(cat, idx) in categories"
        :key="idx"
        :to="`/categories?id=${cat.cid}`"
        @click="$emit('close')"
        >{{ cat.name }}</router-link
      >
    </div>
  </Modal>
</template>

<script>
import Modal from '@/components/Main/Modal'
export default {
  name: 'CatalogModal',
  components: { Modal },
  emits: ['close'],
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss">
.cat-modal {
  width: 482px;
  height: 550px;
  padding: 50px 36px;
  top: 48px;
  left: 100%;
}
</style>

<style scoped lang="scss">
.cat-modal {
  &__content {
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 100%;
    a {
      margin: 6px 0;
      color: $grey;
      transition: 0.2s;
      font-weight: 500;

      &:hover {
        color: #000;
      }
    }
  }
}
</style>
