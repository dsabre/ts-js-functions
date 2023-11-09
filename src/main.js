import './assets/css/main.css'
import 'flowbite/dist/flowbite.min.js';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
