'use client';

import { useTranslations } from 'next-intl';
import PageHero from '@/ui/PageHero';
import ScrollAnimation from '@/ui/ScrollAnimation';

export default function GdprPageClient() {
  const t = useTranslations('gdpr');

  const sections = [
    {
      title: t('controllerTitle'),
      content: t('controllerText'),
    },
    {
      title: t('purposeTitle'),
      list: [t('purpose1'), t('purpose2')],
    },
    {
      title: t('legalTitle'),
      list: [t('legal1'), t('legal2'), t('legal3')],
    },
    {
      title: t('processingTitle'),
      list: [t('processing1'), t('processing2')],
    },
    {
      title: t('scopeTitle'),
      content: t('scopeText'),
    },
    {
      title: t('retentionTitle'),
      list: [t('retention1'), t('retention2')],
    },
    {
      title: t('rightsTitle'),
      list: [t('right1'), t('right2'), t('right3'), t('right4'), t('right5'), t('right6')],
    },
    {
      title: t('authorityTitle'),
      content: t('authorityText'),
    },
  ];

  return (
    <>
      <PageHero titleKey="heroTitle" subtitleKey="heroSubtitle" namespace="gdpr" />

      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollAnimation>
            <p className="text-text-secondary leading-relaxed mb-12">
              {t('intro')}
            </p>
          </ScrollAnimation>

          <div className="space-y-4">
            {sections.map((section, i) => (
              <ScrollAnimation key={i} delay={i * 0.03}>
                <div className="card-accent p-6 md:p-7">
                  <h2 className="text-base font-bold text-white mb-3">{section.title}</h2>
                  {section.content && (
                    <p className="text-text-secondary leading-relaxed text-sm">{section.content}</p>
                  )}
                  {section.list && (
                    <ul className="space-y-2">
                      {section.list.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-text-secondary text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
