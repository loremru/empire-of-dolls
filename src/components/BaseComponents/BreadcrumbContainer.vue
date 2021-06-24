<template>
  <div class="breadcrumb-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BreadcrumbContainer',
}
</script>

<style scoped lang="scss">
.breadcrumb-container {
  height: 37px;
  display: flex;
  align-items: center;
  padding-left: 33px;
  margin-bottom: 10px;
}

@media (max-width: $media-mobile) {
  .breadcrumb-container {
    padding-left: 0;
  }
}
</style>
