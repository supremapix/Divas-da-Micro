
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, History, ArrowRight, MessageSquare, Info, MessageCircle, CheckCircle2 } from 'lucide-react';
import { getWhatsAppLink, PROCEDURES_TIPS } from '../constants';
import FacebookFeed from '../components/FacebookFeed';

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
      className="pt-24 bg-white"
    >
      {/* Hero */}
      <section className="bg-gray-950 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img 
            src="https://img.supremasite.com.br/divas/luxury_spa_banner.webp" 
            alt="Luxury Spa Banner - Correção de Micropigmentação" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="bg-[#D4567D] text-white px-5 py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider mb-6 inline-block">
              Especialistas em Mulheres 60+
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Sua Micropigmentação Antiga Tem <span className="text-[#D4567D]">Solução Natural</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 font-normal leading-relaxed mb-8 max-w-3xl mx-auto">
              Revertemos sobrancelhas cinzas, azuladas ou avermelhadas sem dor e sem laser agressivo, devolvendo a leveza e a jovialidade ao seu olhar.
            </p>
            <div className="flex flex-col items-center">
              <a 
                href={getWhatsAppLink('Página Correção')}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[52px] bg-[#D4567D] hover:bg-[#B84A6B] text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-lg md:text-xl transition-all shadow-2xl inline-flex items-center gap-3 active:scale-95"
              >
                <MessageCircle size={24} /> 
                <span>WhatsApp</span>
              </a>
              <span className="text-xs text-gray-300 mt-2 font-medium">Avaliação gratuita por foto no WhatsApp</span>
            </div>
          </div>
        </div>
      </section>

      {/* Neutralization Process */}
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-[#D4567D] font-bold uppercase tracking-wider text-xs md:text-sm mb-2 block">
              Colorimetria Avançada
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              A Ciência da <span className="text-[#D4567D]">Neutralização de Cores</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed font-normal">
              Muitas mulheres em Curitiba sofrem com procedimentos antigos que mudaram de tom com os anos. Isso acontece devido à implantação na camada profunda ou pigmentos inadequados para peles maduras.
            </p>
            
            <div className="space-y-5">
              <div className="flex gap-4 p-5 bg-[#FDF2F8] rounded-2xl border border-pink-100">
                <div className="text-[#D4567D] shrink-0"><History size={32} /></div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Neutralização de Cinza e Azulado</h3>
                  <p className="text-base text-gray-700 font-normal">Aplicamos pigmentos quentes corretivos calibrados para anular o tom frio e resgatar o castanho harmônico e natural.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-[#FDF2F8] rounded-2xl border border-pink-100">
                <div className="text-[#D4567D] shrink-0"><Zap size={32} /></div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Neutralização de Vermelho e Alaranjado</h3>
                  <p className="text-base text-gray-700 font-normal">Usamos pigmentos modificadores com base oliva para anular o fundo avermelhado e harmonizar a cor com seus cabelos.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://www.divasespacodabeleza.com.br/assets/images/imagem-do-whatsapp-de-2024-10-20-s-14.36.33-423b191e-416x891.jpg" 
              alt="antes e depois de correção de micropigmentação de sobrancelha em Curitiba" 
              className="rounded-3xl shadow-xl w-full max-h-[550px] object-cover border border-gray-200" 
              loading="lazy"
            />
            <div className="mt-4 p-4 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center gap-3">
              <ShieldCheck size={28} className="text-green-600 shrink-0" />
              <div>
                <p className="text-sm font-bold text-gray-900">Procedimento 100% Indolor em Pele Madura</p>
                <p className="text-xs text-gray-600">Atendimento domiciliar disponível em Curitiba e RMC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FacebookFeed />

      {/* Technical FAQ / Tips */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">
              Perguntas e Dicas sobre Correção
            </h2>
            <p className="text-lg text-gray-700 font-normal">
              Orientações claras para quem deseja restaurar sobrancelhas, lábios ou olhos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCEDURES_TIPS.slice(10, 19).map((tip, idx) => (
              <div key={idx} className="p-5 bg-white rounded-2xl shadow-sm border border-gray-200 flex gap-3.5 items-start">
                <Info size={22} className="text-[#D4567D] shrink-0 mt-0.5" />
                <p className="text-base text-gray-800 leading-relaxed font-medium">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 text-center container mx-auto px-4 md:px-8">
        <div className="bg-[#D4567D] text-white p-8 md:p-14 rounded-3xl shadow-xl max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold">
            Não Conviva Mais com um Desenho que Não Te Representa
          </h2>
          <p className="text-lg md:text-xl text-pink-100 font-normal max-w-2xl mx-auto leading-relaxed">
            Envie uma foto da sua sobrancelha hoje mesmo no WhatsApp e receba nossa análise gratuita e confidencial.
          </p>
          <div className="pt-2 flex flex-col items-center">
            <a 
              href={getWhatsAppLink('CTA Correção Final')} 
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[52px] bg-white text-[#D4567D] hover:bg-gray-100 px-10 py-4 rounded-2xl font-bold text-lg md:text-xl transition-all inline-flex items-center gap-3 shadow-lg active:scale-95"
            >
              <MessageCircle size={24} />
              <span>WhatsApp</span>
            </a>
            <span className="text-xs text-white/80 mt-2 font-medium">Avalie seu caso gratuitamente</span>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Correction;
