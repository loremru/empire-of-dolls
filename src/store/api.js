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
      title: 'Произошла непредвиденная ошибка',
      type: 'error',
    })
    return Promise.reject(error)
  }
)

export default api
