// import Vue from 'vue'
// import Vuex from 'vuex'
// import { mutations, STORAGE_KEY } from './mutations'
// import actions from './actions'
// import plugins from './plugins'
//
// Vue.use(Vuex)
//
// export default new Vuex.Store({
//   state: {
//     todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
//   },
//   actions,
//   mutations,
//   plugins
// })

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  state: {
    name: '',
    age: 0
  }
}

const moduleB = {
  state: {
    nameList: []
  }
}

export default new Vuex.Store({
  state: {
    name: 'nxy',
    age: 0
  }
  // modules: {
  //   'user': moduleA,
  //   'userCenter': moduleB
  // }
})
