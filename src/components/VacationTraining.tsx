
import React from 'react';
import VacationTrainingHeader from '@/components/VacationTrainingHeader';
import VacationTrainingModules from '@/components/VacationTrainingModules';
import VacationTrainingGrid from '@/components/VacationTrainingGrid';

const VacationTraining = () => {
  return (
    <section id="formation" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <VacationTrainingHeader />

        {/* Modules détaillés */}
        <VacationTrainingModules />

        <VacationTrainingGrid />
      </div>
    </section>
  );
};

export default VacationTraining;
