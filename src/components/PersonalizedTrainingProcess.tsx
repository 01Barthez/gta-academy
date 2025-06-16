
import React, { useState } from 'react';
import { MessageSquare, Search, Users, Rocket, CheckCircle } from 'lucide-react';
import ConsultationModal from '@/components/ConsultationModal';
import { useNavigate } from 'react-router-dom';


const PersonalizedTrainingProcess = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const navigate = useNavigate();

  const steps = [
    {
      step: "01",
      title: "Analyse de vos besoins",
      description: "Nous commençons par comprendre vos objectifs, votre niveau actuel et vos contraintes",
      icon: MessageSquare,
      details: [
        "Entretien personnalisé de 30 minutes",
        "Évaluation de votre niveau",
        "Définition des objectifs SMART",
        "Analyse des contraintes temporelles"
      ]
    },
    {
      step: "02",
      title: "Conception du programme",
      description: "Nos experts créent un programme de formation unique adapté à votre profil",
      icon: Search,
      details: [
        "Sélection des technologies pertinentes",
        "Création du parcours pédagogique",
        "Planification des modules",
        "Préparation du matériel personnalisé"
      ]
    },
    {
      step: "03",
      title: "Attribution de l'expert",
      description: "Un formateur expert dans votre domaine vous est assigné pour tout le parcours",
      icon: Users,
      details: [
        "Sélection du formateur idéal",
        "Première rencontre de présentation",
        "Ajustement du planning",
        "Validation de la méthodologie"
      ]
    },
    {
      step: "04",
      title: "Formation active",
      description: "Démarrage de votre formation avec un suivi personnalisé et des ajustements continus",
      icon: Rocket,
      details: [
        "Sessions de formation individuelles",
        "Projets pratiques personnalisés",
        "Évaluations régulières",
        "Support technique 24/7"
      ]
    },
    {
      step: "05",
      title: "Suivi post-formation",
      description: "Accompagnement après la formation pour garantir votre réussite professionnelle",
      icon: CheckCircle,
      details: [
        "Suivi de progression sur 3 mois",
        "Support technique illimité",
        "Mise à jour des compétences",
        "Aide à la recherche d'emploi"
      ]
    }
  ];

  return (
    <section
      id="trainingprocess"
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Notre Processus en 5 Étapes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            De l'analyse de vos besoins au suivi post-formation, découvrez comment nous créons votre parcours idéal
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Contenu */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-gta-red to-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gta-red rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Icône */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-gta-red to-amber-100 rounded-2xl flex items-center justify-center shadow-lg">
                    <IconComponent className="w-16 h-16 text-gta-red" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call-to-action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gta-red to-amber-50 rounded-2xl p-8 border border-gta-red">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Prêt à commencer votre formation personnalisée ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contactez-nous dès maintenant pour une consultation gratuite et démarrez votre parcours sur mesure
            </p>
            <button
              onClick={() => navigate("/training/personalized/quote")}
              className="bg-gradient-to-r from-gta-red to-red-500 hover:from-gta-red hover:to-amber-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Commencer maintenant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedTrainingProcess;
