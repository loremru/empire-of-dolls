<template>
  <div class="reviews round-block">
    <ReviewBlock v-for="review in reviews" :key="review.id" :review="review" />
    <ReviewsPagination
      :current-page="currentPage"
      :page-amount="pageAmount"
      @change="pageChange"
    />
    <p class="reviews__text tac">
      Отзывы наших покупателей в официальной группе Империи Кидс можно почитать
      <a href="https://google.com" target="_blank">ЗДЕСЬ</a>
    </p>
  </div>
</template>

<script>
import ReviewBlock from '@/components/Help/ReviewBlock'
import ReviewsPagination from '@/components/Help/ReviewsPagination'
import { getReviews } from '@/hooks/reviews'
export default {
  name: 'Reviews',
  components: { ReviewsPagination, ReviewBlock },
  data() {
    return {
      reviews: null,
      currentPage: 1,
      pageAmount: 20,
    }
  },
  async mounted() {
    await this.loadReviews()
  },
  methods: {
    async pageChange(page) {
      this.currentPage = page
      await this.loadReviews()
    },
    async loadReviews() {
      const { reviews, page_count } = await getReviews(this.currentPage)
      this.reviews = reviews
      this.pageAmount = page_count
    },
  },
}
</script>

<style scoped lang="scss">
.reviews {
  padding: 25px 20px;
  max-width: 733px;
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
