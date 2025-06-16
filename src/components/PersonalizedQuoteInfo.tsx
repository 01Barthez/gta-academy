
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Clock, Award, Users, Target, Lightbulb } from 'lucide-react';

const PersonalizedQuoteInfo = () => {
  return (
    <div className="space-y-8">
      {/* Section principale */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Une formation <span className="text-gta-red dark:text-gta-red-light">vraiment</span> sur mesure
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          Contrairement aux formations standards, nous créons entièrement votre programme de formation 
          en partant de vos besoins réels et de vos objectifs professionnels.
        </p>
      </div>

      {/* Grille d'avantages */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-card dark:bg-card/80 border-border/50 dark:border-border hover:border-gta-red/30 dark:hover:border-gta-red-light/30">
          <CardHeader className="text-center pb-4">
            <div className="w-12 h-12 bg-gta-red/10 dark:bg-gta-red-light/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="w-6 h-6 text-gta-red dark:text-gta-red-light" />
            </div>
            <CardTitle className="text-lg text-foreground">Objectifs Précis</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground text-sm">
              Nous analysons en détail vos besoins et créons un programme qui répond 
              exactement à vos objectifs professionnels.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-card dark:bg-card/80 border-border/50 dark:border-border hover:border-gta-red/30 dark:hover:border-gta-red-light/30">
          <CardHeader className="text-center pb-4">
            <div className="w-12 h-12 bg-gta-red/10 dark:bg-gta-red-light/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-gta-red dark:text-gta-red-light" />
            </div>
            <CardTitle className="text-lg text-foreground">Formateur Expert</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground text-sm">
              Un expert spécialisé dans votre domaine vous accompagne personnellement 
              tout au long de votre parcours.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-card dark:bg-card/80 border-border/50 dark:border-border hover:border-gta-red/30 dark:hover:border-gta-red-light/30">
          <CardHeader className="text-center pb-4">
            <div className="w-12 h-12 bg-gta-red/10 dark:bg-gta-red-light/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-gta-red dark:text-gta-red-light" />
            </div>
            <CardTitle className="text-lg text-foreground">Flexibilité Totale</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground text-sm">
              Horaires, rythme, format : tout s'adapte à vos contraintes personnelles 
              et professionnelles.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-card dark:bg-card/80 border-border/50 dark:border-border hover:border-gta-red/30 dark:hover:border-gta-red-light/30">
          <CardHeader className="text-center pb-4">
            <div className="w-12 h-12 bg-gta-red/10 dark:bg-gta-red-light/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Lightbulb className="w-6 h-6 text-gta-red dark:text-gta-red-light" />
            </div>
            <CardTitle className="text-lg text-foreground">Méthode Adaptée</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground text-sm">
              Nous adaptons notre pédagogie à votre style d'apprentissage pour 
              maximiser votre progression.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-card dark:bg-card/80 border-border/50 dark:border-border hover:border-gta-red/30 dark:hover:border-gta-red-light/30">
          <CardHeader className="text-center pb-4">
            <div className="w-12 h-12 bg-gta-red/10 dark:bg-gta-red-light/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="w-6 h-6 text-gta-red dark:text-gta-red-light" />
            </div>
            <CardTitle className="text-lg text-foreground">Garantie Qualité</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground text-sm">
              Suivi qualité permanent et ajustements en cours de formation pour 
              garantir votre satisfaction.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-card dark:bg-card/80 border-border/50 dark:border-border hover:border-gta-red/30 dark:hover:border-gta-red-light/30">
          <CardHeader className="text-center pb-4">
            <div className="w-12 h-12 bg-gta-red/10 dark:bg-gta-red-light/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-gta-red dark:text-gta-red-light" />
            </div>
            <CardTitle className="text-lg text-foreground">Certification</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground text-sm">
              Obtenez une certification reconnue qui valorise vos nouvelles 
              compétences sur le marché du travail.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Section FAQ rapide */}
      <Card className="shadow-lg bg-card dark:bg-card/80 border-border/50 dark:border-border">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-foreground text-center">
            Questions fréquentes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground mb-2">Combien de temps pour recevoir un devis ?</h4>
              <p className="text-muted-foreground text-sm">
                Nous vous envoyons une proposition détaillée sous 48h maximum après réception de votre demande.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground mb-2">Peut-on modifier le programme en cours ?</h4>
              <p className="text-muted-foreground text-sm">
                Oui, le programme peut être ajusté selon vos besoins et votre progression.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground mb-2">Quels formats sont disponibles ?</h4>
              <p className="text-muted-foreground text-sm">
                Présentiel, distanciel ou hybride. Nous nous adaptons à vos préférences et contraintes.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground mb-2">Y a-t-il un suivi post-formation ?</h4>
              <p className="text-muted-foreground text-sm">
                Oui, nous proposons un suivi de 3 mois pour consolider vos acquis et répondre à vos questions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonalizedQuoteInfo;
