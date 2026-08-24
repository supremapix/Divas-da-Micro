
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Heart, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, ALL_LOCATIONS, getWhatsAppLink } from '../constants';
import ButterflyLogo from './ButterflyLogo';

export function SupremaCredit() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-4 border-t border-pink-500/10 flex justify-center items-center">
      <div className="bg-gray-900/80 border border-pink-500/20 rounded-full px-5 sm:px-6 py-2 sm:py-2.5 shadow-lg flex items-center justify-center transition-all duration-300 hover:border-pink-500/40 hover:shadow-[0_0_20px_rgba(212,86,125,0.2)]">
        <p className="text-gray-300 hover:text-white transition-colors duration-200 text-xs sm:text-sm font-semibold flex flex-wrap items-center justify-center gap-2 text-center">
          <span className="opacity-90">Desenvolvido com</span> 
          
          {/* Coração pulsante com efeito de sombra */}
          <Heart 
            size={14} 
            className="text-[#D4567D] fill-[#D4567D] animate-[pulse_1.5s_infinite] shrink-0 filter drop-shadow-[0_0_4px_rgba(212,86,125,0.8)]" 
          /> 
          
          <span className="opacity-90">por</span>
          
          {/* Link para o site da Suprema */}
          <a 
            id="developer-suprema-link"
            href="https://supremasite.com.br" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-yellow-400 hover:text-yellow-300 transition-all font-bold inline-flex items-center gap-1.5 cursor-pointer border-b border-dashed border-yellow-400/50 hover:border-yellow-300"
          >
            <span>Suprema Sites Express</span>
            
            {/* Logotipo oficial com efeito de iluminação */}
            <img 
              src="https://img.supremamidia.com/suprema-img.png" 
              alt="Suprema" 
              className="h-[18px] w-auto inline select-none shrink-0 filter drop-shadow-[0_0_2px_rgba(250,204,21,0.5)] transition-transform duration-300 hover:scale-110" 
              referrerPolicy="no-referrer"
            />
          </a>
        </p>
      </div>
    </div>
  );
}

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-950 text-gray-200 pt-16 pb-12 overflow-hidden border-t border-pink-500/20">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img 
          src="https://img.supremasite.com.br/divas/luxury_spa_banner.webp" 
          alt="Luxury Spa Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/90 to-gray-950"></div>
      </div>
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Col 1 - About */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <ButterflyLogo size={36} />
            <span className="text-2xl font-serif font-bold text-white">Divas da Micro</span>
          </div>
          <p className="text-base text-gray-300 leading-relaxed">
            Especialistas em devolver a autoestima de mulheres 60+ através da correção de micropigmentação antiga. Atendimento exclusivo, 100% indolor e humanizado no conforto do seu lar.
          </p>
          <div className="pt-2">
            <a 
              href={getWhatsAppLink('Footer WhatsApp Direct')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-xl font-bold text-base shadow-lg transition-all"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Direto (60+)</span>
            </a>
          </div>
        </div>

        {/* Col 2 - Services */}
        <div>
          <h4 className="text-white font-serif text-xl mb-6 border-b border-pink-500/30 pb-2 inline-block">Nossos Serviços</h4>
          <ul className="space-y-3 text-base">
            <li><Link to="/correcao" className="hover:text-pink-400 transition-colors block py-1">Correção de Sobrancelhas</Link></li>
            <li><Link to="/correcao" className="hover:text-pink-400 transition-colors block py-1">Correção de Olhos</Link></li>
            <li><Link to="/correcao" className="hover:text-pink-400 transition-colors block py-1">Correção Labial</Link></li>
            <li><Link to="/mulheres-maduras" className="hover:text-pink-400 transition-colors block py-1 font-bold text-pink-300">Especial 60+ (Indolor)</Link></li>
            <li><Link to="/agenda" className="hover:text-pink-400 transition-colors block py-1">Atendimento Domiciliar VIP</Link></li>
          </ul>
        </div>

        {/* Col 3 - Locations */}
        <div>
          <h4 className="text-white font-serif text-xl mb-6 border-b border-pink-500/30 pb-2 inline-block">Onde Atendemos</h4>
          <ul className="space-y-2 text-sm">
            {ALL_LOCATIONS.filter(l => !l.isCity).slice(0, 5).map(loc => (
              <li key={loc.slug}>
                <Link to={`/correcao-em-${loc.slug}`} className="hover:text-pink-400 transition-colors py-1 block">
                  {loc.name}
                </Link>
              </li>
            ))}
            {ALL_LOCATIONS.filter(l => l.isCity).slice(0, 3).map(loc => (
              <li key={loc.slug}>
                <Link to={`/correcao-em-${loc.slug}`} className="hover:text-pink-400 transition-colors py-1 block">
                  {loc.name}
                </Link>
              </li>
            ))}
            <li className="pt-2"><Link to="/contato" className="text-pink-400 font-bold hover:underline">Ver todas as regiões atendidas →</Link></li>
          </ul>
        </div>

        {/* Col 4 - Contact */}
        <div>
          <h4 className="text-white font-serif text-xl mb-6 border-b border-pink-500/30 pb-2 inline-block">Contato & Atendimento</h4>
          <ul className="space-y-4 text-base">
            <li className="flex items-start gap-3">
              <MapPin className="text-pink-400 shrink-0 mt-1" size={22} />
              <span className="text-gray-200">{CONTACT_INFO.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-pink-400 shrink-0" size={22} />
              <a href={CONTACT_INFO.phoneCall} className="text-gray-200 hover:text-white font-bold">{CONTACT_INFO.whatsappDisplay}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-pink-400 shrink-0" size={22} />
              <span className="text-gray-200 break-all">{CONTACT_INFO.email}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-400 relative z-10">
        <p>
          © 2025 Divas da Micro ® | Especializadas em Mulheres 60+ e Correção de Micropigmentação em Curitiba e Região.
        </p>
      </div>

      {/* Crédito Suprema Sites integrado com a paleta do site */}
      <div className="relative z-10">
        <SupremaCredit />
      </div>
    </footer>
  );
};

export default Footer;
