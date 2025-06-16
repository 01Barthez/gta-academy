
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PersonalizedTrainingHero from '@/components/PersonalizedTrainingHero';
import PersonalizedTrainingBenefits from '@/components/PersonalizedTrainingBenefits';
import PersonalizedTrainingProcess from '@/components/PersonalizedTrainingProcess';
import PersonalizedTrainingTestimonials from '@/components/PersonalizedTrainingTestimonials';
import PersonalizedTrainingCTA from '@/components/PersonalizedTrainingCTA';

const PersonalizedTrainingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PersonalizedTrainingHero />
      <PersonalizedTrainingBenefits />
      <PersonalizedTrainingProcess />
      {/* <PersonalizedTrainingTestimonials /> */}
      <PersonalizedTrainingCTA />
      <Footer />
    </div>
  );
};

export default PersonalizedTrainingPage;
