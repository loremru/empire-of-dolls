<template>
  <div class="cabinet__head round-block">
    <div class="cabinet__head__tabs">
      <CabinetTabBtn :is-open="page === 0" @click="page = 0"
        >Личные данные</CabinetTabBtn
      >
      <CabinetTabBtn :is-open="page === 1" @click="page = 1"
        >Мои заказы</CabinetTabBtn
      >
    </div>
    <div class="cabinet__head__bonus">
      <h3>Мои бонусы:</h3>
      <span>83</span>
    </div>
  </div>
</template>

<script>
import CabinetTabBtn from '@/components/Cabinet/CabinetTabBtn'
export default {
  name: 'CabinetHeader',
  components: { CabinetTabBtn },
  data() {
    return {
      page: 0,
    }
  },
}
</script>

<style scoped lang="scss">
.cabinet__head {
  padding: 26px 53px 26px 18px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7px;
  &__tabs {
    width: 70%;
    display: flex;
    align-items: center;
    .tabBtn:first-child {
      margin-right: 10px;
    }
  }
  &__bonus {
    display: flex;
    align-items: center;
    h3 {
      font-size: 18.5px;
      font-weight: 500;
      line-height: 1;
      color: $text;
      margin: 0;
    }
    span {
      color: $pink;
      font-size: 24.5px;
      font-weight: 500;
      line-height: 0.76;
      margin-left: 11px;
    }
  }
}

@media (max-width: $media-desktop) {
  .cabinet__head {
    padding: 26px 15px;
    &__tabs {
      width: 65%;
    }
  }
}
</style>
