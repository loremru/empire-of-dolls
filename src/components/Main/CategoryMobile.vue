<template>
  <div class="category flex aic jcsb round-block">
    <div class="category__img">
      <img src="@/assets/images/sections/section(1).png" alt="" />
    </div>
    <div class="category__body">
      <h3 class="category__name">Игрушки LOL</h3>
      <p class="category__link">Игрушки LOL</p>
      <p class="category__link">O.M.G. Большие куклы (24 см)</p>
      <p class="category__link">Winter Disco - Зимняя Дискотека</p>
      <p class="category__link">4 серия -Декодер</p>
      <p class="category__link">5 серия - Makeover</p>
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
  &__body {
    padding: 9px 24px 9px 9px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  &__name {
    margin: 0;
    font-size: 15px;
    font-weight: 500;
    color: #000000;
  }
  &__link {
    font-size: 13px;
    line-height: 0.92;
    color: $text;
  }
}
</style>
