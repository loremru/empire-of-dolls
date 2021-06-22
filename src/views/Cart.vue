<template>
  <Breadcrumb
    style="margin: 5px 0 20px 20px"
    :links-list="LinksForBreadcrumb"
  />
  <CartItem
    v-for="i in CartItems"
    :key="i"
    :CartItem="i"
    @deleteCardItem="deleteCardItem"
  />
  <div class="delivery-block">
    <p>Выберите вариант доставки</p>
    <Radio
      v-for="(el, idx) in RadioArray"
      :RadioItem="el"
      :key="el.key"
      :isActive="idx === activeDelivery"
      @check="() => (activeDelivery = idx)"
    />
    <div class="cart-cost">
      <div class="cart-cost__delivery">
        <p class="cart-cost__description">
          Стоимость доставки:
          <span class="cart-cost__value">{{ DeliveryCost }}</span>
        </p>
        <p class="cart-cost__description">
          Итого к оплате: <span class="cart-cost__value">{{ TotalCost }}</span>
        </p>
      </div>
      <div class="cart-cost__promo">
        <p class="cart-cost__description">
          Стоимость заказа: <span class="cart-cost__value">{{ CartCost }}</span>
        </p>
        <div class="cart-cost__promo__promo-input">
          <span class="cart-cost__description">Промокод:</span>
          <div class="input-border"><BasicInput :height="25" /></div>
          <BasicButton :height="25"
            ><img src="@/assets/images/arrow-white-down.svg" alt=""
          /></BasicButton>
        </div>
        <p class="cart-cost__description">
          Итого стоимость заказа:
          <span class="cart-cost__value">{{ CartWithPromoCost }}</span>
        </p>
      </div>
    </div>
  </div>
  <div class="social-promo">
    <div class="social-promo__header">
      <p>Поделитесь выбором с друзьями и получите скидку 50 р!</p>
      <img src="@/assets/images/arrow-white.svg" alt="" />
    </div>
    <div class="social-promo__links">
      <a href="#"><img src="@/assets/images/vk.svg" alt="" /></a>
      <a href="#"><img src="@/assets/images/fb.svg" alt="" /></a>
    </div>
  </div>
  <form class="customer-info">
    <p class="customer-info__header">
      Поля отмеченные <span class="pink">*</span> обязательны для заполнения
    </p>
    <div class="customer-info__delivery-address">
      <div class="customer-info__delivery-address__index">
        <p class="delivery-address__label">Индекс</p>
        <BasicInput
          :required="false"
          :height="26"
          :align="'center'"
          :padding="'0'"
        />
      </div>
      <div class="customer-info__delivery-address__region">
        <p class="delivery-address__label">Область, край или республика</p>
        <BasicInput :required="false" :height="26" />
      </div>
      <div class="customer-info__delivery-address__city">
        <p class="delivery-address__label">Населенный пункт</p>
        <BasicInput :required="false" :height="26" />
      </div>
      <div class="customer-info__delivery-address__street">
        <p class="delivery-address__label">Улица</p>
        <BasicInput :required="false" :height="26" />
      </div>
      <div class="customer-info__delivery-address__home">
        <p class="delivery-address__label">Дом</p>
        <BasicInput
          :required="false"
          :height="26"
          :align="'center'"
          :padding="'0'"
        />
      </div>
    </div>
    <div class="additional-delivery-info">
      <div class="additional-delivery-info__building">
        <p class="delivery-address__label">Стр.</p>
        <BasicInput
          :required="false"
          :height="26"
          :align="'center'"
          :padding="'0'"
        />
      </div>
      <div class="additional-delivery-info__corpus">
        <p class="delivery-address__label">Корпус</p>
        <BasicInput
          :required="false"
          :height="26"
          :align="'center'"
          :padding="'0'"
        />
      </div>
      <div class="additional-delivery-info__apartment">
        <p class="delivery-address__label">Кв.\офис</p>
        <BasicInput
          :required="false"
          :height="26"
          :align="'center'"
          :padding="'0'"
        />
      </div>
      <div class="additional-delivery-info__entrance">
        <p class="delivery-address__label">Подъезд</p>
        <BasicInput
          :required="false"
          :height="26"
          :align="'center'"
          :padding="'0'"
        />
      </div>
    </div>
    <div class="customer-info__personal-info">
      <div class="customer-info__personal-info__surname">
        <p class="delivery-address__label">
          Фамилия<span class="pink">*</span>
        </p>
        <BasicInput :height="26" />
      </div>
      <div class="customer-info__personal-info__name">
        <p class="delivery-address__label">Имя<span class="pink">*</span></p>
        <BasicInput :height="26" />
      </div>
      <div class="customer-info__personal-info__patronymic">
        <p class="delivery-address__label">
          Отчество<span class="pink">*</span>
        </p>
        <BasicInput :height="26" />
      </div>
      <div class="customer-info__personal-info__mail">
        <p class="delivery-address__label">E-mail<span class="pink">*</span></p>
        <BasicInput :height="26" type="email" />
      </div>
      <div class="customer-info__personal-info__phone">
        <p class="delivery-address__label">
          Номер телефона<span class="pink">*</span>
        </p>
        <BasicInput :height="26" />
      </div>
    </div>
    <p class="user-agreement">
      Нажимая кнопку “Заказать”, я подтверждаю свою дееспособность,даю согласие
      на обработку моих персональных данных. <a href="#">подробнее</a>
    </p>
    <div class="customer-info__submit">
      <BasicButton>ЗАКАЗАТЬ</BasicButton>
    </div>
    <p class="customer-info__prepayment-info">
      При отправке заказа наложенным платежом Почта России взимает 4% от
      оценочной стоимости заказа (эти 4% включены в расчетную стоимость
      доставки).
    </p>

    <p class="customer-info__prepayment-info">
      Кроме этих 4%, Почта России взимает комиссию в размере 2% (но не менее 50
      рублей) при получении заказа, отправленного наложенным платежом (за
      денежный перевод оплаты заказа), данные по состоянию на 15.05.2016.
    </p>

    <p class="customer-info__prepayment-info">
      Таким образом, при отправке заказа по предоплате, Ваша выгода составляет
      до 6% от стоимости заказа. Убедитесь в этом сами - просто измените сумму
      аванса при доставке Почтой или EMS и вы увидите, как сильно изменяется
      Стоимость доставки.
    </p>
  </form>
