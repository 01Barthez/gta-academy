import React from 'react';
import HeroBadge from '@/components/HeroBadge';
import { Link } from 'react-router-dom';

const HeroVariant1 = ({ onRegisterClick }: { onRegisterClick: () => void }) => {
  return (
    <div className="relative bg-gradient-to-br from-red-900 via-red-900 to-red-800 text-white py-16 lg:py-24 overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-6">
            <HeroBadge />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent animate-fade-in leading-tight">
              Transformez Votre Avenir Technologique
            </h1>
            <p className="text-lg md:text-xl mb-8 text-red-100 max-w-xl animate-fade-in">
              Rejoignez GTA Academy et propulsez votre carrière dans le monde numérique. Des formations pratiques, des experts passionnés, et un accompagnement personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link to="/training">
                <button
                  className="bg-gta-red hover:bg-gta-red-dark text-white px-4 py-2 rounded-2xl font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 w-full sm:w-auto"
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
            <div className="flex flex-wrap items-center space-x-4 space-y-2 text-sm text-red-200 mt-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Formateurs expérimentés</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span>Certification CQP-DQP-AQP</span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>Certification Internationales</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="w-full relative w-">
                <div className="absolute w-full h-full inset-0 bg-red-500/60 rounded-3xl blur-2xl"></div>
              <img
                src="https://thumbs.dreamstime.com/b/professeur-dans-la-salle-de-classe-montrant-%C3%A0-enfants-des-qualifications-d-ordinateur-124418394.jpg"
                alt="GTA Academy Student"
                className="relative z-10 rounded-3xl shadow-2xl transform transition-transform hover:scale-105 w-full h-full border"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVariant1;
