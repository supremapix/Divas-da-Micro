
import React, { useState, useMemo, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, ShieldCheck, Heart, UserCheck, MapPin, ArrowRight, Zap, Info, ChevronDown, Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES, FAQS, CONTACT_INFO, getWhatsAppLink, PROCEDURES_TIPS, ALL_LOCATIONS } from '../constants';
import FacebookFeed from '../components/FacebookFeed';
import ReviewMarquee from '../components/ReviewMarquee';
import InteractiveGallery from '../components/InteractiveGallery';
import AnimatedServiceIcon from '../components/AnimatedServiceIcon';
import LocationInfiniteMarquee from '../components/LocationInfiniteMarquee';
import SEOHead from '../components/SEOHead';
import { SEO_CONFIG, generateLocalBusinessSchema, generateBreadcrumbSchema, generateOrganizationSchema } from '../seoConstants';

const Home: React.FC = () => {
  const [visibleTips, setVisibleTips] = useState(12);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTip, setSelectedTip] = useState<{index: number; tip: string} | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredLocations = useMemo(() => {
    if (searchTerm.length < 2) return [];
    return ALL_LOCATIONS.filter(loc =>
      loc.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 8);
  }, [searchTerm]);

  const handleLocationSelect = (slug: string) => {
    navigate(`/correcao-em-${slug}`);
    setSearchTerm('');
  };

  const breadcrumbs = [
    { name: 'Início', url: SEO_CONFIG.SITE_URL }
  ];

  return (
    <div className="pt-20">
      <SEOHead
        title={SEO_CONFIG.PAGES.home.title}
        description={SEO_CONFIG.PAGES.home.description}
        keywords={SEO_CONFIG.PAGES.home.keywords}
        image="/hero.png"
        url={SEO_CONFIG.SITE_URL}
        schemas={[
          generateLocalBusinessSchema(),
          generateBreadcrumbSchema(breadcrumbs),
          generateOrganizationSchema()
        ]}
      />

      {/* Hero Section */}
      <section className="relative min-h-[65vh] md:min-h-[70vh] flex items-center bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.png"
            alt="Correção de Micropigmentação em Curitiba"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 rounded-full bg-[#D4567D]/10 text-[#D4567D] text-sm font-semibold mb-6 tracking-wide uppercase">
              Especialistas em Mulheres 60+
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight mb-6">
              Correção de Micropigmentação <span className="text-[#D4567D]">em Curitiba</span>
            </h1>
            <div className="flex flex-col gap-4 mb-10">
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                Atendimento Domiciliar Personalizado • Resultados Naturais
              </p>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur p-4 rounded-2xl border border-[#D4567D]/20 w-fit shadow-sm">
                <Zap className="text-[#D4567D] animate-pulse" />
                <p className="text-sm md:text-base font-bold text-gray-800">
                  Procedimento 100% Indolor (Anestésico Premium Manipulado)
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/agenda" 
                className="bg-[#D4567D] text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-[#b84a6b] transition-all transform hover:-translate-y-1 text-center"
              >
                Agendar Avaliação Gratuita
              </Link>
              <a 
                href={getWhatsAppLink('Hero Home')}
                className="bg-white border-2 border-[#D4567D] text-[#D4567D] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#D4567D]/5 transition-all text-center flex items-center justify-center gap-2"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Facebook Feed Section */}
      <FacebookFeed />

      {/* Highlights / Why Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Por que escolher Divas da Micro?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Excelência técnica e cuidado especial para a pele madura com foco em Curitiba e RMC.</p>
            <div className="w-24 h-1 bg-[#C5A059] mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <MapPin size={32} />, title: 'Atendimento Domiciliar', desc: `Conforto e segurança num raio de ${CONTACT_INFO.serviceRadius} do nosso endereço no Batel.` },
              { icon: <ShieldCheck size={32} />, title: '100% Indolor', desc: 'Anestésicos premium exclusivos para o conforto absoluto das nossas Divas.' },
              { icon: <Zap size={32} />, title: 'Especialistas em Correção', desc: 'Expertise única em reverter e harmonizar trabalhos antigos com perfeição.' },
              { icon: <UserCheck size={32} />, title: 'Foco no Público 60+', desc: 'Domínio das técnicas para peles finas, maduras e sensíveis.' },
              { icon: <Heart size={32} />, title: 'Resultados Naturais', desc: 'Realçamos sua beleza sem transformar suas feições ou parecer artificial.' },
              { icon: <CheckCircle size={32} />, title: 'Biossegurança Total', desc: 'Protocolos de higiene hospitalar levados diretamente ao seu lar.' },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all group hover:-translate-y-2">
                <div className="text-[#D4567D] mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Animated Icons */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Nossas Especialidades</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Técnicas russas de correção avançada adaptadas para a realidade da pele madura.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl transition-all border border-gray-100 flex flex-col items-center text-center">
                <div className="mb-8">
                  <AnimatedServiceIcon type={service.icon} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                <Link 
                  to="/correcao" 
                  className="mt-auto bg-gray-50 group hover:bg-[#D4567D] hover:text-white text-gray-900 px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2"
                >
                  Saiba Mais <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Gallery */}
      <InteractiveGallery />

      {/* Tips Section (55 Dicas) */}
      <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 md:px-8"
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-[#C5A059] font-bold uppercase tracking-widest text-xs mb-2 block"
            >
              Guia de Especialista
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-serif font-bold mb-6"
            >
              Dicas Divas e Procedimentos
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-500 max-w-2xl mx-auto"
            >
              Tudo o que você precisa saber para garantir um resultado impecável e duradouro.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {PROCEDURES_TIPS.slice(0, visibleTips).map((tip, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedTip({ index: idx, tip })}
                className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex gap-4 items-start hover:bg-white hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="bg-[#D4567D]/10 text-[#D4567D] p-2 rounded-lg group-hover:bg-[#D4567D] group-hover:text-white transition-colors shrink-0">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Info size={16} />
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed font-medium line-clamp-3">{tip}</p>
              </motion.div>
            ))}
          </div>

          {visibleTips < PROCEDURES_TIPS.length && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-12 text-center"
            >
              <button
                onClick={() => setVisibleTips(prev => Math.min(prev + 12, PROCEDURES_TIPS.length))}
                className="inline-flex items-center gap-2 px-8 py-3 bg-gray-950 text-white rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg"
              >
                Ver Mais Dicas <ChevronDown size={20} />
              </button>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Tips Modal */}
      {selectedTip && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTip(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-[2.5rem] shadow-2xl max-w-2xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 md:p-12 bg-gradient-to-br from-[#D4567D]/5 to-transparent">
              <div className="flex items-start justify-between mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="w-12 h-12 bg-[#D4567D] rounded-full flex items-center justify-center text-white shrink-0"
                >
                  <Info size={24} />
                </motion.div>
                <button
                  onClick={() => setSelectedTip(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={28} />
                </button>
              </div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl md:text-3xl font-serif font-bold mb-4 text-gray-900"
              >
                Dica #{selectedTip.index + 1}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-700 leading-relaxed mb-8"
              >
                {selectedTip.tip}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-between gap-4"
              >
                <button
                  onClick={() => {
                    const newIndex = selectedTip.index - 1 >= 0 ? selectedTip.index - 1 : PROCEDURES_TIPS.length - 1;
                    setSelectedTip({ index: newIndex, tip: PROCEDURES_TIPS[newIndex] });
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-full font-bold transition-all"
                >
                  <ChevronLeft size={20} /> Anterior
                </button>

                <span className="text-sm font-bold text-gray-500">
                  {selectedTip.index + 1} / {PROCEDURES_TIPS.length}
                </span>

                <button
                  onClick={() => {
                    const newIndex = (selectedTip.index + 1) % PROCEDURES_TIPS.length;
                    setSelectedTip({ index: newIndex, tip: PROCEDURES_TIPS[newIndex] });
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-[#D4567D] text-white hover:bg-[#b84a6b] rounded-full font-bold transition-all"
                >
                  Próxima <ChevronRight size={20} />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Google Review Marquee */}
      <ReviewMarquee />

      {/* Locations Section with Search and Infinite Marquee */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#D4567D] font-bold uppercase tracking-widest text-xs mb-2 block">Atendimento Domiciliar</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight">
                Levamos a Beleza <br /> <span className="text-[#D4567D]">Onde Você Estiver</span>
              </h2>
              
              {/* Intelligent Location Search */}
              <div className="relative mb-8 max-w-md">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input 
                    type="text"
                    placeholder="Busque seu bairro ou cidade..."
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#D4567D] focus:ring-0 transition-all outline-none text-gray-700 font-medium"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                {filteredLocations.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
                    {filteredLocations.map(loc => (
                      <button
                        key={loc.slug}
                        onClick={() => handleLocationSelect(loc.slug)}
                        className="w-full text-left px-6 py-4 hover:bg-gray-50 flex items-center justify-between group transition-colors"
                      >
                        <span className="font-bold text-gray-700 group-hover:text-[#D4567D]">{loc.name}</span>
                        <ArrowRight size={16} className="text-gray-300 group-hover:text-[#D4567D] group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nossa equipe especializada realiza atendimentos home care com toda a segurança em um raio de <strong>{CONTACT_INFO.serviceRadius}</strong> do Batel. 
                Atendemos Curitiba e toda a Região Metropolitana com exclusividade.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex gap-4 items-center p-4 bg-white rounded-2xl shadow-sm">
                  <div className="bg-[#C5A059] text-white p-2 rounded-full"><CheckCircle size={20}/></div>
                  <p className="font-bold text-gray-800 text-sm">Logística simplificada no conforto do seu lar</p>
                </div>
                <div className="flex gap-4 items-center p-4 bg-white rounded-2xl shadow-sm">
                  <div className="bg-[#C5A059] text-white p-2 rounded-full"><CheckCircle size={20}/></div>
                  <p className="font-bold text-gray-800 text-sm">Materiais 100% esterilizados e descartáveis</p>
                </div>
              </div>
              <Link to="/contato" className="inline-flex items-center gap-3 font-bold text-[#D4567D] hover:underline">
                Ver lista completa de bairros <ArrowRight size={20} />
              </Link>
            </div>
            
            <LocationInfiniteMarquee />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Dúvidas Frequentes</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group bg-gray-50 rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-gray-800 hover:text-[#D4567D] transition-colors">
                  {faq.question}
                  <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="p-6 pt-0 text-gray-600 border-t border-gray-100 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
