import { api } from '@/store/api'

export const getReviews = async (page = 1) => {
  try {
    return (await api.get(`/reviews?page=${page}`)).data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const makeReview = async (formData) => {
  try {
    return (await api.post('/add-review', formData)).data
  } catch (e) {
    console.log(e)
    throw e
  }
}
