import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ModuleRegistrationCTA from '@/components/ModuleRegistrationCTA';
import { ArrowLeft, Calculator, Table, BarChart3, FileSpreadsheet, Target, CheckCircle, Users, Clock, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Module3Page = () => {
  const learningObjectives = [
    "Être capable d'ouvrir, créer, enregistrer et gérer un classeur Excel",
    "Saisir, modifier et organiser des données dans une feuille de calcul",
    "Appliquer des formats pour rendre les données lisibles et claires",
    "Effectuer des calculs simples et utiliser des fonctions courantes",
    "Créer et présenter des tableaux et graphiques de base",
    "Préparer un document Excel pour une impression propre et professionnelle"
  ];

  const excelContent = [
    {
      icon: FileSpreadsheet,
      title: "Découverte de l'environnement Excel 2013",
      description: "Interface et navigation dans Excel",
      details: ["Ruban et onglets", "Cellules et colonnes", "Feuilles de calcul", "Barre de formules"]
    },
    {
      icon: Table,
      title: "Manipulation des cellules",
      description: "Gestion des données et contenus",
      details: ["Sélection", "Saisie", "Modification", "Copier/Coller", "Remplissage automatique"]
    },
    {
      icon: Calculator,
      title: "Formules et calculs simples",
      description: "Automatisation des calculs",
      details: ["SOMME", "MOYENNE", "MIN", "MAX", "NB", "Références relatives/absolues"]
    },
    {
      icon: BarChart3,
      title: "Création de graphiques simples",
      description: "Visualisation des données",
      details: ["Histogrammes", "Courbes", "Secteurs (camemberts)", "Choix du graphique"]
    },
    {
      icon: TrendingUp,
      title: "Gestion des tableaux",
      description: "Organisation et présentation",
      details: ["Création de tableaux", "Tri et filtres", "Figer les volets", "Mise en forme"]
    }
  ];

  const practicalExercises = [
    "Créer un budget familial avec calculs automatiques",
    "Réaliser un tableau de notes avec moyennes",
    "Concevoir un planning avec mise en forme",
    "Analyser des données de ventes avec graphiques"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
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
            <span className="font-medium text-foreground">Module 3</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gta-red-dark via-gta-red to-red-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/40"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-gta-red/25 text-gta-red border-gta-red/40 hover:bg-gta-red/35 backdrop-blur-sm">Formation Vacances 2025</Badge>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 drop-shadow-lg">
              Module 3 : Initiation à l'utilisation d'Excel 2013
            </h1>
            <p className="text-xl text-white/95 mb-8 max-w-3xl mx-auto drop-shadow-sm">
              Maîtrisez les feuilles de calcul, les formules et la création de graphiques professionnels
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center bg-white/15 rounded-lg p-6 backdrop-blur-sm border border-white/20 shadow-lg">
                <Clock className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold">1 semaine</div>
                <div className="text-white/90 text-sm">Durée du module</div>
              </div>
              <div className="text-center bg-white/15 rounded-lg p-6 backdrop-blur-sm border border-white/20 shadow-lg">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold">14+ ans</div>
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

      {/* Excel Skills Visual */}
      <section className="py-16 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Pourquoi apprendre Excel ?</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gta-red/10 dark:bg-gta-red/20 rounded-full flex items-center justify-center">
                      <Calculator className="w-4 h-4 text-gta-red" />
                    </div>
                    <span className="text-foreground">Automatiser les calculs complexes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gta-red/10 dark:bg-gta-red/20 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-gta-red" />
                    </div>
                    <span className="text-foreground">Créer des visualisations impactantes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gta-red/10 dark:bg-gta-red/20 rounded-full flex items-center justify-center">
                      <Table className="w-4 h-4 text-gta-red" />
                    </div>
                    <span className="text-foreground">Organiser et analyser des données</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gta-red/10 dark:bg-gta-red/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-gta-red" />
                    </div>
                    <span className="text-foreground">Préparer l'avenir professionnel</span>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://assets.kompasiana.com/items/album/2021/06/30/2-60dc83571525101b9961b1a2.jpg?t=o&v=300"
                  alt="Écran d'ordinateur montrant une feuille Excel"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Contenu détaillé du Module</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une progression logique pour maîtriser tous les aspects d'Excel 2013
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {excelContent.map((content, index) => {
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

      {/* Practical Exercises */}
      <section className="py-16 bg-muted/50 dark:bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Exercices pratiques</h2>
              <p className="text-muted-foreground">
                Des projets concrets pour appliquer vos connaissances
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {practicalExercises.map((exercise, index) => (
                <Card key={index} className="border border-border dark:bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gta-red/10 dark:bg-gta-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-gta-red font-bold">{index + 1}</span>
                      </div>
                      <span className="text-foreground font-medium">{exercise}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="py-16 bg-background">
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
        moduleNumber={3}
        moduleTitle="Module 3 : Initiation à l'utilisation d'Excel 2013"
      />

      <Footer />
    </div>
  );
};

export default Module3Page;
