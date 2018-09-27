import axios from 'axios'
import store from './../store/index'

let instance = axios.create()

axios.defaults.baseURL = 'http://nuxtserver.local/public/api'

export default instance
