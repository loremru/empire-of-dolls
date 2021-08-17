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
      <div
        class="catalog-mini__item"
        v-for="cat in categories"
        :key="cat.cid"
        @click="openCat(cat.cid)"
      >
        <img :src="cat.image" alt="" />
        <p>{{ cat.name }}</p>
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
import { getCategories } from '@/hooks/main'

export default {
  name: 'CatalogMini',
  data() {
    return {
      isMenuOpen: false,
      categories: [],
    }
  },
  async mounted() {
    this.categories = await getCategories()
  },
  methods: {
    close() {
      this.isMenuOpen = false
    },
    openCat(id) {
      this.close()
      this.$router.push(`/categories?id=${id}`)
    },
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
    margin-bottom: 7px;
    cursor: pointer;
    img {
      margin-right: 24px;
      width: 40px;
      height: 40px;
      object-fit: contain;
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
