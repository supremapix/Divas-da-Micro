import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppLink } from '../constants';

const StickyMobileFooter: React.FC = () => {
  return (
    <div 
      id="sticky-mobile-bar" 
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-8px_20px_rgba(0,0,0,0.12)] px-4 py-3"
      role="region"
      aria-label="Ações rápidas de contato"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        {/* Ligar Button */}
        <div className="flex-1 flex flex-col items-center">
          <a
            id="btn-sticky-ligar"
            href={CONTACT_INFO.phoneCall}
            className="w-full min-h-[46px] px-3 py-2.5 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300 font-bold text-base flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm"
            aria-label="Ligar para Divas da Micro"
          >
            <Phone size={18} className="text-[#D4567D] shrink-0" />
            <span>Ligar</span>
          </a>
          <span className="text-[11px] text-gray-500 mt-1 font-medium text-center">Atendimento por voz</span>
        </div>

        {/* WhatsApp Button */}
        <div className="flex-[1.4] flex flex-col items-center">
          <a
            id="btn-sticky-whatsapp"
            href={getWhatsAppLink('Barra Fixa Mobile')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[46px] px-4 py-2.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md"
            aria-label="Conversar pelo WhatsApp"
          >
            <MessageCircle size={20} className="shrink-0" />
            <span>WhatsApp</span>
          </a>
          <span className="text-[11px] text-gray-500 mt-1 font-medium text-center">Avaliação gratuita por foto</span>
        </div>
      </div>
    </div>
  );
};

export default StickyMobileFooter;
