
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, MapPin, Calendar as CalendarIcon, 
  User, Navigation, CheckCircle2, ChevronRight, ChevronLeft,
  Sparkles, MessageCircle
} from 'lucide-react';
import { CONTACT_INFO } from '../constants';

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
    { id: 1, title: 'Contato', icon: <User size={16}/> },
    { id: 2, title: 'Endereço', icon: <MapPin size={16}/> },
    { id: 3, title: 'Data/Hora', icon: <CalendarIcon size={16}/> },
    { id: 4, title: 'Resumo', icon: <Navigation size={16}/> },
  ];

  return (
    <div className="pt-16 sm:pt-20 pb-16 bg-[#FAF8F9] min-h-screen">
      {/* Header Compacto */}
      <section className="py-8 sm:py-12 bg-white border-b border-pink-100">
        <div className="w-full max-w-4xl mx-auto px-3.5 sm:px-6 text-center space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#FDF2F8] border border-pink-200 text-[#B84A6B] px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <Sparkles size={13} className="text-[#D4567D]" />
            <span>Atendimento Personalizado 60+</span>
          </div>
          <h1 className="text-xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
            Agende Sua <span className="text-[#D4567D]">Avaliação Gratuita</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-700 max-w-xl mx-auto leading-[1.45] font-normal">
            Preencha seus dados para organizarmos seu atendimento em domicílio ou estúdio em Curitiba e RMC.
          </p>
        </div>
      </section>

      {/* Form Container */}
      <section className="py-6 sm:py-10 max-w-3xl mx-auto px-2.5 sm:px-4">
        
        {/* Stepper Compacto */}
        <div className="flex justify-between items-center mb-6 relative px-2">
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
          {steps.map((s) => (
            <div key={s.id} className="relative z-10 flex flex-col items-center gap-1 bg-[#FAF8F9] px-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border font-bold text-xs shadow-2xs transition-all ${
                step >= s.id ? 'bg-[#D4567D] border-[#D4567D] text-white' : 'bg-white border-gray-300 text-gray-500'
              }`}>
                {step > s.id ? <CheckCircle2 size={16} /> : s.icon}
              </div>
              <span className={`text-[11px] font-semibold ${
                step >= s.id ? 'text-[#B84A6B]' : 'text-gray-500'
              }`}>{s.title}</span>
            </div>
          ))}
        </div>

        {/* Card Form */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-pink-100 shadow-xs p-4 sm:p-7">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 border-b border-pink-100 pb-2">
                  <User className="text-[#D4567D]" size={20} />
                  <h2 className="text-sm sm:text-base font-serif font-bold text-gray-900">Passo 1: Seus Dados</h2>
                </div>

                <div className="space-y-3">
                  <div>
                    <label htmlFor="input-nome" className="block text-xs font-bold text-gray-900 mb-1">
                      Seu Nome Completo *
                    </label>
                    <input 
                      id="input-nome"
                      type="text" 
                      required
                      className="w-full h-10 px-3.5 bg-white rounded-xl border border-gray-300 focus:border-[#D4567D] focus:ring-1 focus:ring-[#FDF2F8] text-gray-900 text-xs sm:text-sm font-medium outline-none"
                      placeholder="Ex: Maria das Graças"
                      value={formData.nome}
                      onChange={e => setFormData({...formData, nome: e.target.value})}
                    />
                  </div>

                  <div>
                    <label htmlFor="input-whatsapp" className="block text-xs font-bold text-gray-900 mb-1">
                      Seu WhatsApp (com DDD) *
                    </label>
                    <input 
                      id="input-whatsapp"
                      type="tel" 
                      required
                      className="w-full h-10 px-3.5 bg-white rounded-xl border border-gray-300 focus:border-[#D4567D] focus:ring-1 focus:ring-[#FDF2F8] text-gray-900 text-xs sm:text-sm font-medium outline-none"
                      placeholder="Ex: (41) 99999-9999"
                      value={formData.whatsapp}
                      onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                    />
                  </div>

                  <div>
                    <label htmlFor="select-servico" className="block text-xs font-bold text-gray-900 mb-1">
                      Qual serviço deseja realizar? *
                    </label>
                    <select 
                      id="select-servico"
                      className="w-full h-10 px-3.5 bg-white rounded-xl border border-gray-300 focus:border-[#D4567D] focus:ring-1 focus:ring-[#FDF2F8] text-gray-900 text-xs sm:text-sm font-medium outline-none cursor-pointer"
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

                <div className="pt-2 flex flex-col items-center gap-1">
                  <button 
                    id="btn-passo-1-proximo"
                    onClick={handleNext}
                    disabled={!formData.nome || !formData.whatsapp}
                    className="w-full min-h-[40px] h-10 bg-[#D4567D] hover:bg-[#B84A6B] text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 disabled:opacity-50 transition-all shadow-xs active:scale-98"
                  >
                    <span>Avançar para Endereço</span> <ChevronRight size={17} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 border-b border-pink-100 pb-2">
                  <MapPin className="text-[#D4567D]" size={20} />
                  <h2 className="text-sm sm:text-base font-serif font-bold text-gray-900">Passo 2: Local de Atendimento</h2>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
                    <div className="sm:col-span-3">
                      <label htmlFor="input-rua" className="block text-xs font-bold text-gray-900 mb-1">
                        Rua / Avenida *
                      </label>
                      <input 
                        id="input-rua"
                        type="text" 
                        required
                        className="w-full h-10 px-3.5 bg-white rounded-xl border border-gray-300 focus:border-[#D4567D] focus:ring-1 focus:ring-[#FDF2F8] text-gray-900 text-xs sm:text-sm font-medium outline-none"
                        placeholder="Ex: Rua Comendador Araújo"
                        value={formData.rua}
                        onChange={e => setFormData({...formData, rua: e.target.value})}
                      />
                    </div>
                    <div>
                      <label htmlFor="input-numero" className="block text-xs font-bold text-gray-900 mb-1">
                        Número *
                      </label>
                      <input 
                        id="input-numero"
                        type="text" 
                        required
                        className="w-full h-10 px-3.5 bg-white rounded-xl border border-gray-300 focus:border-[#D4567D] focus:ring-1 focus:ring-[#FDF2F8] text-gray-900 text-xs sm:text-sm font-medium outline-none"
                        placeholder="Ex: 500"
                        value={formData.numero}
                        onChange={e => setFormData({...formData, numero: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label htmlFor="input-bairro" className="block text-xs font-bold text-gray-900 mb-1">
                        Bairro ou Cidade (Curitiba/RMC) *
                      </label>
                      <input 
                        id="input-bairro"
                        type="text" 
                        required
                        className="w-full h-10 px-3.5 bg-white rounded-xl border border-gray-300 focus:border-[#D4567D] focus:ring-1 focus:ring-[#FDF2F8] text-gray-900 text-xs sm:text-sm font-medium outline-none"
                        placeholder="Ex: Batel, Água Verde, Pinhais"
                        value={formData.bairro}
                        onChange={e => setFormData({...formData, bairro: e.target.value})}
                      />
                    </div>
                    <div>
                      <label htmlFor="input-cep" className="block text-xs font-bold text-gray-900 mb-1">
                        CEP (Opcional)
                      </label>
                      <input 
                        id="input-cep"
                        type="text" 
                        className="w-full h-10 px-3.5 bg-white rounded-xl border border-gray-300 focus:border-[#D4567D] focus:ring-1 focus:ring-[#FDF2F8] text-gray-900 text-xs sm:text-sm font-medium outline-none"
                        placeholder="80000-000"
                        value={formData.cep}
                        onChange={e => setFormData({...formData, cep: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-2.5 pt-2">
                  <button 
                    onClick={handleBack} 
                    className="min-h-[40px] h-10 px-4 bg-gray-100 text-gray-800 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1 hover:bg-gray-200 transition-all active:scale-98"
                  >
                    <ChevronLeft size={16} /> Voltar
                  </button>
                  <button 
                    onClick={handleNext}
                    disabled={!formData.rua || !formData.numero || !formData.bairro}
                    className="flex-1 min-h-[40px] h-10 bg-[#D4567D] hover:bg-[#B84A6B] text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 disabled:opacity-50 transition-all shadow-xs active:scale-98"
                  >
                    <span>Avançar para Data</span> <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 border-b border-pink-100 pb-2">
                  <CalendarIcon className="text-[#D4567D]" size={20} />
                  <h2 className="text-sm sm:text-base font-serif font-bold text-gray-900">Passo 3: Data e Horário</h2>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label htmlFor="input-data" className="block text-xs font-bold text-gray-900 mb-1">
                        Data Preferencial *
                      </label>
                      <input 
                        id="input-data"
                        type="date" 
                        required
                        className="w-full h-10 px-3.5 bg-white rounded-xl border border-gray-300 focus:border-[#D4567D] focus:ring-1 focus:ring-[#FDF2F8] text-gray-900 text-xs sm:text-sm font-medium outline-none"
                        value={formData.data}
                        onChange={e => setFormData({...formData, data: e.target.value})}
                      />
                    </div>
                    <div>
                      <label htmlFor="select-horario" className="block text-xs font-bold text-gray-900 mb-1">
                        Horário Sugerido *
                      </label>
                      <select 
                        id="select-horario"
                        className="w-full h-10 px-3.5 bg-white rounded-xl border border-gray-300 focus:border-[#D4567D] focus:ring-1 focus:ring-[#FDF2F8] text-gray-900 text-xs sm:text-sm font-medium outline-none cursor-pointer"
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
                    <label htmlFor="textarea-obs" className="block text-xs font-bold text-gray-900 mb-1">
                      Observações sobre seu caso (Opcional)
                    </label>
                    <textarea 
                      id="textarea-obs"
                      className="w-full p-3 bg-white rounded-xl border border-gray-300 focus:border-[#D4567D] focus:ring-1 focus:ring-[#FDF2F8] text-gray-900 text-xs sm:text-sm font-medium outline-none"
                      placeholder="Ex: Minha sobrancelha tem pigmento cinza antigo..."
                      rows={2}
                      value={formData.mensagem}
                      onChange={e => setFormData({...formData, mensagem: e.target.value})}
                    />
                  </div>
                </div>

                <div className="flex gap-2.5 pt-2">
                  <button 
                    onClick={handleBack} 
                    className="min-h-[40px] h-10 px-4 bg-gray-100 text-gray-800 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1 hover:bg-gray-200 transition-all active:scale-98"
                  >
                    <ChevronLeft size={16} /> Voltar
                  </button>
                  <button 
                    onClick={calculateDistance}
                    disabled={!formData.data}
                    className="flex-1 min-h-[40px] h-10 bg-[#D4567D] hover:bg-[#B84A6B] text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 disabled:opacity-50 transition-all shadow-xs active:scale-98"
                  >
                    {isCalculating ? 'Calculando...' : <span>Revisar e Confirmar</span>} <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div 
                key="step4"
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                className="space-y-3.5 text-center"
              >
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={26} />
                </div>
                
                <div>
                  <h2 className="text-base sm:text-xl font-serif font-bold text-gray-900">
                    Tudo Pronto, {formData.nome.split(' ')[0]}!
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 font-normal">
                    Clique abaixo para enviar ao WhatsApp da especialista.
                  </p>
                </div>

                <div className="bg-[#FAF8F9] p-3.5 rounded-xl border border-pink-100 text-left space-y-1.5 text-xs sm:text-sm">
                  <div className="flex justify-between border-b border-pink-100/60 pb-1">
                    <span className="text-gray-500 font-medium">Serviço:</span>
                    <span className="font-bold text-gray-900">{formData.servico}</span>
                  </div>
                  <div className="flex justify-between border-b border-pink-100/60 pb-1">
                    <span className="text-gray-500 font-medium">Data/Hora:</span>
                    <span className="font-bold text-gray-900">{formData.data} às {formData.horario}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 font-medium">Local:</span>
                    <span className="font-bold text-gray-900">{formData.bairro}</span>
                  </div>
                </div>

                <div className="flex gap-2.5 pt-2">
                  <button 
                    onClick={handleBack} 
                    className="min-h-[40px] h-10 px-4 bg-gray-100 text-gray-800 rounded-xl font-bold text-xs sm:text-sm hover:bg-gray-200 transition-all active:scale-98"
                  >
                    Alterar
                  </button>
                  <button 
                    id="btn-submit-whatsapp-final"
                    onClick={handleSubmit}
                    className="flex-1 min-h-[40px] h-10 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs active:scale-98"
                  >
                    <MessageCircle size={18} />
                    <span>Enviar Agendamento no WhatsApp</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Direct Call Section */}
      <section className="max-w-3xl mx-auto px-2.5 sm:px-4">
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-pink-100 text-center space-y-2 shadow-2xs">
          <h3 className="text-sm sm:text-base font-serif font-bold text-gray-900">
            Prefere Ligar Diretamente?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
            Atendimento de segunda a sexta, das 10h às 20h com total atenção para esclarecer suas dúvidas.
          </p>
          <div className="pt-1 flex justify-center">
            <a
              href={CONTACT_INFO.phoneCall}
              className="inline-flex min-h-[40px] h-10 items-center gap-2 bg-gray-900 text-white px-5 rounded-xl font-bold text-xs sm:text-sm hover:bg-gray-800 transition-all shadow-2xs active:scale-98"
            >
              <Phone size={15} className="text-[#D4567D]" />
              <span>Ligar Agora</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

