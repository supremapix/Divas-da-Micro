
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Added ShieldCheck and Heart to imports to fix missing icon errors
import { 
  Mail, Phone, MapPin, MessageSquare, Send, Calendar as CalendarIcon, 
  Clock, User, Navigation, CheckCircle, ChevronRight, ChevronLeft, Map,
  ShieldCheck, Heart
} from 'lucide-react';
import { CONTACT_INFO, COLORS } from '../constants';

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
    servico: 'Correção de Sobrancelhas',
    rua: '',
    numero: '',
    bairro: '',
    cep: '',
    data: '',
    horario: '',
    mensagem: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Agenda VIP | Divas da Micro - Atendimento Domiciliar";
  }, []);

  const calculateDistance = () => {
    if (!navigator.geolocation) {
      alert("Geolocalização não é suportada pelo seu navegador.");
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
        // Estimate: 3 mins per km + 10 mins base prep/parking
        setTravelTime(Math.round(d * 3 + 10));
        setIsCalculating(false);
        setStep(4);
      },
      (error) => {
        console.error(error);
        setIsCalculating(false);
        alert("Não foi possível obter sua localização. Vamos prosseguir com o agendamento padrão.");
        setStep(4);
      }
    );
  };

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const timeWindow = travelTime 
      ? `Estimativa de chegada: entre ${travelTime - 25} e ${travelTime + 25} minutos após saída do Batel.`
      : '';

    const text = `*NOVO AGENDAMENTO DIVAS DA MICRO*%0A%0A` +
      `*CLIENTE:* ${formData.nome}%0A` +
      `*CONTATO:* ${formData.whatsapp}%0A` +
      `*SERVIÇO:* ${formData.servico}%0A%0A` +
      `*ENDEREÇO:* ${formData.rua}, ${formData.numero}%0A` +
      `*BAIRRO:* ${formData.bairro} | *CEP:* ${formData.cep}%0A%0A` +
      `*DATA:* ${formData.data} às ${formData.horario}%0A` +
      `${distance ? `*DISTÂNCIA:* ${distance}km do Batel%0A` : ''}` +
      `${timeWindow ? `*LOGÍSTICA:* ${timeWindow}%0A` : ''}%0A` +
      `*MENSAGEM:* ${formData.mensagem}`;
    
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${text}`, '_blank');
  };

  const steps = [
    { id: 1, title: 'Identificação', icon: <User size={18}/> },
    { id: 2, title: 'Endereço', icon: <MapPin size={18}/> },
    { id: 3, title: 'Data e Hora', icon: <CalendarIcon size={18}/> },
    { id: 4, title: 'Logística', icon: <Navigation size={18}/> },
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 text-center mb-12">
          <motion.span 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-[#D4567D] font-bold uppercase tracking-widest text-xs mb-3 block"
          >
            Exclusivo para Mulheres 60+
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Agenda <span className="text-[#D4567D]">Diva Domiciliar</span></h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Siga os passos abaixo para reservar sua correção de micropigmentação no conforto do seu lar.
          </p>
        </div>

        <div className="container mx-auto px-4 max-w-4xl">
          {/* Progress Bar */}
          <div className="flex justify-between mb-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
            {steps.map((s) => (
              <div key={s.id} className="relative z-10 flex flex-col items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border-2 ${
                  step >= s.id ? 'bg-[#D4567D] border-[#D4567D] text-white' : 'bg-white border-gray-200 text-gray-400'
                }`}>
                  {step > s.id ? <CheckCircle size={20} /> : s.icon}
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-tighter hidden md:block ${
                  step >= s.id ? 'text-[#D4567D]' : 'text-gray-400'
                }`}>{s.title}</span>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-white p-8 md:p-12">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: -20, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3">
                    <User className="text-[#D4567D]" /> Conte-nos quem você é
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Nome Completo</label>
                      <input 
                        type="text" required
                        className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-[#D4567D] transition-all"
                        placeholder="Como gostaria de ser chamada?"
                        value={formData.nome}
                        onChange={e => setFormData({...formData, nome: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">WhatsApp</label>
                      <input 
                        type="tel" required
                        className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-[#D4567D] transition-all"
                        placeholder="(41) 99999-9999"
                        value={formData.whatsapp}
                        onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Qual serviço deseja realizar?</label>
                    <select 
                      className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-[#D4567D] transition-all"
                      value={formData.servico}
                      onChange={e => setFormData({...formData, servico: e.target.value})}
                    >
                      <option>Correção de Sobrancelhas</option>
                      <option>Correção de Olhos</option>
                      <option>Correção Labial</option>
                      <option>Micropigmentação Natural</option>
                    </select>
                  </div>
                  <div className="pt-6">
                    <button 
                      onClick={handleNext}
                      disabled={!formData.nome || !formData.whatsapp}
                      className="w-full bg-gray-950 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 disabled:opacity-50 transition-all"
                    >
                      Próximo Passo <ChevronRight size={20} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: -20, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3">
                    <MapPin className="text-[#D4567D]" /> Onde será o atendimento?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="md:col-span-3 space-y-2">
                      <label className="text-sm font-bold text-gray-700">Rua / Avenida</label>
                      <input 
                        type="text" required
                        className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-[#D4567D] transition-all"
                        placeholder="Nome da rua"
                        value={formData.rua}
                        onChange={e => setFormData({...formData, rua: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Número</label>
                      <input 
                        type="text" required
                        className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-[#D4567D] transition-all"
                        placeholder="Ex: 123"
                        value={formData.numero}
                        onChange={e => setFormData({...formData, numero: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Bairro</label>
                      <input 
                        type="text" required
                        className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-[#D4567D] transition-all"
                        placeholder="Ex: Batel"
                        value={formData.bairro}
                        onChange={e => setFormData({...formData, bairro: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">CEP</label>
                      <input 
                        type="text" required
                        className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-[#D4567D] transition-all"
                        placeholder="80.000-000"
                        value={formData.cep}
                        onChange={e => setFormData({...formData, cep: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 pt-6">
                    <button onClick={handleBack} className="flex-1 bg-gray-100 text-gray-600 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-all">
                      <ChevronLeft size={20} /> Voltar
                    </button>
                    <button 
                      onClick={handleNext}
                      disabled={!formData.rua || !formData.numero || !formData.bairro}
                      className="flex-[2] bg-gray-950 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 disabled:opacity-50 transition-all"
                    >
                      Continuar <ChevronRight size={20} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: -20, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3">
                    <CalendarIcon className="text-[#D4567D]" /> Escolha a melhor data
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Data Preferencial</label>
                      <input 
                        type="date" required
                        className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-[#D4567D] transition-all"
                        value={formData.data}
                        onChange={e => setFormData({...formData, data: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Horário Sugerido</label>
                      <select 
                        className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-[#D4567D] transition-all"
                        value={formData.horario}
                        onChange={e => setFormData({...formData, horario: e.target.value})}
                      >
                        <option value="">Selecione...</option>
                        <option>10:00</option>
                        <option>13:30</option>
                        <option>16:00</option>
                        <option>18:30</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Observações Extras (Opcional)</label>
                    <textarea 
                      className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-[#D4567D] transition-all"
                      placeholder="Algum detalhe sobre sua pele ou procedimento anterior?"
                      rows={3}
                      value={formData.mensagem}
                      onChange={e => setFormData({...formData, mensagem: e.target.value})}
                    />
                  </div>
                  <div className="flex gap-4 pt-6">
                    <button onClick={handleBack} className="flex-1 bg-gray-100 text-gray-600 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-all">
                      <ChevronLeft size={20} /> Voltar
                    </button>
                    <button 
                      onClick={calculateDistance}
                      disabled={!formData.data || !formData.horario}
                      className="flex-[2] bg-[#D4567D] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#b84a6b] disabled:opacity-50 transition-all shadow-lg"
                    >
                      {isCalculating ? 'Calculando Rota...' : 'Calcular Chegada VIP'} <Navigation size={20} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div 
                  key="step4"
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: -20, x: 0 }}
                  className="space-y-8"
                >
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle size={48} />
                    </div>
                    <h2 className="text-3xl font-serif font-bold">Quase lá, Diva!</h2>
                    <p className="text-gray-500">Confira a logística estimada para o seu endereço.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 bg-gray-50 rounded-[2rem] border border-gray-100 flex items-center gap-4">
                      <div className="bg-white p-3 rounded-xl shadow-sm"><Map className="text-[#D4567D]" size={24} /></div>
                      <div>
                        <p className="text-[10px] font-bold uppercase text-gray-400">Distância</p>
                        <p className="font-bold text-gray-800">{distance ? `${distance} km do Batel` : 'Calculando...'}</p>
                      </div>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-[2rem] border border-gray-100 flex items-center gap-4">
                      <div className="bg-white p-3 rounded-xl shadow-sm"><Clock className="text-[#D4567D]" size={24} /></div>
                      <div>
                        <p className="text-[10px] font-bold uppercase text-gray-400">Chegada Prevista</p>
                        <p className="font-bold text-gray-800">{travelTime ? `Janela de ±25 min` : 'Em processamento...'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900 text-white p-8 rounded-[2rem] space-y-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#D4567D]">Resumo do Agendamento</p>
                    <div className="grid grid-cols-2 gap-y-4 text-sm">
                      <div className="text-gray-400">Diva:</div><div className="font-bold">{formData.nome}</div>
                      <div className="text-gray-400">Data/Hora:</div><div className="font-bold">{formData.data} às {formData.horario}</div>
                      <div className="text-gray-400">Local:</div><div className="font-bold">{formData.bairro}</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button onClick={handleBack} className="flex-1 bg-gray-100 text-gray-600 py-5 rounded-2xl font-bold hover:bg-gray-200 transition-all">
                      Ajustar Dados
                    </button>
                    <button 
                      onClick={handleSubmit}
                      className="flex-[2] bg-[#25D366] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-xl text-lg animate-pulse-subtle"
                    >
                      Confirmar no WhatsApp <Send size={24} />
                    </button>
                  </div>
                  
                  <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest">
                    Ao clicar em confirmar, você será redirecionada para o WhatsApp oficial Divas da Micro.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <ShieldCheck size={32}/>, title: 'Segurança Total', desc: 'Levamos materiais esterilizados em ambiente controlado.' },
          { icon: <Heart size={32}/>, title: 'Atendimento Afetivo', desc: 'Foco total no seu bem-estar e autoestima.' },
          { icon: <MessageSquare size={32}/>, title: 'Suporte Vitalício', desc: 'Acompanhamos sua cicatrização passo a passo.' }
        ].map((b, i) => (
          <div key={i} className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <div className="text-[#D4567D] mb-4">{b.icon}</div>
            <h4 className="font-bold mb-2">{b.title}</h4>
            <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Contact;
