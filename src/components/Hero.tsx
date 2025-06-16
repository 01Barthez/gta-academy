
import React, { useState } from 'react';
import RegistrationModal from '@/components/RegistrationModal';
import HeroBadge from '@/components/HeroBadge';
import HeroHeading from '@/components/HeroHeading';
import HeroFeatures from '@/components/HeroFeatures';
import HeroButtons from '@/components/HeroButtons';
import HeroTrustIndicators from '@/components/HeroTrustIndicators';
import HeroBackground from '@/components/HeroBackground';

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="accueil" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-24 lg:py-32 overflow-hidden">
      <HeroBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <HeroBadge />
          <HeroHeading />
          <HeroFeatures />
          <HeroButtons onRegisterClick={() => setModalOpen(true)} />
          <HeroTrustIndicators />
        </div>
      </div>
      
      {/* Registration Modal */}
      <RegistrationModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default Hero;
