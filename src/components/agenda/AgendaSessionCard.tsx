
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  MapPin, 
  Users, 
  User, 
  Star,
  ArrowRight,
  BookOpen,
  Calendar
} from 'lucide-react';

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

interface AgendaSessionCardProps {
  session: Session;
  compact?: boolean;
}

const AgendaSessionCard = ({ session, compact = false }: AgendaSessionCardProps) => {
  const navigate = useNavigate();

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

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'débutant':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'intermédiaire':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'avancé':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  const handleViewDetails = () => {
    navigate(`/agenda/${session.id}`);
  };

  const progressPercentage = (session.participants / session.maxParticipants) * 100;

  if (compact) {
    return (
      <Card className="hover:shadow-md transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <Badge className={getStatusColor(session.status)}>
                  {getStatusLabel(session.status)}
                </Badge>
                <Badge variant="outline">{session.type}</Badge>
              </div>
              <h3 className="font-semibold text-foreground mb-1">{session.title}</h3>
              <div className="flex items-center text-sm text-muted-foreground space-x-4">
                <span className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {session.startTime} - {session.endTime}
                </span>
                <span className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  {session.location}
                </span>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleViewDetails}
              className="ml-4"
            >
              Voir
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between space-y-3 md:space-y-0">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-3">
              <Badge className={getStatusColor(session.status)}>
                {getStatusLabel(session.status)}
              </Badge>
              <Badge variant="outline">{session.type}</Badge>
              <Badge className={getLevelColor(session.level)}>{session.level}</Badge>
            </div>
            
            <CardTitle className="text-xl text-foreground mb-2">
              {session.title}
            </CardTitle>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              {session.description}
            </p>
          </div>
          
          <div className="text-right">
            <div className="text-2xl font-bold text-gta-red mb-1">
              {session.price.toLocaleString()} FCFA
            </div>
            <div className="text-sm text-muted-foreground">
              Prix de la formation
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="flex items-center space-x-2 text-sm">
            <Calendar className="w-4 h-4 text-gta-red" />
            <span className="text-muted-foreground">
              {session.date.toLocaleDateString('fr-FR')}
            </span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <Clock className="w-4 h-4 text-gta-red" />
            <span className="text-muted-foreground">
              {session.startTime} - {session.endTime}
            </span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="w-4 h-4 text-gta-red" />
            <span className="text-muted-foreground">
              {session.location}
            </span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <User className="w-4 h-4 text-gta-red" />
            <span className="text-muted-foreground">
              {session.instructor}
            </span>
          </div>
        </div>
        
        {/* Barre de progression des inscriptions */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-foreground">
              Inscriptions
            </span>
            <span className="text-sm text-muted-foreground">
              {session.participants}/{session.maxParticipants} participants
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gta-red h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {session.maxParticipants - session.participants} places restantes
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            onClick={handleViewDetails}
            variant="outline"
            className="flex-1 border-gta-red text-gta-red hover:bg-gta-red hover:text-white"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Voir les détails
          </Button>
          
          <Button 
            className="flex-1 bg-gta-red hover:bg-gta-red-light text-white"
            onClick={() => navigate(`/agenda/${session.id}?action=register`)}
          >
            S'inscrire maintenant
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AgendaSessionCard;
