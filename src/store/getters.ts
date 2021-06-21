import { IState } from './interface'

export default {
  fullName(state: IState) {
    return `${state.mod1.moduleName} 123 ${state.mod2.moduleName || ''}`
  },
}
