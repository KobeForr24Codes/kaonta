export const state = () => ({
  isLogin: true
})

const getters = {
  isLogin (state) {
    return state.isLogin
  }
}

const mutations = {
  SET_AUTH_STATE (state, payload) {
    state.isLogin = payload
  }
}

const actions = {
  changeAuthState ({ commit }, payload) {
    commit('SET_AUTH_STATE', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

