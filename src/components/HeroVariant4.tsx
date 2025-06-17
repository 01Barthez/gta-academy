import React from 'react';
import HeroBadge from '@/components/HeroBadge';
import { Link } from 'react-router-dom';
import { FaRocket, FaGraduationCap, FaChartLine, FaUsers } from 'react-icons/fa';

const HeroVariant4 = ({ onRegisterClick }: { onRegisterClick: () => void }) => {
  return (
    <div className="relative bg-gradient-to-br from-gta-red via-emerald-900/80 to-red-950 text-white py-16 lg:py-24 overflow-hidden min-h-screen flex items-center dark:from-red-900 dark:via-emerald-900/80 dark:to-red-950">
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="flex flex-col justify-center gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 flex flex-col items-center justify-center">
            <HeroBadge />
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent animate-fade-in leading-tight">
              Carrière Tech
            </h1>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="bg-emerald-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4 mb-2">
                  <FaRocket className="w-8 h-8 text-emerald-400" />
                  <div>
                    <h3 className="text-2xl font-bold">100%</h3>
                    <p className="text-emerald-200">Placement Garanti</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-emerald-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4 mb-2">
                  <FaGraduationCap className="w-8 h-8 text-emerald-400" />
                  <div>
                    <h3 className="text-2xl font-bold">+30%</h3>
                    <p className="text-emerald-200">Augmentation Salaire</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-emerald-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4 mb-2">
                  <FaChartLine className="w-8 h-8 text-emerald-400" />
                  <div>
                    <h3 className="text-2xl font-bold">95%</h3>
                    <p className="text-emerald-200">Satisfaction</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-emerald-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4 mb-2">
                  <FaUsers className="w-8 h-8 text-emerald-400" />
                  <div>
                    <h3 className="text-2xl font-bold">100+</h3>
                    <p className="text-emerald-200">Réussites</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-lg md:text-xl mb-8 text-emerald-100 max-w-2xl animate-fade-in">
              Des métiers d'avenir, des opportunités illimitées. Découvrez comment GTA Academy peut transformer votre avenir professionnel avec des résultats prouvés.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link to="/training">
                <button
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 rounded-2xl font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 w-full sm:w-auto"
                >
                  Nos Formations
                </button>
              </Link>

              <Link to="/contact">
                <button className="border-2 border-white/30 hover:border-white text-white px-6 py-3 rounded-2xl font-semibold text-base transition-all duration-300 hover:bg-white/10 w-full sm:w-auto">
                  Nous Contactez
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVariant4;
