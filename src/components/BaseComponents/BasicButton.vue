<template>
  <button class="subscription-button"><slot></slot></button>
</template>

<script>
export default {
  name: 'BasicButton',
}
</script>

<style scoped lang="scss">
.subscription-button {
  background: $pink;
  border: none;
  color: rgba(250, 250, 250, 0.78);
  border-radius: 7px;
  margin-left: 7px;
  cursor: pointer;
  padding: 10px 20px;
}
</style>
