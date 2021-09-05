import axios from 'axios'
import App from '@/main.js'

const config = {
  baseURL: process.env.VUE_APP_BASEURL,
}

const api = axios.create(config)

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    App.$notify({
      title: error.response.data.error
        ? error.response.data.error
        : 'Произошла непредвиденная ошибка',
      type: 'error',
    })
    return Promise.reject(error)
  }
)

const updateAxiosOptions = (token) => {
  localStorage.setItem('Authorization', token)
  // api.defaults.headers.Authorization = `Bearer ${token}`
  // api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

updateAxiosOptions(localStorage.getItem('Authorization'))

export { api }
