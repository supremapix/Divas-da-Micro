
import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, MessageCircle, ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { getWhatsAppLink } from '../constants';
import ButterflyLogo from './ButterflyLogo';
import ImageWithFallback from './ImageWithFallback';

export interface GalleryItem {
  title: string;
  desc: string;
  url: string;
  alt: string;
  cat: string;
}

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    title: "Harmonização e Simetria Facial",
    desc: "Alinhamento e simetria delicada para valorizar a expressão natural em pele madura, com técnica 100% indolor.",
    url: "/images/armonizacao-simetria-facial.jpg",
    alt: "Harmonização e simetria facial em mulher madura, Curitiba",
    cat: "Harmonização 50+"
  },
  {
    title: "Correção de Sobrancelhas Cinzas",
    desc: "Neutralização de pigmento antigo escurecido ou azulado e novo desenho harmônico e elegante.",
    url: "/images/correcao-de-sobrancelhas-cinza.jpg",
    alt: "Correção de sobrancelhas cinzas em pele madura, Curitiba",
    cat: "Sobrancelhas 50+"
  },
  {
    title: "Revitalização Labial Madura",
    desc: "Neutralização de tons arroxeados e definição natural do contorno labial para lábios saudáveis e rejuvenescidos.",
    url: "/images/revitalizacao-labial-madura.jpg",
    alt: "Revitalização labial em mulher madura, Curitiba",
    cat: "Lábios 60+"
  },
  {
    title: "Suavização de Delineado de Olhos",
    desc: "Correção de traços expandidos em pálpebras maduras, criando efeito lifting leve e olhar iluminado.",
    url: "/images/suavizacao-delineado-de-olhos.jpg",
    alt: "Suavização de delineado de olhos em mulher madura, Curitiba",
    cat: "Olhos 55+"
  }
];

const InteractiveGallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Sync lightbox open state with body class & custom event for sticky footer
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.classList.add('lightbox-active');
      window.dispatchEvent(new CustomEvent('lightboxToggle', { detail: { open: true } }));
    } else {
      document.body.classList.remove('lightbox-active');
      window.dispatchEvent(new CustomEvent('lightboxToggle', { detail: { open: false } }));
      setIsZoomed(false);
    }
    return () => {
      document.body.classList.remove('lightbox-active');
      window.dispatchEvent(new CustomEvent('lightboxToggle', { detail: { open: false } }));
    };
  }, [selectedIndex]);

  // Keyboard navigation (Escape, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsZoomed(false);
    setSelectedIndex(prev => (prev === null || prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsZoomed(false);
    setSelectedIndex(prev => (prev === null || prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45; // pixels
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentItem = selectedIndex !== null ? GALLERY_IMAGES[selectedIndex] : null;

  return (
    <div className="w-full">
      {/* Gallery Cards Grid - 100% width on mobile with proportional images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {GALLERY_IMAGES.map((img, i) => (
          <div 
            key={i} 
            className="rounded-2xl sm:rounded-3xl bg-white border border-pink-100/90 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group"
          >
            {/* Image Container - Proportional height without cropping */}
            <div 
              onClick={() => {
                setSelectedIndex(i);
                setIsZoomed(false);
              }}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3] overflow-hidden bg-gray-950 cursor-pointer flex items-center justify-center"
              title="Toque para abrir em tela cheia com zoom"
            >
              <ImageWithFallback 
                src={img.url} 
                alt={img.alt} 
                fallbackTitle={img.title}
                fallbackCategory={img.cat}
                className="w-full h-full object-contain sm:object-cover transition-transform duration-500 group-hover:scale-105 select-none" 
                loading="lazy"
              />
              
              {/* Category Badge */}
              <span className="absolute top-3 left-3 bg-[#D4567D] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg shadow-md border border-white/20">
                {img.cat}
              </span>

              {/* Fullscreen Hint Pill */}
              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-md group-hover:bg-[#D4567D] transition-colors">
                <Maximize2 size={13} />
                <span className="text-[11px]">Ampliar</span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 sm:p-5">
                <span className="text-white font-serif font-bold text-base sm:text-lg drop-shadow block">
                  {img.title}
                </span>
                <span className="text-pink-300 text-xs font-medium">Toque para ver em alta resolução</span>
              </div>
            </div>

            {/* Content & Action Section */}
            <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between gap-4 bg-white">
              <div>
                <h4 className="text-lg sm:text-xl font-serif font-bold text-gray-900 mb-1.5">
                  {img.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  {img.desc}
                </p>
              </div>

              <div className="flex flex-col items-center pt-1">
                <a 
                  href={getWhatsAppLink(`Galeria Card - ${img.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[46px] bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-4 rounded-xl text-sm sm:text-base font-bold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 text-center"
                >
                  <MessageCircle size={19} />
                  <span>Consultar no WhatsApp</span>
                </a>
                <span className="text-[11px] sm:text-xs text-gray-500 mt-1.5 font-medium text-center">
                  Avaliação gratuita por foto e sem compromisso
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ======================================================================= */}
      {/* FULLSCREEN LIGHTBOX COM NAVEGAÇÃO, ZOOM E GESTO SWIPE MOBILE           */}
      {/* ======================================================================= */}
      {currentItem && selectedIndex !== null && (
        <div 
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 z-50 bg-black/95 sm:bg-black/90 flex items-center justify-center p-0 sm:p-4 backdrop-blur-md select-none animate-in fade-in duration-200"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full h-full sm:h-auto sm:max-h-[96vh] sm:max-w-5xl bg-gray-950 text-white sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col relative border-0 sm:border border-pink-500/30"
          >
            {/* Header do Lightbox */}
            <div className="p-3.5 sm:p-4 bg-black/80 border-b border-gray-800 flex items-center justify-between z-20 shrink-0">
              <div className="flex items-center gap-2.5">
                <ButterflyLogo size={24} />
                <div>
                  <h3 className="text-white font-serif font-bold text-sm sm:text-lg leading-tight line-clamp-1">
                    {currentItem.title}
                  </h3>
                  <span className="text-pink-400 text-[11px] sm:text-xs font-semibold">
                    Foto {selectedIndex + 1} de {GALLERY_IMAGES.length} • {currentItem.cat}
                  </span>
                </div>
              </div>

              {/* Botões de Controle (Zoom e Fechar) */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-sm"
                  title={isZoomed ? "Reduzir Zoom" : "Ampliar Imagem"}
                  aria-label="Zoom"
                >
                  {isZoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
                </button>
                <button 
                  onClick={() => setSelectedIndex(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-base transition-colors"
                  aria-label="Fechar"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Imagem Principal em Tela Cheia com Ajuste Perfeito */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[50vh] sm:min-h-[60vh] md:min-h-[65vh]">
              {/* Seta Anterior (Desktop & Mobile) */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#D4567D] text-white flex items-center justify-center backdrop-blur-sm transition-all border border-white/20 shadow-xl active:scale-95"
                aria-label="Foto anterior"
              >
                <ChevronLeft size={26} />
              </button>

              {/* Seta Próxima (Desktop & Mobile) */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#D4567D] text-white flex items-center justify-center backdrop-blur-sm transition-all border border-white/20 shadow-xl active:scale-95"
                aria-label="Próxima foto"
              >
                <ChevronRight size={26} />
              </button>

              {/* Elemento de Imagem com suporte a Zoom */}
              <div 
                className={`w-full h-full flex items-center justify-center transition-transform duration-300 ${
                  isZoomed ? 'scale-150 sm:scale-125 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <ImageWithFallback 
                  src={currentItem.url} 
                  alt={currentItem.alt}
                  fallbackTitle={currentItem.title}
                  fallbackCategory={currentItem.cat}
                  className="max-w-full max-h-full object-contain select-none"
                />
              </div>

              {/* Dica de swipe em mobile */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-gray-300 sm:hidden pointer-events-none">
                ← Deslize para navegar →
              </div>
            </div>

            {/* Rodapé com Informações Técnicas e CTA WhatsApp */}
            <div className="p-4 sm:p-5 bg-gray-900 border-t border-gray-800 shrink-0 space-y-3">
              <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                {currentItem.desc} Atendimento com anestésico manipulado 100% indolor em Curitiba e RMC.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                {/* Indicador de Bolinhas das Fotos */}
                <div className="flex items-center gap-1.5">
                  {GALLERY_IMAGES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedIndex(idx);
                        setIsZoomed(false);
                      }}
                      className={`h-2 rounded-full transition-all ${
                        selectedIndex === idx ? 'w-6 bg-[#D4567D]' : 'w-2 bg-gray-600 hover:bg-gray-400'
                      }`}
                      aria-label={`Ir para foto ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedIndex(null)}
                    className="flex-1 sm:flex-initial min-h-[42px] px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-bold text-xs sm:text-sm transition-all"
                  >
                    Fechar
                  </button>
                  <a
                    href={getWhatsAppLink(`Lightbox - ${currentItem.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial min-h-[42px] px-5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageCircle size={18} />
                    <span>Consultar este Procedimento</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveGallery;

