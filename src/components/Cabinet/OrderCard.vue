<template>
  <div class="order round-block">
    <div
      class="order__head hover-block"
      @click="toggleCard"
      :style="isOpen && 'border-color: #d7c3cd;'"
    >
      <p class="txt order__id">#11014060</p>
      <p class="txt order__name text-dots">
        Горджусс - Я люблю тебя маленький кролик (32 см)
      </p>
      <p class="txt order__date">03.09.2020</p>
      <p class="txt order__price">150 000 ₽</p>
      <div
        class="order__arrow"
        :style="isOpen && 'transform: rotateZ(180deg);'"
      >
        <img src="@/assets/images/arrow-down.svg" alt="" />
      </div>
    </div>
    <div class="order__body" :class="{ order__body_active: isOpen }">
      <p class="order__fullName">
        <span class="order__cell__name">Полное наименование: </span>
        <span>Горджусс - Я люблю тебя маленький кролик (32 см)</span>
      </p>
      <div class="flex fxww jcsb aic">
        <div class="order__cell">
          <p class="order__cell__name">кол-во</p>
          <p class="txt"><b>1009</b></p>
        </div>
        <div class="order__cell">
          <p class="order__cell__name">Доставка</p>
          <p class="txt"><b>700р</b></p>
        </div>
        <div class="order__cell">
          <p class="order__cell__name">Скидка</p>
          <p class="txt"><b>200р</b></p>
        </div>
        <div class="order__cell">
          <p class="order__cell__name">К оплате</p>
          <p class="txt"><b>150000р</b></p>
        </div>
        <div class="order__cell">
          <p class="order__cell__name">
            Оплата заказа банковской картой на сайте Империи Кукол
          </p>
          <p class="txt"><b>ОТКАЗ</b></p>
          <p class="pink">Не оплачен</p>
        </div>
        <!--      <div class="order__cell">-->
        <!--        <p class="txt"><b>ОТКАЗ</b></p>-->
        <!--        <p class="pink">Не оплачен</p>-->
        <!--      </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderCard',
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleCard() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style scoped lang="scss">
.order {
  .txt {
    color: #000;
  }
  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid transparent;
    .txt {
      text-align: center;
      margin-right: 10px;
    }
  }
  &__arrow {
    transition: 0.2s;
    user-select: none;
  }
  &__name {
    max-width: 266px;
  }
  &__id {
    width: 75px;
  }
  &__date {
    width: 78px;
  }
  &__price {
    width: 90px;
  }
  &__body {
    height: 0;
    transition: 0.2s;
    overflow: hidden;
    padding: 0 31px 0 20px;
    &_active {
      height: 206px;
      padding: 20px 31px 20px 20px;
    }
  }

  &__cell {
    max-width: 116px;
    &__name {
      font-size: 14px;
      line-height: 1.29;
      color: $text-gray;
    }
    b {
      font-weight: 500;
    }
    > * {
      margin-bottom: 8px;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
  &__fullName {
    margin-bottom: 15px;
  }
}

@media (max-width: $media-tablet) {
  .order__name {
    max-width: 185px;
  }
}
</style>
