import React, { useEffect, useMemo } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Shield, User, Home as HomeIcon, Star, Clock, MapPin, Heart, Info, MessageCircle, Sparkles, CheckCircle2, HelpCircle, ArrowRight, Phone } from 'lucide-react';
import { ALL_LOCATIONS, CONTACT_INFO, getWhatsAppLink, PROCEDURES_TIPS } from '../constants';
import FacebookFeed from '../components/FacebookFeed';
import ReviewMarquee from '../components/ReviewMarquee';
import { motion } from 'framer-motion';

const LocationTemplate: React.FC = () => {
  const { locationSlug: paramSlug } = useParams<{ locationSlug?: string }>();
  const routerLocation = useLocation();
  
  // Extrai o slug do parâmetro de rota ou diretamente do pathname (ex: /bairro/batel, /cidade/pinhais, /correcao-em-batel)
  const pathname = routerLocation.pathname.toLowerCase();
  let extractedSlug = (paramSlug || '').trim();

  if (!extractedSlug) {
    if (pathname.startsWith('/bairro/')) {
      extractedSlug = pathname.replace(/^\/bairro\//, '').replace(/\/$/, '').trim();
    } else if (pathname.startsWith('/bairro-')) {
      extractedSlug = pathname.replace(/^\/bairro-/, '').replace(/\/$/, '').trim();
    } else if (pathname.startsWith('/cidade/')) {
      extractedSlug = pathname.replace(/^\/cidade\//, '').replace(/\/$/, '').trim();
    } else if (pathname.startsWith('/cidade-')) {
      extractedSlug = pathname.replace(/^\/cidade-/, '').replace(/\/$/, '').trim();
    } else if (pathname.startsWith('/correcao-em-')) {
      extractedSlug = pathname.replace(/^\/correcao-em-/, '').replace(/\/$/, '').trim();
    } else if (pathname.startsWith('/correcao-em/')) {
      extractedSlug = pathname.replace(/^\/correcao-em\//, '').replace(/\/$/, '').trim();
    }
  }

  // Correspondência exata do slug (normalizado)
  const location = useMemo(() => {
    const found = ALL_LOCATIONS.find(l => l.slug.toLowerCase() === extractedSlug.toLowerCase());
    if (found) return found;
    
    // Fallback formatado a partir do slug
    const cleanName = extractedSlug 
      ? extractedSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') 
      : 'Curitiba';
    return { name: cleanName, isCity: false, slug: extractedSlug || 'curitiba' };
  }, [extractedSlug]);

  const locationName = location.name;
  const currentSlug = location.slug || 'curitiba';
  const isCity = location.isCity;
  const locationTypeLabel = isCity ? 'na cidade de' : 'no bairro';

  // Canonical oficial sempre apontando para divasespacodabeleza.com.br (self-referencing)
  const canonicalPath = isCity ? `/cidade/${currentSlug}` : `/bairro/${currentSlug}`;
  const canonicalUrl = `https://www.divasespacodabeleza.com.br${canonicalPath}`;

  useEffect(() => {
    window.scrollTo(0, 0);

    const pageTitle = `Correção de Micropigmentação de Sobrancelhas em ${locationName} - Divas da Micro`;
    const pageDesc = `Especialista em corrigir micropigmentação antiga, sobrancelhas cinzas, azuladas ou tortas em ${locationName}. Atendimento em estúdio ou domiciliar para mulheres 60+. 100% indolor.`;
    
    document.title = pageTitle;

    // Atualiza meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', pageDesc);

    // Atualiza meta canonical self-referencing
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Atualiza og:url e og:title
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);
    
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', pageDesc);

    // Inject Schema Markup (JSON-LD) LocalBusiness & Service
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "BeautySalon",
      "name": `Divas da Micro - Correção de Micropigmentação em ${locationName}`,
      "alternateName": `Divas da Micro ${locationName}`,
      "description": pageDesc,
      "image": "https://img.supremasite.com.br/divas/correcao-sobrancelas.jpg",
      "@id": `${canonicalUrl}#localbusiness`,
      "url": canonicalUrl,
      "telephone": "+5541997879392",
      "priceRange": "$$",
      "currenciesAccepted": "BRL",
      "paymentAccepted": "Cartão de Crédito, Pix, Dinheiro",
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
        "latitude": -25.4474,
        "longitude": -49.2847
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "10:00",
          "closes": "20:00"
        }
      ],
      "areaServed": {
        "@type": isCity ? "City" : "AdministrativeArea",
        "name": locationName
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `Serviços de Correção em ${locationName}`,
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": `Correção de Sobrancelha Micropigmentada em ${locationName}`,
              "description": `Neutralização de pigmentos antigos avermelhados, cinzas ou azulados para mulheres 60+ em ${locationName}.`
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": `Atendimento Domiciliar VIP de Micropigmentação em ${locationName}`,
              "description": `Atendimento home care no conforto da sua residência em ${locationName} com total biossegurança.`
            }
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'location-jsonld';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('location-jsonld');
      if (existing) document.head.removeChild(existing);
    };
  }, [locationName, currentSlug, canonicalUrl, isCity]);

  // Conteúdo detalhado e único (> 400 palavras de texto autoral focado em intenções de busca reais)
  const localSections = [
    {
      title: `Especialista em Corrigir Micropigmentação Antiga ${locationTypeLabel} ${locationName}`,
      content: `Se você realizou uma micropigmentação há alguns anos e hoje suas sobrancelhas estão com tons azulados, esverdeados, avermelhados ou com desenho artificial e assimétrico, você não precisa conviver com isso. A Divas da Micro é especializada no resgate estético de sobrancelhas antigas para moradoras de ${locationName}. Compreendemos a fundo a estrutura da pele madura (50+, 60+ e 70+), que possui espessura mais delicada e exige agulhas ultrafinas, pressão controlada milimetricamente e pigmentos biocompatíveis de alta pureza.`
    },
    {
      title: `Sua Sobrancelha Micropigmentada Ficou Errada ou Manchada em ${locationName}? Saiba Como Neutralizamos`,
      content: `Muitas mulheres em ${locationName} chegam até nós com medo de procedimentos dolorosos ou lasers que queimam e removem os pelos naturais. Nossa técnica patenteada de neutralização colorimétrica atua diretamente no depósito subepidérmico do pigmento degradado. Através de corretores orgânicos quentes, transformamos o tom chumbo ou cinza em um castanho aveludado e iluminado, redesenhando os arcos de acordo com a anatomia atual do seu rosto, sem agredir sua pele.`
    },
    {
      title: `Correção de Delineado de Olhos e Revitalização Labial em ${locationName}`,
      content: `Além da harmonização de sobrancelhas, atendemos clientes de ${locationName} que buscam corrigir delineados de olhos que expandiram com o tempo ou perderam a ponta precisa devido à queda natural da pálpebra. Nos lábios, realizamos a neutralização de manchas escuras e restauramos o contorno do arco do cupido com tons suaves de pêssego e rosa natural, devolvendo jovialidade e vitalidade ao sorriso de forma totalmente sutil.`
    },
    {
      title: `Atendimento Domiciliar VIP no Conforto do Seu Lar em ${locationName}`,
      content: `Para proporcionar o máximo de comodidade e privacidade às clientes de ${locationName}, disponibilizamos o serviço de Atendimento Home Care VIP. Levamos toda a estrutura de estúdio de alta gama até a sua casa: maca ergonômica esterilizada, iluminação médica cirúrgica, materiais 100% descartáveis e abertos na sua presença. Você é atendida com total calma, sem estresse com trânsito ou estacionamento em Curitiba e RMC.`
    },
    {
      title: `Protocolo 100% Indolor com Anestésicos Manipulados de Alta Potência`,
      content: `O maior receio de quem já passou por uma experiência ruim no passado é a dor. Na Divas da Micro, a dor é eliminada do processo: utilizamos fórmulas tópicas manipuladas exclusivamente sob prescrição para nossa clínica, com absorção rápida que adormece completamente a região antes de qualquer toque. Nossas clientes de ${locationName} frequentemente adormecem durante a sessão.`
    }
  ];

  const localFaqs = [
    {
      q: `Como agendar a avaliação de micropigmentação para ${locationName}?`,
      a: `Basta enviar uma foto nítida das suas sobrancelhas pelo WhatsApp oficial (41) 99787-9392. Nossa especialista fará uma análise prévia gratuita do pigmento atual e agendará seu horário no estúdio no Batel ou na sua residência em ${locationName}.`
    },
    {
      q: `A correção de sobrancelha cinza ou azulada funciona em pele 60+?`,
      a: `Sim! Mais de 90% das nossas clientes têm entre 55 e 80 anos. Utilizamos pigmentos especiais de neutralização desenvolvidos para não migrar na pele madura e devolver a cor castanha suave.`
    },
    {
      q: `O atendimento domiciliar em ${locationName} tem os mesmos equipamentos do estúdio?`,
      a: `Sim, rigorosamente iguais. Todos os materiais são estéreis, descartáveis e aprovados pela ANVISA, seguindo protocolo de biossegurança hospitalar.`
    },
    {
      q: `Quanto tempo leva a sessão de correção em ${locationName}?`,
      a: `A sessão dura entre 2h e 2h30. Esse tempo inclui a assepsia completa, aplicação do anestésico tópico, desenho e alinhamento milimétrico com aprovação no espelho e aplicação suave do pigmento.`
    }
  ];

  // Lista de bairros vizinhos para links internos sem #
  const nearbyLocations = useMemo(() => {
    return ALL_LOCATIONS.filter(l => l.slug !== currentSlug).slice(0, 16);
  }, [currentSlug]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 sm:pt-20 bg-[#FAF8F9]"
    >
      {/* Hero / Header da Página Local */}
      <section className="relative py-8 sm:py-12 md:py-16 bg-white border-b border-pink-100">
        <div className="w-full max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#FDF2F8] border border-pink-200 text-[#B84A6B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <MapPin size={14} className="text-[#D4567D]" />
              <span>Atendimento em {locationName} • Estúdio & Domiciliar</span>
            </div>

            {/* H1 Otimizado para SEO Local */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight tracking-tight">
              Correção de Micropigmentação de Sobrancelhas <br className="hidden sm:inline" />
              <span className="text-[#D4567D]">em {locationName}</span>
            </h1>

            {/* Subtítulo com Intenções de Busca Reais */}
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-normal">
              Especialista em neutralizar sobrancelhas cinzas, avermelhadas ou com desenho assimétrico para mulheres 60+. Procedimento 100% indolor com atendimento exclusivo no Batel ou no conforto da sua casa em {locationName}.
            </p>

            {/* CTA WhatsApp Principal */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a 
                href={getWhatsAppLink(`Página Local - ${locationName}`)} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[46px] px-7 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold text-sm sm:text-base shadow-sm transition-all inline-flex items-center justify-center gap-2 active:scale-98"
                aria-label={`Avaliação Gratuita pelo WhatsApp para ${locationName}`}
              >
                <MessageCircle size={19} />
                <span>Avaliação Gratuita no WhatsApp</span>
              </a>

              <a 
                href={CONTACT_INFO.phoneCall} 
                className="w-full sm:w-auto min-h-[46px] px-6 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-bold text-sm sm:text-base transition-all inline-flex items-center justify-center gap-2 active:scale-98"
              >
                <Phone size={17} className="text-[#D4567D]" />
                <span>Ligue: {CONTACT_INFO.whatsappDisplay}</span>
              </a>
            </div>

            <p className="text-xs text-gray-500 font-medium">
              ✓ Anestésico de alta potência • ✓ Padrão hospitalar de higiene • ✓ Sem laser agressivo
            </p>
          </div>
        </div>
      </section>

      {/* Facebook Feed Widget */}
      <FacebookFeed />

      {/* Seção Principal de Conteúdo Estruturado (> 400 palavras) */}
      <section className="py-8 sm:py-12 max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Coluna de Artigos Principais (8 colunas) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Destaques Rápidos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 bg-white rounded-2xl border border-pink-100 shadow-2xs space-y-1.5">
                <div className="flex items-center gap-2 text-[#D4567D]">
                  <Sparkles size={18} />
                  <h2 className="font-bold text-sm sm:text-base text-gray-900">Neutralização Sem Laser</h2>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
                  Corrigimos pigmentos azulados, acinzentados ou avermelhados com corretores colorimétricos sem queimar os pelos em {locationName}.
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-pink-100 shadow-2xs space-y-1.5">
                <div className="flex items-center gap-2 text-[#D4567D]">
                  <HomeIcon size={18} />
                  <h2 className="font-bold text-sm sm:text-base text-gray-900">Atendimento em Domicílio</h2>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
                  Atendimento VIP com maca estéril, iluminação cirúrgica e biossegurança na sua residência em {locationName}.
                </p>
              </div>
            </div>

            {/* Artigos de Texto Rico com Foco em SEO e Intenção de Busca */}
            {localSections.map((sec, idx) => (
              <article key={idx} className="bg-white p-5 sm:p-6 rounded-2xl border border-pink-100/90 shadow-2xs space-y-2.5">
                <h2 className="text-sm sm:text-base md:text-lg font-serif font-bold text-gray-900 border-l-4 border-[#D4567D] pl-3">
                  {sec.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                  {sec.content}
                </p>
              </article>
            ))}

            {/* Vitrine Antes e Depois */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-pink-100 shadow-2xs space-y-4">
              <div className="text-center space-y-1">
                <h2 className="text-base sm:text-lg font-serif font-bold text-gray-900">
                  Resultados Reais de Correção de Sobrancelhas em {locationName}
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">
                  Recuperação completa do design anatômico com fios ultra-realistas e naturais
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-100 border border-gray-200 shadow-inner">
                    <img 
                      src="https://img.supremasite.com.br/divas/antes.png" 
                      alt={`Micropigmentação antiga manchada antes da correção em ${locationName}`} 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-black/80 text-white px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide">
                      Antes (Micropigmentação Antiga)
                    </div>
                  </div>
                  <p className="text-center text-xs font-semibold text-gray-600">Pigmento chumbo, cinza e falhado</p>
                </div>

                <div className="space-y-1.5">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-100 border border-pink-300 shadow-inner">
                    <img 
                      src="https://img.supremasite.com.br/divas/depois.png" 
                      alt={`Resultado de correção de sobrancelha harmônica em ${locationName}`} 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#D4567D] text-white px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide">
                      Depois (Harmonização Divas)
                    </div>
                  </div>
                  <p className="text-center text-xs font-bold text-[#D4567D]">Design suave, arqueamento natural e cor viva</p>
                </div>
              </div>
            </div>

            {/* Perguntas Frequentes Locais (FAQ Schema Friendly) */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-pink-100 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 text-[#D4567D] border-b border-pink-100 pb-3">
                <HelpCircle size={20} />
                <h2 className="text-base sm:text-lg font-serif font-bold text-gray-900">
                  Dúvidas Frequentes sobre Atendimento em {locationName}
                </h2>
              </div>

              <div className="space-y-3">
                {localFaqs.map((faq, idx) => (
                  <div key={idx} className="p-3.5 bg-[#FAF8F9] rounded-xl border border-pink-100/70 space-y-1.5">
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-[#D4567D] shrink-0 mt-0.5" />
                      <span>{faq.q}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pl-6">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dicas de Pós-Procedimento */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-pink-100 shadow-2xs space-y-3.5">
              <h2 className="text-sm sm:text-base font-serif font-bold text-gray-900">
                Orientações para Clientes de {locationName}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PROCEDURES_TIPS.slice(0, 6).map((tip, idx) => (
                  <div key={idx} className="p-3 bg-[#FAF8F9] rounded-xl border border-pink-100/60 flex gap-2.5 items-start">
                    <Info size={16} className="text-[#D4567D] shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-700 leading-relaxed font-medium">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Lateral (4 colunas) */}
          <aside className="lg:col-span-4 space-y-5">
            
            {/* Card Fixo de Informações de Atendimento */}
            <div className="bg-gray-900 text-white p-5 sm:p-6 rounded-2xl shadow-md space-y-4 sticky top-24">
              <div className="border-b border-gray-800 pb-3">
                <span className="text-[11px] uppercase tracking-wider text-[#D4567D] font-bold">Unidade & Atendimento</span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-white mt-0.5">
                  Atendimento em {locationName}
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex gap-2.5 items-start text-gray-300">
                  <MapPin className="text-[#D4567D] shrink-0 mt-0.5" size={16} />
                  <span>Estúdio Central: Av. Sete de Setembro, 4995 - Batel</span>
                </div>
                <div className="flex gap-2.5 items-center text-gray-300">
                  <Clock className="text-[#D4567D] shrink-0" size={16} />
                  <span>Segunda a Sexta: 10h às 20h</span>
                </div>
                <div className="flex gap-2.5 items-center text-gray-300">
                  <HomeIcon className="text-[#D4567D] shrink-0" size={16} />
                  <span>Atendimento Home Care VIP em {locationName}</span>
                </div>
                <div className="flex gap-2.5 items-center text-gray-300">
                  <Star className="text-[#D4567D] shrink-0" size={16} />
                  <span>Procedimentos 100% Indolores</span>
                </div>
              </div>

              <div className="pt-2">
                <a 
                  href={getWhatsAppLink(`Sidebar - ${locationName}`)} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[44px] bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold transition-all shadow-xs inline-flex items-center justify-center gap-2 active:scale-98 text-xs sm:text-sm"
                >
                  <MessageCircle size={18} />
                  <span>Falar no WhatsApp Agora</span>
                </a>
              </div>
            </div>

            {/* Links Internos para Outros Bairros e Cidades (Path-Based sem #) */}
            <div className="p-5 bg-white border border-pink-100 rounded-2xl shadow-2xs space-y-3">
              <h4 className="font-bold text-gray-800 uppercase text-xs tracking-wider border-b border-pink-100 pb-2">
                Outros Bairros & Cidades Atendidas
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {nearbyLocations.map(loc => {
                  const targetPath = loc.isCity ? `/cidade/${loc.slug}` : `/bairro/${loc.slug}`;
                  return (
                    <Link 
                      key={loc.slug} 
                      to={targetPath} 
                      className="text-[11px] px-2.5 py-1 bg-gray-50 hover:bg-[#FDF2F8] hover:text-[#D4567D] hover:border-pink-200 rounded-lg text-gray-700 font-medium border border-gray-200/70 transition-colors inline-flex items-center gap-1"
                    >
                      <span>{loc.name}</span>
                    </Link>
                  );
                })}
              </div>
              <div className="pt-2 text-center">
                <Link to="/servicos" className="text-xs font-bold text-[#D4567D] hover:underline inline-flex items-center gap-1">
                  <span>Ver todos os serviços</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </section>

      {/* Review Carousel / Marquee */}
      <ReviewMarquee />

      {/* Trust Badges de Rodapé da Página */}
      <section className="bg-white py-8 border-t border-pink-100">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-3.5 text-center">
          <div className="flex items-center justify-center gap-2 p-3 bg-[#FAF8F9] rounded-xl border border-pink-100/60">
            <Heart size={18} className="text-[#D4567D] shrink-0" />
            <span className="font-bold text-xs text-gray-800">Cuidado Humanizado</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 bg-[#FAF8F9] rounded-xl border border-pink-100/60">
            <Shield size={18} className="text-[#D4567D] shrink-0" />
            <span className="font-bold text-xs text-gray-800">Biossegurança Hospitalar</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 bg-[#FAF8F9] rounded-xl border border-pink-100/60">
            <User size={18} className="text-[#D4567D] shrink-0" />
            <span className="font-bold text-xs text-gray-800">Especialistas 60+</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 bg-[#FAF8F9] rounded-xl border border-pink-100/60">
            <HomeIcon size={18} className="text-[#D4567D] shrink-0" />
            <span className="font-bold text-xs text-gray-800">Home Care VIP</span>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default LocationTemplate;
