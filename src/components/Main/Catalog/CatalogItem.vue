<template>
  <div class="catalog-item flex aic jcsb" @click="$router.push('/categories')">
    <div class="catalog-item__content flex aic">
      <img src="@/assets/images/catalog.png" class="catalog-item__img" alt="" />
      <span><slot></slot></span>
    </div>
    <div class="catalog-item__arrow">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="17px"
        height="22px"
        viewBox="0 0 17 22"
        enable-background="new 0 0 17 22"
        xml:space="preserve"
      >
        <g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#d7c3cd"
            d="M9,3.35c2.333,1.267,4.333,2.733,6,4.4
		C15.4,8.183,15.717,8.6,15.95,9c0.7,0.833,0.933,1.75,0.7,2.75c-0.467,1.333-1.334,2.45-2.601,3.35
		c-0.7,0.567-1.5,1.167-2.399,1.801c-2.533,1.733-5.4,3.267-8.601,4.6c-1.333,0.566-2.167,0.467-2.5-0.3
		c-0.5-0.634-0.267-1.45,0.7-2.45L7.85,13C8.617,12.5,9,11.866,9,11.1c-0.066-0.7-0.45-1.366-1.15-2l-6.6-5.85
		c-0.967-0.9-1.2-1.667-0.7-2.3c0.333-0.833,1.167-0.983,2.5-0.45C5.717,1.633,7.7,2.583,9,3.35z"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogItem',
}
</script>

<style scoped lang="scss">
.catalog-item {
  cursor: pointer;
  margin-bottom: 8px;
  padding-right: 21px;
  &__img {
    margin-right: 17px;
  }
  &__arrow {
    svg {
      width: 9px;
    }
  }
}
</style>
