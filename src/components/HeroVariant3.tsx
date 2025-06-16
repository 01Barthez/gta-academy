
import React from 'react';
import HeroBadge from '@/components/HeroBadge';
import { Link } from 'react-router-dom';

const HeroVariant3 = ({ onRegisterClick }: { onRegisterClick: () => void }) => {
  return (
    <div className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-800 text-white py-16 lg:py-24 overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-6">
            <HeroBadge />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent animate-fade-in leading-tight">
              Carrière Tech
            </h1>
            <p className="text-lg md:text-xl mb-8 text-emerald-100 max-w-xl animate-fade-in">
              Des métiers d'avenir, des opportunités illimitées. Découvrez comment GTA Academy peut transformer votre avenir professionnel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link to="/training">
                <button
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-4 py-2 rounded-2xl font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 w-full sm:w-auto"
                >
                  Nos Formations
                </button>
              </Link>

              <Link to="/contact">
                <button className="border-2 border-white/30 hover:border-white text-white px-4 py-2 rounded-2xl font-semibold text-base transition-all duration-300 hover:bg-white/10 w-full sm:w-auto">
                  Nous Contactez
                </button>
              </Link>
            </div>
            <div className="flex flex-wrap items-center space-x-4 space-y-2 text-sm text-emerald-200 mt-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span>Placement Garanti</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                <span>Salaires Compétitifs</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>Accompagnement Pro</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full h-full">
              <div className="absolute w-full h-full inset-0 bg-emerald-500/60 rounded-3xl blur-2xl"></div>
              <img
                src="/images/Gille-Tchabet.jpeg"
                alt="Carrière Tech"
                className="relative z-10 rounded-3xl shadow-2xl transform transition-transform hover:scale-105 w-full h-full max-h-96 object-cover border"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVariant3;
