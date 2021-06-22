<template>
  <div class="section" :style="`margin-top: ${title ? 24 : 48}px`">
    <p class="section__header" v-if="title">{{ title }}</p>
    <div class="section__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainSection',
  props: {
    title: String,
  },
}
</script>

<style scoped lang="scss">
.section {
  min-width: 0;
  &__header {
    font-size: 15px;
    font-weight: 500;
    color: #000;
    line-height: 13px;
    margin-bottom: 11px;
    text-transform: uppercase;
  }
}
</style>
