import {createApp, markRaw} from 'vue'
import {createPinia} from 'pinia'
import Antd from 'ant-design-vue'

import App from '@/App.vue'
import router from '@/router/index.router'

import '@/assets/main.css'
import "ant-design-vue/dist/antd.css"
import "@/assets/scss/_variables.scss";

import AppLayoutGuess from '@/layouts/AppLayoutGuess.vue'
import AppLayoutDefault from '@/layouts/AppLayoutDefault.vue'
import AppLayoutAdmin from '@/layouts/AppLayoutAdmin.vue'


const app = createApp(App)

const pinia = createPinia()
pinia.use(({store}) => {
    store.$router = markRaw(router)
})
app.use(pinia)
app.use(router)
app.use(Antd)

app.component('AppLayoutGuess', AppLayoutGuess)
app.component('AppLayoutDefault', AppLayoutDefault)
app.component('AppLayoutAdmin', AppLayoutAdmin)

app.mount('#app')
