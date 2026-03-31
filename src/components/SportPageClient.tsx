'use client';

import { useTranslations } from 'next-intl';
import PageHero from '@/ui/PageHero';
import ScrollAnimation, { StaggerContainer, StaggerItem } from '@/ui/ScrollAnimation';
import Image from 'next/image';
import { IconCheck, IconSkate, IconHockey, IconSki, IconBoat, IconArrowRight } from '@/ui/Icons';
import { Link } from '@/i18n/navigation';

const galleryImages = [
  { src: '/images/speedoboat.jpg', alt: 'Speedboat - kompozitní motorový člun' },
  { src: '/images/kanoeBig.jpg', alt: 'Závodní kánoe' },
  { src: '/images/brusleBig.jpg', alt: 'Brusle Botas - karbonové podrážky' },
  { src: '/images/Skokanské boty HOP 2014.JPG', alt: 'Skokanské boty HOP' },
];

const productIcons = [IconSkate, IconHockey, IconSki, IconBoat];

export default function SportPageClient() {
  const t = useTranslations('sport');

  const services = [
    t('service1'),
    t('service2'),
    t('service3'),
    t('service4'),
    t('service5'),
    t('service6'),
  ];

  const products = [
    { name: t('product1'), desc: t('product1Desc') },
    { name: t('product2'), desc: t('product2Desc') },
    { name: t('product3'), desc: t('product3Desc') },
    { name: t('product4'), desc: t('product4Desc') },
  ];

  return (
    <>
      <PageHero
        titleKey="heroTitle"
        subtitleKey="heroSubtitle"
        namespace="sport"
      />

      {/* Intro - image + text side by side */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollAnimation variant="fadeIn">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-primary/10">
                <Image
                  src="/images/kanoeBig.jpg"
                  alt="Závodní kánoe - sportovní kompozity"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-dark/40 via-transparent to-primary/10" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation variant="fadeUp" delay={0.1}>
              <div className="red-divider mb-5" />
              <h2 className="section-title text-white mb-6">{t('productsTitle')}</h2>
              <p className="text-text-secondary text-lg leading-[1.7] mb-6">
                {t('introText')}
              </p>
              <Link href="/contacts" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300">
                {t('ctaButton')}
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services - red accent cards */}
      <section className="section-padding bg-dark-lighter">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="red-divider mb-5" />
            <p className="section-label mb-4">{t('servicesTitle')}</p>
            <h2 className="section-title text-white mb-12">{t('servicesTitle')}</h2>
          </ScrollAnimation>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <StaggerItem key={i}>
                <div className="card-accent p-5 flex items-start gap-4">
                  <div className="w-7 h-7 rounded-lg bg-primary/15 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <IconCheck className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-white/90 text-[15px] leading-relaxed">{service}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Products - carbon texture */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 carbon-texture" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />

        <div className="container-custom relative">
          <ScrollAnimation>
            <div className="red-divider mb-5" />
            <p className="section-label mb-4">{t('productsTitle')}</p>
            <h2 className="section-title text-white mb-12">{t('productsTitle')}</h2>
          </ScrollAnimation>

          <StaggerContainer className="grid md:grid-cols-2 gap-4">
            {products.map((product, i) => {
              const Icon = productIcons[i] || IconSkate;
              return (
                <StaggerItem key={i}>
                  <div className="glass-card p-6 h-full">
                    <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center text-primary mb-4">
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{product.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="red-divider mb-5" />
            <p className="section-label mb-4">{t('galleryTitle')}</p>
            <h2 className="section-title text-white mb-12">{t('galleryTitle')}</h2>
          </ScrollAnimation>

          <StaggerContainer className="grid md:grid-cols-2 gap-5">
            {galleryImages.map((img, i) => (
              <StaggerItem key={i}>
                <div className="group relative aspect-[3/2] rounded-2xl overflow-hidden border border-dark-border hover:border-primary/20 transition-colors">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-sm font-medium">{img.alt}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-dark to-primary/10" />
        <div className="container-custom relative px-5 sm:px-8 lg:px-12">
          <ScrollAnimation variant="fadeUp">
            <div className="text-center max-w-2xl mx-auto">
              <div className="red-divider mx-auto mb-5" />
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-5">{t('ctaTitle')}</h2>
              <p className="text-text-secondary text-lg mb-8 leading-relaxed">{t('ctaText')}</p>
              <Link href="/contacts" className="btn-primary">
                {t('ctaButton')}
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
