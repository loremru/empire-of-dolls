<template>
  <div class="filter round-block">
    <div class="filter__head flex aic jcc">
      <p class="filter__text tac">Фильтры</p>
      <img
        src="@/assets/images/close.svg"
        width="13"
        class="filter__head__close"
        alt=""
      />
    </div>
    <div class="filter__body">
      <div class="filter__section">
        <div class="filter__text">Цена</div>
        <PriceSlider />
      </div>
      <div class="filter__section">
        <div class="filter__text">бренд</div>
      </div>
    </div>
  </div>
</template>

<script>
import PriceSlider from '@/components/Search/Filter/PriceSlider'
export default {
  name: 'Filter',
  components: { PriceSlider },
}
</script>

<style scoped lang="scss">
.filter {
  width: 288px;
  &__text {
    text-transform: uppercase;
    font-size: 15px;
    color: $text;
  }
  &__head {
    border-bottom: 1px solid $border-color;
    position: relative;
    height: 47px;
    &__close {
      top: 16px;
      right: 11px;
      position: absolute;
      cursor: pointer;
    }
  }
  &__body {
    padding: 12px 28px;
  }
  &__section {
    margin-bottom: 24px;
    .filter__text {
      margin-bottom: 5px;
    }
  }
}
</style>
