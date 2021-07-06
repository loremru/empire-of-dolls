import { ref } from 'vue'

const display = {
  desktop: 1280,
  tablet: 1023,
  mobile: 767,
}

export const displayType = ref('desktop')

export const isMobile = ref(false)
export const isTablet = ref(false)
export const isDesktop = ref(true)
export const isMiniDesktop = ref(false)

export const setDisplayType = () => {
  if (
    window.outerWidth < display.desktop &&
    window.outerWidth > display.tablet
  ) {
    isMiniDesktop.value = true
    isMobile.value = false
    isTablet.value = false
  } else {
    isMiniDesktop.value = false
  }
  if (window.outerWidth > display.tablet) {
    displayType.value = 'desktop'
    isMobile.value = false
    isTablet.value = false
    isDesktop.value = true
  } else if (
    window.outerWidth <= display.tablet &&
    window.outerWidth > display.mobile
  ) {
    displayType.value = 'table'
    isMobile.value = false
    isTablet.value = true
    isDesktop.value = false
    isMiniDesktop.value = false
  } else if (window.outerWidth <= display.mobile) {
    displayType.value = 'mobile'
    isMobile.value = true
    isTablet.value = false
    isDesktop.value = false
    isMiniDesktop.value = false
  }
}
