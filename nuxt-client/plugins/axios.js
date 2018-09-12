import axios from 'axios'
import store from './../store/index'

let instance = axios.create()

if (process.BROWSER_BUILD) {
  const swal = require('sweetalert2')
  instance.interceptors.request.use(
    (config) => {
      if (store.getters.authToken) {
        config.headers.common['Authorization'] = `Bearer ${store.getters.authToken}`
      }
      return config
    },
    (error) => Promise.reject(error)
  )
  instance.interceptors.response.use(
    response => response,
    (error) => {
      if (error.response.status >= 500) {
        swal({
          type: 'error',
          title: 'Oops...',
          html: 'Something went wrong! Please try again.'
        })
      } else if (error.response.status === 401 && store.getters.authUser) {
        swal({
          title: 'Session Expired!',
          html: 'Please log in again to continue.',
          allowOutsideClick: false
        })
        .then(() => store.dispatch('logout'))
        .catch(swal.noop)
      }
      return Promise.reject(error)
    }
  )
}

export default instance
