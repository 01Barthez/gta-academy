
import React from 'react';
import CertifiedProgramCard from './CertifiedProgramCard';
import { programs } from '@/data/programs';

const CertifiedTrainingPrograms: React.FC = () => {

  return (
    <section id="certifiedcourses" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">Nos Programmes Certifiants</h2>
          <p className="text-xl text-muted-foreground">
            Choisissez la formation qui correspond à vos objectifs professionnels
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <CertifiedProgramCard key={index} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertifiedTrainingPrograms;
