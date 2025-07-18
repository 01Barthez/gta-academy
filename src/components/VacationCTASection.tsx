import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Clock, Star, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const VacationCTASection = () => {
  const modules = [
    "Initiation à l'ordinateur & Scratch",
    "Intelligence Artificielle & Word",
    "Utilisation d'Excel",
    "Canva & PowerPoint"
  ];

  const pricing = [
    { group: "7-13 ans", price: "25 000 Fcfa" },
    { group: "14-18 ans", price: "30 000 Fcfa" },
    { group: "19 ans ++", price: "35 000 Fcfa" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gta-red/5 via-white to-gta-red/10 dark:from-gray-900 dark:via-gray-800 dark:to-gta-red/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gta-red/10 text-gta-red border-gta-red/20 hover:bg-gta-red/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Prochaine Session
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              <span className="bg-gradient-to-r from-gta-red to-gta-red-light bg-clip-text text-transparent">
                Formation Vacances
              </span>
              <br />
              <span className="text-foreground">04 Août - 04 Septembre 2025</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transformez vos vacances en opportunité d'apprentissage ! 
              Acquérez des compétences numériques essentielles avec nos modules pratiques.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Content */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-foreground flex items-center">
                  <Star className="w-5 h-5 mr-2 text-gta-red" />
                  Modules de Formation
                </h3>
                <div className="space-y-3">
                  {modules.map((module, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-foreground">{module}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-700">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-gta-red" />
                  <div className="font-bold text-lg">2-3h</div>
                  <div className="text-sm text-muted-foreground">Par module</div>
                </div>
                <div className="text-center bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-700">
                  <Users className="w-8 h-8 mx-auto mb-2 text-gta-red" />
                  <div className="font-bold text-lg">15 max</div>
                  <div className="text-sm text-muted-foreground">Par groupe</div>
                </div>
                <div className="text-center bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-700">
                  <Calendar className="w-8 h-8 mx-auto mb-2 text-gta-red" />
                  <div className="font-bold text-lg">1 mois</div>
                  <div className="text-sm text-muted-foreground">Durée totale</div>
                </div>
              </div>
            </div>

            {/* Right side - Pricing & CTA */}
            <div className="space-y-6">
              <Card className="border-2 border-gta-red/20 bg-gradient-to-br from-gta-red/5 to-gta-red/10 dark:from-gta-red/10 dark:to-gta-red/20">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">Tarifs par Groupe</h3>
                    <p className="text-muted-foreground">Inscription : 5 000 Fcfa</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    {pricing.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        <span className="font-medium text-foreground">Groupe {index + 1} ({item.group})</span>
                        <span className="font-bold text-gta-red text-lg">{item.price}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gta-red/10 dark:bg-gta-red/20 rounded-lg p-4 text-center">
                    <p className="text-sm text-muted-foreground mb-2">Formation intensive</p>
                    <p className="font-semibold text-foreground">30 Juin au 31 Juillet 2025</p>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-gta-red hover:bg-gta-red-light text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.location.href = '/registration'}
                >
                  S'inscrire maintenant
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full border-2 border-gta-red text-gta-red hover:bg-gta-red hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                  onClick={() => window.location.href = '/training/holidays'}
                >
                  Découvrir les modules
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground italic">
              "Profitez des vacances pour acquérir de nouvelles compétences numériques essentielles."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VacationCTASection; 