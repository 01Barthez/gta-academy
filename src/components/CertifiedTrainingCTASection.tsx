import React from 'react';
import { ArrowRight, Calendar, Clock, Award, Briefcase, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CertifiedTrainingCTASection = () => {
  // Calcul des jours restants avant le 6 octobre
  const today = new Date();
  const rentree = new Date(today.getFullYear(), 9, 6);
  const diffTime = rentree.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
      <div className="container mx-auto px-4 text-center relative">
        <div className="inline-flex items-center px-4 py-1 mb-4 text-sm font-medium text-white bg-gta-red rounded-full">
          <Calendar className="w-4 h-4 mr-2" />
          Rentrée le 6 octobre 2024
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-foreground to-gta-red bg-clip-text text-transparent">
            Inscriptions ouvertes
          </span>
          <br />
          <span className="text-2xl md:text-3xl text-foreground/90">
            pour la rentrée d'octobre !
          </span>
        </h2>
        <div className="inline-flex items-center px-6 py-2 mb-8 text-lg font-semibold text-white bg-gta-red/90 rounded-full shadow-lg">
          <Clock className="w-5 h-5 mr-2" />
          Plus que {diffDays} jours avant le début des cours
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {[
            {
              icon: <Award className="w-10 h-10 p-2 mx-auto mb-4 text-white bg-gta-red rounded-full" />,
              title: "Certification reconnue",
              description: "Diplômes et certifications professionnelles"
            },
            {
              icon: <Briefcase className="w-10 h-10 p-2 mx-auto mb-4 text-white bg-gta-red rounded-full" />,
              title: "Débouchés immédiats",
              description: "Secteur en forte croissance"
            },
            {
              icon: <Users className="w-10 h-10 p-2 mx-auto mb-4 text-white bg-gta-red rounded-full" />,
              title: "Financement possible",
              description: "CPF, Pôle Emploi, OPCO"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-card p-6 rounded-xl border border-border hover:border-gta-red/30 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-gta-red hover:bg-gta-red/90 text-white hover:shadow-lg hover:scale-105 transition-all text-base">
            <Link to="/training/certified" className="flex items-center">
              Je m'inscris maintenant
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-gta-red text-gta-red hover:bg-gta-red/5 hover:border-gta-red/80 transition-all">
            <Link to="/contact" className="flex items-center">
              Parler à un conseiller
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CertifiedTrainingCTASection;
