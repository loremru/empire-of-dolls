<template>
  <div class="header" ref="header" :class="{ header_fixed: fixed }">
    <div class="content">
      <div class="header__head flex jcsb">
        <div class="header__links flex aic" v-if="isMobile">
          <a href="#"
            ><img src="@/assets/images/menu.svg" alt="" height="13"
          /></a>
          <a href="#" @click.prevent="goToSearch"
            ><img src="@/assets/images/search-mobile.svg" height="13" alt=""
          /></a>
        </div>
        <Logo />
        <SearchHeader placeholder="Барби" v-if="!isMobile" />
        <div class="header__socials flex aic" v-if="!isMobile">
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
      <div class="header__bottom flex jcsb aic" v-if="!fixed && !isMobile">
        <City />
        <HeaderNav />
        <ConnectionLink v-if="isDesktop" />
        <Subscribe :width="33" v-else />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Main/Header/Logo'
import SearchHeader from '@/components/Main/Header/SearchHeader'
import NotificationItem from '@/components/Main/Header/NotificationItem'
import City from '@/components/Main/City/City'
import HeaderNav from '@/components/Main/Header/HeaderNav'
import ConnectionLink from '@/components/Main/Connection/ConnectionLink'
import { isDesktop, isMobile } from '@/store/display'
import Subscribe from '@/components/Main/Subscribe'
export default {
  name: 'HeaderApp',
  events: ['fixedChange'],
  components: {
    Subscribe,
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
      headerHeight: null,
    }
  },
  setup() {
    return { isDesktop, isMobile }
  },
  mounted() {
    this.headerHeight = this.$refs.header.offsetHeight
    document.addEventListener('scroll', () => {
      this.fixed = window.pageYOffset > this.$refs.header.offsetHeight
      this.$emit('fixedChange', {
        headerHeight: this.headerHeight,
        fixed: this.fixed,
      })
    })
  },
  methods: {
    goToSearch() {
      const Search = document.querySelector('#searchMobile')
      const Header = document.querySelector('.header')
      window.scrollTo({
        top:
          Search.getBoundingClientRect().y +
          window.pageYOffset -
          Header.offsetHeight,
        behavior: 'smooth',
      })
      // this.smoothScroll(
      //   window.pageYOffset,
      //   Search.getBoundingClientRect().y + window.pageYOffset
      // )
    },
    // smoothScroll(currentPos, lastPos) {
    //   console.log(currentPos, lastPos)
    //   let i = currentPos || 0
    //   if (i <= lastPos) {
    //     setTimeout(() => {
    //       window.scrollTo(0, i)
    //       this.smoothScroll(i + 10, lastPos)
    //     }, 10)
    //   }
    // },
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
      margin: 0 6px;
      display: flex;
      align-items: center;
    }
  }
  &__bottom {
    margin-top: 8px;
    padding-left: 15px;
  }
  &_fixed {
    position: fixed;
    z-index: 50;
  }
}
@media (max-width: $media-table) {
  .header {
    &__bottom {
      padding-left: 0;
    }
    &__links {
      min-width: 108px;
    }
  }
}
@media (max-width: 410px) {
  .header {
    &__links {
      min-width: auto;
      a {
        margin: 0 4px;
      }
      img {
        height: 16px;
      }
    }
  }
}
</style>
