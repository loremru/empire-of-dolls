<template>
  <div class="daily" v-if="product">
    <div class="daily__img">
      <img :src="product.spec_prod.image" alt="" />
      <DailyDiscount styles="right: 0; top: 10px; transform: translateX(50%)"
        >{{ product.spec_prod.discount_percent }}%</DailyDiscount
      >
    </div>
    <div class="daily__content flex fxdc jcsb">
      <div class="daily__body">
        <div class="daily__product">
          <h3 @click="openProduct">{{ product.spec_prod.name }}</h3>
          <p>Кукла игрушка ЛОЛ ОМГ Диджей</p>
          <Rating :mark="4.5" />
        </div>
        <div class="daily__offer flex fxdc">
          <div class="flex jcfe daily__offer__tag" style="width: 100%">
            <DailyProductTag />
          </div>
          <div class="daily__offer__time">
            <p>До конца акции</p>
            <span>{{ timeFilter(seconds) }}</span>
          </div>
          <div class="daily__offer__price flex aic">
            <p class="daily__offer__price__current">
              {{ product.spec_prod.price_discount }}р
            </p>
            <p class="daily__offer__price__past">
              {{ product.spec_prod.price }}р
            </p>
          </div>
          <BasicButton :height="isTablet ? 37 : 49">КУПИТЬ</BasicButton>
        </div>
      </div>
      <p class="tac daily__content__descriptor">
        Количество товара ограничено. Подробности узнавайте у оператора, а также
        в описании товара.
      </p>
    </div>
  </div>
</template>

<script>
import Rating from '@/components/BaseComponents/Rating'
import DailyProductTag from '@/components/Main/DailyProduct/DailyProductTag'
import BasicButton from '@/components/BaseComponents/BasicButton'
import DailyDiscount from '@/components/Main/DailyProduct/DailyDiscount'
import { isTablet } from '@/store/display'
import { getDailyProduct } from '@/hooks/main'
import timeFilter from '@/filters/timeFilter'
export default {
  name: 'DailyProduct',
  components: { DailyDiscount, BasicButton, DailyProductTag, Rating },
  setup() {
    return {
      isTablet,
    }
  },
  data() {
    return {
      product: null,
      seconds: 0,
      interval: null,
    }
  },
  async mounted() {
    this.product = await getDailyProduct()
    this.seconds =
      Number(this.product.hour_s) * 60 * 60 + Number(this.product.minute_s) * 60
    this.interval = setInterval(() => {
      this.seconds--
    }, 1000)
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
    timeFilter,
    openProduct() {
      this.$router.push(`/product/${this.product.spec_prod.pid}`)
    },
  },
}
</script>

<style scoped lang="scss">
.daily {
  height: 241px;
  width: 100%;
  background-color: #fff;
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-radius: 7.7px;
  overflow: hidden;
  &__img {
    border-top-left-radius: 7.7px;
    border-bottom-left-radius: 7.7px;
    min-width: 249px;
    max-width: 249px;
    height: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__content {
    width: 100%;
    height: 100%;
    padding-right: 25px;
    padding-top: 17px;
    > p {
      font-size: 13.5px;
      padding-bottom: 9px;
      color: $text;
    }
  }
  &__body {
    display: flex;
    justify-content: space-around;
    height: 100%;
    align-items: center;
  }
  &__product {
    h3 {
      margin: 0;
      font-size: 20.5px;
      font-weight: 500;
      cursor: pointer;
    }
    p {
      padding-bottom: 0;
      font-size: 18px;
      margin-bottom: 2px;
      color: #424242;
    }
  }
  &__offer {
    align-items: flex-start;
    margin-bottom: 25px;
    &__time {
      display: flex;
      align-items: center;
      p {
        color: $text;
        font-size: 18px;
        margin-right: 15px;
      }
      span {
        font-size: 20.5px;
        font-weight: 500;
      }
    }
    &__price {
      margin-bottom: 5px;
      height: 24px;
      &__current {
        font-size: 25px;
        font-weight: 500;
        color: $purple;
      }
      &__past {
        font-size: 18px;
        color: #828282;
        text-decoration: line-through;
        margin-left: 16px;
      }
    }
  }
}

@media (max-width: $media-desktop) and (min-width: $media-tablet + 1) {
  .daily {
    &__img {
      min-width: 180px;
      max-width: 180px;
    }
    &__product {
      h3 {
        font-size: 17px;
      }
    }
    &__offer {
      &__time {
        p {
          font-size: 12px;
        }
        span {
          font-size: 15px;
        }
      }
    }
    &__content {
      padding-right: 10px;
    }
  }
}

@media (max-width: $media-tablet) {
  .daily {
    &__content {
      padding-top: 9px;
      padding-right: 12px;
      &__descriptor {
        padding: 0 15px;
      }
    }
    &__offer {
      margin-bottom: 5px;
      align-items: center;
      &__tag {
        justify-content: center;
      }
      &__time {
        p {
          line-height: 1;
          font-size: 16px;
          white-space: nowrap;
        }
      }
      &__price {
        margin-bottom: 10px;
        width: 100%;
      }
    }
    &__product {
      margin-left: 35px;
      margin-right: 15px;
      h3 {
        font-size: 17px;
      }
    }
  }
}
</style>
