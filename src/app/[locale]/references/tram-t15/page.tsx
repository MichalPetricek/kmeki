'use client';

import ReferenceGallery from '@/ui/ReferenceGallery';

const images = [
  { src: '/images/Skoda_15T_ForCity.jpg', alt: 'Škoda 15T ForCity' },
  { src: '/images/t15_26.jpg', alt: 'Tramvaj T15 – exteriér' },
  { src: '/images/t15_27.jpg', alt: 'Tramvaj T15 – boční pohled' },
  { src: '/images/t15_34.jpg', alt: 'Interiér T15 – obklady' },
  { src: '/images/t15_36.jpg', alt: 'Interiér T15 – detail' },
  { src: '/images/t15_43.jpg', alt: 'Interiér T15 – celkový pohled' },
];

export default function RefTramPage() {
  return (
    <ReferenceGallery
      titleKey="tramTitle"
      heroImage="/images/Skoda_15T_ForCity.jpg"
      images={images}
    />
  );
}
