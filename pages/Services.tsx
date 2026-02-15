
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye, Heart, CheckCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { SERVICES, getWhatsAppLink } from '../constants';
import ButterflyLogo from '../components/ButterflyLogo';

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Serviços Premium | Divas da Micro - Especialistas 60+";
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-white"
    >
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#D4567D] font-bold uppercase tracking-widest text-xs mb-4 block">Excelência em Micropigmentação</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">Nossos Serviços <span className="text-[#D4567D]">Exclusivos</span></h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Técnicas avançadas desenvolvidas especificamente para realçar a beleza natural da pele madura com total conforto e segurança.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 opacity-5 pointer-events-none">
          <ButterflyLogo size={600} />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 gap-24">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group">
                  <img src={service.image} alt={service.title} className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-8">
                <div className="flex items-center gap-4 text-[#D4567D]">
                  <div className="p-3 bg-[#D4567D]/10 rounded-2xl">
                    {service.icon === 'Sparkles' && <Sparkles size={32} />}
                    {service.icon === 'Eye' && <Eye size={32} />}
                    {service.icon === 'Heart' && <Heart size={32} />}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">{service.title}</h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  {service.details}
                </p>
                <div className="space-y-4">
                  {[
                    'Design personalizado aprovado por você',
                    'Uso de anestésico premium manipulado',
                    'Pigmentos de alta fixação e segurança',
                    'Atendimento VIP no conforto do seu lar'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                      <CheckCircle size={20} className="text-[#D4567D]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6">
                  <a 
                    href={getWhatsAppLink(`Serviço - ${service.title}`)}
                    className="inline-flex items-center gap-3 bg-[#D4567D] text-white px-10 py-5 rounded-full font-bold hover:bg-[#b84a6b] transition-all shadow-xl group"
                  >
                    Agendar Minha Diva <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-900 text-white py-24 rounded-[4rem] mx-4 md:mx-8">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12">O Padrão Divas da Micro</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <ShieldCheck className="text-[#D4567D] mx-auto" size={48} />
              <h3 className="text-2xl font-bold">Biossegurança</h3>
              <p className="text-gray-400">Materiais 100% descartáveis e esterilização rigorosa para sua total proteção.</p>
            </div>
            <div className="space-y-4">
              <Zap className="text-[#D4567D] mx-auto" size={48} />
              <h3 className="text-2xl font-bold">Sem Dor</h3>
              <p className="text-gray-400">Protocolo de anestesia tópica exclusiva que permite que você relaxe durante a sessão.</p>
            </div>
            <div className="space-y-4">
              <CheckCircle className="text-[#D4567D] mx-auto" size={48} />
              <h3 className="text-2xl font-bold">Suporte 24h</h3>
              <p className="text-gray-400">Acompanhamento detalhado durante todo o seu processo de cicatrização.</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
