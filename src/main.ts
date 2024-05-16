import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from '@/plugins/vuetify';

const app = createApp(App)

app
    .use(Vuetify)
    .use(router)
    .mount('#app')
