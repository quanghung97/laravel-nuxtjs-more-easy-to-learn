<template>
  <div>
    <b-form  @reset="onReset" v-if="!checkLogin">
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
      <b-form-group id="exampleInputGroup2"
                    label="Password:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="userInfo.password"
                      required
                      placeholder="Enter password">
        </b-form-input>
      </b-form-group>
      <b-button @click="goLogin(userInfo)" type="button" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
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
        onReset (evt) {
          evt.preventDefault();
          /* Reset our form values */
          this.form.email = '';
          this.form.name = '';
          this.form.food = null;
          this.form.checked = [];
          /* Trick to reset/clear native browser form validation state */
          this.show = false;
          this.$nextTick(() => { this.show = true });
      },
      ...mapActions({
          goLogin: 'auth/goLogin'
      })
  }
}
</script>
