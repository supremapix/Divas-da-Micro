
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { ALL_LOCATIONS } from '../constants';

const LocationInfiniteMarquee: React.FC = () => {
  return (
    <div className="relative h-[600px] overflow-hidden bg-gray-950 rounded-[3rem] border border-gray-800 shadow-2xl group">
      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-transparent to-gray-950 z-10 pointer-events-none"></div>
      
      <div className="p-12 relative z-20 flex flex-col items-center text-center">
        <MapPin className="text-[#D4567D] mb-4 animate-pulse" size={40} />
        <h3 className="text-white text-2xl font-serif font-bold mb-2">Cobertura VIP</h3>
        <p className="text-gray-400 text-sm mb-8">Clique no seu bairro para ver detalhes</p>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[400px] flex flex-col gap-4 py-10 marquee-vertical-container">
        {/* Usando os dados centralizados de ALL_LOCATIONS para garantir consistência dos links */}
        <div className="flex flex-col gap-4 animate-location-scroll">
          {[...ALL_LOCATIONS, ...ALL_LOCATIONS].map((loc, idx) => (
            <Link 
              key={`${loc.slug}-${idx}`}
              to={`/correcao-em-${loc.slug}`}
              className="text-center py-2 px-6 text-gray-400 hover:text-[#D4567D] transition-colors text-sm font-bold tracking-wide uppercase hover:scale-110 active:scale-95 transform duration-200"
            >
              {loc.name}
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes location-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-location-scroll {
          animation: location-scroll 60s linear infinite;
        }
        .group:hover .animate-location-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LocationInfiniteMarquee;
