import axios from './../../plugins/axios'

// axios.defaults.baseURL = 'http://localhost/vuejs-laravel-learning/laravel-nuxtjs-more-easy-to-learn/public/api'
// axios.defaults.headers.common['Authorization'] = "Bearer "+token;
// axios.defaults.headers.post['Content-Type'] = 'application/json';

export default {
    namespaced: true,
    state: {
        authToken: '',
        checkLogin: false
    },

    mutations: {
        logged (state) {
            state.checkLogin = true
        },
        registered (state, token) {
            state.authToken = token
        }
    },
    actions: {
        /*
        1 số cách call API có thể delay khá nhiều thì chúng ta nên sử dụng Promise mới ra của javascript
        1 số cách viết function mới ES6 là arrow function () => {} và rút gọn khai báo {commit} = context <=> commit = context.commit
        */

        async goLogin ({commit}, userInfo) { // when some component call dispatch (action), this method sync data
                //alert(121);
                //console.log(userInfo);
              await axios.post('http://nuxtserver.local/public/api/login', {
                email: userInfo.email,
                password: userInfo.password
              })
              .then(response=> {

                console.log(response.data);
                commit('logged');
                //commit('logged', product.id)
              })
              .catch(function (error) {
                console.log(error);
              });
              this.$router.push({
                  path: '/'
              });
        },
        async goRegister({commit}, userInfo) {
            await axios.post('http://nuxtserver.local/public/api/register', {
                email: userInfo.email,
                name: userInfo.name,
                password: userInfo.password
            })
            .then(response => {
              let token = response.data.data.access_token
              console.log(token);
              commit('registered', token);
              localStorage.setItem('token', token);
              localStorage.setItem('user', response.data.user.name);
              //commit('logged', product.id)
            })
            .catch(function (error) {
              console.log(error);
            });
            this.$router.push({
                path: '/'
            });
        }
    }
}
