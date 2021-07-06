<template>
  <div class="round-block cab-head">
    <h3><slot></slot></h3>
  </div>
</template>

<script>
export default {
  name: 'MobileCabinetHeader',
}
</script>

<style lang="scss" scoped>
.cab-head {
  width: 100%;
  padding: 15px 0;
  margin-bottom: 9px;
  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
    color: #333;
    text-align: center;
  }
}
</style>
