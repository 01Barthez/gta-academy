
import React from 'react';
import HeroBadge from '@/components/HeroBadge';
import { Link } from 'react-router-dom';

const HeroVariant1 = ({ onRegisterClick }: { onRegisterClick: () => void }) => {
  return (
    <div className="relative bg-gradient-to-br from-gta-red via-purple-900/80 to-red-950 text-white py-16 lg:py-24 overflow-hidden min-h-screen flex items-center dark:from-red-900 dark:via-purple-900/80 dark:to-red-950">
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-6">
            <HeroBadge />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent animate-fade-in leading-tight">
              Excellence Académique
            </h1>
            <p className="text-lg md:text-xl mb-8 text-purple-100 max-w-xl animate-fade-in">
              Des formations de pointe, des experts reconnus et un environnement d'apprentissage premium. Rejoignez nos cohortes d'élites et propulsez votre carrière tech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link to="/training">
                <button
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 py-2 rounded-2xl font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 w-full sm:w-auto"
                >
                  Nos Formations
                </button>
              </Link>

              <Link to="/legal">
                <button className="border-2 border-white/30 hover:border-white text-white px-4 py-2 rounded-2xl font-semibold text-base transition-all duration-300 hover:bg-white/10 w-full sm:w-auto">
                  Mentions Légales
                </button>
              </Link>
            </div>
            <div className="flex flex-wrap items-center space-x-4 space-y-2 text-sm text-purple-200 mt-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span>Programmes Accrédités</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                <span>Accompagnement Premium</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>Communauté Active</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full h-full">
              <div className="absolute w-full h-full inset-0 bg-purple-500/60 rounded-3xl blur-2xl"></div>
              <img
                src="/images/GTA-POLYTECH-2.jpeg"
                alt="Formation Premium"
                className="relative z-10 rounded-3xl shadow-2xl transform transition-transform hover:scale-105 w-full h-full max-h-96  object-cover border"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVariant1;
