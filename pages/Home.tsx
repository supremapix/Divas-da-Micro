import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  CheckCircle, ShieldCheck, Heart, UserCheck, MapPin, ArrowRight, Zap, Info, 
  ChevronDown, Search, MessageCircle, Phone, Sparkles, ThumbsUp, MessageSquare, 
  Share2, Star, Clock, Calendar, Bookmark, Award, Check, Image as ImageIcon, Send,
  ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, Maximize2
} from 'lucide-react';
import ButterflyLogo from '../components/ButterflyLogo';
import { SERVICES, FAQS, CONTACT_INFO, getWhatsAppLink, PROCEDURES_TIPS, ALL_LOCATIONS, GOOGLE_REVIEWS } from '../constants';
import ReviewMarquee from '../components/ReviewMarquee';
import InteractiveGallery from '../components/InteractiveGallery';
import LocationInfiniteMarquee from '../components/LocationInfiniteMarquee';

const Home: React.FC = () => {
  const [visibleTips, setVisibleTips] = useState(8);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | null>(null);
  const [isModalZoomed, setIsModalZoomed] = useState(false);
  const modalTouchStartX = useRef<number | null>(null);
  const modalTouchEndX = useRef<number | null>(null);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({
    pinned: true,
    sobrancelhas: false,
    olhos: false,
    labios: false,
    gallery: true,
    reviews: true
  });
  const [activeTab, setActiveTab] = useState('feed');
  const navigate = useNavigate();

  React.useEffect(() => {
    if (selectedServiceIndex !== null) {
      document.body.classList.add('lightbox-active');
      window.dispatchEvent(new CustomEvent('lightboxToggle', { detail: { open: true } }));
    } else {
      document.body.classList.remove('lightbox-active');
      window.dispatchEvent(new CustomEvent('lightboxToggle', { detail: { open: false } }));
      setIsModalZoomed(false);
    }
    return () => {
      document.body.classList.remove('lightbox-active');
      window.dispatchEvent(new CustomEvent('lightboxToggle', { detail: { open: false } }));
    };
  }, [selectedServiceIndex]);

  // Keyboard navigation for service modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedServiceIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedServiceIndex(null);
      } else if (e.key === 'ArrowRight') {
        setIsModalZoomed(false);
        setSelectedServiceIndex(prev => (prev === null || prev === SERVICES.length - 1 ? 0 : prev + 1));
      } else if (e.key === 'ArrowLeft') {
        setIsModalZoomed(false);
        setSelectedServiceIndex(prev => (prev === null || prev === 0 ? SERVICES.length - 1 : prev - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedServiceIndex]);

  const filteredLocations = useMemo(() => {
    if (searchTerm.length < 2) return [];
    return ALL_LOCATIONS.filter(loc => 
      loc.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 8);
  }, [searchTerm]);

  const handleLocationSelect = (slug: string) => {
    navigate(`/correcao-em-${slug}`);
    setSearchTerm('');
  };

  const toggleLike = (postId: string) => {
    setLikedPosts(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pt-16 md:pt-18 bg-[#FAF5F8] min-h-screen text-gray-900">
      
      {/* ========================================================================= */}
      {/* 1. SEÇÃO CAPA + PERFIL (ESTILO PÁGINA DO FACEBOOK COM PALETA ROSA #D4567D) */}
      {/* ========================================================================= */}
      <section className="bg-white border-b border-pink-100 shadow-sm w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          
          {/* Capa Larga com Tamanho Máximo e Proporção Responsiva */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:h-[400px] lg:h-[450px] rounded-b-2xl sm:rounded-b-3xl overflow-hidden bg-gray-950 shadow-inner group flex items-center justify-center">
            <img 
              src="https://img.supremasite.com.br/divas/luxury_spa_banner.webp" 
              alt="Capa Divas da Micro - Especialistas em Pele Madura em Curitiba" 
              className="w-full h-full object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-700 select-none"
            />
            {/* Gradientes elegantes */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none"></div>
            
            {/* Selo no topo da capa */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/70 backdrop-blur-md text-pink-200 text-[11px] sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-pink-400/40 flex items-center gap-1.5 sm:gap-2 shadow-xl">
              <Sparkles size={15} className="text-pink-300 shrink-0" />
              <span>Atendimento VIP Curitiba e RMC</span>
            </div>

            {/* Destaque 100% Indolor na Capa */}
            <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 flex items-center gap-1.5 sm:gap-2 bg-black/75 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/25 text-white text-xs sm:text-sm font-medium shadow-xl">
              <Zap size={15} className="text-pink-400 shrink-0" />
              <span>Procedimento 100% Indolor</span>
            </div>
          </div>

          {/* Área do Perfil */}
          <div className="px-0 sm:px-2 pb-4 pt-2">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between -mt-12 sm:-mt-16 md:-mt-20 mb-4 gap-4 md:gap-6 relative z-10">
              
              {/* Foto de Perfil Circular e Título */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 sm:gap-6 text-center md:text-left">
                {/* Avatar Circular com Borda Branca */}
                <div className="relative shrink-0">
                  <div className="w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full border-4 border-white bg-gradient-to-br from-[#FDF2F8] via-[#FCE7F3] to-pink-100 shadow-xl flex items-center justify-center p-2.5 sm:p-3 ring-2 ring-[#D4567D]/20 overflow-hidden">
                    <ButterflyLogo size={60} className="transform hover:scale-110 transition-transform" />
                  </div>
                  {/* Selo Verificado em Rosa */}
                  <div 
                    className="absolute bottom-0 right-0 sm:bottom-2 sm:right-2 bg-[#D4567D] text-white p-1 sm:p-1.5 rounded-full shadow-md border-2 border-white"
                    title="Especialistas Certificadas em Reversão e Correção 60+"
                  >
                    <Check size={14} className="stroke-[3]" />
                  </div>
                </div>

                {/* Nome da Página & Informações */}
                <div className="space-y-1.5 sm:space-y-2 pt-1 md:pt-4">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-gray-900 tracking-tight drop-shadow-sm">
                      Divas da Micro <span className="text-[#D4567D]">Curitiba</span>
                    </h1>
                    <span className="bg-[#FDF2F8] text-[#D4567D] text-xs sm:text-sm font-bold px-3 py-1 rounded-full border border-pink-200 shadow-sm whitespace-nowrap">
                      Oficial 60+
                    </span>
                  </div>

                  {/* Frase de Destaque com excelente legibilidade e contraste */}
                  <p className="text-sm sm:text-lg text-gray-800 font-normal leading-relaxed max-w-2xl px-1 sm:px-0">
                    Especialistas em correção de micropigmentação antiga para mulheres 60+ com <strong className="font-semibold text-gray-900">procedimento 100% indolor</strong> e atendimento domiciliar VIP.
                  </p>

                  {/* Meta Social: Avaliação, Local e Horário */}
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 pt-1">
                    <span className="flex items-center gap-1 font-semibold text-yellow-700 bg-yellow-50 px-2.5 py-1 rounded-md border border-yellow-200 whitespace-nowrap">
                      <Star size={14} className="fill-yellow-500 text-yellow-500" />
                      5.0 (+500 avaliações)
                    </span>
                    <span className="flex items-center gap-1 text-gray-700 font-medium whitespace-nowrap">
                      <MapPin size={15} className="text-[#D4567D]" />
                      Batel & Domiciliar
                    </span>
                    <span className="hidden lg:flex items-center gap-1 text-gray-600">
                      <Clock size={15} className="text-gray-400" />
                      Seg a Sex, 10h às 20h
                    </span>
                  </div>
                </div>
              </div>

              {/* Botões de Ação Principais da Página (Estilo CTA do Facebook) */}
              <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto justify-center md:pt-4">
                <Link
                  id="page-cta-agendar"
                  to="/agenda"
                  className="flex-1 md:flex-initial min-h-[44px] px-4 sm:px-5 py-2.5 rounded-xl bg-[#D4567D] hover:bg-[#B84A6B] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95 text-center whitespace-nowrap"
                >
                  <Calendar size={17} />
                  <span>Agendar Horário</span>
                </Link>

                <a
                  id="page-cta-whatsapp"
                  href={getWhatsAppLink('Perfil Capa Facebook')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-initial min-h-[44px] px-4 sm:px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 text-center whitespace-nowrap"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>

                <a
                  id="page-cta-ligar"
                  href={CONTACT_INFO.phoneCall}
                  className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 flex items-center justify-center transition-colors shrink-0"
                  title="Ligar para nossa especialista"
                  aria-label="Ligar"
                >
                  <Phone size={18} />
                </a>
              </div>

            </div>

            {/* Abas Horizontais da Página (Estilo Menu de Abas do Facebook) */}
            <div className="border-t border-pink-100 pt-1 flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth">
              {[
                { id: 'feed', label: 'Feed Principal' },
                { id: 'post-sobrancelhas', label: 'Sobrancelhas' },
                { id: 'post-olhos', label: 'Olhos' },
                { id: 'post-labios', label: 'Lábios' },
                { id: 'post-60mais', label: 'Pele Madura 60+' },
                { id: 'post-depoimentos', label: 'Depoimentos' },
                { id: 'post-cuidados', label: 'Guia & Dicas' },
                { id: 'post-duvidas', label: 'Dúvidas (FAQ)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    if (tab.id !== 'feed') {
                      scrollToSection(tab.id);
                    } else {
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }
                  }}
                  className={`px-3.5 sm:px-4 py-2.5 rounded-lg text-sm sm:text-base font-bold whitespace-nowrap transition-all border-b-2 ${
                    activeTab === tab.id
                      ? 'text-[#D4567D] border-[#D4567D] bg-[#FDF2F8]'
                      : 'text-gray-700 border-transparent hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. LAYOUT PRINCIPAL EM COLUNAS ESTILO FEED DO FACEBOOK                    */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-5 sm:py-8 overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* ===================================================================== */}
          {/* COLUNA ESQUERDA: APRESENTAÇÃO / ATALHOS / BIO DA PÁGINA (4 colunas)   */}
          {/* ===================================================================== */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            
            {/* Card 1: Apresentação (Bio da Página Estilo Facebook) */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-pink-100/80 space-y-4">
              <div className="flex items-center justify-between border-b border-pink-50 pb-3">
                <h2 className="text-xl font-serif font-bold text-gray-900">Apresentação</h2>
                <Sparkles size={20} className="text-[#D4567D]" />
              </div>

              <p className="text-base text-gray-800 leading-relaxed font-normal">
                Especialistas em devolver a autoestima de mulheres 60+ através da correção e harmonização de micropigmentação antiga. Atendimento exclusivo e humanizado no conforto do seu lar.
              </p>

              <div className="space-y-3 pt-2 text-sm sm:text-base text-gray-700 border-t border-gray-100">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#D4567D] shrink-0 mt-0.5" size={18} />
                  <span><strong>Endereço:</strong> {CONTACT_INFO.address}</span>
                </div>

                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-[#D4567D] shrink-0" size={18} />
                  <span><strong>Raio de Atendimento:</strong> {CONTACT_INFO.serviceRadius} do Batel</span>
                </div>

                <div className="flex items-center gap-3">
                  <Zap className="text-[#D4567D] shrink-0" size={18} />
                  <span><strong>Protocolo 100% Indolor:</strong> Anestésicos Manipulados</span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="text-[#D4567D] shrink-0" size={18} />
                  <span><strong>Horários:</strong> {CONTACT_INFO.hours}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppLink('Card Bio Facebook')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[46px] bg-[#FDF2F8] hover:bg-[#FCE7F3] text-[#D4567D] border border-pink-200 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle size={18} />
                  <span>Falar com Nossa Especialista</span>
                </a>
              </div>
            </div>

            {/* Card 2: Menu Fixo de Atalhos Rápidos */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-pink-100/80 space-y-3">
              <h3 className="text-lg font-serif font-bold text-gray-900 border-b border-pink-50 pb-2">
                Atalhos de Serviços
              </h3>

              <div className="space-y-1.5">
                {[
                  { name: 'Harmonização de Sobrancelhas', to: '/servicos', icon: '✨' },
                  { name: 'Correção de Olhos & Delineado', to: '/servicos', icon: '👁️' },
                  { name: 'Correção Labial & Revitalização', to: '/servicos', icon: '💋' },
                  { name: 'Especial Mulheres 60+ (Indolor)', to: '/mulheres-maduras', icon: '🌸', highlight: true },
                  { name: 'Atendimento Domiciliar VIP', to: '/agenda', icon: '🏠' },
                  { name: 'Guia de Cuidados Pós-Procedimento', to: '/cuidados', icon: '📋' },
                  { name: 'Fale Conosco & Agendamento', to: '/agenda', icon: '📅' },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.to}
                    className={`flex items-center justify-between p-2.5 rounded-xl text-sm sm:text-base font-semibold transition-all group ${
                      item.highlight 
                        ? 'bg-[#FDF2F8] text-[#D4567D] font-bold border border-pink-200 hover:bg-[#FCE7F3]' 
                        : 'text-gray-800 hover:bg-gray-50 hover:text-[#D4567D]'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </span>
                    <ArrowRight size={16} className="text-gray-400 group-hover:text-[#D4567D] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Card 3: Busca de Bairros & Cidades (Atendimento Domiciliar) */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-pink-100/80 space-y-3">
              <h3 className="text-lg font-serif font-bold text-gray-900">
                Onde Atendemos em Casa
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-normal">
                Digite seu bairro de Curitiba ou cidade da RMC para conferir a disponibilidade da nossa especialista:
              </p>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Ex: Batel, Água Verde, Pinhais..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#D4567D] text-sm text-gray-900 outline-none"
                />

                {filteredLocations.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-pink-100 z-30 max-h-56 overflow-y-auto">
                    {filteredLocations.map(loc => (
                      <button
                        key={loc.slug}
                        onClick={() => handleLocationSelect(loc.slug)}
                        className="w-full text-left px-3.5 py-2.5 text-sm font-semibold text-gray-800 hover:bg-[#FDF2F8] hover:text-[#D4567D] border-b border-gray-50 flex items-center justify-between"
                      >
                        <span>{loc.name}</span>
                        <span className="text-xs text-pink-400">Ver →</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Card 4: Destaques & Segurança */}
            <div className="bg-gradient-to-br from-[#FDF2F8] to-[#FCE7F3] rounded-2xl p-5 sm:p-6 border border-pink-200 space-y-3">
              <div className="flex items-center gap-2 text-[#D4567D] font-bold text-sm uppercase tracking-wider">
                <ShieldCheck size={20} />
                <span>Garantia de Conforto</span>
              </div>
              <h4 className="text-lg font-serif font-bold text-gray-900 leading-snug">
                Biossegurança Hospitalar & Materiais Descartáveis
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed font-normal">
                Levamos maca esterilizada, iluminação clínica profissional e embalagens lacradas que são abertas na sua frente.
              </p>
            </div>

          </aside>

          {/* ===================================================================== */}
          {/* COLUNA CENTRAL: O FEED DE POSTS (SERVIÇOS, REVIEWS, DICAS) (8 colunas) */}
          {/* ===================================================================== */}
          <main className="lg:col-span-8 space-y-6">
            
            {/* ------------------------------------------------------------------- */}
            {/* POST 0: PUBLICAÇÃO FIXADA (ESPECIAL MULHERES 60+ / ATENDIMENTO VIP) */}
            {/* ------------------------------------------------------------------- */}
            <article id="post-60mais" className="bg-white rounded-2xl shadow-sm border border-pink-200/80 overflow-hidden">
              {/* Header do Post */}
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FDF2F8] to-pink-100 border border-[#D4567D]/30 flex items-center justify-center p-2">
                    <ButterflyLogo size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-gray-900 text-base">Divas da Micro</span>
                      <span className="bg-[#D4567D] text-white p-0.5 rounded-full" title="Verificado"><Check size={10} /></span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                      <span className="text-[#D4567D] font-bold flex items-center gap-1">
                        📌 Publicação Fixada
                      </span>
                      <span>•</span>
                      <span>Atendimento VIP 60+</span>
                      <span>•</span>
                      <span>🌍 Público</span>
                    </div>
                  </div>
                </div>

                <span className="bg-[#FDF2F8] text-[#D4567D] text-xs font-bold px-3 py-1 rounded-full border border-pink-200">
                  Destaque
                </span>
              </div>

              {/* Conteúdo do Post Fixado */}
              <div className="p-4 sm:p-6 space-y-4">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 leading-snug">
                  Pele Madura: Cuidado Delicado, Reversão de Cores e Procedimento 100% Indolor
                </h3>
                
                <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-normal">
                  Sabemos que a pele madura requer técnicas especiais de implantação de pigmento, agulhas de calibre diferenciado e, acima de tudo, respeito e paciência. Se a sua sobrancelha antiga ficou <strong>cinza, azulada ou avermelhada</strong>, não se preocupe: neutralizamos e corrigimos com máxima delicadeza.
                </p>

                {/* Highlight Callout Box */}
                <div className="bg-[#FDF2F8] rounded-2xl p-4 sm:p-5 border border-pink-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#D4567D] font-bold text-base">
                      <Zap size={20} />
                      <span>Anestésico Premium Manipulado</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      Zero dor durante todo o procedimento. Conforto total para você relaxar!
                    </p>
                  </div>
                  <Link
                    to="/mulheres-maduras"
                    className="shrink-0 min-h-[44px] px-5 py-2 rounded-xl bg-[#D4567D] hover:bg-[#B84A6B] text-white font-bold text-sm flex items-center gap-2 shadow-sm transition-all"
                  >
                    <span>Conhecer Protocolo 60+</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Barra de Reações e Ações Sociais (Estilo Facebook) */}
              <div className="px-4 sm:px-6 py-3 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm text-gray-500">
                <div className="flex items-center gap-1.5 font-medium">
                  <span className="flex -space-x-1">
                    <span className="w-5 h-5 rounded-full bg-[#D4567D] text-white flex items-center justify-center text-[10px]">❤️</span>
                    <span className="w-5 h-5 rounded-full bg-[#25D366] text-white flex items-center justify-center text-[10px]">👍</span>
                  </span>
                  <span className="ml-1 font-semibold text-gray-700">489 curtidas</span>
                </div>
                <div>
                  <span>94 comentários • 52 compartilhamentos</span>
                </div>
              </div>

              {/* Botões Interativos de Ação do Post */}
              <div className="px-4 sm:px-6 py-2 border-t border-gray-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => toggleLike('pinned')}
                  className={`flex-1 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors ${
                    likedPosts.pinned ? 'text-[#D4567D] bg-pink-50' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <ThumbsUp size={18} className={likedPosts.pinned ? 'fill-[#D4567D]' : ''} />
                  <span>{likedPosts.pinned ? 'Curtido' : 'Curtir'}</span>
                </button>

                <a
                  href={getWhatsAppLink('Post Fixado Comentar')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl font-bold text-sm text-gray-600 hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare size={18} />
                  <span>Dúvidas</span>
                </a>

                <a
                  href={getWhatsAppLink('Post Fixado Compartilhar')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl font-bold text-sm text-[#25D366] hover:bg-emerald-50 flex items-center justify-center gap-2 transition-colors"
                >
                  <Share2 size={18} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </article>

            {/* ------------------------------------------------------------------- */}
            {/* POST 1: SERVIÇO - HARMONIZAÇÃO DE SOBRANCELHAS                      */}
            {/* ------------------------------------------------------------------- */}
            <article id="post-sobrancelhas" className="bg-white rounded-2xl shadow-sm border border-pink-100/80 overflow-hidden">
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FDF2F8] to-pink-100 border border-[#D4567D]/30 flex items-center justify-center p-2">
                    <ButterflyLogo size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-gray-900 text-base">Divas da Micro</span>
                      <span className="bg-[#D4567D] text-white p-0.5 rounded-full"><Check size={10} /></span>
                    </div>
                    <span className="text-xs text-gray-500">Procedimento em Destaque • Curitiba e RMC</span>
                  </div>
                </div>

                <span className="text-xs font-bold text-[#D4567D] bg-[#FDF2F8] px-3 py-1 rounded-full border border-pink-200">
                  Sobrancelhas
                </span>
              </div>

              {/* Texto do Post */}
              <div className="p-4 sm:p-6 space-y-3">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
                  {SERVICES[0].title}
                </h3>
                <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-normal">
                  {SERVICES[0].details} {SERVICES[0].description}
                </p>
              </div>

              {/* Imagem do Post no Tamanho Máximo (Clicável com Lightbox) */}
              <div 
                onClick={() => setSelectedServiceIndex(0)}
                className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:min-h-[460px] overflow-hidden bg-gray-950 cursor-pointer group flex items-center justify-center"
                title="Clique para ampliar o procedimento em tamanho máximo"
              >
                <img 
                  src={SERVICES[0].image} 
                  alt={`${SERVICES[0].title} - Correção e Harmonização em Curitiba`}
                  className="w-full h-full object-contain sm:object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
                />
                
                {/* Selo Topo Direito de Foto em Alta Resolução */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/70 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30 flex items-center gap-1.5 shadow-xl group-hover:bg-[#D4567D] transition-colors">
                  <Maximize2 size={13} />
                  <span>Ver em Tela Cheia</span>
                </div>

                {/* Gradiente e Legenda na Base da Imagem */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-1.5 pointer-events-none">
                  <div>
                    <span className="bg-[#D4567D] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md mb-1 inline-block">
                      Resultado Real
                    </span>
                    <h4 className="text-white font-serif font-bold text-lg sm:text-2xl drop-shadow-md">
                      Fios Leves, Naturais e Harmoniosos
                    </h4>
                  </div>
                  <span className="text-pink-200 text-xs sm:text-sm font-medium drop-shadow">
                    Protocolo 100% Indolor
                  </span>
                </div>
              </div>

              {/* Rodapé do Card com Botões de Ação */}
              <div className="p-4 sm:p-5 bg-[#FAF5F8]/50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs sm:text-sm text-gray-600 font-medium text-center sm:text-left">
                  <span>Avaliação prévia e gratuita por foto pelo WhatsApp</span>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <Link
                    to="/correcao"
                    className="flex-1 sm:flex-initial min-h-[44px] px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Saiba Mais</span>
                    <ArrowRight size={16} />
                  </Link>

                  <a
                    href={getWhatsAppLink(`Post FB - ${SERVICES[0].title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial min-h-[44px] px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <MessageCircle size={18} />
                    <span>Agendar</span>
                  </a>
                </div>
              </div>
            </article>

            {/* ------------------------------------------------------------------- */}
            {/* POST 2: SERVIÇO - CORREÇÃO DE OLHOS                                 */}
            {/* ------------------------------------------------------------------- */}
            <article id="post-olhos" className="bg-white rounded-2xl shadow-sm border border-pink-100/80 overflow-hidden">
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FDF2F8] to-pink-100 border border-[#D4567D]/30 flex items-center justify-center p-2">
                    <ButterflyLogo size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-gray-900 text-base">Divas da Micro</span>
                      <span className="bg-[#D4567D] text-white p-0.5 rounded-full"><Check size={10} /></span>
                    </div>
                    <span className="text-xs text-gray-500">Procedimento em Destaque • Especialistas 60+</span>
                  </div>
                </div>

                <span className="text-xs font-bold text-[#D4567D] bg-[#FDF2F8] px-3 py-1 rounded-full border border-pink-200">
                  Olhos
                </span>
              </div>

              <div className="p-4 sm:p-6 space-y-3">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
                  {SERVICES[1].title}
                </h3>
                <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-normal">
                  {SERVICES[1].details} {SERVICES[1].description}
                </p>
              </div>

              {/* Imagem do Post no Tamanho Máximo (Clicável com Lightbox) */}
              <div 
                onClick={() => setSelectedServiceIndex(1)}
                className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:min-h-[460px] overflow-hidden bg-gray-950 cursor-pointer group flex items-center justify-center"
                title="Clique para ampliar o procedimento em tamanho máximo"
              >
                <img 
                  src={SERVICES[1].image} 
                  alt={`${SERVICES[1].title} - Ajuste de delineado em Curitiba`}
                  className="w-full h-full object-contain sm:object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
                />
                
                {/* Selo Topo Direito de Foto em Alta Resolução */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/70 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30 flex items-center gap-1.5 shadow-xl group-hover:bg-[#D4567D] transition-colors">
                  <Maximize2 size={13} />
                  <span>Ver em Tela Cheia</span>
                </div>

                {/* Gradiente e Legenda na Base da Imagem */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-1.5 pointer-events-none">
                  <div>
                    <span className="bg-[#D4567D] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md mb-1 inline-block">
                      Resultado Real
                    </span>
                    <h4 className="text-white font-serif font-bold text-lg sm:text-2xl drop-shadow-md">
                      Olhar Rejuvenescido e Definido sem Dor
                    </h4>
                  </div>
                  <span className="text-pink-200 text-xs sm:text-sm font-medium drop-shadow">
                    Pálpebras Suaves & Lifting Leve
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 bg-[#FAF5F8]/50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs sm:text-sm text-gray-600 font-medium text-center sm:text-left">
                  <span>Conforto absoluto com anestésicos tópicos desenvolvidos para peles sensíveis</span>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <Link
                    to="/correcao"
                    className="flex-1 sm:flex-initial min-h-[44px] px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Saiba Mais</span>
                    <ArrowRight size={16} />
                  </Link>

                  <a
                    href={getWhatsAppLink(`Post FB - ${SERVICES[1].title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial min-h-[44px] px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <MessageCircle size={18} />
                    <span>Agendar</span>
                  </a>
                </div>
              </div>
            </article>

            {/* ------------------------------------------------------------------- */}
            {/* POST 3: SERVIÇO - CORREÇÃO LABIAL                                  */}
            {/* ------------------------------------------------------------------- */}
            <article id="post-labios" className="bg-white rounded-2xl shadow-sm border border-pink-100/80 overflow-hidden">
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FDF2F8] to-pink-100 border border-[#D4567D]/30 flex items-center justify-center p-2">
                    <ButterflyLogo size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-gray-900 text-base">Divas da Micro</span>
                      <span className="bg-[#D4567D] text-white p-0.5 rounded-full"><Check size={10} /></span>
                    </div>
                    <span className="text-xs text-gray-500">Procedimento em Destaque • Revitalização</span>
                  </div>
                </div>

                <span className="text-xs font-bold text-[#D4567D] bg-[#FDF2F8] px-3 py-1 rounded-full border border-pink-200">
                  Lábios
                </span>
              </div>

              <div className="p-4 sm:p-6 space-y-3">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
                  {SERVICES[2].title}
                </h3>
                <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-normal">
                  {SERVICES[2].details} {SERVICES[2].description}
                </p>
              </div>

              {/* Imagem do Post no Tamanho Máximo (Clicável com Lightbox) */}
              <div 
                onClick={() => setSelectedServiceIndex(2)}
                className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:min-h-[460px] overflow-hidden bg-gray-950 cursor-pointer group flex items-center justify-center"
                title="Clique para ampliar o procedimento em tamanho máximo"
              >
                <img 
                  src={SERVICES[2].image} 
                  alt={`${SERVICES[2].title} - Revitalização Labial em Curitiba`}
                  className="w-full h-full object-contain sm:object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
                />
                
                {/* Selo Topo Direito de Foto em Alta Resolução */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/70 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30 flex items-center gap-1.5 shadow-xl group-hover:bg-[#D4567D] transition-colors">
                  <Maximize2 size={13} />
                  <span>Ver em Tela Cheia</span>
                </div>

                {/* Gradiente e Legenda na Base da Imagem */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-1.5 pointer-events-none">
                  <div>
                    <span className="bg-[#D4567D] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md mb-1 inline-block">
                      Resultado Real
                    </span>
                    <h4 className="text-white font-serif font-bold text-lg sm:text-2xl drop-shadow-md">
                      Contorno e Cor Saudável todos os dias
                    </h4>
                  </div>
                  <span className="text-pink-200 text-xs sm:text-sm font-medium drop-shadow">
                    Revitalização e Hidratação 60+
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 bg-[#FAF5F8]/50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs sm:text-sm text-gray-600 font-medium text-center sm:text-left">
                  <span>Recuperação de contornos desbotados com efeito jovial e natural</span>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <Link
                    to="/correcao"
                    className="flex-1 sm:flex-initial min-h-[44px] px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Saiba Mais</span>
                    <ArrowRight size={16} />
                  </Link>

                  <a
                    href={getWhatsAppLink(`Post FB - ${SERVICES[2].title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial min-h-[44px] px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <MessageCircle size={18} />
                    <span>Agendar</span>
                  </a>
                </div>
              </div>
            </article>

            {/* ------------------------------------------------------------------- */}
            {/* POST 4: GALERIA DE RESULTADOS (ÁLBUM DO FACEBOOK)                   */}
            {/* ------------------------------------------------------------------- */}
            <article className="bg-white rounded-2xl shadow-sm border border-pink-100/80 overflow-hidden">
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FDF2F8] to-pink-100 border border-[#D4567D]/30 flex items-center justify-center p-2">
                    <ButterflyLogo size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-gray-900 text-base">Divas da Micro</span>
                      <span className="bg-[#D4567D] text-white p-0.5 rounded-full"><Check size={10} /></span>
                    </div>
                    <span className="text-xs text-gray-500">Álbum de Fotos • Transformações Reais</span>
                  </div>
                </div>

                <span className="text-xs font-bold text-[#D4567D] bg-[#FDF2F8] px-3 py-1 rounded-full border border-pink-200 flex items-center gap-1">
                  <ImageIcon size={14} />
                  Galeria
                </span>
              </div>

              <div className="p-4 sm:p-6 space-y-2">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
                  Resultados Reais & Transformações em Curitiba
                </h3>
                <p className="text-base text-gray-700 font-normal">
                  Arraste para comparar o antes e depois das nossas clientes e veja como é possível rejuvenescer o olhar com naturalidade.
                </p>
              </div>

              <div className="px-2 sm:px-4 pb-4">
                <InteractiveGallery />
              </div>
            </article>

            {/* ------------------------------------------------------------------- */}
            {/* POST 5: DEPOIMENTOS NO FORMATO DE POSTS DE CLIENTES (REVIEWS FEED)   */}
            {/* ------------------------------------------------------------------- */}
            <section id="post-depoimentos" className="space-y-4">
              <div className="flex items-center justify-between px-2 pt-2">
                <div className="space-y-0.5">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
                    O Que Dizem Nossas Divas (Avaliações Reais)
                  </h3>
                  <p className="text-sm text-gray-600 font-normal">
                    Depoimentos de mulheres que recuperaram a autoestima no espelho
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 text-sm font-bold text-yellow-700 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-200">
                  <Star size={16} className="fill-yellow-500 text-yellow-500" />
                  Nota 5.0 no Google
                </span>
              </div>

              {/* Grid de Posts de Depoimentos */}
              <div className="space-y-4">
                {GOOGLE_REVIEWS.map((review) => (
                  <article key={review.id} className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-pink-100/80 space-y-3.5">
                    {/* Header do Post de Depoimento */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {/* Avatar Circular da Cliente */}
                        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 border border-pink-300 flex items-center justify-center font-serif font-bold text-[#D4567D] text-lg">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <span className="font-bold text-gray-900 text-base block">{review.name}</span>
                          <span className="text-xs text-gray-500 font-medium">Cliente Verificada • {review.date}</span>
                        </div>
                      </div>

                      {/* Estrelas */}
                      <div className="flex text-yellow-500">
                        {[...Array(review.stars)].map((_, i) => (
                          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    {/* Texto do Depoimento */}
                    <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-normal italic pl-2 border-l-2 border-[#D4567D]/30">
                      "{review.text}"
                    </p>

                    {/* Resposta Oficial da Página */}
                    <div className="bg-[#FAF5F8] rounded-xl p-3 sm:p-3.5 border border-pink-100 flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                      <ButterflyLogo size={20} className="shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-gray-900 block text-xs">Divas da Micro respondeu:</span>
                        <span className="text-gray-600">Gratidão imensa pelo carinho e pela confiança em nosso trabalho, {review.name}! ❤️</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Review Marquee interativo */}
              <div className="pt-2">
                <ReviewMarquee />
              </div>
            </section>

            {/* ------------------------------------------------------------------- */}
            {/* POST 6: GUIA DE CUIDADOS E DICAS DE ESPECIALISTA (POST ESTILO FEED)  */}
            {/* ------------------------------------------------------------------- */}
            <article id="post-cuidados" className="bg-white rounded-2xl shadow-sm border border-pink-100/80 overflow-hidden">
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FDF2F8] to-pink-100 border border-[#D4567D]/30 flex items-center justify-center p-2">
                    <ButterflyLogo size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-gray-900 text-base">Divas da Micro</span>
                      <span className="bg-[#D4567D] text-white p-0.5 rounded-full"><Check size={10} /></span>
                    </div>
                    <span className="text-xs text-gray-500">Guia Oficial de Especialista • Cuidados Pós</span>
                  </div>
                </div>

                <span className="text-xs font-bold text-[#D4567D] bg-[#FDF2F8] px-3 py-1 rounded-full border border-pink-200">
                  Dicas
                </span>
              </div>

              <div className="p-4 sm:p-6 space-y-4">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
                  Guia de Cuidados e Dicas de Especialista
                </h3>
                <p className="text-base text-gray-700 font-normal leading-relaxed">
                  Tudo o que você precisa saber para manter seu procedimento impecável, com cicatrização perfeita e durabilidade máxima:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {PROCEDURES_TIPS.slice(0, visibleTips).map((tip, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-200/80 flex gap-3 items-start hover:bg-[#FDF2F8]/60 transition-colors">
                      <div className="bg-[#FDF2F8] text-[#D4567D] p-1.5 rounded-lg shrink-0 mt-0.5">
                        <Info size={18} />
                      </div>
                      <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-medium">{tip}</p>
                    </div>
                  ))}
                </div>

                {visibleTips < PROCEDURES_TIPS.length && (
                  <div className="pt-3 text-center">
                    <button
                      id="btn-feed-ver-mais-dicas"
                      onClick={() => setVisibleTips(prev => Math.min(prev + 6, PROCEDURES_TIPS.length))}
                      className="min-h-[46px] px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-bold text-sm inline-flex items-center gap-2 transition-all shadow-sm"
                    >
                      <span>Ver Mais Dicas</span>
                      <ChevronDown size={18} />
                    </button>
                  </div>
                )}
              </div>
            </article>

            {/* ------------------------------------------------------------------- */}
            {/* POST 7: DÚVIDAS FREQUENTES (FAQ COM ACORDEÃO ESTILO COMUNIDADE)    */}
            {/* ------------------------------------------------------------------- */}
            <article id="post-duvidas" className="bg-white rounded-2xl shadow-sm border border-pink-100/80 p-5 sm:p-6 space-y-4">
              <div className="border-b border-gray-100 pb-3">
                <span className="text-[#D4567D] text-xs font-bold uppercase tracking-wider block mb-1">Perguntas & Respostas</span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
                  Dúvidas Frequentes sobre a Correção
                </h3>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details key={idx} className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-200 transition-all">
                    <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer list-none font-bold text-base sm:text-lg text-gray-900 hover:text-[#D4567D] transition-colors min-h-[48px]">
                      <span>{faq.question}</span>
                      <span className="text-lg transition-transform group-open:rotate-180 text-[#D4567D] ml-3 shrink-0">▼</span>
                    </summary>
                    <div className="p-4 sm:p-5 pt-0 text-base text-gray-700 border-t border-gray-200/60 leading-relaxed font-normal">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#FDF2F8] p-4 rounded-xl border border-pink-200">
                <span className="text-sm font-medium text-gray-800 text-center sm:text-left">
                  Tem alguma outra dúvida específica sobre o seu caso?
                </span>
                <a
                  href={getWhatsAppLink('FAQ Dúvidas Facebook')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[42px] px-5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm flex items-center gap-2 shadow-sm whitespace-nowrap"
                >
                  <MessageCircle size={18} />
                  <span>Tirar Dúvida no WhatsApp</span>
                </a>
              </div>
            </article>

            {/* ------------------------------------------------------------------- */}
            {/* POST 8: ATENDIMENTO DOMICILIAR MARQUEE (ONDE ATENDEMOS)             */}
            {/* ------------------------------------------------------------------- */}
            <article className="bg-white rounded-2xl shadow-sm border border-pink-100/80 p-5 sm:p-6 space-y-4">
              <div className="border-b border-gray-100 pb-3">
                <span className="text-[#D4567D] text-xs font-bold uppercase tracking-wider block mb-1">Cobertura em Curitiba e RMC</span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
                  Atendimento Domiciliar VIP em Todos os Bairros
                </h3>
              </div>

              <p className="text-base text-gray-700 font-normal leading-relaxed">
                Nossa especialista atende você no conforto e na segurança da sua própria casa, sem necessidade de enfrentar trânsito ou estacionamento.
              </p>

              <LocationInfiniteMarquee />
            </article>

          </main>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. LIGHTBOX MODAL PARA IMAGENS DOS SERVIÇOS (CINEMA / TAMANHO MÁXIMO)     */}
      {/* ========================================================================= */}
      {selectedServiceIndex !== null && SERVICES[selectedServiceIndex] && (
        <div 
          onClick={() => setSelectedServiceIndex(null)}
          className="fixed inset-0 z-50 bg-black/95 sm:bg-black/90 flex items-center justify-center p-0 sm:p-4 backdrop-blur-md select-none animate-in fade-in duration-200"
          onTouchStart={(e) => { modalTouchStartX.current = e.targetTouches[0].clientX; }}
          onTouchMove={(e) => { modalTouchEndX.current = e.targetTouches[0].clientX; }}
          onTouchEnd={() => {
            if (!modalTouchStartX.current || !modalTouchEndX.current) return;
            const distance = modalTouchStartX.current - modalTouchEndX.current;
            if (distance > 45) {
              setIsModalZoomed(false);
              setSelectedServiceIndex(prev => (prev === null || prev === SERVICES.length - 1 ? 0 : prev + 1));
            } else if (distance < -45) {
              setIsModalZoomed(false);
              setSelectedServiceIndex(prev => (prev === null || prev === 0 ? SERVICES.length - 1 : prev - 1));
            }
            modalTouchStartX.current = null;
            modalTouchEndX.current = null;
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full h-full sm:h-auto sm:max-h-[96vh] sm:max-w-5xl bg-gray-950 text-white sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col relative border-0 sm:border border-pink-500/30"
          >
            {/* Top Bar do Modal */}
            <div className="p-3.5 sm:p-4 bg-black/80 border-b border-gray-800 flex items-center justify-between z-20 shrink-0">
              <div className="flex items-center gap-2.5">
                <ButterflyLogo size={24} />
                <div>
                  <h3 className="text-white font-serif font-bold text-sm sm:text-lg leading-tight line-clamp-1">
                    {SERVICES[selectedServiceIndex].title}
                  </h3>
                  <span className="text-pink-400 text-[11px] sm:text-xs font-semibold">
                    Procedimento {selectedServiceIndex + 1} de {SERVICES.length} • Divas da Micro
                  </span>
                </div>
              </div>

              {/* Botões de Controle (Zoom e Fechar) */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsModalZoomed(!isModalZoomed)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-sm"
                  title={isModalZoomed ? "Reduzir Zoom" : "Ampliar Imagem"}
                  aria-label="Zoom"
                >
                  {isModalZoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
                </button>
                <button 
                  onClick={() => setSelectedServiceIndex(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-base transition-colors"
                  aria-label="Fechar visualização"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Imagem em Escala Máxima com Navegação */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[50vh] sm:min-h-[60vh] md:min-h-[65vh]">
              {/* Seta Anterior */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalZoomed(false);
                  setSelectedServiceIndex(prev => (prev === null || prev === 0 ? SERVICES.length - 1 : prev - 1));
                }}
                className="absolute left-2 sm:left-4 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#D4567D] text-white flex items-center justify-center backdrop-blur-sm transition-all border border-white/20 shadow-xl active:scale-95"
                aria-label="Procedimento anterior"
              >
                <ChevronLeft size={26} />
              </button>

              {/* Seta Próxima */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalZoomed(false);
                  setSelectedServiceIndex(prev => (prev === null || prev === SERVICES.length - 1 ? 0 : prev + 1));
                }}
                className="absolute right-2 sm:right-4 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#D4567D] text-white flex items-center justify-center backdrop-blur-sm transition-all border border-white/20 shadow-xl active:scale-95"
                aria-label="Próximo procedimento"
              >
                <ChevronRight size={26} />
              </button>

              {/* Elemento de Imagem com Zoom */}
              <div 
                className={`w-full h-full flex items-center justify-center transition-transform duration-300 ${
                  isModalZoomed ? 'scale-150 sm:scale-125 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
                }`}
                onClick={() => setIsModalZoomed(!isModalZoomed)}
              >
                <img 
                  src={SERVICES[selectedServiceIndex].image} 
                  alt={`${SERVICES[selectedServiceIndex].title} - Especialistas em Pele Madura em Curitiba - Divas da Micro`}
                  className="max-w-full max-h-full object-contain select-none"
                />
              </div>

              {/* Selo 100% Indolor */}
              <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-pink-300 text-xs font-semibold border border-pink-400/30">
                ⭐ Técnica 100% Indolor & Natural
              </div>

              {/* Dica mobile */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-gray-300 sm:hidden pointer-events-none">
                ← Deslize para ver outros serviços →
              </div>
            </div>

            {/* Detalhes e Ações no Rodapé do Modal */}
            <div className="p-4 sm:p-5 bg-gray-900 border-t border-gray-800 shrink-0 space-y-3">
              <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                {SERVICES[selectedServiceIndex].details} {SERVICES[selectedServiceIndex].description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                {/* Indicador de Bolinhas dos Serviços */}
                <div className="flex items-center gap-1.5">
                  {SERVICES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedServiceIndex(idx);
                        setIsModalZoomed(false);
                      }}
                      className={`h-2 rounded-full transition-all ${
                        selectedServiceIndex === idx ? 'w-6 bg-[#D4567D]' : 'w-2 bg-gray-600 hover:bg-gray-400'
                      }`}
                      aria-label={`Ir para serviço ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedServiceIndex(null)}
                    className="flex-1 sm:flex-initial min-h-[42px] px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-bold text-xs sm:text-sm transition-all"
                  >
                    Fechar
                  </button>
                  <a
                    href={getWhatsAppLink(`Lightbox Facebook - ${SERVICES[selectedServiceIndex].title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial min-h-[42px] px-5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg whitespace-nowrap"
                  >
                    <MessageCircle size={18} />
                    <span>Agendar pelo WhatsApp</span>
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

export default Home;
