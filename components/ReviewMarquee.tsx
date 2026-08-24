
import React, { useState } from 'react';
import { Star, X, ChevronLeft, ChevronRight, BadgeCheck, ShieldCheck, MessageCircle } from 'lucide-react';
import { GOOGLE_REVIEWS, getWhatsAppLink } from '../constants';

const ReviewMarquee: React.FC = () => {
  const [selectedReview, setSelectedReview] = useState<typeof GOOGLE_REVIEWS[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (review: typeof GOOGLE_REVIEWS[0], index: number) => {
    setSelectedReview(review);
    setCurrentIndex(index);
  };

  const nextReview = () => {
    const nextIdx = (currentIndex + 1) % GOOGLE_REVIEWS.length;
    setSelectedReview(GOOGLE_REVIEWS[nextIdx]);
    setCurrentIndex(nextIdx);
  };

  const prevReview = () => {
    const prevIdx = (currentIndex - 1 + GOOGLE_REVIEWS.length) % GOOGLE_REVIEWS.length;
    setSelectedReview(GOOGLE_REVIEWS[prevIdx]);
    setCurrentIndex(prevIdx);
  };

  return (
    <section className="bg-[#F9FAFB] py-6 sm:py-10 md:py-16 overflow-hidden relative border-t border-gray-100 rounded-2xl sm:rounded-3xl">
      <div className="w-full px-2.5 sm:px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
        <div className="space-y-3 sm:space-y-3.5">
          {/* Selo Compacto e Alinhado */}
          <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-pink-100 shadow-xs">
            <div className="bg-[#D4567D] p-1 rounded-full text-white shrink-0 flex items-center justify-center">
              <BadgeCheck size={14} />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-[#B84A6B] uppercase tracking-wider text-[10px]">Google Reviews</span>
              <span className="text-gray-300 text-[10px]">|</span>
              <span className="font-bold text-gray-800 uppercase tracking-wider text-[10px]">Avaliações Verificadas</span>
            </div>
          </div>
          
          {/* Título Compacto */}
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight">
            Nossas Divas Amam os Resultados
          </h2>
          
          {/* Estrelas + Nota + Quantidade em Linha Única Compacta */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
            <div className="flex text-amber-400 gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={15} />)}
            </div>
            <span className="font-bold text-gray-900 text-sm">4.9 / 5.0</span>
            <span className="text-gray-500 text-xs">· baseado em 155+ avaliações no Google</span>
          </div>
          
          {/* Parágrafo com Line-Height Compacto e Alinhado */}
          <p className="text-xs sm:text-sm text-gray-700 leading-[1.45] font-normal">
            Especialistas em mulheres de 35 a 100 anos (com foco especial em 50+ e 60+). Atendimento 100% indolor, no conforto da sua residência ou em nosso estúdio.
          </p>
          
          {/* Botão WhatsApp & Apoio com Espaçamento Ajustado */}
          <div className="pt-1 flex flex-col items-start gap-1">
            <a 
              href={getWhatsAppLink('Seção Avaliações')}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[40px] h-10 px-5 sm:px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-xs active:scale-98"
            >
              <MessageCircle size={17} />
              <span>Falar no WhatsApp</span>
            </a>
            <span className="text-[11px] text-gray-500 font-medium ml-1">Quero minha transformação</span>
          </div>
        </div>

        {/* Reviews Cards List */}
        <div className="relative max-h-[500px] overflow-hidden rounded-2xl border border-gray-200 bg-white p-3.5 sm:p-5 shadow-md">
          <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex flex-col gap-3 py-2">
            {GOOGLE_REVIEWS.slice(0, 4).map((review, idx) => (
              <div 
                key={idx} 
                onClick={() => openModal(review, idx)}
                className="bg-gray-50 border border-gray-200/80 rounded-xl p-3 sm:p-4 shadow-xs hover:shadow-sm hover:border-[#D4567D] transition-all cursor-pointer group"
                role="button"
                tabIndex={0}
                aria-label={`Ver avaliação de ${review.name}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 min-w-[32px] min-h-[32px] bg-[#FDF2F8] rounded-full flex items-center justify-center font-bold text-[#D4567D] border border-[#D4567D]/30 text-xs">
                      {review.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs sm:text-sm">{review.name}</h4>
                      <p className="text-[10px] text-gray-500 font-medium">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-0.5 rounded-md font-bold text-[10px] border border-green-200">
                    <BadgeCheck size={12} /> Verificada
                  </div>
                </div>
                
                <div className="flex text-amber-400 mb-1.5 gap-0.5">
                  {[...Array(review.stars)].map((_, i) => <Star key={i} fill="currentColor" size={13} />)}
                </div>
                
                <p className="text-gray-700 text-xs sm:text-sm italic leading-[1.45]">"{review.text}"</p>
                <span className="text-[#D4567D] text-[11px] font-bold mt-2 flex items-center gap-1 group-hover:gap-1.5 transition-all">
                  Ler completa <ChevronRight size={13} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Overlay for Full Review */}
      {selectedReview && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-xl w-full relative overflow-hidden shadow-2xl p-6 md:p-10 border border-gray-200">
            <button 
              onClick={() => setSelectedReview(null)}
              className="w-12 h-12 min-w-[48px] min-h-[48px] absolute top-4 right-4 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-20 text-gray-800"
              aria-label="Fechar depoimento"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#FDF2F8] rounded-full flex items-center justify-center font-bold text-2xl text-[#D4567D] border-2 border-[#D4567D]/30 mb-4">
                {selectedReview.name[0]}
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-gray-900">{selectedReview.name}</h3>
              <div className="flex text-amber-400 my-3">
                {[...Array(selectedReview.stars)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
              </div>
              <div className="flex items-center gap-2 text-green-700 text-sm font-semibold mb-6">
                <ShieldCheck size={18} />
                <span>Avaliação Verificada no Google</span>
              </div>

              <blockquote className="text-lg md:text-xl text-gray-800 italic leading-relaxed mb-8 font-normal">
                "{selectedReview.text}"
              </blockquote>

              <div className="flex justify-between items-center w-full px-4">
                <button 
                  onClick={prevReview} 
                  className="w-12 h-12 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#D4567D] hover:text-white transition-all"
                  aria-label="Avaliação anterior"
                >
                  <ChevronLeft size={24} />
                </button>
                <span className="text-sm font-bold text-gray-600">
                  {currentIndex + 1} de {GOOGLE_REVIEWS.length}
                </span>
                <button 
                  onClick={nextReview} 
                  className="w-12 h-12 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#D4567D] hover:text-white transition-all"
                  aria-label="Próxima avaliação"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ReviewMarquee;

