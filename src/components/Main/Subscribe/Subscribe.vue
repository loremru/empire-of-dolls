<template>
  <div class="sub" :style="`width: ${width}px`" @click="isSubModal = true">
    <img src="@/assets/images/subscribe.svg" alt="" />
  </div>
  <SubscribeModal v-if="isSubModal" @close="isSubModal = false" />
</template>

<script>
import SubscribeModal from '@/components/Main/Subscribe/SubscribeModal'
export default {
  name: 'Subscribe',
  components: { SubscribeModal },
  props: {
    width: {
      type: Number,
      default: 53,
    },
  },
  data() {
    return {
      isSubModal: false,
    }
  },
}
</script>

<style scoped lang="scss">
.sub {
  display: flex;
  cursor: pointer;
  position: relative;
  img {
    width: 100%;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.25);
  }
}
</style>
