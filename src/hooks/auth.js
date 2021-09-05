import { api, updateAxiosOptions } from '@/store/api'

export const register = async (formData) => {
  try {
    return (await api.post('/registration', formData)).data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const login = async (formData) => {
  try {
    const { token } = (await api.post('/login', formData)).data
    updateAxiosOptions(token)
    return token
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const changePassword = async (formData) => {
  try {
    return (await api.post('/change-pass', formData)).data
  } catch (e) {
    console.log(e)
    throw e
  }
}