</template>

<script>
import Breadcrumb from '../components/BaseComponents/Breadcrumb'
import CartItem from '@/components/Cart/CartItem'
import Radio from '@/components/BaseComponents/Radio'
import BasicInput from '@/components/BaseComponents/BasicInput'
import BasicButton from '@/components/BaseComponents/BasicButton'

export default {
  name: 'Cart',
  components: { BasicButton, BasicInput, Radio, CartItem, Breadcrumb },
  data() {
    return {
      LinksForBreadcrumb: [
        {
          text: 'Главная',
          pageLink: '/',
        },
        {
          text: 'Личный кабинет',
          pageLink: '/cabinet',
        },
        {
          text: 'Корзина',
          pageLink: '/cart',
        },
      ],
      CartItems: [
        {
          photoURL: '',
          dollMaker: 'Компания1',
          article: 'Артикул1',
          rating: 4,
          price: 6000,
          sale: 1000,
          id: 1,
        },
        {
          photoURL: '',
          dollMaker: 'Компания2',
          article: 'Артикул2',
          rating: 3,
          price: 8000,
          sale: 2000,
          id: 2,
        },
      ],
      RadioArray: [
        {
          label: 'Курьерская доставка по Перми',
          value: 'courierPerm',
        },
        {
          label: 'Доставка через Почту России (в среднем 4-10 дней)',
          value: 'russianPost',
        },
        {
          label:
            'Доставка через службу экспресс-доставки EMS (в среднем 3-7 дней)',
          value: 'ems',
        },
        {
          label: 'Доставка в другой город',
          value: 'ems',
        },
      ],
      activeDelivery: 0,
      CartCost: 0,
      DeliveryCost: 0,
      CartWithPromoCost: 0,
      TotalCost: 0,
    }
  },
  methods: {
    deleteCardItem(i) {
      const itemToDelete = this.CartItems.findIndex((el) => el.id === i.id)
      this.CartItems.splice(itemToDelete, 1)
    },
  },
}
</script>

