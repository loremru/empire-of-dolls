import { api } from '@/store/api'

export const getPopularSearch = async () => {
  try {
    return (await api.get('/search/hints-and-products')).data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const searchProducts = async (query, params) => {
  try {
    const searchParams = new URLSearchParams(params)
    const { products } = (
      await api.post(`/search/products?${searchParams.toString()}`, {
        query,
      })
    ).data
    return products
  } catch (e) {
    console.log(e)
    throw e
  }
}
