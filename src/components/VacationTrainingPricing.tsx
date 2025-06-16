
import React from 'react';
import { CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const VacationTrainingPricing = () => {
  const groups = [
    { name: "Groupe 1", price: "25 000 FCFA", age: "7 à 13 ans", time: "8h - 11h (+ 2h de pratiques)" },
    { name: "Groupe 2", price: "30 000 FCFA", age: "14 à 18 ans", time: "11h - 14h" },
    { name: "Groupe 3", price: "35 000 FCFA", age: "19 ans et plus", time: "16h - 19h" },
    { name: "Groupe 4", price: "45 000 FCFA", age: "19 ans et plus", time: "08h - 14h (Formation accélérée)" }
  ];

  return (
    <div className="animate-fade-in">
      <Card className="border-0 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg">
          <CardTitle className="text-2xl flex items-center space-x-3">
            <CreditCard className="w-8 h-8" />
            <span>PRIX ET MODALITÉS</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="bg-purple-50 dark:bg-purple-900/40 border border-purple-200 dark:border-purple-800/60 rounded-lg p-4">
              <h4 className="font-bold text-purple-800 dark:text-purple-300 mb-3">Modalités d'inscription</h4>
              <p className="text-purple-700 dark:text-purple-400 mb-2">
                Vous pouvez vous inscrire en ligne 24h/24h ou dans nos bureaux suivant les modalités ci-après :
              </p>
              <div className="bg-orange-100 dark:bg-orange-900/40 border border-orange-300 dark:border-orange-800/60 rounded p-3 mb-3">
                <p className="font-bold text-orange-800 dark:text-orange-300">
                  Frais d'inscription/réservation (pour tous les groupes) : 5 000 FCFA
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-foreground">Frais de formation par groupe</h4>
              {groups.map((group, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <div>
                    <span className="font-medium">{group.name}</span>
                    <span className="text-sm text-muted-foreground ml-2">({group.age})</span>
                  </div>
                  <Badge variant="outline" className="bg-gta-red text-white border-gta-red">
                    {group.price}
                  </Badge>
                </div>
              ))}
            </div>

            <div className="bg-red-50 dark:bg-red-900/40 border border-red-200 dark:border-red-800/60 rounded-lg p-4">
              <p className="text-red-800 dark:text-red-300 font-medium">Nombre de place limitée</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VacationTrainingPricing;
