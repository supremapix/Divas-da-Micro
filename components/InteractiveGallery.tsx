
import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';
import { getWhatsAppLink } from '../constants';

const GALLERY_IMAGES = [
  {
    title: "Harmonização e Simetria Facial",
    desc: "Alinhamento e simetria delicada para valorizar a expressão natural em pele madura, com técnica 100% indolor.",
    url: "https://img.supremasite.com.br/divas/armonizacao-simetria-facial.jpg",
    alt: "Harmonização e simetria facial em mulher madura, Curitiba",
    cat: "Harmonização 50+"
  },
  {
    title: "Correção de Sobrancelhas Cinzas",
    desc: "Neutralização de pigmento antigo escurecido ou azulado e novo desenho harmônico e elegante.",
    url: "https://img.supremasite.com.br/divas/correcao-de-sobrancelhas-cinza.jpg",
    alt: "Correção de sobrancelhas cinzas em pele madura, Curitiba",
    cat: "Sobrancelhas 50+"
  },
  {
    title: "Revitalização Labial Madura",
    desc: "Neutralização de tons arroxeados e definição natural do contorno labial para lábios saudáveis e rejuvenescidos.",
    url: "https://img.supremasite.com.br/divas/revitalizacao-labial-madura.jpg",
    alt: "Revitalização labial em mulher madura, Curitiba",
    cat: "Lábios 60+"
  },
  {
    title: "Suavização de Delineado de Olhos",
    desc: "Correção de traços expandidos em pálpebras maduras, criando efeito lifting leve e olhar iluminado.",
    url: "https://img.supremasite.com.br/divas/suavizacao-delineado-de-olhos.jpg",
    alt: "Suavização de delineado de olhos em mulher madura, Curitiba",
    cat: "Olhos 55+"
  }
];

const InteractiveGallery: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-[#D4567D] font-bold uppercase tracking-widest text-sm mb-2 block">
            Resultados Reais
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Galeria de Transformações em Mulheres Maduras
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed font-normal">
            Veja por que somos referência em correção para mulheres de 35 a 100 anos (com foco especial em 50+ e 60+) em Curitiba e RMC.
          </p>
        </div>

        {/* Gallery Cards - Visible on mobile and desktop without hover traps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_IMAGES.map((img, i) => (
            <div 
              key={i} 
              className="rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-100">
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#D4567D] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-md">
                  {img.cat}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-grow justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-serif font-bold text-gray-900 mb-2">
                    {img.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed font-normal">
                    {img.desc}
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <a 
                    href={getWhatsAppLink(`Galeria - ${img.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[48px] bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-2xl text-base font-bold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 text-center"
                  >
                    <MessageCircle size={20} />
                    <span>WhatsApp</span>
                  </a>
                  <span className="text-xs text-gray-500 mt-1.5 font-medium">Avaliação gratuita e sem compromisso</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout box */}
        <div className="mt-14 text-center">
          <div className="bg-[#FDF2F8] p-8 md:p-12 rounded-[2.5rem] border border-[#D4567D]/30 max-w-4xl mx-auto space-y-4">
            <Sparkles className="text-[#D4567D] mx-auto" size={40} />
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
              Pronta para Recuperar a Harmonia do Seu Olhar?
            </h3>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto leading-relaxed font-normal">
              Utilizamos apenas anestésicos manipulados de alta potência e técnicas suaves para garantir que seu atendimento seja 100% confortável, seguro e relaxante.
            </p>
            <div className="pt-2 flex flex-col items-center">
              <a 
                href={getWhatsAppLink('CTA Galeria')}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[52px] bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-2xl font-bold text-lg inline-flex items-center gap-3 shadow-xl transition-all active:scale-95"
              >
                <MessageCircle size={22} />
                <span>WhatsApp</span>
              </a>
              <span className="text-xs text-gray-600 mt-1.5 font-medium">Agende seu atendimento domiciliar VIP</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InteractiveGallery;
