import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Award, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface TrainingHeroProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  startDate: string;
  price: string;
  isRegistrationPage?: boolean;
  programId?: string;
}

const TrainingHero: React.FC<TrainingHeroProps> = ({
  title,
  description,
  duration,
  level,
  startDate,
  price,
  isRegistrationPage = false,
  programId
}) => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-background overflow-hidden">
      <div className="container relative mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link to="/training" className="hover:text-gta-red transition-colors">Formations</Link>
          <span>/</span>
          <Link to="/training/certified" className="hover:text-gta-red transition-colors">Certifiantes</Link>
          {programId && (
            <>
              <span>/</span>
              <Link to={`/training/certified/${programId}`} className="hover:text-gta-red transition-colors line-clamp-1">
                {title}
              </Link>
            </>
          )}
          {isRegistrationPage && (
            <>
              <span>/</span>
              <span className="text-foreground font-medium">Inscription</span>
            </>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                {title}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-gta-red" />
                <div>
                  <p className="text-sm text-muted-foreground">Durée</p>
                  <p className="font-medium">{duration}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-gta-red" />
                <div>
                  <p className="text-sm text-muted-foreground">Niveau</p>
                  <p className="font-medium">{level}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-gta-red" />
                <div>
                  <p className="text-sm text-muted-foreground">Début</p>
                  <p className="font-medium">{startDate}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-gta-red" />
                <div>
                  <p className="text-sm text-muted-foreground">Prix</p>
                  <p className="font-medium">{price}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {!isRegistrationPage && programId && (
                <Button asChild className="bg-gta-red hover:bg-gta-red/90">
                  <Link to={`/training/certified/${programId}/registration`}>
                    S'inscrire maintenant
                  </Link>
                </Button>
              )}
              <Button variant="outline" asChild>
                <Link to="/contact">
                  Contacter un conseiller
                </Link>
              </Button>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <div className="aspect-video bg-muted rounded-lg mb-6 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gta-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-gta-red" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Formation Certifiante</h3>
                <p className="text-muted-foreground text-sm">
                  Obtenez une certification reconnue par les professionnels du secteur
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm">Attestation de formation</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm">Support de cours complet</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm">Accompagnement personnalisé</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingHero;
