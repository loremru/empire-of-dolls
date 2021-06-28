<template>
  <div
    class="preview round-block"
    :style="`height: ${height}; width: ${width}px`"
  >
    <img src="@/assets/images/product-preview.png" alt="" />
  </div>
</template>

<script>
import { isMiniDesktop } from '@/store/display'

export default {
  name: 'ProductPreview',
  props: {
    height: {
      type: String,
      default: () => '100%',
    },
    width: {
      type: Number,
      default: () => (isMiniDesktop.value ? 250 : 368),
    },
  },
}
</script>

<style scoped lang="scss">
.preview {
  padding: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

@media (max-width: $media-desktop) {
  .preview {
  }
}
</style>
