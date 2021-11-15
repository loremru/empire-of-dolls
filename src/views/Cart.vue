<template>
  <Breadcrumb
    v-if="!isMobile"
    style="margin: 5px 0 20px 20px"
    :links-list="LinksForBreadcrumb"
  />
  <template v-if="CartItems">
    <CartItem
      v-for="i in CartItems"
      :key="i"
      :CartItem="i"
      :count="i.num"
      @deleteCardItem="deleteCardItem"
      @decCount="decCount"
      @incCount="incCount"
    />
  </template>
  <template v-else>
    <div>Загрузка товаров в корзине...</div>
  </template>

  <div v-if="isMobile && CartItems" class="cartItems-count">
    <span
      >{{ CartItems?.length }} {{ cartCountEnding(CartItems?.length) }} на
      сумму:</span
    >
    <span class="cartItems-count__cartCost">{{ CartCost }} р</span>
  </div>
  <div v-if="!!CartItems?.length">
    <div class="delivery-block">
      <p v-if="isMobile" style="margin: 10px 0">
        Накопленная скидка: {{ clientSaleBonus }}%
      </p>
      <div
        v-if="isMobile"
        style="margin: 10px 0"
        class="cart-cost__promo__promo-input"
      >
        <span class="cart-cost__description">Промокод:</span>
        <div class="input-border">
          <BasicInput
            :height="25"
            :value="submitCartData.promo_code"
            @update:value="submitCartData.promo_code = $event"
          />
        </div>
        <BasicButton :height="25"
          ><img src="@/assets/images/arrow-white-down.svg" alt=""
        /></BasicButton>
      </div>
      <p style="margin: 10px 0">Выберите вариант доставки:</p>
      <Radio
        v-for="el in RadioArray"
        :RadioItem="el"
        :key="el.sid"
        :isActive="el.sid === submitCartData.shipping_id"
        @check="() => setShippingId(el)"
        :fontSize="isMobile ? 15 : 18"
      />
      <p style="margin: 20px 0 10px">Вариант оплаты:</p>
      <Radio
        v-for="el in PaymentArray"
        :RadioItem="el"
        :key="el.sid"
        :isActive="el.value === submitCartData.payment_id"
        @check="() => setPaymentId(el)"
        :fontSize="isMobile ? 15 : 18"
      />
      <p
        v-if="
          submitCartData.shipping_id == 10 || submitCartData.shipping_id == 11
        "
        style="color: red"
      >
        Для расчета стоимости доставки, пожалуйста, введите Индекс места
        доставки внизу, после чего нужно выбрать удобный Вам вариант оплаты.
      </p>
      <p v-if="submitCartData.shipping_id == 120" style="color: red">
        Для расчета стоимости доставки до двери, пожалуйста, введите Индекс
        места доставки внизу, после чего нужно выбрать удобный Вам вариант
        оплаты.
      </p>
      <div
        class="pvz"
        v-if="submitCartData.shipping_id == 99 && currier_service"
      >
        <div class="pvz-col">
          <div class="pvz-head">Пункты выдачи заказа Boxberry (5 дней):</div>
          <Radio
            v-for="el in currier_service[0]?.pvz"
            :RadioItem="el"
            :key="el.id"
            :isActive="el.id === submitCartData.pvz_id"
            @check="() => setPvz(el.id, 0)"
            :fontSize="isMobile ? 15 : 18"
          />
        </div>
        <div class="pvz-col">
          <div class="pvz-head">Пункты выдачи заказа СДЭК (4 дня):</div>
          <Radio
            v-for="el in currier_service[1]?.pvz"
            :RadioItem="el"
            :key="el.id"
            :isActive="el.id === submitCartData.pvz_id"
            @check="() => setPvz(el.id, 1)"
            :fontSize="isMobile ? 15 : 18"
          />
        </div>
      </div>
      <div
        class="currier-services"
        v-if="submitCartData.shipping_id == 120 && currier_service"
      >
        <div class="currier-services__title">Курьерские службы:</div>
        <Radio
          v-for="el in [
            { id: 1, label: 'Boxberry (5 дней)' },
            { id: 2, label: 'СДЭК (4 дня)' },
          ]"
          :RadioItem="el"
          :key="el.id"
          :isActive="el.id === submitCartData.currier_service"
          @check="() => setCurrierId(el.id)"
          :fontSize="isMobile ? 15 : 18"
        />
      </div>
      <template v-if="isMobile">
        <div style="margin: 10px 0" class="flex">
          <p>Дата доставки:</p>
          <BasicInput
            :type="'date'"
            :padding="0"
            :height="27"
            :value="submitCartData.date_ship"
            @update:value="submitCartData.date_ship = $event"
            style="width: 120px; margin-left: 20px"
          />
        </div>
        <div style="margin: 10px 0" class="flex">
          <p>Интервал доставки:</p>
          <SelectInput
            :dataArray="dataArray"
            style="width: 120px; margin-left: 20px"
          />
        </div>
        <p style="margin: 10px 0">Стоимость доставки:</p>
        <p style="margin: 10px 0">Итого к оплате:</p>
      </template>
      <div v-if="!isMobile" class="cart-cost">
        <div class="cart-cost__delivery">
          <p class="cart-cost__description">
            Стоимость доставки:
            <span class="cart-cost__value">{{ DeliveryCost }}р</span>
          </p>
          <p class="cart-cost__description">
            Итого к оплате:
            <span class="cart-cost__value">{{ TotalCost }}р</span>
          </p>
        </div>
        <div class="cart-cost__promo">
          <p class="cart-cost__description">
            Стоимость заказа:
            <span class="cart-cost__value">{{ CartCost }}р</span>
          </p>
          <div class="cart-cost__promo__promo-input">
            <span class="cart-cost__description">Промокод:</span>
            <div class="input-border">
              <BasicInput
                :height="25"
                :value="submitCartData.promo_code"
                @update:value="submitCartData.promo_code = $event"
              />
            </div>
            <BasicButton :height="25" @click="submitPromo"
              ><img src="@/assets/images/arrow-white-down.svg" alt=""
            /></BasicButton>
          </div>
          <p class="cart-cost__description">
            Итого стоимость заказа:
            <span class="cart-cost__value">{{ CartWithPromoCost }}р</span>
          </p>
        </div>
      </div>
    </div>
    <div class="social-promo">
      <div class="social-promo__header">
        <p>
          {{
            isMobile
              ? 'Поделитесь выбором, получите скидку 50 р! '
              : 'Поделитесь выбором с друзьями и получите скидку 50 р!'
          }}
        </p>
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
      <div v-if="!isMobile" class="customer-info__delivery-address">
        <div class="customer-info__delivery-address__index">
          <p class="delivery-address__label">Индекс</p>
          <BasicInput
            :required="false"
            :height="26"
            :align="'center'"
            :padding="'0'"
            :value="submitCartData.index"
            @update:value="submitIndex($event)"
          />
        </div>
        <div class="customer-info__delivery-address__region">
          <p class="delivery-address__label">Область, край или республика</p>
          <BasicInput
            :required="false"
            :height="26"
            :value="submitCartData.area"
            @update:value="submitCartData.area = $event"
          />
        </div>
        <div class="customer-info__delivery-address__city">
          <p class="delivery-address__label">Населенный пункт</p>
          <BasicInput
            :required="false"
            :height="26"
            :value="submitCartData.citys"
            @update:value="submitCartData.citys = $event"
          />
        </div>
        <div v-if="isDesktop" class="customer-info__delivery-address__street">
          <p class="delivery-address__label">Улица</p>
          <BasicInput
            :required="false"
            :height="26"
            :value="submitCartData.street"
            @update:value="submitCartData.street = $event"
          />
        </div>
        <div v-if="isDesktop" class="customer-info__delivery-address__home">
          <p class="delivery-address__label">Дом</p>
          <BasicInput
            :required="false"
            :height="26"
            :align="'center'"
            :padding="'0'"
            :value="submitCartData.house"
            @update:value="submitCartData.house = $event"
          />
        </div>
      </div>
      <div v-if="!isMobile" class="additional-delivery-info">
        <div v-if="isTablet" class="additional-delivery-info__street">
          <p class="delivery-address__label">Улица</p>
          <BasicInput
            :required="false"
            :height="26"
            :value="submitCartData.street"
            @update:value="submitCartData.street = $event"
          />
        </div>
        <div v-if="isTablet" class="additional-delivery-info__home">
          <p class="delivery-address__label">Дом</p>
          <BasicInput
            :required="false"
            :height="26"
            :align="'center'"
            :padding="'0'"
            :value="submitCartData.house"
            @update:value="submitCartData.house = $event"
          />
        </div>
        <div class="additional-delivery-info__building">
          <p class="delivery-address__label">Стр.</p>
          <BasicInput
            :required="false"
            :height="26"
            :align="'center'"
            :padding="'0'"
            :value="submitCartData.stroen"
            @update:value="submitCartData.stroen = $event"
          />
        </div>
        <div class="additional-delivery-info__corpus">
          <p class="delivery-address__label">Корпус</p>
          <BasicInput
            :required="false"
            :height="26"
            :align="'center'"
            :padding="'0'"
            :value="submitCartData.corp"
            @update:value="submitCartData.corp = $event"
          />
        </div>
        <div class="additional-delivery-info__apartment">
          <p class="delivery-address__label">Кв.\офис</p>
          <BasicInput
            :required="false"
            :height="26"
            :align="'center'"
            :padding="'0'"
            :value="submitCartData.flat"
            @update:value="submitCartData.flat = $event"
          />
        </div>
        <div class="additional-delivery-info__entrance">
          <p class="delivery-address__label">Подъезд</p>
          <BasicInput
            :required="false"
            :height="26"
            :align="'center'"
            :padding="'0'"
            :value="submitCartData.podesd"
            @update:value="submitCartData.podesd = $event"
          />
        </div>
      </div>
      <div v-if="!isMobile" class="customer-info__personal-info">
        <div class="customer-info__personal-info__surname">
          <p class="delivery-address__label">
            Фамилия<span class="pink">*</span>
          </p>
          <BasicInput
            :height="26"
            :value="submitCartData.surname"
            @update:value="submitCartData.surname = $event"
          />
        </div>
        <div class="customer-info__personal-info__name">
          <p class="delivery-address__label">Имя<span class="pink">*</span></p>
          <BasicInput
            :height="26"
            :value="submitCartData.name"
            @update:value="submitCartData.name = $event"
          />
        </div>
        <div class="customer-info__personal-info__patronymic">
          <p class="delivery-address__label">
            Отчество<span class="pink">*</span>
          </p>
          <BasicInput
            :height="26"
            :value="submitCartData.middle_name"
            @update:value="submitCartData.middle_name = $event"
          />
        </div>
        <div class="customer-info__personal-info__mail">
          <p class="delivery-address__label">
            E-mail<span class="pink">*</span>
          </p>
          <BasicInput
            :height="26"
            type="email"
            :value="submitCartData.email"
            @update:value="submitCartData.email = $event"
          />
        </div>
        <div class="customer-info__personal-info__phone">
          <p class="delivery-address__label">
            Номер телефона<span class="pink">*</span>
          </p>
          <BasicInput
            :height="26"
            :value="submitCartData.phone"
            @update:value="submitCartData.phone = $event"
          />
        </div>
      </div>
      <p v-if="!isMobile" class="user-agreement">
        Нажимая кнопку “Заказать”, я подтверждаю свою дееспособность,даю
        согласие на обработку моих персональных данных.
        <a href="#">подробнее</a>
      </p>
      <div v-if="isMobile" class="mobile-user-form">
        <div class="flex">
          <BasicInput
            style="margin: 5px"
            :placeholder="'Страна, город, улица, дом'"
          />
        </div>
        <div class="flex">
          <BasicInput
            style="margin: 5px"
            :placeholder="'Квартира\\офис'"
            :value="submitCartData.flat"
            @update:value="submitCartData.flat = $event"
          />
          <BasicInput
            style="margin: 5px"
            :placeholder="'Индекс'"
            :value="submitCartData.index"
            @update:value="submitCartData.index = $event"
          />
        </div>
        <div class="flex">
          <BasicInput
            style="margin: 5px"
            :placeholder="'Подъезд'"
            :value="submitCartData.podesd"
            @update:value="submitCartData.podesd = $event"
          />
          <BasicInput
            style="margin: 5px"
            :placeholder="'Этаж'"
            :value="submitCartData.tag"
            @update:value="submitCartData.etag = $event"
          />
          <BasicInput
            style="margin: 5px"
            :placeholder="'Домофон'"
            :value="submitCartData.phone"
            @update:value="submitCartData.phone = $event"
          />
        </div>
        <div class="flex">
          <BasicInput
            style="margin: 5px"
            :placeholder="'Комментарий курьеру'"
            :value="submitCartData.comments"
            @update:value="submitCartData.comments = $event"
          />
        </div>
      </div>
      <div class="customer-info__submit">
        <BasicButton @click.prevent="submitCart">{{
          isMobile ? 'ОФОРМИТЬ ЗАКАЗ' : 'ЗАКАЗАТЬ'
        }}</BasicButton>
      </div>
      <p v-if="!isMobile" class="customer-info__prepayment-info">
        При отправке заказа наложенным платежом Почта России взимает 4% от
        оценочной стоимости заказа (эти 4% включены в расчетную стоимость
        доставки).
      </p>

      <p v-if="!isMobile" class="customer-info__prepayment-info">
        Кроме этих 4%, Почта России взимает комиссию в размере 2% (но не менее
        50 рублей) при получении заказа, отправленного наложенным платежом (за
        денежный перевод оплаты заказа), данные по состоянию на 15.05.2016.
      </p>

      <p v-if="!isMobile" class="customer-info__prepayment-info">
        Таким образом, при отправке заказа по предоплате, Ваша выгода составляет
        до 6% от стоимости заказа. Убедитесь в этом сами - просто измените сумму
        аванса при доставке Почтой или EMS и вы увидите, как сильно изменяется
        Стоимость доставки.
      </p>
    </form>
  </div>
  <div v-else style="color: red">Товары в корзине отсутствуют!</div>
