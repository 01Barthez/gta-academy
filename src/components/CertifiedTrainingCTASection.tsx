import React from 'react';
import { ArrowRight, Award, Briefcase, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CertifiedTrainingCTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/10">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block px-4 py-1 mb-4 text-sm font-medium text-gta-red bg-gta-red/10 rounded-full">
          Formations Certifiantes
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-gta-red bg-clip-text text-transparent">
          Formez-vous aux métiers du numérique
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Développez votre carrière avec des compétences recherchées et une certification reconnue
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {[
            {
              icon: <Award className="w-10 h-10 p-2 mx-auto mb-4 text-white bg-gta-red rounded-full" />,
              title: "Certification",
              description: "Reconnue par les professionnels"
            },
            {
              icon: <Briefcase className="w-10 h-10 p-2 mx-auto mb-4 text-white bg-gta-red rounded-full" />,
              title: "Débouchés",
              description: "Métiers porteurs du numérique"
            },
            {
              icon: <Users className="w-10 h-10 p-2 mx-auto mb-4 text-white bg-gta-red rounded-full" />,
              title: "Accompagnement",
              description: "Personnalisé et professionnel"
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
          <Button asChild size="lg" className="bg-gta-red hover:bg-gta-red/90 text-white hover:shadow-lg hover:scale-105 transition-all">
            <Link to="/training/certified" className="flex items-center">
              Découvrir les formations
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
