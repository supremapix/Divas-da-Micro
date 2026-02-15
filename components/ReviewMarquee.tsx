
import React, { useState } from 'react';
import { Star, X, ChevronLeft, ChevronRight, BadgeCheck, ShieldCheck } from 'lucide-react';
import { GOOGLE_REVIEWS } from '../constants';

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
    <section className="bg-gray-50 py-24 overflow-hidden relative">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[#C5A059]/20 blur-lg rounded-full animate-pulse"></div>
              <div className="bg-gradient-to-br from-[#C5A059] to-[#F1D592] p-2 rounded-full shadow-lg relative z-10 border border-white/50">
                <BadgeCheck className="text-white" size={24} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#1e40af] uppercase tracking-[0.2em] text-[10px]">Google Reviews</span>
              <span className="font-bold text-gray-700 uppercase tracking-widest text-xs">AVALIAÇÕES VERIFICADAS</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Nossas Divas Amam os Resultados</h2>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
            </div>
            <span className="font-bold text-lg">4.9/5.0</span>
            <span className="text-gray-400 font-medium ml-2">baseado em 155+ avaliações no Google</span>
          </div>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Nossa maior satisfação é ver o sorriso de volta no rosto de nossas clientes. Especialistas em peles maduras com procedimentos 100% indolores e resultados comprovados.
          </p>
          
          <a href="#contato" className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all inline-block shadow-lg">
            Veja mais no Google Maps
          </a>
        </div>

        <div className="relative h-[600px] overflow-hidden rounded-[3rem] border border-gray-200 bg-white p-6 shadow-2xl">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex flex-col gap-6 animate-marquee-vertical py-12">
            {[...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS].map((review, idx) => (
              <div 
                key={idx} 
                onClick={() => openModal(review, idx % GOOGLE_REVIEWS.length)}
                className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:border-[#D4567D] transition-all cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <ShieldCheck size={80} className="text-[#D4567D]" />
                </div>
                
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-[#D4567D] border border-gray-200">
                      {review.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{review.name}</h4>
                      <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded text-[#1877f2] font-bold text-[9px] border border-blue-100 uppercase">
                    <BadgeCheck size={10} /> Verificada
                  </div>
                </div>
                
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.stars)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
                </div>
                
                <p className="text-gray-600 text-sm italic leading-relaxed line-clamp-3">"{review.text}"</p>
                <span className="text-[#D4567D] text-[10px] font-bold mt-6 flex items-center gap-2 group-hover:gap-3 transition-all">
                  Ler avaliação completa <ChevronRight size={12} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedReview && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-white rounded-[3rem] max-w-2xl w-full relative overflow-hidden animate-in fade-in zoom-in duration-300 shadow-2xl">
            <button 
              onClick={() => setSelectedReview(null)}
              className="absolute top-8 right-8 p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-20"
            >
              <X size={24} />
            </button>

            <div className="p-12 md:p-16">
              <div className="flex flex-col items-center text-center mb-10">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-[#D4567D]/10 rounded-full flex items-center justify-center font-bold text-3xl text-[#D4567D] border-2 border-[#D4567D]/20">
                    {selectedReview.name[0]}
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-md">
                    <BadgeCheck className="text-green-500" size={28} />
                  </div>
                </div>
                
                <h3 className="text-3xl font-serif font-bold text-gray-900">{selectedReview.name}</h3>
                <div className="flex text-yellow-400 my-4">
                  {[...Array(selectedReview.stars)].map((_, i) => <Star key={i} fill="currentColor" size={28} />)}
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm font-medium uppercase tracking-widest">
                  <ShieldCheck size={16} className="text-green-500" />
                  <span>Avaliação Verificada pelo Google</span>
                </div>
              </div>

              <blockquote className="text-2xl text-gray-700 italic text-center leading-relaxed mb-12 font-light">
                "{selectedReview.text}"
              </blockquote>

              <div className="flex justify-between items-center px-4">
                <button onClick={prevReview} className="p-4 rounded-full bg-gray-50 hover:bg-[#D4567D] hover:text-white transition-all shadow-sm">
                  <ChevronLeft size={28} />
                </button>
                <div className="flex gap-3">
                  {GOOGLE_REVIEWS.map((_, i) => (
                    <div key={i} className={`h-2 rounded-full transition-all ${i === currentIndex ? 'bg-[#D4567D] w-8' : 'bg-gray-200 w-2'}`}></div>
                  ))}
                </div>
                <button onClick={nextReview} className="p-4 rounded-full bg-gray-50 hover:bg-[#D4567D] hover:text-white transition-all shadow-sm">
                  <ChevronRight size={28} />
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
