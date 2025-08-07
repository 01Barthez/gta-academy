
import React from 'react';
import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import CertifiedTrainingCTASection from '@/components/CertifiedTrainingCTASection';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Contact from '@/components/Contact';
import TrainingScheduleCTASection from '../components/TrainingScheduleCTASection';
import Footer from '@/components/Footer';
import HeroFAQ from '@/components/HeroFAQ';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-inter animate-fade-in">
      <Header />
      <HeroCarousel />
      <CertifiedTrainingCTASection />
      <About />
      <Programs />
      <HeroFAQ />
      <Contact />
      <TrainingScheduleCTASection />
      <Footer />
    </div>
  );
};

export default Index;
