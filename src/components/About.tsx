
import React from 'react';
import { Target, Eye, Users, Award, Lightbulb, Heart, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Excellence",
      description: "Formation de qualité supérieure"
    },
    {
      icon: Users,
      title: "10+",
      description: "Étudiants formés avec succès"
    },
    {
      icon: Award,
      title: "15+",
      description: "Filières disponibles"
    },
    {
      icon: Heart,
      title: "95%",
      description: "Taux de satisfaction"
    }
  ];

  return (
    <section id="apropos" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            À PROPOS DE GTA ACADEMY
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Centre de Formation Professionnelle agréé par le MINEFOP, nous formons les talents de demain
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gta-red to-gta-red-light mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="/images/logo.png" 
                  alt="GTA Logo" 
                  className="h-12 w-auto"
                />
                <div>
                  <h3 className="text-xl font-bold text-gta-red">Global Technology & Associates</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Centre de Formation Professionnelle</p>
                </div>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4">
                <p className="text-green-800 dark:text-green-200 font-medium text-sm">
                  📜 Arrêté N°000168/MINEFOP/SG/DFOP/SDGSF/CSACD/CBAC
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">IFP</span>
                  <span className="text-green-700 dark:text-green-300 text-sm">Institut Agréé</span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                GTA Academy forme les professionnels de demain aux technologies qui façonnent notre monde avec des solutions innovantes sur mesure.
              </p>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div key={index} className="text-center bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                    <div className="w-12 h-12 bg-gta-red rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gta-red mb-1">{highlight.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{highlight.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gta-red hover:bg-gta-red-light text-white"
            onClick={() => window.location.href = '/about'}
          >
            En savoir plus sur nous
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
