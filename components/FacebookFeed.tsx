
import React, { useEffect, useState } from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../constants';

const FacebookFeed: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSDK = () => {
      /* Fixed: Cast window to any to access the global FB object injected by the SDK */
      if ((window as any).FB) {
        (window as any).FB.XFBML.parse();
        setIsLoading(false);
        return;
      }

      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = 'https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v18.0';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setTimeout(() => setIsLoading(false), 1500);
      };
      document.body.appendChild(script);
    };

    loadSDK();
  }, []);

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-10">
          <h4 className="text-[#1877f2] font-semibold uppercase tracking-widest text-sm mb-2">Divas Micro Curitiba Facebook</h4>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#050505] mb-4">Conheça nossos últimos trabalhos</h2>
          <p className="text-[#65676b] max-w-2xl mx-auto">
            Curta nossa página e acompanhe as novidades. Realce sua Beleza com quem é referência em correção!
          </p>
        </div>

        <div className="relative mx-auto bg-white rounded-xl shadow-lg border border-[#dddfe2] overflow-hidden flex flex-col items-center justify-center min-h-[500px] max-w-[500px]">
          {isLoading && (
            <div className="absolute inset-0 z-10 p-6 flex flex-col gap-4 bg-white">
              <div className="h-20 w-full skeleton rounded-lg"></div>
              <div className="h-[350px] w-full skeleton rounded-lg"></div>
            </div>
          )}
          
          <div 
            className="fb-page" 
            data-href="https://www.facebook.com/divasespacodabelezacuritiba"
            data-tabs="timeline"
            data-width="500"
            data-height="500"
            data-small-header="true"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          ></div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-6">
          <a 
            href="https://www.facebook.com/divasespacodabelezacuritiba" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#1877f2] hover:bg-[#166fe5] text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 transition-all transform hover:-translate-y-1 shadow-[0_2px_8px_rgba(24,119,242,0.3)] hover:shadow-[0_4px_12px_rgba(24,119,242,0.4)]"
            aria-label="Seguir no Facebook"
          >
            <Facebook size={24} />
            Seguir no Facebook
          </a>

          <div className="pt-6 border-t border-gray-100 w-full">
            <p className="text-xs font-bold uppercase tracking-widest text-[#65676b] mb-4">Siga-nos nas redes sociais</p>
            <div className="flex justify-center gap-6">
              <a href="https://facebook.com" className="text-[#1877f2] hover:scale-110 transition-transform"><Facebook size={28} /></a>
              <a href="https://instagram.com" className="text-[#E1306C] hover:scale-110 transition-transform"><Instagram size={28} /></a>
              <a href={getWhatsAppLink('Feed Facebook')} className="text-[#25D366] hover:scale-110 transition-transform"><MessageCircle size={28} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacebookFeed;
