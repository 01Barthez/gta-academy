
import React from 'react';
import { Award, Calendar, Briefcase, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const TrainingTypes = () => {
  const trainingTypes = [
    {
      title: "Formations Certifiantes",
      description: "Obtenez des certifications CQP, DQP, AQP et des certifications reconnues dans les domaines les plus demandés du marché.",
      icon: Award,
      href: "/training/certified",
      features: [
        "Certifications internationales",
        "Formations longue durée (4-6 mois)",
        "Suivi personnalisé",
        "Insertion professionnelle"
      ],
      color: "from-blue-600 to-blue-700",
      programs: ["Développement Web Full-Stack", "Data Science & Machine Learning", "Cybersécurité Avancée", "Développement Mobile"]
    },
    {
      title: "Formations Vacances",
      description: "Profitez des vacances pour acquérir de nouvelles compétences numériques essentielles.",
      icon: Calendar,
      href: "/training/holidays",
      features: [
        "Formations courtes intensives",
        "Tous âges (7 ans et plus)",
        "Horaires flexibles",
        "Prix abordables"
      ],
      color: "from-green-600 to-green-700",
      programs: ["Initiation Informatique", "Intelligence Artificielle", "Excel & PowerPoint", "Canva & Design"]
    },
    {
      title: "Formations Entreprise",
      description: "Solutions de formation sur mesure pour les entreprises et les professionnels.",
      icon: Briefcase,
      href: "/training/enterprise",
      features: [
        "Formations sur mesure",
        "Certifications professionnelles",
        "Formation en entreprise",
        "Suivi post-formation"
      ],
      color: "from-purple-600 to-purple-700",
      programs: ["Microsoft Azure", "AWS Cloud", "PMP & SCRUM", "Cybersécurité Avancée"]
    },
    {
      title: "Formations Personnalisées",
      description: "Un accompagnement sur mesure adapté à vos besoins spécifiques et vos objectifs uniques.",
      icon: Users,
      href: "/training/personalized",
      features: [
        "Programme 100% personnalisé",
        "Formateurs experts dédiés",
        "Flexibilité totale",
        "Suivi individuel exclusif"
      ],
      color: "from-orange-600 to-orange-700",
      programs: ["Formation à la demande", "Mentorat individuel", "Coaching technique", "Projets spécialisés"]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">Choisissez Votre Parcours</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nous proposons quatre types de formations adaptés à différents besoins et objectifs professionnels
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {trainingTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className={`bg-gradient-to-r ${type.color} text-white rounded-t-lg`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{type.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-white/90 text-base">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Caractéristiques :</h4>
                      <ul className="space-y-2">
                        {type.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-gta-red rounded-full"></div>
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Exemples de programmes :</h4>
                      <div className="flex flex-wrap gap-2">
                        {type.programs.map((program, idx) => (
                          <span key={idx} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Link to={type.href}>
                        <Button className="w-full bg-gta-red hover:bg-gta-red-light text-white group-hover:bg-gta-red-light">
                          Explorer les programmes
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrainingTypes;
