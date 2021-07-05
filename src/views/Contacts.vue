<template>
  <div class="contacts">
    <BreadcrumbContainer v-if="!isTablet">
      <Breadcrumb :links-list="$route.meta.tableBreadCrumb" />
    </BreadcrumbContainer>
    <div class="flex aifs" style="position: relative">
      <div class="contacts__content round-block">
        <div class="contacts__info flex aic mb">
          <p class="contacts__city">
            Выберите город: <span class="contacts__underline">Москва</span>
          </p>
          <a href="tel:89118201459" class="contacts__underline contacts__link"
            >8 911 820 14 59</a
          >
        </div>
        <p>
          Уникальные салон-магазины работают ежедневно с 11.00 до 20.00
          <br /><br />
          1. Ул. Марата 8, м. Маяковская
          <br /><br />
          2. Ул. Белы Куна 2, м. Международная
          <br /><br />
          Доставка до Вашего адреса - в день заказа!
          <br /><br />
          - в пределах Санкт-Петербурга 300/350 руб.
          <br /><br />
          ближайший пригород Ленинградской области 400/500 руб.
          <br /><br />
        </p>
        <div class="mb" style="position: relative; overflow: hidden">
          <a
            href="https://yandex.kz/maps/org/yaponskiy_sadik_botanicheskogo_sada/40919919362/?utm_medium=mapframe&utm_source=maps"
            style="color: #eee; font-size: 12px; position: absolute; top: 0px"
            >Японский садик ботанического сада</a
          ><a
            href="https://yandex.kz/maps/2/saint-petersburg/category/park/184106346/?utm_medium=mapframe&utm_source=maps"
            style="color: #eee; font-size: 12px; position: absolute; top: 14px"
            >Парк культуры и отдыха в Санкт‑Петербурге</a
          ><iframe
            src="https://yandex.kz/map-widget/v1/-/CCUeJ8dS-C"
            width="100%"
            height="400"
            frameborder="1"
            allowfullscreen="true"
            style="position: relative"
          ></iframe>
        </div>
        <div class="contacts__banner mb" v-if="!isMobile">
          <div class="contacts__banner__circle">
            <p>Мы открыли магазины в крупнейших городах России,</p>
          </div>
          <div class="contacts__banner__round-block">
            <p>
              чтобы Вы могли гарантировано выбрать именно <br />
              ту куклу, которую <br />
              так хочет <br />
              ваш ребёнок!
            </p>
          </div>
        </div>
        <p class="mb contacts__main-phone">
          Единый БЕСПЛАТНЫЙ номер телефона для наших любимых клиентов -
          <span class="bold">8-800-555-3761</span>
        </p>
        <img src="@/assets/images/map.png" alt="" class="contacts__map mb" />
        <div class="contacts__text">
          <p class="bold">
            Удобная доставка в пункты самовывоза в более чем в 100 городах!
          </p>
          <div>
            <p>Для предложений, вопросов и замечаний:</p>
            <p class="bold">admin@dollsempire.ru</p>
          </div>
          <div>
            <p>Для вопросов по оптовым закупкам:</p>
            <p class="bold">opt@dollsempire.ru</p>
          </div>
        </div>
      </div>
      <PopularProducts />
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/BaseComponents/Breadcrumb'
import BreadcrumbContainer from '@/components/BaseComponents/BreadcrumbContainer'
import { isDesktop, isMobile, isTablet } from '@/store/display'
import PopularProducts from '@/components/Main/Delivery/PopularProducts'
export default {
  name: 'contacts',
  components: {
    PopularProducts,
    BreadcrumbContainer,
    Breadcrumb,
  },
  setup() {
    return {
      isTablet,
      isDesktop,
      isMobile,
    }
  },
}
</script>

<style scoped lang="scss">
.mb {
  margin-bottom: 20px;
}
.bold {
  font-weight: 500;
}
.contacts {
  margin-bottom: 8px;
  &__city {
    margin-right: 50px;
  }
  &__content {
    padding: 25px 18px;
    flex-grow: 1;
    width: calc(100% - 249px);
    p {
      font-size: 17px;
      line-height: 1;
      color: $text;
    }
  }

  &__underline {
    text-decoration: underline;
    font-weight: 600;
    color: #000;
  }
  &__link {
    font-weight: 500;
  }

  &__banner {
    background: url('~@/assets/images/contacts.png') left no-repeat;
    background-size: contain;
    height: 215px;
    width: 100%;
    position: relative;
    overflow: hidden;
    p {
      font-size: 16.5px;
      line-height: 1.18;
      color: #fff;
      text-transform: uppercase;
    }
    &__circle {
      position: absolute;
      width: 166px;
      height: 166px;
      padding: 40px 20px;
      background-color: $pink;
      left: 18px;
      top: 26px;
      border-radius: 100%;
      p {
        text-align: center;
      }
    }
    &__round-block {
      height: 340px;
      width: 340px;
      position: absolute;
      background-color: $pink;
      right: -100px;
      top: -59px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      padding: 0 100px 0 53px;
    }
  }
  &__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      text-align: center;
      color: $text;
    }
    .bold {
      color: #000 !important;
    }
    div {
      margin-top: 15px;
      .bold {
        margin-top: 5px;
      }
    }
  }

  &__map {
    width: 100%;
    object-fit: contain;
  }
}

@media (max-width: $media-mobile) {
  .contacts {
    &__content {
      padding: 25px 12px;
    }
    &__city {
      margin-right: 10px;
    }
    p {
      font-size: 16px;
    }
    &__info {
      a {
        white-space: nowrap;
      }
    }
    &__main-phone {
      text-align: center;
    }
  }
}
</style>
