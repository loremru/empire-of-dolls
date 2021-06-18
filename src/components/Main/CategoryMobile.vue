<template>
  <div class="category round-block">
    <div class="category__img">
      <img src="@/assets/images/sections/section(1).png" alt="" />
    </div>
    <div class="category__body">
      <h3 class="category__name">Игрушки LOL</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryMobile',
}
</script>

<style scoped lang="scss">
.category {
  width: 100%;
  overflow: hidden;
  margin-bottom: 9px;
  height: 163px;
  &__img {
    width: 162px;
    border-radius: 7.7px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
