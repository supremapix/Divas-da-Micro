
import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Mail, ChevronUp } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppLink } from '../constants';

const FloatingButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 flex flex-col gap-3 z-40">
      {/* Scroll Top Button */}
      {showScrollTop && (
        <button
          id="btn-scroll-top"
          onClick={scrollToTop}
          className="w-12 h-12 min-w-[48px] min-h-[48px] bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 border border-white/20"
          aria-label="Voltar ao topo da página"
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* Desktop Quick Actions (hidden on small mobile to give space to sticky bar, shown on md+) */}
      <div className="hidden md:flex flex-col gap-3">
        {/* Email */}
        <a
          id="btn-float-email"
          href={`mailto:${CONTACT_INFO.email}`}
          className="w-12 h-12 min-w-[48px] min-h-[48px] bg-[#D4567D] text-white rounded-full shadow-lg hover:bg-[#B84A6B] flex items-center justify-center transition-all transform hover:scale-105 active:scale-95"
          aria-label="Enviar Email para Divas da Micro"
        >
          <Mail size={22} />
        </a>

        {/* Phone */}
        <a
          id="btn-float-phone"
          href={CONTACT_INFO.phoneCall}
          className="w-12 h-12 min-w-[48px] min-h-[48px] bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 flex items-center justify-center transition-all transform hover:scale-105 active:scale-95"
          aria-label="Ligar para Divas da Micro"
        >
          <Phone size={22} />
        </a>

        {/* WhatsApp */}
        <a
          id="btn-float-whatsapp"
          href={getWhatsAppLink('Botão Flutuante Desktop')}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 min-w-[56px] min-h-[56px] bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20bd5a] flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 animate-pulse"
          aria-label="Conversar pelo WhatsApp"
        >
          <MessageCircle size={32} />
        </a>
      </div>
    </div>
  );
};

export default FloatingButtons;

