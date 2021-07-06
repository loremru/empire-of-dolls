<template>
  <div class="pagination flex aic">
    <img src="@/assets/images/main-arrow-prev.svg" alt="" />
    <span class="pagination__active">1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
    <span>6</span>
    <img src="@/assets/images/main-arrow-next.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: 'ReviewsPagination',
}
</script>

<style scoped lang="scss">
.pagination {
  margin: 17px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &__active {
    font-size: 22.5px !important;
    font-weight: bold !important;
    line-height: 1 !important;
    color: $pink !important;
  }
  span {
    font-size: 14.5px;
    line-height: 1.07;
    color: $text;
    margin: 0 6px;
  }
}
</style>
