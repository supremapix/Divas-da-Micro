import React, { useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Shield, User, Home as HomeIcon, Star, Clock, MapPin, Heart, Info, MessageCircle, Sparkles } from 'lucide-react';
import { ALL_LOCATIONS, getWhatsAppLink, PROCEDURES_TIPS } from '../constants';
import FacebookFeed from '../components/FacebookFeed';
import ReviewMarquee from '../components/ReviewMarquee';
import { motion } from 'framer-motion';

const LocationTemplate: React.FC = () => {
  const { locationSlug: paramSlug } = useParams<{ locationSlug?: string }>();
  const routerLocation = useLocation();
  
  // Extrai o slug do parâmetro de rota ou diretamente do pathname (ex: /correcao-em-batel)
  const pathname = routerLocation.pathname.toLowerCase();
  let extractedSlug = (paramSlug || '').trim();

  if (!extractedSlug) {
    if (pathname.startsWith('/correcao-em-')) {
      extractedSlug = pathname.replace(/^\/correcao-em-/, '').replace(/\/$/, '').trim();
    } else if (pathname.startsWith('/correcao-em/')) {
      extractedSlug = pathname.replace(/^\/correcao-em\//, '').replace(/\/$/, '').trim();
    }
  }

  // Correspondência exata do slug (normalizado)
  const location = ALL_LOCATIONS.find(l => l.slug.toLowerCase() === extractedSlug.toLowerCase()) 
    || { name: extractedSlug ? extractedSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Curitiba', isCity: true, slug: extractedSlug || 'curitiba' };
  const locationName = location.name;
  const currentSlug = location.slug || extractedSlug || 'curitiba';

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Correção de Micropigmentação em ${locationName} | Divas da Micro`;

    // Inject Schema Markup (JSON-LD)
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "BeautySalon",
      "name": `Divas da Micro - Correção de Micropigmentação em ${locationName}`,
      "description": `Especialista em correção e neutralização de micropigmentação de sobrancelhas, olhos e lábios em ${locationName}. Atendimento domiciliar exclusivo e estúdio para mulheres 60+.`,
      "image": "https://divasdamicro.app.br/assets/images/microblading-falhado-corrija-em-curitiba-divas-da-micro-1920x1080.png",
      "@id": `https://divasdamicro.app.br/#/correcao-em-${currentSlug}`,
      "url": `https://divasdamicro.app.br/#/correcao-em-${currentSlug}`,
      "telephone": "+55-41-99787-9392",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Sete de Setembro, 4995",
        "addressLocality": "Curitiba",
        "addressRegion": "PR",
        "postalCode": "80250-205",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -25.4468,
        "longitude": -49.2845
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "10:00",
        "closes": "20:00"
      },
      "areaServed": {
        "@type": "City",
        "name": locationName
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [locationName, currentSlug]);

  const sections = [
    {
      title: `Especialista em Correção de Micropigmentação em ${locationName}`,
      content: `A Divas da Micro consolidou-se como a principal referência para correção e restauração de sobrancelhas em ${locationName}. Nosso foco prioritário em mulheres 60+ permite uma compreensão profunda das particularidades da pele madura, flacidez natural e sensibilidade cutânea. Se você mora em ${locationName} e está insatisfeita com procedimentos antigos que perderam o desenho ou a cor, nossa equipe está pronta para transformar seu olhar.`
    },
    {
      title: `Neutralização de Sobrancelhas Cinzas ou Vermelhas em ${locationName}`,
      content: `O desbotamento para tons estranhos é uma queixa recorrente de clientes em ${locationName}. Nossa metodologia em ${locationName} utiliza pigmentos de correção de última geração que neutralizam tons cinzentos, azulados ou avermelhados sem recorrer a lasers abrasivos, devolvendo o castanho natural e o frescor ao seu rosto.`
    },
    {
      title: `Correção de Olhos e Delineados Expandidos em ${locationName}`,
      content: `Delineados que expandiram ou perderam a simetria com a queda natural das pálpebras são corrigidos com extrema precisão em ${locationName}. Através de nossa técnica indolor, realizamos ajustes minuciosos que recuperam a expressividade do olhar.`
    },
    {
      title: `Reconstrução Labial e Neutralização em ${locationName}`,
      content: `Lábios com contorno desbotado ou tons arroxeados podem ser revitalizados em ${locationName}. Nossa abordagem foca na harmonização do arco do cupido e na devolução da cor saudável através de tons suaves e naturais.`
    },
    {
      title: `Atendimento Domiciliar VIP em ${locationName}`,
      content: `Sabemos que o trânsito e deslocamento em Curitiba e RMC podem ser desconfortáveis. Por isso, oferecemos atendimento domiciliar exclusivo em ${locationName}. Levamos toda a estrutura esterilizada e descartável até a sua residência com o mais rigoroso padrão de biossegurança.`
    },
    {
      title: `Procedimento 100% Indolor em ${locationName}`,
      content: `O conforto das nossas Divas em ${locationName} é prioridade absoluta. Utilizamos anestésicos tópicos premium manipulados que garantem uma sessão completamente indolor e tranquila do início ao fim.`
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 sm:pt-20 bg-[#FAF8F9]"
    >
      {/* Hero / Header Compacto */}
      <section className="relative py-8 sm:py-12 md:py-16 bg-white border-b border-pink-100">
        <div className="w-full max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-2.5 sm:space-y-3.5">
            <div className="inline-flex items-center gap-1.5 bg-[#FDF2F8] border border-pink-200 text-[#B84A6B] px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <MapPin size={13} className="text-[#D4567D]" />
              <span>Atendimento em {locationName} • Estúdio & Domiciliar</span>
            </div>

            <h1 className="text-xl sm:text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight tracking-tight">
              Correção de Micropigmentação <br className="hidden sm:inline" />
              <span className="text-[#D4567D]">em {locationName}</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-gray-700 max-w-2xl mx-auto leading-[1.45] font-normal">
              Devolva a harmonia e a naturalidade ao seu olhar com especialistas em pele madura. Procedimento 100% indolor com opção de atendimento no conforto do seu lar em {locationName}.
            </p>

            <div className="pt-2 flex flex-col items-center gap-1">
              <a 
                href={getWhatsAppLink(`Página Local - ${locationName}`)} 
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[40px] h-10 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold text-xs sm:text-sm shadow-xs transition-all inline-flex items-center gap-2 active:scale-98"
              >
                <MessageCircle size={17} />
                <span>Avaliação Gratuita no WhatsApp</span>
              </a>
              <span className="text-[11px] text-gray-500 font-medium">Agende seu horário com a especialista</span>
            </div>
          </div>
        </div>
      </section>

      {/* Facebook Feed */}
      <FacebookFeed />

      {/* Content Section */}
      <section className="py-6 sm:py-10 max-w-5xl mx-auto px-2.5 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-5">
            {/* Quick Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 bg-white rounded-xl border border-pink-100 shadow-2xs space-y-1">
                <div className="flex items-center gap-2 text-[#D4567D]">
                  <Sparkles size={17} />
                  <h2 className="font-bold text-xs sm:text-sm text-gray-900">Neutralização de Cores</h2>
                </div>
                <p className="text-xs text-gray-600 font-normal leading-[1.4]">
                  Corrigimos tons acinzentados, azulados ou avermelhados sem laser agressivo em {locationName}.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-pink-100 shadow-2xs space-y-1">
                <div className="flex items-center gap-2 text-[#D4567D]">
                  <Shield size={17} />
                  <h2 className="font-bold text-xs sm:text-sm text-gray-900">Biossegurança VIP</h2>
                </div>
                <p className="text-xs text-gray-600 font-normal leading-[1.4]">
                  Materiais 100% descartáveis e esterilizados no estúdio ou na sua casa em {locationName}.
                </p>
              </div>
            </div>

            {/* Articles */}
            {sections.map((s, idx) => (
              <article key={idx} className="bg-white p-4 rounded-xl border border-pink-100/80 shadow-2xs space-y-1.5">
                <h2 className="text-xs sm:text-sm md:text-base font-serif font-bold text-gray-900 border-l-3 border-[#D4567D] pl-2.5">
                  {s.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-700 leading-[1.45] font-normal">
                  {s.content}
                </p>
              </article>
            ))}

            {/* Before / After Showcase */}
            <div className="bg-white p-3.5 sm:p-5 rounded-2xl border border-pink-100 shadow-xs space-y-3">
              <div className="text-center space-y-0.5">
                <h2 className="text-sm sm:text-base font-serif font-bold text-gray-900">
                  Transformações e Correções em {locationName}
                </h2>
                <p className="text-xs text-gray-500">Veja a recuperação do desenho e naturalidade</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-100 border border-gray-200">
                    <img 
                      src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600" 
                      alt={`micropigmentação antiga antes da correção em ${locationName}`} 
                      className="w-full h-full object-cover grayscale" 
                    />
                    <div className="absolute top-2 left-2 bg-black/75 text-white px-2 py-0.5 rounded-md text-[10px] font-bold">Antes (Antiga)</div>
                  </div>
                  <p className="text-center text-[11px] font-semibold text-gray-600">Pigmento cinza e falhado</p>
                </div>

                <div className="space-y-1">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-100 border border-pink-200">
                    <img 
                      src="https://www.divasespacodabeleza.com.br/assets/images/imagem-do-whatsapp-de-2024-10-20-s-14.36.30-f19729d5-747x1600.jpg" 
                      alt={`resultado de correção de micropigmentação natural em ${locationName}`} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute top-2 left-2 bg-[#D4567D] text-white px-2 py-0.5 rounded-md text-[10px] font-bold">Depois (Divas)</div>
                  </div>
                  <p className="text-center text-[11px] font-bold text-[#D4567D]">Correção Suave e Harmônica</p>
                </div>
              </div>
            </div>

            {/* Procedures Tips */}
            <div className="bg-white p-3.5 sm:p-5 rounded-2xl border border-pink-100 shadow-xs space-y-3">
              <h2 className="text-xs sm:text-sm md:text-base font-serif font-bold text-gray-900 text-center">
                Dicas de Especialista para {locationName}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {PROCEDURES_TIPS.slice(0, 6).map((tip, idx) => (
                  <div key={idx} className="p-2.5 bg-[#FAF8F9] rounded-xl border border-pink-100/60 flex gap-2 items-start">
                    <Info size={15} className="text-[#D4567D] shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-700 leading-[1.4] font-medium">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-4">
            <div className="bg-gray-900 text-white p-4 sm:p-6 rounded-2xl shadow-sm space-y-3 sticky top-24">
              <h3 className="text-sm sm:text-base font-serif font-bold">Atendimento em {locationName}</h3>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex gap-2 items-center text-gray-300">
                  <Clock className="text-[#D4567D] shrink-0" size={16} />
                  <span>Seg - Sex: 10h às 20h</span>
                </div>
                <div className="flex gap-2 items-center text-gray-300">
                  <HomeIcon className="text-[#D4567D] shrink-0" size={16} />
                  <span>Atendimento Domiciliar VIP</span>
                </div>
                <div className="flex gap-2 items-center text-gray-300">
                  <Star className="text-[#D4567D] shrink-0" size={16} />
                  <span>Especialistas em Pele Madura 60+</span>
                </div>
              </div>

              <div className="pt-1 flex flex-col items-center gap-1">
                <a 
                  href={getWhatsAppLink(`Sidebar - ${locationName}`)} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[40px] h-10 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-center font-bold transition-all shadow-xs inline-flex items-center justify-center gap-2 active:scale-98 text-xs sm:text-sm"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                </a>
                <span className="text-[11px] text-gray-400 font-medium">Atendimento rápido</span>
              </div>
            </div>

            <div className="p-4 bg-white border border-pink-100 rounded-2xl shadow-2xs space-y-2">
              <h4 className="font-bold text-gray-600 uppercase text-[11px] tracking-wider">Outros Bairros & Regiões</h4>
              <div className="flex flex-wrap gap-1.5">
                {ALL_LOCATIONS.filter(l => !l.isCity).slice(0, 14).map(l => (
                  <Link 
                    key={l.slug} 
                    to={`/correcao-em-${l.slug}`} 
                    className="text-[11px] px-2.5 py-1 bg-gray-50 hover:bg-[#FDF2F8] hover:text-[#D4567D] rounded-lg text-gray-700 font-medium border border-gray-200/60 transition-colors"
                  >
                    {l.name}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Review Section */}
      <ReviewMarquee />

      {/* Trust Badges */}
      <section className="bg-white py-6 border-t border-pink-100">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          <div className="flex items-center justify-center gap-2 p-2.5 bg-[#FAF8F9] rounded-xl border border-pink-100/60">
            <Heart size={18} className="text-[#D4567D] shrink-0" />
            <span className="font-bold text-xs text-gray-800">Cuidado Humanizado</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-2.5 bg-[#FAF8F9] rounded-xl border border-pink-100/60">
            <Shield size={18} className="text-[#D4567D] shrink-0" />
            <span className="font-bold text-xs text-gray-800">Biossegurança VIP</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-2.5 bg-[#FAF8F9] rounded-xl border border-pink-100/60">
            <User size={18} className="text-[#D4567D] shrink-0" />
            <span className="font-bold text-xs text-gray-800">Mulheres 60+</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-2.5 bg-[#FAF8F9] rounded-xl border border-pink-100/60">
            <HomeIcon size={18} className="text-[#D4567D] shrink-0" />
            <span className="font-bold text-xs text-gray-800">Conforto no Lar</span>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default LocationTemplate;
