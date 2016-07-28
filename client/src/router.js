import Vue from 'vue'
import VueRouter from 'vue-router'

import Splash from './components/Splash'
import Register from './components/Register'
import Login from './components/Login'
import Lobby from './components/Lobby'
import Tabletop from './components/Tabletop'
import Profile from './components/Profile'

Vue.use(VueRouter)

let router = new VueRouter()

router.map({
    '/': {
        component: Splash
    },
    '/register': {
        component: Register
    },
    '/login': {
        component: Login
    },
    '/lobby': {
        component: Lobby
    },
    '/tabletop': {
        component: Tabletop
    },
    '/profile': {
      component: Profile
    }
})

export default router
