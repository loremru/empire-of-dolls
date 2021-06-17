<template>
  <div class="improvementMessage">
    <a href="#">
      <img
        src="@/assets/images/improvementMessage.svg"
        alt="improvementMessage"
      />
      <span>Что можно улучшить на этой странице?</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ThisPageImprovement',
}
</script>

<style scoped lang="scss">
.improvementMessage {
  margin: 35px 0 43px 0;
  a {
    margin-left: 180px;
    display: flex;
    span {
      font-size: 18.5px;
      color: $text;
      margin-left: 20px;
    }
  }
}
@media (max-width: $media-table) {
  .improvementMessage {
    a {
      margin-left: 24px;
    }
  }
}
</style>
