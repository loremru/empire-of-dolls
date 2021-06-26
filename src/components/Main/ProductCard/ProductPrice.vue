<template>
  <div class="product__buy">
    <div class="product__buy__price">
      <p class="product__current-price">11 659 р</p>
      <p class="product__old-price">15 659 р</p>
    </div>
    <img
      src="@/assets/images/product-cart.svg"
      alt=""
      class="product__buy__cart"
    />
  </div>
</template>

<script>
export default {
  name: 'ProductPrice',
}
</script>

<style scoped lang="scss">
.product {
  &__buy {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
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
