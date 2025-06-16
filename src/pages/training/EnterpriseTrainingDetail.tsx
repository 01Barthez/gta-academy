
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award, Target, CheckCircle, Zap, Trophy, Calendar, BookOpen, ArrowLeft, Phone, Mail, MessageSquare } from 'lucide-react';

const EnterpriseTrainingDetailPage = () => {
  const { id } = useParams();

  // Data simulée - en production, vous récupéreriez ces données via l'API
  const getTrainingData = (trainingId: string) => {
    const allPrograms = [
      {
        id: "azure-fundamentals",
        name: "Microsoft Azure Fundamentals",
        duration: "3 jours",
        certification: "AZ-900",
        level: "Débutant",
        description: "Maîtrisez les concepts de base du cloud computing avec Azure et préparez-vous à la certification officielle Microsoft.",
        price: "180,000 FCFA",
        participants: "12-15 participants",
        category: "Cloud & Infrastructure",
        objectives: [
          "Comprendre les concepts fondamentaux du cloud",
          "Naviguer dans le portail Azure",
          "Gérer les services de base Azure",
          "Comprendre la tarification et la facturation",
          "Implémenter la sécurité de base",
          "Configurer les réseaux virtuels"
        ],
        prerequisites: "Connaissances informatiques de base",
        included: [
          "Support de cours officiel Microsoft",
          "Accès laboratoire Azure pendant 30 jours",
          "Voucher d'examen AZ-900",
          "Certificat de participation",
          "Support technique 24/7",
          "Matériel de formation digital"
        ],
        outcomes: [
          "Certification Azure Fundamentals",
          "Compétences cloud reconnues",
          "Évolution de carrière",
          "Augmentation salariale potentielle",
          "Expertise technique validée"
        ],
        nextSessions: ["15 Mars 2025", "10 Avril 2025", "5 Mai 2025"],
        detailedProgram: [
          {
            day: "Jour 1",
            title: "Introduction au Cloud Computing",
            topics: ["Concepts fondamentaux", "Avantages du cloud", "Types de services cloud", "Modèles de déploiement"]
          },
          {
            day: "Jour 2", 
            title: "Services Azure Core",
            topics: ["Compute services", "Networking", "Storage", "Databases"]
          },
          {
            day: "Jour 3",
            title: "Sécurité et Tarification",
            topics: ["Sécurité Azure", "Gouvernance", "Tarification", "Support"]
          }
        ],
        instructor: {
          name: "Expert Microsoft Certifié",
          experience: "10+ années d'expérience",
          certifications: ["Azure Solutions Architect", "Azure DevOps Engineer"]
        }
      },
      // Ajoutez d'autres formations ici...
    ];

    return allPrograms.find(p => p.id === trainingId) || allPrograms[0];
  };

  const training = getTrainingData(id || '');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gta-red to-gta-red-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link to="/training/enterprise" className="mr-4">
              <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-gta-red">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour
              </Button>
            </Link>
            <Badge variant="outline" className="text-white border-white">
              {training.category}
            </Badge>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {training.name}
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mb-8">
            {training.description}
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{training.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>{training.participants}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <span>{training.certification}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="w-5 h-5" />
              <span className="font-bold">{training.price}</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Link to="/training/enterprise/quote">
              <Button size="lg" className="bg-white text-gta-red hover:bg-gray-100">
                Demander un devis
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gta-red">
              <Phone className="w-4 h-4 mr-2" />
              Appeler un conseiller
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Objectifs */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="w-6 h-6 text-gta-red" />
                    <span>Objectifs de la formation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {training.objectives.map((objective, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Programme détaillé */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="w-6 h-6 text-gta-red" />
                    <span>Programme détaillé</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {training.detailedProgram.map((day, idx) => (
                      <div key={idx} className="border-l-4 border-gta-red pl-6">
                        <h4 className="font-semibold text-lg mb-2">{day.day} - {day.title}</h4>
                        <ul className="space-y-1">
                          {day.topics.map((topic, topicIdx) => (
                            <li key={topicIdx} className="text-muted-foreground flex items-center space-x-2">
                              <span className="w-1.5 h-1.5 bg-gta-red rounded-full"></span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Résultats attendus */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Trophy className="w-6 h-6 text-gta-red" />
                    <span>Résultats attendus</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {training.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Zap className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Prochaines sessions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-gta-red" />
                    <span>Prochaines sessions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {training.nextSessions.map((session, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <span className="font-medium">{session}</span>
                        <Badge variant="outline">Disponible</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Formateur */}
              <Card>
                <CardHeader>
                  <CardTitle>Votre formateur</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold">{training.instructor.name}</h4>
                    <p className="text-muted-foreground">{training.instructor.experience}</p>
                    <div>
                      <p className="text-sm font-medium mb-2">Certifications :</p>
                      <div className="space-y-1">
                        {training.instructor.certifications.map((cert, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Inclus */}
              <Card>
                <CardHeader>
                  <CardTitle>Inclus dans la formation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {training.included.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="border-gta-red">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-4">Prêt à commencer ?</h3>
                  <div className="space-y-3">
                    <Link to="/training/enterprise/quote">
                      <Button className="w-full bg-gta-red hover:bg-gta-red-light">
                        Demander un devis
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Chat avec un conseiller
                    </Button>
                    <Button variant="ghost" className="w-full">
                      <Mail className="w-4 h-4 mr-2" />
                      Envoyer par email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnterpriseTrainingDetailPage;
