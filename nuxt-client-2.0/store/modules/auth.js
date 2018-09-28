import axios from './../../plugins/axios'

// axios.defaults.baseURL = 'http://localhost/vuejs-laravel-learning/laravel-nuxtjs-more-easy-to-learn/public/api'
// axios.defaults.headers.common['Authorization'] = "Bearer "+token;
// axios.defaults.headers.post['Content-Type'] = 'application/json';

export default {
    namespaced: true,
    state: {
        checkLogin: false,
        userName: ''
    },

    mutations: {
        logged(state) {
            state.checkLogin = true
            state.userName = localStorage.getItem('userName')
        },
        registered(state, token) {
            state.userName = localStorage.getItem('userName')
        },
        logout(state) {
            state.checkLogin = false
            localStorage.clear()
        }
    },
    actions: {
        async fetchToken({ commit, state }) {
            if (localStorage.getItem('token')) {
                await axios
                    .get('/user', {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                'token'
                            )}`
                        }
                    })
                    .then(response => {
                        if (
                            response.data.email == localStorage.getItem('email')
                        ) {
                            commit('logged')
                        } else {
                            commit('logout')
                        }
                    })
            } else {
                commit('logout')
            }
        },
        async goLogin({ commit, state }, userInfo) {
            if (state.checkLogin == false) {
                await axios
                    .post('/login', {
                        email: userInfo.email,
                        password: userInfo.password
                    })
                    .then(response => {
                        console.log(response.data)
                        let token = response.data.data.access_token

                        localStorage.setItem('token', token)
                        localStorage.setItem('userName', response.data.userName)
                        localStorage.setItem('email', response.data.email)
                        commit('logged')
                    })
                    .catch(error => {
                        console.log(error)
                    })
                this.$router.push({ path: '/about' })
            } else {
                this.$router.push({ path: '/about' })
            }
        },
        async goRegister({ commit, state }, userInfo) {
            if (state.checkLogin == false) {
                await axios
                    .post('/register', {
                        email: userInfo.email,
                        name: userInfo.name,
                        password: userInfo.password
                    })
                    .then(response => {
                        let token = response.data.data.access_token
                        console.log(token)

                        localStorage.setItem('token', token)
                        localStorage.setItem('userName', response.data.userName)
                        localStorage.setItem('email', response.data.email)
                        commit('registered', token)
                        commit('logged')
                        //commit('logged', product.id)
                    })
                    .catch(error => {
                        console.log(error)
                    })
                this.$router.push({ path: '/about' })
            } else {
                this.$router.push({ path: '/about' })
            }
        },
        goLogout({ commit, state }) {
            if (state.checkLogin == true) {
                commit('logout')
                //resetAuthToken()
                //cookies.remove('x-access-token')
                this.$router.push({ path: '/' })
            }
        }
    }
}
