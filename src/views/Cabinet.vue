<template>
  <Breadcrumb :links-list="LinksForBreadcrumb" />
</template>
<script>
import Breadcrumb from '../components/BaseComponents/Breadcrumb'
export default {
  name: 'Home',
  components: { Breadcrumb },
  data() {
    return {
      LinksForBreadcrumb: [
        {
          text: 'Главная',
          pageLink: '/',
        },
        {
          text: 'Личный кабинет',
          pageLink: '/cabinet',
        },
      ],
    }
  },
}
</script>
