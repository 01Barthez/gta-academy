
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

console.log('Index component is loading...');

const Index: React.FC = () => {
  console.log('Index component rendering...');
  
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

console.log('Index component defined');

export default Index;
