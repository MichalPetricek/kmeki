'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import PageHero from '@/ui/PageHero';
import ScrollAnimation from '@/ui/ScrollAnimation';
import { IconMapPin, IconPhone, IconMail, IconUser } from '@/ui/Icons';
import { useState } from 'react';

export default function ContactsPageClient() {
  const t = useTranslations('contacts');
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem('website') as HTMLInputElement)?.value;
    if (honeypot) return;

    setFormState('sending');
    setTimeout(() => {
      setFormState('success');
      form.reset();
    }, 1000);
  };

  return (
    <>
      <PageHero titleKey="heroTitle" subtitleKey="heroSubtitle" namespace="contacts" />

      {/* Company Info - dark with red accents */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Company Info */}
            <ScrollAnimation variant="fadeLeft">
              <div className="space-y-6">
                <div>
                  <div className="red-divider mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-5">{t('companyInfo')}</h2>
                  <div className="glass-card p-6 md:p-8 space-y-4">
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center text-primary shrink-0">
                        <IconMapPin className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <p className="text-text-muted text-xs uppercase tracking-wider mb-0.5">{t('address')}</p>
                        <p className="text-white text-sm">{t('addressValue')}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center text-primary shrink-0">
                        <IconMapPin className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <p className="text-text-muted text-xs uppercase tracking-wider mb-0.5">{t('registeredAddress')}</p>
                        <p className="text-white text-sm">{t('registeredAddressValue')}</p>
                      </div>
                    </div>

                    <div className="border-t border-dark-border" />

                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-text-muted text-xs uppercase tracking-wider">{t('ico')}</p>
                        <p className="text-white font-semibold">648 24 284</p>
                      </div>
                      <div>
                        <p className="text-text-muted text-xs uppercase tracking-wider">{t('dic')}</p>
                        <p className="text-white font-semibold">CZ648 24 284</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <IconPhone className="w-3.5 h-3.5 text-primary" />
                        <a href="tel:+420499432101" className="text-white hover:text-primary transition-colors">
                          +420 499 432 101
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <IconPhone className="w-3.5 h-3.5 text-text-muted" />
                        <span className="text-white">+420 499 432 033</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <IconMail className="w-3.5 h-3.5 text-primary" />
                        <a href="mailto:kmeki@kmeki.cz" className="text-white hover:text-primary transition-colors">
                          kmeki@kmeki.cz
                        </a>
                      </div>
                      <div>
                        <a href="https://www.kmeki.cz" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors text-sm">
                          www.kmeki.cz
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Persons */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">{t('contactPersons')}</h3>
                  <div className="grid gap-3">
                    {[
                      { name: 'Ladislav Kmečko', phone: '+420 603 474 599' },
                      { name: 'Dalibor Kondelka', phone: '+420 603 246 336' },
                    ].map((person, i) => (
                      <div key={i} className="glass-card p-4 flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary shrink-0">
                          <IconUser className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-white font-semibold text-sm">{person.name}</p>
                          <p className="text-text-muted text-xs">{t('role')}</p>
                          <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="text-primary text-sm hover:text-primary-light transition-colors font-medium">
                            {person.phone}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Contact Form */}
            <ScrollAnimation variant="fadeRight" delay={0.2}>
              <div className="red-divider mb-4" />
              <h2 className="text-2xl font-bold text-white mb-1.5">{t('formTitle')}</h2>
              <p className="text-text-secondary text-sm mb-5">{t('formSubtitle')}</p>

              <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-4">
                <div className="absolute opacity-0 pointer-events-none" aria-hidden="true" tabIndex={-1}>
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1.5">
                    {t('formName')} <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2.5 bg-dark border border-dark-border rounded-lg text-white text-sm placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1.5">
                    {t('formEmail')} <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 bg-dark border border-dark-border rounded-lg text-white text-sm placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1.5">
                    {t('formPhone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2.5 bg-dark border border-dark-border rounded-lg text-white text-sm placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1.5">
                    {t('formMessage')} <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2.5 bg-dark border border-dark-border rounded-lg text-white text-sm placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>

                <div className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-0.5 w-4 h-4 rounded bg-dark border-dark-border text-primary focus:ring-primary"
                  />
                  <label htmlFor="consent" className="text-xs text-text-secondary leading-relaxed">
                    {t('formConsent')}{' '}
                    <Link href="/gdpr" className="text-primary hover:text-primary-light underline">
                      {t('gdprLink')}
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={formState === 'sending'}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === 'sending' ? t('formSending') : t('formSubmit')}
                </button>

                {formState === 'success' && (
                  <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm text-center">
                    {t('formSuccess')}
                  </div>
                )}

                {formState === 'error' && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center">
                    {t('formError')}
                  </div>
                )}
              </form>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  );
}
