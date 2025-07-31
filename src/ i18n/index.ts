import { createI18n } from 'vue-i18n'
import zh from './lang/zh'
import en from './lang/en'

const messages = {
  'zh-CN': zh,
  'en-US': en
}

// 👇 直接使用 as 强制类型断言解决报错
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'zh-CN',
  fallbackLocale: 'en-US',
  messages
} as any)

export default i18n
