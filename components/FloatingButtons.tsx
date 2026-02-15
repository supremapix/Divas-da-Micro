
import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Mail, ChevronUp } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppLink } from '../constants';

const FloatingButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* Scroll Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all transform hover:scale-110"
          aria-label="Voltar ao topo"
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* Email */}
      <a
        href={`mailto:${CONTACT_INFO.email}`}
        className="bg-[#D4567D] text-white p-3 rounded-full shadow-lg hover:opacity-90 transition-all transform hover:scale-110"
        aria-label="Enviar Email"
      >
        <Mail size={24} />
      </a>

      {/* Phone */}
      <a
        href="tel:41997879392"
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all transform hover:scale-110"
        aria-label="Ligar agora"
      >
        <Phone size={24} />
      </a>

      {/* WhatsApp - Using the centralized function with specific message */}
      <a
        href={getWhatsAppLink('Botão Flutuante')}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 animate-bounce-subtle"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

export default FloatingButtons;
