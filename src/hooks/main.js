import { api } from '@/store/api'

export const getCategories = async () => {
  try {
    return (await api.get('/main/cat')).data.cats
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
    return (await api.get('/main/slider')).data.cats
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
    return (await api.get('/interesting-products')).data.products
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const addToFavorite = async (pid) => {
  try {
    return (await api.post('/add-to-favorite', { pid: parseInt(pid) })).data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const deleteFromFavorite = async (pid) => {
  try {
    return (await api.post('/delete-from-favorite', { pid: parseInt(pid) }))
      .data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const addToCart = async (pid, count) => {
  try {
    return (await api.post('/add-to-cart', { pid: parseInt(pid), count })).data
  } catch (e) {
    console.log(e)
    throw e
  }
}

// export const getCitiesList = async () => {
//   try {
//     return (await api.get('/city-list')).data.city_arr
//   } catch (e) {
//     console.log(e)
//     throw e
//   }
// }

export const getProductsInCart = async () => {
  try {
    return (await api.get('/cart/products')).data.products
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const getShippingList = async () => {
  try {
    return (await api.get('/cart/shipping-list')).data.shipping
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const submitCart = async (formData) => {
  try {
    return (await api.post('/cart/submit', formData)).data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const getFavorites = async () => {
  try {
    return (await api.get('/favorite')).data.products
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const deleteProductFromCart = async (pid) => {
  try {
    return (await api.post('/cart/delete-product', { pid: parseInt(pid) })).data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const updateProductCount = async (pid, count) => {
  try {
    return (await api.put('/cart/change-count', { pid: parseInt(pid), count }))
      .data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const getPaymentListByShippingId = async (id) => {
  try {
    return (await api.post('/cart/payment-list', { shipping_id: parseInt(id) }))
      .data.payment_list
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const setPaymentMethod = async (
  shipping_id,
  payment_id,
  index = null
) => {
  try {
    if (!index) {
      return (
        await api.post('/cart/payment-submit', {
          shipping_id: +shipping_id,
          payment_id: +payment_id,
        })
      ).data
    }
    return (
      await api.post('/cart/payment-submit', {
        shipping_id: +shipping_id,
        payment_id: +payment_id,
        index: +index,
      })
    ).data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const submitPromocode = async (code) => {
  try {
    return (
      await api.post('/cart/promo-code', {
        promo_code: code,
      })
    ).data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const getUserPersonal = async () => {
  try {
    return (await api.get('/user-personal')).data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const updateUserPersonal = async (formData) => {
  try {
    return (await api.put('/user-personal-update', formData)).data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const searchCityByName = async (cityName) => {
  try {
    return (await api.post('/city-input', { city: cityName })).data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const updateCityById = async (id) => {
  try {
    return (await api.post('/new-city', { city_id: +id })).data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const submitIndex = async (shipping_id, payment_id, id) => {
  try {
    return (
      await api.post('/cart/index-submit', {
        shipping_id: +shipping_id,
        payment_id: +payment_id,
        index: +id,
      })
    ).data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const submitPvz = async (
  shipping_id,
  payment_id,
  currier_service_id,
  pvz_id
) => {
  try {
    return (
      await api.post('/cart/pvz-submit', {
        shipping_id: +shipping_id,
        payment_id: +payment_id,
        currier_service_id: +currier_service_id,
        pvz_id: +pvz_id,
      })
    ).data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const logout = async () => {
  try {
    return (await api.post('/logout')).data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const getUserOrders = async () => {
  try {
    return (await api.get('/user-orders')).data
  } catch (e) {
    console.log(e)
    throw e
  }
}
