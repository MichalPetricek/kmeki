'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/' as const, label: t('home') },
    { href: '/industry' as const, label: t('industry') },
    { href: '/sport' as const, label: t('sport') },
    { href: '/architecture' as const, label: t('architecture') },
    { href: '/references' as const, label: t('references') },
    { href: '/contacts' as const, label: t('contacts') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-lighter/98 backdrop-blur-2xl shadow-lg shadow-black/20'
          : 'bg-dark/90 backdrop-blur-xl'
      }`}
    >
      {/* Red accent line at top */}
      <div className="h-[2px] bg-gradient-to-r from-primary via-accent to-primary" />

      <nav className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="KMEKI Composites"
              width={120}
              height={34}
              className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {links.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-[13px] font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-text-secondary hover:text-primary transition-colors"
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-dark-lighter/98 backdrop-blur-2xl border-t border-primary/10 overflow-hidden"
          >
            <nav className="max-w-6xl mx-auto px-5 py-3 flex flex-col">
              {links.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname === link.href || pathname.startsWith(link.href + '/');
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3 text-[15px] font-semibold transition-colors border-b border-white/[0.04] last:border-0 ${
                      isActive ? 'text-primary' : 'text-text-secondary hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
