<template>
  <div class="collapse" :class="{ collapse_active: isActive }">
    <div class="collapse__head flex jcsb aic" @click="isActive = !isActive">
      <p>{{ title }}</p>
      <img
        src="@/assets/images/arrow-down.svg"
        alt=""
        :style="isActive && 'transform: rotateZ(180deg)'"
      />
    </div>
    <div class="collapse__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collapse',
  props: {
    title: String,
  },
  data() {
    return {
      isActive: false,
    }
  },
}
</script>

<style scoped lang="scss">
.collapse {
  margin-bottom: 10px;
  &__head {
    border: 1px solid $border-color;
    padding-left: 21px;
    padding-right: 11px;
    border-radius: 7px;
    cursor: pointer;
    img {
      transition: 0.2s;
      user-select: none;
    }
  }
  &__content {
    padding: 5px 20px;
    display: none;
  }
  &_active {
    .collapse__content {
      display: block;
    }
  }
}
</style>
