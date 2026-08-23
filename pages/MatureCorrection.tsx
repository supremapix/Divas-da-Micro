import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Heart, CheckCircle2, MessageCircle, Phone, Sparkles, Clock, MapPin, Eye, ArrowRight } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppLink } from '../constants';
import FacebookFeed from '../components/FacebookFeed';
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
      className="pt-24 pb-20 bg-white"
    >
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#FDF2F8]/50 via-white to-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-5 py-2 rounded-full bg-[#D4567D]/15 text-[#B84A6B] text-base md:text-sm font-bold tracking-wide uppercase mb-6 border border-[#D4567D]/30">
              Especialistas em Mulheres 60+
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
              Correção de Micropigmentação para <span className="text-[#D4567D]">Mulheres 60+</span> em Curitiba
            </h1>
            <p className="text-lg md:text-2xl text-gray-800 font-normal leading-relaxed mb-8 max-w-3xl mx-auto">
              Resgate a beleza natural do seu olhar com técnicas suaves, indolores e desenvolvidas sob medida para as características únicas da pele madura.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-lg mx-auto">
              <div className="flex flex-col items-center w-full sm:w-auto">
                <a 
                  href={getWhatsAppLink('Página 60 Anos')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[52px] bg-[#D4567D] hover:bg-[#B84A6B] text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl transition-all flex items-center justify-center gap-3 text-center"
                >
                  <MessageCircle size={24} /> WhatsApp
                </a>
                <span className="text-xs text-gray-500 mt-1.5 font-medium">Avaliação gratuita por foto</span>
              </div>

              <div className="flex flex-col items-center w-full sm:w-auto">
                <a 
                  href={CONTACT_INFO.phoneCall}
                  className="w-full sm:w-auto min-h-[52px] bg-white border-2 border-[#D4567D] text-[#B84A6B] hover:bg-[#FDF2F8]/50 px-8 py-4 rounded-2xl text-lg font-bold transition-all flex items-center justify-center gap-3 text-center"
                >
                  <Phone size={22} /> Ligar
                </a>
                <span className="text-xs text-gray-500 mt-1.5 font-medium">Atendimento telefônico direto</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Informative Article (600+ words real text for SEO and senior clarity) */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          
          {/* Section 1 */}
          <article className="mb-14 space-y-5">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 border-l-4 border-[#D4567D] pl-4">
              Por Que a Pele Madura Exige Técnicas Especiais de Correção?
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed font-normal">
              Com o passar dos anos, a pele passa por transformações naturais: diminuição na espessura da derme, redução de colágeno e maior sensibilidade vascular. Mulheres 60+ que realizaram procedimentos antigos de maquiagem definitiva ou microblading convencional, frequentemente enfrentam problemas como pigmentos azulados, cinzentos, avermelhados ou traços que se expandiram e perderam o formato original.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed font-normal">
              Na <strong>Divas da Micro</strong>, não utilizamos técnicas agressivas nem procedimentos padronizados. Nosso protocolo em Curitiba e Região Metropolitana combina a colorimetria corretiva de alta precisão com dermógrafos calibrados para deposição suave na camada dérmica correta, respeitando o ritmo biológico e a fragilidade cutânea da mulher madura.
            </p>
          </article>

          {/* Section 2 */}
          <article className="mb-14 space-y-5 bg-[#F9FAFB] p-6 md:p-10 rounded-3xl border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 flex items-center gap-3">
              <Sparkles className="text-[#D4567D] shrink-0" size={30} />
              Neutralização de Sobrancelhas Cinzas, Chumbo ou Avermelhadas
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed font-normal">
              Um dos problemas mais comuns que atendemos diariamente em Curitiba é a sobrancelha que ficou "chumbada", cinza escura ou com reflexos alaranjados. Isso ocorre porque muitos pigmentos antigos possuíam metais pesados ou foram aplicados em profundidade inadequada.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed font-normal">
              Em vez de submeter a cliente madura a sessões dolorosas de despigmentação a laser, utilizamos a <strong>neutralização química com pigmentos corretores biocompatíveis</strong>. Aplicamos tons quentes ou neutros selecionados de acordo com o fototipo de cada mulher, devolvendo a cor castanho natural, a luminosidade e a jovialidade ao rosto.
            </p>
          </article>

          {/* Section 3 */}
          <article className="mb-14 space-y-5">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 border-l-4 border-[#D4567D] pl-4">
              Correção de Delineado nos Olhos em Pálpebras Maduras
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed font-normal">
              A região dos olhos na mulher 60+ apresenta flacidez natural na pálpebra superior. Traços antigos de delineador que se expandiram ou ficaram assimétricos acabam pesando a expressão e dando a impressão de um olhar cansado.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed font-normal">
              Nossa técnica exclusiva de correção de delineado suaviza traços endurecidos, criando um efeito lifting óptico que reabre o olhar de forma elegante e sutil, sem repuxar a pele e sem desconforto durante o procedimento.
            </p>
          </article>

          {/* Section 4 */}
          <article className="mb-14 space-y-5 bg-[#F9FAFB] p-6 md:p-10 rounded-3xl border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 flex items-center gap-3">
              <Heart className="text-[#D4567D] shrink-0" size={30} />
              Revitalização e Neutralização Labial na Maturidade
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed font-normal">
              Com o tempo, os lábios perdem a definição do arco do cupido e o tom rosado saudável, muitas vezes apresentando cantos escurecidos ou manchas. A correção labial para mulheres maduras devolve cor, uniformidade e a sensação de lábios mais preenchidos e hidratados, utilizando tons naturais que rejuvenescem a face sem exageros artificiais.
            </p>
          </article>

          {/* Section 5 */}
          <article className="mb-14 space-y-5">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 border-l-4 border-[#D4567D] pl-4">
              Procedimento 100% Indolor: Conforto Absoluto com Anestésico Manipulado
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed font-normal">
              Sabemos que o medo da dor impede muitas mulheres de corrigir uma micropigmentação que as incomoda há anos. Por isso, a Divas da Micro utiliza <strong>anestésicos tópicos manipulados de grau farmacêutico avançado</strong>.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed font-normal">
              O anestésico é aplicado antes e durante todo o processo, permitindo que a sessão seja tão relaxante que a grande maioria de nossas clientes cochila tranquilamente durante o atendimento.
            </p>
          </article>

          {/* Section 6 */}
          <article className="mb-14 space-y-5 bg-[#FDF2F8]/50 p-6 md:p-10 rounded-3xl border border-[#D4567D]/20">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 flex items-center gap-3">
              <MapPin className="text-[#D4567D] shrink-0" size={30} />
              Atendimento Domiciliar VIP: O Estúdio Completo na Sua Casa
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed font-normal">
              Para maior comodidade, segurança e tranquilidade, atendemos na sua própria residência em Curitiba (Batel, Água Verde, Bigorrilho, Cabral, Mercês, Santa Felicidade, Juvevê e todos os bairros) e em toda a Região Metropolitana (São José dos Pinhais, Pinhais, Colombo, Araucária, Campo Largo e demais cidades).
            </p>
            <p className="text-lg text-gray-800 leading-relaxed font-normal">
              Levamos maca profissional higienizada, iluminação de precisão, instrumentos 100% descartáveis e seguimos padrões hospitalares rigorosos de biossegurança. Você não precisa enfrentar trânsito nem estresse pós-procedimento.
            </p>
          </article>

          {/* Key Advantages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
            {[
              "Avaliação gratuita e sem compromisso por foto no WhatsApp",
              "Design personalizado desenhado e aprovado por você antes de iniciar",
              "Anestésico manipulado potente para garantir zero dor",
              "Atendimento domiciliar humanizado e paciente",
              "Materiais descartáveis e esterilizados com laudo",
              "Acompanhamento e suporte vitalício pós-cicatrização"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <CheckCircle2 className="text-[#D4567D] shrink-0" size={24} />
                <span className="text-base md:text-lg font-medium text-gray-900">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-14 bg-gradient-to-br from-[#D4567D] to-[#B84A6B] text-white p-8 md:p-12 rounded-[2.5rem] text-center shadow-2xl space-y-6">
            <h3 className="text-2xl md:text-4xl font-serif font-bold">
              Gostaria de Avaliar a Sua Micropigmentação Antiga?
            </h3>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              Envie uma foto pelo WhatsApp para uma análise personalizada e descubra como recuperar a beleza e leveza do seu rosto.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex flex-col items-center w-full sm:w-auto">
                <a 
                  href={getWhatsAppLink('CTA Artigo 60 Anos')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[52px] bg-white text-[#B84A6B] hover:bg-gray-100 px-10 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-lg"
                >
                  <MessageCircle size={24} /> WhatsApp
                </a>
                <span className="text-xs text-white/80 mt-1.5 font-medium">Análise e orçamento gratuito</span>
              </div>

              <div className="flex flex-col items-center w-full sm:w-auto">
                <a 
                  href={CONTACT_INFO.phoneCall}
                  className="w-full sm:w-auto min-h-[52px] bg-[#B84A6B] border-2 border-white/40 text-white hover:bg-[#9F3A59] px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3"
                >
                  <Phone size={20} /> Ligar
                </a>
                <span className="text-xs text-white/80 mt-1.5 font-medium">Fale diretamente por voz</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Reviews */}
      <ReviewMarquee />

      {/* Facebook Feed */}
      <FacebookFeed />
    </motion.div>
  );
};

export default MatureCorrection;
