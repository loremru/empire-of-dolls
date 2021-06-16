import { ref } from 'vue'

const display = {
  desktop: 1280,
  table: 960,
  mobile: 767,
}

export const displayType = ref('desktop')

export const isMobile = ref(false)
export const isTable = ref(false)
export const isDesktop = ref(true)

export const setDisplayType = () => {
  if (window.outerWidth > display.table) {
    displayType.value = 'desktop'
    isMobile.value = false
    isTable.value = false
    isDesktop.value = true
  } else if (
    window.outerWidth <= display.table &&
    window.outerWidth > display.mobile
  ) {
    displayType.value = 'table'
    isMobile.value = false
    isTable.value = true
    isDesktop.value = false
  } else if (window.outerWidth <= display.mobile) {
    displayType.value = 'mobile'
    isMobile.value = true
    isTable.value = false
    isDesktop.value = false
  }
}
