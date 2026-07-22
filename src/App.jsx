import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PartnersCarousel from './components/PartnersCarousel';
import QuickQuoteForm from './components/QuickQuoteForm';

import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import SolutionConsultingPage from './components/SolutionConsultingPage';
import RecruitmentPage from './components/RecruitmentPage';
import NewsPage from './components/NewsPage';
import ContactPage from './components/ContactPage';

import { ServiceDetailModal, QuickQuoteModal } from './components/Modals';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedService, setSelectedService] = useState(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060B14] text-slate-100 flex flex-col font-body selection:bg-amber-500 selection:text-slate-950">
      {/* Header Bar */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)} 
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <HeroSection 
              setActiveTab={setActiveTab} 
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)} 
            />
            <AboutSection setActiveTab={setActiveTab} />
            <ServicesSection 
              onSelectService={(srv) => setSelectedService(srv)} 
              setActiveTab={setActiveTab} 
            />
            <PartnersCarousel />
            <QuickQuoteForm />
          </>
        )}

        {activeTab === 'about' && (
          <AboutPage onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
        )}

        {(activeTab === 'services' || activeTab.startsWith('services-')) && (
          <ServicesPage 
            onSelectService={(srv) => setSelectedService(srv)}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}

        {activeTab === 'solutions' && (
          <SolutionConsultingPage onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
        )}

        {activeTab === 'recruitment' && (
          <RecruitmentPage />
        )}

        {activeTab === 'news' && (
          <NewsPage />
        )}

        {activeTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer 
        setActiveTab={setActiveTab} 
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)} 
      />

      {/* Floating CTA Widget */}
      <FloatingCTA onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Modals */}
      <ServiceDetailModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
        onOpenQuote={() => setIsQuoteModalOpen(true)}
      />

      <QuickQuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
}
