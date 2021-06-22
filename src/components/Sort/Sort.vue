<template>
  <div class="sort" ref="sort">
    <div class="sort__block" @click="toggleIsOpen" v-if="!isMobile">
      <p class="txt">{{ dataArray[activeIdx].text }}</p>
      <img
        src="@/assets/images/arrow-down.svg"
        alt=""
        class="sort__block__arrow"
      />
    </div>

    <SortBtn text="Сортировка" @click="toggleIsOpen" v-else>
      <img src="@/assets/images/sort.svg" alt="" />
    </SortBtn>

    <div
      class="sort__list"
      v-if="isOpen"
      :class="{ sort__list_active: isOpen }"
    >
      <div class="sort__block" @click="toggleIsOpen">
        <img
          src="@/assets/images/close.svg"
          class="sort__close"
          v-if="isMobile"
          alt=""
        />
        <p class="txt">{{ dataArray[activeIdx].text }}</p>
        <img
          src="@/assets/images/arrow-down.svg"
          alt=""
          class="sort__block__arrow"
          :style="isOpen && 'transform: translateY(-50%) rotateZ(180deg);'"
          v-if="!isMobile"
        />
      </div>
      <div
        class="sort__item hover-block"
        v-for="item in sortedArray"
        :key="item.id"
        @click="select(item.id)"
      >
        <p class="txt">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { isMobile } from '@/store/display'
import SortBtn from '@/components/Sort/SortBtn'
export default {
  name: 'Sort',
  components: { SortBtn },
  emit: ['change'],
  props: {
    dataArray: {
      type: Array,
      default: () => [
        { id: 'popular', text: 'Популярные' },
        { id: 'price-increase', text: 'Возрастание цены' },
        { id: 'price-descending', text: 'Убывание цены' },
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
    setTimeout(() => {
      document.addEventListener('click', this.closeIfContain)
    }, 100)
  },
  unmounted() {
    console.log('re')
    document.removeEventListener('click', this.closeIfContain)
  },
  setup() {
    return { isMobile }
  },
  methods: {
    select(id) {
      const idx = this.dataArray.findIndex((val) => val.id === id)
      this.activeIdx = idx
      this.$emit('change', this.dataArray[idx].id)
      this.isOpen = false
    },
    toggleIsOpen() {
      this.isOpen = !this.isOpen
    },
    closeIfContain(e) {
      if (!this.$refs.sort?.contains(e.target)) this.isOpen = false
    },
  },
  computed: {
    sortedArray() {
      return this.dataArray.filter((val, idx) => idx !== this.activeIdx)
    },
  },
}
</script>

<style scoped lang="scss">
.sort {
  position: relative;
  width: 249px;
  height: 48px;

  &__block {
    width: 249px;
    height: 48px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    padding-left: 28px;
    cursor: pointer;
    background-color: #fff;
    user-select: none;
    position: relative;
    &__arrow {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      transition: 0.2s;
    }
    .txt {
      font-size: 18.5px;
      font-weight: 500;
    }
  }
  &__list {
    top: 0;
    left: 0;
    background-color: #fff;
    border-radius: 7px;
    transform: translateY(-1px);
    z-index: 50;
    position: absolute;
    width: 100%;
    padding-bottom: 6px;
    transition: 0.2s;
    &_active {
      box-shadow: 0 0 9px 2px #0003;
    }
  }
  &__item {
    cursor: pointer;
    padding: 6px 28px;
    transition: 0.2s;
    .txt {
      color: $text-gray;
      font-size: 18.5px;
      font-weight: 500;
    }
  }
}

@media (max-width: $media-mobile) {
  .sort {
    width: auto;
    height: auto;
    &__block {
      height: 27px;
      width: 100%;
      padding: 0 28px;
      position: static;
      .txt {
        font-weight: 600;
      }
    }
    &__close {
      position: absolute;
      top: 7px;
      right: 7px;
      width: 16px;
    }
    &__list {
      padding-top: 23px;
      padding-bottom: 23px;
      width: 245px;
      left: auto;
      right: 0;
    }
    &__item {
      padding: 0 28px;
      height: 27px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
