'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import ScrollAnimation, { StaggerContainer, StaggerItem } from '@/ui/ScrollAnimation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { IconArrowRight, IconCheck, IconHand, IconBeaker, IconLayers, IconBrick, IconFire, IconCpu, IconTarget, IconWrench } from '@/ui/Icons';

const stats = [
  { value: '30+', key: 'statsYears' },
  { value: '50', key: 'statsEmployees' },
  { value: '1000', key: 'statsArea' },
  { value: '100+', key: 'statsWorldwide' },
];

const technologies = [
  { key: 'techManual', icon: IconHand },
  { key: 'techVacuum', icon: IconBeaker },
  { key: 'techRTM', icon: IconLayers },
  { key: 'techSandwich', icon: IconBrick },
  { key: 'techWelding', icon: IconFire },
  { key: 'techModels', icon: IconCpu },
  { key: 'techTesting', icon: IconTarget },
  { key: 'techCustom', icon: IconWrench },
];

const clients = [
  'Škoda Transportation',
  'Pars',
  'České dráhy',
  'Secheron',
  'Ammann',
  'Autostyl Janko',
  'Power by Kramský',
  'Botas',
  'Burton',
  'Galerie Wien',
];

export default function HomePageClient() {
  const t = useTranslations('home');
  const tHero = useTranslations('hero');

  const sectors = [
    {
      titleKey: 'industryTitle',
      descKey: 'industryDesc',
      href: '/industry' as const,
      image: '/images/Skoda_15T_ForCity.jpg',
    },
    {
      titleKey: 'sportTitle',
      descKey: 'sportDesc',
      href: '/sport' as const,
      image: '/images/kanoeBig.jpg',
    },
    {
      titleKey: 'architectureTitle',
      descKey: 'architectureDesc',
      href: '/architecture' as const,
      image: '/images/galerieViden[1].jpg',
    },
  ];

  return (
    <>
      {/* Hero - carbon texture + red glow */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 carbon-texture" />
        {/* Big red glow */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />
        {/* Diagonal red line accent */}
        <div className="absolute top-0 right-[20%] w-[2px] h-full bg-gradient-to-b from-primary/40 via-primary/10 to-transparent transform rotate-12 origin-top" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 w-full py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="red-divider mb-8"
            />

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="section-label">KMEKI COMPOSITES s.r.o.</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-8"
            >
              {tHero('title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-lg md:text-xl text-text-secondary max-w-xl mb-10 leading-relaxed"
            >
              {tHero('subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/references" className="btn-primary">
                {tHero('cta')}
                <IconArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contacts" className="btn-outline">
                {tHero('ctaContact')}
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border-2 border-primary/30 flex items-start justify-center p-1.5"
          >
            <motion.div className="w-0.5 h-1.5 bg-primary/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats strip - red numbers */}
      <section className="border-y border-primary/10 bg-dark-lighter">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 divide-x divide-primary/10">
            {stats.map((stat, i) => (
              <StaggerItem key={i}>
                <div className="text-center py-10 md:py-12">
                  <div className="stat-number mb-2">{stat.value}</div>
                  <div className="text-sm text-text-secondary uppercase tracking-wider font-medium">{t(stat.key)}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* About - with image & red accents */}
      <section className="section-padding red-glow-section">
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollAnimation variant="fadeIn">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-primary/10">
                <Image
                  src="/images/parsVnitrni_oblozeni1.jpg"
                  alt="KMEKI Composites - výroba"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-dark/40 via-transparent to-primary/10" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation variant="fadeUp" delay={0.1}>
              <div className="red-divider mb-5" />
              <p className="section-label mb-4">O nás</p>
              <h2 className="section-title text-white mb-6">
                {t('aboutTitle')}
              </h2>
              <p className="text-text-secondary text-lg leading-[1.7] mb-8">
                {t('aboutText')}
              </p>
              <Link href="/references" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300">
                {t('learnMore')}
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Sectors - cards with red left border */}
      <section className="section-padding bg-dark-lighter">
        <div className="container-custom">
          <ScrollAnimation className="text-center mb-14">
            <p className="section-label mb-4">{t('sectorsTitle')}</p>
            <h2 className="section-title text-white">{t('sectorsSubtitle')}</h2>
          </ScrollAnimation>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {sectors.map((sector, i) => (
              <StaggerItem key={i}>
                <Link href={sector.href} className="group block">
                  <div className="rounded-2xl overflow-hidden border border-dark-border hover:border-primary/30 transition-all duration-400 bg-dark-card card-hover-lift">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={sector.image}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />
                    </div>
                    <div className="p-6 border-l-3 border-l-primary">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {t(sector.titleKey)}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        {t(sector.descKey)}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-2.5 transition-all duration-300">
                        {t('learnMore')}
                        <IconArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technology - carbon texture section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 carbon-texture" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />

        <div className="container-custom relative">
          <ScrollAnimation className="text-center mb-14">
            <p className="section-label mb-4">{t('techTitle')}</p>
            <h2 className="section-title text-white">{t('techSubtitle')}</h2>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <StaggerItem key={i}>
                  <div className="group glass-card p-6 text-center h-full flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/25 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors leading-snug">
                      {t(tech.key)}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <ScrollAnimation variant="fadeUp" delay={0.3}>
            <div className="text-center mt-10">
              <Link href="/contacts" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300">
                {t('techLink')}
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 md:py-20 border-y border-primary/10 bg-dark-lighter">
        <div className="container-custom px-5 sm:px-8 lg:px-12">
          <ScrollAnimation className="text-center mb-10">
            <p className="section-label mb-3">{t('clientsTitle')}</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{t('clientsSubtitle')}</h2>
          </ScrollAnimation>

          <StaggerContainer className="flex flex-wrap items-center justify-center gap-3">
            {clients.map((client, i) => (
              <StaggerItem key={i}>
                <div className="px-5 py-2.5 rounded-lg border border-dark-border text-text-secondary text-sm font-medium hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-default">
                  {client}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollAnimation variant="fadeUp" delay={0.2}>
            <div className="text-center mt-8">
              <Link href="/references" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300">
                {t('clientsLink')}
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA - red gradient background */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-dark to-primary/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

        <div className="container-custom relative">
          <ScrollAnimation variant="fadeUp">
            <div className="text-center max-w-2xl mx-auto">
              <div className="red-divider mx-auto mb-6" />
              <h2 className="section-title text-white mb-5">{t('ctaTitle')}</h2>
              <p className="text-text-secondary text-lg mb-10 leading-relaxed">{t('ctaText')}</p>
              <Link href="/contacts" className="btn-primary text-base">
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
