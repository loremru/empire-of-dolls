<template>
  <div class="addReview round-block">
    <h3>Добавить отзыв</h3>
    <form class="addReview__form">
      <div class="flex">
        <div class="addReview__left">
          <BasicInput placeholder="Заголовок отзыва" :height="25" />
          <div class="addReview__line">
            <div class="addReview__name">Имя <span>*</span></div>
            <BasicInput :height="25" type="name" />
          </div>
          <div class="addReview__line">
            <div class="addReview__name">Город <span>*</span></div>
            <BasicInput :height="25" type="city" />
          </div>
          <div class="addReview__line">
            <div class="addReview__name">Email <span>*</span></div>
            <BasicInput :height="25" type="mail" />
          </div>
        </div>
        <div class="addReview__right">
          <BasicTextarea placeholder="Текст отзыва" />
        </div>
      </div>
      <div class="addReview__button flex jcc">
        <BasicButton :height="49" uppercase>ДОБАВИТЬ ОТЗЫВ</BasicButton>
      </div>
    </form>
  </div>
</template>

<script>
import BasicInput from '@/components/BaseComponents/BasicInput'
import BasicTextarea from '@/components/BaseComponents/BasicTextarea'
import BasicButton from '@/components/BaseComponents/BasicButton'
export default {
  name: 'AddReview',
  components: { BasicButton, BasicTextarea, BasicInput },
}
</script>

<style scoped lang="scss">
.addReview {
  padding: 21px;
  margin: 11px 0;
  h3 {
    font-size: 18.5px;
    font-weight: 500;
    line-height: 1;
    color: $text;
    margin-bottom: 21px;
    margin-top: 0;
    text-align: center;
  }
  &__form {
    > .flex {
      width: 100%;
    }
  }
  &__left {
    width: 36%;
    margin-right: 4%;
  }
  &__right {
    width: 60%;
  }
  &__line {
    display: flex;
    align-items: center;
    margin-top: 12px;
  }
  &__name {
    font-size: 17px;
    color: $text-gray;
    display: flex;
    width: 90px;
    span {
      color: $pink;
    }
  }
  &__button {
    margin-top: 25px;
  }
}

@media (max-width: $media-mobile) {
  .addReview {
    &__left {
      width: 100%;
      margin: 0;
    }
    &__right {
      width: 100%;
      margin-top: 25px;
    }
    &__form > .flex {
      flex-direction: column;
    }
  }
}
</style>