</template>

<script>
import Breadcrumb from '../components/BaseComponents/Breadcrumb'
import CartItem from '@/components/Cart/CartItem'
import Radio from '@/components/BaseComponents/Radio'
import BasicInput from '@/components/BaseComponents/BasicInput'
import BasicButton from '@/components/BaseComponents/BasicButton'
import { isDesktop, isMobile, isTablet } from '@/store/display'
import SelectInput from '@/components/BaseComponents/SelectInput'
import { cartCountEnding } from '@/plugins/cartCountEnding'
import {
  getProductsInCart,
  getShippingList,
  submitCart,
  deleteProductFromCart,
  updateProductCount,
  getPaymentListByShippingId,
  setPaymentMethod,
  submitPromocode,
  submitIndex,
  submitPvz,
} from '@/hooks/main'

export default {
  name: 'Cart',
  components: {
    SelectInput,
    BasicButton,
    BasicInput,
    Radio,
    CartItem,
    Breadcrumb,
  },
  emits: ['updateProductInCart'],
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
      CartItems: null,
      dataArray: [
        { id: 10 - 11, text: 'с 10 до 11' },
        { id: 11 - 12, text: 'с 11 до 12' },
        { id: 12 - 13, text: 'с 12 до 13' },
        { id: 13 - 14, text: 'с 13 до 14' },
      ],
      RadioArray: null,
      PaymentArray: null,
      CartCost: 0,
      DeliveryCost: 0,
      CartWithPromoCost: 0,
      TotalCost: 0,
      clientSaleBonus: 0,
      currier_service: null,
      submitCartData: {
        shipping_id: '',
        payment_id: '',
        currier_service: '',
        pvz_id: null,
        index: '',
        name: 'Имя',
        middle_name: 'Отчество',
        surname: 'Фамилия',
        phone: '+7 (123) 123-1235',
        email: 'n.artur@yandex.eu',
        comments: '',
        prepayment_percent: '',
        date_ship: '',
        time_ship: '',
        area: '',
        citys: '',
        street: '',
        house: '',
        stroen: '',
        corp: '',
        podesd: '',
        flat: '',
        etag: '',
        promo_code: '',
      },
    }
  },
  setup() {
    return { isDesktop: isDesktop, isMobile: isMobile, isTablet: isTablet }
  },
  async mounted() {
    this.CartItems = await getProductsInCart()
    this.CartItems.forEach((item) => {
      this.CartCost += item.sum_s
    })
    this.CartWithPromoCost = this.CartCost
    this.RadioArray = await getShippingList()
    this.PaymentArray = await getPaymentListByShippingId(
      this.submitCartData.shipping_id
    )
    const paymentMethodResult = await setPaymentMethod(
      this.submitCartData.shipping_id,
      this.submitCartData.payment_id
    )
    this.DeliveryCost = paymentMethodResult.shipping_cost
    this.TotalCost = paymentMethodResult.total_sum
  },
  methods: {
    async deleteCardItem(i) {
      const deletedProduct = await deleteProductFromCart(i.pid)
      if (deletedProduct.success == 1) {
        const itemToDelete = this.CartItems.findIndex((el) => el.id === i.id)
        this.CartItems.splice(itemToDelete, 1)
      }
    },
    cartCountEnding: cartCountEnding,
    async submitCart() {
      const result = await submitCart({
        ...this.submitCartData,
        index: +this.submitCartData?.index,
        pvz_id: this.submitCartData?.pvz_id,
        currier_service: +this.submitCartData?.currier_service,
        shipping_id: +this.submitCartData?.shipping_id,
        payment_id: +this.submitCartData?.payment_id,
      })

      if (!result.submit_error) {
        this.$router.push('/')
        this.$notify({
          type: 'success',
          title: `Заказ №${result.order_number} успешно оформлен.`,
        })
      }
    },
    async decCount(i) {
      await updateProductCount(i.pid, -1)
      const foundItem = this.CartItems.find((el) => el.pid == i.pid)
      foundItem.num--
      this.$emit('updateProductInCart', { product: i, dec: true })
    },
    async incCount(i) {
      await updateProductCount(i.pid, 1)
      const foundItem = this.CartItems.find((el) => el.pid == i.pid)
      foundItem.num++
      this.$emit('updateProductInCart', { product: i })
    },
    async setShippingId(el) {
      if (this.submitCartData.shipping_id == el.sid) {
        return
      }

      this.submitCartData.shipping_id = el.sid
      this.PaymentArray = await getPaymentListByShippingId(
        this.submitCartData.shipping_id
      )
    },
    async setPaymentId(el) {
      if (this.submitCartData.payment_id == el.value) {
        return
      }
      this.submitCartData.payment_id = el.value
      const paymentMethodResult = await setPaymentMethod(
        this.submitCartData.shipping_id,
        this.submitCartData.payment_id,
        this.submitCartData.index
      )
      this.DeliveryCost = paymentMethodResult.shipping_cost
      this.TotalCost = paymentMethodResult.total_sum
      this.currier_service = paymentMethodResult.currier_service
    },
    async submitPromo() {
      const { success, products } = await submitPromocode(
        this.submitCartData.promo_code
      )
      if (success == 1) {
        this.$notify({
          type: 'success',
          title: 'Промокод успешно применён!',
        })
        this.CartWithPromoCost = 0
        products.forEach((item) => {
          this.CartWithPromoCost += item.promo_price
        })
        this.TotalCost = this.CartWithPromoCost + this.DeliveryCost
      } else if (success == 0) {
        this.$notify({
          type: 'error',
          title: 'Ошибка при использовании промокода!',
        })
      }
    },
    async submitIndex(e) {
      this.submitCartData.index = e
      const response = await submitIndex(
        this.submitCartData.shipping_id,
        this.submitCartData.payment_id,
        this.submitCartData.index
      )
      this.DeliveryCost = response.shipping_cost
    },
    async setPvz(id, currier_service_id) {
      this.submitCartData.pvz_id = id
      const response = await submitPvz(
        this.submitCartData.shipping_id,
        this.submitCartData.payment_id,
        currier_service_id,
        this.submitCartData.pvz_id
      )
      this.DeliveryCost = response.shipping_cost
      this.TotalCost = response.total_sum
    },
    setCurrierId(currier_service_id) {
      this.submitCartData.currier_service = currier_service_id
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
      display: flex;
      .input-border {
        width: 205px;
        display: inline-block;
        margin-left: 10px;
      }
      button {
        padding: 0;
        width: 25px;
        margin-left: 10px;
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
  margin-bottom: 10px;
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
      flex-grow: 3.5;
      padding: 0 4px;
    }
    &__city {
      flex-basis: 0;
      flex-grow: 2.2;
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
@media (max-width: $media-tablet) {
  .social-promo__header {
    p {
      font-size: 17px;
    }
  }
  .customer-info {
    .delivery-address__label {
      font-size: 14px;
    }
    .additional-delivery-info {
      width: 100%;
    }
  }
}
@media (max-width: $media-mobile) {
  .cartItems-count {
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: 5px 10px;
    border-bottom: 1px solid $border-color;
    &__cartCost {
      font-size: 15px;
      font-weight: 600;
      color: $pink;
    }
  }
  .delivery-block {
    padding: 18px;
    p {
      font-size: 15px;
      color: #000;
      font-weight: 500;
    }
    .cart-cost__description {
      font-size: 15px;
      color: #000;
      font-weight: 500;
    }
    .subscription-button {
      width: 35px;
    }
  }
  .social-promo__header {
    width: 60%;
    p {
      font-size: 15px;
    }
  }
  .social-promo__links {
    width: 40%;
    a {
      height: 30px;
      width: 30px;
      img {
        height: 30px;
        width: 30px;
      }
    }
  }
  .customer-info {
    padding: 18px;
    &__header {
      font-size: 12px;
      text-align: center;
    }
  }
}
.pvz {
  display: flex;

  &-head {
    font-weight: 700;
  }

  &-col {
    flex-basis: 50%;
  }
}

.currier-services {
  &__title {
    margin-top: 10px;
    font-weight: 700;
  }
}
</style>
