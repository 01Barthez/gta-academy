
import React from 'react';
import { Target, Award, Clock, Users } from 'lucide-react';

const EnterpriseTrainingAdvantages = () => {
  const advantages = [
    {
      title: "Formation sur mesure",
      description: "Programmes adaptés aux besoins spécifiques de votre entreprise",
      icon: Target
    },
    {
      title: "Formateurs experts",
      description: "Consultants certifiés avec une expérience terrain",
      icon: Award
    },
    {
      title: "Flexibilité",
      description: "Formation dans vos locaux ou dans nos centres",
      icon: Clock
    },
    {
      title: "Suivi post-formation",
      description: "Accompagnement et support après la formation",
      icon: Users
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Pourquoi choisir nos formations entreprise ?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div key={index} className="text-center p-6 bg-card rounded-lg">
                <div className="w-16 h-16 bg-gta-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseTrainingAdvantages;
