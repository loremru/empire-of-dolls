<template>
  <div class="breadcrumb">
    <template v-for="i in linksList" :key="i">
      <RouterLink :to="i.pageLink" class="breadcrumb-item">
        {{ i.text }}
      </RouterLink>
      <span>/</span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    linksList: {
      type: Array,
      default: () => [
        {
          text: 'Главная',
          pageLink: '/',
        },
      ],
    },
  },
}
</script>

<style scoped lang="scss">
.breadcrumb-item:not(:last-of-type) {
  border-bottom: 1px solid $grey;
}
.breadcrumb {
  font-size: 13.5px;
  span {
    margin: 0 5px;
  }
  span:last-of-type {
    display: none;
  }
  * {
    color: $grey;
  }
}

@media (max-width: $media-mobile) {
  .breadcrumb {
    margin-bottom: 10px;
  }
}
</style>
