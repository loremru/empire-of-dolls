<template>
  <div class="wholesale">
    <BreadcrumbContainer v-if="!isTablet">
      <Breadcrumb :links-list="$route.meta.tableBreadCrumb" />
    </BreadcrumbContainer>
    <div class="flex">
      <div class="wholesale__container round-block">
        <div>
          <p class="tac">
            Уважаемые коллеги, <br />
            мы предлагаем игрушки из нашего ассортимента оптом.
          </p>
        </div>
        <div class="wholesale__work">
          <p class="tac">Условия работы простые:</p>
          <div class="wholesale__work__line">
            <p>Заказ от <span>10</span> кукол</p>
            <svg
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="8px"
              height="11px"
              viewBox="0 0 8 11"
              xml:space="preserve"
            >
              <g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#d043a9"
                  d="M0.2,0.7c0.167-0.4,0.566-0.467,1.2-0.2c1.267,0.533,2.217,0.983,2.85,1.35c1.1,0.6,2.05,1.3,2.85,2.1c0.2,0.2,0.351,0.4,0.45,0.6C7.884,4.95,8,5.383,7.9,5.85c-0.233,0.633-0.65,1.167-1.25,1.6C6.316,7.717,5.934,8,5.5,8.3c-1.2,0.834-2.567,1.566-4.1,2.2c-0.633,0.267-1.033,0.217-1.2-0.15c-0.233-0.3-0.117-0.683,0.35-1.149L3.7,6.45c0.366-0.233,0.55-0.534,0.55-0.9C4.217,5.217,4.033,4.9,3.7,4.6L0.55,1.8C0.083,1.367-0.033,1,0.2,0.7z"
                />
              </g>
            </svg>
            <p>Предоплата <span>100%</span></p>
          </div>
        </div>
        <div>
          <p>
            После выставления счета заказ должен быть оплачен в течении двух
            суток, после чего бронь на оптовый заказ снимается. Мы работаем с
            юридическими лицами и ИП/физическими лицами. Оплата - на расчетный
            счет. <br /><br />
            Запрос на оптовый прайс-лист на нашу продукцию вы можете сделать по
            электронной почте
            <a href="mailto:opt@dollsempire.ru">opt@dollsempire.ru.</a>
          </p>
        </div>
        <div class="wholesale__contacts">
          <a href="tel:89118201459">8 911 820 14 59</a>
          <div class="flex jcc aic">
            <img src="@/assets/images/about/vk.png" alt="" />
            <img src="@/assets/images/about/ok.png" alt="" />
            <img src="@/assets/images/about/facebook.png" alt="" />
            <img src="@/assets/images/about/inst.png" alt="" />
          </div>
        </div>
      </div>
      <PopularProducts :amount="2" />
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/BaseComponents/Breadcrumb'
import BreadcrumbContainer from '@/components/BaseComponents/BreadcrumbContainer'
import PopularProducts from '@/components/Main/Delivery/PopularProducts'

export default {
  name: 'Wholesale',
  components: { PopularProducts, BreadcrumbContainer, Breadcrumb },
}
</script>

<style scoped lang="scss">
.wholesale {
  margin-bottom: 10px;
  > .flex {
    align-items: stretch;
  }
  &__container {
    padding: 82px;
    > div {
      margin-bottom: 58px;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
    p {
      font-size: 18px;
      color: $text;
      a {
        color: #000;
        font-weight: 500;
      }
    }
  }
  &__work {
    &__line {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 25px;
      svg {
        margin: 0 26px;
        transform: translateY(5px);
      }
      p {
        line-height: 1;
        span {
          font-size: 38px;
        }
      }
    }
  }
  &__contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      font-size: 24.5px;
      font-weight: 500;
      line-height: 1;
      color: #000;
      margin-bottom: 65px;
    }
    img {
      margin: 0 9px;
    }
  }
}

@media (max-width: $media-tablet) {
  .wholesale {
    &__container {
      padding: 60px 40px;
    }
  }
}

@media (max-width: $media-mobile) {
  .wholesale {
    &__container {
      padding: 25px 15px;
      p {
        font-size: 15px;
      }
      > div {
        margin-bottom: 30px;
      }
    }
    &__work {
      &__line {
        flex-direction: column;
        align-items: center;
        svg {
          margin: 15px 0;
          transform: rotateZ(90deg);
        }
      }
    }
    &__contacts {
      a {
        margin-bottom: 35px;
      }
    }
  }
}
</style>
