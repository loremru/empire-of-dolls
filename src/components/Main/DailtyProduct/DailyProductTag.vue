<template>
  <div class="daily-tag">
    <p>Товар дня</p>
  </div>
</template>

<script>
export default {
  name: 'DailyProductTag',
}
</script>

<style scoped lang="scss">
.daily-tag {
  background: url('~@/assets/images/daily-tag.svg') center no-repeat;
  background-size: contain;
  p {
    color: #fff;
    font-size: 25px;
    font-weight: 500;
    padding: 20px 24px;
    text-transform: uppercase;
  }
}
</style>
