
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
    <section className="bg-[#F9FAFB] py-16 md:py-24 overflow-hidden relative border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="relative flex items-center justify-center">
              <div className="bg-[#D4567D] p-2 rounded-full shadow-md text-white">
                <BadgeCheck size={24} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#B84A6B] uppercase tracking-wider text-xs">Google Reviews</span>
              <span className="font-bold text-gray-800 uppercase tracking-widest text-xs">AVALIAÇÕES REAIS VERIFICADAS</span>
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Nossas Divas Amam os Resultados
          </h2>
          
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={22} />)}
            </div>
            <span className="font-bold text-xl text-gray-900">4.9 / 5.0</span>
            <span className="text-gray-700 font-medium text-base">baseado em 155+ avaliações no Google</span>
          </div>
          
          <p className="text-lg text-gray-800 leading-relaxed mb-8 font-normal">
            Especialistas em mulheres de 35 a 100 anos (com foco especial em 50+ e 60+). Atendimento 100% indolor, no conforto da sua residência ou em nosso estúdio.
          </p>
          
          <div className="flex flex-col items-start">
            <a 
              href={getWhatsAppLink('Seção Avaliações')}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[50px] bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3.5 rounded-2xl font-bold text-base transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </a>
            <span className="text-xs text-gray-500 mt-1.5 font-medium">Quero minha transformação</span>
          </div>
        </div>

        {/* Reviews Cards List */}
        <div className="relative max-h-[600px] overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-xl">
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex flex-col gap-5 py-6">
            {GOOGLE_REVIEWS.slice(0, 4).map((review, idx) => (
              <div 
                key={idx} 
                onClick={() => openModal(review, idx)}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#D4567D] transition-all cursor-pointer group"
                role="button"
                tabIndex={0}
                aria-label={`Ver avaliação de ${review.name}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 min-w-[48px] min-h-[48px] bg-[#FDF2F8] rounded-full flex items-center justify-center font-bold text-[#D4567D] border border-[#D4567D]/30 text-lg">
                      {review.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">{review.name}</h4>
                      <p className="text-xs text-gray-600 font-medium">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2.5 py-1 rounded-lg font-bold text-xs border border-green-200">
                    <BadgeCheck size={14} /> Verificada
                  </div>
                </div>
                
                <div className="flex text-amber-400 mb-3">
                  {[...Array(review.stars)].map((_, i) => <Star key={i} fill="currentColor" size={18} />)}
                </div>
                
                <p className="text-gray-800 text-base italic leading-relaxed">"{review.text}"</p>
                <span className="text-[#D4567D] text-sm font-bold mt-4 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ler avaliação completa <ChevronRight size={16} />
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

