
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users, Calendar, Trophy } from 'lucide-react';

const AgendaStats = () => {
  const stats = [
    {
      icon: Clock,
      label: "Formations en cours",
      value: "12",
      color: "text-green-600 dark:text-green-400"
    },
    {
      icon: Calendar,
      label: "Sessions cette semaine",
      value: "25",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Users,
      label: "Places disponibles",
      value: "148",
      color: "text-gta-red dark:text-gta-red-light"
    },
    {
      icon: Trophy,
      label: "Certifications délivrées",
      value: "892",
      color: "text-orange-600 dark:text-orange-400"
    }
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgendaStats;
