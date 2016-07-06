import Home from './Home'

import store from './vuex/store'
import {sync} from 'vuex-router-sync'

import router from './router'

sync(store, router)

router.start(Home, 'app')
