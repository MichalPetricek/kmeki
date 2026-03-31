import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { IconChevronRight } from '@/ui/Icons';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const t = useTranslations('common');

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-text-muted">
      <ol className="flex items-center gap-1.5 flex-wrap">
        <li>
          <Link href="/" className="hover:text-primary transition-colors">
            {t('breadcrumbHome')}
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <IconChevronRight className="w-3 h-3 opacity-40" />
            {item.href ? (
              <Link href={item.href as '/'} className="hover:text-primary transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-text-secondary">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
