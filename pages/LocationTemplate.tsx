
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Shield, User, Home as HomeIcon, Star, MessageSquare, Zap, Clock, MapPin, Heart, Info, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, ALL_LOCATIONS, getWhatsAppLink, PROCEDURES_TIPS } from '../constants';
import FacebookFeed from '../components/FacebookFeed';
import ReviewMarquee from '../components/ReviewMarquee';
import { motion } from 'framer-motion';

const LocationTemplate: React.FC = () => {
  const { locationSlug } = useParams<{ locationSlug: string }>();
  
  // Garantindo correspondência exata do slug para evitar erros de renderização
  const location = ALL_LOCATIONS.find(l => l.slug === locationSlug) || { name: 'Curitiba', isCity: true };
  const locationName = location.name;

  useEffect(() => {
    // Garantir que a página sempre comece no topo ao navegar
    window.scrollTo(0, 0);
    document.title = `Correção de Micropigmentação em ${locationName} | Divas da Micro`;

    // Inject Schema Markup (JSON-LD)
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "BeautySalon",
      "name": `Divas da Micro - Correção de Micropigmentação em ${locationName}`,
      "description": `Especialista em correção e neutralização de micropigmentação de sobrancelhas, olhos e lábios em ${locationName}. Atendimento domiciliar exclusivo e estúdio para mulheres 60+.`,
      "image": "https://divasdamicro.app.br/assets/images/microblading-falhado-corrija-em-curitiba-divas-da-micro-1920x1080.png",
      "@id": `https://divasdamicro.app.br/#/correcao-em-${locationSlug}`,
      "url": `https://divasdamicro.app.br/#/correcao-em-${locationSlug}`,
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
  }, [locationName, locationSlug]);

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
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-24 bg-white"
    >
      {/* Hero */}
      <section className="bg-gray-950 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.divasespacodabeleza.com.br/assets/images/microblading-falhado-corrija-em-curitiba-divas-da-micro-1920x1080.png" 
            alt={`correção profissional de micropigmentação de sobrancelhas em ${locationName}`} 
            className="w-full h-full object-cover opacity-25" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="text-[#D4567D] font-bold tracking-wider uppercase text-xs md:text-sm mb-3 flex items-center gap-2">
              <MapPin size={18} /> Atendimento em {locationName} • Estúdio e Domiciliar
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Correção de Micropigmentação <br /> <span className="text-[#D4567D]">em {locationName}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl font-normal">
              Devolva a harmonia e a naturalidade ao seu olhar com especialistas em pele madura. Procedimento 100% indolor com opção de atendimento no seu lar em {locationName}.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={getWhatsAppLink(`Página Local - ${locationName}`)} 
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[50px] bg-[#D4567D] hover:bg-[#B84A6B] text-white px-8 md:px-10 py-4 rounded-2xl font-bold text-base md:text-lg transition-all inline-flex items-center gap-3 shadow-xl active:scale-95"
              >
                <MessageCircle size={22} />
                <span>Avaliação Grátis em {locationName}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Facebook Feed */}
      <FacebookFeed />

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="p-6 bg-[#FDF2F8] rounded-2xl border border-pink-100 flex flex-col gap-3">
                 <Zap className="text-[#D4567D]" size={32} />
                 <h2 className="font-bold text-xl text-gray-900">Neutralização de Cores</h2>
                 <p className="text-base text-gray-700 font-normal">Corrigimos sobrancelhas acinzentadas, azuladas ou avermelhadas com neutralizadores específicos em {locationName}.</p>
               </div>
               <div className="p-6 bg-[#FDF2F8] rounded-2xl border border-pink-100 flex flex-col gap-3">
                 <Shield className="text-[#D4567D]" size={32} />
                 <h2 className="font-bold text-xl text-gray-900">Biossegurança Rigorosa</h2>
                 <p className="text-base text-gray-700 font-normal">Materiais 100% descartáveis e ambiente asséptico no atendimento em estúdio ou domiciliar em {locationName}.</p>
               </div>
            </div>

            {sections.map((s, idx) => (
              <article key={idx} className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 border-l-4 border-[#D4567D] pl-4">
                  {s.title}
                </h2>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg font-normal">
                  {s.content}
                </p>
              </article>
            ))}

            <div className="bg-[#FDF2F8] p-6 md:p-10 rounded-3xl border border-pink-200">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6 text-center text-gray-900">
                Transformações e Correções em {locationName}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-gray-200">
                    <img 
                      src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600" 
                      alt={`micropigmentação antiga e desbotada antes da correção em ${locationName}`} 
                      className="w-full h-full object-cover grayscale" 
                    />
                    <div className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1 rounded-xl text-xs font-bold">Antes (Antiga)</div>
                  </div>
                  <p className="text-center text-sm font-semibold text-gray-600">Pigmento cinza e falhado</p>
                </div>
                <div className="space-y-3">
                  <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-gray-200">
                    <img 
                      src="https://www.divasespacodabeleza.com.br/assets/images/imagem-do-whatsapp-de-2024-10-20-s-14.36.30-f19729d5-747x1600.jpg" 
                      alt={`resultado de correção de micropigmentação natural em ${locationName}`} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute top-3 left-3 bg-[#D4567D] text-white px-3 py-1 rounded-xl text-xs font-bold">Depois (Divas)</div>
                  </div>
                  <p className="text-center text-sm font-bold text-[#D4567D]">Correção Suave e Harmônica</p>
                </div>
              </div>
            </div>

            {/* Procedures Tips Section */}
            <div className="pt-8">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6 text-center text-gray-900">
                Dicas de Especialista para {locationName}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROCEDURES_TIPS.slice(0, 10).map((tip, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-2xl border border-gray-200 flex gap-3 items-start">
                    <Info size={20} className="text-[#D4567D] shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-gray-900 text-white p-8 rounded-3xl sticky top-28 shadow-xl">
              <h3 className="text-2xl font-serif font-bold mb-6">Atendimento em {locationName}</h3>
              <div className="space-y-4 mb-8">
                <div className="flex gap-3 items-center">
                  <Clock className="text-[#D4567D]" size={20} />
                  <span className="text-base text-gray-200">Seg - Sex: 10h às 20h</span>
                </div>
                <div className="flex gap-3 items-center">
                  <HomeIcon className="text-[#D4567D]" size={20} />
                  <span className="text-base text-gray-200">Atendimento Domiciliar VIP</span>
                </div>
                <div className="flex gap-3 items-center">
                  <Star className="text-[#D4567D]" size={20} />
                  <span className="text-base text-gray-200">Especialistas em Pele Madura</span>
                </div>
              </div>
              <a 
                href={getWhatsAppLink(`Sidebar - ${locationName}`)} 
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] block w-full bg-[#D4567D] hover:bg-[#B84A6B] text-white py-4 rounded-2xl text-center font-bold transition-all shadow-lg active:scale-95 text-base"
              >
                Consultar Horários em {locationName}
              </a>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-3xl shadow-sm">
              <h4 className="font-bold mb-4 text-gray-500 uppercase text-xs tracking-wider">Outros Bairros e Regiões</h4>
              <div className="flex flex-wrap gap-2">
                {ALL_LOCATIONS.filter(l => !l.isCity).slice(0, 16).map(l => (
                  <Link 
                    key={l.slug} 
                    to={`/correcao-em-${l.slug}`} 
                    className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-[#FDF2F8] hover:text-[#D4567D] rounded-xl text-gray-700 font-medium transition-colors"
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
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md text-[#D4567D]">
              <Heart size={28} />
            </div>
            <span className="font-bold text-xs uppercase tracking-wider text-gray-700">Cuidado Humanizado</span>
          </div>
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md text-[#D4567D]">
              <Shield size={28} />
            </div>
            <span className="font-bold text-xs uppercase tracking-wider text-gray-700">Biossegurança VIP</span>
          </div>
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md text-[#D4567D]">
              <User size={28} />
            </div>
            <span className="font-bold text-xs uppercase tracking-wider text-gray-700">Mulheres 60+</span>
          </div>
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md text-[#D4567D]">
              <HomeIcon size={28} />
            </div>
            <span className="font-bold text-xs uppercase tracking-wider text-gray-700">Conforto no Lar</span>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default LocationTemplate;
