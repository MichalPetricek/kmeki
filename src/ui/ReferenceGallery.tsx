'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import ScrollAnimation, { StaggerContainer, StaggerItem } from '@/ui/ScrollAnimation';
import { IconArrowLeft } from '@/ui/Icons';
import PageHero from '@/ui/PageHero';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
}

interface ReferenceGalleryProps {
  titleKey: string;
  heroImage?: string;
  images: GalleryImage[];
}

export default function ReferenceGallery({ titleKey, images }: ReferenceGalleryProps) {
  const t = useTranslations('references');

  return (
    <>
      <PageHero
        titleKey={titleKey}
        namespace="references"
      />

      <section className="section-padding">
        <div className="container-custom">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <StaggerItem key={i}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer border border-dark-border hover:border-primary/20 transition-colors">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-sm font-medium">{img.alt}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollAnimation className="mt-12">
            <Link
              href="/references"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-semibold text-sm transition-colors"
            >
              <IconArrowLeft className="w-4 h-4" />
              {t('backToOverview')}
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
