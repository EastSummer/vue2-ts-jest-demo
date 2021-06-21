import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mod1 from './mod/mod1'
import mod2 from './mod/mod2'

Vue.use(Vuex)

export default () => new Vuex.Store({
  getters,
  modules: {
    mod1, mod2,
  },
})
