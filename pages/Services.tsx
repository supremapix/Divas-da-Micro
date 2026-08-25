
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye, Heart, CheckCircle2, MessageCircle, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { SERVICES, getWhatsAppLink } from '../constants';
import ButterflyLogo from '../components/ButterflyLogo';
import ImageWithFallback from '../components/ImageWithFallback';

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
      className="pt-16 sm:pt-20 pb-16 bg-[#FAF8F9]"
    >
      {/* Hero Section - Compacto com Padrão Validado */}
      <section className="relative py-8 sm:py-12 md:py-16 bg-white border-b border-pink-100">
        <div className="w-full max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="space-y-2.5 sm:space-y-3.5"
          >
            <div className="inline-flex items-center gap-1.5 bg-[#FDF2F8] border border-pink-200 text-[#B84A6B] px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <Sparkles size={13} className="text-[#D4567D]" />
              <span>Atendimento Domiciliar e Estúdio em Curitiba e RMC</span>
            </div>

            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight tracking-tight">
              Serviços de <span className="text-[#D4567D]">Micropigmentação e Correção</span> Especializada
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-gray-700 max-w-2xl mx-auto leading-[1.45] font-normal">
              Técnicas suaves e anestésicos potentes desenvolvidos especialmente para mulheres 60+, corrigindo procedimentos antigos e realçando sua beleza natural.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Cards com Imagens e Espaçamentos Compactos */}
      <section className="py-6 sm:py-10 max-w-5xl mx-auto px-2.5 sm:px-4 md:px-6">
        <div className="space-y-6 sm:space-y-8">
          {SERVICES.map((service, idx) => (
            <article 
              key={service.id} 
              className="bg-white rounded-2xl sm:rounded-3xl border border-pink-100 shadow-xs overflow-hidden"
            >
              <div className={`flex flex-col lg:flex-row items-stretch ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Imagem Full-Bleed no Mobile / Compacta no Desktop */}
                <div className="w-full lg:w-1/2 bg-gray-950 relative min-h-[220px] sm:min-h-[280px] lg:min-h-[340px] flex items-center justify-center overflow-hidden">
                  <ImageWithFallback 
                    src={service.image} 
                    alt={`procedimento de ${service.title.toLowerCase()} em Curitiba para mulheres maduras`} 
                    fallbackTitle={service.title}
                    fallbackCategory="Divas da Micro"
                    className="w-full h-full object-cover object-center" 
                    loading="lazy" 
                  />
                  <div className="absolute bottom-2.5 left-2.5 bg-black/75 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-white/20">
                    Curitiba e RMC
                  </div>
                </div>

                {/* Conteúdo do Card com Escala Compacta */}
                <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-7 flex flex-col justify-between space-y-3.5 sm:space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-[#D4567D]">
                      <div className="p-1.5 bg-[#FDF2F8] rounded-xl text-[#D4567D] shrink-0">
                        {service.icon === 'Sparkles' && <Sparkles size={20} />}
                        {service.icon === 'Eye' && <Eye size={20} />}
                        {service.icon === 'Heart' && <Heart size={20} />}
                      </div>
                      <h2 className="text-base sm:text-xl md:text-2xl font-serif font-bold text-gray-900 leading-snug">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-700 leading-[1.45] font-normal">
                      {service.details}
                    </p>

                    <div className="space-y-1.5 pt-1">
                      {[
                        'Design personalizado pré-aprovado por você',
                        'Anestésico tópico manipulado (100% indolor)',
                        'Pigmentos orgânicos que não degradam para azul/vermelho',
                        'Atendimento domiciliar VIP no seu lar'
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-800 text-xs sm:text-sm font-medium">
                          <CheckCircle2 size={15} className="text-[#D4567D] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Botão de Ação WhatsApp */}
                  <div className="pt-2 flex flex-col items-start gap-1">
                    <a 
                      href={getWhatsAppLink(`Serviço - ${service.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[40px] h-10 px-5 sm:px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-xs active:scale-98"
                    >
                      <MessageCircle size={17} />
                      <span>Agendar no WhatsApp</span>
                    </a>
                    <span className="text-[11px] text-gray-500 font-medium ml-1">Atendimento domiciliar ou estúdio</span>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Trust Section - Compacto */}
      <section className="max-w-5xl mx-auto px-2.5 sm:px-4 md:px-6 mt-4">
        <div className="bg-gray-900 text-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm space-y-6 text-center">
          <div>
            <h2 className="text-lg sm:text-2xl font-serif font-bold mb-1.5">
              O Padrão de Cuidado Divas da Micro
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto">
              Por que centenas de mulheres 60+ confiam no nosso trabalho em Curitiba e Região.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 text-left">
            <div className="p-3.5 sm:p-4 rounded-xl bg-gray-800/80 border border-gray-700 space-y-1.5">
              <div className="flex items-center gap-2 text-[#D4567D]">
                <ShieldCheck size={20} />
                <h3 className="text-sm font-bold text-white">Biossegurança Rigorosa</h3>
              </div>
              <p className="text-xs text-gray-300 font-normal leading-[1.45]">
                Materiais 100% descartáveis e esterilização certificada para sua total tranquilidade.
              </p>
            </div>
            
            <div className="p-3.5 sm:p-4 rounded-xl bg-gray-800/80 border border-gray-700 space-y-1.5">
              <div className="flex items-center gap-2 text-[#D4567D]">
                <Zap size={20} />
                <h3 className="text-sm font-bold text-white">Procedimento 100% Indolor</h3>
              </div>
              <p className="text-xs text-gray-300 font-normal leading-[1.45]">
                Protocolo exclusivo de anestésico tópico manipulado para relaxamento absoluto.
              </p>
            </div>
            
            <div className="p-3.5 sm:p-4 rounded-xl bg-gray-800/80 border border-gray-700 space-y-1.5">
              <div className="flex items-center gap-2 text-[#D4567D]">
                <CheckCircle2 size={20} />
                <h3 className="text-sm font-bold text-white">Acompanhamento Vitalício</h3>
              </div>
              <p className="text-xs text-gray-300 font-normal leading-[1.45]">
                Suporte contínuo via WhatsApp durante a cicatrização e fixação harmoniosa da cor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
