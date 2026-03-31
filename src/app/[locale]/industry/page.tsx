import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import IndustryPageClient from '@/components/IndustryPageClient';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'industry' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <IndustryPageClient />;
}
