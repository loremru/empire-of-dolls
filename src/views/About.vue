<template>
  <div class="contacts">
    <BreadcrumbContainer v-if="!isTablet">
      <Breadcrumb :links-list="$route.meta.tableBreadCrumb" />
    </BreadcrumbContainer>
    <div class="flex aifs" style="position: relative">
      <div class="about__content round-block">
        <img src="@/assets/images/banners/1.png" alt="" />
        <div class="about__icons flex jcsb aic">
          <img src="@/assets/images/banners/icons/1.png" alt="" />
          <img src="@/assets/images/banners/icons/2.png" alt="" />
          <img src="@/assets/images/banners/icons/3.png" alt="" />
          <img src="@/assets/images/banners/icons/4.png" alt="" />
          <img src="@/assets/images/banners/icons/5.png" alt="" />
          <img src="@/assets/images/banners/icons/6.png" alt="" />
          <img src="@/assets/images/banners/icons/7.png" alt="" />
          <img src="@/assets/images/banners/icons/8.png" alt="" />
          <img src="@/assets/images/banners/icons/9.png" alt="" />
          <p>
            и многие <br />
            другие
          </p>
        </div>
        <p class="about__text-block">
          Качество гарантировано производителями. Мы проверяем состояние товара
          перед каждой отгрузкой. Весь товар сертифицирован!
        </p>
        <img src="@/assets/images/banners/2.png" alt="" />
        <p class="about__text-block">
          Мы открыли представительства в крупнейших городах России, где Вы
          можете прийти к нам в гости и сами выбрать понравившуюся куклу.
          <br /><br />
          Мы предоставляем полную юридическую информацию: <br />
          Индивидуальный предприниматель Гардабудских Д.Д. <br />
          ИНН 660305930439, ОГРН: 318665800115055 <br />
          Р/сч 40802810604000012058 в Уральском филиале АО "Райффайзенбанк"
          <br />
          кор.счет 30101810100000000906, БИК 046577906 <br />
          юр. адрес (и фактический) 620000, Екатеринбург, 8 Марта 46
          <br /><br />
          Кроме того, Вы всегда можете ознакомиться с отзывами наших покупателей
          <br />
          <a href="https://google.com" target="_blank" class="about__link"
            >в официальной группе Империя Кукол</a
          >
        </p>
        <img src="@/assets/images/banners/3.png" alt="" />
        <p>
          Если Вы сделали заказ в Империи Кидс с доставкой по почте (EMS) или
          транспортной компанией и товар Вам не подошёл, Вам нужно связаться с
          нами любым удобным способом: Вы можете написать онлайн-консультанту
          прямо на сайте, связаться с нами по электронной почте, указанной внизу
          этой страницы, или позвонить по любому из контактных номеров
          телефонов. Вы можете отказаться от заказа на любом этапе и даже после
          покупки! Мы удвоили предусмотренный законодательством РФ срок возврата
          товара до 28 дней. Никаких разочарований - только удовольствие от
          покупки! Возврат переведенных средств, производится на Ваш банковский
          счет в течение 5—30 рабочих дней (срок зависит от Банка, который выдал
          Вашу банковскую карту).
        </p>
        <img src="@/assets/images/banners/4.png" alt="" />
        <p>
          <b>Отличные цены:</b> мы - федеральная компания и получаем
          максимальные скидки на наши товары. Низкие цены для нас означают самые
          низкие цены для Вас! - 100% ассортимент: весь мир Лол, Барби, Пуллип,
          Винкс, Монстер Хай и Ever After High на расстоянии вытянутой руки в
          нашем интернет-магазине. Если какого-либо товара не оказалось в
          наличии, мы обязательно оповестим Вас, когда он поступит на склад.
          <br /><br />
          Наше кредо - <b>24/7</b>: Вы можете оформить заказ ежедневно, в любое
          время через интернет-магазин и 7 дней в неделю по телефону. Вы можете
          быть уверены, что резерв на выбранную вами куклу не будет снят до
          звонка-подтверждения нашего менеджера. <br /><br />
          <b>"Нет" нудным регистрациям:</b> на Империи Kids Вы можете сделать
          заказ в два клика! <br /><br />
          <b>Современный сервис:</b> заказы, отправленные почтой, сопровождаются
          смс - и email-оповещениями о статусе заказа.
        </p>
        <img src="@/assets/images/banners/5.png" alt="" />
        <p class="tac">
          Номера телефонов и адреса магазинов в городах-представительствах
          <br />
          <RouterLink to="/contacts" class="about__link"
            >Вы можете найти здесь</RouterLink
          >
        </p>
        <div class="about__contacts flex aic jcsa">
          <p>8-800-555-3761</p>
          <p>admin@dollsempire.ru</p>
          <div class="flex">
            <img src="@/assets/images/about/vk.png" alt="" />
            <img src="@/assets/images/about/ok.png" alt="" />
            <img src="@/assets/images/about/facebook.png" alt="" />
            <img src="@/assets/images/about/inst.png" alt="" />
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
import PopularProducts from '@/components/Main/Delivery/PopularProducts'
import { isTablet } from '@/store/display'
export default {
  name: 'About',
  components: { PopularProducts, BreadcrumbContainer, Breadcrumb },
  setup() {
    return {
      isTablet,
    }
  },
}
</script>

<style scoped lang="scss">
.about {
  &__content {
    padding: 11px 12px;
    flex-grow: 1;
    width: calc(100% - 249px);
    margin-bottom: 10px;
    p {
      font-size: 17px;
      line-height: 1;
      color: $text;
      margin: 6px 0;

      b {
        font-weight: 500;
        color: #000;
      }
    }
    > img {
      width: 100%;
      object-fit: contain;
    }
  }
  &__link {
    font-weight: 500;
    color: #000;
    text-decoration: underline;
  }
  &__icons {
    padding: 0 5px;
    p {
      font-size: 15.5px;
      line-height: 1;
      color: $text;
    }
  }
  &__text-block {
    margin-left: 10px !important;
  }
  &__contacts {
    margin: 15px 0;
    img {
      margin: 0 9px;
    }
  }
}

@media (max-width: $media-tablet) {
  .about {
    &__icons {
      img:last-of-type {
        display: none;
      }
      p {
        display: none;
      }
    }
  }
}

@media (max-width: $media-mobile) {
  .about {
    &__icons {
      img:nth-child(n + 5) {
        display: none;
      }
    }
    &__content {
      p {
        font-size: 14px;

        margin: 10px 0 10px 0 !important;
      }
    }
    &__contacts {
      flex-direction: column;
    }
  }
}
</style>
