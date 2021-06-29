<template>
  <label class="checkbox">
    <input type="checkbox" @change="change" />
    <span class="checkbox__square">
      <img src="@/assets/images/checkbox.png" alt="" v-if="value" />
    </span>
    <span class="checkbox__label" v-if="label">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: 'BasicCheckbox',
  props: {
    label: String,
    value: Boolean,
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
    font-size: 13.5px;
    line-height: 1;
    color: #333333;
    margin-left: 11px;
    user-select: none;
  }
}
</style>
