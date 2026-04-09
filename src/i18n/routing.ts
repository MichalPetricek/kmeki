import { defineRouting } from 'next-intl/routing';

const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true';

const pathnames = {
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
} as const;

// Static export: middleware is unavailable → locale prefix must always be present,
// and localized pathnames are disabled (URLs match the file-system structure).
const fullRouting = defineRouting({
  locales: ['cs', 'en', 'de'],
  defaultLocale: 'cs',
  localePrefix: 'as-needed',
  pathnames,
});

const staticRouting = defineRouting({
  locales: ['cs', 'en', 'de'],
  defaultLocale: 'cs',
  localePrefix: 'always',
});

export const routing: typeof fullRouting = isStaticExport
  ? (staticRouting as typeof fullRouting)
  : fullRouting;

export type Pathnames = keyof typeof pathnames;
