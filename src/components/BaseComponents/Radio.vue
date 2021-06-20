<template>
  <div class="radio-item">
    <div @click="check" class="radio-border">
      <div v-if="isActive" class="radio-checked"></div>
    </div>
    <span @click="check" class="radio-label">{{ RadioItem.label }}</span>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  props: {
    RadioItem: {
      type: Object,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    check() {
      this.$emit('check')
    },
  },
}
</script>

<style scoped lang="scss">
.radio-item {
  display: flex;
  margin: 10px 0;
  user-select: none;
}
.radio-label {
  margin-left: 10px;
  font-size: 18px;
  color: $text-gray;
  cursor: pointer;
}
.radio-border {
  cursor: pointer;
  width: 25px;
  height: 25px;
  border: 1px solid $border-color;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  .radio-checked {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: $pink;
  }
}
</style>
