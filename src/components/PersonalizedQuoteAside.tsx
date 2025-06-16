
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle, CheckCircle, Clock, Star, Users, Award } from 'lucide-react';

const PersonalizedQuoteAside = () => {
  return (
    <div className="space-y-6">
      {/* Contact rapide */}
      <Card className="shadow-lg border-l-4 border-l-gta-red dark:border-l-gta-red-light bg-card dark:bg-card/80">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-bold text-foreground flex items-center">
            <Phone className="w-5 h-5 text-gta-red mr-2" />
            Besoin d'aide ?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Notre équipe est disponible pour vous accompagner dans votre demande.
          </p>
          
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start border-gta-red text-gta-red hover:bg-gta-red hover:text-white dark:border-gta-red-light dark:text-gta-red-light dark:hover:bg-gta-red-light dark:hover:text-white transition-all duration-200">
              <Phone className="w-4 h-4 mr-2" />
              +33 1 23 45 67 89
            </Button>
            
            <Button variant="outline" className="w-full justify-start border-gta-red text-gta-red hover:bg-gta-red hover:text-white dark:border-gta-red-light dark:text-gta-red-light dark:hover:bg-gta-red-light dark:hover:text-white transition-all duration-200">
              <Mail className="w-4 h-4 mr-2" />
              devis@academy.gta-it.com
            </Button>
            
            <Button variant="outline" className="w-full justify-start border-gta-red text-gta-red hover:bg-gta-red hover:text-white dark:border-gta-red-light dark:text-gta-red-light dark:hover:bg-gta-red-light dark:hover:text-white transition-all duration-200">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat en ligne
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Avantages formation personnalisée */}
      <Card className="shadow-lg bg-card dark:bg-card/80">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-bold text-foreground flex items-center">
            <Star className="w-5 h-5 text-gta-red mr-2" />
            Pourquoi choisir du sur mesure ?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-foreground">Contenu 100% adapté</h4>
                <p className="text-xs text-muted-foreground">Formation créée selon vos besoins exacts</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-foreground">Rythme flexible</h4>
                <p className="text-xs text-muted-foreground">Horaires selon vos contraintes</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-foreground">Expert dédié</h4>
                <p className="text-xs text-muted-foreground">Formateur expert dans votre domaine</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-foreground">Suivi personnalisé</h4>
                <p className="text-xs text-muted-foreground">Accompagnement tout au long du parcours</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Processus */}
      <Card className="shadow-lg bg-card dark:bg-card/80">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-bold text-foreground flex items-center">
            <Clock className="w-5 h-5 text-gta-red mr-2" />
            Notre processus
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-gta-red dark:bg-gta-red-light text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
              <div>
                <h4 className="font-semibold text-sm text-foreground">Analyse des besoins</h4>
                <p className="text-xs text-muted-foreground">Étude approfondie de vos objectifs</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-gta-red dark:bg-gta-red-light text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
              <div>
                <h4 className="font-semibold text-sm text-foreground">Proposition sur mesure</h4>
                <p className="text-xs text-muted-foreground">Devis détaillé sous 48h</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-gta-red dark:bg-gta-red-light text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
              <div>
                <h4 className="font-semibold text-sm text-foreground">Planification</h4>
                <p className="text-xs text-muted-foreground">Organisation selon vos disponibilités</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-gta-red dark:bg-gta-red-light text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
              <div>
                <h4 className="font-semibold text-sm text-foreground">Formation</h4>
                <p className="text-xs text-muted-foreground">Accompagnement personnalisé</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistiques */}
      <Card className="shadow-lg bg-gradient-to-br from-gta-red/5 via-gta-red/3 to-transparent dark:from-gta-red/10 dark:via-gta-red/5 dark:to-transparent border-gta-red/20 dark:border-gta-red-light/30">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h3 className="font-bold text-foreground">Nos résultats</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-gta-red dark:text-gta-red-light mr-1" />
                  <span className="text-2xl font-bold text-gta-red dark:text-gta-red-light">500+</span>
                </div>
                <p className="text-xs text-muted-foreground">Formations personnalisées</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 text-gta-red dark:text-gta-red-light mr-1" />
                  <span className="text-2xl font-bold text-gta-red dark:text-gta-red-light">98%</span>
                </div>
                <p className="text-xs text-muted-foreground">Taux de satisfaction</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonalizedQuoteAside;
