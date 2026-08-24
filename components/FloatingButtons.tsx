
import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Mail, ChevronUp } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppLink } from '../constants';

const FloatingButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    const handleLightbox = (e: Event) => {
      const customEvent = e as CustomEvent;
      setLightboxOpen(customEvent.detail?.open || false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('lightboxToggle', handleLightbox as EventListener);

    if (document.body.classList.contains('lightbox-active')) {
      setLightboxOpen(true);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('lightboxToggle', handleLightbox as EventListener);
    };
  }, []);

  if (lightboxOpen) return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-3 sm:right-6 flex flex-col gap-2 z-30 pointer-events-auto">
      {/* Scroll Top Button - Compacto e fora da área dos CTAs */}
      {showScrollTop && (
        <button
          id="btn-scroll-top"
          onClick={scrollToTop}
          className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-900/85 hover:bg-gray-900 text-white rounded-full shadow-md flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 border border-white/20 backdrop-blur-sm"
          aria-label="Voltar ao topo da página"
        >
          <ChevronUp size={16} className="sm:w-5 sm:h-5" />
        </button>
      )}

      {/* Desktop Quick Actions */}
      <div className="hidden md:flex flex-col gap-2">
        {/* Email */}
        <a
          id="btn-float-email"
          href={`mailto:${CONTACT_INFO.email}`}
          className="w-10 h-10 bg-[#D4567D] text-white rounded-full shadow-md hover:bg-[#B84A6B] flex items-center justify-center transition-all transform hover:scale-105 active:scale-95"
          aria-label="Enviar Email para Divas da Micro"
        >
          <Mail size={18} />
        </a>

        {/* Phone */}
        <a
          id="btn-float-phone"
          href={CONTACT_INFO.phoneCall}
          className="w-10 h-10 bg-gray-900 text-white rounded-full shadow-md hover:bg-gray-800 flex items-center justify-center transition-all transform hover:scale-105 active:scale-95"
          aria-label="Ligar para Divas da Micro"
        >
          <Phone size={18} />
        </a>

        {/* WhatsApp */}
        <a
          id="btn-float-whatsapp"
          href={getWhatsAppLink('Botão Flutuante Desktop')}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 animate-pulse"
          aria-label="Conversar pelo WhatsApp"
        >
          <MessageCircle size={22} />
        </a>
      </div>
    </div>
  );
};

export default FloatingButtons;

