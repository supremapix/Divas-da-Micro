
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, ALL_LOCATIONS, getWhatsAppLink } from '../constants';
import ButterflyLogo from './ButterflyLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      {/* Contact Banner - Easy Access for Elderly */}
      <div className="bg-[#D4567D]/20 border-l-4 border-[#D4567D] mb-16 px-6 py-8">
        <div className="container mx-auto">
          <h3 className="text-white text-xl md:text-2xl font-serif font-bold mb-4">Pronto para Agendar?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <a href={`tel:${CONTACT_INFO.whatsapp}`} className="bg-white text-gray-900 font-bold py-4 px-6 rounded-lg hover:bg-gray-100 transition-colors text-base md:text-lg flex items-center justify-center gap-2 shadow-md">
              <Phone size={20} />
              Ligar: {CONTACT_INFO.whatsappDisplay}
            </a>
            <a href={getWhatsAppLink('Footer - Easy Access')} className="bg-[#D4567D] text-white font-bold py-4 px-6 rounded-lg hover:bg-[#b84a6b] transition-colors text-base md:text-lg flex items-center justify-center gap-2 shadow-md">
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="bg-white text-gray-900 font-bold py-4 px-6 rounded-lg hover:bg-gray-100 transition-colors text-base md:text-lg flex items-center justify-center gap-2 shadow-md">
              <Mail size={20} />
              Email
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Col 1 - About */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <ButterflyLogo size={36} />
            <span className="text-2xl md:text-3xl font-serif font-bold text-white">Divas da Micro</span>
          </div>
          <p className="text-sm md:text-base leading-relaxed mb-8">
            Especialistas em devolver a autoestima de mulheres 60+ através da correção de micropigmentação antiga. Atendimento exclusivo e humanizado no conforto do seu lar.
          </p>
          <div className="flex gap-6">
            <a href={getWhatsAppLink('Instagram Footer')} className="text-white hover:text-[#D4567D] transition-colors" aria-label="WhatsApp Instagram"><Instagram size={28} /></a>
            <a href={getWhatsAppLink('Facebook Footer')} className="text-white hover:text-[#D4567D] transition-colors" aria-label="WhatsApp Facebook"><Facebook size={28} /></a>
            <a href={getWhatsAppLink('WhatsApp Footer')} className="text-white hover:text-[#D4567D] transition-colors" aria-label="WhatsApp Contact"><MessageCircle size={28} /></a>
          </div>
        </div>

        {/* Col 2 - Services */}
        <div>
          <h4 className="text-white font-serif text-lg md:text-xl mb-8 font-bold">Nossos Serviços</h4>
          <ul className="space-y-4">
            <li><Link to="/correcao" className="text-base hover:text-[#D4567D] transition-colors font-medium">Correção de Sobrancelhas</Link></li>
            <li><Link to="/correcao" className="text-base hover:text-[#D4567D] transition-colors font-medium">Correção de Olhos</Link></li>
            <li><Link to="/correcao" className="text-base hover:text-[#D4567D] transition-colors font-medium">Correção Labial</Link></li>
            <li><Link to="/servicos" className="text-base hover:text-[#D4567D] transition-colors font-medium">Micropigmentação Natural</Link></li>
            <li><Link to="/agenda" className="text-base hover:text-[#D4567D] transition-colors font-medium">Atendimento Domiciliar</Link></li>
          </ul>
        </div>

        {/* Col 3 - Locations */}
        <div>
          <h4 className="text-white font-serif text-lg md:text-xl mb-8 font-bold">Onde Atendemos</h4>
          <ul className="space-y-3">
            {ALL_LOCATIONS.filter(l => !l.isCity).slice(0, 5).map(loc => (
              <li key={loc.slug}>
                <Link to={`/correcao-em-${loc.slug}`} className="text-sm md:text-base hover:text-[#D4567D] transition-colors font-medium">
                  {loc.name}
                </Link>
              </li>
            ))}
            {ALL_LOCATIONS.filter(l => l.isCity).slice(0, 3).map(loc => (
              <li key={loc.slug}>
                <Link to={`/correcao-em-${loc.slug}`} className="text-sm md:text-base hover:text-[#D4567D] transition-colors font-medium">
                  {loc.name}
                </Link>
              </li>
            ))}
            <li className="pt-4"><Link to="/contato" className="text-[#D4567D] text-base font-bold hover:underline">Ver todas as regiões →</Link></li>
          </ul>
        </div>

        {/* Col 4 - Contact */}
        <div>
          <h4 className="text-white font-serif text-lg md:text-xl mb-8 font-bold">Contato Direto</h4>
          <ul className="space-y-6">
            <li className="flex gap-4 items-start">
              <MapPin className="text-[#D4567D] shrink-0 mt-1" size={24} />
              <span className="text-sm md:text-base leading-relaxed">{CONTACT_INFO.address}</span>
            </li>
            <li className="flex gap-4 items-start">
              <Phone className="text-[#D4567D] shrink-0 mt-1" size={24} />
              <a href={`tel:${CONTACT_INFO.whatsapp}`} className="text-base md:text-lg font-bold text-white hover:text-[#D4567D] transition-colors">
                {CONTACT_INFO.whatsappDisplay}
              </a>
            </li>
            <li className="flex gap-4 items-start">
              <Mail className="text-[#D4567D] shrink-0 mt-1" size={24} />
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm md:text-base hover:text-[#D4567D] transition-colors break-all">
                {CONTACT_INFO.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-gray-800 text-center">
        <p className="text-sm">
          © 2025 Divas da Micro ® | Desenvolvido com 
          <span className="heart-animated mx-1">❤️</span> por 
          <a href="https://supremasite.com.br" target="_blank" rel="noopener" className="hover:text-white ml-1">Suprema Sites Express</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
