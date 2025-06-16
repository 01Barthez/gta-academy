
import React from 'react';
import { Target, Clock, Award, Heart, Zap, Shield } from 'lucide-react';

const PersonalizedTrainingBenefits = () => {
  const benefits = [
    {
      title: "Programme 100% Sur Mesure",
      description: "Chaque formation est unique et créée spécifiquement pour vos objectifs et votre niveau",
      icon: Target,
      color: "text-gta-red dark:text-gta-red-light"
    },
    {
      title: "Flexibilité Maximale",
      description: "Choisissez vos horaires, votre rythme et votre mode de formation (présentiel, distanciel, hybride)",
      icon: Clock,
      color: "text-gta-red-light dark:text-gta-red"
    },
    {
      title: "Expert Dédié",
      description: "Un formateur expert dans votre domaine vous accompagne tout au long de votre parcours",
      icon: Award,
      color: "text-gta-red dark:text-gta-red-light"
    },
    {
      title: "Suivi Personnalisé",
      description: "Accompagnement individuel avec évaluations régulières et ajustements en temps réel",
      icon: Heart,
      color: "text-gta-red-light dark:text-gta-red"
    },
    {
      title: "Résultats Rapides",
      description: "Formation intensive et ciblée pour des résultats visibles dès les premières semaines",
      icon: Zap,
      color: "text-gta-red dark:text-gta-red-light"
    },
    {
      title: "Garantie Qualité",
      description: "Engagement de résultat avec suivi post-formation et support technique illimité",
      icon: Shield,
      color: "text-gta-red-light dark:text-gta-red"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            L'Excellence de la Formation Personnalisée
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez tous les avantages d'un accompagnement sur mesure conçu exclusivement pour vous
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700">
                <div className={`w-16 h-16 ${benefit.color} bg-opacity-10 dark:bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`} style={{
                  backgroundColor: benefit.color.includes('gta-red-light') ? 'rgb(255 107 107 / 0.1)' : 'rgb(220 20 60 / 0.1)'
                }}>
                  <IconComponent className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Section de confiance */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gta-red to-gta-red-light dark:from-gta-red-light dark:to-gta-red text-white rounded-2xl p-8 max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Rejoignez le leader dans l'enseignement des technologies de demain
            </h3>
            <p className="text-red-100 dark:text-red-50 text-lg">
              Nos formations personnalisées ont un taux de satisfaction de 98% et un taux de réussite professionnelle de 95%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedTrainingBenefits;
