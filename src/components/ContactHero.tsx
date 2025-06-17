
import React from 'react';
import { MessageCircle, Phone, Send, Headphones, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePhoneCall } from '@/hooks/usePhoneCall';

const ContactHero = () => {
  const { makeCall } = usePhoneCall();

  const handlePhoneCall = () => {
    makeCall("+237690419336");
  };


  return (
    <section className="relative bg-gradient-to-br from-gta-red/5 via-white to-gta-red/10 dark:from-gray-900 dark:via-gray-800 dark:to-gta-red/20 text-foreground py-10 lg:py-16 overflow-hidden animate-fade-in">
      {/* Subtle background elements with GTA theme colors */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-12 left-12 w-20 h-20 bg-gta-red/10 dark:bg-gta-red/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-16 h-16 bg-gta-red-light/10 dark:bg-gta-red-light/20 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gta-red/10 dark:bg-gta-red/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Refined badge with GTA colors */}
          <div className="inline-flex items-center space-x-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gta-red dark:text-gta-red-light px-4 py-1 rounded-full mb-6 shadow-lg border border-gta-red/20 dark:border-gta-red-light/30">
            <span className="font-semibold">Parlons Ensemble</span>
          </div>

          {/* Main heading with GTA theme */}
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-gta-red dark:text-gta-red-light">Connectons</span>
            <span className="block bg-gradient-to-r from-gta-red to-gta-red-light dark:from-gta-red-light dark:to-gta-red bg-clip-text text-transparent">
              Vos Ambitions
            </span>
            <span className="text-gray-700 dark:text-gray-300">À Notre Expertise</span>
          </h1>

          {/* Refined description with GTA theme colors */}
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
            Notre équipe de <span className="text-gta-red dark:text-gta-red-light font-semibold">conseillers experts</span> est là pour vous accompagner
            dans le choix de la formation qui <span className="text-gta-red-light dark:text-gta-red-light font-semibold">transformera votre carrière</span>
          </p>

          {/* Contact methods with GTA theme */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-gta-red hover:bg-gta-red-dark dark:bg-gta-red-light dark:hover:bg-gta-red text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('form-writting')?.scrollIntoView({ behavior: 'smooth' })}

            >
              Nous écrire
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gta-red dark:border-gta-red-light text-gta-red dark:text-gta-red-light hover:bg-gta-red dark:hover:bg-gta-red-light hover:text-white px-8 py-3 font-semibold transition-all duration-300"
              onClick={handlePhoneCall}
            >
              Nous appeler
            </Button>
          </div>

          {/* Quick contact stats with GTA theme */}
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <div className="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-white/20 dark:border-gray-700/20">
              <span className="font-bold text-gta-red dark:text-gta-red-light text-lg">24h</span>
              <span className="text-gray-600 dark:text-gray-400 font-medium">Réponse garantie</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-white/20 dark:border-gray-700/20">
              <span className="font-bold text-gta-red-light dark:text-gta-red-light text-lg">100%</span>
              <span className="text-gray-600 dark:text-gray-400 font-medium">Conseils personnalisés</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-white/20 dark:border-gray-700/20">
              <Star className="w-4 h-4 text-gta-red dark:text-gta-red-light" />
              <span className="text-gray-600 dark:text-gray-400 font-medium">Service d'excellence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom decoration with GTA gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gta-red via-gta-red-light to-gta-red dark:from-gta-red-light dark:via-gta-red dark:to-gta-red-light opacity-50 dark:opacity-30"></div>
    </section>
  );
};

export default ContactHero;
