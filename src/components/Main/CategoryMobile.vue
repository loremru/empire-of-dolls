<template>
  <div class="category flex aic jcsb round-block">
    <div class="category__img">
      <img :src="category.image" alt="" />
    </div>
    <div class="category__body">
      <h3
        class="category__name"
        @click="$router.push(`/categories?id=${category.cid}`)"
      >
        {{ category.name }}
      </h3>
      <router-link
        class="category__link"
        v-for="subcat in category.subcat"
        :key="subcat.cid"
        :to="`/categories?id=${subcat.cid}`"
      >
        {{ subcat.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryMobile',
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.category {
  width: 100%;
  overflow: hidden;
  min-height: 163px;
  margin: 0 auto 9px;
  &__img {
    min-width: 162px;
    width: 162px;
    border-radius: 7.7px;
    overflow: hidden;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &__body {
    padding: 9px 24px 9px 9px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    flex-grow: 1;
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
    margin-top: 7px;
  }
}
</style>
