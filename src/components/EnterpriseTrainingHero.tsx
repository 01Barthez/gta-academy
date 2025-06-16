
import React from 'react';
import { Briefcase, Building2, Users, Target, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const EnterpriseTrainingHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gta-red/5 via-white to-gta-red/10 dark:from-gray-900 dark:via-gray-800 dark:to-gta-red/20 text-foreground py-20 lg:py-24 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-16 left-16 w-24 h-24 bg-gta-red/10 dark:bg-gta-red/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-gta-red-light/10 dark:bg-gta-red-light/20 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gta-red/10 dark:bg-gta-red/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced badge */}
          <div className="inline-flex items-center space-x-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gta-red dark:text-gta-red-light px-3 py-1 rounded-full mb-6 shadow-lg border border-gta-red/20 dark:border-gta-red-light/30">
            <span className="font-semibold">Solutions Entreprise</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-foreground dark:text-gta-red-light">Formations</span>
            <span className="block bg-gradient-to-r from-gta-red-light to-gta-red dark:from-gta-red-light dark:to-gta-red bg-clip-text text-transparent">
              Entreprise
            </span>
          </h1>

          {/* Enhanced description */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Développez les <span className="text-gta-red dark:text-gta-red-light font-semibold">compétences de vos équipes</span> avec nos
            <span className="text-gta-red-light dark:text-gta-red-light font-semibold"> formations certifiantes sur mesure</span>
          </p>

          {/* Enhanced call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link to="/training/enterprise/quote">
              <Button
                size="lg"
                className="bg-gta-red hover:bg-gta-red-light dark:bg-gta-red-light dark:hover:bg-gta-red text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Demander un devis
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gta-red dark:border-gta-red-light text-gta-red dark:text-gta-red-light hover:bg-gta-red dark:hover:bg-gta-red-light hover:text-white px-8 py-3 font-semibold transition-all duration-300"
              >
                Contactez-nous
              </Button>
            </Link>
          </div>

          {/* Quick enterprise stats */}
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <div className="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/20 dark:border-gray-700/20">
              <span className="font-bold text-gta-red dark:text-gta-red-light text-lg">500+</span>
              <span className="text-gray-600 dark:text-gray-400 font-medium">Entreprises formées</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/20 dark:border-gray-700/20">
              <span className="font-bold text-gta-red-light dark:text-gta-red-light text-lg">24/7</span>
              <span className="text-gray-600 dark:text-gray-400 font-medium">Support</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/20 dark:border-gray-700/20">
              <Users className="w-4 h-4 text-gta-red dark:text-gta-red-light" />
              <span className="text-gray-600 dark:text-gray-400 font-medium">Solutions sur mesure</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gta-red via-gta-red-light to-gta-red dark:from-gta-red-light dark:via-gta-red dark:to-gta-red-light opacity-50 dark:opacity-30"></div>
    </section>
  );
};

export default EnterpriseTrainingHero;
