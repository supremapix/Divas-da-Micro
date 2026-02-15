
import React from 'react';
import { Sparkles, Eye, Heart } from 'lucide-react';

interface Props {
  type: string;
}

const AnimatedServiceIcon: React.FC<Props> = ({ type }) => {
  const getIcon = () => {
    switch(type) {
      case 'Sparkles': return <Sparkles size={48} />;
      case 'Eye': return <Eye size={48} />;
      case 'Heart': return <Heart size={48} />;
      default: return <Sparkles size={48} />;
    }
  };

  return (
    <div className="relative group/icon inline-block">
      <div className="absolute inset-0 bg-[#D4567D]/20 rounded-full blur-xl scale-0 group-hover/icon:scale-150 transition-transform duration-700"></div>
      <div className="text-[#D4567D] relative z-10 animate-bounce-subtle group-hover/icon:rotate-12 transition-transform">
        {getIcon()}
      </div>
    </div>
  );
};

export default AnimatedServiceIcon;
