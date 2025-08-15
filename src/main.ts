import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { lazyPlugin } from '@/directives'
import { createI18n } from 'vue-i18n'
import messages from '@/ i18n/index'   
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


import App from './App.vue'
import router from './router'
import '@/styles/common.scss'

// 示例接口调用（可保留）
import { getCategoryAPI } from '@/apis/testAPI'
getCategoryAPI().then((res: any) => {
  console.log(res)
})


const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en-US',               
  fallbackLocale: 'zh-CN',
  messages
} as any)


const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(i18n)
app.use(lazyPlugin)
app.mount('#app')  
