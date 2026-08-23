
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldAlert, CheckSquare, Info, AlertCircle, Heart, MessageCircle } from 'lucide-react';
import { PROCEDURES_TIPS, getWhatsAppLink } from '../constants';

const Care: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Cuidados e Cicatrização da Micropigmentação em Curitiba | Divas da Micro";
  }, []);

  const timeline = [
    { day: 'Dia 1-2', title: 'Intensificação Inicial', desc: 'A cor fica temporariamente mais escura pela oxidação do pigmento. É normal haver leve sensibilidade.' },
    { day: 'Dia 3-5', title: 'Descamação Fina', desc: 'Pequenas casquinhas finas se soltam sozinhas. Nunca puxe ou esfregue a região.' },
    { day: 'Dia 7-10', title: 'Clareamento Suave', desc: 'A cor parece clarear bastante. Fique tranquila: o pigmento está se estabilizando na camada dérmica.' },
    { day: 'Dia 30', title: 'Resultado e Retoque', desc: 'A cor e o formato se fixam completamente, revelando o tom definitivo e harmonioso.' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-white"
    >
      {/* Header */}
      <section className="py-16 md:py-24 bg-[#FDF2F8] border-b border-pink-100">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <span className="text-[#D4567D] font-bold uppercase tracking-wider text-xs md:text-sm mb-3 block">
            Guia Completo para Pele Madura
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900 leading-tight">
            Cuidados e Cicatrização da <span className="text-[#D4567D]">Micropigmentação</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-normal">
            Seguir as orientações adequadas antes e depois da sessão garante a durabilidade e o aspecto suave e natural do seu procedimento.
          </p>
        </div>
      </section>

      {/* Main Care Section */}
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Pre Care */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-gray-900 border-b border-gray-200 pb-4">
              <div className="p-3 bg-[#FDF2F8] text-[#D4567D] rounded-2xl">
                <ShieldAlert size={32} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold">Cuidados Pré-Procedimento</h2>
            </div>

            <div className="space-y-3">
              {[
                'Evite bebidas alcoólicas nas 24h que antecedem o atendimento.',
                'Suspenda o uso de ácidos fortes na região por 10 dias.',
                'Mantenha a pele bem hidratada com seu creme habitual.',
                'Evite exposição solar intensa na semana anterior.',
                'Alimente-se confortavelmente antes da sua sessão.'
              ].map((item, i) => (
                <div key={i} className="flex gap-3.5 p-4 bg-gray-50 rounded-2xl border border-gray-200 items-start">
                  <CheckSquare size={22} className="text-[#D4567D] shrink-0 mt-0.5" />
                  <span className="font-medium text-gray-800 text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Post Care */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-gray-900 border-b border-gray-200 pb-4">
              <div className="p-3 bg-red-50 text-red-600 rounded-2xl">
                <AlertCircle size={32} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold">O Que Evitar no Pós</h2>
            </div>

            <div className="space-y-3">
              {[
                'NÃO remova nem coce as casquinhas que se formarem.',
                'NÃO aplique maquiagem direta sobre a área tratada por 7 dias.',
                'Evite piscina, sauna, mar e sol forte nas primeiras duas semanas.',
                'Higienize com soro fisiológico ou água filtrada suavemente.',
                'Aplique apenas a pomada cicatrizante recomendada pela especialista.'
              ].map((item, i) => (
                <div key={i} className="flex gap-3.5 p-4 bg-red-50/40 rounded-2xl border border-red-200 items-start">
                  <Heart size={22} className="text-red-500 shrink-0 mt-0.5" />
                  <span className="font-medium text-gray-800 text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Healing Timeline */}
      <section className="py-16 md:py-20 bg-gray-900 text-white rounded-3xl mx-4 md:mx-8">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-serif font-bold mb-3">Linha do Tempo da Cicatrização</h2>
            <p className="text-gray-300 text-lg">Entenda o que acontece em cada fase do seu processo.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, i) => (
              <div key={i} className="relative p-6 bg-gray-800/80 border border-gray-700 rounded-2xl">
                <div className="absolute -top-3 -right-3 bg-[#D4567D] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                  {i + 1}
                </div>
                <div className="flex items-center gap-2 mb-3 text-[#D4567D]">
                  <Clock size={18} />
                  <span className="font-bold text-xs uppercase tracking-wider">{item.day}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Summary */}
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-8 max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-center mb-10 text-gray-900">
          Dúvidas Frequentes de Cicatrização
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROCEDURES_TIPS.slice(0, 9).map((tip, idx) => (
            <div key={idx} className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm flex gap-3.5 items-start">
              <Info size={22} className="text-[#D4567D] shrink-0 mt-0.5" />
              <p className="text-base text-gray-800 font-medium leading-relaxed">{tip}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center flex flex-col items-center">
          <a 
            href={getWhatsAppLink('Dúvida Cuidados')} 
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[50px] bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-2xl font-bold text-base md:text-lg shadow-lg transition-all inline-flex items-center gap-3 active:scale-95"
          >
            <MessageCircle size={22} />
            <span>WhatsApp</span>
          </a>
          <span className="text-xs text-gray-500 mt-2 font-medium">Tire dúvidas sobre cuidados pelo WhatsApp</span>
        </div>
      </section>
    </motion.div>
  );
};

export default Care;
