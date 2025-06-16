
import React from 'react';
import { BookOpen, Target, ArrowRight, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const VacationTrainingModules = () => {
  const modules = [
    {
      number: 1,
      title: "Savoir utiliser un ordinateur et Initiation à l'utilisation de Scratch",
      icon: BookOpen,
      route: "/training/holidays/modules/module1",
      color: "blue",
      details: [
        "Présentation du matériel informatique",
        "Allumer et éteindre un ordinateur correctement", 
        "Système d'exploitation (Windows)",
        "Gestion des fichiers et dossiers",
        "Utilisation des logiciels de base",
        "Introduction à Internet",
        "Initiation à l'utilisation de Scratch"
      ],
      objectives: [
        "Être capable d'allumer, manipuler et éteindre un ordinateur en toute sécurité",
        "Utiliser correctement un clavier, une souris et comprendre l'interface de base",
        "Créer, enregistrer, organiser et supprimer des fichiers et dossiers"
      ]
    },
    {
      number: 2,
      title: "Initiation à l'intelligence artificielle & Word 2013",
      icon: BookOpen,
      route: "/training/holidays/modules/module2",
      color: "purple",
      details: [
        "Définitions et concepts clés de l'IA",
        "Applications courantes de l'IA",
        "IA dans la vie quotidienne",
        "Outils accessibles pour découvrir l'IA",
        "Interface de Word 2013",
        "Création et gestion de documents",
        "Mise en forme de texte",
        "Insertion d'éléments",
        "Utilisation de modèles de documents"
      ],
      objectives: [
        "Comprendre les notions de base de l'intelligence artificielle",
        "Être capable d'expliquer ce qu'est l'IA et ses enjeux",
        "Maîtriser l'environnement de travail de Word 2013"
      ]
    },
    {
      number: 3,
      title: "Initiation à l'utilisation d'Excel 2013",
      icon: BookOpen,
      route: "/training/holidays/modules/module3",
      color: "green",
      details: [
        "Découverte de l'environnement Excel 2013",
        "Manipulation des cellules",
        "Formatage de base",
        "Formules et calculs simples (SOMME, MOYENNE, MIN, MAX, NB)",
        "Références relatives et absolues",
        "Gestion des tableaux",
        "Création de graphiques simples",
        "Mise en page et impression"
      ],
      objectives: [
        "Être capable d'ouvrir, créer, enregistrer et gérer un classeur Excel",
        "Saisir, modifier et organiser des données dans une feuille de calcul",
        "Effectuer des calculs simples et utiliser des fonctions courantes"
      ]
    },
    {
      number: 4,
      title: "Initiation à l'utilisation Canva / PowerPoint 2013",
      icon: BookOpen,
      route: "/training/holidays/modules/module4",
      color: "orange",
      details: [
        "Présentation générale des outils",
        "Différences entre Canva et PowerPoint",
        "Utilisation de Canva : création de compte, interface, modèles",
        "Insertion et modification d'éléments visuels",
        "Utilisation de PowerPoint 2013 : interface, diapositives",
        "Création et organisation des diapositives",
        "Application de thèmes et modèles",
        "Transitions et animations simples"
      ],
      objectives: [
        "Créer un compte Canva et utiliser les fonctionnalités de base",
        "Réaliser des supports visuels simples de manière esthétique et professionnelle",
        "Créer une présentation PowerPoint claire et structurée"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-600 to-blue-700",
      purple: "from-purple-600 to-purple-700", 
      green: "from-green-600 to-green-700",
      orange: "from-orange-600 to-orange-700"
    };
    return colorMap[color as keyof typeof colorMap] || "from-gta-red to-gta-red-light";
  };

  return (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-center text-foreground mb-12">MODULES DE FORMATION</h3>
      <div className="grid lg:grid-cols-2 gap-8">
        {modules.map((module) => {
          const IconComponent = module.icon;
          return (
            <Card key={module.number} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardHeader className={`bg-gradient-to-r ${getColorClasses(module.color)} text-white rounded-t-lg`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white text-gray-800 rounded-full flex items-center justify-center font-bold text-xl">
                      {module.number}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">Module {module.number}</CardTitle>
                      <CardDescription className="text-white/90 text-sm">
                        {module.title}
                      </CardDescription>
                    </div>
                  </div>
                  <Button
                    onClick={() => window.location.href = module.route}
                    size="sm"
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                  >
                    Voir détails
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-gta-red" />
                      Contenu de la formation
                    </h4>
                    <ul className="space-y-2">
                      {module.details.slice(0, 4).map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-gta-red mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                      {module.details.length > 4 && (
                        <li className="text-sm text-gray-500 dark:text-gray-400 italic">
                          + {module.details.length - 4} autres points...
                        </li>
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-green-600 dark:text-green-500" />
                      Objectifs principaux
                    </h4>
                    <ul className="space-y-2">
                      {module.objectives.map((objective, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <Button
                      onClick={() => window.location.href = module.route}
                      className="w-full bg-gta-red hover:bg-gta-red-light text-white"
                    >
                      Découvrir le module complet
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default VacationTrainingModules;
