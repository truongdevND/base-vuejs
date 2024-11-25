import { createI18n } from 'vue-i18n'
import config from './config'

// Import language files
import vi from '@/locales/vi'
import en from '@/locales/en'

// Create i18n instance
const i18n = createI18n({
  ...config,
  messages: {
    vi,
    en
  }
})

export default i18n