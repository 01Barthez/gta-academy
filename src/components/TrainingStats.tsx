
import React from 'react';
import { Users, Target, Award, BookOpen } from 'lucide-react';

const TrainingStats = () => {
  const stats = [
    { number: "10+", label: "Étudiants formés", icon: Users },
    { number: "95%", label: "Taux de réussite", icon: Target },
    { number: "15+", label: "Certifications", icon: Award },
    { number: "4", label: "Types de formations", icon: BookOpen }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gta-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gta-red mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrainingStats;
