<template>
  <nav class="nav flex aic jcsb">
    <RouterLink to="/">Главная</RouterLink>
    <RouterLink to="/">О нас</RouterLink>
    <RouterLink to="/">Доставка и оплата</RouterLink>
    <RouterLink to="/">Отзывы и помощь</RouterLink>
    <RouterLink to="/">Оптом</RouterLink>
  </nav>
</template>

<script>
export default {
  name: 'HeaderNav',
}
</script>

<style scoped lang="scss">
.nav {
  a {
    font-size: 18px;
    font-weight: 500;
    color: #000;
    margin: 0 12px;
  }
}

@media (max-width: $media-table) {
  .nav {
    a {
      font-size: 15px;
    }
  }
}
</style>
