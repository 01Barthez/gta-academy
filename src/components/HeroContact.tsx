import React from 'react';
import { MessageCircle, Headphones, Heart, Star, Send, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroContact = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 text-foreground py-24 lg:py-32 overflow-hidden min-h-screen flex items-center animate-fade-in">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-12 left-12 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-16 h-16 bg-teal-500/10 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-green-500/10 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Floating communication icons */}
      <div className="absolute top-16 left-8 text-blue-500/30 animate-float">
        <MessageCircle className="w-10 h-10" />
      </div>
      <div className="absolute bottom-20 right-12 text-teal-500/30 animate-float delay-300">
        <Headphones className="w-8 h-8" />
      </div>
      <div className="absolute top-1/2 right-8 text-green-500/30 animate-float delay-500">
        <Heart className="w-6 h-6" />
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Refined badge */}
          <div className="inline-flex items-center space-x-3 bg-white/60 backdrop-blur-sm text-blue-600 px-6 py-3 rounded-full mb-6 shadow-lg border border-blue-200">
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold">Parlons Ensemble</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-blue-600">Connectons</span>
            <span className="block bg-gradient-to-r from-teal-500 to-green-500 bg-clip-text text-transparent">
              Vos Ambitions
            </span>
            <span className="text-gray-700">À Notre Expertise</span>
          </h1>

          {/* Refined description */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Notre équipe de <span className="text-blue-600 font-semibold">conseillers experts</span> est là pour vous accompagner 
            dans le choix de la formation qui <span className="text-teal-500 font-semibold">transformera votre carrière</span>
          </p>

          {/* Enhanced call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Send className="mr-2 w-5 h-5" />
              Nous écrire
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 font-semibold transition-all duration-300"
            >
              <Phone className="mr-2 w-5 h-5" />
              Nous appeler
            </Button>
          </div>

          {/* Quick contact stats */}
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <span className="font-bold text-blue-600 text-lg">24h</span>
              <span className="text-gray-600 font-medium">Réponse garantie</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <span className="font-bold text-teal-500 text-lg">100%</span>
              <span className="text-gray-600 font-medium">Conseils personnalisés</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Star className="w-4 h-4 text-green-500" />
              <span className="text-gray-600 font-medium">Service d'excellence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 opacity-30"></div>
    </div>
  );
};

export default HeroContact;
