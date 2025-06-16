
import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const VacationTrainingSessions = () => {
  const sessions = [
    {
      session: "1ère Session",
      dates: "30 Juin au 31 Juillet 2025",
      deadline: "27/06/2025"
    },
    {
      session: "2ème Session", 
      dates: "04 Août au 04 Septembre 2025",
      deadline: "01/08/2025"
    }
  ];

  return (
    <div className="animate-fade-in">
      <Card className="h-full border-0 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
          <CardTitle className="text-2xl flex items-center space-x-3">
            <Calendar className="w-8 h-8" />
            <span>PÉRIODES DE FORMATION</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            {sessions.map((session, index) => (
              <div key={index} className="p-4 border-2 border-blue-200 dark:border-blue-800 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
                <h4 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">{session.session}</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-500" />
                    <span className="font-medium">{session.dates}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 dark:text-blue-500" />
                    <span>Date limite d'inscription : <strong>{session.deadline}</strong></span>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="bg-yellow-50 dark:bg-yellow-900/40 border border-yellow-200 dark:border-yellow-800/60 rounded-lg p-4">
              <p className="text-sm text-yellow-800 dark:text-yellow-300">
                <strong>N.B :</strong> Tous paiements après la date limite entraîne une pénalité de 
                <strong className="text-red-600 dark:text-red-400"> 5 000 FCFA</strong>. Vous pouvez vous inscrire pour réserver votre place 
                et payer les frais de formation présentée ci-dessous au plus tard aux dates limites suivant votre session.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VacationTrainingSessions;
