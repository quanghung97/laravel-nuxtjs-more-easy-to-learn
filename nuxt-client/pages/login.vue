<template>
  <div>
      <b-form v-if="!checkLogin">
    <b-container>
        <b-row cols="12" class="text-left">

                <b-col cols="6">
                    <b-form-group id="exampleInputGroup1"
                              label="Email:"
                              label-for="exampleInput1"

                              description="We'll never share your email with anyone else.">
                                <b-form-input id="exampleInput1"
                                            type="email"
                                            v-model="userInfo.email"
                                            required
                                            placeholder="Enter email">
                                </b-form-input>
                    </b-form-group>
                </b-col>
        </b-row>
        <b-row class="text-left">
                <b-col cols="6">
                    <b-form-group id="exampleInputGroup2"
                                  label="Password:"
                                  label-for="exampleInput2">
                                  <b-form-input id="exampleInput2"
                                                type="password"
                                                v-model="userInfo.password"
                                                required
                                                placeholder="Enter password">
                                  </b-form-input>
                    </b-form-group>
                </b-col>

                <b-col cols="8">
                  <b-button @click="goLogin(userInfo)" type="button" variant="primary">Submit</b-button>
                <b-col>




        </b-row>
    </b-container>
</b-form>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
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
