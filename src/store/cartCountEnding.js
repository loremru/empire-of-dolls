export const cartCountEnding = (cartCount) => {
  const data = cartCount.toString().split('').pop()
  if (data == 2 || data == 3 || data == 4) {
    return 'а'
  } else if (
    data == 0 ||
    data == 5 ||
    data == 6 ||
    data == 7 ||
    data == 8 ||
    data == 9
  ) {
    return 'ов'
  } else {
    return ''
  }
}
