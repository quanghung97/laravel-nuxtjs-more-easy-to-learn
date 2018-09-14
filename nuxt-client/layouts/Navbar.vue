<template>
    <b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">NavBar</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="#">Link</b-nav-item>
      <b-nav-item href="#" disabled>Disabled</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

         <b-nav-item v-if="!checkLogin" :to="{ name: 'login' }">Login</b-nav-item>
      <b-nav-item-dropdown v-if="checkLogin" right>
         <template slot="button-content">
          <em>{{userName}}</em>
        </template>
        <b-dropdown-item @click="goLogout">Logout</b-dropdown-item>
      </b-nav-item-dropdown>


    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {

    computed: {
        ...mapState('auth', {
            checkLogin: state => state.checkLogin,
            userName: state => state.userName
        })
    },
    methods: {
        ...mapActions({
            goLogout: 'auth/goLogout'
        })
    }
}
</script>
