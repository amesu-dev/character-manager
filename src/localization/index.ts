import type { locale_t } from "./locale"
import { createI18n } from 'vue-i18n'

import en from "./en"
import ru from "./ru"



const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'en',

  // translations
  messages: {
    en, ru
  },
});

export default i18n