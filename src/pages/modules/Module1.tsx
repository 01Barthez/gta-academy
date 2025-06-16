import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ModuleRegistrationCTA from '@/components/ModuleRegistrationCTA';
import { ArrowLeft, Monitor, Mouse, Keyboard, Globe, FileText, Gamepad2, Target, CheckCircle, Users, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

console.log('Module1 component is loading...');

const Module1Page: React.FC = () => {
  console.log('Module1Page component rendering...');

  const learningObjectives = [
    "Être capable d'allumer, manipuler et éteindre un ordinateur en toute sécurité",
    "Utiliser correctement un clavier, une souris et comprendre l'interface de base", 
    "Créer, enregistrer, organiser et supprimer des fichiers et dossiers",
    "Naviguer sur Internet et effectuer une recherche simple",
    "Lancer Scratch et comprendre son interface",
    "Créer un petit programme ou une animation à l'aide de blocs Scratch"
  ];

  const courseContent = [
    {
      icon: Monitor,
      title: "Présentation du matériel informatique",
      description: "Découverte des composants essentiels d'un ordinateur",
      details: ["Unité centrale", "Écran", "Clavier", "Souris", "Périphériques"]
    },
    {
      icon: Mouse,
      title: "Allumer et éteindre un ordinateur correctement",
      description: "Procédures de démarrage et d'arrêt sécurisées",
      details: ["Séquence de démarrage", "Arrêt en sécurité", "Modes veille/hibernation"]
    },
    {
      icon: FileText,
      title: "Système d'exploitation (Windows)",
      description: "Navigation dans l'environnement Windows",
      details: ["Le bureau", "Les fenêtres", "La barre des tâches", "Les menus"]
    },
    {
      icon: FileText,
      title: "Gestion des fichiers et dossiers",
      description: "Organisation et manipulation des données",
      details: ["Créer", "Enregistrer", "Renommer", "Déplacer", "Supprimer"]
    },
    {
      icon: Globe,
      title: "Introduction à Internet",
      description: "Premiers pas sur le web en toute sécurité",
      details: ["Utiliser un moteur de recherche", "Naviguer sur une page web"]
    },
    {
      icon: Gamepad2,
      title: "Initiation à l'utilisation de Scratch",
      description: "Découverte de la programmation visuelle",
      details: ["Interface Scratch", "Scène et lutins", "Blocs de commandes", "Création d'animations"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-muted/30 py-4 border-b dark:border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.history.back()}
              className="text-muted-foreground hover:text-foreground hover:bg-muted"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Retour aux formations
            </Button>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium text-foreground">Module 1</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-br from-gta-red-dark via-gta-red to-red-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/40"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-gta-red/25 text-gta-red border-gta-red/40 hover:bg-gta-red/35 backdrop-blur-sm">Formation Vacances 2025</Badge>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 drop-shadow-lg">
              Module 1 : Savoir utiliser un ordinateur et Initiation à Scratch
            </h1>
            <p className="text-xl text-white/95 mb-8 max-w-3xl mx-auto drop-shadow-sm">
              Découvrez les bases de l'informatique et faites vos premiers pas dans la programmation avec Scratch
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center bg-white/15 rounded-lg p-6 backdrop-blur-sm border border-white/20 shadow-lg">
                <Clock className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold">1 semaine</div>
                <div className="text-white/90 text-sm">Durée du module</div>
              </div>
              <div className="text-center bg-white/15 rounded-lg p-6 backdrop-blur-sm border border-white/20 shadow-lg">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold">7-18 ans</div>
                <div className="text-white/90 text-sm">Âge recommandé</div>
              </div>
              <div className="text-center bg-white/15 rounded-lg p-6 backdrop-blur-sm border border-white/20 shadow-lg">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold">Certificat</div>
                <div className="text-white/90 text-sm">À la fin du module</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Contenu du Module</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une formation progressive pour maîtriser les fondamentaux de l'informatique et découvrir la programmation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {courseContent.map((content, index) => {
              const IconComponent = content.icon;
              return (
                <Card key={index} className="border border-border hover:border-gta-red/50 transition-all duration-300 hover:shadow-lg dark:bg-card dark:hover:bg-card/80">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gta-red/10 dark:bg-gta-red/20 rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-gta-red" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-foreground">{content.title}</CardTitle>
                        <CardDescription className="text-muted-foreground">{content.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {content.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50 dark:bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Target className="w-12 h-12 text-gta-red mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4 text-foreground">Objectifs pédagogiques</h2>
              <p className="text-muted-foreground">
                À la fin de ce module, votre enfant sera capable de :
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {learningObjectives.map((objective, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-card dark:bg-card rounded-lg border border-border">
                  <div className="w-6 h-6 bg-gta-red/10 dark:bg-gta-red/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gta-red text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="text-foreground">{objective}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ModuleRegistrationCTA 
        moduleNumber={1}
        moduleTitle="Module 1 : Savoir utiliser un ordinateur et Initiation à Scratch"
      />

      <Footer />
    </div>
  );
};

console.log('Module1Page component defined');

export default Module1Page;
