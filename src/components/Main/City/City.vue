<template>
  <div class="city">
    <span class="flex aic" @click="isModal = true">
      <img src="@/assets/images/place.png" alt="" />
      <p class="city__text">{{ city }}</p>
    </span>
    <CityModal
      v-if="isModal"
      @close="isModal = false"
      @onCitySelect="onCitySelect"
      @getUserData="getUserData"
    />
  </div>
</template>

<script>
import CityModal from '@/components/Main/City/CityModal'
export default {
  name: 'City',
  components: { CityModal },
  emits: ['onCitySelect'],
  props: {
    city: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      isModal: false,
    }
  },
  methods: {
    onCitySelect(city) {
      this.$emit('onCitySelect', city)
    },
    getUserData() {
      this.$emit('getUserData')
    },
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
