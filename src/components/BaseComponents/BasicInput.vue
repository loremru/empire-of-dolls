<template>
  <div style="width: 100%">
    <input
      :style="`height:${height}px;text-align:${align}`"
      class="subscription-email"
      :type="type"
      :value="value"
      @keyup="change"
      :placeholder="placeholder"
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
    align: {
      type: String,
      default: 'left',
    },
    placeholder: { type: String },
    value: String,
    type: {
      type: String,
      default: () => 'text',
    },
  },
  emits: ['update:value'],
  methods: {
    emit(val) {
      this.$emit('update:value', val)
    },
    change(e) {
      this.emit(e.target.value)
    },
  },
}
</script>

<style scoped lang="scss">
.subscription-email {
  border-radius: 7px;
  border: 1px solid $border-color;
  width: 100%;
  padding: 0 16px;
}
</style>
