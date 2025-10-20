import { useState } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  mobileSrc?: string;
  tabletSrc?: string;
}

export default function ResponsiveImage({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  mobileSrc,
  tabletSrc 
}: ResponsiveImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Loading placeholder */}
      {isLoading && (
        <div className="absolute inset-0 bg-alba-light-gray animate-pulse flex items-center justify-center">
          <div className="text-alba-charcoal/50 text-sm">Loading...</div>
        </div>
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-alba-light-gray flex items-center justify-center">
          <div className="text-alba-charcoal/50 text-sm">Image unavailable</div>
        </div>
      )}

      {/* Responsive picture element */}
      <picture>
        {mobileSrc && (
          <source 
            media="(max-width: 640px)" 
            srcSet={mobileSrc}
            type="image/webp"
          />
        )}
        {tabletSrc && (
          <source 
            media="(max-width: 1024px)" 
            srcSet={tabletSrc}
            type="image/webp"
          />
        )}
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </picture>
    </div>
  );
}