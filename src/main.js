import { createApp } from 'vue'
import store  from './Store/index'
import App from './App.vue'
import '@/assets/style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './Router/index'
library.add(fas, fab)

const app = createApp(App).use(router).use(store)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
