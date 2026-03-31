import { IconImage } from '@/ui/Icons';

interface PlaceholderImageProps {
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function PlaceholderImage({ alt, width, height, className = '' }: PlaceholderImageProps) {
  return (
    <div
      className={`bg-dark-card border border-dark-border flex items-center justify-center text-text-muted text-center p-4 ${className}`}
      style={{ width: '100%', aspectRatio: `${width}/${height}` }}
      role="img"
      aria-label={alt}
    >
      <div>
        <IconImage className="w-8 h-8 mx-auto mb-1.5 opacity-20" />
        <p className="text-xs opacity-50 max-w-[200px]">{alt}</p>
      </div>
    </div>
  );
}
