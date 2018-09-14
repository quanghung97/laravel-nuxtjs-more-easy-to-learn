import Vuex from 'vuex';
import Vue from 'vue';
import _ from 'lodash';
import auth from './modules/auth';

const createStore = () => {
  return new Vuex.Store({
    modules: {
        auth
    }
  })
}

export default createStore
