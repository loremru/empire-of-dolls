<template>
  <div class="FooterSubscribeForm">
    <form>
      <BasicInput />
      <BasicButton />
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
import BasicInput from '@/components/BaseComponents/BasicInput'
import BasicButton from '@/components/BaseComponents/BasicButton'
export default {
  name: 'FooterSubscribeForm',
  components: { BasicButton, BasicInput },
}
</script>

<style scoped lang="scss">
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
