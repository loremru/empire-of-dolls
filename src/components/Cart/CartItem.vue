<template>
  <div class="itemBody">
    <div class="itemBody__image">
      <img
        src="../../assets/images/sections/section(1).png"
        alt="doll photo"
      /><!-- :src="CartItem.photoURL" -->
    </div>
    <div v-if="isMobile" class="itemBody__mobile-info">
      <DailyDiscount>20%</DailyDiscount>
      <p class="itemBody__mobile-info__item-name">
        Кукла Пуллип- Вокалоид Хатсуне Мику
      </p>
      <div class="itemBody__mobile-info__price">
        <div class="counter-block flex">
          <BasicButton @click="count--" :height="28">-</BasicButton>
          <div class="itemBody__counter__input">
            <BasicInput
              borderColor="transparent"
              align="center"
              :padding="'0'"
              :height="28"
              v-model:value="count"
            />
          </div>
          <BasicButton @click="count++" :height="28">+</BasicButton>
        </div>
        <div class="prices">
          <p class="final-price">{{ CartItem.price * count }}р</p>
          <p class="old-price">
            {{ CartItem.sale * count + CartItem.price * count }}р
          </p>
        </div>
      </div>
    </div>
    <div v-if="!isMobile" class="itemBody__description">
      <div>
        <p>Производитель: {{ CartItem.dollMaker }}</p>
        <p>Артикул: {{ CartItem.dollMaker }}</p>
        <p>Рейтинг: {{ CartItem.rating }} / 5</p>
      </div>
    </div>
    <div v-if="!isMobile" class="itemBody__counter">
      <p v-if="isAvailable" class="available">В наличии</p>
      <p v-if="!isAvailable" class="not-available">Нет в наличии</p>
      <div class="counter-block flex">
        <BasicButton @click="count--" :height="34">-</BasicButton>
        <div class="itemBody__counter__input">
          <BasicInput
            align="center"
            :padding="'0'"
            :height="34"
            v-model:value="count"
          />
        </div>
        <BasicButton @click="count++" :height="34">+</BasicButton>
      </div>
    </div>
    <div v-if="!isMobile" class="itemBody__price">
      <div>
        <p>
          Цена: <span>{{ CartItem.price * count }}р</span>
        </p>
        <p>
          Скидка: <span>{{ CartItem.sale * count }}р</span>
        </p>
      </div>
    </div>
    <span @click="deleteCardItem" class="itemBody__delete-button"
      ><img src="@/assets/images/close.svg" alt=""
    /></span>
  </div>
</template>

<script>
import BasicButton from '@/components/BaseComponents/BasicButton'
import BasicInput from '@/components/BaseComponents/BasicInput'
import { isMobile, isTablet, isDesktop } from '@/store/display'
import DailyDiscount from '@/components/Main/DailyProduct/DailyDiscount'
export default {
  name: 'CartItem',
  components: { DailyDiscount, BasicInput, BasicButton },
  props: {
    CartItem: {
      type: Object,
    },
  },
  data() {
    return {
      count: 1,
      isAvailable: true,
    }
  },
  setup() {
    return { isDesktop: isDesktop, isMobile: isMobile, isTablet: isTablet }
  },
  methods: {
    deleteCardItem() {
      let i = this.CartItem
      this.$emit('deleteCardItem', i)
    },
  },
  watch: {
    count() {
      if (this.count <= 0) {
        this.deleteCardItem()
        this.count = 0
      }
    },
  },
}
</script>

<style scoped lang="scss">
.itemBody {
  margin: 12px 0;
  border-radius: 7px;
  background: #fff;
  display: flex;
  position: relative;
  > div:not(.itemBody__image) {
    width: 25%;
  }
  &__image {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 130px;
      max-width: 95%;
      max-height: 95%;
    }
  }
  &__description {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    p {
      width: 100%;
      margin: 5px 0;
      color: $grey;
      font-size: 18px;
    }
  }
  &__counter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .counter-block {
      margin: 14px 0;
    }
    .available {
      color: $purple;
    }
    .not-available {
      color: $super-red;
    }
    .not-available,
    .available {
      font-size: 16px;
      font-weight: 500;
      padding-left: 5px;
      margin: 7px 0;
    }
    button {
      margin: 0 5px;
      width: 34px;
      height: 34px;
      padding: 0;
      font-size: 20px;
      line-height: 18px;
    }
    &__input {
      display: inline-block;
      width: 34px;
      * {
        text-align: center;
      }
    }
  }
  &__price {
    display: flex;
    align-items: center;
    p {
      width: 100%;
      margin: 5px 0;
      color: $grey;
      font-size: 18px;
      span {
        font-weight: 500;
        color: #000;
      }
    }
  }
  .itemBody__delete-button {
    position: absolute;
    top: 12px;
    right: 17px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    img {
      width: 20px;
      height: 20px;
    }
  }
}
@media (max-width: $media-mobile) {
  .itemBody {
    height: 140px;
    &__counter__input {
      width: 20px;
    }
    &__image {
      width: 40%;
    }
    &__mobile-info {
      width: 60% !important;
      padding: 15px;
      &__item-name {
        margin-top: 50px;
        font-size: 13px;
        color: $text;
        line-height: 13px;
      }
      &__price {
        display: flex;
        align-items: center;
        margin-top: 10px;
        .prices {
          text-align: center;
          width: 100%;
          .old-price {
            font-size: 11px;
            color: $text;
            text-decoration: line-through;
          }
          .final-price {
            font-size: 15px;
            color: $pink;
            font-weight: 500;
          }
        }
        button {
          width: 28px;
          height: 28px;
          padding: 0;
          font-size: 20px;
          line-height: 18px;
          background: transparent;
          border: 1px solid $border-color;
          color: $border-color;
        }
      }
    }
  }
}
</style>
