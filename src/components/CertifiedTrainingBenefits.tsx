
import React from 'react';
import { CheckCircle } from 'lucide-react';

const CertifiedTrainingBenefits = () => {
  const benefits = [
    "Formation pratique avec projets réels",
    "Suivi personnalisé par nos experts",
    "Accès à notre plateforme d'apprentissage",
    "Certification CQP, DQP, AQP et certifications reconnus",
    "Support pour l'insertion professionnelle",
    "Communauté d'alumni active"
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Pourquoi choisir nos formations certifiantes ?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3 bg-card p-4 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-foreground">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertifiedTrainingBenefits;
