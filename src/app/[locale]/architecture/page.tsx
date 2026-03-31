import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import ArchitecturePageClient from '@/components/ArchitecturePageClient';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'architecture' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: { title: t('title'), description: t('description') },
  };
}

export default async function ArchitecturePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ArchitecturePageClient />;
}
