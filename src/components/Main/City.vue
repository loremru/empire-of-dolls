<template>
  <div class="city flex aic">
    <img src="@/assets/images/place.png" alt="" />
    <p class="city__text">{{ city }}</p>
  </div>
</template>

<script>
export default {
  name: 'City',
  data() {
    return {
      city: 'Санкт-Петербург',
    }
  },
}
</script>

<style scoped lang="scss">
.city {
  img {
    margin-right: 11px;
  }
}
</style>
