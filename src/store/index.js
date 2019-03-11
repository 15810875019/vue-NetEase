import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'

import Fenlei from './moudle/Fenlei'


Vue.use(Vuex);

// 踩坑: Store S大写
// 报错: __WEBPACK_IMPORTED_MODULE_1_vuex__.a.store is not a constructor
export default new Vuex.Store({
  state,

  modules: {
   Fenlei
  }
})
