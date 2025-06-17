import React from 'react';
import HeroBadge from '@/components/HeroBadge';
import { Link } from 'react-router-dom';
import { FaCertificate, FaCode, FaGraduationCap, FaLaptop, FaLightbulb, FaShieldAlt } from 'react-icons/fa';
import '@/styles/HeroAnimations.css';

const HeroVariant2 = ({ onRegisterClick }: { onRegisterClick: () => void }) => {
  return (
    <div className="relative bg-gradient-to-br from-gta-red via-red-900/80 to-gta-red-dark text-white py-16 lg:py-24 overflow-hidden min-h-screen flex items-center">
      {/* Complex Animated Background */}
      <div className="absolute inset-0">
         {/* Multiple layers of patterns  */}
        <div className="absolute inset-0 bg-red-900/5 dark:bg-red-950/10">
          <div className="absolute inset-0 bg-red-900/3 dark:bg-red-950/5">
            <div className="absolute inset-0 bg-red-900/2 dark:bg-red-950/10">
              <div className="absolute inset-0 bg-red-900/1 dark:bg-red-950/15"></div>
            </div>
          </div>
        </div>

        {/* Animated geometric shapes  */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-red-500/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute left-1/4 -top-16 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-float-x"></div>
          <div className="absolute right-1/4 -bottom-16 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-float-y"></div>
        </div>

        {/* Subtle gradient overlay  */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-900/5 to-transparent"></div>

        {/* Glowing elements  */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-1/2 h-1/3 w-1 bg-red-500/50 blur-sm animate-glow"></div>
          <div className="absolute right-0 top-1/2 h-1/3 w-1 bg-red-500/50 blur-sm animate-glow-slow"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="space-y-8 text-center">
            <HeroBadge />
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent animate-fade-in leading-tight relative z-10">
              Transformez Votre Avenir Technologique
            </h1>
            
            {/* Animated Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 relative z-10">
              <div className="bg-red-800/50 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:rotate-2">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-14 h-14 bg-red-500/20 rounded-full flex items-center justify-center">
                    <FaCertificate className="w-8 h-8 text-red-300" />
                  </div>
                  <p className="text-sm text-red-200 font-medium">Certifications Officielles</p>
                </div>
              </div>
              <div className="bg-red-800/50 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:-rotate-2">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-14 h-14 bg-red-500/20 rounded-full flex items-center justify-center">
                    <FaCode className="w-8 h-8 text-red-300" />
                  </div>
                  <p className="text-sm text-red-200 font-medium">Formations Pratiques</p>
                </div>
              </div>
              <div className="bg-red-800/50 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:rotate-2">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-14 h-14 bg-red-500/20 rounded-full flex items-center justify-center">
                    <FaGraduationCap className="w-8 h-8 text-red-300" />
                  </div>
                  <p className="text-sm text-red-200 font-medium">Experts Passionnés</p>
                </div>
              </div>
              <div className="bg-red-800/50 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:-rotate-2">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-14 h-14 bg-red-500/20 rounded-full flex items-center justify-center">
                    <FaLaptop className="w-8 h-8 text-red-300" />
                  </div>
                  <p className="text-sm text-red-200 font-medium">Accompagnement Pro</p>
                </div>
              </div>
            </div>

            {/* Enhanced Description */}
            <p className="text-lg md:text-xl mb-8 text-red-100 max-w-3xl mx-auto animate-fade-in relative z-10">
              Rejoignez GTA Academy et propulsez votre carrière dans le monde numérique. Des formations pratiques, des experts passionnés, et un accompagnement personnalisé.
            </p>

            {/* Enhanced Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link to="/training">
                <button
                  className="bg-gta-red hover:bg-gta-red-dark text-white px-8 py-4 rounded-3xl font-semibold text-base transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25 w-full sm:w-auto transform hover:translate-y-[-2px]"
                >
                  Nos Formations
                </button>
              </Link>

              <Link to="/contact">
                <button className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-3xl font-semibold text-base transition-all duration-300 hover:bg-white/10 w-full sm:w-auto transform hover:translate-y-[-2px]">
                  Nous Contactez
                </button>
              </Link>
            </div>

            {/* Animated Benefits */}
            <div className="grid grid-cols-3 gap-4 mt-8 relative z-10">
              <div className="flex items-center justify-center bg-red-800/50 p-5 rounded-xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <FaLightbulb className="w-6 h-6 text-red-300" />
                  <span className="text-red-200 font-medium">Innovation</span>
                </div>
              </div>
              <div className="flex items-center justify-center bg-red-800/50 p-5 rounded-xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <FaShieldAlt className="w-6 h-6 text-red-300" />
                  <span className="text-red-200 font-medium">Sécurité</span>
                </div>
              </div>
              <div className="flex items-center justify-center bg-red-800/50 p-5 rounded-xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <FaGraduationCap className="w-6 h-6 text-red-300" />
                  <span className="text-red-200 font-medium">Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVariant2;
