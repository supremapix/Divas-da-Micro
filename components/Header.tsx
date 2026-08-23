
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone, Calendar } from 'lucide-react';
import ButterflyLogo from './ButterflyLogo';
import { CONTACT_INFO, getWhatsAppLink } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobrancelhas & Serviços', path: '/servicos' },
    { name: 'Mulheres 60+', path: '/mulheres-maduras' },
    { name: 'Cuidados', path: '/cuidados' },
    { name: 'Contato & Agenda', path: '/agenda' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-40 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group py-2" aria-label="Divas da Micro Início">
            <ButterflyLogo size={42} />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-gray-900 group-hover:text-[#D4567D] transition-colors">
                Divas da Micro
                <span className="text-xs align-top ml-0.5">®</span>
              </span>
              <span className="text-xs md:text-xs font-semibold uppercase tracking-wider text-[#D4567D]">
                Especialistas 60+
              </span>
            </div>
          </Link>

          {/* Desktop Nav - 4-5 max items */}
          <nav className="hidden xl:flex items-center gap-6" aria-label="Navegação Principal">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-semibold transition-all py-2 px-3 rounded-xl min-h-[48px] flex items-center hover:text-[#D4567D] hover:bg-[#FDF2F8] ${
                  isActive(link.path) 
                    ? 'text-[#D4567D] font-bold border-b-2 border-[#D4567D]' 
                    : 'text-gray-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Header Action Buttons - Always visible */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Direct Quick Action */}
            <a
              id="header-whatsapp-btn"
              href={getWhatsAppLink('Header')}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] px-3.5 sm:px-4 py-2.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base flex items-center gap-2 shadow-sm transition-all active:scale-95"
              aria-label="Falar no WhatsApp"
            >
              <MessageCircle size={20} className="shrink-0" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Agendar Button */}
            <Link
              id="header-agendar-btn"
              to="/agenda"
              className="hidden lg:flex min-h-[48px] px-5 py-2.5 rounded-2xl bg-[#D4567D] hover:bg-[#B84A6B] text-white font-bold text-base items-center gap-2 shadow-md transition-all active:scale-95"
            >
              <Calendar size={18} />
              <span>Agendar</span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              id="btn-menu-mobile"
              className="xl:hidden w-12 h-12 min-w-[48px] min-h-[48px] flex items-center justify-center p-2 text-gray-800 hover:text-[#D4567D] rounded-xl hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div
        className={`xl:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-2xl transition-all duration-300 transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col p-6 gap-3 max-w-lg mx-auto" aria-label="Menu Mobile">
          <div className="bg-[#FDF2F8] p-4 rounded-2xl border border-pink-200 text-center mb-2">
            <span className="text-sm font-bold text-[#D4567D] uppercase tracking-wider block">Atendimento Especializado</span>
            <span className="text-lg font-serif font-bold text-gray-900">Mulheres 60+ • Sem Dor</span>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`min-h-[56px] px-5 py-3.5 rounded-2xl text-xl font-bold flex items-center transition-all ${
                isActive(link.path) 
                  ? 'bg-[#D4567D] text-white shadow-md' 
                  : 'text-gray-900 hover:bg-gray-100 bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-4 border-t border-gray-200 flex flex-col gap-4">
            <div className="flex flex-col items-center">
              <a
                href={getWhatsAppLink('Menu Mobile WhatsApp')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[56px] bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-4 rounded-2xl text-center font-bold text-lg flex items-center justify-center gap-3 shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle size={24} />
                <span>WhatsApp (Falar com Especialista)</span>
              </a>
              <span className="text-xs text-gray-600 mt-1 font-medium">Tire suas dúvidas ou envie foto</span>
            </div>

            <div className="flex flex-col items-center">
              <Link
                to="/agenda"
                className="w-full min-h-[56px] bg-[#D4567D] hover:bg-[#B84A6B] text-white px-6 py-4 rounded-2xl text-center font-bold text-lg flex items-center justify-center gap-3 shadow-md"
                onClick={() => setIsOpen(false)}
              >
                <Calendar size={24} />
                <span>Agendar Atendimento Domiciliar</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

