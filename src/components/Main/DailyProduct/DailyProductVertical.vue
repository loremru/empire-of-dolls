<template>
  <div class="daily round-block">
    <div class="daily__img">
      <div class="daily__tag">
        <DailyProductTag />
      </div>
      <img
        src="@/assets/images/daily-img.png"
        alt=""
        class="daily__img__image"
      />
      <DailyDiscount styles="left: 8px; bottom: 7px;">60%</DailyDiscount>
    </div>
    <div class="daily__content">
      <div class="daily__name">
        <p>До конца акции</p>
        <div class="daily__time">14:30:19</div>
      </div>
      <div class="daily__price">
        <div class="flex aic">
          <p class="daily__price__new">2500р</p>
          <p class="daily__price__old">5200р</p>
        </div>
        <BasicButton :height="49" uppercase>КУПИТЬ</BasicButton>
      </div>
      <p class="daily__text">
        Количество товара ограничено. Подробности узнавайте у оператора, а также
        в описании товара.
      </p>
    </div>
  </div>
</template>

<script>
import DailyProductTag from '@/components/Main/DailyProduct/DailyProductTag'
import DailyDiscount from '@/components/Main/DailyProduct/DailyDiscount'
import BasicButton from '@/components/BaseComponents/BasicButton'
export default {
  name: 'DailyProductVertical',
  components: { BasicButton, DailyDiscount, DailyProductTag },
}
</script>

<style scoped lang="scss">
.daily {
  overflow: hidden;
  &__img {
    position: relative;
    height: 216px;
    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__tag {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
  &__content {
    padding: 9px 14px 17px 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__name {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    p {
      font-size: 15px;
      line-height: 1;
    }
  }
  &__time {
    font-size: 19px;
    font-weight: 500;
    margin-left: 7px;
  }
  &__price {
    display: flex;
    flex-direction: column;
    align-items: center;
    .flex {
      margin-bottom: 6px;
    }
    &__new {
      font-size: 25px;
      font-weight: 500;
      line-height: 1;
      color: $purple;
    }
    &__old {
      font-size: 18px;
      line-height: 0.83;
      color: #828282;
      text-decoration: line-through;
      margin-left: 16px;
    }
  }
  &__text {
    font-size: 12px;
    line-height: 1.11;
    color: $text;
    margin-top: 12px;
  }
}
</style>
