<template>
  <ThisPageImprovement />
  <OurQualities />
  <FooterBottom />
</template>

<script>
import ThisPageImprovement from '@/components/Main/Footer/ThisPageImprovement'
import OurQualities from '@/components/Main/Footer/OurQualities'
import FooterBottom from '@/components/Main/Footer/FooterBottom'
export default {
  name: 'FooterApp',
  components: {
    FooterBottom,
    OurQualities,
    ThisPageImprovement,
  },
}
</script>

<style scoped lang="scss"></style>
