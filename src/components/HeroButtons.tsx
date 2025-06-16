
import React from 'react';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

type HeroButtonsProps = {
  onRegisterClick: () => void;
};

const HeroButtons = ({ onRegisterClick }: HeroButtonsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
      <Button 
        size="lg" 
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-4 h-auto font-bold shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 border border-blue-400/30 rounded-full"
        onClick={onRegisterClick}
      >
        <Sparkles className="mr-2 w-5 h-5" />
        S'inscrire maintenant
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>
      
      <Button 
        size="lg" 
        variant="outline" 
        className="border-2 border-blue-300/40 text-blue-100 hover:bg-blue-500/20 hover:text-white hover:border-blue-300/60 text-lg px-8 py-4 h-auto font-semibold backdrop-blur-md bg-white/10 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-105 rounded-full"
        onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <Play className="mr-2 w-5 h-5" />
        Découvrir nos formations
      </Button>
    </div>
  );
};

export default HeroButtons;
