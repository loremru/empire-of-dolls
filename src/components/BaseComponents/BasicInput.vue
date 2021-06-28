<template>
  <div class="input">
    <div class="input__extra txt" v-if="extra">{{ extra }}</div>
    <input
      :style="`height:${height}px;text-align:${align};font-size: ${fontSize}px; padding:${padding};`"
      class="input__input"
      :type="type"
      :value="value"
      :maxlength="max"
      @keyup="change"
      :placeholder="placeholder"
      :required="required"
    />
  </div>
</template>

<script>
export default {
  name: 'BasicInput',
  props: {
    padding: {
      type: String,
      default: '0 16px',
    },
    extra: String,
    height: {
      type: Number,
      default: 39,
    },
    align: {
      type: String,
      default: 'left',
    },
    placeholder: { type: String },
    value: [String, Number],
    type: {
      type: String,
      default: () => 'text',
    },
    fontSize: {
      type: Number,
      default: () => 13,
    },
    required: {
      type: Boolean,
      default: true,
    },
    max: Number,
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
.input {
  width: 100%;
  position: relative;
  &__input {
    border-radius: 7px;
    border: 1px solid $border-color;
    width: 100%;
  }
  &__extra {
    position: absolute;
    left: 11px;
    top: 50%;
    transform: translateY(-50%);
    height: 17px;
  }
}
</style>
