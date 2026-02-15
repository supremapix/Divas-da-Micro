
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ButterflyLogo from './ButterflyLogo';
import { COLORS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Correção', path: '/correcao' },
    { name: 'Cuidados', path: '/cuidados' },
    { name: 'Agenda', path: '/agenda' },
    { name: 'Contato', path: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link to="/" className="flex items-center gap-3 group">
            <ButterflyLogo size={40} />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-gray-900 group-hover:text-[#D4567D] transition-colors">
                Divas da Micro
                <span className="text-xs align-top ml-1">®</span>
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500">
                Correção de Micropigmentação
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#D4567D] ${
                  isActive(link.path) ? 'text-[#D4567D] border-b-2 border-[#D4567D]' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/agenda"
              className="bg-[#D4567D] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#b84a6b] transition-all shadow-md"
            >
              Avaliação Gratuita
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden absolute top-20 left-0 right-0 bg-white border-b transition-all duration-300 transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-medium ${
                isActive(link.path) ? 'text-[#D4567D]' : 'text-gray-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/agenda"
            className="bg-[#D4567D] text-white px-6 py-3 rounded-xl text-center font-semibold mt-4"
            onClick={() => setIsOpen(false)}
          >
            Agendar Agora
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
