'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import PageHero from '@/ui/PageHero';
import { StaggerContainer, StaggerItem } from '@/ui/ScrollAnimation';
import Image from 'next/image';
import { IconArrowRight } from '@/ui/Icons';

const categories = [
  {
    titleKey: 'architectureTitle',
    href: '/references/architecture' as const,
    image: '/images/galerieViden[1].jpg',
  },
  {
    titleKey: 'industryTitle',
    href: '/references/industry' as const,
    image: '/images/parsVnitrni_oblozeni1.jpg',
  },
  {
    titleKey: 'tramTitle',
    href: '/references/tram-t15' as const,
    image: '/images/Skoda_15T_ForCity.jpg',
  },
  {
    titleKey: 'sportTitle',
    href: '/references/sport' as const,
    image: '/images/kanoeBig.jpg',
  },
];

export default function ReferencesPageClient() {
  const t = useTranslations('references');

  return (
    <>
      <PageHero
        titleKey="heroTitle"
        subtitleKey="heroSubtitle"
        namespace="references"
      />

      <section className="section-padding">
        <div className="container-custom">
          <StaggerContainer className="grid md:grid-cols-2 gap-5">
            {categories.map((cat, i) => (
              <StaggerItem key={i}>
                <Link href={cat.href} className="group block relative aspect-[16/10] rounded-2xl overflow-hidden border border-dark-border hover:border-primary/30 transition-all duration-400 card-hover-lift">
                  <Image
                    src={cat.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                    <h3 className="text-lg font-bold text-white">
                      {t(cat.titleKey)}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-2.5 transition-all duration-300">
                      {t('viewGallery')}
                      <IconArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
