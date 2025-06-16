
import React from 'react';
import { Heart, Star, BookOpen, Sparkles, Users, Award } from 'lucide-react';

const HeroAbout = () => {
  return (
    <div className="relative bg-gradient-to-br from-gta-red/5 via-white to-gta-red/10 dark:from-gray-900 dark:via-gray-800 dark:to-gta-red/20 text-foreground py-10 lg:py-16 overflow-hidden flex items-center animate-fade-in">
      {/* Subtle background decorative elements with GTA theme colors */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-12 left-12 w-20 h-20 bg-gta-red/10 dark:bg-gta-red/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-16 h-16 bg-gta-red-light/10 dark:bg-gta-red-light/20 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gta-red/10 dark:bg-gta-red/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Refined badge with GTA colors */}
          <div className="inline-flex items-center space-x-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gta-red dark:text-gta-red-light px-4 py-1 rounded-full mb-6 shadow-lg border border-gta-red/20 dark:border-gta-red-light/30">
            <span className="font-semibold">Notre Histoire</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-gta-red dark:text-gta-red-light">Façonnons</span>
            <span className="block text-gray-700 dark:text-gray-300">L'Avenir Technologique</span>
            <span className="text-gta-red-light dark:text-gta-red-light">Ensemble</span>
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            Découvrez l'histoire de <span className="font-semibold text-gta-red dark:text-gta-red-light">GTA Academy</span>, 
            votre partenaire de confiance dans la transformation digitale
          </p>

          {/* Refined stats with GTA theme */}
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <div className="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/20 dark:border-gray-700/20">
              <Star className="w-4 h-4 text-gta-red dark:text-gta-red-light" />
              <span className="font-semibold text-gray-700 dark:text-gray-300">Excellence</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/20 dark:border-gray-700/20">
              <Users className="w-4 h-4 text-gta-red-light dark:text-gta-red-light" />
              <span className="font-semibold text-gray-700 dark:text-gray-300">Accompagnement</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/20 dark:border-gray-700/20">
              <Award className="w-4 h-4 text-gta-red dark:text-gta-red-light" />
              <span className="font-semibold text-gray-700 dark:text-gray-300">Certification</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom decoration with GTA gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gta-red via-gta-red-light to-gta-red dark:from-gta-red-light dark:via-gta-red dark:to-gta-red-light opacity-50 dark:opacity-30"></div>
    </div>
  );
};

export default HeroAbout;
