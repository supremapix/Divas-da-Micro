
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldAlert, CheckSquare, Info, AlertCircle, Heart } from 'lucide-react';
import { PROCEDURES_TIPS, getWhatsAppLink } from '../constants';
import SEOHead from '../components/SEOHead';
import { SEO_CONFIG, generateLocalBusinessSchema, generateBreadcrumbSchema } from '../seoConstants';

const Care: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { name: 'Início', url: SEO_CONFIG.SITE_URL },
    { name: 'Cuidados', url: `${SEO_CONFIG.SITE_URL}/#/cuidados` }
  ];

  const timeline = [
    { day: 'Dia 1-2', title: 'Intensificação da Cor', desc: 'A cor ficará mais escura devido à oxidação do pigmento. É normal haver um leve inchaço.' },
    { day: 'Dia 3-5', title: 'Início da Descamação', desc: 'Pequenas crostas começarão a se soltar. NUNCA remova-as manualmente.' },
    { day: 'Dia 7-10', title: 'Clareamento Temporário', desc: 'A cor pode parecer que sumiu. Tenha paciência, o pigmento está se fixando nas camadas internas.' },
    { day: 'Dia 30', title: 'Resultado Final', desc: 'A cor estabiliza e está pronta para o retoque de acabamento e perfeição.' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-white"
    >
      <SEOHead
        title={SEO_CONFIG.PAGES.care.title}
        description={SEO_CONFIG.PAGES.care.description}
        keywords={SEO_CONFIG.PAGES.care.keywords}
        image="/hero.png"
        url={`${SEO_CONFIG.SITE_URL}/#/cuidados`}
        schemas={[
          generateLocalBusinessSchema(),
          generateBreadcrumbSchema(breadcrumbs)
        ]}
      />

      {/* Header */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gray-900">Cuidados com a Sua <span className="text-[#D4567D]">Beleza</span></h1>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            Seguir as orientações de pós-procedimento é fundamental para garantir 50% do sucesso da sua micropigmentação ou correção.
          </p>
        </div>
      </section>

      {/* Main Care Section */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Pre Care */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 text-gray-900 border-b border-gray-100 pb-6">
              <ShieldAlert className="text-[#D4567D]" size={36} />
              <h2 className="text-3xl font-serif font-bold">Cuidados Pré-Procedimento</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                'Evite bebidas alcoólicas 24h antes da sessão.',
                'Suspenda o uso de ácidos na região 15 dias antes.',
                'Hidrate bem a pele, especialmente nos lábios.',
                'Não tome sol intenso na semana anterior.',
                'Alimente-se bem antes do atendimento domiciliar.'
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 items-center">
                  <CheckSquare size={20} className="text-[#D4567D] shrink-0" />
                  <span className="font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Post Care */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 text-gray-900 border-b border-gray-100 pb-6">
              <AlertCircle className="text-[#D4567D]" size={36} />
              <h2 className="text-3xl font-serif font-bold">O Que Evitar no Pós</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                'NÃO coce ou arranque as peles que se soltarem.',
                'NÃO use maquiagem na região por 10 dias.',
                'Evite banhos de sol, piscina e mar por 15 dias.',
                'Evite atividades que causem suor excessivo.',
                'Não lave com água muito quente nas primeiras 48h.'
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-red-50/50 rounded-2xl border border-red-100 items-center">
                  <Heart size={20} className="text-[#D4567D] shrink-0" />
                  <span className="font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Healing Timeline */}
      <section className="py-24 bg-gray-900 text-white rounded-[3rem] mx-4 md:mx-8">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Linha do Tempo da Cicatrização</h2>
            <p className="text-gray-400">Entenda o que acontece dia após dia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {timeline.map((item, i) => (
              <div key={i} className="relative p-8 bg-white/5 border border-white/10 rounded-3xl">
                <div className="absolute -top-4 -right-4 bg-[#D4567D] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg">
                  {i + 1}
                </div>
                <div className="flex items-center gap-3 mb-4 text-[#D4567D]">
                  <Clock size={20} />
                  <span className="font-bold text-sm uppercase tracking-widest">{item.day}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Summary */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-serif font-bold text-center mb-16">Dicas Rápidas de Segurança</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROCEDURES_TIPS.slice(0, 9).map((tip, idx) => (
            <div key={idx} className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm flex gap-4">
              <Info size={20} className="text-[#D4567D] shrink-0" />
              <p className="text-sm text-gray-700 font-medium leading-relaxed">{tip}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a href={getWhatsAppLink('Dúvida Cuidados')} className="bg-[#D4567D] text-white px-10 py-5 rounded-full font-bold shadow-xl hover:bg-[#b84a6b] transition-all inline-flex items-center gap-3">
             Ficou com alguma dúvida? Fale Conosco
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default Care;
