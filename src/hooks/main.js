import api from '@/store/api'

export const getCategories = async () => {
  try {
    return (await api.get('/main/cat')).data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const getCurrentCategory = async (id) => {
  try {
    return (await api.get(`/category?cid=${id}`)).data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const getMainSlider = async () => {
  try {
    return (await api.get('/main/slider')).data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const getDailyProduct = async () => {
  try {
    return (await api.get('/product-special')).data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const getDailyProducts = async () => {
  try {
    return (await api.get('/product-special-list')).data.products
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const subscribeToNews = async (email) => {
  try {
    return (await api.post('/subscribe', { email })).data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const getPopularProducts = async () => {
  try {
    return (await api.get('/popular')).data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const getCurrentProduct = async (id) => {
  try {
    return (await api.get(`/product?pid=${id}`)).data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const getInterestingProducts = async () => {
  try {
    return (await api.get('/interesting-products')).data
  } catch (e) {
    console.log(e)
    throw e
  }
}
