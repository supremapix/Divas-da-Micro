
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, History, ArrowRight, MessageCircle, Info, CheckCircle2, Sparkles } from 'lucide-react';
import { getWhatsAppLink, PROCEDURES_TIPS } from '../constants';
import FacebookFeed from '../components/FacebookFeed';
import ImageWithFallback from '../components/ImageWithFallback';

const Correction: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Correção de Micropigmentação Antiga em Curitiba | Divas da Micro";
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-16 sm:pt-20 pb-16 bg-[#FAF8F9]"
    >
      {/* Hero - Compacto com Padrão Validado */}
      <section className="bg-gray-950 text-white py-10 sm:py-16 md:py-20 relative overflow-hidden border-b border-pink-900/30">
        <div className="absolute inset-0 z-0 opacity-25">
          <ImageWithFallback 
            src="/images/luxury_spa_banner.webp" 
            alt="Luxury Spa Banner - Correção de Micropigmentação" 
            fallbackTitle="Correção de Micropigmentação Antiga"
            fallbackCategory="Pele Madura 60+"
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="w-full max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-[#D4567D] text-white px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <Sparkles size={13} />
              <span>Especialistas em Mulheres 60+</span>
            </div>

            <h1 className="text-xl sm:text-3xl md:text-5xl font-serif font-bold leading-tight tracking-tight">
              Sua Micropigmentação Antiga Tem <span className="text-[#D4567D]">Solução Natural</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-gray-200 font-normal leading-[1.45] max-w-2xl mx-auto">
              Revertemos sobrancelhas cinzas, azuladas ou avermelhadas sem dor e sem laser agressivo, devolvendo a leveza e a jovialidade ao seu olhar.
            </p>

            <div className="pt-2 flex flex-col items-center gap-1">
              <a 
                href={getWhatsAppLink('Página Correção')}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[42px] h-11 px-6 sm:px-8 bg-[#D4567D] hover:bg-[#B84A6B] text-white rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md inline-flex items-center gap-2 active:scale-98"
              >
                <MessageCircle size={18} /> 
                <span>Avaliar Gratuitamente no WhatsApp</span>
              </a>
              <span className="text-[11px] text-gray-300 font-medium">Análise confidencial por foto</span>
            </div>
          </div>
        </div>
      </section>

      {/* Neutralization Process */}
      <section className="py-8 sm:py-12 max-w-5xl mx-auto px-2.5 sm:px-4 md:px-6">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-pink-100 shadow-xs p-4 sm:p-7 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="space-y-3.5">
              <div className="inline-flex items-center gap-1.5 text-[#B84A6B] font-bold uppercase tracking-wider text-[11px] bg-pink-50 px-2.5 py-0.5 rounded-md border border-pink-100">
                <span>Colorimetria Corretiva</span>
              </div>

              <h2 className="text-lg sm:text-2xl md:text-3xl font-serif font-bold text-gray-900 leading-snug">
                A Ciência da <span className="text-[#D4567D]">Neutralização de Cores</span>
              </h2>

              <p className="text-xs sm:text-sm text-gray-700 leading-[1.45] font-normal">
                Muitas mulheres em Curitiba sofrem com procedimentos antigos que mudaram de tom com os anos. Isso acontece devido à implantação profunda ou pigmentos inadequados para peles maduras.
              </p>
              
              <div className="space-y-3 pt-1">
                <div className="flex gap-3 p-3 sm:p-3.5 bg-[#FDF2F8] rounded-xl border border-pink-100 items-start">
                  <div className="text-[#D4567D] shrink-0 mt-0.5"><History size={22} /></div>
                  <div className="space-y-0.5">
                    <h3 className="font-bold text-xs sm:text-sm text-gray-900">Neutralização de Cinza e Azulado</h3>
                    <p className="text-xs text-gray-700 font-normal leading-[1.4]">Aplicamos pigmentos quentes corretivos calibrados para anular o tom frio e resgatar o castanho harmônico.</p>
                  </div>
                </div>

                <div className="flex gap-3 p-3 sm:p-3.5 bg-[#FDF2F8] rounded-xl border border-pink-100 items-start">
                  <div className="text-[#D4567D] shrink-0 mt-0.5"><Zap size={22} /></div>
                  <div className="space-y-0.5">
                    <h3 className="font-bold text-xs sm:text-sm text-gray-900">Neutralização de Vermelho e Alaranjado</h3>
                    <p className="text-xs text-gray-700 font-normal leading-[1.4]">Usamos pigmentos modificadores com base oliva para anular o fundo avermelhado e harmonizar a cor.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagem de Antes e Depois */}
            <div className="space-y-2.5">
              <div className="relative rounded-2xl overflow-hidden shadow-xs border border-gray-200 bg-gray-950 max-h-[380px] flex items-center justify-center">
                <ImageWithFallback 
                  src="/images/correcao-sobrancelas.jpg" 
                  alt="antes e depois de correção de micropigmentação de sobrancelha em Curitiba" 
                  fallbackTitle="Correção de Sobrancelhas Antigas"
                  fallbackCategory="Antes e Depois"
                  className="w-full h-full object-cover object-center max-h-[380px]" 
                  loading="lazy" 
                />
                <div className="absolute bottom-2.5 left-2.5 bg-black/75 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-white/20">
                  Resultado Real 60+
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl shadow-2xs border border-gray-200/80 flex items-center gap-2.5">
                <ShieldCheck size={22} className="text-green-600 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-gray-900">Procedimento 100% Indolor em Pele Madura</p>
                  <p className="text-[11px] text-gray-600">Atendimento domiciliar disponível em Curitiba e RMC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical FAQ / Tips */}
      <section className="py-6 sm:py-10 max-w-5xl mx-auto px-2.5 sm:px-4 md:px-6">
        <div className="text-center mb-6 space-y-1">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-serif font-bold text-gray-900">
            Dúvidas Frequentes sobre Correção
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-normal">
            Orientações claras para quem deseja restaurar sobrancelhas, lábios ou olhos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {PROCEDURES_TIPS.slice(10, 19).map((tip, idx) => (
            <div key={idx} className="p-3.5 bg-white rounded-xl shadow-2xs border border-pink-100/80 flex gap-2.5 items-start">
              <Info size={18} className="text-[#D4567D] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-gray-800 leading-[1.45] font-medium">{tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 sm:py-10 max-w-5xl mx-auto px-2.5 sm:px-4 md:px-6">
        <div className="bg-[#D4567D] text-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-md text-center space-y-3.5 sm:space-y-4">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-serif font-bold leading-snug">
            Não Conviva Mais com um Desenho que Não Te Representa
          </h2>
          <p className="text-xs sm:text-sm text-pink-100 font-normal max-w-xl mx-auto leading-[1.45]">
            Envie uma foto da sua sobrancelha hoje mesmo no WhatsApp e receba nossa análise gratuita e confidencial.
          </p>
          <div className="pt-2 flex flex-col items-center gap-1">
            <a 
              href={getWhatsAppLink('CTA Correção Final')} 
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[42px] h-11 px-6 sm:px-8 bg-white text-[#D4567D] hover:bg-gray-100 rounded-xl font-bold text-xs sm:text-sm transition-all inline-flex items-center gap-2 shadow-xs active:scale-98"
            >
              <MessageCircle size={18} />
              <span>Enviar Foto no WhatsApp</span>
            </a>
            <span className="text-[11px] text-white/80 font-medium">Avalie seu caso gratuitamente</span>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Correction;
