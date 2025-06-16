import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ModuleRegistrationCTA from '@/components/ModuleRegistrationCTA';
import { ArrowLeft, Brain, FileText, Lightbulb, Cpu, Globe, Target, CheckCircle, Users, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Module2Page = () => {
  const learningObjectives = [
    "Comprendre les notions de base de l'intelligence artificielle",
    "Être capable d'expliquer ce qu'est l'IA et ses enjeux",
    "Utiliser des outils accessibles pour expérimenter des fonctions élémentaires d'IA",
    "Maîtriser l'environnement de travail de Word 2013",
    "Créer, modifier, mettre en page et sauvegarder un document professionnel",
    "Insérer des éléments graphiques de base dans un document Word"
  ];

  const aiContent = [
    {
      icon: Brain,
      title: "Définitions et concepts clés de l'IA",
      description: "Qu'est-ce que l'intelligence artificielle ?",
      details: ["Machine learning", "Deep learning", "Réseaux de neurones", "Algorithmes"]
    },
    {
      icon: Globe,
      title: "Applications courantes de l'IA",
      description: "L'IA dans notre quotidien",
      details: ["Reconnaissance vocale", "Assistants virtuels", "Voitures autonomes", "Recommandations"]
    },
    {
      icon: Lightbulb,
      title: "IA dans la vie quotidienne",
      description: "Exemples concrets d'utilisation",
      details: ["Téléphones", "Réseaux sociaux", "Services bancaires", "Santé"]
    },
    {
      icon: Cpu,
      title: "Outils accessibles pour découvrir l'IA",
      description: "Expérimentation pratique",
      details: ["Teachable Machine de Google", "Chatbots simples", "Outils No Code d'IA"]
    }
  ];

  const wordContent = [
    {
      icon: FileText,
      title: "Interface de Word 2013",
      description: "Découverte de l'environnement de travail",
      details: ["Ruban", "Onglets", "Barres d'outils", "Fenêtres de travail"]
    },
    {
      icon: FileText,
      title: "Création et gestion de documents",
      description: "Manipulation des fichiers",
      details: ["Créer", "Enregistrer", "Ouvrir", "Modifier", "Imprimer"]
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
            <span className="font-medium text-foreground">Module 2</span>
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
              Module 2 : Initiation à l'Intelligence Artificielle & Word 2013
            </h1>
            <p className="text-xl text-white/95 mb-8 max-w-3xl mx-auto drop-shadow-sm">
              Découvrez l'intelligence artificielle et maîtrisez la création de documents professionnels
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

      {/* AI Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Partie 1 : Initiation à l'Intelligence Artificielle</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprenez les concepts fondamentaux de l'IA et découvrez ses applications dans notre quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiContent.map((content, index) => {
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

      {/* Word Section */}
      <section className="py-16 bg-muted/50 dark:bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Partie 2 : Utilisation de Microsoft Word 2013</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Maîtrisez les outils de traitement de texte pour créer des documents professionnels
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {wordContent.map((content, index) => {
              const IconComponent = content.icon;
              return (
                <Card key={index} className="border border-border dark:bg-card">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-gta-red/10 dark:bg-gta-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-gta-red" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{content.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{content.description}</CardDescription>
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
            
            {/* Image illustration */}
            <Card className="border border-border dark:bg-card">
              <CardContent className="p-0">
                <img 
                  src="https://i0.wp.com/aboukam.net/wp-content/uploads/2016/12/HourOfCode-Une-heure-de-code-pour-apprendre-la-programmation-informatique.jpg?resize=660%2C330&ssl=1"
                  alt="Étudiant utilisant un ordinateur"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="font-bold mb-2 text-foreground">Pratique intensive</h3>
                  <p className="text-muted-foreground text-sm">
                    Apprentissage par la pratique avec des exercices concrets et des projets réels
                  </p>
                </div>
              </CardContent>
            </Card>
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
        moduleNumber={2}
        moduleTitle="Module 2 : Initiation à l'Intelligence Artificielle & Word 2013"
      />

      <Footer />
    </div>
  );
};

export default Module2Page;
