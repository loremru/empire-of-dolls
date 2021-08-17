import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Notifications from '@kyvg/vue3-notification'

import '@/assets/styles/main.scss'

export default createApp(App).use(router).use(Notifications).mount('#app')
