import Vuex from 'vuex';
import Vue from 'vue';
import _ from 'lodash';
import auth from './modules/auth';

const createStore = () => {
  return new Vuex.Store({
    modules: {
        auth
    },
    getters: {
        authToken (state, getters) {
            return state.auth.authToken;
        },
    }
  })
}

export default createStore
