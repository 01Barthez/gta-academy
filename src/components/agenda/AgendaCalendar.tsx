
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs';
import AgendaSessionCard from './AgendaSessionCard';
import AgendaTimelineView from './AgendaTimelineView';
import {
  Calendar as CalendarIcon,
  List,
  Clock,
  Grid3X3
} from 'lucide-react';
import { mockAgenda } from '@/mock/agenda.mock';
import EnhancedCalendarComponent from './AgendaSessionCardPersonnalized';

const AgendaCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [view, setView] = useState<'calendar' | 'list' | 'timeline'>('list');
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    setSessions(mockAgenda);
  }, []);

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

  return (
    <div className="space-y-6">
      {/* En-tête avec navigation des vues */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <CardTitle className="text-2xl font-bold text-foreground">
              Planning des formations
            </CardTitle>

            <Tabs value={view} onValueChange={(v) => setView(v as typeof view)} className="w-auto">
              <TabsList>
                <TabsTrigger value="list" className="flex items-center space-x-2">
                  <List className="w-4 h-4" />
                  <span>Liste</span>
                </TabsTrigger>
                <TabsTrigger value="calendar" className="flex items-center space-x-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Calendrier</span>
                </TabsTrigger>
                <TabsTrigger value="timeline" className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Timeline</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
      </Card>

      {/* Contenu selon la vue sélectionnée */}
      <Tabs value={view} className="space-y-6">
        {/* Vue Liste */}
        <TabsContent value="list" className="space-y-4">
          {sessions.map((session) => (
            <AgendaSessionCard key={session.id} session={session} />
          ))}

          {sessions.length === 0 && (
            <Card className="p-12 text-center">
              <div className="text-muted-foreground">
                <CalendarIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Aucune formation trouvée</p>
                <p className="text-sm">Essayez de modifier vos critères de recherche</p>
              </div>
            </Card>
          )}
        </TabsContent>

        {/* Vue Calendrier */}
        <TabsContent value="calendar">
          <EnhancedCalendarComponent />
        </TabsContent>
        {/* Vue Timeline */}
        <TabsContent value="timeline">
          <AgendaTimelineView sessions={sessions} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AgendaCalendar;
