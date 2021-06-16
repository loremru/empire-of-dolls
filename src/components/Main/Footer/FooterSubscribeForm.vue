<template>
  <div class="FooterSubscribeForm">
    <form>
      <input
        class="subscription-email"
        type="email"
        placeholder="example@mail.ru"
        required
      />
      <button class="subscription-button">подписаться</button>
    </form>
    <p class="subscription-form-text">
      Нажимая на кнопку “Подписаться”, я даю согласие на обработку персональных
      данных в соответствии с
      <a href="#" target="_blank"
        >“Политикой в области обработки и защиты персональных данных”</a
      >.
    </p>
  </div>
</template>

<script>
export default {
  name: 'FooterSubscribeForm',
}
</script>

<style scoped lang="scss">
.subscription-email {
  border-radius: 7px;
  border: 1px solid $border-color;
  padding-left: 12px;
  height: 38px;
  width: 350px;
}
.subscription-button {
  background: $pink;
  border: none;
  height: 38px;
  line-height: 37px;
  width: 150px;
  color: rgba(250, 250, 250, 0.78);
  text-transform: uppercase;
  border-radius: 7px;
  margin-left: 7px;
  cursor: pointer;
}
.subscription-form-text {
  width: 500px;
  color: $text;
  font-size: 14px;
  margin-top: 5px;
  a {
    color: $text;
    text-decoration: underline;
  }
}
</style>
