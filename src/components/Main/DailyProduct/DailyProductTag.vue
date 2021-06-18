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
    padding: 13px 24px;
    text-transform: uppercase;
    white-space: nowrap;
  }
}
@media (max-width: $media-desktop) {
  .daily-tag {
    p {
      font-size: 20px;
    }
  }
}
@media (max-width: $media-mobile) {
  .daily-tag {
    p {
      font-size: 15px;
      padding: 12px 13px;
    }
  }
}
</style>
