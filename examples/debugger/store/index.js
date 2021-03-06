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

// const moduleA = {
//   state: {
//     moduleA: ''
//   },
//   mutations: {
//     setModuleA(state, payload) {
//       console.log(state);
//     }
//   }
// }

// const moduleB = {
//   state: {
//     nameList: []
//   }
// }

const store =  new Vuex.Store({
  state: {
    name: 'nxy',
    age: 0
  },
  mutations: {
    plusAge(state, payload = 1) {
      state.age += payload
    },
  },
  getters: {
    getAge () {
      console.log(arguments);
    }
  },
  actions: {
    asyncSetAge(context, payload) {
      context.commit('plusAge', payload);
      return 1;
    }
  },
  modules: {
    // 'user': moduleA,
    // 'userCenter': moduleB
  }
})

export default store;
