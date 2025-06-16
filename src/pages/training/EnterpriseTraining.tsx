
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnterpriseTrainingHero from '@/components/EnterpriseTrainingHero';
import EnterpriseTrainingAdvantages from '@/components/EnterpriseTrainingAdvantages';
import EnterpriseTrainingCategories from '@/components/EnterpriseTrainingCategories';
import EnterpriseTrainingServices from '@/components/EnterpriseTrainingServices';

const EnterpriseTrainingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <EnterpriseTrainingHero />
      <EnterpriseTrainingAdvantages />
      <EnterpriseTrainingCategories />
      <EnterpriseTrainingServices />
      <Footer />
    </div>
  );
};

export default EnterpriseTrainingPage;
