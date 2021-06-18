<template>
  <div class="itemBody">
    <div class="itemBody__image">
      <img
        src="../../assets/images/sections/section(1).png"
        alt="doll photo"
      /><!-- :src="CartItem.photoURL" -->
    </div>
    <div class="itemBody__description">
      <div>
        <p>Производитель: {{ CartItem.dollMaker }}</p>
        <p>Артикул: {{ CartItem.dollMaker }}</p>
        <p>Рейтинг: {{ CartItem.rating }} / 5</p>
      </div>
    </div>
    <div class="itemBody__counter">
      <p v-if="isAvailable" class="available">В наличии</p>
      <p v-if="!isAvailable" class="not-available">Нет в наличии</p>
      <div class="counter-block flex">
        <BasicButton @click="count--">-</BasicButton>
        <div class="itemBody__counter__input">
          <BasicInput align="center" :height="34" v-model:value="count" />
        </div>
        <BasicButton @click="count++">+</BasicButton>
      </div>
    </div>
    <div class="itemBody__price">
      <div>
        <p>
          Цена: <span>{{ CartItem.price }}р</span>
        </p>
        <p>
          Скидка: <span>{{ CartItem.sale }}р</span>
        </p>
      </div>
    </div>
    <span @click="count = 0" class="itemBody__delete-button"
      ><img src="@/assets/images/close.svg" alt=""
    /></span>
  </div>
</template>

<script>
import BasicButton from '@/components/BaseComponents/BasicButton'
import BasicInput from '@/components/BaseComponents/BasicInput'
export default {
  name: 'CartItem',
  components: { BasicInput, BasicButton },
  props: {
    CartItem: {
      type: Object,
      default: function () {
        return {
          photoURL: '',
          dollMaker: 'Компания',
          article: 'Артикул',
          rating: 5,
          price: 5000,
          sale: 1000,
        }
      },
    },
  },
  data() {
    return {
      count: 1,
      isAvailable: true,
    }
  },
  watch: {
    count() {
      if (this.count <= 0) {
        //удаление
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
  > div {
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
      color: $text-gray;
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
      color: $text-gray;
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
</style>
