import Vue from 'vue'
import App from './App'
import Splash from './components/Splash'
import Tabletop from './components/Tabletop'

import Router from 'vue-router'

Vue.use(Router)

let router = new Router()

router.map({
  '/': {
    component: App
  },
  '/splash': {
    component: Splash
  },
  '/tabletop': {
    component: Tabletop
  }
})

router.start(App, 'app')
