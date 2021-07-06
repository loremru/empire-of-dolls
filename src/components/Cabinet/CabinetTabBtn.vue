<template>
  <div class="tabBtn" :class="{ tabBtn_active: isOpen }">
    <p><slot></slot></p>
  </div>
</template>

<script>
export default {
  name: 'CabinetTabBtn',
  props: {
    isOpen: {
      type: Boolean,
    },
  },
}
</script>

<style scoped lang="scss">
.tabBtn {
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid $border-color;
  border-radius: 7px;
  cursor: pointer;
  p {
    text-align: center;
    font-size: 15px;
    line-height: 1.77;
    color: #424242;
  }
  &_active {
    background-color: $pink;
    border: none;
    transition: 0.2s;
    p {
      color: #fff;
      transition: 0.2s;
    }
  }
}
</style>
