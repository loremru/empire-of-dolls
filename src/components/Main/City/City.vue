<template>
  <div class="city">
    <span class="flex aic" @click="isModal = true">
      <img src="@/assets/images/place.png" alt="" />
      <p class="city__text">{{ city }}</p>
    </span>
    <CityModal v-if="isModal" @close="isModal = false" />
  </div>
</template>

<script>
import CityModal from '@/components/Main/City/CityModal'
export default {
  name: 'City',
  components: { CityModal },
  data() {
    return {
      city: 'Санкт-Петербург',
      isModal: false,
    }
  },
}
</script>

<style scoped lang="scss">
.city {
  position: relative;
  span {
    cursor: pointer;
  }
  img {
    margin-right: 11px;
  }
}
</style>
