<template>
  <div class="city-btn flex jcsb">
    <img src="@/assets/images/location.svg" width="18" alt="" />
    <div class="flex fxdc city-btn__text">
      <span>Найти магазин</span> в своем городе
    </div>
    <img src="@/assets/images/arrow-white.svg" width="13" alt="" />
  </div>
</template>

<script>
export default {
  name: 'SearchCityBtn',
}
</script>

<style scoped lang="scss">
.city-btn {
  background-color: $pink;
  border-radius: 7.7px;
  padding: 11px 37px;
  margin-bottom: 19px;
  &__text {
    text-align: center;
    font-size: 15px;
    color: #fff;
    span {
      font-weight: 500;
      text-transform: uppercase;
    }
  }
}
</style>
