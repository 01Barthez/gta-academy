
import React from 'react';
import { Clock, Users, Award, Target, CheckCircle, Zap, Trophy, Calendar, BookOpen, TrendingUp, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface Program {
  name: string;
  duration: string;
  certification: string;
  level: string;
  description: string;
  price: string;
  participants: string;
  objectives: string[];
  prerequisites: string;
  included: string[];
  outcomes: string[];
  popular: boolean;
  nextSessions: string[];
}

interface EnterpriseTrainingProgramCardProps {
  program: Program;
  categoryColor: string;
}

const EnterpriseTrainingProgramCard = ({ program, categoryColor }: EnterpriseTrainingProgramCardProps) => {
  // Générer un ID pour la formation basé sur le nom
  const programId = program.name.toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-');

  return (
    <Card className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden ${program.popular ? 'ring-2 ring-gta-red' : ''}`}>
      {program.popular && (
        <div className="absolute -top-3 -right-3 z-10">
          <div className="bg-gta-red text-white px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
            <Star className="w-4 h-4 mr-1 fill-current" />
            POPULAIRE
          </div>
        </div>
      )}
      
      <div className={`absolute inset-0 bg-gradient-to-br ${categoryColor} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
      
      <CardHeader className="pb-4 relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2 group-hover:text-gta-red transition-colors">
              {program.name}
            </CardTitle>
            <Badge variant="outline" className="text-xs mb-3">
              {program.level}
            </Badge>
          </div>
        </div>
        
        <CardDescription className="text-sm leading-relaxed mb-4">
          {program.description}
        </CardDescription>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gta-red" />
            <span className="text-muted-foreground">{program.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-gta-red" />
            <span className="text-muted-foreground">{program.participants}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4 text-gta-red" />
            <span className="text-muted-foreground font-medium">{program.certification}</span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-gta-red" />
            <span className="text-gta-red font-bold">{program.price}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 relative z-10">
        {/* Objectifs */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Target className="w-4 h-4 text-gta-red" />
            <h4 className="font-semibold text-foreground">Objectifs clés :</h4>
          </div>
          <ul className="space-y-2">
            {program.objectives.slice(0, 3).map((objective, objIdx) => (
              <li key={objIdx} className="flex items-start space-x-2 text-sm">
                <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">{objective}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Inclus */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Zap className="w-4 h-4 text-gta-red" />
            <h4 className="font-semibold text-foreground">Inclus :</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {program.included.slice(0, 2).map((item, inclIdx) => (
              <span key={inclIdx} className="text-xs bg-gta-red/10 text-gta-red px-2 py-1 rounded-full">
                {item}
              </span>
            ))}
            {program.included.length > 2 && (
              <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                +{program.included.length - 2} autres
              </span>
            )}
          </div>
        </div>

        {/* Résultats attendus */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Trophy className="w-4 h-4 text-gta-red" />
            <h4 className="font-semibold text-foreground">Résultats attendus :</h4>
          </div>
          <ul className="space-y-1">
            {program.outcomes.slice(0, 2).map((outcome, outIdx) => (
              <li key={outIdx} className="flex items-center space-x-2 text-sm">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                <span className="text-muted-foreground">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Prochaines sessions */}
        <div className="bg-muted/50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Calendar className="w-4 h-4 text-gta-red" />
            <span className="text-sm font-medium text-foreground">Prochaines sessions :</span>
          </div>
          <div className="flex gap-2">
            {program.nextSessions.map((session, sessionIdx) => (
              <Badge key={sessionIdx} variant="secondary" className="text-xs">
                {session}
              </Badge>
            ))}
          </div>
        </div>

        {/* Prérequis */}
        <div className="text-xs text-muted-foreground">
          <strong>Prérequis :</strong> {program.prerequisites}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 pt-4">
          <Link to="/training/enterprise/quote" className="flex-1">
            <Button className="w-full bg-gta-red hover:bg-gta-red-light text-white">
              Demander un devis
            </Button>
          </Link>
          <Link to={`/training/enterprise/${programId}`}>
            <Button variant="outline" size="sm" className="border-gta-red text-gta-red hover:bg-gta-red hover:text-white">
              <BookOpen className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnterpriseTrainingProgramCard;
