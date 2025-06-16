import React from 'react';
import { GraduationCap, BookOpen, Award, Target, Star, Sparkles, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroTraining = () => {
  return (
    <div className="relative bg-gradient-to-br from-gta-red/5 via-blue-50 to-purple-50 text-foreground py-24 lg:py-32 overflow-hidden min-h-screen flex items-center animate-fade-in">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 left-16 w-24 h-24 bg-gta-red/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/10 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Floating educational icons */}
      <div className="absolute top-12 left-8 text-gta-red/20 animate-float">
        <BookOpen className="w-10 h-10" />
      </div>
      <div className="absolute top-20 right-12 text-blue-500/20 animate-float delay-300">
        <Lightbulb className="w-8 h-8" />
      </div>
      <div className="absolute bottom-16 right-8 text-purple-500/20 animate-float delay-500">
        <Award className="w-6 h-6" />
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Refined badge */}
          <div className="inline-flex items-center space-x-3 bg-white/60 backdrop-blur-sm text-gta-red px-6 py-3 rounded-full mb-6 shadow-lg border border-gta-red/20">
            <GraduationCap className="w-5 h-5" />
            <span className="font-semibold">Centre de Formation</span>
            <Star className="w-4 h-4" />
          </div>

          {/* Main heading with elegant styling */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gta-red">Maîtrisez</span>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Les Technologies
            </span>
            <span className="text-gray-700">Du Futur</span>
          </h1>

          {/* Refined description */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Transformez votre carrière avec nos <span className="text-gta-red font-semibold">formations certifiantes</span>, 
            nos <span className="text-blue-600 font-semibold">programmes vacances</span> et nos 
            <span className="text-purple-600 font-semibold"> solutions entreprise</span>
          </p>

          {/* Enhanced call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-gta-red hover:bg-gta-red-light text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Sparkles className="mr-2 w-5 h-5" />
              Découvrir nos formations
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-gta-red text-gta-red hover:bg-gta-red hover:text-white px-8 py-3 font-semibold transition-all duration-300"
            >
              <Target className="mr-2 w-5 h-5" />
              Contactez-nous
            </Button>
          </div>

          {/* Quick stats with refined design */}
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <span className="font-bold text-gta-red text-lg">3</span>
              <span className="text-gray-600 font-medium">Types de formation</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <span className="font-bold text-blue-600 text-lg">15+</span>
              <span className="text-gray-600 font-medium">Programmes</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <span className="font-bold text-purple-600 text-lg">95%</span>
              <span className="text-gray-600 font-medium">Taux de réussite</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gta-red via-blue-500 to-purple-500 opacity-30"></div>
    </div>
  );
};

export default HeroTraining;
