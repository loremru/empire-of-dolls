<template>
  <div class="FooterSubscribeForm">
    <form class="flex">
      <BasicInput v-model:value="value" placeholder="example@mail.ru" />
      <BasicButton>ПОДПИСАТЬСЯ</BasicButton>
    </form>
    <SubscriptionFormText v-if="isDesktop" />
  </div>
</template>

<script>
import BasicInput from '@/components/BaseComponents/BasicInput'
import BasicButton from '@/components/BaseComponents/BasicButton'
import { isDesktop } from '@/store/display'
import SubscriptionFormText from '@/components/Main/Footer/SubscriptionFormText'
export default {
  name: 'FooterSubscribeForm',
  components: { SubscriptionFormText, BasicButton, BasicInput },
  setup() {
    return { isDesktop: isDesktop }
  },
  data() {
    return {
      value: '1w',
    }
  },
}
</script>

<style scoped lang="scss">
.FooterSubscribeForm {
  padding: 0 15px;
}
@media (max-width: $media-table) {
  .FooterSubscribeForm {
    width: 50%;
  }
}
</style>
