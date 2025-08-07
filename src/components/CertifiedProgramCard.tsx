
import React from 'react';
import { Clock, Users, Award, BookOpen, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface Module {
  id?: string;
  title: string;
  description?: string;
}

interface CertifiedProgram {
  id: string;
  title: string;
  duration: string;
  students: string;
  level: string;
  price: string;
  description: string;
  longDescription?: string;
  prerequisites?: string;
  objectives?: string[];
  outcomes?: string[];
  included?: string[];
  modules: (string | Module)[];
  certification: string;
  nextStart: string;
  featured: boolean;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface CertifiedProgramCardProps {
  program: CertifiedProgram;
}

const CertifiedProgramCard = ({ program }: CertifiedProgramCardProps) => {
  if (!program) {
    return null; // ou un composant de chargement/erreur
  }

  const IconComponent = program.icon || (() => <BookOpen className="w-6 h-6" />);

  // Utilisation directe de l'ID du programme pour la navigation
  const courseId = program.id;

  return (
    <div className={`bg-card rounded-xl p-8 shadow-lg border transition-all hover:shadow-xl hover:scale-105 ${program.featured ? 'ring-2 ring-gta-red relative' : ''}`}>
      {program.featured && (
        <div className="absolute -top-3 left-6">
          <span className="bg-gta-red text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
            <Star className="w-4 h-4 mr-1" />
            Populaire
          </span>
        </div>
      )}
      
      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gta-red/10 rounded-full flex items-center justify-center">
            {IconComponent && <IconComponent className="w-6 h-6 text-gta-red" />}
          </div>
          <h3 className="text-2xl font-bold text-foreground">{program.title}</h3>
        </div>
        <p className="text-muted-foreground mb-4">{program.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gta-red" />
            <span className="text-sm text-muted-foreground">{program.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-gta-red" />
            <span className="text-sm text-muted-foreground">{program.students}</span>
          </div>
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-gta-red" />
            <span className="text-sm text-muted-foreground">{program.level}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4 text-gta-red" />
            <span className="text-sm text-muted-foreground">Certifiant</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold mb-3 text-foreground">Modules de formation :</h4>
        <ul className="space-y-2">
          {program.modules.map((module, idx) => {
            const moduleText = typeof module === 'string' ? module : module.title;
            return (
              <li key={idx} className="flex items-start space-x-2 text-sm">
                <span className="w-1.5 h-1.5 bg-gta-red rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-muted-foreground">{moduleText}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mb-6 p-4 bg-muted/50 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">Certification :</span>
        </div>
        <p className="text-sm font-medium text-foreground mb-3">{program.certification}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Prochaine session :</span>
          <span className="text-sm font-medium text-gta-red">{program.nextStart}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-2xl font-bold text-gta-red">{program.price}</span>
          <p className="text-xs text-muted-foreground">Paiement en 3 fois possible</p>
        </div>
        <div className="flex gap-2">
          <Link to={`/training/certified/${courseId}`}>
            <Button variant="outline" size="sm" className="border-gta-red text-gta-red hover:bg-gta-red hover:text-white">
              Détails
            </Button>
          </Link>
          <Link to={`/training/certified/${courseId}/registration`}>
            <Button className="bg-gta-red hover:bg-gta-red-light text-white">
              S'inscrire
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CertifiedProgramCard;
