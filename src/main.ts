import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import "ant-design-vue/dist/antd.css"

import AppLayoutGuess from '@/layouts/AppLayoutGuess.vue'
import AppLayoutDefault from '@/layouts/AppLayoutDefault.vue'
import AppLayoutAdmin from '@/layouts/AppLayoutAdmin.vue'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)

app.component('AppLayoutGuess', AppLayoutGuess)
app.component('AppLayoutDefault', AppLayoutDefault)
app.component('AppLayoutAdmin', AppLayoutAdmin)

app.mount('#app')
