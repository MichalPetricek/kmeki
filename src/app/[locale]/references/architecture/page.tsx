'use client';

import ReferenceGallery from '@/ui/ReferenceGallery';

const images = [
  { src: '/images/galerieViden[1].jpg', alt: 'Galerie Vídeň' },
  { src: '/images/Galerie křeslo.jpg', alt: 'Galerie křeslo' },
];

export default function RefArchitecturePage() {
  return (
    <ReferenceGallery
      titleKey="architectureTitle"
      heroImage="/images/galerieViden[1].jpg"
      images={images}
    />
  );
}
