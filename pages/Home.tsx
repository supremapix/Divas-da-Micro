
import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, ShieldCheck, Heart, UserCheck, MapPin, ArrowRight, Zap, Info, ChevronDown, Search, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { SERVICES, FAQS, CONTACT_INFO, getWhatsAppLink, PROCEDURES_TIPS, ALL_LOCATIONS } from '../constants';
import FacebookFeed from '../components/FacebookFeed';
import ReviewMarquee from '../components/ReviewMarquee';
import InteractiveGallery from '../components/InteractiveGallery';
import AnimatedServiceIcon from '../components/AnimatedServiceIcon';
import LocationInfiniteMarquee from '../components/LocationInfiniteMarquee';

const Home: React.FC = () => {
  const [visibleTips, setVisibleTips] = useState(8);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImageService, setSelectedImageService] = useState<typeof SERVICES[0] | null>(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (selectedImageService) {
      document.body.classList.add('lightbox-active');
      window.dispatchEvent(new CustomEvent('lightboxToggle', { detail: { open: true } }));
    } else {
      document.body.classList.remove('lightbox-active');
      window.dispatchEvent(new CustomEvent('lightboxToggle', { detail: { open: false } }));
    }
    return () => {
      document.body.classList.remove('lightbox-active');
      window.dispatchEvent(new CustomEvent('lightboxToggle', { detail: { open: false } }));
    };
  }, [selectedImageService]);

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

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-white overflow-hidden py-12 md:py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.divasespacodabeleza.com.br/assets/images/microblading-falhado-corrija-em-curitiba-divas-da-micro-1920x1080.png" 
            alt="correção de micropigmentação de sobrancelha em mulher acima de 50 anos, Curitiba" 
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDF2F8] text-[#B84A6B] text-sm md:text-base font-bold mb-6 border border-[#D4567D]/30">
              <Sparkles size={18} className="text-[#D4567D]" />
              <span>Especialistas em Mulheres 60+</span>
            </div>

            {/* Single Unique H1 with main keyword */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight mb-6">
              Micropigmentação de Sobrancelhas <span className="text-[#D4567D]">em Curitiba</span>
            </h1>

            <div className="space-y-4 mb-8">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-800 font-normal leading-relaxed">
                Correção de maquiagem definitiva antiga, sobrancelhas cinzas ou avermelhadas, olhos e lábios com <strong>atendimento domiciliar VIP</strong>.
              </p>
              
              <div className="flex items-center gap-3 bg-[#FDF2F8]/60 p-4 rounded-2xl border border-[#D4567D]/30 w-full sm:w-fit shadow-sm">
                <Zap className="text-[#D4567D] shrink-0" size={24} />
                <p className="text-base sm:text-lg font-bold text-gray-900">
                  Procedimento 100% Indolor (Anestésico Premium Manipulado)
                </p>
              </div>
            </div>

            {/* Call to Actions - Min 48px touch target with 12px+ spacing */}
            <div className="flex flex-col sm:flex-row gap-6 max-w-xl">
              <div className="flex flex-col items-center w-full sm:w-auto">
                <a 
                  id="hero-btn-whatsapp"
                  href={getWhatsAppLink('Hero Home')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[52px] bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl transition-all flex items-center justify-center gap-3 text-center active:scale-95"
                >
                  <MessageCircle size={24} />
                  <span>WhatsApp</span>
                </a>
                <span className="text-xs text-gray-600 mt-1.5 font-medium">Avaliação gratuita por foto</span>
              </div>

              <div className="flex flex-col items-center w-full sm:w-auto">
                <Link 
                  id="hero-btn-agenda"
                  to="/agenda" 
                  className="w-full sm:w-auto min-h-[52px] bg-[#D4567D] hover:bg-[#B84A6B] text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-lg transition-all flex items-center justify-center gap-2 text-center active:scale-95"
                >
                  <span>Agenda</span>
                  <ArrowRight size={20} />
                </Link>
                <span className="text-xs text-gray-600 mt-1.5 font-medium">Escolha dia e horário</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Specialty Callout Box */}
      <section className="bg-gradient-to-r from-[#FDF2F8] via-pink-50 to-[#FDF2F8] py-8 border-y border-[#D4567D]/20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
                Pele Madura: Cuidado Delicado e Sem Sofrimento
              </h3>
              <p className="text-base sm:text-lg text-gray-700 font-medium">
                Conheça nossa abordagem exclusiva para mulheres 60+ com técnica indolor.
              </p>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <Link
                to="/mulheres-maduras"
                className="min-h-[48px] bg-gray-900 hover:bg-gray-800 text-white px-6 py-3.5 rounded-2xl font-bold text-base flex items-center gap-2 shadow-md transition-all"
              >
                <span>Detalhes</span>
                <ArrowRight size={18} />
              </Link>
              <span className="text-xs text-gray-500 mt-1">Conheça o atendimento 60+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Facebook Feed Section */}
      <FacebookFeed />

      {/* Highlights / Why Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Por Que Escolher a Divas da Micro em Curitiba?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-normal leading-relaxed">
              Excelência técnica, atendimento humanizado e protocolo de conforto absoluto para a mulher madura em Curitiba e RMC.
            </p>
            <div className="w-24 h-1 bg-[#D4567D] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: <MapPin size={36} />, title: 'Atendimento Domiciliar VIP', desc: `Levamos o estúdio esterilizado até sua casa em Curitiba e toda a Região Metropolitana.` },
              { icon: <ShieldCheck size={36} />, title: 'Procedimento 100% Indolor', desc: 'Anestésicos tópicos manipulados de alta potência para seu conforto absoluto.' },
              { icon: <Zap size={36} />, title: 'Especialistas em Correção', desc: 'Neutralização perfeita de sobrancelhas cinzas, azuladas ou avermelhadas de anos.' },
              { icon: <UserCheck size={36} />, title: 'Foco em Mulheres 60+', desc: 'Domínio das técnicas suaves e precisas para peles finas, maduras e delicadas.' },
              { icon: <Heart size={36} />, title: 'Resultados Naturais e Leves', desc: 'Realçamos sua expressão original sem traços pesados ou artificiais.' },
              { icon: <CheckCircle size={36} />, title: 'Biossegurança Hospitalar', desc: 'Materiais 100% descartáveis e protocolos rigorosos de assepsia no seu lar.' },
            ].map((item, idx) => (
              <div key={idx} className="p-6 md:p-8 rounded-3xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-all flex flex-col gap-3">
                <div className="text-[#D4567D] mb-2">{item.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Clear H2 */}
      <section className="py-16 md:py-24 bg-[#F9FAFB] border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Correção de Sobrancelhas, Lábios e Olhos em Curitiba
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-normal leading-relaxed">
              Técnicas especializadas de neutralização adaptadas para a pele madura e suave.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-200 flex flex-col overflow-hidden text-center">
                <div 
                  onClick={() => setSelectedImageService(service)}
                  className="relative h-72 w-full overflow-hidden bg-gray-100 cursor-pointer group"
                  title="Clique para ampliar e ver detalhes"
                >
                  <img 
                    src={service.image} 
                    alt={`${service.title} - Divas da Micro em Curitiba`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex flex-col justify-between p-6">
                    <span className="self-end bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm opacity-90 group-hover:opacity-100 transition-opacity">
                      🔍 Clique para Ampliar
                    </span>
                    <span className="text-white font-serif font-bold text-xl drop-shadow-md text-left">{service.title}</span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col items-center justify-between">
                  <div>
                    <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed font-normal">{service.description}</p>
                  </div>

                  <div className="mt-auto w-full pt-4 flex flex-col gap-4">
                    <div className="flex flex-col items-center">
                      <Link 
                        to="/correcao" 
                        className="w-full min-h-[48px] bg-gray-100 hover:bg-[#D4567D] hover:text-white text-gray-900 px-6 py-3 rounded-2xl font-bold text-base transition-all flex items-center justify-center gap-2"
                      >
                        <span>Detalhes</span> <ArrowRight size={18} />
                      </Link>
                      <span className="text-xs text-gray-500 mt-1">Saiba mais sobre o serviço</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <a
                        href={getWhatsAppLink(`Serviço Home - ${service.title}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full min-h-[48px] bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-2xl font-bold text-base transition-all flex items-center justify-center gap-2"
                      >
                        <MessageCircle size={20} />
                        <span>WhatsApp</span>
                      </a>
                      <span className="text-xs text-gray-500 mt-1">Agende este atendimento</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Gallery with Descriptive Alt Texts */}
      <InteractiveGallery />

      {/* Tips Section (Dicas) */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-[#D4567D] font-bold uppercase tracking-widest text-sm mb-2 block">Guia de Especialista</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Guia de Cuidados e Dicas de Especialista
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-normal leading-relaxed">
              Tudo o que você precisa saber para manter seu procedimento impecável e duradouro.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {PROCEDURES_TIPS.slice(0, visibleTips).map((tip, idx) => (
              <div key={idx} className="p-5 bg-gray-50 rounded-2xl border border-gray-200 flex gap-4 items-start hover:bg-white hover:shadow-md transition-all">
                <div className="bg-[#FDF2F8] text-[#B84A6B] p-2.5 rounded-xl shrink-0">
                  <Info size={20} />
                </div>
                <p className="text-base text-gray-800 leading-relaxed font-medium">{tip}</p>
              </div>
            ))}
          </div>

          {visibleTips < PROCEDURES_TIPS.length && (
            <div className="mt-10 text-center flex flex-col items-center">
              <button 
                id="btn-ver-mais-dicas"
                onClick={() => setVisibleTips(prev => Math.min(prev + 8, PROCEDURES_TIPS.length))}
                className="min-h-[50px] inline-flex items-center gap-2 px-8 py-3.5 bg-gray-900 text-white rounded-2xl font-bold text-base hover:bg-gray-800 transition-all shadow-md active:scale-95"
              >
                <span>Ver</span> <ChevronDown size={20} />
              </button>
              <span className="text-xs text-gray-500 mt-1.5 font-medium">Ver mais dicas de cuidados</span>
            </div>
          )}
        </div>
      </section>

      {/* Google Review Section */}
      <ReviewMarquee />

      {/* Locations Section with Search and Infinite Marquee */}
      <section className="py-16 md:py-24 bg-[#F9FAFB] border-t border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#D4567D] font-bold uppercase tracking-widest text-sm mb-2 block">Atendimento Domiciliar</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Atendimento Domiciliar em <br /> <span className="text-[#D4567D]">Curitiba e Região</span>
              </h2>
              
              {/* Location Search Input */}
              <div className="relative mb-6 max-w-md">
                <label htmlFor="input-busca-bairro" className="block text-base font-bold text-gray-800 mb-2">
                  Buscar seu Bairro ou Cidade:
                </label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={22} />
                  <input 
                    id="input-busca-bairro"
                    type="text"
                    placeholder="Digite ex: Batel, Água Verde, Pinhais..."
                    className="w-full min-h-[52px] pl-12 pr-4 py-3.5 rounded-2xl border-2 border-gray-300 focus:border-[#D4567D] focus:ring-2 focus:ring-[#FDF2F8] transition-all outline-none text-gray-900 font-medium text-base"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                {filteredLocations.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
                    {filteredLocations.map(loc => (
                      <button
                        key={loc.slug}
                        onClick={() => handleLocationSelect(loc.slug)}
                        className="w-full min-h-[48px] text-left px-6 py-3.5 hover:bg-[#FDF2F8] flex items-center justify-between group transition-colors border-b border-gray-100 last:border-0"
                      >
                        <span className="font-bold text-gray-900 group-hover:text-[#B84A6B] text-base">{loc.name}</span>
                        <ArrowRight size={18} className="text-gray-400 group-hover:text-[#B84A6B]" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed font-normal">
                Nossa especialista leva toda a estrutura e materiais descartáveis até você em um raio de <strong>{CONTACT_INFO.serviceRadius}</strong> do Batel.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex gap-3 items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm">
                  <div className="bg-[#D4567D] text-white p-2 rounded-xl shrink-0"><CheckCircle size={20}/></div>
                  <p className="font-bold text-gray-900 text-base">Sem trânsito ou deslocamento cansativo</p>
                </div>
                <div className="flex gap-3 items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm">
                  <div className="bg-[#D4567D] text-white p-2 rounded-xl shrink-0"><CheckCircle size={20}/></div>
                  <p className="font-bold text-gray-900 text-base">Materiais 100% descartáveis e esterilizados</p>
                </div>
              </div>

              <div className="flex flex-col items-start">
                <a
                  href={getWhatsAppLink('Atendimento Domiciliar')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[50px] bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3.5 rounded-2xl font-bold text-base flex items-center gap-2 shadow-md"
                >
                  <MessageCircle size={22} />
                  <span>WhatsApp</span>
                </a>
                <span className="text-xs text-gray-500 mt-1.5 font-medium">Agendar atendimento domiciliar</span>
              </div>
            </div>
            
            <LocationInfiniteMarquee />
          </div>
        </div>
      </section>

      {/* FAQ with Clear H2 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Dúvidas Frequentes sobre Correção de Micropigmentação
            </h2>
            <p className="text-lg text-gray-700 font-normal">
              Respostas claras e transparentes para você se sentir 100% segura.
            </p>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group bg-gray-50 rounded-2xl shadow-sm overflow-hidden border border-gray-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-lg text-gray-900 hover:text-[#D4567D] transition-colors min-h-[52px]">
                  <span>{faq.question}</span>
                  <span className="text-xl transition-transform group-open:rotate-180 text-[#D4567D] ml-4 shrink-0">▼</span>
                </summary>
                <div className="p-6 pt-0 text-base sm:text-lg text-gray-800 border-t border-gray-200 leading-relaxed font-normal">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Service Card Images */}
      {selectedImageService && (
        <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl relative max-h-[92vh] flex flex-col">
            <div className="relative h-72 sm:h-80 w-full bg-gray-900">
              <img 
                src={selectedImageService.image} 
                alt={`${selectedImageService.title} - Especialistas em Pele Madura em Curitiba - Divas da Micro`}
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setSelectedImageService(null)}
                className="absolute top-4 right-4 bg-black/70 hover:bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all shadow-md z-10"
                aria-label="Fechar"
              >
                ✕
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4 overflow-y-auto">
              <div>
                <h3 className="text-gray-900 font-serif font-bold text-2xl sm:text-3xl mb-1">{selectedImageService.title}</h3>
                <span className="text-[#D4567D] text-xs font-semibold uppercase tracking-wider block mb-3">SEO • Especializado para Pele Madura • Curitiba</span>
                
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Descrição Técnica & SEO</h4>
                <p className="text-gray-900 text-base sm:text-lg leading-relaxed font-semibold">
                  {selectedImageService.details}
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-3 font-normal">
                  {selectedImageService.description} Atendimento 100% indolor com anestésicos manipulados de alta potência e protocolo exclusivo desenvolvido para mulheres maduras em Curitiba e região metropolitana (com opção de atendimento domiciliar VIP).
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
                <button
                  onClick={() => setSelectedImageService(null)}
                  className="w-full sm:w-1/2 min-h-[50px] px-6 py-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-base transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  Fechar
                </button>
                <a
                  href={getWhatsAppLink(`Lightbox SEO - ${selectedImageService.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 min-h-[50px] px-6 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle size={20} />
                  <span>Contato</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

