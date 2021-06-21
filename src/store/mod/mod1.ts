import { IMod1 } from './interface'

export default {
  namespaced: true,
  state: (): IMod1 => ({
    moduleName: 'mod1',
    tip: 1,
  }),
  mutations: {
    add: (state: IMod1) => {
      console.log(333, state)
      state.tip = 6
    },
  },
  actions: {
    // 异步
  },
  modules: {
  },
}
