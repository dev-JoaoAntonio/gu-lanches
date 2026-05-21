import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarIconSet from 'quasar/icon-set/material-symbols-rounded'
import '@quasar/extras/material-symbols-rounded/material-symbols-rounded.css'
import 'quasar/src/css/index.sass'

import App from './App.vue'
import router from './router'
import './styles/app.scss'
import revealDirective from './composables/revealDirective'

const app = createApp(App)
app.use(Quasar, { iconSet: quasarIconSet, config: { dark: false } })
app.use(router)
app.directive('reveal', revealDirective)
app.mount('#app')
