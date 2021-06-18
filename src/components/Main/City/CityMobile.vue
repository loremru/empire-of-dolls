<template>
  <div class="city-mob flex fxdc jcsb aic">
    <p class="txt tac">Ваш город - Пермь?</p>
    <div class="flex city-mob__buttons">
      <BasicButton :height="27" uppercase>Да</BasicButton>
      <BasicButton :height="27" uppercase>Выбрать другой</BasicButton>
    </div>
    <p class="txt tac">
      От вашего выбора зависят стоимость и варианты доставки
    </p>
  </div>
</template>

<script>
import BasicButton from '@/components/BaseComponents/BasicButton'
export default {
  name: 'CityMobile',
  components: { BasicButton },
}
</script>

<style scoped lang="scss">
.city-mob {
  width: 100%;
  border-radius: 7.7px;
  padding: 12px 31px;
  background-color: #fff;
  &__buttons {
    margin: 12px 0;
  }
}
</style>
