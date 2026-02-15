
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, ALL_LOCATIONS, getWhatsAppLink } from '../constants';
import ButterflyLogo from './ButterflyLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Col 1 - About */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <ButterflyLogo size={32} />
            <span className="text-2xl font-serif font-bold text-white">Divas da Micro</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Especialistas em devolver a autoestima de mulheres 60+ através da correção de micropigmentação antiga. Atendimento exclusivo e humanizado no conforto do seu lar.
          </p>
          <div className="flex gap-4">
            {/* User requested social icons to point to WhatsApp with exact message */}
            <a href={getWhatsAppLink('Instagram Footer')} className="hover:text-[#D4567D] transition-colors" aria-label="WhatsApp Instagram"><Instagram size={24} /></a>
            <a href={getWhatsAppLink('Facebook Footer')} className="hover:text-[#D4567D] transition-colors" aria-label="WhatsApp Facebook"><Facebook size={24} /></a>
            <a href={getWhatsAppLink('WhatsApp Footer')} className="hover:text-[#D4567D] transition-colors" aria-label="WhatsApp Contact"><MessageCircle size={24} /></a>
          </div>
        </div>

        {/* Col 2 - Services */}
        <div>
          <h4 className="text-white font-serif text-xl mb-6">Nossos Serviços</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/correcao" className="hover:text-[#D4567D]">Correção de Sobrancelhas</Link></li>
            <li><Link to="/correcao" className="hover:text-[#D4567D]">Correção de Olhos</Link></li>
            <li><Link to="/correcao" className="hover:text-[#D4567D]">Correção Labial</Link></li>
            <li><Link to="/servicos" className="hover:text-[#D4567D]">Micropigmentação Natural</Link></li>
            <li><Link to="/agenda" className="hover:text-[#D4567D]">Atendimento Domiciliar</Link></li>
          </ul>
        </div>

        {/* Col 3 - Locations */}
        <div>
          <h4 className="text-white font-serif text-xl mb-6">Onde Atendemos</h4>
          <ul className="space-y-2 text-xs">
            {ALL_LOCATIONS.filter(l => !l.isCity).slice(0, 5).map(loc => (
              <li key={loc.slug}>
                <Link to={`/correcao-em-${loc.slug}`} className="hover:text-[#D4567D]">
                  {loc.name}
                </Link>
              </li>
            ))}
            {ALL_LOCATIONS.filter(l => l.isCity).slice(0, 3).map(loc => (
              <li key={loc.slug}>
                <Link to={`/correcao-em-${loc.slug}`} className="hover:text-[#D4567D]">
                  {loc.name}
                </Link>
              </li>
            ))}
            <li className="pt-2"><Link to="/contato" className="text-[#D4567D] hover:underline">Ver todas as regiões</Link></li>
          </ul>
        </div>

        {/* Col 4 - Contact */}
        <div>
          <h4 className="text-white font-serif text-xl mb-6">Contato</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="text-[#D4567D] shrink-0" size={20} />
              <span>{CONTACT_INFO.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="text-[#D4567D] shrink-0" size={20} />
              <span>{CONTACT_INFO.whatsappDisplay}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="text-[#D4567D] shrink-0" size={20} />
              <span className="break-all">{CONTACT_INFO.email}</span>
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
