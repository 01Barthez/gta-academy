
import React from 'react';
import HeroBadge from '@/components/HeroBadge';
import HeroBackground from '@/components/HeroBackground';

const HeroVariant1 = ({ onRegisterClick }: { onRegisterClick: () => void }) => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-24 lg:py-32 overflow-hidden min-h-screen flex items-center">
      <HeroBackground />
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <HeroBadge />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-fade-in">
            GTA Academy
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto animate-fade-in">
            Maîtrisez les technologies d'aujourd'hui et de demain
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={onRegisterClick}
              className="bg-gta-red hover:bg-gta-red-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
            >
              Commencer Maintenant
            </button>
            <button className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10">
              En Savoir Plus
            </button>
          </div>
          <div className="flex justify-center items-center space-x-8 text-sm text-blue-200">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>+1000 Étudiants</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span>Certification Reconnue</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVariant1;
