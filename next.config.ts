import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true';

const nextConfig: NextConfig = {
  ...(isStaticExport && {
    output: 'export',
    images: { unoptimized: true },
  }),
  trailingSlash: isStaticExport,
};

export default withNextIntl(nextConfig);
