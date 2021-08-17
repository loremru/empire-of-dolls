<template>
  <div class="pagination flex aic">
    <img src="@/assets/images/main-arrow-prev.svg" alt="" @click="prev" />
    <span
      v-for="item in pages"
      :key="item"
      :class="{ pagination__active: currentPage === item }"
      @click="openPage(item)"
    >
      {{ item }}
    </span>
    <img src="@/assets/images/main-arrow-next.svg" alt="" @click="next" />
  </div>
</template>

<script>
export default {
  name: 'ReviewsPagination',
  emits: ['change'],
  props: {
    currentPage: {
      type: Number,
      default: () => 1,
    },
    pageAmount: {
      type: Number,
      default: () => 6,
    },
  },
  methods: {
    prev() {
      this.$emit('change', this.currentPage !== 1 ? this.currentPage - 1 : 1)
    },
    next() {
      this.$emit(
        'change',
        this.pageAmount !== this.currentPage
          ? this.currentPage + 1
          : this.pageAmount
      )
    },
    openPage(page) {
      if (page !== '...') this.$emit('change', page)
    },
  },
  computed: {
    pages() {
      const arr = []
      if (this.currentPage > 4) arr.push('...')
      console.log(
        this.currentPage < 4
          ? 1
          : this.currentPage >= this.pageAmount - 3
          ? this.pageAmount - 6
          : this.currentPage - 3
      )
      for (
        let i =
          this.currentPage < 4
            ? 1
            : this.currentPage >= this.pageAmount - 3
            ? this.pageAmount - 6
            : this.currentPage - 3;
        i <= this.currentPage - 1;
        i++
      ) {
        arr.push(i)
      }
      for (
        let i = this.currentPage;
        i <=
        (this.currentPage + 3 >= this.pageAmount
          ? this.pageAmount
          : this.currentPage <= 3
          ? 6
          : this.currentPage + 3);
        i++
      ) {
        arr.push(i)
      }
      if (this.currentPage <= this.pageAmount - 4) arr.push('...')
      return arr
    },
  },
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
    cursor: pointer;
  }
  img {
    cursor: pointer;
  }
}
</style>
