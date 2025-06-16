
import React from 'react';
import HeroBadge from '@/components/HeroBadge';

const HeroVariant3 = ({ onRegisterClick }: { onRegisterClick: () => void }) => {
  return (
    <div className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-800 text-white py-24 lg:py-32 overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <HeroBadge />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent animate-fade-in">
            Carrière Tech
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-emerald-100 max-w-3xl mx-auto animate-fade-in">
            Votre passerelle vers les métiers du futur
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={onRegisterClick}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              Lancer Ma Carrière
            </button>
            <button className="border-2 border-emerald-300/30 hover:border-emerald-300 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-emerald-500/10">
              Voir Débouchés
            </button>
          </div>
          <div className="flex justify-center items-center space-x-8 text-sm text-emerald-200">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span>100% Emploi</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
              <span>Salaires Élevés</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVariant3;
