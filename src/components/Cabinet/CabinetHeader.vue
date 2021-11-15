<template>
  <div class="cabinet__head round-block">
    <div class="cabinet__head__tabs">
      <CabinetTabBtn :is-open="page === 0" @click="togglePage(0)"
        >Личные данные</CabinetTabBtn
      >
      <CabinetTabBtn :is-open="page === 1" @click="togglePage(1)"
        >Мои заказы</CabinetTabBtn
      >
    </div>
    <div class="cabinet__head__bonus">
      <h3>Мои бонусы:</h3>
      <span v-if="userPersonal">{{ userPersonal.user_bonus }}</span>
    </div>
  </div>
</template>

<script>
import CabinetTabBtn from '@/components/Cabinet/CabinetTabBtn'
import { getUserPersonal } from '@/hooks/main'
export default {
  name: 'CabinetHeader',
  components: { CabinetTabBtn },
  emits: ['pageChange'],
  data() {
    return {
      page: 0,
      userPersonal: null,
    }
  },
  async mounted() {
    this.userPersonal = (await getUserPersonal()).user
    const query = Number(this.$route.query.page)
    if (query >= 0) {
      this.page = query
      this.$emit('pageChange', query)
    }
  },
  methods: {
    togglePage(page) {
      this.page = page
      this.$emit('pageChange', page)
      this.$router.push(`/cabinet?page=${page}`)
    },
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
