<template>
  <div class="catItem" @click="$router.push(`/categories?id=${category.cid}`)">
    <div class="catItem__image">
      <img :src="category.image" alt="" />
    </div>
    <p class="txt tac">{{ category.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'CategoryItem',
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.catItem {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__image {
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .txt {
    margin: 8px 0;
  }
}
</style>
