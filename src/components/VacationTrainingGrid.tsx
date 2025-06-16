
import React from 'react';
import VacationTrainingSessions from '@/components/VacationTrainingSessions';
import VacationTrainingSchedule from '@/components/VacationTrainingSchedule';
import VacationTrainingPricing from '@/components/VacationTrainingPricing';
import VacationTrainingPayment from '@/components/VacationTrainingPayment';

const VacationTrainingGrid = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Sessions */}
        <VacationTrainingSessions />

        {/* Schedule */}
        <VacationTrainingSchedule />
      </div>

      {/* Pricing */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <VacationTrainingPricing />

        {/* Payment Methods */}
        <VacationTrainingPayment />
      </div>
    </>
  );
};

export default VacationTrainingGrid;
