import React, { useState } from 'react';
import ButterflyLogo from './ButterflyLogo';
import { Sparkles, Image as ImageIcon } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackCategory?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = "",
  fallbackTitle,
  fallbackCategory,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div 
        className={`w-full h-full min-h-[180px] bg-gradient-to-br from-gray-900 via-gray-950 to-pink-950/40 text-white flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,86,125,0.15),transparent_70%)] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center space-y-2">
          <div className="w-14 h-14 rounded-full bg-[#D4567D]/20 border border-[#D4567D]/40 flex items-center justify-center p-2.5 shadow-lg">
            <ButterflyLogo size={32} />
          </div>

          {fallbackCategory && (
            <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-pink-300 bg-[#D4567D]/30 px-2.5 py-0.5 rounded-full border border-pink-400/30">
              {fallbackCategory}
            </span>
          )}

          <h4 className="text-sm sm:text-base font-serif font-bold text-white max-w-xs leading-snug">
            {fallbackTitle || alt || "Procedimento Especializado"}
          </h4>

          <div className="inline-flex items-center gap-1.5 text-[11px] text-pink-200/90 font-medium">
            <Sparkles size={12} className="text-[#D4567D]" />
            <span>Divas da Micro • Curitiba</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      onLoad={() => setIsLoaded(true)}
      {...props}
    />
  );
};

export default ImageWithFallback;
