<template>
  <label class="checkbox">
    <input type="checkbox" @change="change" />
    <span class="checkbox__square">
      <img src="@/assets/images/checkbox.png" alt="" v-if="value" />
    </span>
    <span
      class="checkbox__label"
      v-if="label"
      :style="`font-size: ${fontSize}px`"
      >{{ label }}</span
    >
  </label>
</template>

<script>
export default {
  name: 'BasicCheckbox',
  props: {
    label: String,
    value: Boolean,
    fontSize: {
      type: Number,
      default: 13.5,
    },
  },
  emits: ['update:value'],
  methods: {
    change(e) {
      this.$emit('update:value', e.target.checked)
    },
  },
}
</script>

<style scoped lang="scss">
.checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  input {
    display: none;
  }
  &__square {
    border: 1px solid $border-color;
    border-radius: 7px;
    min-width: 38px;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__label {
    line-height: 1;
    color: $text;
    margin-left: 11px;
    user-select: none;
  }
}
</style>
