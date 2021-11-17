<template>
  <div class="product__buy">
    <div class="product__buy__price">
      <p class="product__current-price">{{ product.price }} р</p>
      <p class="product__old-price" v-if="product.price__discount !== '0'">
        {{ product.price_discount }} р
      </p>
    </div>
    <img
      src="@/assets/images/product-cart.svg"
      alt=""
      class="product__buy__cart"
      v-if="!buyBtn"
      @click.stop="addToCart"
    />
    <BasicButton v-else uppercase>Купить</BasicButton>
  </div>
</template>

<script>
import BasicButton from '@/components/BaseComponents/BasicButton'
export default {
  name: 'ProductPrice',
  components: { BasicButton },
  props: {
    buyBtn: {
      type: Boolean,
      default: false,
    },
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async addToCart() {
      this.$emit('updateProductInCart', {
        product: this.product,
        count: 1,
      })
    },
  },
}
</script>

<style scoped lang="scss">
.product {
  &__buy {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 41px;
  }
  &__current-price {
    font-size: 22.5px;
    color: $pink;
    font-weight: bold;
    line-height: 1;
  }
  &__old-price {
    font-size: 17.5px;
    color: $grey;
    text-decoration: line-through;
  }
}

@media (max-width: $media-tablet) {
  .product {
    &__current-price {
      font-size: 19px;
    }
    &__old-price {
      font-size: 15px;
      color: $text;
    }
  }
}
</style>
