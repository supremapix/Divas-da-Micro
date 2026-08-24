import React, { useState, useEffect, useRef } from 'react';
import { Facebook, MessageCircle, ExternalLink, RefreshCw, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { getWhatsAppLink } from '../constants';
import ButterflyLogo from './ButterflyLogo';

interface FacebookFeedProps {
  id?: string;
  className?: string;
}

const FACEBOOK_PAGE_URL = 'https://www.facebook.com/divasespacodabelezacuritiba';

const FacebookFeed: React.FC<FacebookFeedProps> = ({ id = 'post-facebook', className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(500);
  const [iframeLoaded, setIframeLoaded] = useState<boolean>(false);
  const [loadError, setLoadError] = useState<boolean>(false);
  const [keyCounter, setKeyCounter] = useState<number>(0);

  // ResizeObserver to adapt iframe width to container (Facebook Page Plugin min: 180, max: 500)
  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      if (containerRef.current) {
        const availableWidth = containerRef.current.getBoundingClientRect().width;
        // Facebook Page Plugin accepts widths between 180 and 500px
        const clampedWidth = Math.min(500, Math.max(180, Math.floor(availableWidth)));
        setContainerWidth(clampedWidth);
      }
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(() => {
      updateWidth();
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Timeout to detect if Facebook is blocked by ad-blocker or failed to load within 7 seconds
  useEffect(() => {
    setIframeLoaded(false);
    setLoadError(false);

    const timer = setTimeout(() => {
      if (!iframeLoaded) {
        // If still not marked loaded after 7s, reveal fallback options alongside or instead
        setLoadError(true);
      }
    }, 7000);

    return () => clearTimeout(timer);
  }, [keyCounter, containerWidth]);

  const handleReload = () => {
    setLoadError(false);
    setIframeLoaded(false);
    setKeyCounter(prev => prev + 1);
  };

  // Official Facebook Page Plugin URL with timeline tab and responsive parameters
  const encodedPageUrl = encodeURIComponent(FACEBOOK_PAGE_URL);
  const iframeSrc = `https://www.facebook.com/plugins/page.php?href=${encodedPageUrl}&tabs=timeline&width=${containerWidth}&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`;

  return (
    <section 
      id={id} 
      className={`bg-white rounded-2xl shadow-sm border border-pink-100/80 overflow-hidden ${className}`}
    >
      {/* Header do Post / Seção no Feed */}
      <div className="p-3.5 sm:p-5 flex items-center justify-between gap-2 border-b border-gray-100">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#1877F2]/10 border border-[#1877F2]/30 flex items-center justify-center p-1.5 shrink-0 text-[#1877F2]">
            <Facebook size={22} className="fill-[#1877F2]" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="font-bold text-gray-900 text-sm sm:text-base truncate">Divas da Micro no Facebook</span>
              <span className="bg-[#1877F2] text-white p-0.5 rounded-full shrink-0 flex items-center justify-center" title="Página Oficial">
                <CheckCircle2 size={11} />
              </span>
            </div>
            <span className="text-[11px] sm:text-xs text-gray-500 truncate block mt-0.5">
              @divasespacodabelezacuritiba • Feed Oficial de Posts
            </span>
          </div>
        </div>

        <span className="shrink-0 text-[10px] sm:text-xs font-bold text-[#1877F2] bg-[#1877F2]/10 px-2.5 sm:px-3 py-1 rounded-full border border-[#1877F2]/20 flex items-center gap-1 whitespace-nowrap">
          <Facebook size={12} className="fill-[#1877F2]" />
          Facebook Oficial
        </span>
      </div>

      {/* Título e Descrição da Seção */}
      <div className="p-4 sm:p-6 pb-3 space-y-2">
        <div className="inline-flex items-center gap-1.5 bg-[#FDF2F8] border border-pink-200 text-[#B84A6B] px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
          <Sparkles size={12} className="text-[#D4567D]" />
          <span>Acompanhe Nossas Publicações</span>
        </div>

        <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-gray-900 leading-snug tracking-tight">
          Veja Nossos Posts e Transformações no Facebook
        </h3>
        
        <p className="text-xs sm:text-sm text-gray-700 font-normal leading-[1.45]">
          Acompanhe em tempo real nossas postagens, dicas de cuidados para pele madura 60+, fotos de procedimentos e novidades em Curitiba diretamente no feed oficial:
        </p>
      </div>

      {/* Container Responsivo do Facebook Page Plugin */}
      <div className="px-3 sm:px-6 pb-4">
        <div 
          ref={containerRef}
          className="w-full max-w-[500px] mx-auto bg-[#F8F9FA] rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden flex flex-col items-center justify-center min-h-[480px] sm:min-h-[600px] relative"
        >
          {/* Skeleton / Loading Indicator */}
          {!iframeLoaded && !loadError && (
            <div className="absolute inset-0 z-10 p-4 sm:p-6 flex flex-col gap-3 bg-white animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full shrink-0"></div>
                <div className="space-y-1.5 flex-1">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                </div>
              </div>
              <div className="h-32 bg-gray-100 rounded-xl w-full"></div>
              <div className="h-44 bg-gray-50 rounded-xl w-full"></div>
              <div className="text-center pt-2">
                <span className="text-xs text-gray-400 font-medium">Carregando feed oficial do Facebook...</span>
              </div>
            </div>
          )}

          {/* Iframe Oficial do Facebook Page Plugin */}
          <iframe
            key={keyCounter}
            title="Facebook Page Feed Divas da Micro"
            src={iframeSrc}
            width={containerWidth}
            height="600"
            style={{
              border: 'none',
              overflow: 'hidden',
              maxWidth: '100%',
              width: `${containerWidth}px`,
              minHeight: '480px',
              height: '600px'
            }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            onLoad={() => {
              setIframeLoaded(true);
              setLoadError(false);
            }}
            className={`transition-opacity duration-300 w-full ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Fallback caso o iframe seja bloqueado por navegadores, extensões ou privacidade */}
          {loadError && (
            <div className="p-4 sm:p-6 text-center space-y-3.5 w-[92%] max-w-sm mx-auto bg-white rounded-2xl my-4 border border-pink-100 shadow-sm">
              <div className="w-12 h-12 bg-[#1877F2]/10 text-[#1877F2] rounded-full flex items-center justify-center mx-auto border border-[#1877F2]/20">
                <Facebook size={24} className="fill-[#1877F2]" />
              </div>

              <div className="space-y-1">
                <h4 className="font-serif font-bold text-gray-900 text-sm sm:text-base">
                  Divas Espaço da Beleza Curitiba
                </h4>
                <p className="text-xs text-gray-600 leading-[1.4] font-normal px-1">
                  Se o widget do Facebook não carregou devido ao bloqueador de anúncios ou privacidade do navegador, você pode acessar diretamente:
                </p>
              </div>

              <div className="pt-1 flex flex-col gap-2 w-full px-1">
                <a
                  href={FACEBOOK_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[42px] px-3 bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all active:scale-98 text-center"
                >
                  <Facebook size={16} className="fill-white shrink-0" />
                  <span className="truncate">Ver Página no Facebook</span>
                  <ExternalLink size={14} className="shrink-0" />
                </a>

                <button
                  onClick={handleReload}
                  type="button"
                  className="w-full min-h-[40px] px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold text-xs flex items-center justify-center gap-1.5 transition-all text-center active:scale-98"
                >
                  <RefreshCw size={13} className="shrink-0" />
                  <span>Tentar Recarregar Feed</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Barra de Ações e Links Oficiais no Rodapé do Bloco */}
      <div className="p-3 sm:p-4 bg-[#FAF8F9] border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 text-xs text-gray-600 font-medium text-center sm:text-left">
          <ShieldCheck size={16} className="text-[#D4567D] shrink-0" />
          <span>Curta nossa página e acompanhe os depoimentos diários</span>
        </div>

        <div className="grid grid-cols-1 sm:flex items-center gap-2 w-full sm:w-auto">
          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[42px] h-10 px-4 rounded-xl bg-[#1877F2] hover:bg-[#166FE5] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all active:scale-98 text-center"
          >
            <Facebook size={16} className="fill-white shrink-0" />
            <span>Seguir no Facebook</span>
          </a>

          <a
            href={getWhatsAppLink('Feed Facebook Oficial')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[42px] h-10 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-xs transition-all active:scale-98 text-center"
          >
            <MessageCircle size={16} className="shrink-0" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FacebookFeed;
