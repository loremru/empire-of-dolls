<template>
  <div class="review">
    <div class="review__author">
      <img src="@/assets/images/review-author.png" alt="" />
      <div>
        <p class="review__name">{{ review.name }}</p>
        <p class="review__text">{{ review.city }}</p>
      </div>
    </div>
    <div class="review__body">
      <Rating :mark="4.5" />
      <div class="review__header flex aic jcsb">
        <p>Все нормально</p>
        <p>{{ review.date }}, {{ review.time }}</p>
      </div>
      <p class="review__text">
        {{ review.text }}
      </p>
    </div>
  </div>
</template>

<script>
import Rating from '@/components/BaseComponents/Rating'
export default {
  name: 'ReviewBlock',
  components: { Rating },
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.review {
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  &:last-of-type {
    margin-bottom: 0;
  }
  &__author {
    min-width: 182px;
    margin-right: 54px;
    display: flex;
    align-items: flex-start;
    img {
      margin-right: 10px;
    }
  }
  &__name {
    font-size: 14.5px;
    font-weight: 500;
    line-height: 1.34;
    color: #000;
    margin-bottom: 13px;
  }
  &__body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;
    > * {
      margin-bottom: 10px;
    }
  }
  &__header {
    width: 100%;
    p {
      font-size: 14.5px;
      font-weight: 500;
      line-height: 1.34;
      color: #000;
    }
  }
  &__text {
    font-size: 14.5px;
    line-height: 1.07;
    color: $text;
  }
}

@media (max-width: $media-tablet) {
  .review {
    &__author {
      margin-right: 20px;
    }
  }
}
@media (max-width: $media-mobile) {
  .review {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    &__author {
      margin-bottom: 25px;
    }
  }
}
</style>
