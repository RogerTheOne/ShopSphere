import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { lazyPlugin } from '@/directives'
import { createI18n } from 'vue-i18n'
import messages from '@/ i18n/index'   // ✅ 删除路径中多余空格


import App from './App.vue'
import router from './router'
import '@/styles/common.scss'

// 示例接口调用（可保留）
import { getCategoryAPI } from '@/apis/testAPI'
getCategoryAPI().then((res: any) => {
  console.log(res)
})

// ✅ 创建 i18n 实例并强制语言为英文（可换成 localStorage 持久化）
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en-US',               // ✅ 注意这里要匹配 messages 的 key
  fallbackLocale: 'zh-CN',
  messages
} as any)

// ✅ 创建 app 并依次挂载插件
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(lazyPlugin)
app.mount('#app')  // ⬅️ mount 最后执行
