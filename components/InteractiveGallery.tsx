
import React from 'react';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../constants';

const GALLERY_IMAGES = [
  {
    title: "Sobrancelhas Perfeitas",
    desc: "Correção de micropigmentação antiga com técnica russa. Design harmônico e cor neutralizada.",
    url: "/imagem-do-whatsapp-de-2024-10-20-s-15.00.26-3df1d2ba-1200x1600.jpeg",
    cat: "Sobrancelhas"
  },
  {
    title: "Lábios Revitalizados",
    desc: "Neutralização de tons escuros e devolução do volume visual saudável. 100% indolor.",
    url: "/cuidados-ps-micropigmentao-de-labios-labial-curitiba-240x242.png",
    cat: "Lábios"
  },
  {
    title: "Delineado Rejuvenecedor",
    desc: "Correção de traços expandidos em pálpebras maduras. Olhar mais aberto e expressivo.",
    url: "/correo-de-micropigmentao-de-sobrancelhas-em-curitiba-5-360x771.jpg",
    cat: "Olhos"
  },
  {
    title: "Harmonização de Sobrancelhas",
    desc: "Trabalho detalhado para corrigir assimetrias de anos. Resultados naturais.",
    url: "/imagem-do-whatsapp-de-2024-10-20-s-14.36.33-423b191e-416x891.jpg",
    cat: "Sobrancelhas"
  }
];

const InteractiveGallery: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#D4567D] font-bold uppercase tracking-widest text-xs mb-2 block">Nossos Resultados</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Galeria de Transformações</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja por que somos a escolha número 1 para mulheres 60+ em Curitiba. Resultados que devolvem a confiança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_IMAGES.map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl bg-gray-100 shadow-lg aspect-square">
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-[#D4567D] text-xs font-bold uppercase tracking-widest mb-2">{img.cat}</span>
                <h3 className="text-white text-xl font-serif font-bold mb-3">{img.title}</h3>
                <p className="text-gray-300 text-sm mb-6 line-clamp-2">{img.desc}</p>
                <a 
                  href={getWhatsAppLink(`Galeria - ${img.title}`)}
                  className="bg-[#D4567D] text-white py-3 px-6 rounded-full text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#b84a6b] transition-all"
                >
                  <MessageCircle size={18} /> Avaliação Grátis
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[#D4567D]/5 p-12 rounded-[3rem] border border-[#D4567D]/10 inline-block max-w-4xl">
            <Sparkles className="text-[#D4567D] mx-auto mb-6" size={48} />
            <h3 className="text-3xl font-serif font-bold mb-4">Pronta para a sua transformação?</h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Utilizamos apenas anestésicos premium e técnicas indolores para garantir que sua jornada de beleza seja confortável e segura.
            </p>
            <a 
              href={getWhatsAppLink('CTA Galeria')}
              className="bg-gray-900 text-white px-10 py-5 rounded-full font-bold text-lg inline-flex items-center gap-3 hover:bg-gray-800 transition-all shadow-xl"
            >
              Agendar Avaliação Domiciliar <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveGallery;
