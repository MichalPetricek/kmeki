'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

interface PageHeroProps {
  titleKey: string;
  subtitleKey?: string;
  namespace: string;
  image?: string;
}

export default function PageHero({ titleKey, subtitleKey, namespace }: PageHeroProps) {
  const t = useTranslations(namespace);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      {/* Carbon texture + red glow background */}
      <div className="absolute inset-0 carbon-texture" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-dark" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="red-divider mb-6"
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="section-title text-white"
        >
          {t(titleKey)}
        </motion.h1>
        {subtitleKey && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-5 text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            {t(subtitleKey)}
          </motion.p>
        )}
      </div>
    </section>
  );
}
