
import React from 'react';
import { Award } from 'lucide-react';

const VacationTrainingHeader = () => {
  return (
    <div className="text-center mb-16 animate-fade-in">
      <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-gta-red to-gta-red-light text-white px-6 py-3 rounded-full mb-6">
        <Award className="w-6 h-6" />
        <span className="font-semibold">Formation Spéciale</span>
      </div>
      <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
        FORMATION VACANCES 2025
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        Profitez des vacances pour acquérir de nouvelles compétences numériques essentielles pour l'avenir
      </p>
    </div>
  );
};

export default VacationTrainingHeader;
