
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye, Heart, CheckCircle, ArrowRight, ShieldCheck, Zap, MessageCircle } from 'lucide-react';
import { SERVICES, getWhatsAppLink } from '../constants';
import ButterflyLogo from '../components/ButterflyLogo';

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Serviços de Micropigmentação e Correção em Curitiba | Divas da Micro";
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-white"
    >
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-[#FDF2F8] overflow-hidden border-b border-pink-100">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img 
            src="https://img.supremasite.com.br/divas/luxury_spa_banner.webp" 
            alt="Luxury Spa Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDF2F8]/90 via-[#FDF2F8]/80 to-[#FDF2F8]"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-[#D4567D] font-bold uppercase tracking-wider text-xs md:text-sm mb-3 block">
              Atendimento Domiciliar e Estúdio em Curitiba e RMC
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Serviços de <span className="text-[#D4567D]">Micropigmentação e Correção</span> Especializada
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-normal">
              Técnicas suaves e anestésicos potentes desenvolvidos especialmente para mulheres 60+, corrigindo procedimentos antigos e realçando sua beleza natural.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 opacity-5 pointer-events-none text-[#D4567D]">
          <ButterflyLogo size={600} />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-8">
        <div className="space-y-20 md:space-y-28 max-w-6xl mx-auto">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-pink-100 min-h-[380px] sm:min-h-[460px] md:min-h-[520px] bg-gray-950 group">
                  <img 
                    src={service.image} 
                    alt={`procedimento de ${service.title.toLowerCase()} em Curitiba para mulheres maduras`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    loading="lazy" 
                  />
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-xl border border-white/20">
                    Curitiba e Região Metropolitana
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4 text-[#D4567D]">
                  <div className="p-3 bg-[#FDF2F8] rounded-2xl text-[#D4567D]">
                    {service.icon === 'Sparkles' && <Sparkles size={32} />}
                    {service.icon === 'Eye' && <Eye size={32} />}
                    {service.icon === 'Heart' && <Heart size={32} />}
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900">
                    {service.title}
                  </h2>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed font-normal">
                  {service.details}
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    'Design personalizado pré-aprovado por você',
                    'Uso de anestésico tópico premium manipulado (100% confortável)',
                    'Pigmentos orgânicos que não degradam para cores estranhas',
                    'Opção de atendimento domiciliar VIP no seu lar'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-gray-800 text-base font-medium">
                      <CheckCircle size={22} className="text-[#D4567D] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-col items-start">
                  <a 
                    href={getWhatsAppLink(`Serviço - ${service.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[50px] inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-2xl font-bold text-base md:text-lg transition-all shadow-lg active:scale-95 text-center w-full sm:w-auto"
                  >
                    <MessageCircle size={22} />
                    <span>WhatsApp</span>
                  </a>
                  <span className="text-xs text-gray-500 mt-1.5 font-medium">Agende este procedimento pelo WhatsApp</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-900 text-white py-16 md:py-20 rounded-3xl mx-4 md:mx-8">
        <div className="container mx-auto px-6 md:px-8 text-center max-w-5xl">
          <h2 className="text-2xl md:text-4xl font-serif font-bold mb-4">
            O Padrão de Cuidado Divas da Micro
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Por que centenas de mulheres 60+ confiam exclusivamente no nosso trabalho em Curitiba.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gray-800/60 border border-gray-700 text-left space-y-3">
              <ShieldCheck className="text-[#D4567D]" size={40} />
              <h3 className="text-xl font-bold text-white">Biossegurança Rigorosa</h3>
              <p className="text-base text-gray-300 font-normal">
                Materiais 100% descartáveis e esterilização certificada para sua total tranquilidade.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-gray-800/60 border border-gray-700 text-left space-y-3">
              <Zap className="text-[#D4567D]" size={40} />
              <h3 className="text-xl font-bold text-white">Procedimento 100% Indolor</h3>
              <p className="text-base text-gray-300 font-normal">
                Protocolo exclusivo de anestésico tópico manipulado para que você relaxe completamente.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-gray-800/60 border border-gray-700 text-left space-y-3">
              <CheckCircle className="text-[#D4567D]" size={40} />
              <h3 className="text-xl font-bold text-white">Acompanhamento Vitalício</h3>
              <p className="text-base text-gray-300 font-normal">
                Suporte contínuo via WhatsApp durante todo o período de cicatrização e fixação da cor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
