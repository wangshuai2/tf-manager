import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    isLogin: false,
    user: {}
}

const mutations = {
    loginStatus(state, b) {
        state.isLogin = b;
    },
    userStatus(state, u) {
        state.user = u;
    }
}

export default new Vuex.Store({
     state,
     mutations
})