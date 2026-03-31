import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import GdprPageClient from '@/components/GdprPageClient';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'gdpr' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: { title: t('title'), description: t('description') },
  };
}

export default async function GdprPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <GdprPageClient />;
}
