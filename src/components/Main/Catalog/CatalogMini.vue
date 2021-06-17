<template>
  <div class="catalog-mini">
    <div class="catalog-mini__wrapper" @click="isMenuOpen = !isMenuOpen">
      <button class="catalog-mini__btn">КАТАЛОГ</button>
      <img
        src="@/assets/images/arrow-white.svg"
        alt=""
        class="catalog-mini__img"
      />
    </div>
    <div class="catalog-mini__menu" v-if="isMenuOpen">
      <div class="catalog-mini__item" v-for="i in 10" :key="i">
        <img src="@/assets/images/catalog.png" alt="" />
        <p>LOL</p>
      </div>
    </div>
  </div>
  <div
    class="catalog-mini__area bg"
    v-if="isMenuOpen"
    @click="isMenuOpen = false"
  ></div>
</template>

<script>
export default {
  name: 'CatalogMini',
  data() {
    return {
      isMenuOpen: false,
    }
  },
}
</script>

<style scoped lang="scss">
.catalog-mini {
  position: relative;
  z-index: 22;
  &__btn {
    width: 100%;
    background-color: $pink;
    height: 100%;
    color: #fafafa;
    border: none;
    border-radius: 5px;
    font-size: 13.5px;
  }
  &__wrapper {
    position: relative;
    width: 226px;
    height: 37px;
    z-index: 40;
  }
  &__img {
    position: absolute;
    right: 12px;
    top: 50%;
    width: 6px;
    transform: translateY(-50%) rotateZ(90deg);
  }
  &__menu {
    z-index: 25;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 7px;
    background-color: #fff;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.33);
    width: 100%;
    padding-top: 48px;
    padding-bottom: 8px;
  }
  &__item {
    padding: 0 20px;
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    cursor: pointer;
    img {
      margin-right: 24px;
      width: 40px;
    }
    p {
      font-size: 14px;
      color: #424242;
    }
  }

  &__area {
    position: fixed;
    z-index: 21;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
