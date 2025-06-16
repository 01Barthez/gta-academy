
import React from 'react';
import { Code, Database, Shield, Smartphone, Brain, Cloud, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/optimized-image';

const Programs = () => {
  const programs = [
    {
      icon: Code,
      title: "Développement Web",
      description: "Formation complète en développement web moderne",
      duration: "6 mois",
      level: "Débutant à Avancé",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&auto=format"
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Maîtrisez l'analyse de données et l'IA",
      duration: "5 mois",
      level: "Intermédiaire",
      image: "https://media.istockphoto.com/id/1448152453/vector/big-data-technology-and-data-science-illustration-data-flow-concept-querying-analysing.jpg?s=612x612&w=0&k=20&c=To0lhCrVmDYdSkOUOGxGsjlYe0buj_wwGCDqYhF9p2o="
    },
    {
      icon: Shield,
      title: "Cybersécurité",
      description: "Devenez expert en sécurité informatique",
      duration: "4 mois",
      level: "Avancé",
      image: "https://media.istockphoto.com/id/1412282189/fr/photo/serrure-concept-de-technologie-de-r%C3%A9seau.jpg?s=612x612&w=0&k=20&c=LfGUeLwtpxgUNh32DNajQkuy3EgDa5FiixAVK9fegSQ="
    },
    {
      icon: Smartphone,
      title: "Développement Mobile",
      description: "Créez des apps iOS et Android",
      duration: "4 mois",
      level: "Intermédiaire",
      image: "https://media.istockphoto.com/id/1481181755/photo/african-american-man-writing-lines-of-code-on-desktop-computer-with-multiple-monitors-and.jpg?s=612x612&w=0&k=20&c=EQN-Ef6wuTG74-xjQTHTRmZGZwnMP51MKzslRSDmIaU="
    },
    {
      icon: Brain,
      title: "Intelligence Artificielle",
      description: "Machine Learning et Deep Learning",
      duration: "6 mois",
      level: "Avancé",
      image: "https://apolearn.com/wp-content/uploads/2024/04/machine-learning-tout-savoir-une.jpg"
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "AWS, Azure et technologies cloud",
      duration: "3 mois",
      level: "Intermédiaire",
      image: "https://media.istockphoto.com/id/1399936043/photo/data-transfer-cloud-computing-technology-concept-there-is-a-large-prominent-cloud-icon-in-the.jpg?s=612x612&w=0&k=20&c=pSrIUkBc6Yf1gT7G0SnjQL4T-PjbC6KmFZavud7To2I="
    }
  ];

  return (
    <section id="programs" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            NOS FORMATIONS
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choisissez parmi nos formations certifiantes et transformez votre carrière
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gta-red to-gta-red-light mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden">
                {/* Program Image */}
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src={program.image}
                    alt={`Formation ${program.title}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl group-hover:text-gta-red transition-colors">{program.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>Durée: {program.duration}</span>
                    <span>{program.level}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gta-red hover:bg-gta-red-light text-white"
            onClick={() => window.location.href = '/training'}
          >
            Voir toutes nos formations
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
