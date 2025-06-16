
import React from 'react';
import HeroBadge from '@/components/HeroBadge';
import HeroBackground from '@/components/HeroBackground';

const HeroVariant2 = ({ onRegisterClick }: { onRegisterClick: () => void }) => {
  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-800 text-white py-24 lg:py-32 overflow-hidden min-h-screen flex items-center">
      <HeroBackground />
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <HeroBadge />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent animate-fade-in">
            Formation Premium
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto animate-fade-in">
            Excellence et innovation dans chaque cours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={onRegisterClick}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Découvrir
            </button>
            <button className="border-2 border-purple-300/30 hover:border-purple-300 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-purple-500/10">
              Nos Programmes
            </button>
          </div>
          <div className="flex justify-center items-center space-x-8 text-sm text-purple-200">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>Qualité Premium</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
              <span>Support 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVariant2;
