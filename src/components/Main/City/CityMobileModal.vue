<template>
  <Modal class-of-modal="cityModalMobile" @close="$emit('close')">
    <div class="choice flex fxdc">
      <div class="choice__section">
        <h3 class="choice__header">Выбор населенного пункта</h3>
        <BasicInput placeholder="Поиск населенного пункта" />
      </div>
      <div class="choice__section">
        <h3 class="choice__header">Регион</h3>
        <div class="choice__block">
          <p class="txt">Украина</p>
          <p class="txt">Белоруссия</p>
          <p class="txt">Казахстан</p>
          <p class="txt">Адыгея</p>
          <p class="txt">Алтайский край</p>
          <p class="txt">Амурская область</p>
        </div>
      </div>
      <div class="choice__section">
        <h3 class="choice__header">Населенный пункт</h3>
        <div class="choice__block">
          <p class="txt">Барда</p>
          <p class="txt">Березники</p>
          <p class="txt">Большая Соснова</p>
          <p class="txt">Верещагино</p>
          <p class="txt">Гайны</p>
          <p class="txt">Горнозаводск</p>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from '@/components/Main/Modal'
import BasicInput from '@/components/BaseComponents/BasicInput'
export default {
  name: 'CityMobileModal',
  components: { BasicInput, Modal },
  emits: ['close'],
}
</script>

<style>
.cityModalMobile {
  width: calc(100% - 20px);
  margin: 0 10px;
  background-color: transparent !important;
  box-shadow: none !important;
}
</style>

<style scoped lang="scss">
.choice {
  padding: 30px 10px;
  width: 100%;
  margin-bottom: 60px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px 0px #0000009e;
  &__header {
    font-size: 18px;
    line-height: 1;
    font-weight: 500;
    text-align: center;
    margin: 0 auto 10px;
  }
  &__section {
    margin-bottom: 13px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__block {
    border: 1px solid $border-color;
    border-radius: 7px;
    padding: 15px;
    .txt {
      margin-bottom: 7px;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
}
</style>
