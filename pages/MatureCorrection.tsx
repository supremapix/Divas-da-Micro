import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Heart, CheckCircle2, MessageCircle, Phone, Sparkles, Clock, MapPin, Eye, ArrowRight } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppLink } from '../constants';
import ReviewMarquee from '../components/ReviewMarquee';

const MatureCorrection: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Correção de Micropigmentação para Mulheres 50 e 60 Anos | Divas da Micro Curitiba";
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-16 sm:pt-20 pb-16 bg-[#FAF8F9]"
    >
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 md:py-16 bg-white border-b border-pink-100">
        <div className="w-full max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-2.5 sm:space-y-3.5">
            <div className="inline-flex items-center gap-1.5 bg-[#FDF2F8] border border-pink-200 text-[#B84A6B] px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <Sparkles size={13} className="text-[#D4567D]" />
              <span>Especialistas em Mulheres 60+</span>
            </div>

            <h1 className="text-xl sm:text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight tracking-tight">
              Correção de Micropigmentação para <span className="text-[#D4567D]">Mulheres 60+</span> em Curitiba
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-gray-700 max-w-2xl mx-auto leading-[1.45] font-normal">
              Resgate a beleza natural do seu olhar com técnicas suaves, indolores e desenvolvidas sob medida para as características únicas da pele madura.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-md mx-auto">
              <a 
                href={getWhatsAppLink('Página 60 Anos')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[40px] h-10 px-5 sm:px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-xs active:scale-98"
              >
                <MessageCircle size={17} /> 
                <span>Avaliação Gratuita no WhatsApp</span>
              </a>

              <a 
                href={CONTACT_INFO.phoneCall}
                className="w-full sm:w-auto min-h-[40px] h-10 px-4 bg-white border border-gray-300 text-gray-800 hover:text-[#D4567D] rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 active:scale-98"
              >
                <Phone size={15} /> 
                <span>Ligar</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Informative Articles em Cards Compactos */}
      <section className="py-6 sm:py-10 max-w-5xl mx-auto px-2.5 sm:px-4 md:px-6">
        <div className="space-y-4 sm:space-y-6">
          
          {/* Card 1 */}
          <article className="bg-white rounded-2xl sm:rounded-3xl border border-pink-100 shadow-xs p-4 sm:p-6 space-y-2.5">
            <h2 className="text-base sm:text-xl md:text-2xl font-serif font-bold text-gray-900 border-l-4 border-[#D4567D] pl-3 leading-snug">
              Por Que a Pele Madura Exige Técnicas Especiais de Correção?
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-[1.45] font-normal">
              Com o passar dos anos, a pele passa por transformações naturais: diminuição na espessura da derme, redução de colágeno e maior sensibilidade vascular. Mulheres 60+ que realizaram procedimentos antigos frequentemente enfrentam problemas como pigmentos azulados, cinzentos ou traços que perderam o formato.
            </p>
            <p className="text-xs sm:text-sm text-gray-700 leading-[1.45] font-normal">
              Na <strong>Divas da Micro</strong>, não utilizamos técnicas agressivas nem padronizadas. Nosso protocolo em Curitiba e RMC combina colorimetria corretiva de alta precisão com dermógrafos calibrados para deposição suave na camada dérmica correta.
            </p>
          </article>

          {/* Card 2 */}
          <article className="bg-[#FAF5F8] rounded-2xl sm:rounded-3xl border border-pink-200/70 shadow-xs p-4 sm:p-6 space-y-2.5">
            <h2 className="text-base sm:text-xl md:text-2xl font-serif font-bold text-gray-900 flex items-center gap-2 leading-snug">
              <Sparkles className="text-[#D4567D] shrink-0" size={22} />
              <span>Neutralização de Sobrancelhas Cinzas, Chumbo ou Avermelhadas</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-[1.45] font-normal">
              Um dos problemas mais comuns que atendemos diariamente em Curitiba é a sobrancelha que ficou "chumbada", cinza escura ou com reflexos alaranjados.
            </p>
            <p className="text-xs sm:text-sm text-gray-700 leading-[1.45] font-normal">
              Em vez de sessões dolorosas de despigmentação a laser, utilizamos a <strong>neutralização química com pigmentos corretores biocompatíveis</strong>, devolvendo o castanho natural e a luminosidade ao rosto.
            </p>
          </article>

          {/* Card 3 */}
          <article className="bg-white rounded-2xl sm:rounded-3xl border border-pink-100 shadow-xs p-4 sm:p-6 space-y-2.5">
            <h2 className="text-base sm:text-xl md:text-2xl font-serif font-bold text-gray-900 border-l-4 border-[#D4567D] pl-3 leading-snug">
              Correção de Delineado nos Olhos em Pálpebras Maduras
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-[1.45] font-normal">
              A região dos olhos na mulher 60+ apresenta flacidez natural na pálpebra superior. Traços antigos que se expandiram acabam pesando a expressão e dando ar de cansaço.
            </p>
            <p className="text-xs sm:text-sm text-gray-700 leading-[1.45] font-normal">
              Nossa técnica exclusiva suaviza traços endurecidos, criando um efeito lifting óptico que reabre o olhar de forma elegante e sutil, sem repuxar a pele.
            </p>
          </article>

          {/* Card 4 */}
          <article className="bg-white rounded-2xl sm:rounded-3xl border border-pink-100 shadow-xs p-4 sm:p-6 space-y-2.5">
            <h2 className="text-base sm:text-xl md:text-2xl font-serif font-bold text-gray-900 flex items-center gap-2 leading-snug">
              <Heart className="text-[#D4567D] shrink-0" size={22} />
              <span>Revitalização e Neutralização Labial na Maturidade</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-[1.45] font-normal">
              Com o tempo, os lábios perdem a definição do arco do cupido e o tom rosado saudável. A correção labial para mulheres maduras devolve cor, uniformidade e a sensação de lábios preenchidos e hidratados, utilizando tons naturais que rejuvenescem a face.
            </p>
          </article>

          {/* Card 5 */}
          <article className="bg-white rounded-2xl sm:rounded-3xl border border-pink-100 shadow-xs p-4 sm:p-6 space-y-2.5">
            <h2 className="text-base sm:text-xl md:text-2xl font-serif font-bold text-gray-900 border-l-4 border-[#D4567D] pl-3 leading-snug">
              Procedimento 100% Indolor: Conforto Absoluto com Anestésico Manipulado
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-[1.45] font-normal">
              Sabemos que o medo da dor impede muitas mulheres de corrigir uma micropigmentação que as incomoda há anos. Por isso, a Divas da Micro utiliza <strong>anestésicos tópicos manipulados de grau farmacêutico avançado</strong>.
            </p>
            <p className="text-xs sm:text-sm text-gray-700 leading-[1.45] font-normal">
              O anestésico é aplicado antes e durante todo o processo, permitindo que a sessão seja tão relaxante que a grande maioria de nossas clientes cochila tranquilamente durante o atendimento.
            </p>
          </article>

          {/* Card 6 - Atendimento Domiciliar */}
          <article className="bg-[#FAF5F8] rounded-2xl sm:rounded-3xl border border-pink-200/70 shadow-xs p-4 sm:p-6 space-y-2.5">
            <h2 className="text-base sm:text-xl md:text-2xl font-serif font-bold text-gray-900 flex items-center gap-2 leading-snug">
              <MapPin className="text-[#D4567D] shrink-0" size={22} />
              <span>Atendimento Domiciliar VIP: O Estúdio Completo na Sua Casa</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-[1.45] font-normal">
              Para maior comodidade, atendemos na sua própria residência em Curitiba (Batel, Água Verde, Bigorrilho, Cabral, Mercês, Santa Felicidade e todos os bairros) e em toda a Região Metropolitana.
            </p>
            <p className="text-xs sm:text-sm text-gray-700 leading-[1.45] font-normal">
              Levamos maca profissional higienizada, iluminação de precisão, instrumentos 100% descartáveis e seguimos padrões hospitalares rigorosos de biossegurança.
            </p>
          </article>

          {/* Key Advantages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2">
            {[
              "Avaliação gratuita e sem compromisso por foto no WhatsApp",
              "Design personalizado desenhado e aprovado por você antes de iniciar",
              "Anestésico manipulado potente para garantir zero dor",
              "Atendimento domiciliar humanizado e paciente",
              "Materiais descartáveis e esterilizados com laudo",
              "Acompanhamento e suporte vitalício pós-cicatrização"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 p-3 bg-white rounded-xl border border-pink-100 shadow-2xs">
                <CheckCircle2 className="text-[#D4567D] shrink-0" size={17} />
                <span className="text-xs sm:text-sm font-medium text-gray-900">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="bg-[#D4567D] text-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-md text-center space-y-3.5">
            <h3 className="text-lg sm:text-2xl md:text-3xl font-serif font-bold leading-snug">
              Gostaria de Avaliar a Sua Micropigmentação Antiga?
            </h3>
            <p className="text-xs sm:text-sm text-white/90 max-w-xl mx-auto leading-[1.45]">
              Envie uma foto pelo WhatsApp para uma análise personalizada e descubra como recuperar a beleza e leveza do seu rosto.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <a 
                href={getWhatsAppLink('CTA Artigo 60 Anos')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[40px] h-10 px-6 bg-white text-[#B84A6B] hover:bg-gray-100 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-xs active:scale-98"
              >
                <MessageCircle size={17} />
                <span>Conversar no WhatsApp</span>
              </a>

              <a 
                href={CONTACT_INFO.phoneCall}
                className="w-full sm:w-auto min-h-[40px] h-10 px-5 bg-[#B84A6B] border border-white/40 text-white hover:bg-[#9F3A59] rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 active:scale-98"
              >
                <Phone size={15} />
                <span>Ligar</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Reviews Section */}
      <ReviewMarquee />
    </motion.div>
  );
};

export default MatureCorrection;
