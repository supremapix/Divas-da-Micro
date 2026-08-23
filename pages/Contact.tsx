
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, MessageSquare, Send, Calendar as CalendarIcon, 
  Clock, User, Navigation, CheckCircle, ChevronRight, ChevronLeft, Map,
  ShieldCheck, Heart, Sparkles, MessageCircle
} from 'lucide-react';
import { CONTACT_INFO, getWhatsAppLink } from '../constants';

const BATEL_COORDS = { lat: -25.4474, lng: -49.2847 };

const Contact: React.FC = () => {
  const [step, setStep] = useState(1);
  const [distance, setDistance] = useState<number | null>(null);
  const [travelTime, setTravelTime] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    servico: 'Correção de Micropigmentação de Sobrancelhas',
    rua: '',
    numero: '',
    bairro: '',
    cep: '',
    data: '',
    horario: '10:00',
    mensagem: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Agendamento VIP | Divas da Micro Curitiba - Atendimento Domiciliar";
  }, []);

  const calculateDistance = () => {
    if (!navigator.geolocation) {
      setStep(4);
      return;
    }

    setIsCalculating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        
        // Haversine formula
        const R = 6371; // km
        const dLat = (userLat - BATEL_COORDS.lat) * Math.PI / 180;
        const dLon = (userLng - BATEL_COORDS.lng) * Math.PI / 180;
        const a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(BATEL_COORDS.lat * Math.PI / 180) * Math.cos(userLat * Math.PI / 180) * 
          Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        const d = R * c;
        
        setDistance(parseFloat(d.toFixed(1)));
        setTravelTime(Math.round(d * 3 + 10));
        setIsCalculating(false);
        setStep(4);
      },
      () => {
        setIsCalculating(false);
        setStep(4);
      }
    );
  };

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const timeWindow = travelTime 
      ? `Estimativa de chegada: entre ${travelTime - 20} e ${travelTime + 20} minutos após saída do Batel.`
      : '';

    const text = `*NOVO AGENDAMENTO DIVAS DA MICRO*%0A%0A` +
      `*CLIENTE:* ${formData.nome}%0A` +
      `*WHATSAPP:* ${formData.whatsapp}%0A` +
      `*SERVIÇO:* ${formData.servico}%0A%0A` +
      `*ENDEREÇO:* ${formData.rua}, ${formData.numero}%0A` +
      `*BAIRRO:* ${formData.bairro} | *CEP:* ${formData.cep}%0A%0A` +
      `*DATA PREFERENCIAL:* ${formData.data} às ${formData.horario}%0A` +
      `${distance ? `*DISTÂNCIA DO BATEL:* ${distance}km%0A` : ''}` +
      `${timeWindow ? `*LOGÍSTICA:* ${timeWindow}%0A` : ''}%0A` +
      `*OBSERVAÇÕES:* ${formData.mensagem || 'Nenhuma'}`;
    
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${text}`, '_blank');
  };

  const steps = [
    { id: 1, title: 'Identificação', icon: <User size={20}/> },
    { id: 2, title: 'Endereço', icon: <MapPin size={20}/> },
    { id: 3, title: 'Data e Hora', icon: <CalendarIcon size={20}/> },
    { id: 4, title: 'Confirmação', icon: <Navigation size={20}/> },
  ];

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <section className="py-12 md:py-20 relative overflow-hidden bg-gradient-to-b from-[#FDF2F8]/30 via-white to-white">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img 
            src="https://img.supremasite.com.br/divas/luxury_spa_banner.webp" 
            alt="Luxury Spa Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 text-center mb-10 max-w-3xl relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FDF2F8] text-[#B84A6B] font-bold uppercase tracking-wider text-xs md:text-sm mb-4 border border-[#D4567D]/30">
            Especialistas em Mulheres 60+
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 leading-tight">
            Agende Sua <span className="text-[#D4567D]">Avaliação Gratuita</span>
          </h1>
          <p className="text-lg text-gray-700 font-normal leading-relaxed">
            Preencha seus dados abaixo para organizarmos o melhor horário no conforto do seu lar ou fale direto conosco no WhatsApp.
          </p>
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          {/* Progress Indicator */}
          <div className="flex justify-between mb-10 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
            {steps.map((s) => (
              <div key={s.id} className="relative z-10 flex flex-col items-center gap-2">
                <div className={`w-12 h-12 min-w-[48px] min-h-[48px] rounded-full flex items-center justify-center transition-all duration-300 border-2 font-bold text-base shadow-sm ${
                  step >= s.id ? 'bg-[#D4567D] border-[#D4567D] text-white' : 'bg-white border-gray-300 text-gray-600'
                }`}>
                  {step > s.id ? <CheckCircle size={22} /> : s.icon}
                </div>
                <span className={`text-xs md:text-sm font-bold ${
                  step >= s.id ? 'text-[#B84A6B]' : 'text-gray-600'
                }`}>{s.title}</span>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-3xl shadow-lg border border-gray-200 p-6 md:p-12">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: -20, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-serif font-bold text-gray-900 flex items-center gap-3">
                    <User className="text-[#D4567D]" size={28} />
                    <span>Passo 1: Seus Dados de Contato</span>
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="input-nome" className="block text-base font-bold text-gray-900 mb-2">
                        Seu Nome Completo *
                      </label>
                      <input 
                        id="input-nome"
                        type="text" 
                        required
                        className="w-full min-h-[52px] px-5 py-3.5 bg-white rounded-2xl border-2 border-gray-300 focus:border-[#D4567D] focus:ring-2 focus:ring-[#FDF2F8] transition-all text-gray-900 text-base font-medium outline-none"
                        placeholder="Ex: Maria das Graças"
                        value={formData.nome}
                        onChange={e => setFormData({...formData, nome: e.target.value})}
                      />
                    </div>

                    <div>
                      <label htmlFor="input-whatsapp" className="block text-base font-bold text-gray-900 mb-2">
                        Seu WhatsApp (com DDD) *
                      </label>
                      <input 
                        id="input-whatsapp"
                        type="tel" 
                        required
                        className="w-full min-h-[52px] px-5 py-3.5 bg-white rounded-2xl border-2 border-gray-300 focus:border-[#D4567D] focus:ring-2 focus:ring-[#FDF2F8] transition-all text-gray-900 text-base font-medium outline-none"
                        placeholder="Ex: (41) 99999-9999"
                        value={formData.whatsapp}
                        onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                      />
                    </div>

                    <div>
                      <label htmlFor="select-servico" className="block text-base font-bold text-gray-900 mb-2">
                        Qual serviço deseja realizar? *
                      </label>
                      <select 
                        id="select-servico"
                        className="w-full min-h-[52px] px-5 py-3.5 bg-white rounded-2xl border-2 border-gray-300 focus:border-[#D4567D] focus:ring-2 focus:ring-[#FDF2F8] transition-all text-gray-900 text-base font-medium outline-none cursor-pointer"
                        value={formData.servico}
                        onChange={e => setFormData({...formData, servico: e.target.value})}
                      >
                        <option>Correção de Micropigmentação de Sobrancelhas</option>
                        <option>Correção de Sobrancelhas para Mulheres 50+ e 60+</option>
                        <option>Correção de Delineado de Olhos</option>
                        <option>Correção e Revitalização Labial</option>
                        <option>Atendimento Domiciliar VIP Curitiba e RMC</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col items-center">
                    <button 
                      id="btn-passo-1-proximo"
                      onClick={handleNext}
                      disabled={!formData.nome || !formData.whatsapp}
                      className="w-full min-h-[52px] bg-[#D4567D] hover:bg-[#B84A6B] text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-50 transition-all shadow-md active:scale-95"
                    >
                      <span>Avançar</span> <ChevronRight size={22} />
                    </button>
                    <span className="text-xs text-gray-500 mt-1.5 font-medium">Próximo: endereço de atendimento</span>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: -20, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-serif font-bold text-gray-900 flex items-center gap-3">
                    <MapPin className="text-[#D4567D]" size={28} />
                    <span>Passo 2: Local do Atendimento Domiciliar</span>
                  </h2>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                      <div className="sm:col-span-3">
                        <label htmlFor="input-rua" className="block text-base font-bold text-gray-900 mb-2">
                          Rua / Avenida *
                        </label>
                        <input 
                          id="input-rua"
                          type="text" 
                          required
                          className="w-full min-h-[52px] px-5 py-3.5 bg-white rounded-2xl border-2 border-gray-300 focus:border-[#D4567D] focus:ring-2 focus:ring-[#FDF2F8] transition-all text-gray-900 text-base font-medium outline-none"
                          placeholder="Ex: Rua Comendador Araújo"
                          value={formData.rua}
                          onChange={e => setFormData({...formData, rua: e.target.value})}
                        />
                      </div>
                      <div>
                        <label htmlFor="input-numero" className="block text-base font-bold text-gray-900 mb-2">
                          Número *
                        </label>
                        <input 
                          id="input-numero"
                          type="text" 
                          required
                          className="w-full min-h-[52px] px-5 py-3.5 bg-white rounded-2xl border-2 border-gray-300 focus:border-[#D4567D] focus:ring-2 focus:ring-[#FDF2F8] transition-all text-gray-900 text-base font-medium outline-none"
                          placeholder="Ex: 500"
                          value={formData.numero}
                          onChange={e => setFormData({...formData, numero: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="input-bairro" className="block text-base font-bold text-gray-900 mb-2">
                          Bairro ou Cidade (Curitiba/RMC) *
                        </label>
                        <input 
                          id="input-bairro"
                          type="text" 
                          required
                          className="w-full min-h-[52px] px-5 py-3.5 bg-white rounded-2xl border-2 border-gray-300 focus:border-[#D4567D] focus:ring-2 focus:ring-[#FDF2F8] transition-all text-gray-900 text-base font-medium outline-none"
                          placeholder="Ex: Batel, Água Verde, Pinhais"
                          value={formData.bairro}
                          onChange={e => setFormData({...formData, bairro: e.target.value})}
                        />
                      </div>
                      <div>
                        <label htmlFor="input-cep" className="block text-base font-bold text-gray-900 mb-2">
                          CEP (Opcional)
                        </label>
                        <input 
                          id="input-cep"
                          type="text" 
                          className="w-full min-h-[52px] px-5 py-3.5 bg-white rounded-2xl border-2 border-gray-300 focus:border-[#D4567D] focus:ring-2 focus:ring-[#FDF2F8] transition-all text-gray-900 text-base font-medium outline-none"
                          placeholder="80000-000"
                          value={formData.cep}
                          onChange={e => setFormData({...formData, cep: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button 
                      onClick={handleBack} 
                      className="flex-1 min-h-[52px] bg-gray-200 text-gray-900 py-3.5 rounded-2xl font-bold text-base flex items-center justify-center gap-2 hover:bg-gray-300 transition-all"
                    >
                      <ChevronLeft size={20} /> Voltar
                    </button>
                    <div className="flex-[2] flex flex-col items-center">
                      <button 
                        onClick={handleNext}
                        disabled={!formData.rua || !formData.numero || !formData.bairro}
                        className="w-full min-h-[52px] bg-[#D4567D] hover:bg-[#B84A6B] text-white py-3.5 rounded-2xl font-bold text-base flex items-center justify-center gap-2 disabled:opacity-50 transition-all shadow-md"
                      >
                        <span>Avançar</span> <ChevronRight size={20} />
                      </button>
                      <span className="text-xs text-gray-500 mt-1.5 font-medium">Próximo: escolha de data</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: -20, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-serif font-bold text-gray-900 flex items-center gap-3">
                    <CalendarIcon className="text-[#D4567D]" size={28} />
                    <span>Passo 3: Escolha a Melhor Data e Horário</span>
                  </h2>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="input-data" className="block text-base font-bold text-gray-900 mb-2">
                          Data Preferencial *
                        </label>
                        <input 
                          id="input-data"
                          type="date" 
                          required
                          className="w-full min-h-[52px] px-5 py-3.5 bg-white rounded-2xl border-2 border-gray-300 focus:border-[#D4567D] focus:ring-2 focus:ring-[#FDF2F8] transition-all text-gray-900 text-base font-medium outline-none"
                          value={formData.data}
                          onChange={e => setFormData({...formData, data: e.target.value})}
                        />
                      </div>
                      <div>
                        <label htmlFor="select-horario" className="block text-base font-bold text-gray-900 mb-2">
                          Horário Sugerido *
                        </label>
                        <select 
                          id="select-horario"
                          className="w-full min-h-[52px] px-5 py-3.5 bg-white rounded-2xl border-2 border-gray-300 focus:border-[#D4567D] focus:ring-2 focus:ring-[#FDF2F8] transition-all text-gray-900 text-base font-medium outline-none cursor-pointer"
                          value={formData.horario}
                          onChange={e => setFormData({...formData, horario: e.target.value})}
                        >
                          <option>10:00 (Manhã)</option>
                          <option>13:30 (Tarde)</option>
                          <option>16:00 (Tarde)</option>
                          <option>18:30 (Noite)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="textarea-obs" className="block text-base font-bold text-gray-900 mb-2">
                        Observações sobre seu caso (Opcional)
                      </label>
                      <textarea 
                        id="textarea-obs"
                        className="w-full px-5 py-3.5 bg-white rounded-2xl border-2 border-gray-300 focus:border-[#D4567D] focus:ring-2 focus:ring-[#FDF2F8] transition-all text-gray-900 text-base font-medium outline-none"
                        placeholder="Ex: Minha sobrancelha tem pigmento cinza antigo de 4 anos atrás..."
                        rows={3}
                        value={formData.mensagem}
                        onChange={e => setFormData({...formData, mensagem: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button 
                      onClick={handleBack} 
                      className="flex-1 min-h-[52px] bg-gray-200 text-gray-900 py-3.5 rounded-2xl font-bold text-base flex items-center justify-center gap-2 hover:bg-gray-300 transition-all"
                    >
                      <ChevronLeft size={20} /> Voltar
                    </button>
                    <div className="flex-[2] flex flex-col items-center">
                      <button 
                        onClick={calculateDistance}
                        disabled={!formData.data}
                        className="w-full min-h-[52px] bg-[#D4567D] hover:bg-[#B84A6B] text-white py-3.5 rounded-2xl font-bold text-base flex items-center justify-center gap-2 hover:bg-opacity-90 disabled:opacity-50 transition-all shadow-lg"
                      >
                        {isCalculating ? 'Calculando...' : <span>Confirmar</span>} <ChevronRight size={20} />
                      </button>
                      <span className="text-xs text-gray-500 mt-1.5 font-medium">Revisar dados e enviar</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div 
                  key="step4"
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: -20, x: 0 }}
                  className="space-y-6 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle size={40} />
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
                    Tudo Pronto, {formData.nome.split(' ')[0]}!
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 font-normal">
                    Confira o resumo do seu agendamento e clique no botão abaixo para enviar diretamente ao WhatsApp da nossa especialista.
                  </p>

                  <div className="bg-white p-6 rounded-2xl border border-gray-200 text-left space-y-3">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600 font-medium">Serviço:</span>
                      <span className="font-bold text-gray-900">{formData.servico}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600 font-medium">Data e Horário:</span>
                      <span className="font-bold text-gray-900">{formData.data} às {formData.horario}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600 font-medium">Local:</span>
                      <span className="font-bold text-gray-900">{formData.bairro} ({formData.rua}, {formData.numero})</span>
                    </div>
                    {distance && (
                      <div className="flex justify-between">
                        <span className="text-gray-600 font-medium">Distância do Batel:</span>
                        <span className="font-bold text-[#B84A6B]">{distance} km</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button 
                      onClick={handleBack} 
                      className="min-h-[52px] bg-gray-200 text-gray-900 px-6 py-4 rounded-2xl font-bold text-base hover:bg-gray-300 transition-all"
                    >
                      Alterar Dados
                    </button>
                    <div className="flex flex-col items-center flex-1">
                      <button 
                        id="btn-submit-whatsapp-final"
                        onClick={handleSubmit}
                        className="w-full min-h-[52px] bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-6 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl active:scale-95"
                      >
                        <MessageCircle size={24} />
                        <span>WhatsApp</span>
                      </button>
                      <span className="text-xs text-gray-500 mt-1.5 font-medium">Envie seu agendamento pelo WhatsApp</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Direct Contact Phone & Info */}
      <section className="py-12 bg-[#FDF2F8]/60 border-t border-[#D4567D]/20">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl space-y-4">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900">
            Prefere Ligar Diretamente?
          </h3>
          <p className="text-base text-gray-700 font-normal">
            Nossa equipe atende de segunda a sexta, das 10h às 20h com total atenção e paciência para tirar suas dúvidas.
          </p>
          <div className="flex flex-col items-center">
            <a
              href={CONTACT_INFO.phoneCall}
              className="inline-flex min-h-[48px] items-center gap-3 bg-gray-900 text-white px-8 py-3.5 rounded-2xl font-bold text-base hover:bg-gray-800 transition-all shadow-md"
            >
              <Phone size={20} className="text-[#D4567D]" />
              <span>Ligar</span>
            </a>
            <span className="text-xs text-gray-500 mt-1.5 font-medium">Atendimento telefônico direto</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

