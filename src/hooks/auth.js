// import jwt_decode from 'jwt-decode'
import { api } from '@/store/api'

export const register = async (formData) => {
  try {
    const registerResponse = (await api.post('/registration', formData)).data
    if (registerResponse.success == 0) {
      throw registerResponse.data.error
    }
    return registerResponse
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const login = async (formData) => {
  try {
    const token = (await api.post('/login', formData)).data
    if (token.success == 0) {
      throw token.error
    }
    return token.access_token
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const changePassword = async (formData) => {
  try {
    const response = (await api.post('/change-pass', formData)).data
    if (response.success == 0) {
      throw response.error
    }
    return response
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const getUserInfo = async () => {
  try {
    // const token = localStorage.getItem('Authorization')
    // const decoded = jwt_decode(token)
    const userInfoResponse = (await api.get('/user-info')).data
    if (userInfoResponse.success == 0) {
      throw userInfoResponse.error
    }
    return userInfoResponse
  } catch (e) {
    console.log(e)
    throw e
  }
}
