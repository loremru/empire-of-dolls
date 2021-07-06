<template>
  <textarea class="textarea" @keyup="keyup" :placeholder="placeholder" />
</template>

<script>
export default {
  name: 'BasicTextarea',
  props: {
    value: String,
    placeholder: String,
  },
  emits: ['update:value'],
  methods: {
    keyup(e) {
      this.$emit('update:value', e.target.value)
    },
  },
}
</script>

<style scoped lang="scss">
.textarea {
  border: solid 1px $border-color;
  border-radius: 7px;
  padding: 5px 10px;
  width: 100%;
  min-height: 97px;
  max-height: 150px;
  resize: vertical;
}
</style>
