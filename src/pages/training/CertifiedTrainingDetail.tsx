
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award, CheckCircle, Calendar, BookOpen, Target, Trophy, ArrowLeft, Star } from 'lucide-react';

const CertifiedTrainingDetailPage = () => {
  const { id } = useParams();

  // Données des formations (à synchroniser avec CertifiedTrainingPrograms)
  const formations = {
    'certified-web-dev': {
      title: "Développement Web Full-Stack",
      duration: "6 mois",
      students: "25 max",
      level: "Débutant à Avancé",
      price: "450,000 FCFA",
      description: "Formation complète en développement web moderne avec les dernières technologies pour devenir un développeur full-stack compétent.",
      longDescription: "Cette formation intensive vous permettra de maîtriser l'ensemble des technologies nécessaires pour devenir un développeur web full-stack. Vous apprendrez à créer des applications web modernes, depuis l'interface utilisateur jusqu'à la gestion des données côté serveur.",
      modules: [
        "HTML5, CSS3, JavaScript ES6+",
        "React.js et écosystème",
        "Node.js et Express",
        "Bases de données (MongoDB, PostgreSQL)",
        "APIs REST et GraphQL",
        "Déploiement et DevOps"
      ],
      objectives: [
        "Maîtriser les langages fondamentaux du web",
        "Développer des applications React performantes",
        "Créer des APIs robustes avec Node.js",
        "Gérer efficacement les bases de données",
        "Déployer des applications en production"
      ],
      prerequisites: "Bases en informatique, logique de programmation recommandée",
      certification: "Certificat GTA + Certification internationale",
      nextStart: "15 Février 2025",
      featured: true,
      outcomes: [
        "Développement d'applications web complètes",
        "Maîtrise des technologies modernes",
        "Portfolio professionnel constitué",
        "Préparation à l'emploi en développement"
      ],
      included: [
        "Support de cours complet",
        "Projets pratiques guidés",
        "Mentorat personnalisé",
        "Accès plateforme en ligne",
        "Certificat de fin de formation"
      ]
    },
    'certified-cybersec': {
      title: "Cybersécurité Avancée",
      duration: "4 mois",
      students: "15 max",
      level: "Intermédiaire à Avancé",
      price: "500,000 FCFA",
      description: "Formation spécialisée en cybersécurité pour devenir expert en protection des systèmes d'information.",
      longDescription: "Cette formation vous permettra d'acquérir les compétences nécessaires pour protéger les infrastructures informatiques contre les cybermenaces. Vous apprendrez les techniques d'attaque et de défense utilisées par les professionnels de la cybersécurité.",
      modules: [
        "Ethical Hacking et Penetration Testing",
        "Sécurité des réseaux",
        "Cryptographie appliquée",
        "Forensique numérique",
        "Gestion des incidents de sécurité",
        "Conformité et audit"
      ],
      objectives: [
        "Maîtriser les techniques de test de pénétration",
        "Comprendre les vulnérabilités des systèmes",
        "Implémenter des solutions de sécurité",
        "Gérer les incidents de sécurité",
        "Effectuer des audits de sécurité"
      ],
      prerequisites: "Connaissances en réseaux et systèmes informatiques",
      certification: "Certificat GTA + CEH (Certified Ethical Hacker)",
      nextStart: "15 Mars 2025",
      featured: false,
      outcomes: [
        "Expertise en sécurité informatique",
        "Capacité à détecter les vulnérabilités",
        "Compétences en investigation numérique",
        "Préparation aux certifications internationales"
      ],
      included: [
        "Laboratoires virtuels",
        "Outils professionnels",
        "Études de cas réels",
        "Certification internationale",
        "Support technique avancé"
      ]
    },
    'certified-data-science': {
      title: "Data Science & Machine Learning",
      duration: "5 mois",
      students: "20 max",
      level: "Intermédiaire",
      price: "550,000 FCFA",
      description: "Formation complète en science des données et intelligence artificielle pour devenir data scientist.",
      longDescription: "Cette formation vous donnera toutes les compétences nécessaires pour analyser des données complexes et créer des modèles d'intelligence artificielle. Vous travaillerez sur des projets réels et apprendrez à utiliser les outils les plus demandés sur le marché.",
      modules: [
        "Python pour la Data Science",
        "Statistiques et probabilités",
        "Machine Learning avec Scikit-learn",
        "Deep Learning avec TensorFlow",
        "Visualisation de données",
        "Projets pratiques avec données réelles"
      ],
      objectives: [
        "Maîtriser Python pour l'analyse de données",
        "Comprendre les algorithmes de machine learning",
        "Créer des modèles prédictifs",
        "Visualiser efficacement les données",
        "Déployer des modèles en production"
      ],
      prerequisites: "Bases en mathématiques et programmation",
      certification: "Certificat GTA + Certification IBM",
      nextStart: "1er Mars 2025",
      featured: false,
      outcomes: [
        "Expertise en analyse de données",
        "Compétences en intelligence artificielle",
        "Portfolio de projets data science",
        "Préparation aux postes de data scientist"
      ],
      included: [
        "Datasets professionnels",
        "Environnement cloud inclus",
        "Projets portfolio",
        "Mentorat par experts",
        "Certification reconnue"
      ]
    }
  };

  const formation = formations[id as keyof typeof formations];

  if (!formation) {
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
          <span className="text-foreground">{formation.title}</span>
        </div>

        {/* Header */}
        <div className="mb-8">          
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                {formation.featured && (
                  <Badge className="bg-gta-red text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Populaire
                  </Badge>
                )}
                <Badge variant="outline">{formation.level}</Badge>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">{formation.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{formation.longDescription}</p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-gta-red" />
                  <span className="text-sm text-muted-foreground">{formation.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-gta-red" />
                  <span className="text-sm text-muted-foreground">{formation.students}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-gta-red" />
                  <span className="text-sm text-muted-foreground">{formation.nextStart}</span>
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
                  <CardTitle className="text-2xl text-gta-red">{formation.price}</CardTitle>
                  <CardDescription>Paiement en 3 fois possible</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link to={`/training/certified/${id}/registration`} className="block">
                    <Button className="w-full bg-gta-red hover:bg-gta-red-light text-white">
                      S'inscrire maintenant
                    </Button>
                  </Link>
                  <p className="text-xs text-center text-muted-foreground">
                    Prochaine session : {formation.nextStart}
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
                  <span>Programme de formation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {formation.modules.map((module, idx) => (
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
                  {formation.objectives.map((objective, idx) => (
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
                  {formation.outcomes.map((outcome, idx) => (
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
                <p className="text-sm text-muted-foreground">{formation.certification}</p>
              </CardContent>
            </Card>

            {/* Inclus */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Inclus dans la formation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {formation.included.map((item, idx) => (
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
                <p className="text-sm text-muted-foreground">{formation.prerequisites}</p>
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
