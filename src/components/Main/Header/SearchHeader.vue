<template>
  <div
    class="search"
    :class="{ searchMob: isMobileSearch }"
    :style="`max-width: ${maxWidth}px`"
  >
    <input type="text" :placeholder="placeholder" />
    <img src="@/assets/images/search.svg" alt="" class="search__img" />
  </div>
</template>

<script>
export default {
  name: 'SearchHeader',
  props: {
    maxWidth: {
      type: Number,
      default: 765,
    },
    placeholder: String,
    isMobileSearch: Boolean,
  },
}
</script>

<style scoped lang="scss">
.search {
  width: 100%;
  height: 37px;
  position: relative;
  margin: 0 15px;
  input {
    height: 100%;
    width: 100%;
    padding: 9px 13px 10px 15px;
    border: solid 1px $border-color;
    background-color: #fff;
    border-radius: 6px;
  }
  &__img {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    width: 17px;
  }
}

.searchMob {
  margin: 9px auto;
}

@media (max-width: $media-mobile) {
  .search {
    height: 28px;
    &__img {
      top: 6px;
      right: 8px;
    }
  }
}
</style>
