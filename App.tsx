
import React, { Suspense, lazy, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import { AnimatePresence } from 'framer-motion';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Correction = lazy(() => import('./pages/Correction'));
const Care = lazy(() => import('./pages/Care'));
const Contact = lazy(() => import('./pages/Contact'));
const LocationTemplate = lazy(() => import('./pages/LocationTemplate'));

const RouteLoading = () => (
  <div className="flex flex-col items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D4567D]"></div>
    <span className="mt-4 text-[#D4567D] font-serif tracking-widest text-xs uppercase animate-pulse">Carregando...</span>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Remover o loader HTML assim que o componente de rotas for montado
    const loader = document.getElementById('initial-loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 800);
    }
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/correcao" element={<Correction />} />
        <Route path="/cuidados" element={<Care />} />
        <Route path="/agenda" element={<Contact />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/correcao-em-:locationSlug" element={<LocationTemplate />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          <Suspense fallback={<RouteLoading />}>
            <AnimatedRoutes />
          </Suspense>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}

export default App;
