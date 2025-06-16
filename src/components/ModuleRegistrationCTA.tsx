
import React from 'react';
import { Calendar, Clock, Euro, Users, Phone, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

interface ModuleRegistrationCTAProps {
  moduleNumber: number;
  moduleTitle: string;
}

const ModuleRegistrationCTA: React.FC<ModuleRegistrationCTAProps> = ({ moduleNumber, moduleTitle }) => {
  const navigate = useNavigate();

  const sessions = [
    {
      name: "1ère Session",
      period: "30 Juin au 31 Juillet 2025",
      deadline: "27/06/2025"
    },
    {
      name: "2ème Session", 
      period: "04 Août au 04 Septembre 2025",
      deadline: "01/08/2025"
    }
  ];

  const groups = [
    {
      name: "Groupe 1",
      age: "7 à 13 ans",
      price: "25 000 FCFA",
      schedule: "8h - 11h (+ 2h de pratiques)",
      days: "Lundi à Vendredi"
    },
    {
      name: "Groupe 2", 
      age: "14 à 18 ans",
      price: "30 000 FCFA",
      schedule: "11h - 14h",
      days: "Lundi à Vendredi"
    },
    {
      name: "Groupe 3",
      age: "19 ans et plus",
      price: "35 000 FCFA", 
      schedule: "16h - 19h",
      days: "Lundi à Vendredi"
    },
    {
      name: "Groupe 4",
      age: "19 ans et plus",
      price: "45 000 FCFA",
      schedule: "08h - 14h (Formation accélérée)",
      days: "Uniquement les samedis"
    }
  ];

  const handleRegistration = () => {
    navigate(`/registration?module=${moduleNumber}`);
  };

  const handleContact = () => {
    navigate('/contact');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gta-red via-gta-red-dark to-red-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm">
              Inscriptions Ouvertes
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 drop-shadow-lg">
              Rejoignez le {moduleTitle}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Choisissez votre session et réservez dès maintenant votre place pour cette formation exceptionnelle
            </p>
          </div>

          {/* Sessions */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {sessions.map((session, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm text-white">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <Calendar className="w-6 h-6" />
                      {session.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-lg font-semibold">{session.period}</p>
                    </div>
                    <div className="bg-orange-500/20 border border-orange-400/30 rounded-lg p-4">
                      <p className="text-sm">
                        <strong>Date limite d'inscription :</strong> {session.deadline}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Important Notice */}
          <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-6 mb-16 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-yellow-900 text-sm font-bold">!</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Note Importante</h3>
                <p className="text-white/90">
                  <strong>N.B :</strong> Tous paiements après la date limite entraîne une pénalité de 5 000 FCFA. 
                  Vous pouvez vous inscrire pour réserver votre place et payer les frais de formation présentée ci-dessous 
                  au plus tard aux dates limites suivant votre session.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Tarifs et Plannings</h3>
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4 inline-block">
                <p className="text-lg">
                  <Euro className="w-5 h-5 inline mr-2" />
                  <strong>Frais d'inscription/réservation :</strong> 5 000 FCFA (pour tous les groupes)
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {groups.map((group, index) => (
                <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm text-white hover:bg-white/15 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <Users className="w-6 h-6" />
                      {group.name}
                    </CardTitle>
                    <CardDescription className="text-white/80 text-lg">
                      {group.age}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gta-red/20 border border-gta-red/30 rounded-lg p-4">
                        <p className="text-lg font-bold">
                          <Euro className="w-5 h-5 inline mr-2" />
                          Frais de formation : {group.price}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5" />
                          <span className="font-semibold">Horaires :</span> {group.schedule}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5" />
                          <span className="font-semibold">Jours :</span> {group.days}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                onClick={handleRegistration}
                className="bg-white text-gta-red hover:bg-white/90 text-lg px-8 py-4 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <UserPlus className="w-6 h-6 mr-2" />
                S'inscrire Maintenant
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleContact}
                className="border-2 border-white text-white hover:bg-white hover:text-gta-red text-lg px-8 py-4 font-bold transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-6 h-6 mr-2" />
                Nous Contacter
              </Button>
            </div>
            <p className="text-white/80 mt-6 text-lg">
              Des questions ? N'hésitez pas à nous contacter pour plus d'informations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuleRegistrationCTA;
