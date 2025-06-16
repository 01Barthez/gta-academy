
import React from 'react';
import HeroBadge from '@/components/HeroBadge';
import HeroBackground from '@/components/HeroBackground';

const HeroVariant4 = ({ onRegisterClick }: { onRegisterClick: () => void }) => {
  return (
    <div className="relative bg-gradient-to-br from-orange-900 via-red-900 to-slate-800 text-white py-24 lg:py-32 overflow-hidden min-h-screen flex items-center">
      <HeroBackground />
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <HeroBadge />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent animate-fade-in">
            Innovation Tech
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto animate-fade-in">
            Les dernières technologies à votre portée
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={onRegisterClick}
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
            >
              Innover Maintenant
            </button>
            <button className="border-2 border-orange-300/30 hover:border-orange-300 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-orange-500/10">
              Technologies
            </button>
          </div>
          <div className="flex justify-center items-center space-x-8 text-sm text-orange-200">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span>IA & Machine Learning</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span>Blockchain & Web3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVariant4;
