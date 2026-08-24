
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldAlert, CheckSquare, Info, AlertCircle, Heart, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROCEDURES_TIPS, getWhatsAppLink } from '../constants';

const Care: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Cuidados e Cicatrização da Micropigmentação em Curitiba | Divas da Micro";
  }, []);

  const timeline = [
    { day: 'Dia 1-2', title: 'Intensificação Inicial', desc: 'A cor fica temporariamente mais escura pela oxidação do pigmento. Leve sensibilidade normal.' },
    { day: 'Dia 3-5', title: 'Descamação Fina', desc: 'Pequenas casquinhas finas se soltam sozinhas. Nunca puxe ou esfregue a região.' },
    { day: 'Dia 7-10', title: 'Clareamento Suave', desc: 'A cor parece clarear. O pigmento está se estabilizando na camada dérmica correta.' },
    { day: 'Dia 30', title: 'Resultado e Retoque', desc: 'A cor e o formato se fixam completamente, revelando o tom definitivo e harmonioso.' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-16 sm:pt-20 pb-16 bg-[#FAF8F9]"
    >
      {/* Header - Compacto com Padrão Validado */}
      <section className="relative py-8 sm:py-12 md:py-16 bg-white border-b border-pink-100">
        <div className="w-full max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-2.5 sm:space-y-3.5">
            <div className="inline-flex items-center gap-1.5 bg-[#FDF2F8] border border-pink-200 text-[#B84A6B] px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <Sparkles size={13} className="text-[#D4567D]" />
              <span>Guia Completo para Pele Madura</span>
            </div>

            <h1 className="text-xl sm:text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight tracking-tight">
              Cuidados e Cicatrização da <span className="text-[#D4567D]">Micropigmentação</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-gray-700 max-w-2xl mx-auto leading-[1.45] font-normal">
              Seguir as orientações adequadas antes e depois da sessão garante a durabilidade e o aspecto suave e natural do seu procedimento.
            </p>
          </div>
        </div>
      </section>

      {/* Main Care Section */}
      <section className="py-6 sm:py-10 max-w-5xl mx-auto px-2.5 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Pre Care */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-pink-100 shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 pb-2 border-b border-pink-100">
              <div className="p-2 bg-[#FDF2F8] text-[#D4567D] rounded-xl shrink-0">
                <ShieldAlert size={20} />
              </div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-gray-900">Cuidados Pré-Procedimento</h2>
            </div>

            <div className="space-y-2">
              {[
                'Evite bebidas alcoólicas nas 24h que antecedem o atendimento.',
                'Suspenda o uso de ácidos fortes na região por 10 dias.',
                'Mantenha a pele bem hidratada com seu creme habitual.',
                'Evite exposição solar intensa na semana anterior.',
                'Alimente-se confortavelmente antes da sua sessão.'
              ].map((item, i) => (
                <div key={i} className="flex gap-2 p-2.5 bg-gray-50 rounded-xl border border-gray-200/80 items-start">
                  <CheckCircle2 size={16} className="text-[#D4567D] shrink-0 mt-0.5" />
                  <span className="font-medium text-gray-800 text-xs sm:text-sm leading-[1.4]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Post Care */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-pink-100 shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 pb-2 border-b border-pink-100">
              <div className="p-2 bg-red-50 text-red-600 rounded-xl shrink-0">
                <AlertCircle size={20} />
              </div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-gray-900">O Que Evitar no Pós</h2>
            </div>

            <div className="space-y-2">
              {[
                'NÃO remova nem coce as casquinhas que se formarem.',
                'NÃO aplique maquiagem direta sobre a área por 7 dias.',
                'Evite piscina, sauna, mar e sol forte nas primeiras semanas.',
                'Higienize com soro fisiológico ou água filtrada suavemente.',
                'Aplique apenas a pomada cicatrizante recomendada.'
              ].map((item, i) => (
                <div key={i} className="flex gap-2 p-2.5 bg-red-50/50 rounded-xl border border-red-200/70 items-start">
                  <Heart size={16} className="text-red-500 shrink-0 mt-0.5" />
                  <span className="font-medium text-gray-800 text-xs sm:text-sm leading-[1.4]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Healing Timeline */}
      <section className="max-w-5xl mx-auto px-2.5 sm:px-4 md:px-6">
        <div className="bg-gray-900 text-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm space-y-4">
          <div className="text-center space-y-1">
            <h2 className="text-lg sm:text-2xl font-serif font-bold">Linha do Tempo da Cicatrização</h2>
            <p className="text-gray-300 text-xs sm:text-sm max-w-md mx-auto">Entenda o que acontece em cada fase da fixação do pigmento.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            {timeline.map((item, i) => (
              <div key={i} className="relative p-3.5 bg-gray-800/80 border border-gray-700 rounded-xl space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[#D4567D]">
                    <Clock size={15} />
                    <span className="font-bold text-[11px] uppercase tracking-wider">{item.day}</span>
                  </div>
                  <span className="bg-[#D4567D] text-white w-5 h-5 rounded-full flex items-center justify-center font-bold text-[11px]">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white">{item.title}</h3>
                <p className="text-[11px] sm:text-xs text-gray-300 leading-[1.4] font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Summary */}
      <section className="py-6 sm:py-10 max-w-5xl mx-auto px-2.5 sm:px-4 md:px-6">
        <div className="text-center mb-6 space-y-1">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-serif font-bold text-gray-900">
            Dúvidas Frequentes de Cicatrização
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-normal">
            Orientações práticas para o seu dia a dia pós-procedimento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {PROCEDURES_TIPS.slice(0, 9).map((tip, idx) => (
            <div key={idx} className="p-3.5 bg-white rounded-xl border border-pink-100/80 shadow-2xs flex gap-2.5 items-start">
              <Info size={18} className="text-[#D4567D] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-gray-800 font-medium leading-[1.45]">{tip}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center flex flex-col items-center gap-1">
          <a 
            href={getWhatsAppLink('Dúvida Cuidados')} 
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[40px] h-10 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold text-xs sm:text-sm shadow-xs transition-all inline-flex items-center gap-2 active:scale-98"
          >
            <MessageCircle size={17} />
            <span>Tirar Dúvidas no WhatsApp</span>
          </a>
          <span className="text-[11px] text-gray-500 font-medium">Atendimento humanizado e rápido</span>
        </div>
      </section>
    </motion.div>
  );
};

export default Care;
