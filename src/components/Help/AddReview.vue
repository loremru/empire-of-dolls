<template>
  <div class="addReview round-block">
    <h3>Добавить отзыв</h3>
    <form class="addReview__form" @submit.prevent="submit">
      <div class="flex">
        <div class="addReview__left">
          <BasicInput placeholder="Заголовок отзыва" :height="25" />
          <div class="addReview__line">
            <div class="addReview__name">Имя <span>*</span></div>
            <BasicInput
              :height="25"
              type="name"
              v-model:value="formData.name"
            />
          </div>
          <div class="addReview__line">
            <div class="addReview__name">Город <span>*</span></div>
            <BasicInput
              :height="25"
              type="city"
              v-model:value="formData.city"
            />
          </div>
          <div class="addReview__line">
            <div class="addReview__name">Email <span>*</span></div>
            <BasicInput
              :height="25"
              type="email"
              v-model:value="formData.email"
            />
          </div>
        </div>
        <div class="addReview__right">
          <BasicTextarea
            placeholder="Текст отзыва"
            required
            v-model:value="formData.text"
          />
        </div>
      </div>
      <div class="addReview__button flex jcc">
        <BasicButton :disabled="loading" :height="49" uppercase
          >ДОБАВИТЬ ОТЗЫВ</BasicButton
        >
      </div>
    </form>
  </div>
</template>

<script>
import BasicInput from '@/components/BaseComponents/BasicInput'
import BasicTextarea from '@/components/BaseComponents/BasicTextarea'
import BasicButton from '@/components/BaseComponents/BasicButton'
import { makeReview } from '@/hooks/reviews'
export default {
  name: 'AddReview',
  components: { BasicButton, BasicTextarea, BasicInput },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        city: '',
        text: '',
      },
      loading: false,
    }
  },
  methods: {
    async submit() {
      try {
        if (!this.loading) {
          this.loading = true
          await makeReview(this.formData)
          this.$notify({
            text: 'Отзыв оставлен',
            type: 'success',
          })
          this.formData = {
            name: '',
            email: '',
            city: '',
            text: '',
          }
        }
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped lang="scss">
.addReview {
  padding: 21px;
  margin: 11px 0;
  h3 {
    font-size: 18.5px;
    font-weight: 500;
    line-height: 1;
    color: $text;
    margin-bottom: 21px;
    margin-top: 0;
    text-align: center;
  }
  &__form {
    > .flex {
      width: 100%;
    }
  }
  &__left {
    width: 36%;
    margin-right: 4%;
  }
  &__right {
    width: 60%;
  }
  &__line {
    display: flex;
    align-items: center;
    margin-top: 12px;
  }
  &__name {
    font-size: 17px;
    color: $text-gray;
    display: flex;
    width: 90px;
    span {
      color: $pink;
    }
  }
  &__button {
    margin-top: 25px;
  }
}

@media (max-width: $media-mobile) {
  .addReview {
    &__left {
      width: 100%;
      margin: 0;
    }
    &__right {
      width: 100%;
      margin-top: 12px;
      display: flex;
    }
    &__form > .flex {
      flex-direction: column;
    }
    &__button {
      margin-top: 12px;
    }
  }
}
</style>
