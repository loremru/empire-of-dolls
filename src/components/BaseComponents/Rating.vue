<template>
  <div class="rating">
    <img
      :src="require(`@/assets/images/rating_${mark}.svg`)"
      v-for="(mark, idx) in likeArray"
      :key="idx + 'mark'"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: 'Rating',
  props: {
    mark: {
      type: Number,
      required: true,
    },
  },
  computed: {
    likeArray() {
      const isInt = Number.isInteger(this.mark)
      let intNum = parseInt(this.mark)
      const array = []

      for (let i = 1; i <= intNum; i++) array.push('full')
      if (!isInt) array.push('half')
      for (let i = isInt ? intNum + 1 : intNum + 2; i <= 5; i++)
        array.push('empty')
      return array
    },
  },
}
</script>

<style scoped lang="scss">
.rating {
  img {
    margin-right: 3px;
  }
}
</style>
