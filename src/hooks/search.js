import { api } from '@/store/api'

export const getPopularSearch = async () => {
  try {
    return (await api.get('/search/hints-and-products')).data
  } catch (e) {
    console.log(e)
    throw e
  }
}
