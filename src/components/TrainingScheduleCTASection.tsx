import React from 'react';
import { Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TrainingScheduleCTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-1 mb-4 text-sm font-medium text-gta-red bg-gta-red/10 rounded-full">
            Agenda des Formations
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-gta-red bg-clip-text text-transparent">
            Découvrez nos prochaines formations ponctuelles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Consultez notre agenda des formations et réservez votre place dès maintenant
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {[
              {
                icon: <Calendar className="w-10 h-10 p-2 mx-auto mb-4 text-white bg-gta-red rounded-full" />,
                title: "Planning flexible",
                description: "Formations en journée, soirée ou week-end pour s'adapter à votre emploi du temps"
              },
              {
                icon: <Clock className="w-10 h-10 p-2 mx-auto mb-4 text-white bg-gta-red rounded-full" />,
                title: "Durées variables",
                description: "De quelques heures à plusieurs jours selon vos besoins"
              },
              {
                icon: <CheckCircle className="w-10 h-10 p-2 mx-auto mb-4 text-white bg-gta-red rounded-full" />,
                title: "Certification incluse",
                description: "Validation des compétences acquises avec attestation de formation"
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
              <Link to="/training#calendar" className="flex items-center">
                Voir l'agenda des formations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gta-red text-gta-red hover:bg-gta-red/5 hover:border-gta-red/80 transition-all">
              <Link to="/contact" className="flex items-center">
                Être contacté par un conseiller
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingScheduleCTASection;
