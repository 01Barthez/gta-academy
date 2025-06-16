
import React from 'react';
import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

console.log('Index component is loading...');

const Index: React.FC = () => {
  console.log('Index component rendering...');
  
  return (
    <div className="min-h-screen bg-background font-inter animate-fade-in">
      <Header />
      <HeroCarousel />
      <About />
      <Programs />
      <Contact />
      <Footer />
    </div>
  );
};

console.log('Index component defined');

export default Index;
