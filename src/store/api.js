import axios from 'axios'
import App from '@/main.js'

const config = {
  baseURL: process.env.VUE_APP_BASEURL,
}

const api = axios.create(config)

api.interceptors.request.use((request) => {
  getAccessToken()
    ? (request.headers.Authorization = `Bearer ${getAccessToken()}`)
    : console.log(getAccessToken())
  return request
})

api.interceptors.response.use(
  (response) => {
    localStorage.setItem('Authorization', response.data.access_token)
    return response
  },
  (error) => {
    App.$notify({
      title: error.response.data.error
        ? error.response.data.error
        : error.response.data.submit_error || 'Произошла непредвиденная ошибка',
      type: 'error',
    })
    return Promise.reject(error)
  }
)

// export const updateAxiosOptions = (token) => {
//   console.log(token)
//   localStorage.setItem('Authorization', token)
// api.defaults.headers.Authorization = `Bearer ${token}`
// api.defaults.headers.common['Authorization'] = `Bearer ${token}`
// }
//
function getAccessToken() {
  return localStorage.getItem('Authorization')
}

export { api }
