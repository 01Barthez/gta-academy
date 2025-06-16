
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Code, Database, Shield, Brain, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesPage = () => {
  const services = [
    {
      icon: Code,
      title: "Développement Web",
      description: "Formation complète en développement web moderne avec React, Next.js, et les dernières technologies.",
      features: ["HTML5, CSS3, JavaScript", "React & Next.js", "Node.js & Express", "Bases de données"],
      duration: "6 mois",
      level: "Débutant à Avancé"
    },
    {
      icon: Smartphone,
      title: "Développement Mobile",
      description: "Apprenez à créer des applications mobile natives et cross-platform.",
      features: ["React Native", "Flutter", "iOS & Android", "Publication sur stores"],
      duration: "4 mois",
      level: "Intermédiaire"
    },
    {
      icon: Database,
      title: "Big Data & Analytics",
      description: "Maîtrisez l'analyse de données et les technologies Big Data.",
      features: ["Python & R", "Machine Learning", "Hadoop & Spark", "Visualisation de données"],
      duration: "5 mois",
      level: "Intermédiaire à Avancé"
    },
    {
      icon: Brain,
      title: "Intelligence Artificielle",
      description: "Formations en IA, Machine Learning et Deep Learning.",
      features: ["Python & TensorFlow", "Réseaux de neurones", "Computer Vision", "NLP"],
      duration: "6 mois",
      level: "Avancé"
    },
    {
      icon: Shield,
      title: "Cybersécurité",
      description: "Protégez les systèmes et données avec nos formations en sécurité informatique.",
      features: ["Ethical Hacking", "Sécurité réseau", "Cryptographie", "Audit de sécurité"],
      duration: "4 mois",
      level: "Intermédiaire"
    },
    {
      icon: Globe,
      title: "Marketing Digital",
      description: "Stratégies marketing digitales pour booster votre présence en ligne.",
      features: ["SEO & SEA", "Réseaux sociaux", "Email marketing", "Analytics"],
      duration: "3 mois",
      level: "Débutant"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gta-red to-gta-red-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Nos Services</h1>
            <p className="text-xl lg:text-2xl text-white/90">
              Des formations complètes pour maîtriser les technologies de demain
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gta-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-gta-red" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm font-medium text-foreground">Durée</p>
                        <p className="text-sm text-muted-foreground">{service.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Niveau</p>
                        <p className="text-sm text-muted-foreground">{service.level}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm font-medium text-foreground mb-2">Compétences acquises:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-gta-red rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="bg-gta-red hover:bg-gta-red-light text-white">
                      En savoir plus
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
