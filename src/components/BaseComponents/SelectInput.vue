<template>
  <div class="select" ref="select">
    <div
      class="select__block"
      :style="isOpen && 'border-radius: 7px 7px 0 0'"
      @click="toggleIsOpen"
    >
      <p class="txt">{{ dataArray[activeIdx].text }}</p>
      <img
        src="@/assets/images/arrow-down.svg"
        alt=""
        class="select__block__arrow"
      />
    </div>
    <div class="select__list" v-if="isOpen">
      <div
        class="select__item"
        v-for="(item, idx) in dataArray"
        :key="item.id"
        @click="select(idx)"
        :style="
          idx === activeIdx && 'background-color: rgba(215, 195, 205, 0.5)'
        "
      >
        <p class="txt">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectInput',
  emit: ['change'],
  props: {
    dataArray: {
      type: Array,
      default: () => [
        { id: '2010', text: '2010' },
        { id: '2011', text: '2011' },
        { id: '2012', text: '2012' },
        { id: '2013', text: '2013' },
        { id: '2014', text: '2014' },
      ],
    },
  },
  data() {
    return {
      activeIdx: 0,
      isOpen: false,
    }
  },
  mounted() {
    document.addEventListener('click', this.closeIfContain)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeIfContain)
  },
  methods: {
    select(idx) {
      this.activeIdx = idx
      this.$emit('change', this.dataArray[idx].id)
      this.isOpen = false
    },
    toggleIsOpen() {
      this.isOpen = !this.isOpen
    },
    closeIfContain(e) {
      if (!this.$refs.select.contains(e.target)) this.isOpen = false
    },
  },
}
</script>

<style scoped lang="scss">
.select {
  position: relative;
  width: 95px;
  height: 25px;
  &__block {
    width: 100%;
    height: 100%;
    border-radius: 7px;
    border: 1px solid $border-color;
    display: flex;
    align-items: center;
    padding-left: 12px;
    cursor: pointer;
    user-select: none;
    &__arrow {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
    }
  }
  &__list {
    background-color: #fff;
    border: 1px solid $border-color;
    border-top: none;
    border-radius: 0 0 7px 7px;
    transform: translateY(-1px);
  }
  &__item {
    cursor: pointer;
    padding: 5px 12px;
    transition: 0.2s;
    &:hover {
      background-color: $border-color !important;
    }
  }
}
</style>
