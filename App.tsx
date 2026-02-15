
import React, { Suspense, lazy, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import { AnimatePresence, motion } from 'framer-motion';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Correction = lazy(() => import('./pages/Correction'));
const Care = lazy(() => import('./pages/Care'));
const Contact = lazy(() => import('./pages/Contact'));
const LocationTemplate = lazy(() => import('./pages/LocationTemplate'));

// Enhanced Loading Component for Route Transitions
const Loading = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#D4567D]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-gray-900 rounded-full animate-ping"></div>
        </div>
      </div>
      <span className="mt-4 text-[#D4567D] font-serif font-bold tracking-widest text-sm animate-pulse">CARREGANDO BELEZA...</span>
    </div>
  </div>
);

// Wrapper to handle location for AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Remove the HTML initial loader once the app is mounted
    const loader = document.getElementById('initial-loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 500);
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/correcao" element={<Correction />} />
        <Route path="/cuidados" element={<Care />} />
        <Route path="/agenda" element={<Contact />} />
        <Route path="/contato" element={<Contact />} />

        {/* Dynamic Location Routes */}
        <Route path="/correcao-em-:locationSlug" element={<LocationTemplate />} />
        
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  // Global Facebook SDK parse on route change if needed
  useEffect(() => {
    if ((window as any).FB) {
      try {
        (window as any).FB.XFBML.parse();
      } catch (e) {
        console.warn("FB SDK parse failed", e);
      }
    }
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Suspense fallback={<Loading />}>
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
