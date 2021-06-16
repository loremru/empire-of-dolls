<template>
  <div :style="`width:100%`">
    <input
      :style="`height:${height}px`"
      class="subscription-email"
      type="email"
      :placeholder="`${placeholder}`"
      required
    />
  </div>
</template>

<script>
export default {
  name: 'BasicInput',
  props: {
    height: {
      type: Number,
      default: 39,
    },
    placeholder: { type: String },
  },
}
</script>

<style scoped lang="scss">
.subscription-email {
  border-radius: 7px;
  border: 1px solid $border-color;
  padding-left: 12px;
  width: 100%;
}
</style>
