import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import ReferencesPageClient from '@/components/ReferencesPageClient';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'references' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: { title: t('title'), description: t('description') },
  };
}

export default async function ReferencesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ReferencesPageClient />;
}