<style scoped lang="scss">
.delivery-block {
  background: #fff;
  padding: 34px;
  border-radius: 7px;
}
.cart-cost {
  display: flex;
  margin-top: 20px;
  &__delivery {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    > * {
      margin: 7px 0;
    }
  }
  &__promo {
    width: 50%;
    > * {
      margin: 7px 0;
    }
    &__promo-input {
      align-items: center;
      .input-border {
        width: 205px;
        display: inline-block;
        margin-left: 10px;
      }
      button {
        padding: 0;
        width: 25px;
        img {
          width: 10px;
        }
      }
    }
  }
  &__description {
    font-size: 18px;
    color: $grey;
  }
  &__value {
    font-size: 18px;
    color: #000;
    font-weight: 600;
  }
}
.social-promo {
  display: flex;
  &__header {
    background: $pink;
    width: 75%;
    height: 84px;
    position: relative;
    display: flex;
    align-items: center;
    p {
      width: 100%;
      text-align: center;
      color: #fff;
      font-size: 22px;
    }
    &::after {
      content: '';
      display: block;
      height: 50%;
      background: $pink;
      width: 44px;
      position: absolute;
      right: -22px;
      top: 0;
      transform: skewX(46deg);
    }
    &::before {
      content: '';
      display: block;
      height: 50%;
      background: $pink;
      width: 44px;
      position: absolute;
      right: -22px;
      bottom: 0;
      transform: skewX(314deg);
    }
  }
  &__links {
    background: $body;
    width: 25%;
    padding-left: 43px;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      margin: 0 7px;
    }
  }
}
.customer-info {
  background: #ffffff;
  padding: 34px;
  &__header {
    margin-bottom: 20px;
    font-size: 18px;
    color: $grey;
  }
  .delivery-address__label {
    text-align: center;
    font-size: 18px;
    color: $grey;
  }
  &__delivery-address {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    &__index {
      flex-basis: 0;
      flex-grow: 1;
      padding: 0 4px;
    }
    &__region {
      flex-basis: 0;
      flex-grow: 3;
      padding: 0 4px;
    }
    &__city {
      flex-basis: 0;
      flex-grow: 2;
      padding: 0 4px;
    }
    &__street {
      flex-basis: 0;
      flex-grow: 2;
      padding: 0 4px;
    }
    &__home {
      flex-basis: 0;
      flex-grow: 1;
      padding: 0 4px;
    }
  }
  .additional-delivery-info {
    display: flex;
    width: 50%;
    margin-bottom: 10px;
    > div {
      padding: 0 4px;
    }
  }
  &__personal-info {
    display: flex;
    flex-direction: column;
    width: 50%;
    .delivery-address__label {
      width: 80%;
      text-align: left;
    }
    > div {
      display: flex;
      margin: 5px 0;
      align-items: center;
    }
  }
  .user-agreement {
    font-size: 15px;
    color: $grey;
    margin-top: 10px;
    a {
      border-bottom: 1px solid #000;
      color: #000;
      font-weight: 500;
    }
  }
  &__submit {
    text-align: center;
    margin: 30px 0 15px 0;
  }
  &__prepayment-info {
    margin: 15px 0;
    color: $grey;
    font-size: 15px;
    line-height: 1;
  }
}
</style>
