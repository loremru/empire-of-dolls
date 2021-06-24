<template>
  <ThisPageImprovement v-if="!isMobile" />
  <OurQualities v-if="!isMobile" />
  <FooterBottom />
</template>

<script>
import ThisPageImprovement from '@/components/Main/Footer/ThisPageImprovement'
import OurQualities from '@/components/Main/Footer/OurQualities'
import FooterBottom from '@/components/Main/Footer/FooterBottom'
import { isDesktop, isMobile } from '@/store/display'
export default {
  name: 'FooterApp',
  components: {
    FooterBottom,
    OurQualities,
    ThisPageImprovement,
  },
  setup() {
    return { isDesktop: isDesktop, isMobile: isMobile }
  },
}
</script>

<style scoped lang="scss"></style>
