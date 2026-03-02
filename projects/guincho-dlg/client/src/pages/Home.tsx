import { Phone, MapPin, Mail, Clock, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [heartBeat, setHeartBeat] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartBeat(prev => !prev);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Canonical URL Meta Tag */}
      <link rel="canonical" href="https://guincho.aloanuncio.com.br/" />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-black via-slate-900 to-black border-b-4 border-red-600 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663153454182/S39UgkLwE9TNvThfH7X5bS/logo_a31b37df.png" 
              alt="Guincho DLG - 24 Horas" 
              className="h-32 w-auto drop-shadow-lg"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Guincho DLG</h1>
          <p className="text-xl md:text-2xl font-semibold mb-4">Atendimento 24 Horas</p>
          <p className="text-lg opacity-90">Serviço rápido e confiável em Maringá - PR</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        
        {/* Contact Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Entre em Contato</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Telefone/WhatsApp */}
            <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-red-600 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Phone className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-slate-900">Telefone/WhatsApp</h3>
              </div>
              <a 
                href="tel:43996715938" 
                className="text-lg text-red-600 font-semibold hover:text-red-700 transition-colors"
              >
                (43) 99671-5938
              </a>
              <p className="text-slate-600 mt-2">Responsável: André Roger Delongui</p>
              <a 
                href="tel:43999853633" 
                className="text-sm text-slate-500 hover:text-slate-700 transition-colors block mt-2"
              >
                (43) 99985-3633
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-red-600 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Mail className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-slate-900">Email</h3>
              </div>
              <a 
                href="mailto:guinchodlg1809@gmail.com" 
                className="text-lg text-red-600 font-semibold hover:text-red-700 transition-colors break-all"
              >
                guinchodlg1809@gmail.com
              </a>
              <p className="text-slate-600 mt-4">Envie sua solicitação e responderemos em breve!</p>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-red-600">
            <div className="flex items-center mb-4">
              <MapPin className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">Localização</h2>
            </div>
            <p className="text-lg text-slate-700 mb-2">
              <span className="font-semibold">Endereço:</span> Rua João Almeida Aniceto, nº 397
            </p>
            <p className="text-lg text-slate-700 mb-2">
              <span className="font-semibold">Bairro:</span> Jardim Locatelli
            </p>
            <p className="text-lg text-slate-700">
              <span className="font-semibold">CEP:</span> 86606-304 - Maringá, PR
            </p>
          </div>
        </section>

        {/* Operating Hours Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-slate-900 to-black text-white rounded-lg shadow-md p-8 border-l-4 border-red-600">
            <div className="flex items-center mb-6">
              <Clock className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold">Horário de Funcionamento</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-black bg-opacity-30 rounded p-4">
                <p className="text-lg font-semibold text-red-400">Segunda à Sexta</p>
                <p className="text-2xl font-bold mt-2">24 Horas</p>
              </div>
              <div className="bg-black bg-opacity-30 rounded p-4">
                <p className="text-lg font-semibold text-red-400">Sábado</p>
                <p className="text-2xl font-bold mt-2">24 Horas</p>
              </div>
              <div className="bg-black bg-opacity-30 rounded p-4">
                <p className="text-lg font-semibold text-red-400">Domingo</p>
                <p className="text-2xl font-bold mt-2">24 Horas</p>
              </div>
            </div>
            <p className="text-center text-red-300 mt-6 text-lg font-semibold">
              Sempre disponível para você! 🚗
            </p>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Informações da Empresa</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-600">
              <p className="text-slate-700 mb-3">
                <span className="font-bold text-slate-900">Razão Social:</span> Guincho DLG
              </p>
              <p className="text-slate-700 mb-3">
                <span className="font-bold text-slate-900">Nome Fantasia:</span> Guincho DLG
              </p>
              <p className="text-slate-700">
                <span className="font-bold text-slate-900">CNPJ:</span> 63.862.151/0001-79
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-600">
              <p className="text-slate-700 mb-3">
                <span className="font-bold text-slate-900">RG Responsável:</span> 10760499-5 (SESP PR)
              </p>
              <p className="text-slate-700">
                <span className="font-bold text-slate-900">Responsável:</span> André Roger Delongui
              </p>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Siga-nos nas Redes Sociais</h2>
          
          <div className="flex justify-center gap-6 flex-wrap">
            <a 
              href="https://www.facebook.com/search/top?q=Guincho%20DLG" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
            >
              Facebook: Guincho DLG
            </a>
            <a 
              href="https://www.instagram.com/dlg_guincho_043/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-colors shadow-md"
            >
              Instagram: @dlg_guincho_043
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12 bg-gradient-to-r from-red-600 to-red-700 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Precisa de um Guincho?</h2>
          <p className="text-lg mb-6 opacity-90">Entre em contato agora mesmo! Estamos sempre prontos para ajudar.</p>
          <a 
            href="tel:43996715938"
            className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors shadow-md"
          >
            Ligar Agora
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black via-slate-900 to-black text-white py-8 border-t-4 border-red-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-lg mb-4">
              Desenvolvido 
              <Heart 
                className={`inline-block w-5 h-5 mx-2 text-red-500 transition-transform ${heartBeat ? 'scale-125' : 'scale-100'}`}
                fill="currentColor"
              />
              por 
              <a 
                href="https://supremasite.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 transition-colors font-semibold ml-2"
              >
                Suprema Sites Express
              </a>
            </p>
            <p className="text-sm text-slate-400 mt-4">
              © 2026 Guincho DLG. Todos os direitos reservados.
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Desenvolvido com ❤️ para Maringá, PR
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
