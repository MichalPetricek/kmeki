'use client';

import ReferenceGallery from '@/ui/ReferenceGallery';

const images = [
  { src: '/images/kanoeBig.jpg', alt: 'Závodní kánoe' },
  { src: '/images/brusleBig.jpg', alt: 'Ledni brusle' },
  { src: '/images/speedoboat.jpg', alt: 'Speedboat' },
  { src: '/images/Skokanské boty HOP 2014.JPG', alt: 'Skokanské boty HOP' },
  { src: '/images/burton.jpg', alt: 'Burton' },
];

export default function RefSportPage() {
  return (
    <ReferenceGallery
      titleKey="sportTitle"
      heroImage="/images/kanoeBig.jpg"
      images={images}
    />
  );
}
