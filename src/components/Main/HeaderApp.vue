<template>
  <div class="header" ref="header" :class="{ header_fixed: fixed }">
    <div class="content">
      <div class="header__head flex jcsb">
        <Logo />
        <SearchHeader placeholder="Барби" />
        <div class="header__socials flex aic">
          <a href="#" target="_blank"
            ><img src="@/assets/images/telegram.svg" alt=""
          /></a>
          <a href="#" target="_blank"
            ><img src="@/assets/images/viber.svg" alt=""
          /></a>
          <a href="#" target="_blank"
            ><img src="@/assets/images/whatsapp.svg" alt=""
          /></a>
        </div>
        <div class="header__links flex aic">
          <RouterLink to="#"
            ><img src="@/assets/images/like.svg" alt=""
          /></RouterLink>
          <RouterLink to="#"
            ><img src="@/assets/images/key.svg" alt=""
          /></RouterLink>
          <RouterLink to="#"
            ><NotificationItem
              ><img src="@/assets/images/cart.svg" alt="" /></NotificationItem
          ></RouterLink>
        </div>
      </div>
      <div class="header__bottom flex jcsb aic" v-if="!fixed">
        <City />
        <HeaderNav />
        <ConnectionLink />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Main/Logo'
import SearchHeader from '@/components/Main/SearchHeader'
import NotificationItem from '@/components/Main/NotificationItem'
import City from '@/components/Main/City'
import HeaderNav from '@/components/Main/HeaderNav'
import ConnectionLink from '@/components/Main/Connection/ConnectionLink'
export default {
  name: 'HeaderApp',
  components: {
    ConnectionLink,
    HeaderNav,
    City,
    NotificationItem,
    SearchHeader,
    Logo,
  },
  data() {
    return {
      fixed: false,
    }
  },
  mounted() {
    document.addEventListener(
      'scroll',
      () => (this.fixed = window.pageYOffset > this.$refs.header.offsetHeight)
    )
  },
}
</script>

<style scoped lang="scss">
.header {
  padding: 12px 0;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid $border-color;
  box-shadow: 2.5px 4.3px 5px 0 rgba(0, 0, 0, 0.05);
  &__socials,
  &__links {
    a {
      height: 24px;
      display: block;
      margin: 0 6px;
    }
  }
  &__bottom {
    margin-top: 8px;
    padding-left: 15px;
  }
  &_fixed {
    position: fixed;
  }
}
</style>
