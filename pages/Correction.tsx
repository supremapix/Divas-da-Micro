
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, History, ArrowRight, MessageSquare, Info } from 'lucide-react';
import { getWhatsAppLink, PROCEDURES_TIPS } from '../constants';
import FacebookFeed from '../components/FacebookFeed';

const Correction: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Especialista em Correção | Divas da Micro - Resgatando Autoestima";
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-24 bg-white"
    >
      {/* Hero */}
      <section className="bg-gray-950 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/hero.png" alt="Correção Micropigmentação" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="bg-[#D4567D] text-white px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">Mestre em Neutralização</span>
            <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8">Sua Micropigmentação Antiga Tem <span className="text-[#D4567D]">Solução</span></h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-12">
              Somos especialistas em reverter sobrancelhas cinzas, azuis ou vermelhas, devolvendo a naturalidade e a harmonia que você merece.
            </p>
            <a 
              href={getWhatsAppLink('Página Correção')}
              className="bg-white text-gray-900 px-12 py-5 rounded-full font-bold text-lg hover:bg-[#D4567D] hover:text-white transition-all shadow-2xl inline-flex items-center gap-3"
            >
              <MessageSquare size={24} /> Avaliação de Foto Grátis
            </a>
          </div>
        </div>
      </section>

      {/* Neutralization Process */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8 leading-tight">A Ciência por trás da <br /> <span className="text-[#D4567D]">Neutralização de Cores</span></h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Muitas mulheres em Curitiba sofrem com pigmentos que mudaram de cor ao longo dos anos. Isso acontece devido à profundidade errada na aplicação original ou uso de pigmentos de baixa qualidade.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <div className="text-[#D4567D]"><History size={32} /></div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Neutralização de Cinza/Azul</h4>
                  <p className="text-sm text-gray-600">Utilizamos tons quentes específicos para anular o aspecto "gelado" e devolver o castanho natural.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <div className="text-[#D4567D]"><Zap size={32} /></div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Neutralização de Vermelho</h4>
                  <p className="text-sm text-gray-600">Aplicamos neutralizadores frios que equilibram a cor, eliminando o aspecto alaranjado ou rosado.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="/imagem-do-whatsapp-de-2024-10-20-s-14.36.33-423b191e-416x891.jpg" alt="Antes e Depois Correção" className="rounded-[3rem] shadow-2xl w-full max-h-[600px] object-cover" />
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-3 text-green-500 font-bold mb-2">
                <ShieldCheck size={24} /> Resultado Certificado
              </div>
              <p className="text-sm text-gray-500 font-medium">Procedimento indolor para peles 60+</p>
            </div>
          </div>
        </div>
      </section>

      <FacebookFeed />

      {/* Technical FAQ / Tips */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-16">Dicas de Especialista sobre Correção</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCEDURES_TIPS.slice(10, 22).map((tip, idx) => (
              <div key={idx} className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100 flex gap-4">
                <Info size={20} className="text-[#D4567D] shrink-0" />
                <p className="text-sm text-gray-700 leading-relaxed font-medium">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center container mx-auto px-4">
        <div className="bg-[#D4567D] text-white p-16 rounded-[4rem] shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Não Conviva Mais com um Olhar que Não é Seu</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">Agende sua avaliação gratuita via WhatsApp e descubra como podemos resgatar sua beleza e autoconfiança hoje.</p>
          <a href={getWhatsAppLink('CTA Correção Final')} className="bg-white text-[#D4567D] px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all inline-block shadow-lg">
            Quero Avaliar Meu Caso
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default Correction;
