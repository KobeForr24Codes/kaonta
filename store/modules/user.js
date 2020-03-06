import Cookies from 'js-cookie'

export const state = () => ({
  authenticated: false
})

const getters = {
  isAuth (state) {
    return state.authenticated
  }
}

const mutations = {
  AUTH_USER (state) {
    state.authenticated = true
  }
}

const actions = {
  authUser ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.$post('/api/auth/login', payload)
        .then(res => {
          this.$axios.setHeader('Token', res.token)
          Cookies.set('authToken', res.token)
          commit('AUTH_USER')
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
    
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

