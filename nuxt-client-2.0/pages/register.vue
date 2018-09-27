<!-- <template>
    <div class="container top">
        <h1 v-if="checkLogin">Bạn đã đăng nhập</h1>

    <div v-if="!checkLogin" class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Register</div>

                <div class="card-body">
                    <form @submit.prevent="registerUser(userInfo)">
                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                            <div class="col-md-6">
                                <input type="text" class="form-control" v-model="userInfo.name" required autofocus>
                                    <span class="invalid-feedback" role="alert">
                                        <strong></strong>
                                    </span>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                            <div class="col-md-6">
                                <input type="email" class="form-control" v-model="userInfo.email" required>
                                    <span class="invalid-feedback" role="alert">
                                        <strong></strong>
                                    </span>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                            <div class="col-md-6">
                                <input type="password" class="form-control" v-model="userInfo.password" required>
                                    <span class="invalid-feedback" role="alert">
                                        <strong></strong>
                                    </span>
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Register
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    data() {
        return {
            userInfo: {
                name: '',
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
            registerUser: 'auth/goRegister'
        }),
    }
}
</script>

<style scoped>
.top {
    margin-top: 80px;
}
</style>-->
