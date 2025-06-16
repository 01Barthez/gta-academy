
import React from 'react';
import { Button } from '@/components/ui/button';

const TrainingCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gta-red to-gta-red-light text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Prêt à Commencer Votre Formation ?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Rejoignez des centaines d'étudiants qui ont transformé leur carrière avec nos formations
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-gta-red hover:bg-gray-100">
            S'inscrire maintenant
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gta-red">
            Demander des informations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrainingCTA;
