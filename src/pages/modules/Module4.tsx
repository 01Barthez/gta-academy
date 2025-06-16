import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ModuleRegistrationCTA from '@/components/ModuleRegistrationCTA';
import { ArrowLeft, Palette, Monitor, Presentation, Image, Target, CheckCircle, Users, Clock, Award, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Module4Page = () => {
  const learningObjectives = [
    "Créer un compte Canva et utiliser les fonctionnalités de base",
    "Réaliser des supports visuels simples de manière esthétique et professionnelle",
    "Créer une présentation PowerPoint claire et structurée",
    "Insérer et formater divers éléments dans une présentation",
    "Utiliser des transitions et animations pour dynamiser un diaporama",
    "Être capable de sauvegarder, partager ou présenter son travail efficacement"
  ];

  const canvaContent = [
    {
      icon: Palette,
      title: "Création d'un compte Canva",
      description: "Premiers pas sur la plateforme",
      details: ["Inscription gratuite", "Découverte de l'interface", "Bibliothèque de modèles", "Outils de création"]
    },
    {
      icon: Image,
      title: "Insertion et modification d'éléments visuels",
      description: "Personnalisation des créations",
      details: ["Textes", "Formes", "Images et icônes", "Calques et alignement"]
    }
  ];

  const powerpointContent = [
    {
      icon: Monitor,
      title: "Utilisation de PowerPoint 2013",
      description: "Maîtrise de l'interface",
      details: ["Interface et ruban", "Diapositives", "Zone de texte", "Navigation"]
    },
    {
      icon: Presentation,
      title: "Création et organisation des diapositives",
      description: "Structure de présentation",
      details: ["Créer et organiser", "Insérer des objets", "Thèmes et modèles", "Transitions et animations"]
    }
  ];

  const projectTypes = [
    {
      title: "Présentations scolaires",
      description: "Exposés attractifs et professionnels",
      icon: Presentation,
      examples: ["Exposé d'histoire", "Présentation de projet", "Rapport de stage"]
    },
    {
      title: "Affiches créatives",
      description: "Supports visuels impactants",
      icon: Palette,
      examples: ["Affiche d'événement", "Flyer informatif", "Bannière de projet"]
    },
    {
      title: "CV et documents",
      description: "Documents professionnels",
      icon: Image,
      examples: ["CV moderne", "Lettre de motivation", "Portfolio créatif"]
    }
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
            <span className="font-medium text-foreground">Module 4</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gta-red-dark via-gta-red to-red-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/40"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-gta-red/25 text-gta-red border-gta-red/40 hover:bg-white/35 backdrop-blur-sm">Formation Vacances 2025</Badge>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 drop-shadow-lg">
              Module 4 : Initiation à Canva / PowerPoint 2013
            </h1>
            <p className="text-xl text-white/95 mb-8 max-w-3xl mx-auto drop-shadow-sm">
              Créez des présentations et supports visuels professionnels avec les meilleurs outils du marché
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

      {/* Tools Comparison */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Canva vs PowerPoint : Le meilleur des deux mondes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Apprenez à utiliser les deux outils complémentaires pour créer des contenus visuels exceptionnels
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Canva Section */}
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gta-red/10 dark:bg-gta-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-gta-red" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Partie 1 : Utilisation de Canva</h3>
                <p className="text-muted-foreground">Design professionnel simplifié</p>
              </div>

              <div className="space-y-6">
                {canvaContent.map((content, index) => {
                  const IconComponent = content.icon;
                  return (
                    <Card key={index} className="border border-border hover:border-gta-red/50 transition-all duration-300 dark:bg-card">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gta-red/10 dark:bg-gta-red/20 rounded-full flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-gta-red" />
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

            {/* PowerPoint Section */}
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gta-red/10 dark:bg-gta-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Presentation className="w-8 h-8 text-gta-red" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Partie 2 : Utilisation de PowerPoint 2013</h3>
                <p className="text-muted-foreground">Présentations dynamiques et interactives</p>
              </div>

              <div className="space-y-6">
                {powerpointContent.map((content, index) => {
                  const IconComponent = content.icon;
                  return (
                    <Card key={index} className="border border-border hover:border-gta-red/50 transition-all duration-300 dark:bg-card">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gta-red/10 dark:bg-gta-red/20 rounded-full flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-gta-red" />
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
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 bg-muted/50 dark:bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Sparkles className="w-12 h-12 text-gta-red mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-foreground">Types de projets que vous saurez créer</h2>
            <p className="text-muted-foreground">
              Des créations variées pour tous vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card key={index} className="border border-border text-center dark:bg-card">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gta-red/10 dark:bg-gta-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-gta-red" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-foreground">Exemples :</h4>
                      <ul className="space-y-1">
                        {project.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">
                            • {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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

      {/* Visual Examples */}
      <section className="py-16 bg-muted/50 dark:bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Exemples de créations</h2>
            <p className="text-muted-foreground">Inspirez-vous de ce que vous pourrez créer</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border border-border overflow-hidden dark:bg-card">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=250&q=80"
                alt="Exemple de présentation créative"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-bold mb-2 text-foreground">Présentation créative</h3>
                <p className="text-sm text-muted-foreground">
                  Design moderne avec animations et transitions fluides
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border overflow-hidden dark:bg-card">
              <img
                src="/public/images/affiche-flyer.jpeg"
                alt="Jeune créateur utilisant Canva"
                className="w-full h-48 object-cover object-top"
              />
              <CardContent className="p-4">
                <h3 className="font-bold mb-2 text-foreground">Travail collaboratif</h3>
                <p className="text-sm text-muted-foreground">
                  Projets de groupe et partage de créations
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border overflow-hidden dark:bg-card">
              <img
                src="/public/images/affiche-facebook.jpg"
                alt="Équipe travaillant sur des présentations"
                className="w-full h-48 object-contain bg-red-200"
              />
              <CardContent className="p-4">
                <h3 className="font-bold mb-2 text-foreground">Affiches impactantes</h3>
                <p className="text-sm text-muted-foreground">
                  Visuels attractifs pour tous types d'événements
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ModuleRegistrationCTA
        moduleNumber={4}
        moduleTitle="Module 4 : Initiation à Canva / PowerPoint 2013"
      />

      <Footer />
    </div>
  );
};

export default Module4Page;
