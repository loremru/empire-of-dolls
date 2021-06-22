<template>
  <div class="connection">
    <span class="flex aic" @click="isModal = true">
      <p>Связаться с нами</p>
      <img src="@/assets/images/arrow-down.svg" alt="" />
    </span>

    <ConnectionModal v-if="isModal" @close="isModal = false" />
  </div>
</template>

<script>
import ConnectionModal from '@/components/Main/Connection/ConnectionModal'
export default {
  name: 'ConnectionLink',
  components: { ConnectionModal },
  data() {
    return {
      isModal: false,
    }
  },
}
</script>

<style scoped lang="scss">
.connection {
  cursor: pointer;
  position: relative;
  p {
    font-size: 18.5px;
    color: $text;
  }
  img {
    margin-left: 9px;
  }
}
</style>
