export const cartCountEnding = (cartCount) => {
  const data = Number(cartCount.toString().split('').pop())
  if (data >= 5 || data === 0) {
    return 'товаров'
  } else if (data >= 2) {
    return 'товара'
  }
  return 'товар'
}
