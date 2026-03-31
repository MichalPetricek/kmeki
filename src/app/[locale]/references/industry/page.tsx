'use client';

import ReferenceGallery from '@/ui/ReferenceGallery';

const images = [
  { src: '/images/parsVnitrni_oblozeni1.jpg', alt: 'Vnitřní obložení' },
  { src: '/images/parsVnitrni_oblozeni2.jpg', alt: 'Vnitřní obložení – detail' },
];

export default function RefIndustryPage() {
  return (
    <ReferenceGallery
      titleKey="industryTitle"
      heroImage="/images/parsVnitrni_oblozeni1.jpg"
      images={images}
    />
  );
}
