<template>
  <div class="reviews round-block">
    <ReviewBlock />
    <ReviewBlock />
    <ReviewBlock />
    <ReviewBlock />
    <ReviewsPagination />
    <p class="reviews__text tac">
      Отзывы наших покупателей в официальной группе Империи Кидс можно почитать
      <a href="https://google.com" target="_blank">ЗДЕСЬ</a>
    </p>
  </div>
</template>

<script>
import ReviewBlock from '@/components/Help/ReviewBlock'
import ReviewsPagination from '@/components/Help/ReviewsPagination'
export default {
  name: 'Reviews',
  components: { ReviewsPagination, ReviewBlock },
}
</script>

<style scoped lang="scss">
.reviews {
  padding: 25px 20px;
  &__text {
    font-size: 17px;
    line-height: 1.05;
    color: $text;
    margin-top: 15px;
    a {
      font-weight: 500;
      color: #000;
      text-decoration: underline;
    }
  }
}
</style>
