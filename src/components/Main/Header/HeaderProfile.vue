<template>
  <div class="header-profile">
    <RouterLink class="header-profile__link" to="/cabinet/">
      <img src="@/assets/images/user.png" alt="" />
    </RouterLink>
    <div class="header-profile__dropdown">
      <RouterLink to="/cabinet/">Мой профиль</RouterLink>
      <span @click.stop="logout">Выход</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderProfile.vue',
  data() {
    return {}
  },
  methods: {
    logout() {
      this.$emit('userLogout')
    },
  },
}
</script>

<style lang="scss" scoped>
.header-profile {
  width: 24px;
  margin: 8px 4px;
  display: inline-flex;
  position: relative;
  &__link {
    line-height: 0;
  }

  span {
    cursor: pointer;
  }

  img {
    width: 100%;
    height: auto;
    line-height: 0;
  }

  &__dropdown {
    width: 150px;
    position: absolute;
    z-index: 10;
    top: 100%;
    left: auto;
    right: 0;
    background: #fff;
    box-shadow: 0px 0px 5px -2px #000;
    padding: 6px 12px;
    flex-direction: column;
    border-radius: 6px;
    display: none;
  }

  &:hover {
    .header-profile__dropdown {
      display: flex;
    }
  }
}
</style>
