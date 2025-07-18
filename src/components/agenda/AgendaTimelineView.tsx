
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Users, ArrowRight } from 'lucide-react';

interface Session {
  id: string;
  title: string;
  type: string;
  status: string;
  startTime: string;
  endTime: string;
  date: Date;
  location: string;
  instructor: string;
  participants: number;
  maxParticipants: number;
  price: number;
  level: string;
  description: string;
}

interface AgendaTimelineViewProps {
  sessions: Session[];
}

const AgendaTimelineView = ({ sessions }: AgendaTimelineViewProps) => {
  // Grouper les sessions par date
  const sessionsByDate = sessions.reduce((acc, session) => {
    const dateKey = session.date.toDateString();
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(session);
    return acc;
  }, {} as Record<string, Session[]>);

  // Trier les sessions par heure
  Object.keys(sessionsByDate).forEach(dateKey => {
    sessionsByDate[dateKey].sort((a, b) => a.startTime.localeCompare(b.startTime));
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'en-cours':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'a-venir':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'places-dispo':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'en-cours':
        return 'En cours';
      case 'a-venir':
        return 'À venir';
      case 'places-dispo':
        return 'Places disponibles';
      default:
        return status;
    }
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isPast = (date: Date) => {
    const today = new Date();
    return date < today && !isToday(date);
  };

  return (
    <div className="space-y-8">
      {Object.entries(sessionsByDate).map(([dateKey, dateSessions]) => {
        const date = new Date(dateKey);
        const isCurrentDay = isToday(date);
        const isPastDay = isPast(date);
        
        return (
          <div key={dateKey} className="relative">
            {/* Ligne de temps verticale */}
            <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-border"></div>
            
            {/* En-tête de date */}
            <div className="flex items-center space-x-4 mb-6">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold ${
                isCurrentDay 
                  ? 'bg-gta-red' 
                  : isPastDay 
                    ? 'bg-muted-foreground' 
                    : 'bg-blue-500'
              }`}>
                {date.getDate()}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {date.toLocaleDateString('fr-FR', { 
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </h3>
                <p className="text-muted-foreground">
                  {dateSessions.length} formation{dateSessions.length > 1 ? 's' : ''} programmée{dateSessions.length > 1 ? 's' : ''}
                  {isCurrentDay && ' • Aujourd\'hui'}
                </p>
              </div>
            </div>
            
            {/* Sessions de la journée */}
            <div className="ml-24 space-y-4">
              {dateSessions.map((session, index) => (
                <div key={session.id} className="relative">
                  {/* Connecteur vers la ligne de temps */}
                  <div className="absolute -left-16 top-6 w-8 h-0.5 bg-border"></div>
                  <div className="absolute -left-20 top-5 w-2 h-2 bg-gta-red rounded-full"></div>
                  
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-3">
                            <div className="text-lg font-bold text-gta-red bg-gta-red/10 px-3 py-1 rounded-full">
                              {session.startTime}
                            </div>
                            <Badge className={getStatusColor(session.status)}>
                              {getStatusLabel(session.status)}
                            </Badge>
                            <Badge variant="outline">{session.type}</Badge>
                          </div>
                          
                          <h4 className="text-xl font-semibold text-foreground mb-2">
                            {session.title}
                          </h4>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4" />
                              <span>{session.startTime} - {session.endTime}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4" />
                              <span>{session.location}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="w-4 h-4" />
                              <span>{session.participants}/{session.maxParticipants} participants</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Button variant="outline" size="sm">
                            Voir détails
                          </Button>
                          <Button size="sm" className="bg-gta-red hover:bg-gta-red-light">
                            S'inscrire
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        );
      })}
      
      {Object.keys(sessionsByDate).length === 0 && (
        <Card className="p-12 text-center">
          <Clock className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
          <p className="text-lg text-muted-foreground">Aucune formation programmée</p>
          <p className="text-sm text-muted-foreground">
            Consultez régulièrement notre agenda pour les nouvelles sessions
          </p>
        </Card>
      )}
    </div>
  );
};

export default AgendaTimelineView;
