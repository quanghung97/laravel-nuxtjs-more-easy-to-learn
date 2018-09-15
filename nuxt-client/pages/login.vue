<template>
  <div>

      <b-container>
          <div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" v-model="userInfo.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" v-model="userInfo.password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>
              <div class="form-group form-check">
                <input type="checkbox"  class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button @click="goLogin(userInfo)" type="button" class="btn btn-primary">Submit</button>
          </div>
      </b-container>

  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    middleware: 'notAuthenticate',
    data() {
        return {
            userInfo: {
                email: '',
                password: ''
            }
        }
    },
  computed: {
      ...mapState('auth', {
          checkLogin: state => state.checkLogin
      })
  },
  methods: {
      ...mapActions({
          goLogin: 'auth/goLogin'
      })
  }
}
</script>
