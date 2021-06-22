<template>
  <div class="sort-btn flex aic">
    <slot></slot>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'SortBtn',
  props: {
    text: String,
  },
}
</script>

<style scoped lang="scss">
.sort-btn {
  p {
    margin-left: 8px;
    font-weight: 600;
    font-size: 21px;
  }
}
</style>
