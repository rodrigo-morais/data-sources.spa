import Vue from 'vue'
import Vuex from 'vuex'

import dataSourcesModule from './modules/dataSources/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    search: dataSourcesModule,
  },
})
