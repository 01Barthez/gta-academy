
import React from 'react';
import { Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const VacationTrainingSchedule = () => {
  const groups = [
    { name: "Groupe 1", price: "25 000 FCFA", age: "7 à 13 ans", time: "8h - 11h (+ 2h de pratiques)" },
    { name: "Groupe 2", price: "30 000 FCFA", age: "14 à 18 ans", time: "11h - 14h" },
    { name: "Groupe 3", price: "35 000 FCFA", age: "19 ans et plus", time: "16h - 19h" },
    { name: "Groupe 4", price: "45 000 FCFA", age: "19 ans et plus", time: "08h - 14h (Formation accélérée)" }
  ];

  return (
    <div className="animate-fade-in">
      <Card className="border-0 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
          <CardTitle className="text-2xl flex items-center space-x-3">
            <Clock className="w-8 h-8" />
            <span>HORAIRE DE FORMATIONS / GROUPE</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {groups.map((group, index) => (
              <div key={index} className="p-4 bg-green-50 dark:bg-green-900/40 rounded-lg border border-green-200 dark:border-green-800/60">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-green-800 dark:text-green-300">{group.name}</h4>
                  <Badge className="bg-green-600 text-white">{group.age}</Badge>
                </div>
                <p className="text-green-700 dark:text-green-400 font-medium">{group.time}</p>
                {group.name === "Groupe 4" && (
                  <p className="text-sm text-green-600 dark:text-green-500 mt-1">Uniquement les samedis</p>
                )}
              </div>
            ))}
            <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800/60 rounded-lg p-4 mt-4">
              <p className="text-blue-800 dark:text-blue-300 font-medium">Du lundi à Vendredi</p>
              <p className="text-sm text-blue-600 dark:text-blue-500 mt-1">
                Groupe 4 : 08h - 14h 19 ans et plus<br />
                Uniquement les samedis (formation accélérée)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VacationTrainingSchedule;
