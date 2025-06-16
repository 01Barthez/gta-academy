
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CertifiedTrainingHero from '@/components/CertifiedTrainingHero';
import CertifiedTrainingBenefits from '@/components/CertifiedTrainingBenefits';
import CertifiedTrainingPrograms from '@/components/CertifiedTrainingPrograms';

const CertifiedTrainingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <CertifiedTrainingHero />

      <CertifiedTrainingBenefits />

      <CertifiedTrainingPrograms />

      <Footer />
    </div>
  );
};

export default CertifiedTrainingPage;
