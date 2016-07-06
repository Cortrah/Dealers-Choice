import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/logger'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

const state = {
    count: 0
}

const mutations = {
    INCREMENT (state) {
        state.count++
    },
    DECREMENT (state) {
        state.count--
    }
}

export default new Vuex.Store({
    modules: {
        state,
        mutations
    },
    strict: debug,
    middlewares: debug ? [createLogger()] : []
})
