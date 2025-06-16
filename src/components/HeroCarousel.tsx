
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import RegistrationModal from '@/components/RegistrationModal';
import HeroVariant1 from '@/components/HeroVariant1';
import HeroVariant2 from '@/components/HeroVariant2';
import HeroVariant3 from '@/components/HeroVariant3';
import HeroVariant4 from '@/components/HeroVariant4';

console.log('HeroCarousel component is loading...');

const HeroCarousel: React.FC = () => {
  console.log('HeroCarousel component rendering...');
  const [modalOpen, setModalOpen] = useState(false);

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const handleRegisterClick = () => {
    setModalOpen(true);
  };

  return (
    <div className="relative w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[autoplayPlugin.current]}
        className="w-full"
        onMouseEnter={() => autoplayPlugin.current.stop()}
        onMouseLeave={() => autoplayPlugin.current.play()}
      >
        <CarouselContent>
          <CarouselItem>
            <HeroVariant1 onRegisterClick={handleRegisterClick} />
          </CarouselItem>
          <CarouselItem>
            <HeroVariant2 onRegisterClick={handleRegisterClick} />
          </CarouselItem>
          <CarouselItem>
            <HeroVariant3 onRegisterClick={handleRegisterClick} />
          </CarouselItem>
          <CarouselItem>
            <HeroVariant4 onRegisterClick={handleRegisterClick} />
          </CarouselItem>
        </CarouselContent>
        
        {/* Navigation Controls */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm" />
        
        {/* Progress Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300 cursor-pointer"
            />
          ))}
        </div>
      </Carousel>
      
      {/* Registration Modal */}
      {/* <RegistrationModal open={modalOpen} onOpenChange={setModalOpen} /> */}
    </div>
  );
};

console.log('HeroCarousel component defined');

export default HeroCarousel;
