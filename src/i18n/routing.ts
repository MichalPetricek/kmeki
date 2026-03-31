import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['cs', 'en', 'de'],
  defaultLocale: 'cs',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/industry': {
      cs: '/prumysl',
      en: '/industry',
      de: '/industrie',
    },
    '/sport': {
      cs: '/sport',
      en: '/sport',
      de: '/sport',
    },
    '/architecture': {
      cs: '/architektura',
      en: '/architecture',
      de: '/architektur',
    },
    '/references': {
      cs: '/reference',
      en: '/references',
      de: '/referenzen',
    },
    '/references/architecture': {
      cs: '/reference/architektura',
      en: '/references/architecture',
      de: '/referenzen/architektur',
    },
    '/references/industry': {
      cs: '/reference/prumysl',
      en: '/references/industry',
      de: '/referenzen/industrie',
    },
    '/references/tram-t15': {
      cs: '/reference/tramvaj-t15',
      en: '/references/tram-t15',
      de: '/referenzen/strassenbahn-t15',
    },
    '/references/sport': {
      cs: '/reference/sport',
      en: '/references/sport',
      de: '/referenzen/sport',
    },
    '/contacts': {
      cs: '/kontakty',
      en: '/contacts',
      de: '/kontakt',
    },
    '/gdpr': {
      cs: '/ochrana-osobnich-udaju',
      en: '/gdpr',
      de: '/datenschutz',
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
