import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, Users, Clock, ArrowRight, CheckCircle, Sparkles, Code, Cpu, Shield, Smartphone, Cloud, Database, Globe, Bot, Layers3 } from 'lucide-react';

const CertifiedCTASection = () => {
  const featuredPrograms = [
    {
      title: "Développement Web Full-Stack",
      duration: "9 mois",
      price: "450,000 FCFA",
      icon: Code,
      certification: "Certificat GTA + CQP",
      startDate: "06 Octobre 2025"
    },
    {
      title: "Intelligence Artificielle",
      duration: "12 mois",
      price: "500,000 FCFA",
      icon: Bot,
      certification: "Certificat GTA + CQP",
      startDate: "06 Octobre 2025"
    },
    {
      title: "Hacking et Cybersécurité",
      duration: "5 mois",
      price: "650,000 FCFA",
      icon: Database,
      certification: "Certificat GTA + CQP",
      startDate: "06 Octobre 2025"
    }
  ];

  const benefits = [
    "Formations certifiantes reconnues",
    "Accompagnement personnalisé",
    "Projets pratiques en entreprise",
    "Insertion professionnelle garantie",
    "Certifications Reconnue",
    "Stage en fin de formation",
    "Post-Suivi des apprenants",
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gta-red/20 dark:from-gray-950 dark:via-gray-900 dark:to-gta-red/30 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gta-red/20 text-gta-red-light border-gta-red/30 hover:bg-gta-red/30">
              <Award className="w-4 h-4 mr-2" />
              Formations Certifiantes
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gta-red-light to-gta-red bg-clip-text text-transparent">
                Lancement des Formations
              </span>
              <br />
              <span className="text-white">Dès le 05 Octobre 2025</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Développez votre carrière avec nos formations certifiantes de haut niveau. 
              Acquérez des compétences recherchées et obtenez des certifications internationales.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Featured Programs */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Sparkles className="w-6 h-6 mr-2 text-gta-red-light" />
                Programmes Vedettes
              </h3>
              
              <div className="space-y-4">
                {featuredPrograms.map((program, index) => {
                  const IconComponent = program.icon;
                  return (
                    <Card key={index} className="border border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gta-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-gta-red-light" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-lg mb-2 text-white">{program.title}</h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-300 mb-2">
                              <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {program.duration}
                              </span>
                              <span className="font-semibold text-gta-red-light">{program.price}</span>
                            </div>
                            <p className="text-xs text-gray-400 mb-2">{program.certification}</p>
                            <div className="flex items-center text-xs text-gray-400">
                              <Calendar className="w-3 h-3 mr-1" />
                              Début : {program.startDate}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Right side - Benefits & CTA */}
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                  <Award className="w-5 h-5 mr-2 text-gta-red-light" />
                  Avantages de nos Formations
                </h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <Users className="w-8 h-8 mx-auto mb-2 text-gta-red-light" />
                  <div className="font-bold text-lg text-white">15-25</div>
                  <div className="text-sm text-gray-300">Étudiants max</div>
                </div>
                <div className="text-center bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <Award className="w-8 h-8 mx-auto mb-2 text-gta-red-light" />
                  <div className="font-bold text-lg text-white">100%</div>
                  <div className="text-sm text-gray-300">Certification</div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full border-2 border-gta-red-light text-gta-red-light hover:bg-gta-red-light hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                  onClick={() => window.location.href = '/contact'}
                >
                  Prendre Contact
                </Button>

                <Button 
                  size="lg" 
                  className="w-full bg-gta-red hover:bg-gta-red-light text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.location.href = '/training/certified'}
                >
                  Découvrir toutes les formations
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>                
              </div>
            </div>
          </div>

          {/* Bottom info */}
          <div className="mt-8 text-center">
            <p className="text-gray-300 italic bg-foreground/85 p-4 rounded text-lg shadow shadow-white">
              "Formez-vous aux métiers du numérique et développez votre carrière avec des compétences recherchées."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertifiedCTASection; 