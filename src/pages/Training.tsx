import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrainingHero from '@/components/TrainingHero';
import TrainingStats from '@/components/TrainingStats';
import TrainingTypes from '@/components/TrainingTypes';
import TrainingCTA from '@/components/TrainingCTA';

const TrainingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <TrainingHero />
      <TrainingStats />
      <TrainingTypes />
      {/* <TrainingCTA /> */}
      <Footer />
    </div>
  );
};

export default TrainingPage;
