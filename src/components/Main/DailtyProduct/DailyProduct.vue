<template>
  <div class="daily">
    <div class="daily__img">
      <img src="@/assets/images/daily-img.png" alt="" />
      <div class="daily__img__discount">
        <img src="@/assets/images/discount.svg" alt="" />
        <p>60%</p>
      </div>
    </div>
    <div class="daily__content flex fxdc jcsb">
      <div class="daily__body">
        <div class="daily__product">
          <h3>L.O.L. Surprise! O.M.G. Winter Disco</h3>
          <p>Кукла игрушка ЛОЛ ОМГ Диджей</p>
          <Rating :mark="4.5" />
        </div>
        <div class="daily__offer flex fxdc">
          <DailyProductTag />
          <div class="daily__offer__time">
            <p>До конца акции</p>
            <span>14:30:19</span>
          </div>
          <div class="daily__offer__price"></div>
        </div>
      </div>
      <p class="tac">
        Количество товара ограничено. Подробности узнавайте у оператора, а также
        в описании товара.
      </p>
    </div>
  </div>
</template>

<script>
import Rating from '@/components/BaseComponents/Rating'
import DailyProductTag from '@/components/Main/DailtyProduct/DailyProductTag'
export default {
  name: 'DailyProduct',
  components: { DailyProductTag, Rating },
}
</script>

<style scoped lang="scss">
.daily {
  height: 241px;
  width: 100%;
  background-color: #fff;
  margin-top: 12px;
  display: flex;
  align-items: center;
  &__img {
    min-width: 249px;
    height: 100%;
    position: relative;
    &__discount {
      position: absolute;
      right: 0;
      top: 10px;
      display: flex;
      transform: translateX(50%);
      p {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__content {
    width: 100%;
    height: 100%;
    padding-right: 25px;
    padding-top: 17px;
    p {
      font-size: 13.5px;
      padding-bottom: 9px;
    }
  }
  &__body {
    padding-right: 25px;
    display: flex;
    justify-content: flex-end;
    height: 100%;
    align-items: center;
  }
  &__product {
    h3 {
      margin: 0;
      font-size: 20.5px;
      font-weight: 500;
    }
    p {
      padding-bottom: 0;
      font-size: 18px;
      margin-bottom: 2px;
      color: #424242;
    }
  }
}
</style>
