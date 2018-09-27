<template>
    <div >
        <h1 v-if="checkLogin">Bạn đã đăng nhập</h1>
        <b-container v-if="!checkLogin">
            <div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                            id="exampleInputEmail1"
                            v-model="userInfo.email"
                            type="email"
                            class="form-control"
                            aria-describedby="emailHelp"
                            placeholder="Enter email">
                    <small
                            id="emailHelp"
                            class="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                            id="exampleInputPassword1"
                            v-model="userInfo.password"
                            type="password"
                            class="form-control"
                            placeholder="Password">
                </div>
                <div class="form-group form-check">
                    <input
                            id="exampleCheck1"
                            type="checkbox"
                            class="form-check-input" >
                    <label
                            class="form-check-label"
                            for="exampleCheck1">
                        Check me out
                    </label>
                </div>
                <button
                        type="button"
                        class="btn btn-primary"
                        @click="goLogin(userInfo)">
                    Submit
                </button>
            </div>
        </b-container>

    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
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
