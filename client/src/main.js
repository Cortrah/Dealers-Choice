import Home from './Home'

import {sync} from 'vuex-router-sync'
import store from './vuex/store'
import router from './router'

sync(store, router)

router.start(Home, 'app')
