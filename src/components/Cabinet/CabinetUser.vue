<template>
  <form class="user round-block">
    <div class="flex user__container">
      <div class="user__column">
        <div class="user__block">
          <h3 class="user__header">Личная информация</h3>
          <div class="user__line">
            <p class="user__line__name">Фамилия</p>
            <BasicInput :height="25" placeholder="Фамилия" />
          </div>
          <div class="user__line">
            <p class="user__line__name">Имя</p>
            <BasicInput :height="25" placeholder="Имя" />
          </div>
          <div class="user__line">
            <p class="user__line__name">Отчество</p>
            <BasicInput :height="25" placeholder="Отчество" />
          </div>
          <div class="user__line">
            <p class="user__line__name">Дата рождения</p>
            <BasicInput :height="25" placeholder="Дата рождения" />
          </div>
        </div>
        <div class="user__block">
          <h3 class="user__header">Контактная информация</h3>
          <div class="user__line">
            <p class="user__line__name">Телефон</p>
            <BasicInput :height="25" type="tel" placeholder="Телефон" />
          </div>
          <div class="user__line">
            <p class="user__line__name">Почта</p>
            <BasicInput :height="25" type="email" placeholder="Почта" />
          </div>
          <div class="user__line">
            <p class="user__line__name">Город</p>
            <BasicInput :height="25" placeholder="Город" />
          </div>
        </div>
        <div class="user__block">
          <h3 class="user__header">Изменить пароль</h3>
          <div class="user__line">
            <p class="user__line__name">Новый пароль</p>
            <BasicInput
              :height="25"
              type="password"
              placeholder="Новый пароль"
            />
          </div>
          <div class="user__line">
            <p class="user__line__name">Подтвердите пароль</p>
            <BasicInput
              :height="25"
              type="password"
              placeholder="Подтвердите пароль"
            />
          </div>
          <p class="user__text">
            Не заполняйте, если хотите оставить прежний пароль
          </p>
        </div>
      </div>
      <div class="user__block_textarea">
        <h3 class="user__header">Любимые куклы</h3>
        <BasicTextarea placeholder="Любимые куклы" />
        <BasicCheckbox
          style="margin-top: 13px"
          v-model:value="formData.news"
          label="Я согласен на получение новостей и рассылок"
        />
      </div>
    </div>
    <div class="user__btn flex fxdc aic">
      <BasicButton :height="isMobile ? 36 : 49" uppercase
        >Сохранить изменения</BasicButton
      >
      <RouterLink to="/cabinet" class="txt user__link">Выйти</RouterLink>
    </div>
  </form>
</template>

<script>
import BasicInput from '@/components/BaseComponents/BasicInput'
import BasicTextarea from '@/components/BaseComponents/BasicTextarea'
import BasicCheckbox from '@/components/BaseComponents/BasicCheckbox'
import BasicButton from '@/components/BaseComponents/BasicButton'
import { isMobile } from '@/store/display'
export default {
  name: 'CabinetUser',
  components: { BasicButton, BasicCheckbox, BasicTextarea, BasicInput },
  data() {
    return {
      formData: {
        news: false,
        inputHeight: 25,
      },
    }
  },
  setup() {
    return {
      isMobile,
    }
  },
  mounted() {
    this.inputHeight = isMobile ? 27 : 25
  },
}
</script>

<style scoped lang="scss">
.user {
  padding: 18px 32px;
  &__text {
    font-size: 14px;
    line-height: 1.29;
    color: $text-gray;
  }
  &__header {
    margin: 0 0 7px;
    font-size: 18.5px;
    font-weight: 500;
    line-height: 1;
    color: #424242;
  }
  &__column {
    width: 55%;
  }
  &__block {
    margin-bottom: 26px;
    &_textarea {
      width: 45%;
      margin-left: 37px;
    }
  }
  &__line {
    display: flex;
    align-items: center;
    margin-bottom: 11px;
    &__name {
      min-width: 177px;
      font-size: 18px;
      line-height: 1;
      color: $text-gray;
    }
  }
  &__btn {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }
}

@media (max-width: $media-desktop) {
  .user {
    &__container {
      flex-direction: column;
    }
    &__column {
      width: 100%;
    }
    &__block {
      &_textarea {
        width: 100%;
        margin-left: 0;
      }
    }
  }
}

@media (max-width: $media-mobile) {
  .user {
    padding: 15px 10px;
    margin-bottom: 9px;
    &__link {
      margin-top: 14px;
    }
    &__btn {
      margin-top: 21px;
    }
    &__header {
      text-align: center;
    }
    &__line {
      &__name {
        display: none;
      }
    }
    &__text {
      font-size: 11px;
      text-align: center;
    }
    &__block {
      margin-bottom: 12px;
    }
  }
}
</style>
