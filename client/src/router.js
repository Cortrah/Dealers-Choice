import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Splash from './components/Splash'
import Register from './components/Register'
import Login from './components/Login'
import Lobby from './components/Lobby'
import Tabletop from './components/Tabletop'
import Profile from './components/Profile'
import Forgot from './components/Forgot'
import Host from './components/Host'

import Card from './components/Card'
import Catelog from './Catelog'

Vue.use(VueRouter);
Vue.use(VueResource);

let router = new VueRouter();

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
    },
    '/host': {
      component: Host
    },
    '/forgot': {
        component: Forgot
    },
    '/catelog': {
      component: Catelog
    },
    '/card': {
      component: Card
    }
});

// redirect to splash if a route is unmatched
router.redirect({
  '*': '/'
});

export default router
