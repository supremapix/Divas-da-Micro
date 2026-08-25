
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Heart, MessageCircle, Instagram, Sparkles, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppLink } from '../constants';
import ButterflyLogo from './ButterflyLogo';

export function SupremaCredit() {
  return (
    <div className="w-full pt-3 pb-1 flex justify-center items-center">
      <div className="bg-white border border-pink-100 rounded-full px-4 py-1.5 shadow-2xs flex items-center justify-center transition-all duration-200 hover:border-pink-300">
        <p className="text-gray-500 hover:text-gray-700 transition-colors duration-200 text-[11px] sm:text-xs font-medium flex flex-wrap items-center justify-center gap-1.5 text-center">
          <span>Desenvolvido com</span> 
          
          <Heart 
            size={12} 
            className="text-[#D4567D] fill-[#D4567D] animate-[pulse_1.5s_infinite] shrink-0" 
          /> 
          
          <span>por</span>
          
          <a 
            id="developer-suprema-link"
            href="https://supremasite.com.br" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-800 hover:text-[#D4567D] transition-all font-semibold inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Suprema Sites Express</span>
            <img 
              src="https://img.supremamidia.com/suprema-img.png" 
              alt="Suprema" 
              className="h-[14px] w-auto inline select-none shrink-0" 
              referrerPolicy="no-referrer"
              onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }}
            />
          </a>
        </p>
      </div>
    </div>
  );
}

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF8F9] text-gray-700 pt-8 sm:pt-10 pb-6 border-t border-pink-100 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* 4 Colunas Principais Estilo Facebook */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-8">
          
          {/* Coluna 1: Marca & Apresentação */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <ButterflyLogo size={28} />
              <div>
                <span className="text-base sm:text-lg font-serif font-bold text-gray-900 block leading-tight">Divas da Micro</span>
                <span className="text-[11px] text-[#D4567D] font-semibold flex items-center gap-1">
                  <Sparkles size={11} /> Especialistas 60+
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-600 leading-[1.45]">
              Especialistas em correção, clareamento e harmonização de micropigmentação em pele madura. Atendimento com biossegurança e protocolo 100% indolor.
            </p>

            <div className="pt-1">
              <a 
                href={getWhatsAppLink('Footer WhatsApp CTA')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-1.5 rounded-lg font-bold text-xs shadow-2xs transition-all active:scale-98"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Direto</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Serviços */}
          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 text-xs sm:text-sm uppercase tracking-wider text-[#B84A6B] pb-1 border-b border-pink-100/80">
              Serviços
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li>
                <Link to="/servicos" className="hover:text-[#D4567D] transition-colors block py-0.5">
                  Harmonização de Sobrancelhas
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-[#D4567D] transition-colors block py-0.5">
                  Correção de Olhos & Delineado
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-[#D4567D] transition-colors block py-0.5">
                  Revitalização e Correção Labial
                </Link>
              </li>
              <li>
                <Link to="/correcao" className="hover:text-[#D4567D] transition-colors block py-0.5 font-medium text-gray-800">
                  Correção de Micropigmentação Antiga
                </Link>
              </li>
              <li>
                <Link to="/mulheres-maduras" className="hover:text-[#D4567D] transition-colors block py-0.5 font-semibold text-[#D4567D]">
                  Pele Madura 60+ (Protocolo Indolor)
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Institucional */}
          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 text-xs sm:text-sm uppercase tracking-wider text-[#B84A6B] pb-1 border-b border-pink-100/80">
              Institucional
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li>
                <Link to="/depoimentos" className="hover:text-[#D4567D] transition-colors block py-0.5">
                  Depoimentos de Clientes (Google 4.9★)
                </Link>
              </li>
              <li>
                <Link to="/guia" className="hover:text-[#D4567D] transition-colors block py-0.5">
                  Guia & Dicas de Cuidados
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#D4567D] transition-colors block py-0.5">
                  Dúvidas Frequentes (FAQ)
                </Link>
              </li>
              <li>
                <Link to="/agenda" className="hover:text-[#D4567D] transition-colors block py-0.5">
                  Atendimento Domiciliar Batel & RMC
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-[#D4567D] transition-colors block py-0.5 font-medium text-gray-800">
                  Contato & Localização
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Atendimento & Contato */}
          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 text-xs sm:text-sm uppercase tracking-wider text-[#B84A6B] pb-1 border-b border-pink-100/80">
              Atendimento
            </h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li className="flex items-start gap-2 leading-snug">
                <MapPin className="text-[#D4567D] shrink-0 mt-0.5" size={14} />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-start gap-2 leading-snug">
                <Clock className="text-[#D4567D] shrink-0 mt-0.5" size={14} />
                <span>{CONTACT_INFO.hours}</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="text-[#D4567D] shrink-0" size={14} />
                <span>Raio de {CONTACT_INFO.serviceRadius} do Batel</span>
              </li>
              <li className="flex items-center gap-2 pt-0.5">
                <Phone className="text-[#D4567D] shrink-0" size={14} />
                <a href={CONTACT_INFO.phoneCall} className="text-gray-800 hover:text-[#D4567D] font-semibold">
                  {CONTACT_INFO.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Linha Divisória de Rodapé Final Estilo Facebook */}
        <div className="border-t border-gray-200/80 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-500">
          <div className="flex items-center gap-1 text-center sm:text-left">
            <span>Divas da Micro © 2026</span>
            <span>·</span>
            <span>Todos os direitos reservados</span>
            <span>·</span>
            <span className="hidden md:inline">Curitiba e RMC</span>
          </div>

          {/* Ícones Sociais Discretos */}
          <div className="flex items-center gap-2.5">
            <a
              href={getWhatsAppLink('Footer Social WhatsApp')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-white border border-gray-200 text-[#25D366] hover:border-[#25D366] flex items-center justify-center transition-colors"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <MessageCircle size={14} />
            </a>
            <a
              href={getWhatsAppLink('Footer Social Instagram')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-white border border-gray-200 text-[#D4567D] hover:border-[#D4567D] flex items-center justify-center transition-colors"
              title="Instagram"
              aria-label="Instagram"
            >
              <Instagram size={14} />
            </a>
            <a
              href={CONTACT_INFO.phoneCall}
              className="w-7 h-7 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-gray-900 flex items-center justify-center transition-colors"
              title="Telefone"
              aria-label="Telefone"
            >
              <Phone size={13} />
            </a>
          </div>
        </div>

        {/* Crédito Suprema Sites Integrado */}
        <SupremaCredit />

      </div>
    </footer>
  );
};

export default Footer;
