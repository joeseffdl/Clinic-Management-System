import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
import { getField, updateField } from 'vuex-map-fields'


export default {
  namespaced: true,
  actions,
  state,
  getters: {
    ...getters,
    getField,
  },
  mutations: {
    ...mutations,
    updateField,
  }
}
