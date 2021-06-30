<template>
  <div class="cabMenu round-block">
    <h2>Личный кабинет</h2>
    <div class="cabMenu__info">
      <p class="cabMenu__info__text">Иванова Александра</p>
      <a class="cabMenu__info__mail">ivanova@yandex.ru</a>
    </div>
    <div class="cabMenu__list">
      <RouterLink to="/ordersMobile" class="cabMenu__item">
        <img src="@/assets/images/account/my-orders.svg" alt="" />
        <p>Мои заказы</p>
      </RouterLink>
      <RouterLink to="/wishlistMobile" class="cabMenu__item">
        <img src="@/assets/images/account/wish-list.svg" alt="" />
        <p>список желаний</p>
      </RouterLink>
      <RouterLink to="/bonuses" class="cabMenu__item">
        <img src="@/assets/images/account/bonus-program.svg" alt="" />
        <p>бонусная программа</p>
      </RouterLink>
      <RouterLink to="/accountDataMobile" class="cabMenu__item">
        <img src="@/assets/images/account/user-data.svg" alt="" />
        <p>Личные данные</p>
      </RouterLink>
      <a href="#" @click.prevent class="cabMenu__item">
        <img src="@/assets/images/account/logout.svg" alt="" />
        <p>выход</p>
      </a>
    </div>
    <div class="cabMenu__sub">
      <p>Узнавайте первыми об акциях и распродажах!</p>
      <div class="cabMenu__sub__search">
        <BasicInput placeholder="Введите ваш e-mail" :height="27" />
        <div class="cabMenu__sub__search__btn">
          <img src="@/assets/images/arrow-white.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasicInput from '@/components/BaseComponents/BasicInput'
export default {
  name: 'CabinetMobileMenu',
  components: { BasicInput },
}
</script>

<style scoped lang="scss">
.cabMenu {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 21px 13px;
  h2 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
    color: #333;
    margin-top: 0;
  }
  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__text {
      font-size: 13px;
      color: $text;
    }
    &__mail {
      font-size: 13px;
      color: $pink;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__item {
    width: 213px;
    display: flex;
    align-items: center;
    margin-top: 21px;
    p {
      margin-left: 15px;
      font-size: 15px;
      font-weight: 500;
      line-height: 1.47;
      color: #000;
      text-transform: uppercase;
    }
  }
  &__sub {
    margin-top: 24px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 13px;
      font-weight: 500;
      line-height: 1.08;
      color: #000;
      max-width: 157px;
      margin-bottom: 12px;
      text-align: center;
    }
    &__search {
      width: 280px;
      position: relative;
      &__btn {
        background-color: $pink;
        position: absolute;
        border-radius: 7px;
        right: 0;
        top: 0;
        width: 27px;
        height: 27px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 12px;
        }
      }
    }
  }
}
</style>
