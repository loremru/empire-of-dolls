<template>
  <div class="product">
    <div class="product__img">
      <img src="@/assets/images/product.png" alt="" />
      <img
        src="@/assets/images/product-favorite.svg"
        alt=""
        class="product__favorite"
      />
    </div>
    <div class="product__content">
      <p class="product__name">{{ title }}</p>
      <div class="product__price">
        <ProductPrice />
      </div>
    </div>
  </div>
</template>

<script>
import ProductPrice from '@/components/Main/ProductCard/ProductPrice'
export default {
  name: 'ProductCard',
  components: { ProductPrice },
  props: {
    title: {
      type: String,
      required: true,
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
    margin: 28px 0;
    line-height: 1;
  }
  &__favorite {
    position: absolute;
    top: 10px;
    right: 14px;
    width: 30px !important;
    height: 27px !important;
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
      margin: 20px 0;
    }
  }
}

@media (max-width: $media-mobile) {
  .product {
    &__img {
      height: 160px;
    }
    &__name {
      margin: 10px 0;
      font-size: 13px;
      padding: 0 10px;
    }
    &__price {
      padding: 0 8px 13px;
    }
  }
}
</style>
