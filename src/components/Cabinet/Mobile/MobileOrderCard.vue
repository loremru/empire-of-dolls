<template>
  <div class="order round-block">
    <div class="order__cell flex fxdc aic">
      <p class="order__name">наименование</p>
      <p class="order__value tac">
        Горджусс - Я люблю тебя маленький кролик (32 см)
      </p>
    </div>
    <div class="flex jcsb">
      <div class="order__cell order__cell_center">
        <p class="order__name">номер заказа</p>
        <p class="order__value">11014060</p>
      </div>
      <div class="order__cell order__cell_center">
        <p class="order__name">дата</p>
        <p class="order__value">03.09.2020</p>
      </div>
      <div class="order__cell order__cell_center">
        <p class="order__name">цена</p>
        <p class="order__value">150000₽</p>
      </div>
      <div class="order__cell order__cell_center">
        <p class="order__name">кол-во</p>
        <p class="order__value">2</p>
      </div>
    </div>
    <div class="flex jcsb">
      <div class="flex fxdc">
        <div class="order__cell">
          <p class="order__name">доставка</p>
          <p class="order__value">700₽</p>
        </div>
        <div class="order__cell">
          <p class="order__name">скидка</p>
          <p class="order__value">200₽</p>
        </div>
        <div class="order__cell">
          <p class="order__name">к оплате</p>
          <p class="order__value">150000₽</p>
        </div>
      </div>
      <div class="order__status">
        <p class="order__name">оплата и статус</p>
        <p class="order__text">
          Оплата заказа банковской картой на сайте Империи Кукол
        </p>
        <p class="order__status__value">Выполнен</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileOrderCard',
}
</script>

<style scoped lang="scss">
.order {
  margin-bottom: 9px;
  padding: 15px 19px;
  &__name {
    font-size: 13px;
    line-height: 1.38;
    color: $text-gray;
  }
  &__value {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    color: #000;
  }
  &__cell {
    margin-bottom: 16px;
    &_center {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  &__status {
    max-width: 114px;
    &__value {
      font-size: 14px;
      font-weight: 500;
      line-height: 1.43;
      color: #000;
      text-transform: uppercase;
    }
  }
  &__text {
    font-size: 14px;
    color: $text-gray;
    margin-bottom: 16px;
  }
}
</style>
