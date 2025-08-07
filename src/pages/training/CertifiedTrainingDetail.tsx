
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award, CheckCircle, Calendar, BookOpen, Target, Trophy, ArrowLeft, Star } from 'lucide-react';
import { programs } from '@/data/programs';

const CertifiedTrainingDetailPage = () => {
  const { id } = useParams();

  const program = programs.find(p => p.id === id);
  
  // Définir des tableaux vides par défaut pour éviter les erreurs
  const safeModules = program?.modules || [];
  const safeObjectives = program?.objectives || [];
  const safeOutcomes = program?.outcomes || [];
  const safeIncluded = program?.included || [];

  if (!program) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Formation non trouvée</h1>
            <Link to="/training/certified">
              <Button variant="outline">Retour aux formations</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/training" className="hover:text-gta-red">Formations</Link>
          <span>/</span>
          <Link to="/training/certified" className="hover:text-gta-red">Certifiantes</Link>
          <span>/</span>
          <span className="text-foreground">{program.title}</span>
        </div>

        {/* Header */}
        <div className="mb-8">          
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                {program.featured && (
                  <Badge className="bg-gta-red text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Populaire
                  </Badge>
                )}
                <Badge variant="outline">{program.level}</Badge>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">{program.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{program.description}</p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-gta-red" />
                  <span className="text-sm text-muted-foreground">{program.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-gta-red" />
                  <span className="text-sm text-muted-foreground">{program.students}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-gta-red" />
                  <span className="text-sm text-muted-foreground">{program.nextStart}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-gta-red" />
                  <span className="text-sm text-muted-foreground">Certifiant</span>
                </div>
              </div>
            </div>
            
            {/* Prix et CTA */}
            <div className="lg:w-80">
              <Card className="border-2 border-gta-red/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gta-red">{program.price}</CardTitle>
                  <CardDescription>Paiement en 3 fois possible</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link to={`/training/certified/${id}/registration`} className="block">
                    <Button className="w-full bg-gta-red hover:bg-gta-red-light text-white">
                      S'inscrire maintenant
                    </Button>
                  </Link>
                  <p className="text-xs text-center text-muted-foreground">
                    Prochaine session : {program.nextStart}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Modules */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {/* <BookOpen className="w-5 h-5 text-gta-red" /> */}
                  <span>Programme de Formation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {safeModules.map((module, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-gta-red text-white rounded-full flex items-center justify-center text-sm font-medium mt-1">
                        {idx + 1}
                      </span>
                      <span className="text-muted-foreground">{module}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Objectifs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {/* <Target className="w-5 h-5 text-gta-red" /> */}
                  <span>Objectifs pédagogiques</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {safeObjectives.map((objective, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Résultats attendus */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {/* <Trophy className="w-5 h-5 text-gta-red" /> */}
                  <span>Résultats attendus</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {safeOutcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Certification */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="w-8 h-8 text-gta-red" />
                  <div>
                    <p className="font-medium text-foreground">Diplôme certifiant</p>
                    <p className="text-sm text-muted-foreground">Reconnu internationalement</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{program.certification}</p>
              </CardContent>
            </Card>

            {/* Inclus */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Inclus dans la formation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {safeIncluded.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Prérequis */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Prérequis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{program.prerequisites}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CertifiedTrainingDetailPage;
