import { createApp } from 'vue'
import { router } from '@/route/index'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
// import 'default-passive-events'
import '@/assets/base.scss'
import App from './App.vue'
// const pinia = createPinia()
const Root = createApp(App)
Root.use(router)
Root.use(ArcoVue)
// Root.use(pinia)
Root.mount('#app')
