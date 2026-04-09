import { routing } from '@/i18n/routing';

export default function RootPage() {
  const target = `/${routing.defaultLocale}`;
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content={`0;url=${target}`} />
        <link rel="canonical" href={target} />
      </head>
      <body />
    </html>
  );
}
