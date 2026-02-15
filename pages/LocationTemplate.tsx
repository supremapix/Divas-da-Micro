
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Shield, User, Home as HomeIcon, Star, MessageSquare, Zap, Clock, MapPin, Heart, Info, AlertCircle } from 'lucide-react';
import { CONTACT_INFO, ALL_LOCATIONS, getWhatsAppLink, PROCEDURES_TIPS } from '../constants';
import FacebookFeed from '../components/FacebookFeed';
import ReviewMarquee from '../components/ReviewMarquee';
import SEOHead from '../components/SEOHead';
import { SEO_CONFIG, generateLocalBusinessSchema, generateBreadcrumbSchema } from '../seoConstants';
import { motion } from 'framer-motion';

const LocationTemplate: React.FC = () => {
  const { locationSlug } = useParams<{ locationSlug: string }>();
  
  // Garantindo correspondência exata do slug para evitar erros de renderização
  const location = ALL_LOCATIONS.find(l => l.slug === locationSlug) || { name: 'Curitiba', isCity: true };
  const locationName = location.name;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locationName, locationSlug]);

  const breadcrumbs = [
    { name: 'Início', url: SEO_CONFIG.SITE_URL },
    { name: 'Correção em Curitiba', url: `${SEO_CONFIG.SITE_URL}/#/correcao` },
    { name: locationName, url: `${SEO_CONFIG.SITE_URL}/#/correcao-em-${locationSlug}` }
  ];

  const metaDescription = `Correção de micropigmentação em ${locationName} com atendimento domiciliar. Dentro do raio de 45km do Batel, Curitiba. Sobrancelhas, olhos e lábios - procedimento 100% indolor.`;
  const metaKeywords = `micropigmentação ${locationName}, correção em ${locationName}, atendimento domiciliar, 45km Curitiba, Divas da Micro`;

  const sections = [
    {
      title: `Especialista em Correção de Micropigmentação em ${locationName}`,
      content: `A Divas da Micro consolidou-se como a principal escolha para correção de micropigmentação em ${locationName}. Nosso foco exclusivo em mulheres 60+ permite uma compreensão profunda das nuances da pele madura. Se você mora em ${locationName} e está insatisfeita com o resultado de procedimentos anteriores, nossa equipe técnica russa está pronta para transformar seu olhar com precisão e arte.`
    },
    {
      title: `Neutralização de Sobrancelhas Cinzas ou Vermelhas em ${locationName}`,
      content: `O desbotamento para tons indesejados é um problema comum relatado por clientes em ${locationName}. Nossa técnica em ${locationName} utiliza pigmentos de correção de última geração que neutralizam tons cinzentos, azulados ou avermelhados, devolvendo o aspecto natural e rejuvenescido às suas sobrancelhas.`
    },
    {
      title: `Correção de Olhos e Delineados Expandidos em ${locationName}`,
      content: `Delineados que expandiram ou perderam a definição são queixas frequentes em ${locationName}. Através de nossa técnica indolor em ${locationName}, realizamos correções minuciosas que recuperam a expressividade do olhar. Atendemos no conforto do seu lar em ${locationName}, garantindo total privacidade e relaxamento.`
    },
    {
      title: `Reconstrução Labial e Neutralização em ${locationName}`,
      content: `Lábios com contorno assimétrico ou tons escurecidos podem ser corrigidos com maestria em ${locationName}. Nossa abordagem em ${locationName} foca na harmonização do arco do cupido e na devolução do volume visual através de cores que complementam seu fototipo.`
    },
    {
      title: `Atendimento VIP Domiciliar em ${locationName}`,
      content: `Sabemos que o deslocamento em Curitiba e RMC pode ser cansativo. Por isso, oferecemos atendimento domiciliar exclusivo em ${locationName}. Levamos um estúdio completo e esterilizado até você, mantendo os mais altos padrões de biossegurança diretamente na sua residência em ${locationName}.`
    },
    {
      title: `Procedimento 100% Indolor e Seguro em ${locationName}`,
      content: `O conforto das nossas Divas em ${locationName} é prioridade. Utilizamos anestésicos premium manipulados que garantem uma experiência livre de dor. Muitas de nossas clientes em ${locationName} aproveitam o tempo do procedimento para relaxar profundamente, confiando em nossa expertise de anos.`
    },
    {
      title: `Público 60+: Cuidados Específicos em ${locationName}`,
      content: `A pele madura em ${locationName} exige um toque diferenciado. Dominamos as técnicas de profundidade e pressão da mão para evitar hematomas e garantir uma fixação perfeita do pigmento. Ser uma Diva em ${locationName} significa receber o cuidado que sua pele realmente merece.`
    },
    {
      title: `Como Funciona o Agendamento em ${locationName}?`,
      content: `O processo em ${locationName} começa com uma avaliação fotográfica gratuita via WhatsApp. Analisamos o pigmento residual, a saúde da pele e as possibilidades de correção. Após aprovado o design preliminar, agendamos sua sessão domiciliar em ${locationName} com toda a conveniência.`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pt-24"
    >
      <SEOHead
        title={`Correção de Micropigmentação em ${locationName} | Divas da Micro`}
        description={metaDescription}
        keywords={metaKeywords}
        image="/hero.png"
        url={`${SEO_CONFIG.SITE_URL}/#/correcao-em-${locationSlug}`}
        schemas={[
          generateLocalBusinessSchema(locationName),
          generateBreadcrumbSchema(breadcrumbs)
        ]}
      />

      {/* Service Area Banner */}
      <section className="bg-[#D4567D] text-white py-4 px-4">
        <div className="container mx-auto flex items-center justify-center gap-3 text-center">
          <AlertCircle size={20} />
          <span className="font-bold text-sm md:text-base">
            Atendimento Domiciliar em {locationName} até <strong>45km do Batel</strong>, Curitiba
          </span>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-gray-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.png"
            alt={`Correção de Micropigmentação Profissional em ${locationName}`}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <span className="text-[#D4567D] font-bold tracking-widest uppercase text-sm mb-4 block flex items-center gap-2">
              <MapPin size={16} /> Especialista Certificada em {locationName}
            </span>
            <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Correção de Micropigmentação <br /> <span className="text-[#D4567D]">em {locationName}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Devolva a harmonia ao seu rosto com o atendimento VIP domiciliar que é referência em {locationName}. Procedimentos indolores focados na beleza madura.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={getWhatsAppLink(`Página Local - ${locationName}`)} className="bg-[#D4567D] text-white px-10 py-5 rounded-full font-bold hover:bg-[#b84a6b] transition-all flex items-center gap-3 shadow-2xl">
                <MessageSquare size={24} /> Agendar em {locationName}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Facebook Feed - Global Consistency */}
      <FacebookFeed />

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
               <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col gap-4">
                 <Zap className="text-[#D4567D]" size={32} />
                 <h4 className="font-bold text-xl">Neutralização Total</h4>
                 <p className="text-sm text-gray-600">Corrigimos sobrancelhas acinzentadas ou avermelhadas com pigmentos neutralizadores em {locationName}.</p>
               </div>
               <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col gap-4">
                 <Shield className="text-[#D4567D]" size={32} />
                 <h4 className="font-bold text-xl">Segurança Domiciliar</h4>
                 <p className="text-sm text-gray-600">Protocolos hospitalares levados diretamente ao seu lar em {locationName}.</p>
               </div>
            </div>

            {sections.map((s, idx) => (
              <article key={idx} className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 border-l-4 border-[#D4567D] pl-6">{s.title}</h2>
                <p className="text-gray-700 leading-relaxed mb-8">{s.content}</p>
              </article>
            ))}

            <div className="bg-[#D4567D]/5 p-12 rounded-[3rem] border border-[#D4567D]/10">
              <h3 className="text-3xl font-serif font-bold mb-8 text-center text-gray-900">Transformações em {locationName}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg h-80">
                    <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600" alt="Antes" className="w-full h-full object-cover grayscale" />
                    <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-1 rounded-full text-xs font-bold">Antes</div>
                  </div>
                  <p className="text-center text-sm font-bold text-gray-400">Microantiga e irregular</p>
                </div>
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg h-80">
                    <img src="https://www.divasespacodabeleza.com.br/assets/images/imagem-do-whatsapp-de-2024-10-20-s-14.36.30-f19729d5-747x1600.jpg" alt="Depois" className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-[#D4567D] text-white px-4 py-1 rounded-full text-xs font-bold">Depois</div>
                  </div>
                  <p className="text-center text-sm font-bold text-[#D4567D]">Correção Divas da Micro</p>
                </div>
              </div>
            </div>

            {/* Procedures Tips Section for 'Complete Content' */}
            <div className="mt-20">
              <h3 className="text-3xl font-serif font-bold mb-10 text-center text-gray-900">Guia de Especialista para {locationName}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROCEDURES_TIPS.slice(0, 20).map((tip, idx) => (
                  <div key={idx} className="p-5 bg-gray-50 rounded-2xl border border-gray-100 flex gap-4 items-start">
                    <div className="bg-[#D4567D]/10 text-[#D4567D] p-2 rounded-lg shrink-0">
                      <Info size={16} />
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed font-medium">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-[#D4567D]/10 border-2 border-[#D4567D] p-8 rounded-[2.5rem] shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="text-[#D4567D]" size={24} />
                <h3 className="text-lg font-serif font-bold text-gray-900">Área de Atendimento</h3>
              </div>
              <p className="text-sm font-bold text-gray-800 mb-3">
                Atendimento domiciliar até <span className="text-[#D4567D]">45km</span> do Batel, Curitiba
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                {locationName} está dentro da nossa região de cobertura. Levamos todo o conforto de um estúdio profissional até sua residência.
              </p>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-[2.5rem] sticky top-28 shadow-2xl">
              <h3 className="text-2xl font-serif font-bold mb-8">Agende em {locationName}</h3>
              <div className="space-y-6 mb-10">
                <div className="flex gap-4 items-center">
                  <Clock className="text-[#D4567D]" size={20} />
                  <span className="text-sm">Seg - Sex: 10h às 20h</span>
                </div>
                <div className="flex gap-4 items-center">
                  <HomeIcon className="text-[#D4567D]" size={20} />
                  <span className="text-sm">Atendimento Domiciliar VIP</span>
                </div>
                <div className="flex gap-4 items-center">
                  <Star className="text-[#D4567D]" size={20} />
                  <span className="text-sm">Especialista em Pele Madura</span>
                </div>
                <div className="flex gap-4 items-center">
                  <MapPin className="text-[#D4567D]" size={20} />
                  <span className="text-sm">Até 45km de distância</span>
                </div>
              </div>
              <a href={getWhatsAppLink(`Sidebar - ${locationName}`)} className="block w-full bg-[#D4567D] text-white py-5 rounded-full text-center font-bold hover:bg-[#b84a6b] transition-all shadow-xl">
                Consultar Horários
              </a>
              <p className="text-[10px] text-gray-500 text-center mt-6 uppercase tracking-widest">Suporte Vitalício Pós-Procedimento</p>
            </div>

            <div className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm">
              <h4 className="font-bold mb-6 text-gray-400 uppercase text-xs tracking-widest">Regiões Atendidas Próximas</h4>
              <div className="flex flex-wrap gap-2">
                {ALL_LOCATIONS.filter(l => !l.isCity).slice(0, 15).map(l => (
                  <Link key={l.slug} to={`/correcao-em-${l.slug}`} className="text-[10px] px-3 py-1.5 bg-gray-50 rounded-full hover:bg-[#D4567D]/10 hover:text-[#D4567D] transition-colors text-gray-500 font-bold uppercase tracking-tight">
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
      <section className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md text-[#D4567D]">
              <Heart size={32} />
            </div>
            <span className="font-bold text-xs uppercase tracking-widest text-gray-600">Cuidado Humanizado</span>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md text-[#D4567D]">
              <Shield size={32} />
            </div>
            <span className="font-bold text-xs uppercase tracking-widest text-gray-600">Biossegurança VIP</span>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md text-[#D4567D]">
              <User size={32} />
            </div>
            <span className="font-bold text-xs uppercase tracking-widest text-gray-600">Pele Madura 60+</span>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md text-[#D4567D]">
              <HomeIcon size={32} />
            </div>
            <span className="font-bold text-xs uppercase tracking-widest text-gray-600">Conforto no Lar</span>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default LocationTemplate;
