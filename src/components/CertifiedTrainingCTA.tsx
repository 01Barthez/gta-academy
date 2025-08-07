import React from 'react';
import { Calendar, BookOpen, Users, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CertifiedTrainingCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-gta-red bg-gta-red/10 rounded-full">
            Parcours de formation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-gta-red bg-clip-text text-transparent">
            Prêt à transformer votre avenir professionnel ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choisissez la voie qui correspond le mieux à vos objectifs et démarrez votre parcours d'excellence dès aujourd'hui.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Option 1: Personalized Training */}
          <div className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-gta-red/30 hover:bg-gradient-to-br hover:from-card hover:to-card/80 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gta-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gta-red/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-gta-red/20 transition-colors duration-300">
                <BookOpen className="w-6 h-6 text-gta-red" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center group-hover:text-gta-red transition-colors duration-300">Formation Sur Mesure</h3>
              <p className="text-muted-foreground mb-6 text-center">
                Une formation adaptée à vos besoins spécifiques et à votre rythme.
              </p>
              <div className="flex justify-center">
                <Link to="/training/personalized" className="w-full">
                  <Button className="w-full group-hover:bg-gta-red group-hover:text-white transition-all duration-300" variant="outline">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Option 2: Explore Other Trainings */}
          <div className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-gta-red/30 hover:bg-gradient-to-br hover:from-card hover:to-card/80 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gta-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gta-red/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-gta-red/20 transition-colors duration-300">
                <Users className="w-6 h-6 text-gta-red" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center group-hover:text-gta-red transition-colors duration-300">Découvrir Nos Formations</h3>
              <p className="text-muted-foreground mb-6 text-center">
                Explorez notre catalogue complet de formations certifiantes.
              </p>
              <div className="flex justify-center">
                <Link to="/training" className="w-full">
                  <Button className="w-full group-hover:bg-gta-red group-hover:text-white transition-all duration-300" variant="outline">
                    Voir les formations
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Option 3: Calendar */}
          <div className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-gta-red/30 hover:bg-gradient-to-br hover:from-card hover:to-card/80 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gta-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gta-red/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-gta-red/20 transition-colors duration-300">
                <Calendar className="w-6 h-6 text-gta-red" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center group-hover:text-gta-red transition-colors duration-300">Calendrier des Formations</h3>
              <p className="text-muted-foreground mb-6 text-center">
                Consultez les prochaines sessions de formation programmées.
              </p>
              <div className="flex justify-center">
                <Link to="/training#calendar" className="w-full">
                  <Button className="w-full group-hover:bg-gta-red group-hover:text-white transition-all duration-300" variant="outline">
                    Voir le calendrier
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Option 4: Contact */}
          <div className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-gta-red/30 hover:bg-gradient-to-br hover:from-card hover:to-card/80 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gta-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gta-red/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-gta-red/20 transition-colors duration-300">
                <MessageSquare className="w-6 h-6 text-gta-red" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center group-hover:text-gta-red transition-colors duration-300">Besoin d'Aide ?</h3>
              <p className="text-muted-foreground mb-6 text-center">
                Notre équipe est là pour vous guider dans votre choix de formation.
              </p>
              <div className="flex justify-center">
                <Link to="/contact" className="w-full">
                  <Button className="w-full bg-gta-red hover:bg-gta-red/90 transition-colors duration-300">
                    Nous contacter
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-border/50"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-4 text-muted-foreground">
              Vous avez des questions ?
            </span>
          </div>
          <p className="mt-6 text-muted-foreground mb-8 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour vous conseiller et vous accompagner dans votre projet de formation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/faq" className="group">
              <Button 
                variant="outline" 
                className="group-hover:bg-gta-red/5 group-hover:border-gta-red/30 group-hover:text-gta-red transition-all duration-300"
              >
                Consulter la FAQ
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/contact" className="group">
              <Button 
                className="bg-gta-red hover:bg-gta-red/90 shadow-lg shadow-gta-red/20 hover:shadow-gta-red/30 transition-all duration-300 group-hover:scale-105"
              >
                Parler à un conseiller
                <MessageSquare className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertifiedTrainingCTA;
