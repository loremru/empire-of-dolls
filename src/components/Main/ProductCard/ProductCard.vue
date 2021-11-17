<template>
  <div
    class="product"
    @click.prevent="$router.push(`/product/${product.pid}`)"
    v-if="product"
  >
    <div class="product__img">
      <img :src="product.image" alt="" />
      <img
        @click.stop="favoriteHandler(product.pid)"
        src="@/assets/images/product-favorite.svg"
        alt=""
        class="product__favorite"
        v-if="!product.favorite"
      />
      <img
        src="@/assets/images/close.svg"
        alt=""
        class="product__favorite"
        style="width: 15px !important; top: 7px; right: 7px"
        @click.stop="favoriteHandler(product.pid, 1)"
        v-else
      />
    </div>
    <div class="product__content">
      <p class="product__name">{{ product.name }}</p>
      <div class="product__price">
        <ProductPrice
          :product="product"
          @updateProductInCart="updateProductInCart"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductPrice from '@/components/Main/ProductCard/ProductPrice'
import { addToFavorite, deleteFromFavorite } from '@/hooks/main'

export default {
  name: 'ProductCard',
  components: { ProductPrice },
  props: {
    title: {
      type: String,
    },
    product: {
      type: Object,
      required: true,
    },
    close: Boolean,
  },
  methods: {
    async favoriteHandler(pid, status) {
      if (!status) {
        await addToFavorite(pid).then(() => {
          this.$emit('getUpdate', this.product)
        })
      } else {
        await deleteFromFavorite(pid).then(() => {
          this.$emit('getUpdate', this.product)
        })
      }
    },
    updateProductInCart(event) {
      this.$emit('updateProductInCart', event)
    },
  },
}
</script>

<style scoped lang="scss">
.product {
  border-radius: 7.7px;
  background-color: #ffffff;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__img {
    width: 100%;
    height: 249px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &__name {
    font-size: 17px;
    padding: 0 40px;
    text-align: center;
    color: $text;
    line-height: 1;

    height: 90px;
    justify-content: center;
    display: flex;
    align-items: center;
  }
  &__favorite {
    position: absolute;
    top: 10px;
    right: 14px;
    width: 24px !important;
    height: auto !important;
    object-fit: contain !important;
  }
  &__price {
    padding: 0 18px 20px;
  }
}
@media (max-width: $media-desktop) and (min-width: $media-tablet + 1) {
  .product {
    &__name {
      padding: 0 20px;
    }
    &__img {
      height: 185px;
    }
  }
}

@media (max-width: $media-tablet) {
  .product {
    &__img {
      height: 224px;
    }
    &__name {
      padding: 0 20px;
    }
  }
}

@media (max-width: $media-mobile) {
  .product {
    &__img {
      height: 160px;
    }
    &__name {
      font-size: 13px;
      padding: 0 10px;
      height: 70px;
    }
    &__price {
      padding: 0 8px 13px;
    }
  }
}
</style>
