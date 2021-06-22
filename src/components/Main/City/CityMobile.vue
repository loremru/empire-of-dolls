<template>
  <div class="city-mob flex fxdc jcsb aic">
    <p class="txt tac">Ваш город - Пермь?</p>
    <div class="flex city-mob__buttons">
      <BasicButton :height="27" uppercase>Да</BasicButton>
      <BasicButton :height="27" @click="isCityModal = true" uppercase
        >Выбрать другой</BasicButton
      >
    </div>
    <p class="txt tac">
      От вашего выбора зависят стоимость и варианты доставки
    </p>
    <div class="cityWrapper" v-if="isCityModal">
      <CityMobileModal @close="isCityModal = false" />
    </div>
  </div>
</template>

<script>
import BasicButton from '@/components/BaseComponents/BasicButton'
import CityMobileModal from '@/components/Main/City/CityMobileModal'
export default {
  name: 'CityMobile',
  components: { CityMobileModal, BasicButton },
  data() {
    return {
      isCityModal: false,
    }
  },
}
</script>

<style scoped lang="scss">
.cityWrapper {
  height: 100vh;
  position: fixed;
  z-index: 2000;
  width: 100%;
  overflow-y: auto;
  top: 49px;
  padding: 20px 0;
}
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
