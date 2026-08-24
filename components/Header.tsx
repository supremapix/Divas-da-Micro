
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone, Calendar, Search, Instagram, Facebook, Sparkles } from 'lucide-react';
import ButterflyLogo from './ButterflyLogo';
import { CONTACT_INFO, getWhatsAppLink, ALL_LOCATIONS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Feed Principal', path: '/' },
    { name: 'Sobrancelhas & Serviços', path: '/servicos' },
    { name: 'Mulheres 60+', path: '/mulheres-maduras' },
    { name: 'Cuidados', path: '/cuidados' },
    { name: 'Contato & Agenda', path: '/agenda' },
  ];

  const filteredSearch = searchQuery.trim().length >= 2 
    ? ALL_LOCATIONS.filter(l => l.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 6)
    : [];

  const handleSearchSelect = (slug: string) => {
    navigate(`/correcao-em-${slug}`);
    setSearchQuery('');
    setShowSearchDropdown(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-pink-100 shadow-[0_2px_10px_rgba(212,86,125,0.07)]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-18 gap-2 sm:gap-4">
          
          {/* Left: Facebook Style Logo & Brand */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link to="/" className="flex items-center gap-2.5 group" aria-label="Divas da Micro Início">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#FDF2F8] to-[#FCE7F3] border-2 border-[#D4567D]/30 flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-transform">
                <ButterflyLogo size={28} />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-serif font-bold tracking-tight text-gray-900 leading-none group-hover:text-[#D4567D] transition-colors">
                  Divas da Micro
                  <span className="text-xs text-[#D4567D] align-top ml-0.5">®</span>
                </span>
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#D4567D]">
                  Especialistas 60+
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Search Box (Facebook Pill Style) */}
          <div className="hidden md:flex flex-1 max-w-md mx-4 lg:mx-8 relative">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Buscar procedimento, bairro ou dúvida..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchDropdown(true);
                }}
                onFocus={() => setShowSearchDropdown(true)}
                className="w-full bg-[#FAF5F8] hover:bg-[#F7EDF3] focus:bg-white text-gray-900 placeholder-gray-500 pl-10 pr-4 py-2 rounded-full border border-pink-200/60 focus:border-[#D4567D] focus:ring-2 focus:ring-[#FDF2F8] outline-none text-sm transition-all"
              />
            </div>

            {/* Quick Search Dropdown */}
            {showSearchDropdown && filteredSearch.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-pink-100 p-2 z-50">
                <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 px-3 py-1.5">
                  Regiões Atendidas em Curitiba e RMC
                </div>
                {filteredSearch.map(loc => (
                  <button
                    key={loc.slug}
                    onClick={() => handleSearchSelect(loc.slug)}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-[#FDF2F8] text-gray-800 hover:text-[#D4567D] text-sm font-medium transition-colors flex items-center justify-between"
                  >
                    <span>{loc.name}</span>
                    <span className="text-xs text-pink-400">Ver atendimento →</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: WhatsApp Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            {/* WhatsApp Button */}
            <a
              id="header-whatsapp-icon"
              href={getWhatsAppLink('Header Topbar')}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 sm:h-10 px-3 sm:px-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-sm active:scale-95 group"
              title="Falar no WhatsApp"
              aria-label="Falar no WhatsApp"
            >
              <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
              <span className="font-semibold whitespace-nowrap">WhatsApp</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              id="btn-menu-mobile"
              className="md:hidden w-9 h-9 flex items-center justify-center text-gray-800 hover:text-[#D4567D] rounded-full bg-gray-50 hover:bg-[#FDF2F8] border border-gray-200/60 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-pink-100 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col p-4 gap-2.5 max-w-md mx-auto" aria-label="Menu Mobile">
            
            {/* Special Badge in Menu */}
            <div className="bg-gradient-to-r from-[#FDF2F8] to-[#FCE7F3] p-3 rounded-2xl border border-pink-200 text-center flex items-center justify-center gap-2">
              <Sparkles size={18} className="text-[#D4567D]" />
              <span className="text-sm font-bold text-gray-900">Especialistas em Mulheres 60+ • Procedimento Indolor</span>
            </div>

            {/* Mobile Search */}
            <div className="relative mt-1 mb-2">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Buscar bairro ou serviço..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#D4567D]"
              />
              {filteredSearch.length > 0 && (
                <div className="mt-2 bg-white rounded-xl shadow-lg border border-pink-100 p-2">
                  {filteredSearch.map(loc => (
                    <button
                      key={loc.slug}
                      onClick={() => {
                        handleSearchSelect(loc.slug);
                        setIsOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-sm font-semibold text-gray-800 hover:text-[#D4567D]"
                    >
                      {loc.name} →
                    </button>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`min-h-[48px] px-4 py-3 rounded-xl text-base font-bold flex items-center justify-between transition-all ${
                  isActive(link.path) 
                    ? 'bg-[#D4567D] text-white shadow-sm' 
                    : 'text-gray-800 hover:bg-[#FDF2F8] bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span>{link.name}</span>
                <span className="text-xs opacity-70">›</span>
              </Link>
            ))}

            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
              <a
                href={getWhatsAppLink('Menu Mobile WhatsApp')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[50px] bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-xl text-center font-bold text-base flex items-center justify-center gap-2 shadow-sm"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle size={22} />
                <span>WhatsApp (Avaliação por Foto)</span>
              </a>

              <Link
                to="/agenda"
                className="w-full min-h-[50px] bg-[#D4567D] hover:bg-[#B84A6B] text-white px-4 py-3 rounded-xl text-center font-bold text-base flex items-center justify-center gap-2 shadow-sm"
                onClick={() => setIsOpen(false)}
              >
                <Calendar size={20} />
                <span>Agendar Atendimento Domiciliar</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;


