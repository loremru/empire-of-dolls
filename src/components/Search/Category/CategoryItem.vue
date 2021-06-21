<template>
  <div class="catItem">
    <div class="catItem__image">
      <img src="@/assets/images/category-item.png" alt="" />
    </div>
    <p class="txt tac"><slot></slot></p>
  </div>
</template>

<script>
export default {
  name: 'CategoryItem',
}
</script>

<style scoped lang="scss">
.catItem {
  &__image {
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .txt {
    margin-top: 8px;
  }
}
</style>
