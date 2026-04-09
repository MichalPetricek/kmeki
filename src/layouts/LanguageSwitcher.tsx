'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronDown } from '@/ui/Icons';

const localeLabels: Record<string, { label: string; flag: string }> = {
  cs: { label: 'CZ', flag: '🇨🇿' },
  en: { label: 'EN', flag: '🇬🇧' },
  de: { label: 'DE', flag: '🇩🇪' },
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function switchLocale(newLocale: string) {
    setOpen(false);
    router.replace(pathname, { locale: newLocale as 'cs' | 'en' | 'de' });
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-text-secondary hover:text-white border border-transparent hover:border-dark-border transition-all"
      >
        <span className="text-base leading-none">{localeLabels[locale].flag}</span>
        <span>{localeLabels[locale].label}</span>
        <IconChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.97 }}
            transition={{ duration: 0.12 }}
            className="absolute right-0 mt-1.5 w-28 bg-dark-card border border-dark-border rounded-xl shadow-2xl shadow-black/40 overflow-hidden"
          >
            {routing.locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors ${
                  loc === locale
                    ? 'text-white bg-white/[0.06]'
                    : 'text-text-muted hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span className="text-base leading-none">{localeLabels[loc].flag}</span>
                {localeLabels[loc].label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
