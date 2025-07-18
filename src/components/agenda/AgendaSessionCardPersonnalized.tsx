import React, { useState } from 'react';
import { Calendar, CalendarDays, Clock, Users, MapPin, BookOpen } from 'lucide-react';
import { mockAgenda } from '@/mock/agenda.mock';

// Composants UI simulés
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-sm border border-gray-200 ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="p-6 pb-4">
    {children}
  </div>
);

const CardTitle = ({ children }) => (
  <h3 className="text-lg font-semibold text-gray-900">
    {children}
  </h3>
);

const CardContent = ({ children }) => (
  <div className="p-6 pt-0">
    {children}
  </div>
);

const TabsContent = ({ value, children }) => (
  <div className="mt-6">
    {children}
  </div>
);

const AgendaSessionCard = ({ session, compact = false }) => {
  const getTypeColor = (type) => {
    switch (type) {
      case 'Technique': return 'bg-blue-100 text-blue-800';
      case 'Management': return 'bg-green-100 text-green-800';
      case 'Design': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="font-semibold text-lg text-gray-900">{session.title}</h4>
              <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(session.type)}`}>
                {session.type}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{session.startTime} - {session.endTime}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{session.location}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>{session.instructor}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{session.participants}/{session.maxParticipants} participants</span>
              </div>
            </div>
          </div>
          
          <div className="ml-4">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <span className="text-red-600 font-bold">
                {session.date.getDate()}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const EnhancedCalendar = ({ sessions, selectedDate, onSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const daysOfWeek = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];
  
  const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  const endOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
  const startOfCalendar = new Date(startOfMonth);
  startOfCalendar.setDate(startOfCalendar.getDate() - startOfCalendar.getDay());
  
  const calendarDays = [];
  const current = new Date(startOfCalendar);
  
  for (let i = 0; i < 42; i++) {
    calendarDays.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  
  const hasSession = (date) => {
    return sessions.some(session => 
      session.date.toDateString() === date.toDateString()
    );
  };
  
  const getSessionsCount = (date) => {
    return sessions.filter(session => 
      session.date.toDateString() === date.toDateString()
    ).length;
  };
  
  const navigateMonth = (direction) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() + direction);
    setCurrentMonth(newMonth);
  };
  
  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };
  
  const isSelected = (date) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString();
  };
  
  const isCurrentMonth = (date) => {
    return date.getMonth() === currentMonth.getMonth();
  };
  
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      {/* En-tête du calendrier */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => navigateMonth(-1)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <h2 className="text-xl font-semibold text-gray-900">
          {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h2>
        
        <button
          onClick={() => navigateMonth(1)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Jours de la semaine */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendrier */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((date, index) => {
          const hasSessionToday = hasSession(date);
          const sessionCount = getSessionsCount(date);
          const isCurrentMonthDay = isCurrentMonth(date);
          const isTodayDate = isToday(date);
          const isSelectedDate = isSelected(date);
          
          return (
            <button
              key={index}
              onClick={() => onSelect(date)}
              className={`
                relative p-2 h-12 text-sm font-medium rounded-lg transition-all duration-200
                ${!isCurrentMonthDay ? 'text-gray-300' : ''}
                ${isTodayDate ? 'bg-blue-100 text-blue-800 ring-2 ring-blue-200' : ''}
                ${isSelectedDate ? 'bg-red-500 text-white ring-2 ring-red-300' : ''}
                ${hasSessionToday && !isSelectedDate ? 'bg-green-100 text-green-800 ring-1 ring-green-200' : ''}
                ${!hasSessionToday && !isTodayDate && !isSelectedDate ? 'hover:bg-gray-50' : ''}
                ${hasSessionToday && !isSelectedDate ? 'hover:bg-green-200' : ''}
              `}
            >
              <span className="block">{date.getDate()}</span>
              
              {/* Indicateur de sessions */}
              {hasSessionToday && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                  <div className={`
                    w-1.5 h-1.5 rounded-full
                    ${isSelectedDate ? 'bg-white' : 'bg-red-500'}
                  `} />
                  {sessionCount > 1 && (
                    <span className={`
                      absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center
                      ${isSelectedDate ? 'bg-white text-red-500' : ''}
                    `}>
                      {sessionCount}
                    </span>
                  )}
                </div>
              )}
            </button>
          );
        })}
      </div>
      
      {/* Légende */}
      <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-600">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-blue-100 rounded border border-blue-200" />
          <span>Aujourd'hui</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-green-100 rounded border border-green-200" />
          <span>Formations disponibles</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-red-500 rounded" />
          <span>Date sélectionnée</span>
        </div>
      </div>
    </div>
  );
};

export default function EnhancedCalendarComponent() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const sessions = mockAgenda;
  
  return (
    <TabsContent value="calendar">
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5" />
              Sélectionner une date
            </CardTitle>
          </CardHeader>
          <CardContent>
            <EnhancedCalendar
              sessions={sessions}
              selectedDate={selectedDate}
              onSelect={setSelectedDate}
            />
          </CardContent>
        </Card>
        
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <span className="text-red-600 font-bold text-lg">
                {selectedDate.getDate()}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Formations du {selectedDate.toLocaleDateString('fr-FR', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </h3>
              <p className="text-sm text-gray-600">
                {sessions.filter(session =>
                  session.date.toDateString() === selectedDate.toDateString()
                ).length} formation(s) prévue(s)
              </p>
            </div>
          </div>
          
          <div className="space-y-3">
            {sessions
              .filter(session =>
                session.date.toDateString() === selectedDate.toDateString()
              )
              .map((session) => (
                <AgendaSessionCard key={session.id} session={session} compact />
              ))
            }
            
            {sessions.filter(session =>
              session.date.toDateString() === selectedDate.toDateString()
            ).length === 0 && (
              <Card className="p-8 text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">
                      Aucune formation prévue pour cette date
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Sélectionnez une date avec des formations disponibles
                    </p>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </TabsContent>
  );
}