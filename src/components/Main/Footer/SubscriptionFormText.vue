<template>
  <p class="subscription-form-text">
    Нажимая на кнопку “Подписаться”, я даю согласие на обработку персональных
    данных в соответствии с
    <a href="#" target="_blank"
      >“Политикой в области обработки и защиты персональных данных”</a
    >.
  </p>
</template>

<script>
export default {
  name: 'SubscriptionFormText',
}
</script>

<style scoped lang="scss">
.subscription-form-text {
  color: $text;
  font-size: 14px;
  margin-top: 5px;
  max-width: 500px;
  a {
    color: $text;
    text-decoration: underline;
  }
}
@media (max-width: $media-table) {
  .subscription-form-text {
    max-width: 640px;
    text-align: center;
    margin: auto;
    a {
      color: $purple;
      text-decoration: none;
    }
  }
}
</style>
