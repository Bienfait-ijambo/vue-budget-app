import './assets/bootstrap.min.css'

import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ToastPlugin from 'vue-toast-notification'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ToastPlugin)
app.use(VueSweetalert2)

app.mount('#app')
