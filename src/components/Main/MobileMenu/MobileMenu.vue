<template>
  <div class="mob-menu" :class="{ 'mob-menu_active': isShow }">
    <div class="mob-menu__section mob-menu__section_city">
      <div class="flex jcc aic">
        <img
          src="@/assets/images/mobile-cat/marker-cat.svg"
          width="29"
          alt=""
        />
        <p class="mob-menu__text">Москва</p>
      </div>
      <img
        src="@/assets/images/close.svg"
        class="mob-menu__close"
        @click="close"
        width="15"
        alt=""
      />
    </div>
    <div class="mob-menu__section mob-menu__section_help">
      <p class="mob-menu__text">Поддержка</p>
      <div class="mob-menu__section__socials flex aic jcc">
        <a href="#"><img src="@/assets/images/viber.svg" alt="" /></a>
        <a href="#"><img src="@/assets/images/whatsapp.svg" alt="" /></a>
        <a href="#"><img src="@/assets/images/telegram.svg" alt="" /></a>
      </div>
    </div>
    <div class="mob-menu__section mob-menu__section_menu">
      <RouterLink class="mob-menu__item" to="/">
        <img src="@/assets/images/mobile-cat/percent-cat.svg" alt="" />
        <p>РАСПродажа</p>
      </RouterLink>
      <RouterLink class="mob-menu__item" to="/">
        <img src="@/assets/images/mobile-cat/corona-cat.svg" alt="" />
        <p>Лидеры продаж</p>
      </RouterLink>
      <RouterLink class="mob-menu__item" to="/">
        <img src="@/assets/images/mobile-cat/star-cat.svg" alt="" />
        <p>Новинки</p>
      </RouterLink>
      <RouterLink class="mob-menu__item" to="/">
        <img src="@/assets/images/mobile-cat/doll-cat.svg" alt="" />
        <p>каталог кукол</p>
      </RouterLink>
      <RouterLink class="mob-menu__item" to="/">
        <img src="@/assets/images/mobile-cat/butterfly-cat.svg" alt="" />
        <p>о нас</p>
      </RouterLink>
      <RouterLink class="mob-menu__item" to="/">
        <img src="@/assets/images/mobile-cat/car-cat.svg" alt="" />
        <p>доставка и оплата</p>
      </RouterLink>
      <RouterLink class="mob-menu__item" to="/">
        <img src="@/assets/images/mobile-cat/marker-cat.svg" alt="" />
        <p>где купить</p>
      </RouterLink>
      <RouterLink class="mob-menu__item" to="/">
        <img src="@/assets/images/mobile-cat/info-cat.svg" alt="" />
        <p>отзывы и помощь</p>
      </RouterLink>
      <RouterLink class="mob-menu__item" to="/"
        ><img src="@/assets/images/mobile-cat/buy-cat.svg" alt="" />
        <p>оптом</p></RouterLink
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileMenu',
  emits: ['close'],
  data() {
    return {
      isShow: false,
    }
  },
  mounted() {
    document.querySelector('body').classList.add('no-scroll')
    setTimeout(() => (this.isShow = true), 10)
  },
  unmounted() {
    document.querySelector('body').classList.remove('no-scroll')
  },
  methods: {
    close() {
      this.isShow = false
      setTimeout(() => this.$emit('close'), 250)
    },
  },
}
</script>

<style scoped lang="scss">
.mob-menu {
  position: absolute;
  z-index: 600;
  background-color: #fff;
  width: 100%;
  padding: 0 8px;
  height: 100%;
  overflow-y: auto;
  transition: 0.2s;
  transform: translateX(-100%);
  &_active {
    transform: translate(0, 0);
  }
  &__close {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
  }
  &__section {
    padding: 8px 0;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid $border-color;
    &:last-of-type {
      border-bottom: none;
    }
    &_menu {
      align-items: center;
      padding-top: 21px;
      padding-bottom: 28px;
      margin-bottom: 50px;
    }
    &_help {
      padding-top: 16px;
      .mob-menu__text {
        margin-bottom: 10px;
      }
    }
    &_city {
      padding: 10px 0;
      position: relative;
    }
    &__socials {
      a {
        margin: 0 7px;
      }
    }
  }
  &__item {
    display: flex;
    align-items: center;
    min-width: 202px;
    margin-bottom: 16px;
    img {
      width: 29px;
      margin-right: 17px;
    }
    p {
      font-weight: 500;
      color: #000;
      text-transform: uppercase;
      font-size: 15px;
    }
  }
  &__text {
    text-align: center;
    font-size: 15px;
    color: #767676;
  }
}
</style>
