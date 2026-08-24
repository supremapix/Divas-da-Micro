import React from 'react';
import { Sparkles, Star, ShieldCheck, Heart, Zap, MapPin } from 'lucide-react';

interface MarqueeRibbonProps {
  className?: string;
}

const ITEMS = [
  { text: "Atendimento VIP Curitiba e RMC", icon: MapPin },
  { text: "100% Indolor", icon: Zap },
  { text: "+500 Avaliações 5.0 ★", icon: Star },
  { text: "Atendimento Domiciliar", icon: ShieldCheck },
  { text: "Especialistas 60+", icon: Sparkles },
  { text: "Anestésico Manipulado Exclusivo", icon: Heart },
];

const MarqueeRibbon: React.FC<MarqueeRibbonProps> = ({ className = '' }) => {
  return (
    <div 
      className={`w-full bg-[#D4567D] text-white h-9 sm:h-10 flex items-center overflow-hidden shadow-inner select-none relative z-20 border-b border-pink-700/20 ${className}`}
      aria-label="Destaques dos Serviços Divas da Micro"
    >
      <div className="flex w-max animate-marquee items-center gap-6 sm:gap-8 text-xs sm:text-sm font-semibold tracking-wide uppercase">
        {[...ITEMS, ...ITEMS, ...ITEMS].map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center gap-2 whitespace-nowrap opacity-95">
              <Icon size={14} className="text-pink-200 shrink-0" />
              <span>{item.text}</span>
              <span className="text-pink-200/50 font-bold ml-3 sm:ml-4">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarqueeRibbon;
