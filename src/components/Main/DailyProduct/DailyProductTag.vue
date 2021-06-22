<template>
  <div class="daily-tag">
    <img src="@/assets/images/daily-tag.svg" alt="" />
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
  height: 62px;
  position: relative;
  p {
    color: #fff;
    font-size: 25px;
    font-weight: 500;
    text-transform: uppercase;
    white-space: nowrap;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  img {
    height: 100%;
  }
}
@media (max-width: $media-desktop) {
  .daily-tag {
    height: 55px;
    p {
      font-size: 20px;
    }
  }
}
@media (max-width: $media-mobile) {
  .daily-tag {
    height: 39px;
    p {
      font-size: 15px;
    }
  }
}
</style>
