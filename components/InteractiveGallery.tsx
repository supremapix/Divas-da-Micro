
import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';
import { getWhatsAppLink } from '../constants';

const GALLERY_IMAGES = [
  {
    title: "Correção de Sobrancelhas Cinzas",
    desc: "Neutralização de pigmento antigo escurecido e novo desenho harmônico para mulher de 58 anos em Curitiba.",
    url: "https://www.divasespacodabeleza.com.br/imagem-do-whatsapp-de-2024-10-20-s-15.00.26-3df1d2ba-1200x1600.jpeg",
    alt: "correção de micropigmentação de sobrancelha em mulher acima de 50 anos, Curitiba",
    cat: "Sobrancelhas 50+"
  },
  {
    title: "Revitalização Labial Madura",
    desc: "Neutralização de tons arroxeados e definição do contorno labial com tom natural saudável.",
    url: "https://www.divasespacodabeleza.com.br/cuidados-ps-micropigmentao-de-labios-labial-curitiba-240x242.png",
    alt: "correção de micropigmentação labial em mulher 60 anos Curitiba",
    cat: "Lábios 60+"
  },
  {
    title: "Suavização de Delineado de Olhos",
    desc: "Correção de traços expandidos em pálpebras maduras, criando efeito lifting leve no olhar.",
    url: "https://www.divasespacodabeleza.com.br/correo-de-micropigmentao-de-sobrancelhas-em-curitiba-5-360x771.jpg",
    alt: "correção de micropigmentação de olhos em mulher madura Curitiba",
    cat: "Olhos 55+"
  },
  {
    title: "Harmonização e Simetria Facial",
    desc: "Novo alinhamento de sobrancelhas com técnica suave e totalmente indolor em domicílio.",
    url: "https://www.divasespacodabeleza.com.br/imagem-do-whatsapp-de-2024-10-20-s-14.36.33-423b191e-416x891.jpg",
    alt: "reconstrução e correção de micropigmentação de sobrancelhas em pele madura Curitiba",
    cat: "Sobrancelhas 65+"
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

                <a 
                  href={getWhatsAppLink(`Galeria - ${img.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-2xl text-base font-bold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 text-center"
                >
                  <MessageCircle size={20} />
                  <span>Avaliação Grátis</span>
                </a>
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
            <div className="pt-2">
              <a 
                href={getWhatsAppLink('CTA Galeria')}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[52px] bg-[#D4567D] hover:bg-[#B84A6B] text-white px-8 py-4 rounded-2xl font-bold text-lg inline-flex items-center gap-3 shadow-xl transition-all active:scale-95"
              >
                <MessageCircle size={22} />
                <span>Agendar Avaliação Domiciliar</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InteractiveGallery;
