'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { IconMapPin, IconPhone, IconMail, IconUser } from '@/ui/Icons';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="relative bg-dark-lighter border-t border-primary/10 overflow-hidden">
      {/* Subtle red glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/5 rounded-full blur-[80px]" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">{t('companyName')}</h3>
            <div className="space-y-2.5 text-text-secondary text-sm">
              <div className="flex items-center gap-2">
                <IconMapPin className="w-3.5 h-3.5 text-primary/60 shrink-0" />
                <span>{t('address')}</span>
              </div>
              <div className="flex items-center gap-2">
                <IconPhone className="w-3.5 h-3.5 text-primary/60 shrink-0" />
                <a href="tel:+420499432101" className="hover:text-white transition-colors">
                  +420 499 432 101
                </a>
              </div>
              <div className="flex items-center gap-2">
                <IconMail className="w-3.5 h-3.5 text-primary/60 shrink-0" />
                <a href="mailto:kmeki@kmeki.cz" className="hover:text-white transition-colors">
                  kmeki@kmeki.cz
                </a>
              </div>
            </div>
          </div>

          {/* Contact Persons */}
          <div>
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">{t('contactPersons')}</h3>
            <div className="space-y-3">
              {[
                { name: 'Ladislav Kmečko', phone: '+420 603 474 599' },
                { name: 'Dalibor Kondelka', phone: '+420 603 246 336' },
              ].map((person, i) => (
                <div key={i} className="flex items-center gap-2.5 text-[13px]">
                  <IconUser className="w-3.5 h-3.5 text-primary/60 shrink-0" />
                  <div>
                    <p className="text-white/80 font-medium">{person.name}</p>
                    <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="text-[#a1a1a6] hover:text-white transition-colors text-xs">
                      {person.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">{t('quickContact')}</h3>
            <form className="space-y-2.5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder={t('yourName')}
                className="w-full px-3.5 py-2 bg-dark-card border border-dark-border rounded-lg text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-primary/40 transition-colors"
              />
              <input
                type="text"
                placeholder={t('emailOrPhone')}
                required
                className="w-full px-3.5 py-2 bg-dark-card border border-dark-border rounded-lg text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-primary/40 transition-colors"
              />
              <textarea
                placeholder={t('moreInfo')}
                rows={2}
                className="w-full px-3.5 py-2 bg-dark-card border border-dark-border rounded-lg text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-primary/40 transition-colors resize-none"
              />
              <button type="submit" className="w-full px-4 py-2.5 bg-primary hover:bg-primary-light text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-primary/30">
                {t('send')}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
          <p>&copy; {new Date().getFullYear()} {t('copyright')}</p>
          <Link href="/gdpr" className="hover:text-primary transition-colors">
            {t('gdprLink')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
