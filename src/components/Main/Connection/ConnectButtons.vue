<template>
  <div class="connect__buttons">
    <button
      v-for="(i, idx) in buttons"
      :key="idx + 'button'"
      @click="$emit('click', idx)"
      :style="`font-size: ${fontSize}px`"
    >
      {{ i }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ConnectButtons',
  emits: ['click'],
  props: {
    buttons: Array,
    fontSize: {
      type: Number,
      default: 15,
    },
  },
}
</script>

<style scoped lang="scss">
.connect__buttons {
  height: 55px;
  border-top: 1px solid #e0d1d9;
  width: 100%;
  display: flex;
  button {
    cursor: pointer;
    padding: 0 17px 0 17px;
    color: #000;
    background-color: transparent;
    border: none;
    flex-grow: 1;
    transition: 0.2s;
    border-right: 1px solid #e0d1d9;
    &:last-of-type {
      border: none;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }
}
</style>
