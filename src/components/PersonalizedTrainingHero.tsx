
import React, { useState } from 'react';
import { Users, Star, Lightbulb, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import ConsultationModal from '@/components/ConsultationModal';

const PersonalizedTrainingHero = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <section className="bg-gradient-to-br from-gta-red/5 via-white to-gta-red/10 dark:from-gray-900 dark:via-gray-800 dark:to-gta-red/20 text-foreground py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenu principal */}
            <div>
              <div className="inline-flex items-center space-x-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gta-red dark:text-gta-red-light px-4 py-1 rounded-full mb-6 shadow-lg border border-gta-red/20 dark:border-gta-red-light/30">
                <span className="font-semibold">Formation Sur Mesure</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gta-red dark:text-gta-red-light">Votre Formation,</span>
                <span className="block text-gray-700 dark:text-gray-300">Vos Objectifs</span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Bénéficiez d'un <span className="text-gta-red dark:text-gta-red-light font-semibold">accompagnement exclusif</span> avec nos experts.
                Nous créons la formation parfaite pour <span className="text-gta-red-light dark:text-gta-red-light font-semibold">vos besoins uniques</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/training/personalized/quote">
                  <Button
                    size="lg"
                    className="bg-gta-red hover:bg-gta-red-light dark:bg-gta-red-light dark:hover:bg-gta-red text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Demander un devis personnalisé
                  </Button>
                </Link>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gta-red dark:border-gta-red-light text-gta-red dark:text-gta-red-light hover:bg-gta-red dark:hover:bg-gta-red-light hover:text-white px-8 py-3 font-semibold transition-all duration-300"
                  onClick={() => document.getElementById('trainingprocess')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Découvrir le processus
                </Button>
              </div>

              {/* Stats rapides */}
              <div className="flex flex-wrap gap-2 items-center">
                <div className="flex items-center space-x-1 bg-white dark:bg-gray-800/70 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-white/20 dark:border-gray-700/20">
                  <span className="font-bold text-gta-red dark:text-gta-red-light text-lg">100%</span>
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Personnalisé</span>
                </div>
                <div className="flex items-center space-x-1 bg-white dark:bg-gray-800/70 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-white/20 dark:border-gray-700/20">
                  <span className="font-bold text-gta-red-light dark:text-gta-red-light text-lg">1-on-1</span>
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Coaching</span>
                </div>
                <div className="flex items-center space-x-1 bg-white dark:bg-gray-800/70 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-white/20 dark:border-gray-700/20">
                  <span className="font-bold text-gta-red dark:text-gta-red text-lg">24/7</span>
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Support</span>
                </div>
              </div>
            </div>

            {/* Illustration/Points forts */}
            <div className="relative">
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Pourquoi choisir du sur mesure ?</h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gta-red dark:bg-gta-red-light rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">Objectifs Précis</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Formation adaptée à vos besoins exacts</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gta-red-light dark:bg-gta-red rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">Expert Dédié</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Un formateur expert assigné à votre projet</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gta-red dark:bg-gta-red-light rounded-full flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">Flexibilité Totale</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Horaires et rythme selon vos disponibilités</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Éléments décoratifs */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gta-red/20 dark:bg-gta-red-light/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gta-red-light/20 dark:bg-gta-red/20 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Modale */}
      {/* <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />       */}
    </section>
  );
};

export default PersonalizedTrainingHero;
