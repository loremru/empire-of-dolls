<template>
  <div class="filter round-block" ref="filter">
    <div class="filter__head flex aic jcc">
      <p class="filter__text tac">Фильтры</p>
      <img
        src="@/assets/images/close.svg"
        width="13"
        class="filter__head__close"
        alt=""
        @click="$emit('close')"
      />
    </div>
    <div class="filter__body">
      <div class="filter__section">
        <div class="filter__text">Цена</div>
        <PriceSlider />
      </div>
      <div class="filter__section">
        <div class="filter__text">бренд</div>
        <Radio
          v-for="(item, idx) in brand"
          :is-active="activeBrand === idx"
          :RadioItem="{ label: item.label }"
          :key="idx + 'brand'"
          :font-size="14"
          @check="() => (activeBrand = idx)"
        />
      </div>
      <div class="filter__section">
        <div class="filter__text">Размер</div>
        <div class="flex jcsb">
          <Radio
            v-for="(item, idx) in size"
            :is-active="activeSize === idx"
            :RadioItem="{ label: item.label }"
            :key="idx + 'brand'"
            :font-size="14"
            @check="() => (activeSize = idx)"
          />
        </div>
      </div>
      <div class="filter__section">
        <div class="filter__text">Год выпуска</div>
        <select-input />
      </div>
    </div>
  </div>
</template>

<script>
import PriceSlider from '@/components/Search/Filter/PriceSlider'
import Radio from '@/components/BaseComponents/Radio'
import SelectInput from '@/components/BaseComponents/SelectInput'
import { isMobile } from '@/store/display'
export default {
  name: 'Filter',
  components: { SelectInput, Radio, PriceSlider },
  emits: ['close'],
  data() {
    return {
      brand: [
        { label: 'Карапуз' },
        { label: 'Barbie' },
        { label: 'Огонек' },
        { label: 'Mattel' },
      ],
      activeBrand: 0,
      size: [{ label: '1/4' }, { label: '1/8' }, { label: '1/12' }],
      activeSize: 0,
    }
  },
  mounted() {
    if (isMobile.value) {
      setTimeout(() => {
        document.addEventListener('click', this.closeIfContain)
      }, 100)
    }
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeIfContain)
  },
  methods: {
    closeIfContain(e) {
      if (!this.$refs?.filter?.contains(e.target)) this.$emit('close')
    },
  },
}
</script>

<style scoped lang="scss">
.filter {
  width: 252px;
  min-width: 252px;
  &__text {
    text-transform: uppercase;
    font-size: 15px;
    color: $text;
  }
  &__head {
    border-bottom: 1px solid $border-color;
    position: relative;
    height: 47px;
    &__close {
      top: 16px;
      right: 11px;
      position: absolute;
      cursor: pointer;
    }
  }
  &__body {
    padding: 12px 27px;
  }
  &__section {
    margin-bottom: 24px;
    .filter__text {
      margin-bottom: 5px;
    }
  }
}
@media (max-width: $media-tablet) {
  .filter {
    width: 220px;
    min-width: 220px;
    &__body {
      padding: 12px;
    }
  }
}

@media (max-width: $media-mobile) {
  .filter {
    z-index: 500;
    width: 100%;
    position: absolute;
    left: 0;
    top: 220px;
    box-shadow: 0 0 9px 2px #0003;
  }
}
</style>
